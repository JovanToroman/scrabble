goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return ident;
} else {
return and__4120__auto__;
}
})())){
var map__59245 = app__$1;
var map__59245__$1 = (((((!((map__59245 == null))))?(((((map__59245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59245):map__59245);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59245__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__59245,map__59245__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__59245,map__59245__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,-385973378);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__59245,map__59245__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__59245,map__59245__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (root){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
});})(root))
,null)),null,-2053452635);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__59248 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__59249 = null;
var count__59250 = (0);
var i__59251 = (0);
while(true){
if((i__59251 < count__59250)){
var c = chunk__59249.cljs$core$IIndexed$_nth$arity$2(null,i__59251);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59416 = seq__59248;
var G__59417 = chunk__59249;
var G__59418 = count__59250;
var G__59419 = (i__59251 + (1));
seq__59248 = G__59416;
chunk__59249 = G__59417;
count__59250 = G__59418;
i__59251 = G__59419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59248);
if(temp__5735__auto__){
var seq__59248__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59248__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59248__$1);
var G__59420 = cljs.core.chunk_rest(seq__59248__$1);
var G__59421 = c__4550__auto__;
var G__59422 = cljs.core.count(c__4550__auto__);
var G__59423 = (0);
seq__59248 = G__59420;
chunk__59249 = G__59421;
count__59250 = G__59422;
i__59251 = G__59423;
continue;
} else {
var c = cljs.core.first(seq__59248__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__59425 = cljs.core.next(seq__59248__$1);
var G__59426 = null;
var G__59427 = (0);
var G__59428 = (0);
seq__59248 = G__59425;
chunk__59249 = G__59426;
count__59250 = G__59427;
i__59251 = G__59428;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__59256 = app__$1;
var map__59256__$1 = (((((!((map__59256 == null))))?(((((map__59256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59256):map__59256);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59256__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59257 = cljs.core.deref(runtime_atom);
var map__59257__$1 = (((((!((map__59257 == null))))?(((((map__59257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59257):map__59257);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59257__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59258 = indexes;
var map__59258__$1 = (((((!((map__59258 == null))))?(((((map__59258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59258):map__59258);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59258__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59258__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59258__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__59264 = cljs.core.seq(classes);
var chunk__59265 = null;
var count__59266 = (0);
var i__59267 = (0);
while(true){
if((i__59267 < count__59266)){
var class$ = chunk__59265.cljs$core$IIndexed$_nth$arity$2(null,i__59267);
var seq__59298_59434 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59300_59435 = null;
var count__59301_59436 = (0);
var i__59302_59437 = (0);
while(true){
if((i__59302_59437 < count__59301_59436)){
var component_59440 = chunk__59300_59435.cljs$core$IIndexed$_nth$arity$2(null,i__59302_59437);
var component_ident_59444 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59440);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59444,component_59440);


var G__59446 = seq__59298_59434;
var G__59447 = chunk__59300_59435;
var G__59448 = count__59301_59436;
var G__59449 = (i__59302_59437 + (1));
seq__59298_59434 = G__59446;
chunk__59300_59435 = G__59447;
count__59301_59436 = G__59448;
i__59302_59437 = G__59449;
continue;
} else {
var temp__5735__auto___59452 = cljs.core.seq(seq__59298_59434);
if(temp__5735__auto___59452){
var seq__59298_59454__$1 = temp__5735__auto___59452;
if(cljs.core.chunked_seq_QMARK_(seq__59298_59454__$1)){
var c__4550__auto___59456 = cljs.core.chunk_first(seq__59298_59454__$1);
var G__59457 = cljs.core.chunk_rest(seq__59298_59454__$1);
var G__59458 = c__4550__auto___59456;
var G__59459 = cljs.core.count(c__4550__auto___59456);
var G__59460 = (0);
seq__59298_59434 = G__59457;
chunk__59300_59435 = G__59458;
count__59301_59436 = G__59459;
i__59302_59437 = G__59460;
continue;
} else {
var component_59463 = cljs.core.first(seq__59298_59454__$1);
var component_ident_59464 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59463);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59464,component_59463);


var G__59465 = cljs.core.next(seq__59298_59454__$1);
var G__59466 = null;
var G__59467 = (0);
var G__59468 = (0);
seq__59298_59434 = G__59465;
chunk__59300_59435 = G__59466;
count__59301_59436 = G__59467;
i__59302_59437 = G__59468;
continue;
}
} else {
}
}
break;
}


var G__59471 = seq__59264;
var G__59472 = chunk__59265;
var G__59473 = count__59266;
var G__59474 = (i__59267 + (1));
seq__59264 = G__59471;
chunk__59265 = G__59472;
count__59266 = G__59473;
i__59267 = G__59474;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59264);
if(temp__5735__auto__){
var seq__59264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59264__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59264__$1);
var G__59481 = cljs.core.chunk_rest(seq__59264__$1);
var G__59482 = c__4550__auto__;
var G__59483 = cljs.core.count(c__4550__auto__);
var G__59484 = (0);
seq__59264 = G__59481;
chunk__59265 = G__59482;
count__59266 = G__59483;
i__59267 = G__59484;
continue;
} else {
var class$ = cljs.core.first(seq__59264__$1);
var seq__59321_59487 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__59323_59488 = null;
var count__59324_59489 = (0);
var i__59325_59490 = (0);
while(true){
if((i__59325_59490 < count__59324_59489)){
var component_59492 = chunk__59323_59488.cljs$core$IIndexed$_nth$arity$2(null,i__59325_59490);
var component_ident_59493 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59492);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59493,component_59492);


var G__59494 = seq__59321_59487;
var G__59495 = chunk__59323_59488;
var G__59496 = count__59324_59489;
var G__59497 = (i__59325_59490 + (1));
seq__59321_59487 = G__59494;
chunk__59323_59488 = G__59495;
count__59324_59489 = G__59496;
i__59325_59490 = G__59497;
continue;
} else {
var temp__5735__auto___59498__$1 = cljs.core.seq(seq__59321_59487);
if(temp__5735__auto___59498__$1){
var seq__59321_59499__$1 = temp__5735__auto___59498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59321_59499__$1)){
var c__4550__auto___59500 = cljs.core.chunk_first(seq__59321_59499__$1);
var G__59501 = cljs.core.chunk_rest(seq__59321_59499__$1);
var G__59502 = c__4550__auto___59500;
var G__59503 = cljs.core.count(c__4550__auto___59500);
var G__59504 = (0);
seq__59321_59487 = G__59501;
chunk__59323_59488 = G__59502;
count__59324_59489 = G__59503;
i__59325_59490 = G__59504;
continue;
} else {
var component_59505 = cljs.core.first(seq__59321_59499__$1);
var component_ident_59506 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_59505);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_59506,component_59505);


var G__59507 = cljs.core.next(seq__59321_59499__$1);
var G__59508 = null;
var G__59509 = (0);
var G__59510 = (0);
seq__59321_59487 = G__59507;
chunk__59323_59488 = G__59508;
count__59324_59489 = G__59509;
i__59325_59490 = G__59510;
continue;
}
} else {
}
}
break;
}


var G__59511 = cljs.core.next(seq__59264__$1);
var G__59512 = null;
var G__59513 = (0);
var G__59514 = (0);
seq__59264 = G__59511;
chunk__59265 = G__59512;
count__59266 = G__59513;
i__59267 = G__59514;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__59335 = app__$1;
var map__59335__$1 = (((((!((map__59335 == null))))?(((((map__59335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59335):map__59335);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__59336 = cljs.core.deref(runtime_atom);
var map__59336__$1 = (((((!((map__59336 == null))))?(((((map__59336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59336):map__59336);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59336__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__59337 = indexes;
var map__59337__$1 = (((((!((map__59337 == null))))?(((((map__59337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59337):map__59337);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59337__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59337__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__59335,map__59335__$1,runtime_atom,map__59336,map__59336__$1,indexes,map__59337,map__59337__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__59335,map__59335__$1,runtime_atom,map__59336,map__59336__$1,indexes,map__59337,map__59337__$1,prop__GT_classes,class__GT_components){
return (function (p1__59332_SHARP_,p2__59333_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__59332_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__59333_SHARP_) : class__GT_components.call(null,p2__59333_SHARP_)));
});})(classes,map__59335,map__59335__$1,runtime_atom,map__59336,map__59336__$1,indexes,map__59337,map__59337__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__59335,map__59335__$1,runtime_atom,map__59336,map__59336__$1,indexes,map__59337,map__59337__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__59349 = app__$1;
var map__59349__$1 = (((((!((map__59349 == null))))?(((((map__59349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59349):map__59349);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__59350 = cljs.core.deref(runtime_atom);
var map__59350__$1 = (((((!((map__59350 == null))))?(((((map__59350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59350):map__59350);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__59351 = indexes;
var map__59351__$1 = (((((!((map__59351 == null))))?(((((map__59351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59351):map__59351);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59351__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59351__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59351__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59351__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__59360 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__59360__$1 = (((((!((map__59360 == null))))?(((((map__59360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59360):map__59360);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59360__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59360__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__59364_59532 = cljs.core.seq(limited_to_render);
var chunk__59367_59533 = null;
var count__59368_59534 = (0);
var i__59369_59535 = (0);
while(true){
if((i__59369_59535 < count__59368_59534)){
var c_59536 = chunk__59367_59533.cljs$core$IIndexed$_nth$arity$2(null,i__59369_59535);
var ident_59537 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59536);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59537,c_59536);


var G__59538 = seq__59364_59532;
var G__59539 = chunk__59367_59533;
var G__59540 = count__59368_59534;
var G__59541 = (i__59369_59535 + (1));
seq__59364_59532 = G__59538;
chunk__59367_59533 = G__59539;
count__59368_59534 = G__59540;
i__59369_59535 = G__59541;
continue;
} else {
var temp__5735__auto___59544 = cljs.core.seq(seq__59364_59532);
if(temp__5735__auto___59544){
var seq__59364_59545__$1 = temp__5735__auto___59544;
if(cljs.core.chunked_seq_QMARK_(seq__59364_59545__$1)){
var c__4550__auto___59546 = cljs.core.chunk_first(seq__59364_59545__$1);
var G__59547 = cljs.core.chunk_rest(seq__59364_59545__$1);
var G__59548 = c__4550__auto___59546;
var G__59549 = cljs.core.count(c__4550__auto___59546);
var G__59550 = (0);
seq__59364_59532 = G__59547;
chunk__59367_59533 = G__59548;
count__59368_59534 = G__59549;
i__59369_59535 = G__59550;
continue;
} else {
var c_59551 = cljs.core.first(seq__59364_59545__$1);
var ident_59552 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_59551);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_59552,c_59551);


var G__59554 = cljs.core.next(seq__59364_59545__$1);
var G__59555 = null;
var G__59556 = (0);
var G__59557 = (0);
seq__59364_59532 = G__59554;
chunk__59367_59533 = G__59555;
count__59368_59534 = G__59556;
i__59369_59535 = G__59557;
continue;
}
} else {
}
}
break;
}

var seq__59375 = cljs.core.seq(limited_idents);
var chunk__59376 = null;
var count__59377 = (0);
var i__59378 = (0);
while(true){
if((i__59378 < count__59377)){
var i = chunk__59376.cljs$core$IIndexed$_nth$arity$2(null,i__59378);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59559 = seq__59375;
var G__59560 = chunk__59376;
var G__59561 = count__59377;
var G__59562 = (i__59378 + (1));
seq__59375 = G__59559;
chunk__59376 = G__59560;
count__59377 = G__59561;
i__59378 = G__59562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59375);
if(temp__5735__auto__){
var seq__59375__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59375__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59375__$1);
var G__59564 = cljs.core.chunk_rest(seq__59375__$1);
var G__59565 = c__4550__auto__;
var G__59566 = cljs.core.count(c__4550__auto__);
var G__59567 = (0);
seq__59375 = G__59564;
chunk__59376 = G__59565;
count__59377 = G__59566;
i__59378 = G__59567;
continue;
} else {
var i = cljs.core.first(seq__59375__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__59570 = cljs.core.next(seq__59375__$1);
var G__59571 = null;
var G__59572 = (0);
var G__59573 = (0);
seq__59375 = G__59570;
chunk__59376 = G__59571;
count__59377 = G__59572;
i__59378 = G__59573;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__59349,map__59349__$1,runtime_atom,state_atom,map__59350,map__59350__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__59351,map__59351__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__59349,map__59349__$1,runtime_atom,state_atom,map__59350,map__59350__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__59351,map__59351__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__59381 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__59381__$1 = (((((!((map__59381 == null))))?(((((map__59381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59381):map__59381);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59381__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59381__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__59385_59575 = cljs.core.seq(all_idents);
var chunk__59386_59576 = null;
var count__59387_59577 = (0);
var i__59388_59578 = (0);
while(true){
if((i__59388_59578 < count__59387_59577)){
var i_59579 = chunk__59386_59576.cljs$core$IIndexed$_nth$arity$2(null,i__59388_59578);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59579);


var G__59580 = seq__59385_59575;
var G__59581 = chunk__59386_59576;
var G__59582 = count__59387_59577;
var G__59583 = (i__59388_59578 + (1));
seq__59385_59575 = G__59580;
chunk__59386_59576 = G__59581;
count__59387_59577 = G__59582;
i__59388_59578 = G__59583;
continue;
} else {
var temp__5735__auto___59584 = cljs.core.seq(seq__59385_59575);
if(temp__5735__auto___59584){
var seq__59385_59585__$1 = temp__5735__auto___59584;
if(cljs.core.chunked_seq_QMARK_(seq__59385_59585__$1)){
var c__4550__auto___59586 = cljs.core.chunk_first(seq__59385_59585__$1);
var G__59587 = cljs.core.chunk_rest(seq__59385_59585__$1);
var G__59588 = c__4550__auto___59586;
var G__59589 = cljs.core.count(c__4550__auto___59586);
var G__59590 = (0);
seq__59385_59575 = G__59587;
chunk__59386_59576 = G__59588;
count__59387_59577 = G__59589;
i__59388_59578 = G__59590;
continue;
} else {
var i_59591 = cljs.core.first(seq__59385_59585__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_59591);


var G__59592 = cljs.core.next(seq__59385_59585__$1);
var G__59593 = null;
var G__59594 = (0);
var G__59595 = (0);
seq__59385_59575 = G__59592;
chunk__59386_59576 = G__59593;
count__59387_59577 = G__59594;
i__59388_59578 = G__59595;
continue;
}
} else {
}
}
break;
}

var seq__59389 = cljs.core.seq(extra_to_force);
var chunk__59390 = null;
var count__59391 = (0);
var i__59392 = (0);
while(true){
if((i__59392 < count__59391)){
var c = chunk__59390.cljs$core$IIndexed$_nth$arity$2(null,i__59392);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__59598 = seq__59389;
var G__59599 = chunk__59390;
var G__59600 = count__59391;
var G__59601 = (i__59392 + (1));
seq__59389 = G__59598;
chunk__59390 = G__59599;
count__59391 = G__59600;
i__59392 = G__59601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59389);
if(temp__5735__auto__){
var seq__59389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59389__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59389__$1);
var G__59604 = cljs.core.chunk_rest(seq__59389__$1);
var G__59605 = c__4550__auto__;
var G__59606 = cljs.core.count(c__4550__auto__);
var G__59607 = (0);
seq__59389 = G__59604;
chunk__59390 = G__59605;
count__59391 = G__59606;
i__59392 = G__59607;
continue;
} else {
var c = cljs.core.first(seq__59389__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__59611 = cljs.core.next(seq__59389__$1);
var G__59612 = null;
var G__59613 = (0);
var G__59614 = (0);
seq__59389 = G__59611;
chunk__59390 = G__59612;
count__59391 = G__59613;
i__59392 = G__59614;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__59402 = arguments.length;
switch (G__59402) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__59406){
var map__59407 = p__59406;
var map__59407__$1 = (((((!((map__59407 == null))))?(((((map__59407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59407):map__59407);
var options = map__59407__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59407__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59407__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e59410){var e = e59410;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__59407,map__59407__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__59407,map__59407__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,-878439656);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
