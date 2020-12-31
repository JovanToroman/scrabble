goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56829 = arguments.length;
var i__4731__auto___56830 = (0);
while(true){
if((i__4731__auto___56830 < len__4730__auto___56829)){
args__4736__auto__.push((arguments[i__4731__auto___56830]));

var G__56831 = (i__4731__auto___56830 + (1));
i__4731__auto___56830 = G__56831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56578){
var G__56579 = cljs.core.first(seq56578);
var seq56578__$1 = cljs.core.next(seq56578);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56579,seq56578__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__56597){
var map__56598 = p__56597;
var map__56598__$1 = (((((!((map__56598 == null))))?(((((map__56598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56598):map__56598);
var src = map__56598__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56598__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56598__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56600 = cljs.core.seq(sources);
var chunk__56601 = null;
var count__56602 = (0);
var i__56603 = (0);
while(true){
if((i__56603 < count__56602)){
var map__56616 = chunk__56601.cljs$core$IIndexed$_nth$arity$2(null,i__56603);
var map__56616__$1 = (((((!((map__56616 == null))))?(((((map__56616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56616):map__56616);
var src = map__56616__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56616__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56616__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56616__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56616__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__56866 = seq__56600;
var G__56867 = chunk__56601;
var G__56868 = count__56602;
var G__56869 = (i__56603 + (1));
seq__56600 = G__56866;
chunk__56601 = G__56867;
count__56602 = G__56868;
i__56603 = G__56869;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56600);
if(temp__5735__auto__){
var seq__56600__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56600__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56600__$1);
var G__56875 = cljs.core.chunk_rest(seq__56600__$1);
var G__56878 = c__4550__auto__;
var G__56879 = cljs.core.count(c__4550__auto__);
var G__56881 = (0);
seq__56600 = G__56875;
chunk__56601 = G__56878;
count__56602 = G__56879;
i__56603 = G__56881;
continue;
} else {
var map__56621 = cljs.core.first(seq__56600__$1);
var map__56621__$1 = (((((!((map__56621 == null))))?(((((map__56621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56621):map__56621);
var src = map__56621__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56621__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__56889 = cljs.core.next(seq__56600__$1);
var G__56890 = null;
var G__56891 = (0);
var G__56892 = (0);
seq__56600 = G__56889;
chunk__56601 = G__56890;
count__56602 = G__56891;
i__56603 = G__56892;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56625 = cljs.core.seq(js_requires);
var chunk__56626 = null;
var count__56627 = (0);
var i__56628 = (0);
while(true){
if((i__56628 < count__56627)){
var js_ns = chunk__56626.cljs$core$IIndexed$_nth$arity$2(null,i__56628);
var require_str_56894 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56894);


var G__56897 = seq__56625;
var G__56898 = chunk__56626;
var G__56899 = count__56627;
var G__56900 = (i__56628 + (1));
seq__56625 = G__56897;
chunk__56626 = G__56898;
count__56627 = G__56899;
i__56628 = G__56900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56625);
if(temp__5735__auto__){
var seq__56625__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56625__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56625__$1);
var G__56901 = cljs.core.chunk_rest(seq__56625__$1);
var G__56902 = c__4550__auto__;
var G__56903 = cljs.core.count(c__4550__auto__);
var G__56904 = (0);
seq__56625 = G__56901;
chunk__56626 = G__56902;
count__56627 = G__56903;
i__56628 = G__56904;
continue;
} else {
var js_ns = cljs.core.first(seq__56625__$1);
var require_str_56906 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56906);


var G__56907 = cljs.core.next(seq__56625__$1);
var G__56908 = null;
var G__56909 = (0);
var G__56910 = (0);
seq__56625 = G__56907;
chunk__56626 = G__56908;
count__56627 = G__56909;
i__56628 = G__56910;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__56634 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__56634) : callback.call(null,G__56634));
} else {
var G__56635 = shadow.cljs.devtools.client.env.files_url();
var G__56636 = ((function (G__56635){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__56635))
;
var G__56637 = "POST";
var G__56638 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__56639 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56635,G__56636,G__56637,G__56638,G__56639);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__56643){
var map__56644 = p__56643;
var map__56644__$1 = (((((!((map__56644 == null))))?(((((map__56644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56644):map__56644);
var msg = map__56644__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__56646 = info;
var map__56646__$1 = (((((!((map__56646 == null))))?(((((map__56646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56646):map__56646);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56646__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56646__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56649(s__56650){
return (new cljs.core.LazySeq(null,((function (map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info){
return (function (){
var s__56650__$1 = s__56650;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56650__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__56659 = cljs.core.first(xs__6292__auto__);
var map__56659__$1 = (((((!((map__56659 == null))))?(((((map__56659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56659):map__56659);
var src = map__56659__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56659__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56659__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__56650__$1,map__56659,map__56659__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56649_$_iter__56651(s__56652){
return (new cljs.core.LazySeq(null,((function (s__56650__$1,map__56659,map__56659__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info){
return (function (){
var s__56652__$1 = s__56652;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56652__$1);
if(temp__5735__auto____$1){
var s__56652__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56652__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56652__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56655 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56654 = (0);
while(true){
if((i__56654 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56654);
cljs.core.chunk_append(b__56655,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56921 = (i__56654 + (1));
i__56654 = G__56921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56655),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56649_$_iter__56651(cljs.core.chunk_rest(s__56652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56655),null);
}
} else {
var warning = cljs.core.first(s__56652__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56649_$_iter__56651(cljs.core.rest(s__56652__$2)));
}
} else {
return null;
}
break;
}
});})(s__56650__$1,map__56659,map__56659__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info))
,null,null));
});})(s__56650__$1,map__56659,map__56659__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56649(cljs.core.rest(s__56650__$1)));
} else {
var G__56926 = cljs.core.rest(s__56650__$1);
s__56650__$1 = G__56926;
continue;
}
} else {
var G__56927 = cljs.core.rest(s__56650__$1);
s__56650__$1 = G__56927;
continue;
}
} else {
return null;
}
break;
}
});})(map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info))
,null,null));
});})(map__56646,map__56646__$1,sources,compiled,map__56644,map__56644__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__56664_56929 = cljs.core.seq(warnings);
var chunk__56665_56930 = null;
var count__56666_56931 = (0);
var i__56667_56932 = (0);
while(true){
if((i__56667_56932 < count__56666_56931)){
var map__56673_56934 = chunk__56665_56930.cljs$core$IIndexed$_nth$arity$2(null,i__56667_56932);
var map__56673_56935__$1 = (((((!((map__56673_56934 == null))))?(((((map__56673_56934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56673_56934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56673_56934):map__56673_56934);
var w_56936 = map__56673_56935__$1;
var msg_56937__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673_56935__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673_56935__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673_56935__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56673_56935__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56940)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56938),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56939),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56937__$1)].join(''));


var G__56947 = seq__56664_56929;
var G__56948 = chunk__56665_56930;
var G__56949 = count__56666_56931;
var G__56950 = (i__56667_56932 + (1));
seq__56664_56929 = G__56947;
chunk__56665_56930 = G__56948;
count__56666_56931 = G__56949;
i__56667_56932 = G__56950;
continue;
} else {
var temp__5735__auto___56951 = cljs.core.seq(seq__56664_56929);
if(temp__5735__auto___56951){
var seq__56664_56952__$1 = temp__5735__auto___56951;
if(cljs.core.chunked_seq_QMARK_(seq__56664_56952__$1)){
var c__4550__auto___56953 = cljs.core.chunk_first(seq__56664_56952__$1);
var G__56954 = cljs.core.chunk_rest(seq__56664_56952__$1);
var G__56955 = c__4550__auto___56953;
var G__56956 = cljs.core.count(c__4550__auto___56953);
var G__56957 = (0);
seq__56664_56929 = G__56954;
chunk__56665_56930 = G__56955;
count__56666_56931 = G__56956;
i__56667_56932 = G__56957;
continue;
} else {
var map__56675_56958 = cljs.core.first(seq__56664_56952__$1);
var map__56675_56959__$1 = (((((!((map__56675_56958 == null))))?(((((map__56675_56958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56675_56958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56675_56958):map__56675_56958);
var w_56960 = map__56675_56959__$1;
var msg_56961__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56675_56959__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56675_56959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56675_56959__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56675_56959__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56964)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56962),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56963),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56961__$1)].join(''));


var G__56969 = cljs.core.next(seq__56664_56952__$1);
var G__56970 = null;
var G__56971 = (0);
var G__56972 = (0);
seq__56664_56929 = G__56969;
chunk__56665_56930 = G__56970;
count__56666_56931 = G__56971;
i__56667_56932 = G__56972;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info){
return (function (p__56681){
var map__56682 = p__56681;
var map__56682__$1 = (((((!((map__56682 == null))))?(((((map__56682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56682):map__56682);
var src = map__56682__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56682__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56682__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info){
return (function (p__56684){
var map__56685 = p__56684;
var map__56685__$1 = (((((!((map__56685 == null))))?(((((map__56685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56685):map__56685);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56685__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info){
return (function (p__56689){
var map__56690 = p__56689;
var map__56690__$1 = (((((!((map__56690 == null))))?(((((map__56690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56690):map__56690);
var rc = map__56690__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56690__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info){
return (function (p1__56641_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56641_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__56646,map__56646__$1,sources,compiled,warnings,map__56644,map__56644__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__56696){
var map__56697 = p__56696;
var map__56697__$1 = (((((!((map__56697 == null))))?(((((map__56697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56697):map__56697);
var msg = map__56697__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56697__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56699 = cljs.core.seq(updates);
var chunk__56701 = null;
var count__56702 = (0);
var i__56703 = (0);
while(true){
if((i__56703 < count__56702)){
var path = chunk__56701.cljs$core$IIndexed$_nth$arity$2(null,i__56703);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56741_56981 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56744_56982 = null;
var count__56745_56983 = (0);
var i__56746_56984 = (0);
while(true){
if((i__56746_56984 < count__56745_56983)){
var node_56985 = chunk__56744_56982.cljs$core$IIndexed$_nth$arity$2(null,i__56746_56984);
var path_match_56986 = shadow.cljs.devtools.client.browser.match_paths(node_56985.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56986)){
var new_link_56987 = (function (){var G__56752 = node_56985.cloneNode(true);
G__56752.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56986),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56752;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56986], 0));

goog.dom.insertSiblingAfter(new_link_56987,node_56985);

goog.dom.removeNode(node_56985);


var G__56988 = seq__56741_56981;
var G__56989 = chunk__56744_56982;
var G__56990 = count__56745_56983;
var G__56991 = (i__56746_56984 + (1));
seq__56741_56981 = G__56988;
chunk__56744_56982 = G__56989;
count__56745_56983 = G__56990;
i__56746_56984 = G__56991;
continue;
} else {
var G__56992 = seq__56741_56981;
var G__56993 = chunk__56744_56982;
var G__56994 = count__56745_56983;
var G__56995 = (i__56746_56984 + (1));
seq__56741_56981 = G__56992;
chunk__56744_56982 = G__56993;
count__56745_56983 = G__56994;
i__56746_56984 = G__56995;
continue;
}
} else {
var temp__5735__auto___56996 = cljs.core.seq(seq__56741_56981);
if(temp__5735__auto___56996){
var seq__56741_57003__$1 = temp__5735__auto___56996;
if(cljs.core.chunked_seq_QMARK_(seq__56741_57003__$1)){
var c__4550__auto___57004 = cljs.core.chunk_first(seq__56741_57003__$1);
var G__57005 = cljs.core.chunk_rest(seq__56741_57003__$1);
var G__57006 = c__4550__auto___57004;
var G__57007 = cljs.core.count(c__4550__auto___57004);
var G__57008 = (0);
seq__56741_56981 = G__57005;
chunk__56744_56982 = G__57006;
count__56745_56983 = G__57007;
i__56746_56984 = G__57008;
continue;
} else {
var node_57010 = cljs.core.first(seq__56741_57003__$1);
var path_match_57011 = shadow.cljs.devtools.client.browser.match_paths(node_57010.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57011)){
var new_link_57012 = (function (){var G__56755 = node_57010.cloneNode(true);
G__56755.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57011),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56755;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57011], 0));

goog.dom.insertSiblingAfter(new_link_57012,node_57010);

goog.dom.removeNode(node_57010);


var G__57013 = cljs.core.next(seq__56741_57003__$1);
var G__57014 = null;
var G__57015 = (0);
var G__57016 = (0);
seq__56741_56981 = G__57013;
chunk__56744_56982 = G__57014;
count__56745_56983 = G__57015;
i__56746_56984 = G__57016;
continue;
} else {
var G__57017 = cljs.core.next(seq__56741_57003__$1);
var G__57018 = null;
var G__57019 = (0);
var G__57020 = (0);
seq__56741_56981 = G__57017;
chunk__56744_56982 = G__57018;
count__56745_56983 = G__57019;
i__56746_56984 = G__57020;
continue;
}
}
} else {
}
}
break;
}


var G__57021 = seq__56699;
var G__57022 = chunk__56701;
var G__57023 = count__56702;
var G__57024 = (i__56703 + (1));
seq__56699 = G__57021;
chunk__56701 = G__57022;
count__56702 = G__57023;
i__56703 = G__57024;
continue;
} else {
var G__57025 = seq__56699;
var G__57026 = chunk__56701;
var G__57027 = count__56702;
var G__57028 = (i__56703 + (1));
seq__56699 = G__57025;
chunk__56701 = G__57026;
count__56702 = G__57027;
i__56703 = G__57028;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56699);
if(temp__5735__auto__){
var seq__56699__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56699__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56699__$1);
var G__57029 = cljs.core.chunk_rest(seq__56699__$1);
var G__57030 = c__4550__auto__;
var G__57031 = cljs.core.count(c__4550__auto__);
var G__57032 = (0);
seq__56699 = G__57029;
chunk__56701 = G__57030;
count__56702 = G__57031;
i__56703 = G__57032;
continue;
} else {
var path = cljs.core.first(seq__56699__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56756_57033 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56759_57034 = null;
var count__56760_57035 = (0);
var i__56761_57036 = (0);
while(true){
if((i__56761_57036 < count__56760_57035)){
var node_57037 = chunk__56759_57034.cljs$core$IIndexed$_nth$arity$2(null,i__56761_57036);
var path_match_57038 = shadow.cljs.devtools.client.browser.match_paths(node_57037.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57038)){
var new_link_57039 = (function (){var G__56782 = node_57037.cloneNode(true);
G__56782.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57038),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56782;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57038], 0));

goog.dom.insertSiblingAfter(new_link_57039,node_57037);

goog.dom.removeNode(node_57037);


var G__57040 = seq__56756_57033;
var G__57041 = chunk__56759_57034;
var G__57042 = count__56760_57035;
var G__57043 = (i__56761_57036 + (1));
seq__56756_57033 = G__57040;
chunk__56759_57034 = G__57041;
count__56760_57035 = G__57042;
i__56761_57036 = G__57043;
continue;
} else {
var G__57044 = seq__56756_57033;
var G__57045 = chunk__56759_57034;
var G__57046 = count__56760_57035;
var G__57047 = (i__56761_57036 + (1));
seq__56756_57033 = G__57044;
chunk__56759_57034 = G__57045;
count__56760_57035 = G__57046;
i__56761_57036 = G__57047;
continue;
}
} else {
var temp__5735__auto___57048__$1 = cljs.core.seq(seq__56756_57033);
if(temp__5735__auto___57048__$1){
var seq__56756_57049__$1 = temp__5735__auto___57048__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56756_57049__$1)){
var c__4550__auto___57050 = cljs.core.chunk_first(seq__56756_57049__$1);
var G__57051 = cljs.core.chunk_rest(seq__56756_57049__$1);
var G__57052 = c__4550__auto___57050;
var G__57053 = cljs.core.count(c__4550__auto___57050);
var G__57054 = (0);
seq__56756_57033 = G__57051;
chunk__56759_57034 = G__57052;
count__56760_57035 = G__57053;
i__56761_57036 = G__57054;
continue;
} else {
var node_57056 = cljs.core.first(seq__56756_57049__$1);
var path_match_57057 = shadow.cljs.devtools.client.browser.match_paths(node_57056.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57057)){
var new_link_57058 = (function (){var G__56783 = node_57056.cloneNode(true);
G__56783.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57057),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56783;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57057], 0));

goog.dom.insertSiblingAfter(new_link_57058,node_57056);

goog.dom.removeNode(node_57056);


var G__57059 = cljs.core.next(seq__56756_57049__$1);
var G__57060 = null;
var G__57061 = (0);
var G__57062 = (0);
seq__56756_57033 = G__57059;
chunk__56759_57034 = G__57060;
count__56760_57035 = G__57061;
i__56761_57036 = G__57062;
continue;
} else {
var G__57063 = cljs.core.next(seq__56756_57049__$1);
var G__57064 = null;
var G__57065 = (0);
var G__57066 = (0);
seq__56756_57033 = G__57063;
chunk__56759_57034 = G__57064;
count__56760_57035 = G__57065;
i__56761_57036 = G__57066;
continue;
}
}
} else {
}
}
break;
}


var G__57067 = cljs.core.next(seq__56699__$1);
var G__57068 = null;
var G__57069 = (0);
var G__57070 = (0);
seq__56699 = G__57067;
chunk__56701 = G__57068;
count__56702 = G__57069;
i__56703 = G__57070;
continue;
} else {
var G__57071 = cljs.core.next(seq__56699__$1);
var G__57072 = null;
var G__57073 = (0);
var G__57074 = (0);
seq__56699 = G__57071;
chunk__56701 = G__57072;
count__56702 = G__57073;
i__56703 = G__57074;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__56784){
var map__56785 = p__56784;
var map__56785__$1 = (((((!((map__56785 == null))))?(((((map__56785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56785):map__56785);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56785__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__56785,map__56785__$1,id,js){
return (function (){
return eval(js);
});})(map__56785,map__56785__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__56787){
var map__56788 = p__56787;
var map__56788__$1 = (((((!((map__56788 == null))))?(((((map__56788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56788):map__56788);
var msg = map__56788__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56788__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56788__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56788__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56788,map__56788__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__56790){
var map__56791 = p__56790;
var map__56791__$1 = (((((!((map__56791 == null))))?(((((map__56791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56791):map__56791);
var src = map__56791__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56791__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__56788,map__56788__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__56788,map__56788__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__56788,map__56788__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__56793){
var map__56794 = p__56793;
var map__56794__$1 = (((((!((map__56794 == null))))?(((((map__56794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56794):map__56794);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56794__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__56794,map__56794__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__56794,map__56794__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__56796){
var map__56797 = p__56796;
var map__56797__$1 = (((((!((map__56797 == null))))?(((((map__56797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56797):map__56797);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__56799){
var map__56800 = p__56799;
var map__56800__$1 = (((((!((map__56800 == null))))?(((((map__56800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56800):map__56800);
var msg = map__56800__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56800__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__56802 = type;
var G__56802__$1 = (((G__56802 instanceof cljs.core.Keyword))?G__56802.fqn:null);
switch (G__56802__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__56803 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__56804 = ((function (G__56803){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__56803))
;
var G__56805 = "POST";
var G__56806 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__56807 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56803,G__56804,G__56805,G__56806,G__56807);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e56808){var e = e56808;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___57085 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___57085)){
var s_57086 = temp__5735__auto___57085;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_57086.onclose = ((function (s_57086,temp__5735__auto___57085){
return (function (e){
return null;
});})(s_57086,temp__5735__auto___57085))
;

s_57086.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
