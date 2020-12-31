goog.provide('com.fulcrologic.guardrails.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.timbre');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__58331 = data;
var map__58331__$1 = (((((!((map__58331 == null))))?(((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58331):map__58331);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58331__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(level)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5735__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5735__auto__)){
var err = temp__5735__auto__;
return ["\n",taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,cljs.core.PersistentArrayMap.EMPTY)].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(args_QMARK_,p__58333,spec,value){
var map__58334 = p__58333;
var map__58334__$1 = (((((!((map__58334 == null))))?(((((map__58334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58334):map__58334);
var log_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"log-level","log-level",862121670));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58334__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var vargs_QMARK__58348 = (function (){var and__4120__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return vararg_QMARK_;
} else {
return and__4120__auto__;
}
})();
var varg_58349 = (cljs.core.truth_(vargs_QMARK__58348)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_58350 = (cljs.core.truth_(vargs_QMARK__58348)?((cljs.core.map_QMARK_(varg_58349))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_58349))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_58349))):value);
var valid_exception_58351 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_58350)){
} else {
var config_58352 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),com.fulcrologic.guardrails.core.output_fn);
var problem_58353 = expound.alpha.expound_str(spec,specable_args_58350);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(config_58352,(function (){var or__4131__auto__ = log_level;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"error","error",-978969032);
}
})(),"com.fulcrologic.guardrails.core",null,50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (config_58352,problem_58353,vargs_QMARK__58348,varg_58349,specable_args_58350,valid_exception_58351,map__58334,map__58334__$1,log_level,vararg_QMARK_,throw_QMARK_,fn_name){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n"].join(''),problem_58353], null);
});})(config_58352,problem_58353,vargs_QMARK__58348,varg_58349,specable_args_58350,valid_exception_58351,map__58334,map__58334__$1,log_level,vararg_QMARK_,throw_QMARK_,fn_name))
,null)),null,-692080594);

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_58351,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(problem_58353,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)], null)));
} else {
}
}
}catch (e58336){var e_58354 = e58336;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.guardrails.core",null,54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_58354,vargs_QMARK__58348,varg_58349,specable_args_58350,valid_exception_58351,map__58334,map__58334__$1,log_level,vararg_QMARK_,throw_QMARK_,fn_name){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_58354,"BUG: Internal error in expound or clojure spec."], null);
});})(e_58354,vargs_QMARK__58348,varg_58349,specable_args_58350,valid_exception_58351,map__58334,map__58334__$1,log_level,vararg_QMARK_,throw_QMARK_,fn_name))
,null)),null,-1134800080);
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_58351))){
throw cljs.core.deref(valid_exception_58351);
} else {
}

return null;
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
