goog.provide('com.fulcrologic.fulcro.routing.dynamic_routing');
goog.require('cljs.core');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.fulcrologic.fulcro.ui_state_machines');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.algorithms.indexing');
com.fulcrologic.fulcro.routing.dynamic_routing.route_segment = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_segment(class$){

return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_route_cancelled(class$){

return com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214)], 0));
});
/**
 * Universal CLJC version of will-enter.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_cancelled(class$,route_params){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(route_params) : f.call(null,route_params));
} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_enter(class$){

var temp__5733__auto__ = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-enter","will-enter",-692415624)], 0));
if(cljs.core.truth_(temp__5733__auto__)){
var will_enter = temp__5733__auto__;
return will_enter;
} else {
var ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
return ((function (ident,temp__5733__auto__){
return (function (_,___$1){
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1(ident) : com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.call(null,ident));
});
;})(ident,temp__5733__auto__))
}
});
/**
 * Universal CLJC version of will-enter.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_enter(class$,app__$1,params){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter(class$);
if(cljs.core.truth_(temp__5735__auto__)){
var will_enter = temp__5735__auto__;
return (will_enter.cljs$core$IFn$_invoke$arity$2 ? will_enter.cljs$core$IFn$_invoke$arity$2(app__$1,params) : will_enter.call(null,app__$1,params));
} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_leave(this$){

var or__4131__auto__ = com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_leave(c,props){
var temp__5735__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave(c);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(c,props) : f.call(null,c,props));
} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_lifecycle_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_lifecycle_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.get_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_targets(router){

return cljs.core.set(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(router,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_immediate(ident){
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_deferred(ident,completion_fn){
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),false,new cljs.core.Keyword(null,"fn","fn",-1175266204),completion_fn], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$immediate_QMARK_(ident){
var G__65732 = ident;
var G__65732__$1 = (((G__65732 == null))?null:cljs.core.meta(G__65732));
if((G__65732__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$1(G__65732__$1);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$apply_route_STAR_(state_map,p__65733){
var map__65734 = p__65733;
var map__65734__$1 = (((((!((map__65734 == null))))?(((((map__65734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65734):map__65734);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65734__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65734__$1,new cljs.core.Keyword(null,"target","target",253001721));
var router_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(router));
var router_id = cljs.core.second(router);
var target_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,80,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (router_class,router_id,target_class,map__65734,map__65734__$1,router,target){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying route ident",target,"to router",router_id], null);
});})(router_class,router_id,target_class,map__65734,map__65734__$1,router,target))
,null)),null,700375381);

if((router_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,82,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (router_class,router_id,target_class,map__65734,map__65734__$1,router,target){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* was called without a proper :router argument."], null);
});})(router_class,router_id,target_class,map__65734,map__65734__$1,router,target))
,null)),null,1876998308);
} else {
}

if((target_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,84,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (router_class,router_id,target_class,map__65734,map__65734__$1,router,target){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* for router ",router_class,"was given a target that did not have a component. ","Did you remember to call route-deferred or route-immediate?"], null);
});})(router_class,router_id,target_class,map__65734,map__65734__$1,router,target))
,null)),null,-342710928);
} else {
}

return com.fulcrologic.fulcro.components.set_query_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)),target),router,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),router_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(target_class,state_map)], null)], null)], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_for_pending_target(state_map,target){
var routers = (function (){var G__65737 = state_map;
var G__65737__$1 = (((G__65737 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(G__65737));
if((G__65737__$1 == null)){
return null;
} else {
return cljs.core.vals(G__65737__$1);
}
})();
var router_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (routers){
return (function (_,r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var G__65738 = r;
var G__65738__$1 = (((G__65738 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373).cljs$core$IFn$_invoke$arity$1(G__65738));
if((G__65738__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__65738__$1);
}
})())){
return cljs.core.reduced(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r));
} else {
return null;
}
});})(routers))
,null,routers);
return router_id;
});
/**
 * Mutation: Indicate that a target is ready.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),(function (fulcro_mutation_env_symbol){
var map__65739 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__65739__$1 = (((((!((map__65739 == null))))?(((((map__65739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65739):map__65739);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65739__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),((function (map__65739,map__65739__$1,target){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null);
});})(map__65739,map__65739__$1,target))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65739,map__65739__$1,target){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__65742){
var map__65743 = p__65742;
var map__65743__$1 = (((((!((map__65743 == null))))?(((((map__65743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65743):map__65743);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65743__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state_map_65911 = com.fulcrologic.fulcro.application.current_state(app__$1);
var router_id_65912 = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map_65911,target);
if(cljs.core.truth_(router_id_65912)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_map_65911,router_id_65912,map__65743,map__65743__$1,app__$1,map__65739,map__65739__$1,target){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id_65912,"notified that pending route is ready."], null);
});})(state_map_65911,router_id_65912,map__65743,map__65743__$1,app__$1,map__65739,map__65739__$1,target))
,null)),null,-282091008);

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,router_id_65912,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,110,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_map_65911,router_id_65912,map__65743,map__65743__$1,app__$1,map__65739,map__65739__$1,target){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another."], null);
});})(state_map_65911,router_id_65912,map__65743,map__65743__$1,app__$1,map__65739,map__65739__$1,target))
,null)),null,1356757719);
}

return null;
});})(map__65739,map__65739__$1,target))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__65739,map__65739__$1,target){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__65739,map__65739__$1,target))
], null);
}));
/**
 * Indicate a target is ready.  Safe to use from within mutations.
 * 
 *   target - The ident that was originally listed as a deferred target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_BANG_(component_or_app,target){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65745 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__65745) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__65745));
})()], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
/**
 * Returns the elements of actual-path that match the route-segment definition.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix = (function com$fulcrologic$fulcro$routing$dynamic_routing$matching_prefix(route_segment,actual_path){
var matching_segment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__65746){
var vec__65747 = p__65746;
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65747,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65747,(1),null);
if(((typeof expected === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,actual);
} else {
if((((expected instanceof cljs.core.Keyword)) && (cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual));
} else {
return result;

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),route_segment,actual_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_segment),cljs.core.count(route_segment))){
return matching_segment;
} else {
return null;
}
});
/**
 * Get the class of the component that is currently being routed to.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route_class(this$){
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var class$ = (function (){var G__65751 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(this$,state_map);
var G__65751__$1 = (((G__65751 == null))?null:edn_query_language.core.query__GT_ast(G__65751));
var G__65751__$2 = (((G__65751__$1 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__65751__$1));
var G__65751__$3 = (((G__65751__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__65751,G__65751__$1,G__65751__$2,state_map){
return (function (p1__65750_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__65750_SHARP_));
});})(G__65751,G__65751__$1,G__65751__$2,state_map))
,G__65751__$2));
var G__65751__$4 = (((G__65751__$3 == null))?null:cljs.core.first(G__65751__$3));
if((G__65751__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__65751__$4);
}
})();
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.components.registry_key__GT_class(com.fulcrologic.fulcro.components.class__GT_registry_key(class$)):class$);
return class$__$1;
});
/**
 * Given a router class and a path segment, returns the class of the router-class that is the target of the given URI path,
 *   which is a vector of (string) URI components.
 * 
 *   Returns nil if there is no target that accepts the path, or a map containing:
 * 
 *   {:target class
 * :matching-prefix prefix}
 * 
 *   where `class` is the component class that accepts the path (the target, NOT the router), and `matching-prefix` is the
 *   portion of the path that is accepted by that class.
 * 
 *   NOTE: If more than one target matches, then the target with the longest match will be returned. A warning will be
 *   printed if more than one match of equal length is found.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target(router_class,path){
if(cljs.core.truth_((function (){var and__4120__auto__ = router_class;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class);
} else {
return and__4120__auto__;
}
})())){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_class);
var matches = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (targets){
return (function (result,target_class){
var prefix = (function (){var and__4120__auto__ = target_class;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_(target_class);
if(and__4120__auto____$1){
var G__65754 = target_class;
var G__65754__$1 = (((G__65754 == null))?null:com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__65754));
if((G__65754__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix(G__65754__$1,path);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = prefix;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(prefix);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count(prefix),new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173),prefix,new cljs.core.Keyword(null,"target","target",253001721),target_class], null));
} else {
return result;
}
});})(targets))
,cljs.core.PersistentVector.EMPTY,targets)));
var max_length = (function (){var G__65755 = matches;
var G__65755__$1 = (((G__65755 == null))?null:cljs.core.first(G__65755));
if((G__65755__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__65755__$1);
}
})();
var match = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (targets,matches,max_length){
return (function (p1__65752_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_length,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__65752_SHARP_));
});})(targets,matches,max_length))
,matches);
if(cljs.core.truth_(cljs.core.second(match))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,185,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (targets,matches,max_length,match){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target matches",path], null);
});})(targets,matches,max_length,match))
,null)),null,-1949285632);
} else {
}

return cljs.core.first(match);
} else {
return null;
}
});
/**
 * Returns true if the given component is a router that manages a route target that will accept the given path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$accepts_route_QMARK_(component,path){
return cljs.core.boolean$(com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component,path));
});
/**
 * Returns the AST node for a query that represents the router that has a target that can accept the given path. This is a breadth-first
 *   search.
 * 
 *   ast - A query AST node
 *   path - A vector of the current URI segments.
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_route(p__65758,path){
var map__65759 = p__65758;
var map__65759__$1 = (((((!((map__65759 == null))))?(((((map__65759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65759):map__65759);
var ast_node = map__65759__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65759__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4131__auto__ = (function (){var and__4120__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(component,path);
if(and__4120__auto__){
return ast_node;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.some(((function (or__4131__auto__,map__65759,map__65759__$1,ast_node,component,children){
return (function (p1__65756_SHARP_){
var and__4120__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__65756_SHARP_),path);
if(and__4120__auto__){
return p1__65756_SHARP_;
} else {
return and__4120__auto__;
}
});})(or__4131__auto__,map__65759,map__65759__$1,ast_node,component,children))
,children);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.some(((function (or__4131__auto____$1,or__4131__auto__,map__65759,map__65759__$1,ast_node,component,children){
return (function (p1__65757_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2(p1__65757_SHARP_,path) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.call(null,p1__65757_SHARP_,path));
});})(or__4131__auto____$1,or__4131__auto__,map__65759,map__65759__$1,ast_node,component,children))
,children);
}
}
});
/**
 * Returns the AST node for a query that represents the closest "live" (on-screen) router
 * 
 *   ast - A query AST node
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router(app__$1,p__65763){
var map__65764 = p__65763;
var map__65764__$1 = (((((!((map__65764 == null))))?(((((map__65764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65764):map__65764);
var ast_node = map__65764__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65764__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65764__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var live_router_QMARK_ = ((function (map__65764,map__65764__$1,ast_node,component,children){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router_$_live_router_QMARK_(c){
return ((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(c)) && (cljs.core.boolean$(com.fulcrologic.fulcro.components.class__GT_any(app__$1,c))));
});})(map__65764,map__65764__$1,ast_node,component,children))
;
var or__4131__auto__ = (function (){var and__4120__auto__ = live_router_QMARK_(component);
if(cljs.core.truth_(and__4120__auto__)){
return ast_node;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.some(((function (or__4131__auto__,map__65764,map__65764__$1,ast_node,component,children){
return (function (p1__65761_SHARP_){
var and__4120__auto__ = live_router_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__65761_SHARP_));
if(cljs.core.truth_(and__4120__auto__)){
return p1__65761_SHARP_;
} else {
return and__4120__auto__;
}
});})(or__4131__auto__,map__65764,map__65764__$1,ast_node,component,children))
,children);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.some(((function (or__4131__auto____$1,or__4131__auto__,map__65764,map__65764__$1,ast_node,component,children){
return (function (p1__65762_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2(app__$1,p1__65762_SHARP_) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.call(null,app__$1,p1__65762_SHARP_));
});})(or__4131__auto____$1,or__4131__auto__,map__65764,map__65764__$1,ast_node,component,children))
,children);
}
}
});
/**
 * Mutation: Indicate that a given route is ready and should show the result.
 * 
 *   router - The ident of the router, with metadata :component that is the class of the router.
 *   target - The ident of the target route, with metadata :component that is the class of the target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null),(function (fulcro_mutation_env_symbol){
var map__65768 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__65768__$1 = (((((!((map__65768 == null))))?(((((map__65768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65768):map__65768);
var params = map__65768__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__65768,map__65768__$1,params,router,target){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__65770){
var map__65771 = p__65770;
var map__65771__$1 = (((((!((map__65771 == null))))?(((((map__65771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65771):map__65771);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65771__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65771__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,params);

return null;
});})(map__65768,map__65768__$1,params,router,target))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__65768,map__65768__$1,params,router,target){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__65768,map__65768__$1,params,router,target))
], null);
}));
com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$mark_route_pending_STAR_(state_map,p__65776){
var map__65777 = p__65776;
var map__65777__$1 = (((((!((map__65777 == null))))?(((((map__65777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65777):map__65777);
var params = map__65777__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65777__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65777__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),params);
});
var target_ready_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_STAR_(state_map,target){
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
return com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_(state_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)], null)));
} else {
return state_map;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$ready_handler(env){
var new_env = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268))),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),cljs.core.PersistentVector.EMPTY),target_ready_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"target","target",253001721))], 0));
var app__$1 = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$fail_handler(env){
return env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_handler(p__65779){
var map__65780 = p__65779;
var map__65780__$1 = (((((!((map__65780 == null))))?(((((map__65780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65780):map__65780);
var env = map__65780__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__65782 = event_data;
var map__65782__$1 = (((((!((map__65782 == null))))?(((((map__65782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65782):map__65782);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65782__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65782__$1,new cljs.core.Keyword(null,"target","target",253001721));
var error_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65782__$1,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000));
var deferred_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65782__$1,new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(100));
var path_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65782__$1,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var immediate_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_(target);
return com.fulcrologic.fulcro.ui_state_machines.store((cljs.core.truth_(immediate_QMARK_)?(function (){var new_env = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"routed","routed",-707282794));
if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
})():com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"error-timer","error-timer",347765002),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),cljs.core.PersistentArrayMap.EMPTY,error_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"delay-timer","delay-timer",-920427787),new cljs.core.Keyword(null,"waiting!","waiting!",373081239),cljs.core.PersistentArrayMap.EMPTY,deferred_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"deferred","deferred",-1976960688))),new cljs.core.Keyword(null,"target","target",253001721),target);
});
com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null));
com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$proposed_new_path(this_or_app,relative_class_or_instance,new_route){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__65785_65932 = root;
var map__65786_65933 = G__65785_65932;
var map__65786_65934__$1 = (((((!((map__65786_65933 == null))))?(((((map__65786_65933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65786_65933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65786_65933):map__65786_65933);
var component_65935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65786_65934__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_65936 = new_route;
var G__65785_65937__$1 = G__65785_65932;
var path_65938__$1 = path_65936;
while(true){
var map__65799_65939 = G__65785_65937__$1;
var map__65799_65940__$1 = (((((!((map__65799_65939 == null))))?(((((map__65799_65939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65799_65939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65799_65939):map__65799_65939);
var component_65941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65799_65940__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_65942__$2 = path_65938__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = component_65941__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_65941__$1);
} else {
return and__4120__auto__;
}
})())){
var map__65801_65943 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_65941__$1,path_65942__$2);
var map__65801_65944__$1 = (((((!((map__65801_65943 == null))))?(((((map__65801_65943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65801_65943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65801_65943):map__65801_65943);
var target_65945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65801_65944__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_65946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65801_65944__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_65947 = (function (){var G__65803 = target_65945;
var G__65803__$1 = (((G__65803 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__65803,state_map));
if((G__65803__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__65803__$1);
}
})();
var prefix_length_65948 = cljs.core.count(matching_prefix_65946);
var remaining_path_65949 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_65948,path_65942__$2));
var segment_65950 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_65945);
var params_65951 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result){
return (function (p,p__65804){
var vec__65805 = p__65804;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65805,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result))
,segment_65950,matching_prefix_65946));
var target_ident_65952 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_65945,app__$1,params_65951);
if((((!(edn_query_language.core.ident_QMARK_(target_ident_65952)))) || ((cljs.core.second(target_ident_65952) == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,327,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,params_65951,target_ident_65952,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.components.component_name(target_65945),"did not return a valid ident. Instead it returned: ",target_ident_65952], null);
});})(G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,params_65951,target_ident_65952,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result))
,null)),null,-1652033249);
} else {
}

if(((edn_query_language.core.ident_QMARK_(target_ident_65952)) && ((!(cljs.core.contains_QMARK_((function (){var G__65809 = target_ident_65952;
if((G__65809 == null)){
return null;
} else {
return cljs.core.meta(G__65809);
}
})(),new cljs.core.Keyword(null,"immediate","immediate",-1684692069))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,330,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,params_65951,target_ident_65952,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.components.component_name(target_65945),"did not wrap the ident in route-immediate or route-deferred."], null);
});})(G__65785_65937__$1,path_65938__$1,map__65801_65943,map__65801_65944__$1,target_65945,matching_prefix_65946,target_ast_65947,prefix_length_65948,remaining_path_65949,segment_65950,params_65951,target_ident_65952,map__65799_65939,map__65799_65940__$1,component_65941__$1,path_65942__$2,G__65785_65932,map__65786_65933,map__65786_65934__$1,component_65935,path_65936,app__$1,state_map,router,root_query,ast,root,result))
,null)),null,838272686);
} else {
}

if(cljs.core.vector_QMARK_(target_ident_65952)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_65952,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_65945,new cljs.core.Keyword(null,"params","params",710516235),params_65951));
} else {
}

if(cljs.core.seq(remaining_path_65949)){
var G__65953 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_65947,remaining_path_65949);
var G__65954 = remaining_path_65949;
G__65785_65937__$1 = G__65953;
path_65938__$1 = G__65954;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
});
/**
 * Tell active routers that they are about to leave the screen. Returns false if any of them deny the route change.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving = (function com$fulcrologic$fulcro$routing$dynamic_routing$signal_router_leaving(app_or_comp,relative_class_or_instance,new_route){
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path(app_or_comp,relative_class_or_instance,new_route);
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
var to_signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var to_cancel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var _ = (function (){var G__65813 = root;
var map__65814 = G__65813;
var map__65814__$1 = (((((!((map__65814 == null))))?(((((map__65814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65814):map__65814);
var node = map__65814__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining = new_path;
var G__65813__$1 = G__65813;
var new_path_remaining__$1 = new_path_remaining;
while(true){
var map__65816 = G__65813__$1;
var map__65816__$1 = (((((!((map__65816 == null))))?(((((map__65816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65816):map__65816);
var node__$1 = map__65816__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65816__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining__$2 = new_path_remaining__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__4120__auto__;
}
})())){
var new_target = cljs.core.first(new_path_remaining__$2);
var router_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var map__65818 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)));
var map__65818__$1 = (((((!((map__65818 == null))))?(((((map__65818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65818):map__65818);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65818__$1,new cljs.core.Keyword(null,"target","target",253001721));
var next_router = cljs.core.some(((function (G__65813__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__65818,map__65818__$1,target,map__65816,map__65816__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__65813,map__65814,map__65814__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (p1__65810_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__65810_SHARP_);
});})(G__65813__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__65818,map__65818__$1,target,map__65816,map__65816__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__65813,map__65814,map__65814__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,children__$1);
if(edn_query_language.core.ident_QMARK_(target)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_cancel,cljs.core.conj,target);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_target,active_target)) && (cljs.core.vector_QMARK_(active_target)))){
var mounted_target_class_65955 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__65813__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__65818,map__65818__$1,target,next_router,map__65816,map__65816__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__65813,map__65814,map__65814__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (acc,p__65820){
var map__65821 = p__65820;
var map__65821__$1 = (((((!((map__65821 == null))))?(((((map__65821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65821):map__65821);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component__$2);
} else {
return null;
}
});})(G__65813__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__65818,map__65818__$1,target,next_router,map__65816,map__65816__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__65813,map__65814,map__65814__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null,(function (){var G__65823 = component__$1;
var G__65823__$1 = (((G__65823 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__65823,state_map));
var G__65823__$2 = (((G__65823__$1 == null))?null:edn_query_language.core.query__GT_ast(G__65823__$1));
if((G__65823__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__65823__$2);
}
})());
var mounted_targets_65956 = com.fulcrologic.fulcro.components.class__GT_all(app__$1,mounted_target_class_65955);
if(cljs.core.truth_((function (){var and__4120__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(mounted_targets_65956) > (1));
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,367,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__65813__$1,new_path_remaining__$1,mounted_target_class_65955,mounted_targets_65956,new_target,router_ident,active_target,map__65818,map__65818__$1,target,next_router,map__65816,map__65816__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__65813,map__65814,map__65814__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target on screen of type",mounted_target_class_65955], null);
});})(G__65813__$1,new_path_remaining__$1,mounted_target_class_65955,mounted_targets_65956,new_target,router_ident,active_target,map__65818,map__65818__$1,target,next_router,map__65816,map__65816__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__65813,map__65814,map__65814__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null)),null,1304788157);
} else {
}

if(cljs.core.seq(mounted_targets_65956)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_signal,cljs.core.into,mounted_targets_65956);
} else {
}
} else {
}

if(cljs.core.truth_(next_router)){
var G__65957 = next_router;
var G__65958 = cljs.core.rest(new_path_remaining__$2);
G__65813__$1 = G__65957;
new_path_remaining__$1 = G__65958;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
})();
var components = cljs.core.reverse(cljs.core.deref(to_signal));
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var seq__65824_65959 = cljs.core.seq(components);
var chunk__65825_65960 = null;
var count__65826_65961 = (0);
var i__65827_65962 = (0);
while(true){
if((i__65827_65962 < count__65826_65961)){
var c_65963 = chunk__65825_65960.cljs$core$IIndexed$_nth$arity$2(null,i__65827_65962);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__65824_65959,chunk__65825_65960,count__65826_65961,i__65827_65962,c_65963,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__65811_SHARP_){
var and__4120__auto__ = p1__65811_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_65963,com.fulcrologic.fulcro.components.props(c_65963));
} else {
return and__4120__auto__;
}
});})(seq__65824_65959,chunk__65825_65960,count__65826_65961,i__65827_65962,c_65963,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__65964 = seq__65824_65959;
var G__65965 = chunk__65825_65960;
var G__65966 = count__65826_65961;
var G__65967 = (i__65827_65962 + (1));
seq__65824_65959 = G__65964;
chunk__65825_65960 = G__65965;
count__65826_65961 = G__65966;
i__65827_65962 = G__65967;
continue;
} else {
var temp__5735__auto___65968 = cljs.core.seq(seq__65824_65959);
if(temp__5735__auto___65968){
var seq__65824_65969__$1 = temp__5735__auto___65968;
if(cljs.core.chunked_seq_QMARK_(seq__65824_65969__$1)){
var c__4550__auto___65970 = cljs.core.chunk_first(seq__65824_65969__$1);
var G__65971 = cljs.core.chunk_rest(seq__65824_65969__$1);
var G__65972 = c__4550__auto___65970;
var G__65973 = cljs.core.count(c__4550__auto___65970);
var G__65974 = (0);
seq__65824_65959 = G__65971;
chunk__65825_65960 = G__65972;
count__65826_65961 = G__65973;
i__65827_65962 = G__65974;
continue;
} else {
var c_65975 = cljs.core.first(seq__65824_65969__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__65824_65959,chunk__65825_65960,count__65826_65961,i__65827_65962,c_65975,seq__65824_65969__$1,temp__5735__auto___65968,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__65811_SHARP_){
var and__4120__auto__ = p1__65811_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_65975,com.fulcrologic.fulcro.components.props(c_65975));
} else {
return and__4120__auto__;
}
});})(seq__65824_65959,chunk__65825_65960,count__65826_65961,i__65827_65962,c_65975,seq__65824_65969__$1,temp__5735__auto___65968,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__65976 = cljs.core.next(seq__65824_65969__$1);
var G__65977 = null;
var G__65978 = (0);
var G__65979 = (0);
seq__65824_65959 = G__65976;
chunk__65825_65960 = G__65977;
count__65826_65961 = G__65978;
i__65827_65962 = G__65979;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(result))){
var seq__65828_65980 = cljs.core.seq(cljs.core.deref(to_cancel));
var chunk__65829_65981 = null;
var count__65830_65982 = (0);
var i__65831_65983 = (0);
while(true){
if((i__65831_65983 < count__65830_65982)){
var t_65984 = chunk__65829_65981.cljs$core$IIndexed$_nth$arity$2(null,i__65831_65983);
var map__65838_65985 = (function (){var G__65839 = t_65984;
if((G__65839 == null)){
return null;
} else {
return cljs.core.meta(G__65839);
}
})();
var map__65838_65986__$1 = (((((!((map__65838_65985 == null))))?(((((map__65838_65985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65838_65985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65838_65985):map__65838_65985);
var component_65987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838_65986__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_65988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65838_65986__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_65987,params_65988);


var G__65989 = seq__65828_65980;
var G__65990 = chunk__65829_65981;
var G__65991 = count__65830_65982;
var G__65992 = (i__65831_65983 + (1));
seq__65828_65980 = G__65989;
chunk__65829_65981 = G__65990;
count__65830_65982 = G__65991;
i__65831_65983 = G__65992;
continue;
} else {
var temp__5735__auto___65993 = cljs.core.seq(seq__65828_65980);
if(temp__5735__auto___65993){
var seq__65828_65994__$1 = temp__5735__auto___65993;
if(cljs.core.chunked_seq_QMARK_(seq__65828_65994__$1)){
var c__4550__auto___65995 = cljs.core.chunk_first(seq__65828_65994__$1);
var G__65996 = cljs.core.chunk_rest(seq__65828_65994__$1);
var G__65997 = c__4550__auto___65995;
var G__65998 = cljs.core.count(c__4550__auto___65995);
var G__65999 = (0);
seq__65828_65980 = G__65996;
chunk__65829_65981 = G__65997;
count__65830_65982 = G__65998;
i__65831_65983 = G__65999;
continue;
} else {
var t_66000 = cljs.core.first(seq__65828_65994__$1);
var map__65841_66001 = (function (){var G__65842 = t_66000;
if((G__65842 == null)){
return null;
} else {
return cljs.core.meta(G__65842);
}
})();
var map__65841_66002__$1 = (((((!((map__65841_66001 == null))))?(((((map__65841_66001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65841_66001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65841_66001):map__65841_66001);
var component_66003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841_66002__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_66004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65841_66002__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_66003,params_66004);


var G__66005 = cljs.core.next(seq__65828_65994__$1);
var G__66006 = null;
var G__66007 = (0);
var G__66008 = (0);
seq__65828_65980 = G__66005;
chunk__65829_65981 = G__66006;
count__65830_65982 = G__66007;
i__65831_65983 = G__66008;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.deref(result);
});
/**
 * Change the route, starting at the given Fulcro class or instance (scanning for the first router from there).  `new-route` is a vector
 *   of string components to pass through to the nearest child router as the new path. The first argument is any live component
 *   or the app.  The `timeouts` are as in `change-route`.
 *   It is safe to call this from within a mutation.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_relative(var_args){
var G__65845 = arguments.length;
switch (G__65845) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts){
if(cljs.core.truth_((function (){var and__4120__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path(app_or_comp,relative_class_or_instance,new_route)));
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,391,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find route targets for new-route",new_route], null);
}),null)),null,432454995);
} else {
}

if(cljs.core.truth_(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving(app_or_comp,relative_class_or_instance,new_route))){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var G__65847 = root;
var map__65848 = G__65847;
var map__65848__$1 = (((((!((map__65848 == null))))?(((((map__65848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65848):map__65848);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65848__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path = new_route;
var G__65847__$1 = G__65847;
var path__$1 = path;
while(true){
var map__65861 = G__65847__$1;
var map__65861__$1 = (((((!((map__65861 == null))))?(((((map__65861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65861):map__65861);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65861__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path__$2 = path__$1;
if(cljs.core.truth_((function (){var and__4120__auto__ = component__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__4120__auto__;
}
})())){
var map__65863 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component__$1,path__$2);
var map__65863__$1 = (((((!((map__65863 == null))))?(((((map__65863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65863):map__65863);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65863__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast = (function (){var G__65865 = target;
var G__65865__$1 = (((G__65865 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(G__65865,state_map));
if((G__65865__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__65865__$1);
}
})();
var prefix_length = cljs.core.count(matching_prefix);
var remaining_path = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length,path__$2));
var segment = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__65847__$1,path__$1,map__65863,map__65863__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__65861,map__65861__$1,component__$1,path__$2,G__65847,map__65848,map__65848__$1,component,path,app__$1,state_map,router,root_query,ast,root){
return (function (p,p__65866){
var vec__65867 = p__65866;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65867,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__65847__$1,path__$1,map__65863,map__65863__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__65861,map__65861__$1,component__$1,path__$2,G__65847,map__65848,map__65848__$1,component,path,app__$1,state_map,router,root_query,ast,root))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__65847__$1,path__$1,map__65863,map__65863__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__65861,map__65861__$1,component__$1,path__$2,G__65847,map__65848,map__65848__$1,component,path,app__$1,state_map,router,root_query,ast,root){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__65847__$1,path__$1,map__65863,map__65863__$1,target,matching_prefix,target_ast,prefix_length,remaining_path,segment,map__65861,map__65861__$1,component__$1,path__$2,G__65847,map__65848,map__65848__$1,component,path,app__$1,state_map,router,root_query,ast,root))
,segment,matching_prefix));
var router_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var target_ident = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target,app__$1,params);
var completing_action = (function (){var or__4131__auto__ = (function (){var G__65871 = target_ident;
var G__65871__$1 = (((G__65871 == null))?null:cljs.core.meta(G__65871));
if((G__65871__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__65871__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var event_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000),new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(100)], null),timeouts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),matching_prefix,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target,new cljs.core.Keyword(null,"params","params",710516235),params)], null)], 0));
if(cljs.core.not(com.fulcrologic.fulcro.ui_state_machines.get_active_state(app__$1,router_id))){
com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app_or_comp,com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine,router_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,component__$1)], null),event_data);
} else {
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,router_id,new cljs.core.Keyword(null,"route!","route!",-1286958144),event_data);
}

(completing_action.cljs$core$IFn$_invoke$arity$0 ? completing_action.cljs$core$IFn$_invoke$arity$0() : completing_action.call(null));

if(cljs.core.seq(remaining_path)){
var G__66010 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast,remaining_path);
var G__66011 = remaining_path;
G__65847__$1 = G__66010;
path__$1 = G__66011;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,428,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route request cancelled by on-screen target."], null);
}),null)),null,-751836810);
}
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$lang$maxFixedArity = 4;

/**
 * Trigger a route change.
 * 
 *   this - The component (or app) that is causing the route change.
 *   new-route - A vector of URI components to pass to the router.
 *   timeouts - A map of timeouts that affect UI during deferred routes: {:error-timeout ms :deferred-timeout ms}
 * 
 *   The error timeout is how long to wait  (default 5000ms) before showing the error-ui of a route (which must be defined on the
 *   router that is having problems).  The deferred-timeout (default 100ms) is how long to wait before showing the loading-ui of
 *   a deferred router (to prevent flicker).
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route(var_args){
var G__65873 = arguments.length;
switch (G__65873) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$3(this$,new_route,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$core$IFn$_invoke$arity$3 = (function (this$,new_route,timeouts){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this$);
var root = com.fulcrologic.fulcro.application.root_class(app__$1);
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative.cljs$core$IFn$_invoke$arity$4(app__$1,root,new_route,timeouts);
});

com.fulcrologic.fulcro.routing.dynamic_routing.change_route.cljs$lang$maxFixedArity = 3;

/**
 * Returns the current active route, starting from the relative Fulcro class or instance.
 * 
 *   Any component using this as a basis for rendering will need to add the following to their query to
 *   ensure the props of that component change on route changes:
 * 
 *   ```
 *   [::uism/asm-id fq-router-kw]
 *   ```
 * 
 *   where `fq-router-kw` is a keyword that has the exact namespace and name of the router you're interested in. If you want
 *   to just over-render you can use a quoted `_` instead.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route(this_or_app,relative_class_or_instance){
var app__$1 = com.fulcrologic.fulcro.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__4131__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__65876_66013 = root;
var map__65877_66014 = G__65876_66013;
var map__65877_66015__$1 = (((((!((map__65877_66014 == null))))?(((((map__65877_66014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65877_66014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65877_66014):map__65877_66014);
var node_66016 = map__65877_66015__$1;
var component_66017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877_66015__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__65876_66018__$1 = G__65876_66013;
while(true){
var map__65881_66019 = G__65876_66018__$1;
var map__65881_66020__$1 = (((((!((map__65881_66019 == null))))?(((((map__65881_66019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65881_66019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65881_66019):map__65881_66019);
var node_66021__$1 = map__65881_66020__$1;
var component_66022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881_66020__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_((function (){var and__4120__auto__ = component_66022__$1;
if(cljs.core.truth_(and__4120__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_66022__$1);
} else {
return and__4120__auto__;
}
})())){
var router_ident_66023 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_66022__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_66024 = cljs.core.second(router_ident_66023);
var sm_env_66025 = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_id_66024,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.PersistentArrayMap.EMPTY);
var path_segment_66026 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env_66025,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var next_router_66027 = cljs.core.some(((function (G__65876_66018__$1,router_ident_66023,router_id_66024,sm_env_66025,path_segment_66026,map__65881_66019,map__65881_66020__$1,node_66021__$1,component_66022__$1,G__65876_66013,map__65877_66014,map__65877_66015__$1,node_66016,component_66017,app__$1,state_map,router,root_query,ast,root,result){
return (function (p1__65874_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__65874_SHARP_);
});})(G__65876_66018__$1,router_ident_66023,router_id_66024,sm_env_66025,path_segment_66026,map__65881_66019,map__65881_66020__$1,node_66021__$1,component_66022__$1,G__65876_66013,map__65877_66014,map__65877_66015__$1,node_66016,component_66017,app__$1,state_map,router,root_query,ast,root,result))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_66021__$1));
if(cljs.core.seq(path_segment_66026)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.into,path_segment_66026);
} else {
}

if(cljs.core.truth_(next_router_66027)){
var G__66028 = next_router_66027;
G__65876_66018__$1 = G__66028;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
});
/**
 * Run a runtime validation on route targets to verify that they at least declare a route-segment that is a vector.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$validate_route_targets(router_instance){
var seq__65884 = cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_instance));
var chunk__65886 = null;
var count__65887 = (0);
var i__65888 = (0);
while(true){
if((i__65888 < count__65887)){
var t = chunk__65886.cljs$core$IIndexed$_nth$arity$2(null,i__65888);
var segment_66029 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__66030 = ((cljs.core.vector_QMARK_(segment_66029)) && ((!(cljs.core.empty_QMARK_(segment_66029)))) && (cljs.core.every_QMARK_(((function (seq__65884,chunk__65886,count__65887,i__65888,segment_66029,t){
return (function (p1__65883_SHARP_){
return (((p1__65883_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__65883_SHARP_ === 'string'));
});})(seq__65884,chunk__65886,count__65887,i__65888,segment_66029,t))
,segment_66029)));
if(valid_QMARK__66030){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,503,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__65884,chunk__65886,count__65887,i__65888,segment_66029,valid_QMARK__66030,t){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.components.component_name(t),"of router",com.fulcrologic.fulcro.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords"], null);
});})(seq__65884,chunk__65886,count__65887,i__65888,segment_66029,valid_QMARK__66030,t))
,null)),null,1526372989);
}


var G__66031 = seq__65884;
var G__66032 = chunk__65886;
var G__66033 = count__65887;
var G__66034 = (i__65888 + (1));
seq__65884 = G__66031;
chunk__65886 = G__66032;
count__65887 = G__66033;
i__65888 = G__66034;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65884);
if(temp__5735__auto__){
var seq__65884__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65884__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65884__$1);
var G__66035 = cljs.core.chunk_rest(seq__65884__$1);
var G__66036 = c__4550__auto__;
var G__66037 = cljs.core.count(c__4550__auto__);
var G__66038 = (0);
seq__65884 = G__66035;
chunk__65886 = G__66036;
count__65887 = G__66037;
i__65888 = G__66038;
continue;
} else {
var t = cljs.core.first(seq__65884__$1);
var segment_66039 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__66040 = ((cljs.core.vector_QMARK_(segment_66039)) && ((!(cljs.core.empty_QMARK_(segment_66039)))) && (cljs.core.every_QMARK_(((function (seq__65884,chunk__65886,count__65887,i__65888,segment_66039,t,seq__65884__$1,temp__5735__auto__){
return (function (p1__65883_SHARP_){
return (((p1__65883_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__65883_SHARP_ === 'string'));
});})(seq__65884,chunk__65886,count__65887,i__65888,segment_66039,t,seq__65884__$1,temp__5735__auto__))
,segment_66039)));
if(valid_QMARK__66040){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,503,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__65884,chunk__65886,count__65887,i__65888,segment_66039,valid_QMARK__66040,t,seq__65884__$1,temp__5735__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.components.component_name(t),"of router",com.fulcrologic.fulcro.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords"], null);
});})(seq__65884,chunk__65886,count__65887,i__65888,segment_66039,valid_QMARK__66040,t,seq__65884__$1,temp__5735__auto__))
,null)),null,-782694526);
}


var G__66041 = cljs.core.next(seq__65884__$1);
var G__66042 = null;
var G__66043 = (0);
var G__66044 = (0);
seq__65884 = G__66041;
chunk__65886 = G__66042;
count__65887 = G__66043;
i__65888 = G__66044;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns a sequence of all of the routers reachable in the query of the app.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers(state_map,component_class){
var root_query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map);
var map__65891 = edn_query_language.core.query__GT_ast(root_query);
var map__65891__$1 = (((((!((map__65891 == null))))?(((((map__65891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65891):map__65891);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var get_routers = ((function (root_query,map__65891,map__65891__$1,children){
return (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (root_query,map__65891,map__65891__$1,children){
return (function (acc,p__65893){
var map__65894 = p__65893;
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,component):acc),com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(children__$1));
});})(root_query,map__65891,map__65891__$1,children))
,cljs.core.PersistentVector.EMPTY,nodes);
});})(root_query,map__65891,map__65891__$1,children))
;
return get_routers(children);
});
/**
 * Initialize the routing system.  This ensures that all routers have state machines in app state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$initialize_BANG_(app__$1){
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var root = com.fulcrologic.fulcro.application.root_class(app__$1);
var routers = com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers(state_map,root);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (state_map,root,routers){
return (function (r){
var router_ident = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var G__65896 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),r)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,r)], null)], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__65896) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__65896));
});})(state_map,root,routers))
,routers);
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,tx);
});

//# sourceMappingURL=com.fulcrologic.fulcro.routing.dynamic_routing.js.map
