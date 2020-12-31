goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__54954,p__54955){
var map__54956 = p__54954;
var map__54956__$1 = (((((!((map__54956 == null))))?(((((map__54956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54956):map__54956);
var svc = map__54956__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54956__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54956__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54956__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__54957 = p__54955;
var map__54957__$1 = (((((!((map__54957 == null))))?(((((map__54957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54957):map__54957);
var msg = map__54957__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54957__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54957__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54957__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54957__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__54984,p__54985){
var map__54987 = p__54984;
var map__54987__$1 = (((((!((map__54987 == null))))?(((((map__54987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54987):map__54987);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__54988 = p__54985;
var map__54988__$1 = (((((!((map__54988 == null))))?(((((map__54988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54988):map__54988);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54988__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__54996,p__54997){
var map__54998 = p__54996;
var map__54998__$1 = (((((!((map__54998 == null))))?(((((map__54998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54998):map__54998);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54998__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__54999 = p__54997;
var map__54999__$1 = (((((!((map__54999 == null))))?(((((map__54999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54999):map__54999);
var msg = map__54999__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54999__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__55012,tid){
var map__55013 = p__55012;
var map__55013__$1 = (((((!((map__55013 == null))))?(((((map__55013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55013):map__55013);
var svc = map__55013__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55013__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__55042 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__55043 = null;
var count__55044 = (0);
var i__55045 = (0);
while(true){
if((i__55045 < count__55044)){
var vec__55072 = chunk__55043.cljs$core$IIndexed$_nth$arity$2(null,i__55045);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55072,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55072,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__55163 = seq__55042;
var G__55164 = chunk__55043;
var G__55165 = count__55044;
var G__55166 = (i__55045 + (1));
seq__55042 = G__55163;
chunk__55043 = G__55164;
count__55044 = G__55165;
i__55045 = G__55166;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55042);
if(temp__5735__auto__){
var seq__55042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55042__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55042__$1);
var G__55168 = cljs.core.chunk_rest(seq__55042__$1);
var G__55169 = c__4556__auto__;
var G__55170 = cljs.core.count(c__4556__auto__);
var G__55171 = (0);
seq__55042 = G__55168;
chunk__55043 = G__55169;
count__55044 = G__55170;
i__55045 = G__55171;
continue;
} else {
var vec__55078 = cljs.core.first(seq__55042__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55078,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55078,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__55177 = cljs.core.next(seq__55042__$1);
var G__55178 = null;
var G__55179 = (0);
var G__55180 = (0);
seq__55042 = G__55177;
chunk__55043 = G__55178;
count__55044 = G__55179;
i__55045 = G__55180;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__55027_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__55027_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__55028_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__55028_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__55029_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__55029_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__55030_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__55030_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__55087){
var map__55088 = p__55087;
var map__55088__$1 = (((((!((map__55088 == null))))?(((((map__55088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55088):map__55088);
var svc = map__55088__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
