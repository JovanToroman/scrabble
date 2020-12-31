goog.provide('com.fulcrologic.fulcro.data_fetch');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
goog.require('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
/**
 * Is the given parameter a load marker?
 */
com.fulcrologic.fulcro.data_fetch.data_state_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$data_state_QMARK_(state){
return ((cljs.core.map_QMARK_(state)) && (cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"status","status",-1997798413))));
});
/**
 * Is the given parameter a load marker?
 */
com.fulcrologic.fulcro.data_fetch.load_marker_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$load_marker_QMARK_(x){
return com.fulcrologic.fulcro.data_fetch.data_state_QMARK_(x);
});
/**
 * Is the given load marker ready for loading?
 */
com.fulcrologic.fulcro.data_fetch.ready_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$ready_QMARK_(marker){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(marker));
});
/**
 * Is the given load marker loading?
 */
com.fulcrologic.fulcro.data_fetch.loading_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$loading_QMARK_(marker){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(marker));
});
/**
 * Is the given load marker indicate failed?
 * 
 *   WARNING: This function is current unimplemented and will be removed.  The new way of dealing with failure is to
 *   define an `error-action` for the load in question and modify your own state. You can also override
 */
com.fulcrologic.fulcro.data_fetch.failed_QMARK_ = (function com$fulcrologic$fulcro$data_fetch$failed_QMARK_(marker){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(marker));
});
/**
 * The name of the table in which fulcro load markers are stored. You must query for this via a link query
 *   `[df/marker-table '_]` in any component that needs to use them (and refresh) during loads.
 */
com.fulcrologic.fulcro.data_fetch.marker_table = new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486);
/**
 * Remove items from a query (AST) that have a key that returns true for the elision-predicate
 */
com.fulcrologic.fulcro.data_fetch.elide_ast_nodes = (function com$fulcrologic$fulcro$data_fetch$elide_ast_nodes(p__61862,elision_predicate){
var map__61863 = p__61862;
var map__61863__$1 = (((((!((map__61863 == null))))?(((((map__61863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61863):map__61863);
var ast = map__61863__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(union_key) : elision_predicate.call(null,union_key));
if(cljs.core.truth_((function (){var or__4131__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (elision_predicate.cljs$core$IFn$_invoke$arity$1 ? elision_predicate.cljs$core$IFn$_invoke$arity$1(key) : elision_predicate.call(null,key));
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = union_elision_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(children) <= (2));
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.data-fetch",null,56,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (union_elision_QMARK_,map__61863,map__61863__$1,ast,key,union_key,children){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unions are not designed to be used with fewer than two children. Check your calls to Fulcro\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([union_key], 0))], null);
});})(union_elision_QMARK_,map__61863,map__61863__$1,ast,key,union_key,children))
,null)),null,-1199173320);
} else {
}

var new_ast = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__61863,map__61863__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__61863,map__61863__$1,ast,key,union_key,children){
return (function (p1__61859_SHARP_){
return (com.fulcrologic.fulcro.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__61859_SHARP_,elision_predicate) : com.fulcrologic.fulcro.data_fetch.elide_ast_nodes.call(null,p1__61859_SHARP_,elision_predicate));
});})(union_elision_QMARK_,map__61863,map__61863__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__61863,map__61863__$1,ast,key,union_key,children))
);
if(cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new_ast))){
return new_ast;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_ast,new cljs.core.Keyword(null,"children","children",-940561982));
}
}
});
/**
 * Remove items from a query when the query element where the (node-predicate key) returns true. Commonly used with
 * a set as a predicate to elide specific well-known UI-only paths.
 */
com.fulcrologic.fulcro.data_fetch.elide_query_nodes = (function com$fulcrologic$fulcro$data_fetch$elide_query_nodes(query,node_predicate){
return edn_query_language.core.ast__GT_query(com.fulcrologic.fulcro.data_fetch.elide_ast_nodes(edn_query_language.core.query__GT_ast(query),node_predicate));
});
/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
com.fulcrologic.fulcro.data_fetch.load_params_STAR_ = (function com$fulcrologic$fulcro$data_fetch$load_params_STAR_(app__$1,server_property_or_ident,class_or_factory,p__61867){
var map__61869 = p__61867;
var map__61869__$1 = (((((!((map__61869 == null))))?(((((map__61869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61869):map__61869);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"target","target",253001721));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61869__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61869__$1,new cljs.core.Keyword(null,"marker","marker",865118313),false);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"params","params",710516235));
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var post_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61869__$1,new cljs.core.Keyword(null,"post-action","post-action",-542405960));
if((((target == null)) || (cljs.core.vector_QMARK_(target)))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if((((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if((((post_mutation_params == null)) || (cljs.core.map_QMARK_(post_mutation_params)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if((((params == null)) || (cljs.core.map_QMARK_(params)))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(((edn_query_language.core.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword)))){
} else {
throw (new Error("Assert failed: (or (eql/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

var state_map = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var transformed_query = (cljs.core.truth_(class_or_factory)?(function (){var G__61873 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,state_map);
var G__61873__$1 = ((cljs.core.set_QMARK_(without))?com.fulcrologic.fulcro.data_fetch.elide_query_nodes(G__61873,without):G__61873);
var G__61873__$2 = (cljs.core.truth_(focus)?edn_query_language.core.focus_subquery(G__61873__$1,focus):G__61873__$1);
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__61873__$2) : update_query.call(null,G__61873__$2));
} else {
return G__61873__$2;
}
})():null);
var query = (cljs.core.truth_((function (){var and__4120__auto__ = class_or_factory;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__4120__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,server_property_or_ident,null,(1),null)),(new cljs.core.List(null,transformed_query,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)))))):(cljs.core.truth_(class_or_factory)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,transformed_query])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,server_property_or_ident,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
var marker__$1 = ((marker === true)?(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.data-fetch",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_map,transformed_query,query,map__61869,map__61869__$1,target,abort_id,remote,update_query,fallback,marker,params,error_action,post_mutation,without,ok_action,post_mutation_params,focus,post_action){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boolean load marker no longer supported."], null);
});})(state_map,transformed_query,query,map__61869,map__61869__$1,target,abort_id,remote,update_query,fallback,marker,params,error_action,post_mutation,without,ok_action,post_mutation_params,focus,post_action))
,null)),null,227524557);

return false;
})()
:marker);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"error-action","error-action",-1147840498),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"post-action","post-action",-542405960),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,fallback,marker__$1,server_property_or_ident,error_action,post_mutation,ok_action,post_mutation_params,post_action,target,query,abort_id]);
});
/**
 * Adds a load marker at the given `marker` id to df/marker-table with the given status.
 * 
 *   NOTE: You must query for the marker table in any component that wants to show activity.
 */
com.fulcrologic.fulcro.data_fetch.set_load_marker_BANG_ = (function com$fulcrologic$fulcro$data_fetch$set_load_marker_BANG_(app__$1,marker,status){
if(cljs.core.truth_(marker)){
var map__61883 = app__$1;
var map__61883__$1 = (((((!((map__61883 == null))))?(((((map__61883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61883):map__61883);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61883__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,118,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61883,map__61883__$1,state_atom,render_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting load marker"], null);
});})(map__61883,map__61883__$1,state_atom,render_BANG_))
,null)),null,390781776);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,marker], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));

var G__61890 = app__$1;
var G__61891 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__61890,G__61891) : render_BANG_.call(null,G__61890,G__61891));
} else {
return null;
}
});
/**
 * Removes the load marker with the given `marker` id from the df/marker-table.
 */
com.fulcrologic.fulcro.data_fetch.remove_load_marker_BANG_ = (function com$fulcrologic$fulcro$data_fetch$remove_load_marker_BANG_(app__$1,marker){
if(cljs.core.truth_(marker)){
var map__61900 = app__$1;
var map__61900__$1 = (((((!((map__61900 == null))))?(((((map__61900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61900):map__61900);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,128,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61900,map__61900__$1,state_atom){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Removing load marker"], null);
});})(map__61900,map__61900__$1,state_atom))
,null)),null,-118369574);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,com.fulcrologic.fulcro.data_fetch.marker_table,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker], 0));
} else {
return null;
}
});
/**
 * Default processing when a load finishes successfully (called internally).
 * 
 *   Removes any load marker, then either:
 * 
 *   - Runs the `ok-action` (if defined).
 *   - Does normal post-processing (if the was no ok-action):
 *     - Merges the load result
 *     - Processes desired targets
 *     - Runs the post-mutation (if defined)
 *     - Runs the post-action (if defined)
 */
com.fulcrologic.fulcro.data_fetch.finish_load_BANG_ = (function com$fulcrologic$fulcro$data_fetch$finish_load_BANG_(p__61911,p__61912){
var map__61914 = p__61911;
var map__61914__$1 = (((((!((map__61914 == null))))?(((((map__61914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61914):map__61914);
var env = map__61914__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61914__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61914__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var map__61915 = p__61912;
var map__61915__$1 = (((((!((map__61915 == null))))?(((((map__61915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61915):map__61915);
var params = map__61915__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ok_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var post_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"post-action","post-action",-542405960));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"target","target",253001721));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var source_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61915__$1,new cljs.core.Keyword(null,"source-key","source-key",-1325875542));
com.fulcrologic.fulcro.data_fetch.remove_load_marker_BANG_(app__$1,marker);

var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"load-params","load-params",38753949),params);
if(cljs.core.fn_QMARK_(ok_action)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skipping default merge and calling user-supplied ok-action."], null);
});})(env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key))
,null)),null,-1114247270);

return (ok_action.cljs$core$IFn$_invoke$arity$1 ? ok_action.cljs$core$IFn$_invoke$arity$1(env__$1) : ok_action.call(null,env__$1));
} else {
var map__61931 = result;
var map__61931__$1 = (((((!((map__61931 == null))))?(((((map__61931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61931):map__61931);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61931__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var transaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61931__$1,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var query__$1 = (function (){var or__4131__auto__ = transaction;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return query;
}
})();
var map__61932 = app__$1;
var map__61932__$1 = (((((!((map__61932 == null))))?(((((map__61932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61932):map__61932);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61932__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Doing merge and targeting steps: ",body,query__$1], null);
});})(map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key))
,null)),null,-1018653554);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key){
return (function (s){
var G__61943 = com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4(s,query__$1,body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224),true], null));
if(cljs.core.truth_(target)){
return com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__61943,source_key,target);
} else {
return G__61943;
}
});})(map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key))
);

if((post_mutation instanceof cljs.core.Symbol)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,159,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Doing post mutation ",post_mutation], null);
});})(map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key))
,null)),null,1864946155);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,post_mutation,null,(1),null)),(new cljs.core.List(null,(function (){var or__4131__auto__ = post_mutation_params;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),null,(1),null))))),null,(1),null)))))));
} else {
}

if(cljs.core.fn_QMARK_(post_action)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,162,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Doing post action "], null);
});})(map__61931,map__61931__$1,body,transaction,query__$1,map__61932,map__61932__$1,state_atom,env__$1,map__61914,map__61914__$1,env,app__$1,result,map__61915,map__61915__$1,params,query,ok_action,post_mutation,post_mutation_params,post_action,target,marker,source_key))
,null)),null,-994718153);

return (post_action.cljs$core$IFn$_invoke$arity$1 ? post_action.cljs$core$IFn$_invoke$arity$1(env__$1) : post_action.call(null,env__$1));
} else {
return null;
}
}
});
/**
 * The normal internal processing of a load that has failed (error returned true).
 * 
 *   Sets the load marker, if present, to :failed.
 * 
 *   If an `error-action` was desired, it is used to process the rest of the failure.
 * 
 *   The `env` will include the network `:result` and the original load options as `:load-params`.
 * 
 *   *Otherwise*, this function will:
 * 
 *   - Trigger the global error action (if defined on the app) (arg is env as described above)
 *   - Trigger any fallback for the load. (params are the env described above)
 *   
 */
com.fulcrologic.fulcro.data_fetch.load_failed_BANG_ = (function com$fulcrologic$fulcro$data_fetch$load_failed_BANG_(p__61949,p__61950){
var map__61952 = p__61949;
var map__61952__$1 = (((((!((map__61952 == null))))?(((((map__61952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61952):map__61952);
var env = map__61952__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61952__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__61953 = p__61950;
var map__61953__$1 = (((((!((map__61953 == null))))?(((((map__61953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61953):map__61953);
var params = map__61953__$1;
var error_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61953__$1,new cljs.core.Keyword(null,"error-action","error-action",-1147840498));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61953__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61953__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,180,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__61952,map__61952__$1,env,app__$1,map__61953,map__61953__$1,params,error_action,marker,fallback){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running load failure logic."], null);
});})(map__61952,map__61952__$1,env,app__$1,map__61953,map__61953__$1,params,error_action,marker,fallback))
,null)),null,-497797369);

com.fulcrologic.fulcro.data_fetch.set_load_marker_BANG_(app__$1,marker,new cljs.core.Keyword(null,"failed","failed",-1397425762));

var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"load-params","load-params",38753949),params);
if(cljs.core.fn_QMARK_(error_action)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,185,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (env__$1,map__61952,map__61952__$1,env,app__$1,map__61953,map__61953__$1,params,error_action,marker,fallback){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skipping default load error action"], null);
});})(env__$1,map__61952,map__61952__$1,env,app__$1,map__61953,map__61953__$1,params,error_action,marker,fallback))
,null)),null,455283395);

return (error_action.cljs$core$IFn$_invoke$arity$1 ? error_action.cljs$core$IFn$_invoke$arity$1(env__$1) : error_action.call(null,env__$1));
} else {
var temp__5735__auto___62108 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-error-action","global-error-action",-924822372));
if(cljs.core.truth_(temp__5735__auto___62108)){
var global_error_action_62109 = temp__5735__auto___62108;
(global_error_action_62109.cljs$core$IFn$_invoke$arity$1 ? global_error_action_62109.cljs$core$IFn$_invoke$arity$1(env__$1) : global_error_action_62109.call(null,env__$1));
} else {
}

if((fallback instanceof cljs.core.Symbol)){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,fallback,null,(1),null)),(new cljs.core.List(null,env__$1,null,(1),null))))),null,(1),null)))))));
} else {
return null;
}
}
});
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","internal-load!","com.fulcrologic.fulcro.data-fetch/internal-load!",273645565,null),(function (p__61967){
var map__61968 = p__61967;
var map__61968__$1 = (((((!((map__61968 == null))))?(((((map__61968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61968):map__61968);
var env = map__61968__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61968__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235));
var map__61971 = params;
var map__61971__$1 = (((((!((map__61971 == null))))?(((((map__61971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61971):map__61971);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61971__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var remote_key = (function (){var or__4131__auto__ = remote;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.data-fetch",null,197,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loading ",remote," query:",query], null);
});})(params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast))
,null)),null,1752157669);

var G__61979 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"action","action",-811238024),((function (params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast){
return (function (p__61981){
var map__61982 = p__61981;
var map__61982__$1 = (((((!((map__61982 == null))))?(((((map__61982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61982):map__61982);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61982__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return com.fulcrologic.fulcro.data_fetch.set_load_marker_BANG_(app__$1,marker,new cljs.core.Keyword(null,"loading","loading",-737050189));
});})(params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast){
return (function (p__61985){
var map__61986 = p__61985;
var map__61986__$1 = (((((!((map__61986 == null))))?(((((map__61986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61986):map__61986);
var env__$1 = map__61986__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61986__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61986__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var remote_error_QMARK_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"remote-error?","remote-error?",-391127497));
if(cljs.core.truth_((remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1 ? remote_error_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : remote_error_QMARK_.call(null,result)))){
return com.fulcrologic.fulcro.data_fetch.load_failed_BANG_(env__$1,params);
} else {
return com.fulcrologic.fulcro.data_fetch.finish_load_BANG_(env__$1,params);
}
});})(params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast))
,remote_key,((function (params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast){
return (function (_){
return edn_query_language.core.query__GT_ast(query);
});})(params,map__61971,map__61971__$1,remote,query,marker,remote_key,map__61968,map__61968__$1,env,ast))
]);
return G__61979;
}));
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive a query of the form: [({server-property (comp/get-query class-or-factory)} params)], which
 *   a Fulcro parser will correctly parse as a join on server-property with the given subquery and params. See the AST and
 *   instructions on parsing queries in the developer's guide.
 * 
 *   Parameters:
 *   - `app-or-comp` : A component instance or Fulcro application
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `class-or-factory` : A component that implements IQuery, or a factory for it (if using dynamic queries). This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  class-or-factory can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery (as an edge (normalized) or value (not normalized)).
 *  Can also be special targets (multiple-targets, append-to,
 *  prepend-to, or replace-at). If you are loading by keyword (into root), then this relocates the result (ident or value) after load.
 *  When loading an entity (by ident), then this option will place additional idents at the target path(s) that point to that entity.
 *   - `initialize` - REMOVED. Use component pre-merge instead.
 *   - `remote` - Optional. Keyword name of the remote that this load should come from.
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - ID of marker. Normalizes a load marker into app state so you can see progress.
 *   - `refresh` - A list of things in the UI to refresh. Depends on rendering optimization.
 *   - `focus` - Focus the query along a path. See eql/focus-subquery.
 *   - `without` - A set of keys to remove (recursively) from the query.
 *   - `update-query` - A general-purpose function that can transform the component query before sending to remote. See also
 *   the application's `:global-eql-transform` option.
 *   For example, to focus a subquery using update-query: `{:update-query #(eql/focus-subquery % [:my {:sub [:query]}])}`
 *   Removing properties (like previous :without option): `{:update-query #(df/elide-query-nodes % #{:my :elisions})}`
 *   - `abort-id` - Set a unique key. If supplied, then the load can be cancelled via that abort ID.
 *   - `parallel` - Send the load out-of-order (immediately) without waiting for other loads in progress.
 *   - `post-mutation` - A mutation (symbol) to run *after* the data is merged. Note, if target is supplied be sure your post mutation
 *  should expect the data at the targeted location. The `env` of that mutation will be the env of the load (if available), but will also include `:load-request`.
 *   - `post-mutation-params` - An optional map that will be passed to the post-mutation when it is called.
 *   - `post-action` - A lambda that will a mutation env parameter `(fn [env] ...)`. Called after success, like post-mutation
 *  (and after post-mutation if also defined). `env` will include the original `:load-params` and raw network layer `:result`. If you
 *  want the post behavior to act as a top-level mutation, then prefer `post-mutation`. The action can also call `transact!`.
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error. The `env` of the fallback will be like a mutation `env`, and will
 *  include a `:result` key with the real result from the server, along with the original `:load-params`.
 * 
 *   Special-purpose config options:
 * 
 *   The config options can also include the following things that completely override behaviors of other (respons-processing) options,
 *   and should only be used in very advanced situations where you know what you are doing:
 * 
 *   - `ok-action` - WARNING: OVERRIDES ALL DEFAULT OK BEHAVIOR (except load marker removal)! A lambda that will receive an env parameter `(fn [env] ...)` that
 *  includes the `:result` and original `:load-params`.
 *   - `error-action` - WARNING: OVERRIDES ALL DEFAULT ERROR BEHAVIOR (except load marker update). A lambda that will receive an `env`
 *  that includes the `:result` and original `:load-params`.
 *   
 */
com.fulcrologic.fulcro.data_fetch.load_BANG_ = (function com$fulcrologic$fulcro$data_fetch$load_BANG_(var_args){
var G__61997 = arguments.length;
switch (G__61997) {
case 3:
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp,server_property_or_ident,class_or_factory){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app_or_comp,server_property_or_ident,class_or_factory,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,server_property_or_ident,class_or_factory,config){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_or_comp);
var map__61999 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684).cljs$core$IFn$_invoke$arity$1(app__$1);
var map__61999__$1 = (((((!((map__61999 == null))))?(((((map__61999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61999):map__61999);
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61999__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61999__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var load_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61999__$1,new cljs.core.Keyword(null,"load-mutation","load-mutation",-2132703225));
var map__62000 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__62003 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),load_marker_default,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null);
if(cljs.core.truth_(query_transform_default)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62003,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),query_transform_default);
} else {
return G__62003;
}
})(),config], 0));
var map__62000__$1 = (((((!((map__62000 == null))))?(((((map__62000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62000):map__62000);
var config__$1 = map__62000__$1;
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62000__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62000__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var load_sym = (function (){var or__4131__auto__ = load_mutation;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","internal-load!","com.fulcrologic.fulcro.data-fetch/internal-load!",273645565,null);
}
})();
var mutation_args = com.fulcrologic.fulcro.data_fetch.load_params_STAR_(app__$1,server_property_or_ident,class_or_factory,config__$1);
var abort_id = new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(mutation_args);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,load_sym,null,(1),null)),(new cljs.core.List(null,mutation_args,null,(1),null))))),null,(1),null)))))),(function (){var G__62010 = cljs.core.PersistentArrayMap.EMPTY;
var G__62010__$1 = ((cljs.core.seq(refresh))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62010,new cljs.core.Keyword(null,"refresh","refresh",1947415525),refresh):G__62010);
var G__62010__$2 = ((cljs.core.boolean_QMARK_(parallel))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62010__$1,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),parallel):G__62010__$1);
if(cljs.core.truth_(abort_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62010__$2,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),abort_id);
} else {
return G__62010__$2;
}
})());
});

com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Load a field of the current component. Runs `prim/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 *   - `options` : A map of load options. See `load`.
 * 
 *   WARNING: If you're using dynamic queries, you won't really know what factory your parent is using,
 *   nor can you pass it as a parameter to this function. Therefore, it is not recommended to use load-field from within
 *   a component that has a dynamic query unless you can base it on the original static query.
 *   
 */
com.fulcrologic.fulcro.data_fetch.load_field_BANG_ = (function com$fulcrologic$fulcro$data_fetch$load_field_BANG_(component,field,options){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(component);
var map__62014 = options;
var map__62014__$1 = (((((!((map__62014 == null))))?(((((map__62014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62014):map__62014);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62014__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var update_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62014__$1,new cljs.core.Keyword(null,"update-query","update-query",-1566885791));
var ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component);
var update_query__$1 = ((function (app__$1,map__62014,map__62014__$1,parallel,update_query,ident){
return (function (q){
var G__62016 = edn_query_language.core.focus_subquery(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null));
if(cljs.core.truth_(update_query)){
return (update_query.cljs$core$IFn$_invoke$arity$1 ? update_query.cljs$core$IFn$_invoke$arity$1(G__62016) : update_query.call(null,G__62016));
} else {
return G__62016;
}
});})(app__$1,map__62014,map__62014__$1,parallel,update_query,ident))
;
var params = com.fulcrologic.fulcro.data_fetch.load_params_STAR_(app__$1,ident,component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"update-query","update-query",-1566885791),update_query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-key","source-key",-1325875542),com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component)], 0)));
var abort_id = new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(params);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.data-fetch","internal-load!","com.fulcrologic.fulcro.data-fetch/internal-load!",273645565,null),(new cljs.core.List(null,params,null,(1),null)),(2),null))], null),(function (){var G__62019 = cljs.core.PersistentArrayMap.EMPTY;
var G__62019__$1 = ((cljs.core.boolean_QMARK_(parallel))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62019,new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),parallel):G__62019);
if(cljs.core.truth_(abort_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62019__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),abort_id);
} else {
return G__62019__$1;
}
})());
});
com.fulcrologic.fulcro.data_fetch.refresh_BANG_ = (function com$fulcrologic$fulcro$data_fetch$refresh_BANG_(var_args){
var G__62021 = arguments.length;
switch (G__62021) {
case 2:
return com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,load_options){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(component,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component),component,load_options);
});

com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(component,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component),component);
});

com.fulcrologic.fulcro.data_fetch.refresh_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * DEPRECATED. Use `load!`
 */
com.fulcrologic.fulcro.data_fetch.load = com.fulcrologic.fulcro.data_fetch.load_BANG_;
/**
 * DEPRECATED. Use `load-field!`
 */
com.fulcrologic.fulcro.data_fetch.load_field = com.fulcrologic.fulcro.data_fetch.load_field_BANG_;

//# sourceMappingURL=com.fulcrologic.fulcro.data_fetch.js.map
