goog.provide('com.fulcrologic.fulcro.networking.http_remote');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('com.fulcrologic.fulcro.algorithms.transit');
goog.require('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('edn_query_language.core');
goog.require('com.fulcrologic.guardrails.core');
goog.require('goog.events');
goog.require('taoensso.timbre');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
com.fulcrologic.fulcro.networking.http_remote.xhrio_error_states = cljs.core.PersistentHashMap.fromArrays([goog.net.ErrorCode.FILE_NOT_FOUND,goog.net.ErrorCode.NO_ERROR,goog.net.ErrorCode.HTTP_ERROR,goog.net.ErrorCode.EXCEPTION,goog.net.ErrorCode.TIMEOUT,goog.net.ErrorCode.CUSTOM_ERROR,goog.net.ErrorCode.ACCESS_DENIED,goog.net.ErrorCode.OFFLINE,goog.net.ErrorCode.ABORT,goog.net.ErrorCode.FF_SILENT_ERROR],[new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"silent","silent",-1142977785)]);
com.fulcrologic.fulcro.networking.http_remote.make_xhrio = (function com$fulcrologic$fulcro$networking$http_remote$make_xhrio(){
return (new goog.net.XhrIo());
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_dispose = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_dispose(xhrio){
return xhrio.dispose();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_enable_progress_events = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_enable_progress_events(xhrio){
return xhrio.setProgressEventsEnabled(true);
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_abort = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_abort(xhrio){
return xhrio.abort();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_send = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_send(xhrio,url,verb,body,headers){
return xhrio.send(url,verb,body,(function (){var G__61864 = headers;
if((G__61864 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__61864);
}
})());
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_status_code = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_status_code(xhrio){
return xhrio.getStatus();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_status_text = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_status_text(xhrio){
return xhrio.getStatusText();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_raw_error = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_raw_error(xhrio){
return xhrio.getLastErrorCode();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_error_code = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_error_code(xhrio){
var status = com.fulcrologic.fulcro.networking.http_remote.xhrio_status_code(xhrio);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.networking.http_remote.xhrio_error_states,com.fulcrologic.fulcro.networking.http_remote.xhrio_raw_error(xhrio),new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var error__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"http-error","http-error",-1040049553)))))?new cljs.core.Keyword(null,"network-error","network-error",-1095989517):error);
return error__$1;
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_error_text = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_error_text(xhrio){
return xhrio.getLastError();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_response = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_response(xhrio){
return xhrio.getResponse();
});
com.fulcrologic.fulcro.networking.http_remote.xhrio_response_headers = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_response_headers(xhrio){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(xhrio.getResponseHeaders());
});
/**
 * Given an xhrio progress event, returns a map with keys :loaded and :total, where loaded is the
 *   number of bytes transferred in the given phase (upload/download) and total is the total number
 *   of bytes to transfer (if known). 
 */
com.fulcrologic.fulcro.networking.http_remote.xhrio_progress = (function com$fulcrologic$fulcro$networking$http_remote$xhrio_progress(event){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),event.loaded,new cljs.core.Keyword(null,"total","total",1916810418),event.total], null);
});
/**
 * Takes the progress report from the progress network event
 *   and returns a number between 0 and 100. `phase` can be `:overall`, `:sending`, or `:receiving`. When
 *   set to `:overall` then the send phase will count for progress points between 0 and 49, and receiving phase
 *   will account for 50 to 100. When set to :sending or :receiving the entire range will count for that phase only
 *   (i.e. once sending is complete this function would return 100 throughout the receiving phase.)
 * 
 *   If total is unknown, then this function returns 0.
 */
com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_ = (function com$fulcrologic$fulcro$networking$http_remote$progress_PERCENT_(var_args){
var G__61872 = arguments.length;
switch (G__61872) {
case 1:
return com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$1 = (function (progress){
return com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2(progress,new cljs.core.Keyword(null,"overall","overall",-704031008));
});

com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2 = (function (progress,phase){
var current_phase = (function (){var G__61880 = progress;
if((G__61880 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"progress-phase","progress-phase",186626618).cljs$core$IFn$_invoke$arity$1(G__61880);
}
})();
var map__61876 = (function (){var G__61881 = progress;
var G__61881__$1 = (((G__61881 == null))?null:new cljs.core.Keyword(null,"progress-event","progress-event",1690048087).cljs$core$IFn$_invoke$arity$1(G__61881));
if((G__61881__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.http_remote.xhrio_progress(G__61881__$1);
}
})();
var map__61876__$1 = (((((!((map__61876 == null))))?(((((map__61876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61876):map__61876);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61876__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),(0));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61876__$1,new cljs.core.Keyword(null,"total","total",1916810418),(0));
var vec__61877 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"complete","complete",-500388775)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"failed","failed",-1397425762)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"sending","sending",-1806704862))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overall","overall",-704031008),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(49)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"receiving","receiving",829203724))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overall","overall",-704031008),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"sending","sending",-1806704862))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sending","sending",-1806704862),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"receiving","receiving",829203724))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sending","sending",-1806704862),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"sending","sending",-1806704862))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receiving","receiving",829203724),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"receiving","receiving",829203724))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receiving","receiving",829203724),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null):null))))))));
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61877,(0),null);
var max_pct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61877,(1),null);
var slope = (max_pct - base);
var x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),total))?(1):(loaded / total));
if((slope === (0))){
return (100);
} else {
return Math.floor((base + (x * slope)));
}
});

com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.networking.http_remote.response_types = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),"",new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),"arraybuffer",new cljs.core.Keyword(null,"blob","blob",1636965233),"blob",new cljs.core.Keyword(null,"document","document",-1329188687),"document",new cljs.core.Keyword(null,"text","text",-1790561697),"text"], null);
com.fulcrologic.fulcro.networking.http_remote.legal_response_types = cljs.core.set(cljs.core.keys(com.fulcrologic.fulcro.networking.http_remote.response_types));
com.fulcrologic.fulcro.networking.http_remote.desired_response_type = (function com$fulcrologic$fulcro$networking$http_remote$desired_response_type(p__61893){
var map__61894 = p__61893;
var map__61894__$1 = (((((!((map__61894 == null))))?(((((map__61894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61894):map__61894);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61894__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var nodes = (function (){var G__61899 = body;
var G__61899__$1 = (((G__61899 == null))?null:edn_query_language.core.query__GT_ast(G__61899));
if((G__61899__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__61899__$1);
}
})();
var cnt = cljs.core.count(nodes);
var alt = cljs.core.some(((function (nodes,cnt,map__61894,map__61894__$1,body){
return (function (p1__61889_SHARP_){
return new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__61889_SHARP_));
});})(nodes,cnt,map__61894,map__61894__$1,body))
,nodes);
if(cljs.core.truth_((function (){var and__4120__auto__ = alt;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt);
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (nodes,cnt,alt,map__61894,map__61894__$1,body){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempt to request alternate response from HTTP remote from multiple items in a single transaction. This could mean more than one transaction got combined into a single request."], null);
});})(nodes,cnt,alt,map__61894,map__61894__$1,body))
,null)),null,-712193467);
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = alt;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cnt)) && (cljs.core.contains_QMARK_(com.fulcrologic.fulcro.networking.http_remote.legal_response_types,alt)));
} else {
return and__4120__auto__;
}
})())){
var node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.first(nodes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-type","com.fulcrologic.fulcro.networking.http-remote/response-type",-1295274878));
var updated_body = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_query(node)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_body,alt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body,new cljs.core.Keyword(null,"default","default",-1987822328)], null);
}
});
/**
 * Client Remote Middleware to add transit encoding for normal Fulcro requests. Sets the content type and transforms an EDN
 *   body to a transit+json encoded body. addl-transit-handlers is a map from data type to transit handler (like
 *   you would pass using the `:handlers` option of transit). The additional handlers are used to encode new data types
 *   into transit. transit-transformation is a function of one argument returning a transformed transit value (like you
 *   would pass using the `:transform` option of transit). See transit documentation for more details.
 */
com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request = (function com$fulcrologic$fulcro$networking$http_remote$wrap_fulcro_request(var_args){
var G__61917 = arguments.length;
switch (G__61917) {
case 3:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$3 = (function (handler,addl_transit_handlers,transit_transformation){
var writer = com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1((function (){var G__61923 = cljs.core.PersistentArrayMap.EMPTY;
var G__61923__$1 = (cljs.core.truth_(addl_transit_handlers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61923,new cljs.core.Keyword(null,"handlers","handlers",79528781),addl_transit_handlers):G__61923);
if(cljs.core.truth_(transit_transformation)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61923__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),transit_transformation);
} else {
return G__61923__$1;
}
})());
return ((function (writer){
return (function (p__61924){
var map__61925 = p__61924;
var map__61925__$1 = (((((!((map__61925 == null))))?(((((map__61925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61925):map__61925);
var request = map__61925__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61925__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61925__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__61927 = com.fulcrologic.fulcro.networking.http_remote.desired_response_type(request);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61927,(0),null);
var response_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61927,(1),null);
var body__$2 = cognitect.transit.write(writer,body__$1);
var headers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"Content-Type","application/transit+json");
var G__61930 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$2,new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),response_type], null)], 0));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__61930) : handler.call(null,G__61930));
});
;})(writer))
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$2 = (function (handler,addl_transit_handlers){
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$3(handler,addl_transit_handlers,null);
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$3(handler,null,null);
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,null,null);
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$lang$maxFixedArity = 3;

/**
 * Client remote request middleware. This middleware can be added to add an X-CSRF-Token header to the request.
 */
com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token = (function com$fulcrologic$fulcro$networking$http_remote$wrap_csrf_token(var_args){
var G__61941 = arguments.length;
switch (G__61941) {
case 1:
return com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$core$IFn$_invoke$arity$1 = (function (csrf_token){
return com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,csrf_token);
});

com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$core$IFn$_invoke$arity$2 = (function (handler,csrf_token){
return (function (request){
var G__61942 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(request,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.assoc,"X-CSRF-Token",csrf_token);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__61942) : handler.call(null,G__61942));
});
});

com.fulcrologic.fulcro.networking.http_remote.wrap_csrf_token.cljs$lang$maxFixedArity = 2;

/**
 * Client remote middleware to transform a network response to a standard Fulcro form.
 * 
 *   This returns a function that will decode a transit response iff the resulting status code is 200 and the
 *   body is not empty. For errant status codes and empty body: the response body will become an empty map.
 * 
 *   No arguments: Returns a function that can process responses, that is not further chained.
 *   handler: If supplied, the result of this transformation will be passed through the `handler`.
 *   addl-transit-handlers is equivalent to the :handlers option in transit: a map from data type to handler.
 *   
 */
com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response = (function com$fulcrologic$fulcro$networking$http_remote$wrap_fulcro_response(var_args){
var G__61946 = arguments.length;
switch (G__61946) {
case 0:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$2(handler,null);
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$2 = (function (handler,addl_transit_handlers){
var base_handlers = cljs.core.PersistentArrayMap.EMPTY;
var handlers = ((cljs.core.map_QMARK_(addl_transit_handlers))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_handlers,addl_transit_handlers], 0)):base_handlers);
var reader = com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null));
return ((function (base_handlers,handlers,reader){
return (function com$fulcrologic$fulcro$networking$http_remote$fulcro_response_handler(p__61951){
var map__61955 = p__61951;
var map__61955__$1 = (((((!((map__61955 == null))))?(((((map__61955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61955):map__61955);
var response = map__61955__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var outgoing_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368));
var G__61963 = (function (){var map__61964 = outgoing_request;
var map__61964__$1 = (((((!((map__61964 == null))))?(((((map__61964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61964):map__61964);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61964__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),response_type)){
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network-error","network-error",-1095989517),error)){
return response;
} else {
var new_body = ((clojure.string.blank_QMARK_(body))?cljs.core.PersistentArrayMap.EMPTY:cognitect.transit.read(reader,body));
var response__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),new_body);
return response__$1;
}
}catch (e61966){var e = e61966;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.networking.http-remote",null,182,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__61964,map__61964__$1,response_type,map__61955,map__61955__$1,response,body,error,outgoing_request,base_handlers,handlers,reader){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transit decode failed!"], null);
});})(e,map__61964,map__61964__$1,response_type,map__61955,map__61955__$1,response,body,error,outgoing_request,base_handlers,handlers,reader))
,null)),null,647386954);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(417),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"body was either not transit or you have not installed the correct transit read/write handlers."], 0));
}} else {
return response;
}
})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__61963) : handler.call(null,G__61963));
});
;})(base_handlers,handlers,reader))
});

com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$lang$maxFixedArity = 2;

/**
 * Generate a response map from the status of the given xhrio object, which could be in a complete or error state.
 */
com.fulcrologic.fulcro.networking.http_remote.extract_response = (function com$fulcrologic$fulcro$networking$http_remote$extract_response(tx,request,xhrio){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","request","com.fulcrologic.fulcro.networking.http-remote/request",2101891015),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","xhrio","com.fulcrologic.fulcro.networking.http-remote/xhrio",1735058914),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response","com.fulcrologic.fulcro.networking.http-remote/response",1950226596)], null);

try{return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),tx,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368),request,new cljs.core.Keyword(null,"headers","headers",-835030129),com.fulcrologic.fulcro.networking.http_remote.xhrio_response_headers(xhrio),new cljs.core.Keyword(null,"body","body",-2049205669),com.fulcrologic.fulcro.networking.http_remote.xhrio_response(xhrio),new cljs.core.Keyword(null,"status-code","status-code",-1060410130),com.fulcrologic.fulcro.networking.http_remote.xhrio_status_code(xhrio),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),com.fulcrologic.fulcro.networking.http_remote.xhrio_status_text(xhrio),new cljs.core.Keyword(null,"error","error",-978969032),com.fulcrologic.fulcro.networking.http_remote.xhrio_error_code(xhrio),new cljs.core.Keyword(null,"error-text","error-text",2021893718),com.fulcrologic.fulcro.networking.http_remote.xhrio_error_text(xhrio)], null);
}catch (e61970){var e = e61970;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,200,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to extract response from XhrIO Object",e], null);
});})(e))
,null)),null,-1240906303);

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),tx,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368),request,new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(0),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Internal Exception",new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"error-text","error-text",2021893718),"Internal Exception from XHRIO"], null);
}});
/**
 * Returns true if the given response looks like a low-level network error.
 */
com.fulcrologic.fulcro.networking.http_remote.was_network_error_QMARK_ = (function com$fulcrologic$fulcro$networking$http_remote$was_network_error_QMARK_(p__61973){
var map__61974 = p__61973;
var map__61974__$1 = (((((!((map__61974 == null))))?(((((map__61974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61974):map__61974);
var status_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61974__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61974__$1,new cljs.core.Keyword(null,"error","error",-978969032));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response","com.fulcrologic.fulcro.networking.http-remote/response",1950226596),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.boolean$(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status_code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-error","http-error",-1040049553),error))));
});
com.fulcrologic.fulcro.networking.http_remote.clear_request_STAR_ = (function com$fulcrologic$fulcro$networking$http_remote$clear_request_STAR_(active_requests,id,xhrio){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","active-requests","com.fulcrologic.fulcro.networking.http-remote/active-requests",741863701),cljs.core.any_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","xhrio","com.fulcrologic.fulcro.networking.http-remote/xhrio",1735058914),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.set_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__61984){
return cljs.core.map_QMARK_(G__61984);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__31557__auto__,v__31558__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__31558__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null);

if(cljs.core.every_QMARK_((function (p1__61980_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio,p1__61980_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_requests,id))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(active_requests,id);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(active_requests,id,cljs.core.disj,xhrio);
}
});
com.fulcrologic.fulcro.networking.http_remote.response_extractor_STAR_ = (function com$fulcrologic$fulcro$networking$http_remote$response_extractor_STAR_(response_middleware,edn,real_request,xhrio){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-middleware","com.fulcrologic.fulcro.networking.http-remote/response-middleware",-2107912072),cljs.core.any_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","request","com.fulcrologic.fulcro.networking.http-remote/request",2101891015),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","xhrio","com.fulcrologic.fulcro.networking.http-remote/xhrio",1735058914),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response","com.fulcrologic.fulcro.networking.http-remote/response",1950226596)], null);

return (function (){
var r = com.fulcrologic.fulcro.networking.http_remote.extract_response(edn,real_request,xhrio);
try{return (response_middleware.cljs$core$IFn$_invoke$arity$1 ? response_middleware.cljs$core$IFn$_invoke$arity$1(r) : response_middleware.call(null,r));
}catch (e61990){var e = e61990;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,231,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,r){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client response middleware threw an exception. ",e,". Defaulting to raw response."], null);
});})(e,r))
,null)),null,216251630);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(r)))?new cljs.core.Keyword(null,"middleware-failure","middleware-failure",-1809927973):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"middleware-exception","middleware-exception",1033843204),e], null)], 0));
}});
});
com.fulcrologic.fulcro.networking.http_remote.cleanup_routine_STAR_ = (function com$fulcrologic$fulcro$networking$http_remote$cleanup_routine_STAR_(abort_id,active_requests,xhrio){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","active-requests","com.fulcrologic.fulcro.networking.http-remote/active-requests",741863701),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","xhrio","com.fulcrologic.fulcro.networking.http-remote/xhrio",1735058914),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.fn_QMARK_], null);

return (function (){
if(cljs.core.truth_(abort_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(active_requests,com.fulcrologic.fulcro.networking.http_remote.clear_request_STAR_,abort_id,xhrio);
} else {
}

return com.fulcrologic.fulcro.networking.http_remote.xhrio_dispose(xhrio);
});
});
/**
 * Returns a (fn [evt] ) that pulls the response, runs it through middleware, and reports
 * the appropriate results to the raw-ok-handler, and progress-routine. If the middleware fails,
 * it will instaed report to the error-routine (which in turn will report to the raw error handler)
 */
com.fulcrologic.fulcro.networking.http_remote.ok_routine_STAR_ = (function com$fulcrologic$fulcro$networking$http_remote$ok_routine_STAR_(progress_routine,get_response_fn,raw_ok_handler,error_routine){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return (function (evt){
var map__62002 = (get_response_fn.cljs$core$IFn$_invoke$arity$0 ? get_response_fn.cljs$core$IFn$_invoke$arity$0() : get_response_fn.call(null));
var map__62002__$1 = (((((!((map__62002 == null))))?(((((map__62002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62002):map__62002);
var r = map__62002__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62002__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var middleware_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62002__$1,new cljs.core.Keyword(null,"middleware-exception","middleware-exception",1033843204));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"middleware-failure","middleware-failure",-1809927973))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,253,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62002,map__62002__$1,r,error,middleware_exception){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client middleware threw an exception",middleware_exception], null);
});})(map__62002,map__62002__$1,r,error,middleware_exception))
,null)),null,-1552928004);

var G__62008_62160 = new cljs.core.Keyword(null,"failed","failed",-1397425762);
var G__62009_62161 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__62008_62160,G__62009_62161) : progress_routine.call(null,G__62008_62160,G__62009_62161));

return (error_routine.cljs$core$IFn$_invoke$arity$1 ? error_routine.cljs$core$IFn$_invoke$arity$1(r) : error_routine.call(null,r));
} else {
var G__62011_62166 = new cljs.core.Keyword(null,"complete","complete",-500388775);
var G__62012_62167 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__62011_62166,G__62012_62167) : progress_routine.call(null,G__62011_62166,G__62012_62167));

return (raw_ok_handler.cljs$core$IFn$_invoke$arity$1 ? raw_ok_handler.cljs$core$IFn$_invoke$arity$1(r) : raw_ok_handler.call(null,r));
}
});
});
/**
 * Return a (fn [phase progress-event]) that calls the raw update function with progress and response data merged
 *   together as a response.
 */
com.fulcrologic.fulcro.networking.http_remote.progress_routine_STAR_ = (function com$fulcrologic$fulcro$networking$http_remote$progress_routine_STAR_(get_response_fn,raw_update_fn){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.fn_QMARK_], null);

return (function com$fulcrologic$fulcro$networking$http_remote$progress_routine_STAR__$_progress_fn(phase,evt){
if(cljs.core.truth_(raw_update_fn)){
var G__62013 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress-phase","progress-phase",186626618),phase,new cljs.core.Keyword(null,"progress-event","progress-event",1690048087),evt], null),(get_response_fn.cljs$core$IFn$_invoke$arity$0 ? get_response_fn.cljs$core$IFn$_invoke$arity$0() : get_response_fn.call(null))], 0));
return (raw_update_fn.cljs$core$IFn$_invoke$arity$1 ? raw_update_fn.cljs$core$IFn$_invoke$arity$1(G__62013) : raw_update_fn.call(null,G__62013));
} else {
return null;
}
});
});
/**
 * Returns a (fn [xhrio-evt]) that pulls the progress and reports it to the progress routine and the raw
 *   error handler.
 */
com.fulcrologic.fulcro.networking.http_remote.error_routine_STAR_ = (function com$fulcrologic$fulcro$networking$http_remote$error_routine_STAR_(get_response,ok_routine,progress_routine,raw_error_handler){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.fn_QMARK_], null);

return (function (evt){
var r = (get_response.cljs$core$IFn$_invoke$arity$0 ? get_response.cljs$core$IFn$_invoke$arity$0() : get_response.call(null));
var G__62017_62174 = new cljs.core.Keyword(null,"failed","failed",-1397425762);
var G__62018_62175 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__62017_62174,G__62018_62175) : progress_routine.call(null,G__62017_62174,G__62018_62175));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status-code","status-code",-1060410130).cljs$core$IFn$_invoke$arity$1(r))){
return (ok_routine.cljs$core$IFn$_invoke$arity$1 ? ok_routine.cljs$core$IFn$_invoke$arity$1(evt) : ok_routine.call(null,evt));
} else {
return (raw_error_handler.cljs$core$IFn$_invoke$arity$1 ? raw_error_handler.cljs$core$IFn$_invoke$arity$1(r) : raw_error_handler.call(null,r));
}
});
});
/**
 * Create a remote that (by default) communicates with the given url (which defaults to `/api`).
 * 
 *   The request middleware is a `(fn [request] modified-request)`. The `request` will have `:url`, `:body`, `:method`, and `:headers`. The
 *   request middleware defaults to `wrap-fulcro-request` (which encodes the request in transit+json). The result of this
 *   middleware chain on the outgoing request becomes the real outgoing request. It is allowed to modify the `url`.
 *   If the the request middleware returns a corrupt request or throws an exception then the remote code
 *   will immediately abort the request. The return value of the middleware will be used to generate a request to `:url`,
 *   with `:method` (e.g. :post), and the given headers. The body will be sent as-is without further translation.
 * 
 *   `response-middleware` is a function that returns a function `(fn [response] mod-response)` and
 *   defaults to `wrap-fulcro-response` which decodes the raw response and transforms it back to a response that Fulcro can merge.
 *   The response will be a map containing the `:transaction`, which is the
 *   original Fulcro EDN request; `:outgoing-request` which is the exact request sent on the network; `:body`, which
 *   is the raw data of the response. Additionally, there will be one or more of the following to indicate low-level
 *   details of the result: `:status-code`, `:status-text`, `:error-code` (one of :none, :exception, :http-error, :abort, or :timeout),
 *   and `:error-text`.  Middleware is allowed to morph any of this to suit its needs.
 * 
 *   A result with a 200 status code will result in a merge using the resulting response's `:transaction` as the query,
 *   and the `:body` as the EDN to merge. If the status code is anything else then the details of the response will be
 *   used when triggering the built-in error handling (e.g. fallbacks, global error handler, etc.).
 */
com.fulcrologic.fulcro.networking.http_remote.fulcro_http_remote = (function com$fulcrologic$fulcro$networking$http_remote$fulcro_http_remote(p__62025){
var map__62026 = p__62025;
var map__62026__$1 = (((((!((map__62026 == null))))?(((((map__62026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62026):map__62026);
var options = map__62026__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62026__$1,new cljs.core.Keyword(null,"url","url",276297046),"/api");
var request_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62026__$1,new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0());
var response_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62026__$1,new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),com.fulcrologic.fulcro.networking.http_remote.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0());
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","url","com.fulcrologic.fulcro.networking.http-remote/url",-1403244238),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","request-middleware","com.fulcrologic.fulcro.networking.http-remote/request-middleware",-2030599211),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-middleware","com.fulcrologic.fulcro.networking.http-remote/response-middleware",-2107912072)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (G__62028){
return cljs.core.map_QMARK_(G__62028);
});})(map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
], null),((function (map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (G__62028){
return cljs.core.map_QMARK_(G__62028);
});})(map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","url","com.fulcrologic.fulcro.networking.http-remote/url",-1403244238),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","request-middleware","com.fulcrologic.fulcro.networking.http-remote/request-middleware",-2030599211),new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","response-middleware","com.fulcrologic.fulcro.networking.http-remote/response-middleware",-2107912072)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.http-remote","fulcro-remote","com.fulcrologic.fulcro.networking.http-remote/fulcro-remote",1282855379)], null);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"transmit!","transmit!",-107149039),((function (map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function com$fulcrologic$fulcro$networking$http_remote$fulcro_http_remote_$_transmit_BANG_(p__62036,p__62037){
var map__62038 = p__62036;
var map__62038__$1 = (((((!((map__62038 == null))))?(((((map__62038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62038):map__62038);
var active_requests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62038__$1,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961));
var map__62039 = p__62037;
var map__62039__$1 = (((((!((map__62039 == null))))?(((((map__62039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62039):map__62039);
var send_node = map__62039__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var edn = edn_query_language.core.ast__GT_query(ast);
var ok_handler = ((function (edn,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (result){
try{return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result) : result_handler.call(null,result));
}catch (e62046){var e = e62046;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,316,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,edn,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Result handler for remote",url,"failed with an exception."], null);
});})(e,edn,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,null)),null,447054998);
}});})(edn,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
var progress_handler = ((function (edn,ok_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (update_msg){
var msg = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"raw-progress","raw-progress",-329574415),cljs.core.select_keys(update_msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-phase","progress-phase",186626618),new cljs.core.Keyword(null,"progress-event","progress-event",1690048087)], null)),new cljs.core.Keyword(null,"overall-progress","overall-progress",-1283185891),com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2(update_msg,new cljs.core.Keyword(null,"overall","overall",-704031008)),new cljs.core.Keyword(null,"receive-progress","receive-progress",246867556),com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2(update_msg,new cljs.core.Keyword(null,"receiving","receiving",829203724)),new cljs.core.Keyword(null,"send-progress","send-progress",1473116309),com.fulcrologic.fulcro.networking.http_remote.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2(update_msg,new cljs.core.Keyword(null,"sending","sending",-1806704862))], null);
if(cljs.core.truth_(update_handler)){
try{return (update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(msg) : update_handler.call(null,msg));
}catch (e62051){var e = e62051;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,327,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,msg,edn,ok_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Update handler for remote",url,"failed with an exception."], null);
});})(e,msg,edn,ok_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,null)),null,920749362);
}} else {
return null;
}
});})(edn,ok_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
var error_handler = ((function (edn,ok_handler,progress_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (error_result){
try{var G__62053 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500)], null)], 0));
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__62053) : result_handler.call(null,G__62053));
}catch (e62052){var e = e62052;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,332,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,edn,ok_handler,progress_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error handler for remote",url,"failed with an exception."], null);
});})(e,edn,ok_handler,progress_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,null)),null,-575297873);
}});})(edn,ok_handler,progress_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
var temp__5733__auto__ = (function (){try{var G__62055 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),edn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null);
return (request_middleware.cljs$core$IFn$_invoke$arity$1 ? request_middleware.cljs$core$IFn$_invoke$arity$1(G__62055) : request_middleware.call(null,G__62055));
}catch (e62054){var e = e62054;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.http-remote",null,336,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send aborted due to middleware failure "], null);
});})(e,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,null)),null,2084079088);

return null;
}})();
if(cljs.core.truth_(temp__5733__auto__)){
var real_request = temp__5733__auto__;
var abort_id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(send_node));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(send_node));
}
})();
var xhrio = com.fulcrologic.fulcro.networking.http_remote.make_xhrio();
var map__62056 = real_request;
var map__62056__$1 = (((((!((map__62056 == null))))?(((((map__62056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62056):map__62056);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var url__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"method","method",55703592));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var http_verb = clojure.string.upper_case(cljs.core.name((function (){var or__4131__auto__ = method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"post","post",269697687);
}
})()));
var extract_response = ((function (abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return com.fulcrologic.fulcro.networking.http_remote.extract_response(body,real_request,xhrio);
});})(abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
var extract_response_mw = com.fulcrologic.fulcro.networking.http_remote.response_extractor_STAR_(response_middleware,edn,real_request,xhrio);
var gc_network_resources = com.fulcrologic.fulcro.networking.http_remote.cleanup_routine_STAR_(abort_id,active_requests,xhrio);
var progress_routine = com.fulcrologic.fulcro.networking.http_remote.progress_routine_STAR_(extract_response,progress_handler);
var ok_routine = com.fulcrologic.fulcro.networking.http_remote.ok_routine_STAR_(progress_routine,extract_response_mw,ok_handler,error_handler);
var error_routine = com.fulcrologic.fulcro.networking.http_remote.error_routine_STAR_(extract_response_mw,ok_routine,progress_routine,error_handler);
var with_cleanup = ((function (abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (f){
return ((function (abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (evt){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(evt) : f.call(null,evt));
}finally {(gc_network_resources.cljs$core$IFn$_invoke$arity$0 ? gc_network_resources.cljs$core$IFn$_invoke$arity$0() : gc_network_resources.call(null));
}});
;})(abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
});})(abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
if(cljs.core.truth_(abort_id)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.networking.http-remote",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Registering abort-id",abort_id], null);
});})(abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,null)),null,-869622787);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(active_requests,cljs.core.update,abort_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xhrio], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = (com.fulcrologic.fulcro.networking.http_remote.legal_response_types.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.networking.http_remote.legal_response_types.cljs$core$IFn$_invoke$arity$1(response_type) : com.fulcrologic.fulcro.networking.http_remote.legal_response_types.call(null,response_type));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),response_type);
} else {
return and__4120__auto__;
}
})())){
xhrio.setResponseType(cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.networking.http_remote.response_types,response_type));
} else {
}

if(cljs.core.truth_(progress_handler)){
com.fulcrologic.fulcro.networking.http_remote.xhrio_enable_progress_events(xhrio);

var G__62058_62220 = xhrio;
var G__62059_62221 = goog.net.EventType.DOWNLOAD_PROGRESS;
var G__62060_62222 = ((function (G__62058_62220,G__62059_62221,abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (p1__62022_SHARP_){
var G__62061 = new cljs.core.Keyword(null,"receiving","receiving",829203724);
var G__62062 = p1__62022_SHARP_;
return (progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__62061,G__62062) : progress_routine.call(null,G__62061,G__62062));
});})(G__62058_62220,G__62059_62221,abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
goog.events.listen(G__62058_62220,G__62059_62221,G__62060_62222);

var G__62063_62225 = xhrio;
var G__62064_62226 = goog.net.EventType.UPLOAD_PROGRESS;
var G__62065_62227 = ((function (G__62063_62225,G__62064_62226,abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (p1__62023_SHARP_){
var G__62066 = new cljs.core.Keyword(null,"sending","sending",-1806704862);
var G__62067 = p1__62023_SHARP_;
return (progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__62066,G__62067) : progress_routine.call(null,G__62066,G__62067));
});})(G__62063_62225,G__62064_62226,abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
;
goog.events.listen(G__62063_62225,G__62064_62226,G__62065_62227);
} else {
}

var G__62068_62229 = xhrio;
var G__62069_62230 = goog.net.EventType.SUCCESS;
var G__62070_62231 = with_cleanup(ok_routine);
goog.events.listen(G__62068_62229,G__62069_62230,G__62070_62231);

var G__62071_62234 = xhrio;
var G__62072_62235 = goog.net.EventType.ABORT;
var G__62073_62236 = with_cleanup(((function (G__62071_62234,G__62072_62235,abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return ok_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null));
});})(G__62071_62234,G__62072_62235,abort_id,xhrio,map__62056,map__62056__$1,body,headers,url__$1,method,response_type,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5733__auto__,edn,ok_handler,progress_handler,error_handler,map__62038,map__62038__$1,active_requests,map__62039,map__62039__$1,send_node,ast,result_handler,update_handler,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
);
goog.events.listen(G__62071_62234,G__62072_62235,G__62073_62236);

var G__62075_62242 = xhrio;
var G__62076_62243 = goog.net.EventType.ERROR;
var G__62077_62244 = with_cleanup(error_routine);
goog.events.listen(G__62075_62242,G__62076_62243,G__62077_62244);

return com.fulcrologic.fulcro.networking.http_remote.xhrio_send(xhrio,url__$1,http_verb,body,headers);
} else {
return error_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"error-text","error-text",2021893718),"Transmission was aborted because the request middleware returned nil or threw an exception"], null));
}
});})(map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,new cljs.core.Keyword(null,"abort!","abort!",-220883953),((function (map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function com$fulcrologic$fulcro$networking$http_remote$fulcro_http_remote_$_abort_BANG_(this$,id){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"active-requests","active-requests",1354177961).cljs$core$IFn$_invoke$arity$1(this$)),id);
if(cljs.core.truth_(temp__5733__auto__)){
var xhrios = temp__5733__auto__;
var seq__62080 = cljs.core.seq(xhrios);
var chunk__62081 = null;
var count__62082 = (0);
var i__62083 = (0);
while(true){
if((i__62083 < count__62082)){
var xhrio = chunk__62081.cljs$core$IIndexed$_nth$arity$2(null,i__62083);
com.fulcrologic.fulcro.networking.http_remote.xhrio_abort(xhrio);


var G__62249 = seq__62080;
var G__62250 = chunk__62081;
var G__62251 = count__62082;
var G__62252 = (i__62083 + (1));
seq__62080 = G__62249;
chunk__62081 = G__62250;
count__62082 = G__62251;
i__62083 = G__62252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62080);
if(temp__5735__auto__){
var seq__62080__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62080__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62080__$1);
var G__62256 = cljs.core.chunk_rest(seq__62080__$1);
var G__62257 = c__4550__auto__;
var G__62258 = cljs.core.count(c__4550__auto__);
var G__62259 = (0);
seq__62080 = G__62256;
chunk__62081 = G__62257;
count__62082 = G__62258;
i__62083 = G__62259;
continue;
} else {
var xhrio = cljs.core.first(seq__62080__$1);
com.fulcrologic.fulcro.networking.http_remote.xhrio_abort(xhrio);


var G__62260 = cljs.core.next(seq__62080__$1);
var G__62261 = null;
var G__62262 = (0);
var G__62263 = (0);
seq__62080 = G__62260;
chunk__62081 = G__62261;
count__62082 = G__62262;
i__62083 = G__62263;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.networking.http-remote",null,370,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto__,map__62026,map__62026__$1,options,url,request_middleware,response_middleware){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to abort. No active request with abort id:",id], null);
});})(temp__5733__auto__,map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
,null)),null,-1657767566);
}
});})(map__62026,map__62026__$1,options,url,request_middleware,response_middleware))
], null)], 0));
});
/**
 * Returns a number between 0 and 100 for the overall progress.  Use in a `progress-action` section of your mutation
 *   when using the http-remote to monitor network progress.
 */
com.fulcrologic.fulcro.networking.http_remote.overall_progress = (function com$fulcrologic$fulcro$networking$http_remote$overall_progress(mutation_env){
var G__62087 = mutation_env;
var G__62087__$1 = (((G__62087 == null))?null:new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(G__62087));
if((G__62087__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"overall-progress","overall-progress",-1283185891).cljs$core$IFn$_invoke$arity$1(G__62087__$1);
}
});
/**
 * Returns a number between 0 and 100 for the receive progress.  Use in a `progress-action` section of your mutation
 *   when using the http-remote to monitor network progress.
 */
com.fulcrologic.fulcro.networking.http_remote.receive_progress = (function com$fulcrologic$fulcro$networking$http_remote$receive_progress(mutation_env){
var G__62088 = mutation_env;
var G__62088__$1 = (((G__62088 == null))?null:new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(G__62088));
if((G__62088__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"receive-progress","receive-progress",246867556).cljs$core$IFn$_invoke$arity$1(G__62088__$1);
}
});
/**
 * Returns a number between 0 and 100 for the send progress.  Use in a `progress-action` section of your mutation
 *   when using the http-remote to monitor network progress.
 */
com.fulcrologic.fulcro.networking.http_remote.send_progress = (function com$fulcrologic$fulcro$networking$http_remote$send_progress(mutation_env){
var G__62090 = mutation_env;
var G__62090__$1 = (((G__62090 == null))?null:new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(G__62090));
if((G__62090__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"send-progress","send-progress",1473116309).cljs$core$IFn$_invoke$arity$1(G__62090__$1);
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.networking.http_remote.js.map
