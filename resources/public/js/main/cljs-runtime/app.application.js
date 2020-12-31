goog.provide('app.application');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.wsscode.pathom.core');
goog.require('com.fulcrologic.fulcro.networking.http_remote');
app.application.contains_pathom_errors_QMARK_ = (function app$application$contains_pathom_errors_QMARK_(p__52651){
var map__52652 = p__52651;
var map__52652__$1 = (((((!((map__52652 == null))))?(((((map__52652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52652):map__52652);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52652__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.map_QMARK_(body)){
var values = cljs.core.vals(body);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (values,map__52652,map__52652__$1,body){
return (function (error_QMARK_,v){
if(((((cljs.core.map_QMARK_(v)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.keys(v)),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491))))){
return cljs.core.reduced(true);
} else {
return error_QMARK_;
}
});})(values,map__52652,map__52652__$1,body))
,false,values);
} else {
return null;
}
});
app.application.remote_error_QMARK_ = (function app$application$remote_error_QMARK_(result){
var or__4131__auto__ = com.fulcrologic.fulcro.application.default_remote_error_QMARK_(result);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return app.application.contains_pathom_errors_QMARK_(result);
}
});
if((typeof app !== 'undefined') && (typeof app.application !== 'undefined') && (typeof app.application.app !== 'undefined')){
} else {
app.application.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.fulcrologic.fulcro.networking.http_remote.fulcro_http_remote(cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497),app.application.remote_error_QMARK_], null));
}

//# sourceMappingURL=app.application.js.map
