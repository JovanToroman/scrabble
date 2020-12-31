goog.provide('app.mutations');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.wsscode.pathom.core');
/**
 * 
 */
app.mutations.scramble = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.mutations","scramble","app.mutations/scramble",1679587679,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.mutations","scramble","app.mutations/scramble",1679587679,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"remote","remote",-1593576576),((function (_){
return (function app$mutations$remote(_env){
return true;
});})(_))
,new cljs.core.Keyword(null,"error-action","error-action",-1147840498),((function (_){
return (function app$mutations$error_action(p__52654){
var map__52655 = p__52654;
var map__52655__$1 = (((((!((map__52655 == null))))?(((((map__52655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52655):map__52655);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52655__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52655__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52655__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__52657_52665 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol("app.mutations","scramble","app.mutations/scramble",1679587679,null)], null));
var map__52657_52666__$1 = (((((!((map__52657_52665 == null))))?(((((map__52657_52665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52657_52665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52657_52665):map__52657_52665);
var error_message_52667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657_52666__$1,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","error","ui/error",-978964660)], null)),error_message_52667);

return null;
});})(_))
,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),((function (_){
return (function app$mutations$ok_action(p__52659){
var map__52660 = p__52659;
var map__52660__$1 = (((((!((map__52660 == null))))?(((((map__52660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52660):map__52660);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52660__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52660__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52660__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var answer_52668 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol("app.mutations","scramble","app.mutations/scramble",1679587679,null),new cljs.core.Keyword(null,"answer","answer",-742633163)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","answer","ui/answer",-742645599)], null)),answer_52668);

return null;
});})(_))
,new cljs.core.Keyword(null,"action","action",-811238024),((function (_){
return (function app$mutations$action(p__52662){
var map__52663 = p__52662;
var map__52663__$1 = (((((!((map__52663 == null))))?(((((map__52663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52663):map__52663);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52663__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52663__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","answer","ui/answer",-742645599),new cljs.core.Keyword("ui","error","ui/error",-978964660)], 0));

return null;
});})(_))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (_){
return (function (env){
var temp__5735__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5735__auto__)){
var default_action = temp__5735__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(_))
], null);
}));

//# sourceMappingURL=app.mutations.js.map
