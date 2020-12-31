goog.provide('com.wsscode.pathom.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.parser');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('edn_query_language.core');
goog.require('goog.object');
goog.require('com.wsscode.pathom.trace');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50512){
return cljs.core.map_QMARK_(G__50512);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__31559__auto__,v__31560__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__31560__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50513){
return cljs.core.vector_QMARK_(G__50513);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50514){
return cljs.core.map_QMARK_(G__50514);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__31559__auto__,v__31560__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__31560__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",-1037999645,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__50515_SHARP_){
return (p1__50515_SHARP_ instanceof cljs.core.IAtom);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.set_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"tx","tx",466630418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50517){
return cljs.core.map_QMARK_(G__50517);
})], null),(function (G__50517){
return cljs.core.map_QMARK_(G__50517);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));
com.wsscode.pathom.core.break_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Takes an AST and return a single set with all properties that appear in a query.
 * 
 *   Example:
 * 
 *   (-> [:foo {:bar [:baz]}] eql/query->ast pc/all-out-attributes)
 *   ; => #{:foo :bar :baz}
 */
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__50518){
var map__50519 = p__50518;
var map__50519__$1 = (((((!((map__50519 == null))))?(((((map__50519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50519):map__50519);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__50519,map__50519__$1,children){
return (function (attrs,p__50521){
var map__50522 = p__50521;
var map__50522__$1 = (((((!((map__50522 == null))))?(((((map__50522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50522):map__50522);
var node = map__50522__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__50524 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__50524,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__50524;
}
});})(map__50519,map__50519__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52238 = arguments.length;
var i__4731__auto___52239 = (0);
while(true){
if((i__4731__auto___52239 < len__4730__auto___52238)){
args__4736__auto__.push((arguments[i__4731__auto___52239]));

var G__52240 = (i__4731__auto___52239 + (1));
i__4731__auto___52239 = G__52240;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_((function (p1__50525_SHARP_){
return ((cljs.core.map_QMARK_(p1__50525_SHARP_)) || ((p1__50525_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq50526){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50526));
});

/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.core.query__GT_ast = (function com$wsscode$pathom$core$query__GT_ast(query_expr){
return com.wsscode.pathom.parser.query__GT_ast(query_expr);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","query->ast","com.wsscode.pathom.core/query->ast",1131110178,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));
/**
 * Call query->ast and return the first children.
 */
com.wsscode.pathom.core.query__GT_ast1 = (function com$wsscode$pathom$core$query__GT_ast1(query_expr){
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query_expr)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","query->ast1","com.wsscode.pathom.core/query->ast1",-1679235515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));
com.wsscode.pathom.core.ast__GT_query = (function com$wsscode$pathom$core$ast__GT_query(query_ast){

return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","ast->query","com.wsscode.pathom.core/ast->query",1778798815,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));
com.wsscode.pathom.core.filter_ast = (function com$wsscode$pathom$core$filter_ast(f,ast){
return clojure.walk.prewalk((function com$wsscode$pathom$core$filter_ast_$_filter_ast_walk(x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"children","children",-940561982))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__50527_SHARP_){
return cljs.core.filterv(f,p1__50527_SHARP_);
}));
} else {
return x;
}
}),ast);
});
/**
 * Get params from env, always returns a map.
 */
com.wsscode.pathom.core.params = (function com$wsscode$pathom$core$params(env){
var or__4131__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Add attribute param, eg:
 * 
 *   ```
 *   (p/update-attribute-param :keyword assoc :foo "bar") => (:keyword {:foo "bar"})
 *   (p/update-attribute-param '(:keyword {:param "prev"}) assoc :foo "bar") => (:keyword {:foo "bar" :param "prev"})
 *   ```
 *   
 */
com.wsscode.pathom.core.update_attribute_param = (function com$wsscode$pathom$core$update_attribute_param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52241 = arguments.length;
var i__4731__auto___52242 = (0);
while(true){
if((i__4731__auto___52242 < len__4730__auto___52241)){
args__4736__auto__.push((arguments[i__4731__auto___52242]));

var G__52243 = (i__4731__auto___52242 + (1));
i__4731__auto___52242 = G__52243;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
if(cljs.core.seq_QMARK_(x)){
var vec__50531 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50531,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50531,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq50528){
var G__50529 = cljs.core.first(seq50528);
var seq50528__$1 = cljs.core.next(seq50528);
var G__50530 = cljs.core.first(seq50528__$1);
var seq50528__$2 = cljs.core.next(seq50528__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50529,G__50530,seq50528__$2);
});

com.wsscode.pathom.core.optional_attribute = (function com$wsscode$pathom$core$optional_attribute(x){
if(cljs.core.truth_((function (){var or__4131__auto__ = (x instanceof cljs.core.Keyword);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
})())){
} else {
throw (new Error(["Assert failed: ","Optional value must be a keyword or a parameterized attribute","\n","(or (keyword? x) (list x))"].join('')));
}

return com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),true], 0));
});
com.wsscode.pathom.core._QMARK_ = com.wsscode.pathom.core.optional_attribute;
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom.core.union_children_QMARK_ = (function com$wsscode$pathom$core$union_children_QMARK_(ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__50534 = ast;
var G__50534__$1 = (((G__50534 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__50534));
var G__50534__$2 = (((G__50534__$1 == null))?null:cljs.core.first(G__50534__$1));
if((G__50534__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__50534__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__50537,reader){
var map__50538 = p__50537;
var map__50538__$1 = (((((!((map__50538 == null))))?(((((map__50538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50538):map__50538);
var env = map__50538__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50538__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5733__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__50541 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50541,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__50538,map__50538__$1,env,ast){
return (function (p1__50535_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__50535_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__50535_SHARP_));
});})(map__50538,map__50538__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__50538,map__50538__$1,env,ast){
return (function (p1__50536_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50536_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__50538,map__50538__$1,env,ast))
),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),reader);
if(cljs.core.seq(res)){
return cljs.core.first(res);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.ifn_QMARK_(reader)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't process reader",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader","reader",169660853),reader], null));

}
}
}
});
/**
 * Runs the read process for the reading, the reader can be a function, a vector or a map:
 * 
 *   function: will receive the environment as argument
 *   map: will dispatch from the ast key to a reader on the map value
 *   vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next
 */
com.wsscode.pathom.core.read_from = (function com$wsscode$pathom$core$read_from(env,reader){
var res__48511__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__){
return (function (state_50561){
var state_val_50562 = (state_50561[(1)]);
if((state_val_50562 === (1))){
var state_50561__$1 = state_50561;
var statearr_50563_52244 = state_50561__$1;
(statearr_50563_52244[(2)] = null);

(statearr_50563_52244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (2))){
var inst_50559 = (state_50561[(2)]);
var state_50561__$1 = state_50561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50561__$1,inst_50559);
} else {
if((state_val_50562 === (3))){
var inst_50546 = (state_50561[(2)]);
var state_50561__$1 = state_50561;
var statearr_50564_52245 = state_50561__$1;
(statearr_50564_52245[(2)] = inst_50546);


cljs.core.async.impl.ioc_helpers.process_exception(state_50561__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50561,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50561__$1 = state_50561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50561__$1,(5),res__48511__auto__);
} else {
if((state_val_50562 === (5))){
var inst_50552 = (state_50561[(7)]);
var inst_50551 = (state_50561[(2)]);
var inst_50552__$1 = com.wsscode.common.async_cljs.throw_err(inst_50551);
var inst_50553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50552__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_50561__$1 = (function (){var statearr_50565 = state_50561;
(statearr_50565[(7)] = inst_50552__$1);

return statearr_50565;
})();
if(inst_50553){
var statearr_50566_52246 = state_50561__$1;
(statearr_50566_52246[(1)] = (6));

} else {
var statearr_50567_52247 = state_50561__$1;
(statearr_50567_52247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (6))){
var state_50561__$1 = state_50561;
var statearr_50568_52248 = state_50561__$1;
(statearr_50568_52248[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_50568_52248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (7))){
var inst_50552 = (state_50561[(7)]);
var state_50561__$1 = state_50561;
var statearr_50569_52249 = state_50561__$1;
(statearr_50569_52249[(2)] = inst_50552);

(statearr_50569_52249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (8))){
var inst_50557 = (state_50561[(2)]);
var state_50561__$1 = state_50561;
var statearr_50570_52250 = state_50561__$1;
(statearr_50570_52250[(2)] = inst_50557);


cljs.core.async.impl.ioc_helpers.process_exception(state_50561__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__42980__auto____0 = (function (){
var statearr_50571 = [null,null,null,null,null,null,null,null];
(statearr_50571[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__42980__auto__);

(statearr_50571[(1)] = (1));

return statearr_50571;
});
var com$wsscode$pathom$core$read_from_$_state_machine__42980__auto____1 = (function (state_50561){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50561);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50572){if((e50572 instanceof Object)){
var ex__42983__auto__ = e50572;
var statearr_50573_52251 = state_50561;
(statearr_50573_52251[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52252 = state_50561;
state_50561 = G__52252;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__42980__auto__ = function(state_50561){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__42980__auto____1.call(this,state_50561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__))
})();
var state__43004__auto__ = (function (){var statearr_50575 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50575[(6)] = c__43002__auto__);

return statearr_50575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__))
);

return c__43002__auto__;
} else {
var res = res__48511__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194))){
return new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137);
} else {
return res;
}
}
});
com.wsscode.pathom.core.native_map_QMARK_ = (function com$wsscode$pathom$core$native_map_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentArrayMap)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentHashMap)));
});
/**
 * Walk the structure and transduce every map with xform.
 */
com.wsscode.pathom.core.transduce_maps = (function com$wsscode$pathom$core$transduce_maps(xform,input){
return clojure.walk.prewalk((function com$wsscode$pathom$core$transduce_maps_$_elide_items_walk(x){
if(com.wsscode.pathom.core.native_map_QMARK_(x)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,x),cljs.core.meta(x));
} else {
return x;
}
}),input);
});
/**
 * Recursivelly transduce children on the AST, you can use this to apply filter/transformations
 *   on a whole AST. Each iteration of the transducer will get a single AST node to process.
 * 
 *   ```
 *   (->> [:a {:b [:c :d]} :e]
 *     (p/query->ast)
 *     (p/transduce-children (remove (comp #{:a :c} :key)))
 *     (p/ast->query))
 *   ; => [{:b [:d]} :e]
 *   ```
 */
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__50579){
var map__50580 = p__50579;
var map__50580__$1 = (((((!((map__50580 == null))))?(((((map__50580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50580):map__50580);
var node = map__50580__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__50582 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50582,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__50582,map__50580,map__50580__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__50582,map__50580,map__50580__$1,node,children){
return (function (p1__50578_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__50578_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__50578_SHARP_));
});})(G__50582,map__50580,map__50580__$1,node,children))
)),children__$1);
});})(G__50582,map__50580,map__50580__$1,node,children))
);
} else {
return G__50582;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__50586){
var vec__50588 = p__50586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50588,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50588,(1),null);
return cljs.core.contains_QMARK_(item_set,v);
})),input),cljs.core.meta(input));
});
/**
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_not_found = (function com$wsscode$pathom$core$elide_not_found(input){
return com.wsscode.pathom.core.elide_items(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null),input);
});
com.wsscode.pathom.core.focus_subquery = com.wsscode.pathom.parser.focus_subquery;
com.wsscode.pathom.core.atom_QMARK_ = (function com$wsscode$pathom$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.core.normalize_atom = (function com$wsscode$pathom$core$normalize_atom(x){
if(com.wsscode.pathom.core.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.core.special_outputs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__50598){
var map__50599 = p__50598;
var map__50599__$1 = (((((!((map__50599 == null))))?(((((map__50599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50599):map__50599);
var env = map__50599__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,(function (){var or__4131__auto__ = entity_key;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031);
}
})());
});
com.wsscode.pathom.core.maybe_atom = (function com$wsscode$pathom$core$maybe_atom(x){
if(com.wsscode.pathom.core.atom_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.core.entity_value_merge = (function com$wsscode$pathom$core$entity_value_merge(x,y){
if((y === new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137))){
return x;
} else {
return y;
}
});
/**
 * Fetch the entity according to the ::entity-key. If the entity is an IAtom, it will be derefed.
 * 
 *   If a second argument is sent, calls the parser against current element to guarantee that some fields are loaded. This
 *   is useful when you need to ensure some values are loaded in order to fetch some more complex data. NOTE: When using
 *   this call with an explicit vector of attributes the parser will not be invoked for attributes that already exist in
 *   the current value of the current entity.
 */
com.wsscode.pathom.core.entity = (function com$wsscode$pathom$core$entity(var_args){
var G__50610 = arguments.length;
switch (G__50610) {
case 1:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1 = (function (env){
var e = com.wsscode.pathom.core.raw_entity(env);
return com.wsscode.pathom.core.maybe_atom(e);
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__50613,attributes){
var map__50614 = p__50613;
var map__50614__$1 = (((((!((map__50614 == null))))?(((((map__50614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50614):map__50614);
var env = map__50614__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50614__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__48511__auto__ = (function (){var G__50618 = env;
var G__50619 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__50618,G__50619) : parser.call(null,G__50618,G__50619));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__,e,map__50614,map__50614__$1,env,parser){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__,e,map__50614,map__50614__$1,env,parser){
return (function (state_50638){
var state_val_50640 = (state_50638[(1)]);
if((state_val_50640 === (1))){
var state_50638__$1 = state_50638;
var statearr_50643_52254 = state_50638__$1;
(statearr_50643_52254[(2)] = null);

(statearr_50643_52254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50640 === (2))){
var inst_50636 = (state_50638[(2)]);
var state_50638__$1 = state_50638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50638__$1,inst_50636);
} else {
if((state_val_50640 === (3))){
var inst_50621 = (state_50638[(2)]);
var state_50638__$1 = state_50638;
var statearr_50644_52255 = state_50638__$1;
(statearr_50644_52255[(2)] = inst_50621);


cljs.core.async.impl.ioc_helpers.process_exception(state_50638__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50640 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50638,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50638__$1 = state_50638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50638__$1,(5),res__48511__auto__);
} else {
if((state_val_50640 === (5))){
var inst_50628 = (state_50638[(7)]);
var inst_50627 = (state_50638[(2)]);
var inst_50628__$1 = com.wsscode.common.async_cljs.throw_err(inst_50627);
var inst_50629 = cljs.core.map_QMARK_(inst_50628__$1);
var state_50638__$1 = (function (){var statearr_50647 = state_50638;
(statearr_50647[(7)] = inst_50628__$1);

return statearr_50647;
})();
if(inst_50629){
var statearr_50649_52256 = state_50638__$1;
(statearr_50649_52256[(1)] = (6));

} else {
var statearr_50650_52257 = state_50638__$1;
(statearr_50650_52257[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50640 === (6))){
var inst_50628 = (state_50638[(7)]);
var inst_50631 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_50628], 0));
var state_50638__$1 = state_50638;
var statearr_50652_52258 = state_50638__$1;
(statearr_50652_52258[(2)] = inst_50631);

(statearr_50652_52258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50640 === (7))){
var state_50638__$1 = state_50638;
var statearr_50653_52259 = state_50638__$1;
(statearr_50653_52259[(2)] = e);

(statearr_50653_52259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50640 === (8))){
var inst_50634 = (state_50638[(2)]);
var state_50638__$1 = state_50638;
var statearr_50654_52260 = state_50638__$1;
(statearr_50654_52260[(2)] = inst_50634);


cljs.core.async.impl.ioc_helpers.process_exception(state_50638__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__,e,map__50614,map__50614__$1,env,parser))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__,e,map__50614,map__50614__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$state_machine__42980__auto____0 = (function (){
var statearr_50656 = [null,null,null,null,null,null,null,null];
(statearr_50656[(0)] = com$wsscode$pathom$core$state_machine__42980__auto__);

(statearr_50656[(1)] = (1));

return statearr_50656;
});
var com$wsscode$pathom$core$state_machine__42980__auto____1 = (function (state_50638){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50638);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50658){if((e50658 instanceof Object)){
var ex__42983__auto__ = e50658;
var statearr_50659_52261 = state_50638;
(statearr_50659_52261[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52262 = state_50638;
state_50638 = G__52262;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__42980__auto__ = function(state_50638){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__42980__auto____1.call(this,state_50638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__42980__auto____0;
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__42980__auto____1;
return com$wsscode$pathom$core$state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__,e,map__50614,map__50614__$1,env,parser))
})();
var state__43004__auto__ = (function (){var statearr_50661 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50661[(6)] = c__43002__auto__);

return statearr_50661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__,e,map__50614,map__50614__$1,env,parser))
);

return c__43002__auto__;
} else {
var res = res__48511__auto__;
if(cljs.core.map_QMARK_(res)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,res], 0));
} else {
return e;
}
}
});

com.wsscode.pathom.core.entity.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",-1769729738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50667){
return cljs.core.coll_QMARK_(G__50667);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));
/**
 * Helper function to fetch a single attribute from current entity.
 */
com.wsscode.pathom.core.entity_attr = (function com$wsscode$pathom$core$entity_attr(var_args){
var G__50673 = arguments.length;
switch (G__50673) {
case 2:
return com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$2 = (function (env,attr){
var res__48511__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__){
return (function (state_50690){
var state_val_50691 = (state_50690[(1)]);
if((state_val_50691 === (1))){
var state_50690__$1 = state_50690;
var statearr_50693_52264 = state_50690__$1;
(statearr_50693_52264[(2)] = null);

(statearr_50693_52264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50691 === (2))){
var inst_50688 = (state_50690[(2)]);
var state_50690__$1 = state_50690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50690__$1,inst_50688);
} else {
if((state_val_50691 === (3))){
var inst_50677 = (state_50690[(2)]);
var state_50690__$1 = state_50690;
var statearr_50696_52265 = state_50690__$1;
(statearr_50696_52265[(2)] = inst_50677);


cljs.core.async.impl.ioc_helpers.process_exception(state_50690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50691 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50690,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50690__$1 = state_50690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50690__$1,(5),res__48511__auto__);
} else {
if((state_val_50691 === (5))){
var inst_50683 = (state_50690[(2)]);
var inst_50684 = com.wsscode.common.async_cljs.throw_err(inst_50683);
var inst_50685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50684,attr);
var state_50690__$1 = state_50690;
var statearr_50698_52266 = state_50690__$1;
(statearr_50698_52266[(2)] = inst_50685);


cljs.core.async.impl.ioc_helpers.process_exception(state_50690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$state_machine__42980__auto____0 = (function (){
var statearr_50701 = [null,null,null,null,null,null,null];
(statearr_50701[(0)] = com$wsscode$pathom$core$state_machine__42980__auto__);

(statearr_50701[(1)] = (1));

return statearr_50701;
});
var com$wsscode$pathom$core$state_machine__42980__auto____1 = (function (state_50690){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50690);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50702){if((e50702 instanceof Object)){
var ex__42983__auto__ = e50702;
var statearr_50704_52267 = state_50690;
(statearr_50704_52267[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52268 = state_50690;
state_50690 = G__52268;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__42980__auto__ = function(state_50690){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__42980__auto____1.call(this,state_50690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__42980__auto____0;
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__42980__auto____1;
return com$wsscode$pathom$core$state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__))
})();
var state__43004__auto__ = (function (){var statearr_50706 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50706[(6)] = c__43002__auto__);

return statearr_50706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__))
);

return c__43002__auto__;
} else {
var e = res__48511__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__48511__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__){
return (function (state_50728){
var state_val_50729 = (state_50728[(1)]);
if((state_val_50729 === (1))){
var state_50728__$1 = state_50728;
var statearr_50732_52269 = state_50728__$1;
(statearr_50732_52269[(2)] = null);

(statearr_50732_52269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (2))){
var inst_50726 = (state_50728[(2)]);
var state_50728__$1 = state_50728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50728__$1,inst_50726);
} else {
if((state_val_50729 === (3))){
var inst_50708 = (state_50728[(2)]);
var state_50728__$1 = state_50728;
var statearr_50735_52270 = state_50728__$1;
(statearr_50735_52270[(2)] = inst_50708);


cljs.core.async.impl.ioc_helpers.process_exception(state_50728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50728,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50728__$1 = state_50728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50728__$1,(5),res__48511__auto__);
} else {
if((state_val_50729 === (5))){
var inst_50715 = (state_50728[(7)]);
var inst_50713 = (state_50728[(2)]);
var inst_50714 = com.wsscode.common.async_cljs.throw_err(inst_50713);
var inst_50715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50714,attr);
var inst_50716 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_50717 = (new cljs.core.PersistentArrayMap(null,2,inst_50716,null));
var inst_50718 = (new cljs.core.PersistentHashSet(null,inst_50717,null));
var inst_50719 = (inst_50718.cljs$core$IFn$_invoke$arity$1 ? inst_50718.cljs$core$IFn$_invoke$arity$1(inst_50715__$1) : inst_50718.call(null,inst_50715__$1));
var state_50728__$1 = (function (){var statearr_50738 = state_50728;
(statearr_50738[(7)] = inst_50715__$1);

return statearr_50738;
})();
if(cljs.core.truth_(inst_50719)){
var statearr_50739_52271 = state_50728__$1;
(statearr_50739_52271[(1)] = (6));

} else {
var statearr_50740_52272 = state_50728__$1;
(statearr_50740_52272[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (6))){
var state_50728__$1 = state_50728;
var statearr_50742_52273 = state_50728__$1;
(statearr_50742_52273[(2)] = default$);

(statearr_50742_52273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (7))){
var inst_50715 = (state_50728[(7)]);
var state_50728__$1 = state_50728;
var statearr_50744_52274 = state_50728__$1;
(statearr_50744_52274[(2)] = inst_50715);

(statearr_50744_52274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (8))){
var inst_50723 = (state_50728[(2)]);
var state_50728__$1 = state_50728;
var statearr_50746_52275 = state_50728__$1;
(statearr_50746_52275[(2)] = inst_50723);


cljs.core.async.impl.ioc_helpers.process_exception(state_50728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$state_machine__42980__auto____0 = (function (){
var statearr_50747 = [null,null,null,null,null,null,null,null];
(statearr_50747[(0)] = com$wsscode$pathom$core$state_machine__42980__auto__);

(statearr_50747[(1)] = (1));

return statearr_50747;
});
var com$wsscode$pathom$core$state_machine__42980__auto____1 = (function (state_50728){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50728);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50748){if((e50748 instanceof Object)){
var ex__42983__auto__ = e50748;
var statearr_50749_52276 = state_50728;
(statearr_50749_52276[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52277 = state_50728;
state_50728 = G__52277;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__42980__auto__ = function(state_50728){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__42980__auto____1.call(this,state_50728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__42980__auto____0;
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__42980__auto____1;
return com$wsscode$pathom$core$state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__))
})();
var state__43004__auto__ = (function (){var statearr_50753 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50753[(6)] = c__43002__auto__);

return statearr_50753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__))
);

return c__43002__auto__;
} else {
var e = res__48511__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__50756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__50756.cljs$core$IFn$_invoke$arity$1 ? fexpr__50756.cljs$core$IFn$_invoke$arity$1(x) : fexpr__50756.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr","com.wsscode.pathom.core/entity-attr",116696515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.spec.alpha.maybe_impl(cljs.core.any_QMARK_,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__50761,attributes){
var map__50763 = p__50761;
var map__50763__$1 = (((((!((map__50763 == null))))?(((((map__50763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50763):map__50763);
var env = map__50763__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50763__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__48511__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__,map__50763,map__50763__$1,env,path){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__,map__50763,map__50763__$1,env,path){
return (function (state_50797){
var state_val_50798 = (state_50797[(1)]);
if((state_val_50798 === (1))){
var state_50797__$1 = state_50797;
var statearr_50801_52278 = state_50797__$1;
(statearr_50801_52278[(2)] = null);

(statearr_50801_52278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50798 === (2))){
var inst_50795 = (state_50797[(2)]);
var state_50797__$1 = state_50797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50797__$1,inst_50795);
} else {
if((state_val_50798 === (3))){
var inst_50768 = (state_50797[(2)]);
var state_50797__$1 = state_50797;
var statearr_50802_52279 = state_50797__$1;
(statearr_50802_52279[(2)] = inst_50768);


cljs.core.async.impl.ioc_helpers.process_exception(state_50797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50798 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50797,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50797__$1 = state_50797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50797__$1,(5),res__48511__auto__);
} else {
if((state_val_50798 === (5))){
var inst_50774 = (state_50797[(7)]);
var inst_50780 = (state_50797[(8)]);
var inst_50773 = (state_50797[(2)]);
var inst_50774__$1 = com.wsscode.common.async_cljs.throw_err(inst_50773);
var inst_50775 = cljs.core.set(attributes);
var inst_50777 = com.wsscode.pathom.core.elide_not_found(inst_50774__$1);
var inst_50778 = cljs.core.keys(inst_50777);
var inst_50779 = cljs.core.set(inst_50778);
var inst_50780__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_50775,inst_50779);
var inst_50781 = cljs.core.seq(inst_50780__$1);
var state_50797__$1 = (function (){var statearr_50806 = state_50797;
(statearr_50806[(7)] = inst_50774__$1);

(statearr_50806[(8)] = inst_50780__$1);

return statearr_50806;
})();
if(inst_50781){
var statearr_50808_52280 = state_50797__$1;
(statearr_50808_52280[(1)] = (6));

} else {
var statearr_50809_52281 = state_50797__$1;
(statearr_50809_52281[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50798 === (6))){
var inst_50774 = (state_50797[(7)]);
var inst_50780 = (state_50797[(8)]);
var inst_50784 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50780], 0));
var inst_50785 = ["Entity attributes ",inst_50784," could not be realized"].join('');
var inst_50786 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_50787 = [inst_50774,path,inst_50780];
var inst_50788 = cljs.core.PersistentHashMap.fromArrays(inst_50786,inst_50787);
var inst_50789 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_50785,inst_50788);
var inst_50790 = (function(){throw inst_50789})();
var state_50797__$1 = state_50797;
var statearr_50811_52282 = state_50797__$1;
(statearr_50811_52282[(2)] = inst_50790);

(statearr_50811_52282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50798 === (7))){
var state_50797__$1 = state_50797;
var statearr_50812_52283 = state_50797__$1;
(statearr_50812_52283[(2)] = null);

(statearr_50812_52283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50798 === (8))){
var inst_50774 = (state_50797[(7)]);
var inst_50793 = (state_50797[(2)]);
var state_50797__$1 = (function (){var statearr_50814 = state_50797;
(statearr_50814[(9)] = inst_50793);

return statearr_50814;
})();
var statearr_50816_52284 = state_50797__$1;
(statearr_50816_52284[(2)] = inst_50774);


cljs.core.async.impl.ioc_helpers.process_exception(state_50797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__,map__50763,map__50763__$1,env,path))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__,map__50763,map__50763__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto____0 = (function (){
var statearr_50817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50817[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto__);

(statearr_50817[(1)] = (1));

return statearr_50817;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto____1 = (function (state_50797){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50797);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50818){if((e50818 instanceof Object)){
var ex__42983__auto__ = e50818;
var statearr_50819_52285 = state_50797;
(statearr_50819_52285[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52286 = state_50797;
state_50797 = G__52286;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto__ = function(state_50797){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto____1.call(this,state_50797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__,map__50763,map__50763__$1,env,path))
})();
var state__43004__auto__ = (function (){var statearr_50820 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50820[(6)] = c__43002__auto__);

return statearr_50820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__,map__50763,map__50763__$1,env,path))
);

return c__43002__auto__;
} else {
var e = res__48511__auto__;
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attributes),cljs.core.set(cljs.core.keys(com.wsscode.pathom.core.elide_not_found(e))));
if(cljs.core.seq(missing)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity attributes ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," could not be realized"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),e,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),path,new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849),missing], null));
} else {
}

return e;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity!","com.wsscode.pathom.core/entity!",601467064,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50829){
return cljs.core.coll_QMARK_(G__50829);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));
/**
 * Like entity-attr. Raises an exception if the property can't be retrieved.
 */
com.wsscode.pathom.core.entity_attr_BANG_ = (function com$wsscode$pathom$core$entity_attr_BANG_(env,attr){
var res__48511__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__){
return (function (state_50848){
var state_val_50849 = (state_50848[(1)]);
if((state_val_50849 === (1))){
var state_50848__$1 = state_50848;
var statearr_50850_52287 = state_50848__$1;
(statearr_50850_52287[(2)] = null);

(statearr_50850_52287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50849 === (2))){
var inst_50845 = (state_50848[(2)]);
var state_50848__$1 = state_50848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50848__$1,inst_50845);
} else {
if((state_val_50849 === (3))){
var inst_50835 = (state_50848[(2)]);
var state_50848__$1 = state_50848;
var statearr_50852_52288 = state_50848__$1;
(statearr_50852_52288[(2)] = inst_50835);


cljs.core.async.impl.ioc_helpers.process_exception(state_50848__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50849 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50848,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50848__$1 = state_50848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50848__$1,(5),res__48511__auto__);
} else {
if((state_val_50849 === (5))){
var inst_50841 = (state_50848[(2)]);
var inst_50842 = com.wsscode.common.async_cljs.throw_err(inst_50841);
var inst_50843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50842,attr);
var state_50848__$1 = state_50848;
var statearr_50854_52289 = state_50848__$1;
(statearr_50854_52289[(2)] = inst_50843);


cljs.core.async.impl.ioc_helpers.process_exception(state_50848__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__){
return (function() {
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto____0 = (function (){
var statearr_50857 = [null,null,null,null,null,null,null];
(statearr_50857[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto__);

(statearr_50857[(1)] = (1));

return statearr_50857;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto____1 = (function (state_50848){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50848);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50859){if((e50859 instanceof Object)){
var ex__42983__auto__ = e50859;
var statearr_50860_52290 = state_50848;
(statearr_50860_52290[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52291 = state_50848;
state_50848 = G__52291;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto__ = function(state_50848){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto____1.call(this,state_50848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__))
})();
var state__43004__auto__ = (function (){var statearr_50866 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50866[(6)] = c__43002__auto__);

return statearr_50866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__))
);

return c__43002__auto__;
} else {
var e = res__48511__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr!","com.wsscode.pathom.core/entity-attr!",2073654855,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52292 = arguments.length;
var i__4731__auto___52293 = (0);
while(true){
if((i__4731__auto___52293 < len__4730__auto___52292)){
args__4736__auto__.push((arguments[i__4731__auto___52293]));

var G__52294 = (i__4731__auto___52293 + (1));
i__4731__auto___52293 = G__52294;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (env,fn,args){
var e = com.wsscode.pathom.core.raw_entity(env);
if(com.wsscode.pathom.core.atom_QMARK_(e)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,e,fn,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,e,args);
}
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq50871){
var G__50872 = cljs.core.first(seq50871);
var seq50871__$1 = cljs.core.next(seq50871);
var G__50873 = cljs.core.first(seq50871__$1);
var seq50871__$2 = cljs.core.next(seq50871__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50872,G__50873,seq50871__$2);
});

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","swap-entity!","com.wsscode.pathom.core/swap-entity!",819089173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.fn_QMARK_], null),null));
/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52295 = arguments.length;
var i__4731__auto___52296 = (0);
while(true){
if((i__4731__auto___52296 < len__4730__auto___52295)){
args__4736__auto__.push((arguments[i__4731__auto___52296]));

var G__52297 = (i__4731__auto___52296 + (1));
i__4731__auto___52296 = G__52297;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5733__auto__ = (function (){var G__50887 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__50887__$1 = (((G__50887 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__50887));
var G__50887__$2 = (((G__50887__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__50887__$1));
if((G__50887__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__50887__$2);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),args);
} else {
return ast;
}
});

com.wsscode.pathom.core.update_child.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq50880){
var G__50881 = cljs.core.first(seq50880);
var seq50880__$1 = cljs.core.next(seq50880);
var G__50882 = cljs.core.first(seq50880__$1);
var seq50880__$2 = cljs.core.next(seq50880__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50881,G__50882,seq50880__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52298 = arguments.length;
var i__4731__auto___52299 = (0);
while(true){
if((i__4731__auto___52299 < len__4730__auto___52298)){
args__4736__auto__.push((arguments[i__4731__auto___52299]));

var G__52300 = (i__4731__auto___52299 + (1));
i__4731__auto___52299 = G__52300;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5733__auto__ = (function (){var G__50897 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__50897__$1 = (((G__50897 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__50897));
var G__50897__$2 = (((G__50897__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__50897,G__50897__$1){
return (function (p1__50891_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__50891_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__50891_SHARP_))));
});})(G__50897,G__50897__$1))
,cljs.core.second),G__50897__$1));
if((G__50897__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__50897__$2);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx,new cljs.core.Keyword(null,"query","query",-1288509510)], null),args);
} else {
return ast;
}
});

com.wsscode.pathom.core.update_recursive_depth.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq50892){
var G__50893 = cljs.core.first(seq50892);
var seq50892__$1 = cljs.core.next(seq50892);
var G__50894 = cljs.core.first(seq50892__$1);
var seq50892__$2 = cljs.core.next(seq50892__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50893,G__50894,seq50892__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__50904){
var map__50905 = p__50904;
var map__50905__$1 = (((((!((map__50905 == null))))?(((((map__50905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50905):map__50905);
var env = map__50905__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50905__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = (function (){var G__50909 = cljs.core.keys(query);
var G__50909__$1 = (((G__50909 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__50909,e,map__50905,map__50905__$1,env,query){
return (function (p1__50902_SHARP_){
return cljs.core.contains_QMARK_(e,p1__50902_SHARP_);
});})(G__50909,e,map__50905,map__50905__$1,env,query))
,G__50909));
if((G__50909__$1 == null)){
return null;
} else {
return cljs.core.first(G__50909__$1);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return path;
} else {
return null;
}
});
/**
 * Runs a parser with current sub-query. When run with an `entity` argument, that entity is set as the new environment
 * value of `::entity`, and the subquery is parsered with that new environment. When run without an `entity` it
 * parses the current subquery in the context of whatever entity was already in `::entity` of the env.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__50915 = arguments.length;
switch (G__50915) {
case 2:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__50916){
var map__50917 = p__50916;
var map__50917__$1 = (((((!((map__50917 == null))))?(((((map__50917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50917):map__50917);
var env = map__50917__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50917__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
if(com.wsscode.pathom.core.atom_QMARK_(entity)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));

return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entity),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,entity], 0)));
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,entity));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(entity))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)))], 0)));
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity)));
}
}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__50924){
var map__50925 = p__50924;
var map__50925__$1 = (((((!((map__50925 == null))))?(((((map__50925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50925):map__50925);
var env = map__50925__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50925__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = cljs.core.contains_QMARK_((function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var G__50929 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast);
if((G__50929 == null)){
return null;
} else {
return cljs.core.namespace(G__50929);
}
})());
var query__$1 = ((com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var union_path__$1 = (function (){var or__4131__auto__ = union_path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.default_union_path;
}
})();
var path = ((cljs.core.fn_QMARK_(union_path__$1))?(union_path__$1.cljs$core$IFn$_invoke$arity$1 ? union_path__$1.cljs$core$IFn$_invoke$arity$1(env) : union_path__$1.call(null,env)):(((union_path__$1 instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_path__$1], null)),union_path__$1):null));
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614);
}
})():query);
var env_SINGLEQUOTE_ = (function (){var G__50932 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50932,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__50932;
}
})();
var env_SINGLEQUOTE___$1 = (cljs.core.truth_(processing_sequence)?(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","stop-sequence?","com.wsscode.pathom.core/stop-sequence?",-1854144982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(processing_sequence));
if(cljs.core.truth_(and__4120__auto__)){
return (!(placeholder_QMARK_));
} else {
return and__4120__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637)):cljs.core.update.cljs$core$IFn$_invoke$arity$6(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.core","stop-sequence?","com.wsscode.pathom.core/stop-sequence?",-1854144982),true)):env_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614),query__$1)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if((query__$1 == null)){
return e;
} else {
if(cljs.core.nat_int_QMARK_(query__$1)){
if((query__$1 === (0))){
return null;
} else {
var parent_query_SINGLEQUOTE_ = com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.query__GT_ast(parent_query),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dec], 0)));
var G__50936 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__50937 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__50936,G__50937) : parser.call(null,G__50936,G__50937));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__48511__auto__ = (function (){var G__50939 = env_SINGLEQUOTE___$1;
var G__50940 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__50939,G__50940) : parser.call(null,G__50939,G__50940));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__50925,map__50925__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__50925,map__50925__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (state_50954){
var state_val_50955 = (state_50954[(1)]);
if((state_val_50955 === (1))){
var state_50954__$1 = state_50954;
var statearr_50959_52302 = state_50954__$1;
(statearr_50959_52302[(2)] = null);

(statearr_50959_52302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (2))){
var inst_50952 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50954__$1,inst_50952);
} else {
if((state_val_50955 === (3))){
var inst_50942 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_50961_52303 = state_50954__$1;
(statearr_50961_52303[(2)] = inst_50942);


cljs.core.async.impl.ioc_helpers.process_exception(state_50954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50954,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50954__$1 = state_50954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50954__$1,(5),res__48511__auto__);
} else {
if((state_val_50955 === (5))){
var inst_50947 = (state_50954[(2)]);
var inst_50948 = com.wsscode.common.async_cljs.throw_err(inst_50947);
var inst_50949 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_50950 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50949,inst_50948], 0));
var state_50954__$1 = state_50954;
var statearr_50962_52304 = state_50954__$1;
(statearr_50962_52304[(2)] = inst_50950);


cljs.core.async.impl.ioc_helpers.process_exception(state_50954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__50925,map__50925__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__50925,map__50925__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function() {
var com$wsscode$pathom$core$state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$state_machine__42980__auto____0 = (function (){
var statearr_50964 = [null,null,null,null,null,null,null];
(statearr_50964[(0)] = com$wsscode$pathom$core$state_machine__42980__auto__);

(statearr_50964[(1)] = (1));

return statearr_50964;
});
var com$wsscode$pathom$core$state_machine__42980__auto____1 = (function (state_50954){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50954);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50965){if((e50965 instanceof Object)){
var ex__42983__auto__ = e50965;
var statearr_50966_52305 = state_50954;
(statearr_50966_52305[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52306 = state_50954;
state_50954 = G__52306;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__42980__auto__ = function(state_50954){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__42980__auto____1.call(this,state_50954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__42980__auto____0;
com$wsscode$pathom$core$state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__42980__auto____1;
return com$wsscode$pathom$core$state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__50925,map__50925__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
})();
var state__43004__auto__ = (function (){var statearr_50968 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50968[(6)] = c__43002__auto__);

return statearr_50968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__50925,map__50925__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
);

return c__43002__auto__;
} else {
var computed_e = res__48511__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1),computed_e], 0));
}
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE___$1,query__$1) : parser.call(null,env_SINGLEQUOTE___$1,query__$1));

}
}
}
}
});

com.wsscode.pathom.core.join.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__50974,coll){
var map__50975 = p__50974;
var map__50975__$1 = (((((!((map__50975 == null))))?(((((map__50975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50975):map__50975);
var env = map__50975__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
if(cljs.core.seq(coll)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (state_51087){
var state_val_51089 = (state_51087[(1)]);
if((state_val_51089 === (7))){
var inst_51081 = (state_51087[(2)]);
var state_51087__$1 = state_51087;
var statearr_51092_52307 = state_51087__$1;
(statearr_51092_52307[(2)] = inst_51081);


cljs.core.async.impl.ioc_helpers.process_exception(state_51087__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (1))){
var state_51087__$1 = state_51087;
var statearr_51094_52308 = state_51087__$1;
(statearr_51094_52308[(2)] = null);

(statearr_51094_52308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51087,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_51087__$1 = state_51087;
if(cljs.core.truth_(inst_50983)){
var statearr_51096_52309 = state_51087__$1;
(statearr_51096_52309[(1)] = (5));

} else {
var statearr_51098_52310 = state_51087__$1;
(statearr_51098_52310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (15))){
var inst_51054 = (state_51087[(7)]);
var inst_51049 = (state_51087[(8)]);
var inst_51044 = (state_51087[(9)]);
var inst_51053 = (state_51087[(10)]);
var inst_51047 = (state_51087[(11)]);
var inst_51051 = (state_51087[(12)]);
var inst_51065 = (state_51087[(2)]);
var inst_51066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_51067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_51069 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_51070 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_51054,inst_51069);
var inst_51071 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_51066,inst_51070);
var inst_51072 = (function (){var from_chan = inst_51066;
var join_item = inst_51049;
var first_res = inst_51065;
var check_ast_opt_QMARK_ = inst_51047;
var first__51043 = inst_51053;
var out_chan = inst_51067;
var ast = inst_51044;
var env__$1 = inst_51051;
var head = inst_51053;
var seq__51042 = inst_51054;
var tail = inst_51054;
var vec__51041 = coll;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__51104,res_ch){
var vec__51105 = p__51104;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51105,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51105,(1),null);
var c__43002__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto____$1,vec__51105,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto____$1,vec__51105,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (state_51151){
var state_val_51152 = (state_51151[(1)]);
if((state_val_51152 === (7))){
var inst_51125 = (state_51151[(2)]);
var state_51151__$1 = state_51151;
var statearr_51155_52311 = state_51151__$1;
(statearr_51155_52311[(2)] = inst_51125);

(statearr_51155_52311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (1))){
var inst_51112 = (state_51151[(7)]);
var inst_51111 = (i + (1));
var inst_51112__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_51111);
var inst_51114 = (inst_51112__$1 == null);
var inst_51115 = cljs.core.not(inst_51114);
var state_51151__$1 = (function (){var statearr_51156 = state_51151;
(statearr_51156[(7)] = inst_51112__$1);

return statearr_51156;
})();
if(inst_51115){
var statearr_51157_52312 = state_51151__$1;
(statearr_51157_52312[(1)] = (2));

} else {
var statearr_51159_52313 = state_51151__$1;
(statearr_51159_52313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (4))){
var inst_51128 = (state_51151[(2)]);
var state_51151__$1 = state_51151;
if(cljs.core.truth_(inst_51128)){
var statearr_51160_52314 = state_51151__$1;
(statearr_51160_52314[(1)] = (8));

} else {
var statearr_51161_52315 = state_51151__$1;
(statearr_51161_52315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (15))){
var inst_51148 = (state_51151[(2)]);
var inst_51149 = cljs.core.async.close_BANG_(res_ch);
var state_51151__$1 = (function (){var statearr_51162 = state_51151;
(statearr_51162[(8)] = inst_51148);

return statearr_51162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51151__$1,inst_51149);
} else {
if((state_val_51152 === (13))){
var inst_51146 = (state_51151[(2)]);
var state_51151__$1 = state_51151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51151__$1,(15),res_ch,inst_51146);
} else {
if((state_val_51152 === (6))){
var state_51151__$1 = state_51151;
var statearr_51165_52316 = state_51151__$1;
(statearr_51165_52316[(2)] = false);

(statearr_51165_52316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (3))){
var state_51151__$1 = state_51151;
var statearr_51166_52317 = state_51151__$1;
(statearr_51166_52317[(2)] = false);

(statearr_51166_52317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (12))){
var inst_51139 = (state_51151[(9)]);
var state_51151__$1 = state_51151;
var statearr_51167_52318 = state_51151__$1;
(statearr_51167_52318[(2)] = inst_51139);

(statearr_51167_52318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (2))){
var inst_51112 = (state_51151[(7)]);
var inst_51117 = inst_51112.cljs$lang$protocol_mask$partition0$;
var inst_51118 = (inst_51117 & (64));
var inst_51119 = inst_51112.cljs$core$ISeq$;
var inst_51120 = (cljs.core.PROTOCOL_SENTINEL === inst_51119);
var inst_51121 = ((inst_51118) || (inst_51120));
var state_51151__$1 = state_51151;
if(cljs.core.truth_(inst_51121)){
var statearr_51170_52319 = state_51151__$1;
(statearr_51170_52319[(1)] = (5));

} else {
var statearr_51171_52320 = state_51151__$1;
(statearr_51171_52320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (11))){
var inst_51139 = (state_51151[(9)]);
var state_51151__$1 = state_51151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51151__$1,(14),inst_51139);
} else {
if((state_val_51152 === (9))){
var inst_51112 = (state_51151[(7)]);
var state_51151__$1 = state_51151;
var statearr_51172_52321 = state_51151__$1;
(statearr_51172_52321[(2)] = inst_51112);

(statearr_51172_52321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (5))){
var state_51151__$1 = state_51151;
var statearr_51174_52322 = state_51151__$1;
(statearr_51174_52322[(2)] = true);

(statearr_51174_52322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (14))){
var inst_51143 = (state_51151[(2)]);
var state_51151__$1 = state_51151;
var statearr_51176_52323 = state_51151__$1;
(statearr_51176_52323[(2)] = inst_51143);

(statearr_51176_52323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (10))){
var inst_51139 = (state_51151[(9)]);
var inst_51133 = (state_51151[(2)]);
var inst_51134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51133,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_51135 = cljs.core.deref(entity_path_cache);
var inst_51136 = cljs.core.PersistentHashMap.EMPTY;
var inst_51137 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51135,inst_51134,inst_51136);
var inst_51138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51137,ent], 0));
var inst_51139__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_51133,inst_51138) : join_item.call(null,inst_51133,inst_51138));
var inst_51140 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51139__$1);
var state_51151__$1 = (function (){var statearr_51177 = state_51151;
(statearr_51177[(9)] = inst_51139__$1);

return statearr_51177;
})();
if(inst_51140){
var statearr_51178_52324 = state_51151__$1;
(statearr_51178_52324[(1)] = (11));

} else {
var statearr_51179_52325 = state_51151__$1;
(statearr_51179_52325[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51152 === (8))){
var inst_51112 = (state_51151[(7)]);
var inst_51130 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51112);
var state_51151__$1 = state_51151;
var statearr_51180_52326 = state_51151__$1;
(statearr_51180_52326[(2)] = inst_51130);

(statearr_51180_52326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43002__auto____$1,vec__51105,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
;
return ((function (switch__42979__auto__,c__43002__auto____$1,vec__51105,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____0 = (function (){
var statearr_51181 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51181[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__);

(statearr_51181[(1)] = (1));

return statearr_51181;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____1 = (function (state_51151){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51151);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51182){if((e51182 instanceof Object)){
var ex__42983__auto__ = e51182;
var statearr_51183_52327 = state_51151;
(statearr_51183_52327[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52328 = state_51151;
state_51151 = G__52328;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__ = function(state_51151){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____1.call(this,state_51151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto____$1,vec__51105,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var state__43004__auto__ = (function (){var statearr_51184 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51184[(6)] = c__43002__auto____$1);

return statearr_51184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto____$1,vec__51105,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
);

return c__43002__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,first__51043,out_chan,ast,env__$1,head,seq__51042,tail,vec__51041,inst_51054,inst_51049,inst_51044,inst_51053,inst_51047,inst_51051,inst_51065,inst_51066,inst_51067,inst_51069,inst_51070,inst_51071,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var inst_51073 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_51067,inst_51072,inst_51066);
var inst_51074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51075 = [inst_51065];
var inst_51076 = (new cljs.core.PersistentVector(null,1,(5),inst_51074,inst_51075,null));
var inst_51077 = cljs.core.async.into(inst_51076,inst_51067);
var state_51087__$1 = (function (){var statearr_51186 = state_51087;
(statearr_51186[(13)] = inst_51073);

(statearr_51186[(14)] = inst_51071);

return statearr_51186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51087__$1,(17),inst_51077);
} else {
if((state_val_51089 === (13))){
var inst_51056 = (state_51087[(15)]);
var state_51087__$1 = state_51087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51087__$1,(16),inst_51056);
} else {
if((state_val_51089 === (6))){
var inst_51049 = (state_51087[(8)]);
var inst_51044 = (state_51087[(9)]);
var inst_51053 = (state_51087[(10)]);
var inst_51056 = (state_51087[(15)]);
var inst_51047 = (state_51087[(11)]);
var inst_51051 = (state_51087[(12)]);
var inst_51044__$1 = edn_query_language.core.query__GT_ast(query);
var inst_51045 = (function (){var ast = inst_51044__$1;
return ((function (ast,inst_51049,inst_51044,inst_51053,inst_51056,inst_51047,inst_51051,inst_51044__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (p1__50971_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__50971_SHARP_));
});
;})(ast,inst_51049,inst_51044,inst_51053,inst_51056,inst_51047,inst_51051,inst_51044__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var inst_51046 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_51044__$1);
var inst_51047__$1 = cljs.core.every_QMARK_(inst_51045,inst_51046);
var inst_51049__$1 = (function (){var ast = inst_51044__$1;
var check_ast_opt_QMARK_ = inst_51047__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_51049,inst_51044,inst_51053,inst_51056,inst_51047,inst_51051,inst_51044__$1,inst_51045,inst_51046,inst_51047__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_51049,inst_51044,inst_51053,inst_51056,inst_51047,inst_51051,inst_51044__$1,inst_51045,inst_51046,inst_51047__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (ent,p__51212){
var map__51213 = p__51212;
var map__51213__$1 = (((((!((map__51213 == null))))?(((((map__51213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51213):map__51213);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51213__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51213__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5733__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51215 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51215,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_51049,inst_51044,inst_51053,inst_51056,inst_51047,inst_51051,inst_51044__$1,inst_51045,inst_51046,inst_51047__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(entity,env__$1);
}
});
;})(ast,check_ast_opt_QMARK_,inst_51049,inst_51044,inst_51053,inst_51056,inst_51047,inst_51051,inst_51044__$1,inst_51045,inst_51046,inst_51047__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var inst_51051__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_51052 = cljs.core.seq(coll);
var inst_51053__$1 = cljs.core.first(inst_51052);
var inst_51054 = cljs.core.next(inst_51052);
var inst_51055 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_51051__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_51056__$1 = (inst_51049__$1.cljs$core$IFn$_invoke$arity$2 ? inst_51049__$1.cljs$core$IFn$_invoke$arity$2(inst_51055,inst_51053__$1) : inst_51049__$1.call(null,inst_51055,inst_51053__$1));
var inst_51058 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51056__$1);
var state_51087__$1 = (function (){var statearr_51219 = state_51087;
(statearr_51219[(7)] = inst_51054);

(statearr_51219[(8)] = inst_51049__$1);

(statearr_51219[(9)] = inst_51044__$1);

(statearr_51219[(10)] = inst_51053__$1);

(statearr_51219[(15)] = inst_51056__$1);

(statearr_51219[(11)] = inst_51047__$1);

(statearr_51219[(12)] = inst_51051__$1);

return statearr_51219;
})();
if(inst_51058){
var statearr_51221_52329 = state_51087__$1;
(statearr_51221_52329[(1)] = (13));

} else {
var statearr_51222_52330 = state_51087__$1;
(statearr_51222_52330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (17))){
var inst_51079 = (state_51087[(2)]);
var state_51087__$1 = state_51087;
var statearr_51223_52331 = state_51087__$1;
(statearr_51223_52331[(2)] = inst_51079);

(statearr_51223_52331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (3))){
var inst_50979 = (state_51087[(2)]);
var state_51087__$1 = state_51087;
var statearr_51224_52332 = state_51087__$1;
(statearr_51224_52332[(2)] = inst_50979);


cljs.core.async.impl.ioc_helpers.process_exception(state_51087__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (12))){
var inst_50992 = (state_51087[(16)]);
var inst_51031 = (state_51087[(2)]);
var inst_51033 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_51034 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51035 = ["#e0e3a4","0.8"];
var inst_51036 = cljs.core.PersistentHashMap.fromArrays(inst_51034,inst_51035);
var inst_51037 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_51036];
var inst_51038 = cljs.core.PersistentHashMap.fromArrays(inst_51033,inst_51037);
var inst_51039 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_50992,inst_51038);
var state_51087__$1 = (function (){var statearr_51225 = state_51087;
(statearr_51225[(17)] = inst_51039);

return statearr_51225;
})();
var statearr_51226_52333 = state_51087__$1;
(statearr_51226_52333[(2)] = inst_51031);

(statearr_51226_52333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (2))){
var inst_51083 = (state_51087[(2)]);
var state_51087__$1 = state_51087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51087__$1,inst_51083);
} else {
if((state_val_51089 === (11))){
var inst_51012 = (state_51087[(2)]);
var inst_51013 = com.wsscode.common.async_cljs.throw_err(inst_51012);
var state_51087__$1 = state_51087;
var statearr_51227_52334 = state_51087__$1;
(statearr_51227_52334[(2)] = inst_51013);

(statearr_51227_52334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (9))){
var inst_51008 = (state_51087[(18)]);
var state_51087__$1 = state_51087;
var statearr_51228_52335 = state_51087__$1;
(statearr_51228_52335[(2)] = inst_51008);

(statearr_51228_52335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (5))){
var inst_51000 = (state_51087[(19)]);
var inst_50997 = (state_51087[(20)]);
var inst_50992 = (state_51087[(16)]);
var inst_51002 = (state_51087[(21)]);
var inst_51008 = (state_51087[(18)]);
var inst_51005 = (state_51087[(22)]);
var inst_51003 = (state_51087[(23)]);
var inst_50986 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_50987 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_50988 = ["#e0e3a4","0.8"];
var inst_50989 = cljs.core.PersistentHashMap.fromArrays(inst_50987,inst_50988);
var inst_50990 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_50989];
var inst_50991 = cljs.core.PersistentHashMap.fromArrays(inst_50986,inst_50990);
var inst_50992__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_50991);
var inst_50997__$1 = edn_query_language.core.query__GT_ast(query);
var inst_50998 = (function (){var trace_id__8599__auto__ = inst_50992__$1;
var ast = inst_50997__$1;
return ((function (trace_id__8599__auto__,ast,inst_51000,inst_50997,inst_50992,inst_51002,inst_51008,inst_51005,inst_51003,inst_50986,inst_50987,inst_50988,inst_50989,inst_50990,inst_50991,inst_50992__$1,inst_50997__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (p1__50971_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__50971_SHARP_));
});
;})(trace_id__8599__auto__,ast,inst_51000,inst_50997,inst_50992,inst_51002,inst_51008,inst_51005,inst_51003,inst_50986,inst_50987,inst_50988,inst_50989,inst_50990,inst_50991,inst_50992__$1,inst_50997__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var inst_50999 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_50997__$1);
var inst_51000__$1 = cljs.core.every_QMARK_(inst_50998,inst_50999);
var inst_51002__$1 = (function (){var trace_id__8599__auto__ = inst_50992__$1;
var ast = inst_50997__$1;
var check_ast_opt_QMARK_ = inst_51000__$1;
return ((function (trace_id__8599__auto__,ast,check_ast_opt_QMARK_,inst_51000,inst_50997,inst_50992,inst_51002,inst_51008,inst_51005,inst_51003,inst_50986,inst_50987,inst_50988,inst_50989,inst_50990,inst_50991,inst_50992__$1,inst_50997__$1,inst_50998,inst_50999,inst_51000__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__8599__auto__,ast,check_ast_opt_QMARK_,inst_51000,inst_50997,inst_50992,inst_51002,inst_51008,inst_51005,inst_51003,inst_50986,inst_50987,inst_50988,inst_50989,inst_50990,inst_50991,inst_50992__$1,inst_50997__$1,inst_50998,inst_50999,inst_51000__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (ent,p__51249){
var map__51250 = p__51249;
var map__51250__$1 = (((((!((map__51250 == null))))?(((((map__51250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51250):map__51250);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51250__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51250__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5733__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51252 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51252,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__8599__auto__,ast,check_ast_opt_QMARK_,inst_51000,inst_50997,inst_50992,inst_51002,inst_51008,inst_51005,inst_51003,inst_50986,inst_50987,inst_50988,inst_50989,inst_50990,inst_50991,inst_50992__$1,inst_50997__$1,inst_50998,inst_50999,inst_51000__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(entity,env__$1);
}
});
;})(trace_id__8599__auto__,ast,check_ast_opt_QMARK_,inst_51000,inst_50997,inst_50992,inst_51002,inst_51008,inst_51005,inst_51003,inst_50986,inst_50987,inst_50988,inst_50989,inst_50990,inst_50991,inst_50992__$1,inst_50997__$1,inst_50998,inst_50999,inst_51000__$1,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var inst_51003__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_51004 = cljs.core.seq(coll);
var inst_51005__$1 = cljs.core.first(inst_51004);
var inst_51006 = cljs.core.next(inst_51004);
var inst_51007 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_51003__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_51008__$1 = (inst_51002__$1.cljs$core$IFn$_invoke$arity$2 ? inst_51002__$1.cljs$core$IFn$_invoke$arity$2(inst_51007,inst_51005__$1) : inst_51002__$1.call(null,inst_51007,inst_51005__$1));
var inst_51009 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51008__$1);
var state_51087__$1 = (function (){var statearr_51255 = state_51087;
(statearr_51255[(19)] = inst_51000__$1);

(statearr_51255[(20)] = inst_50997__$1);

(statearr_51255[(16)] = inst_50992__$1);

(statearr_51255[(21)] = inst_51002__$1);

(statearr_51255[(18)] = inst_51008__$1);

(statearr_51255[(22)] = inst_51005__$1);

(statearr_51255[(23)] = inst_51003__$1);

(statearr_51255[(24)] = inst_51006);

return statearr_51255;
})();
if(inst_51009){
var statearr_51256_52336 = state_51087__$1;
(statearr_51256_52336[(1)] = (8));

} else {
var statearr_51257_52337 = state_51087__$1;
(statearr_51257_52337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (14))){
var inst_51056 = (state_51087[(15)]);
var state_51087__$1 = state_51087;
var statearr_51258_52338 = state_51087__$1;
(statearr_51258_52338[(2)] = inst_51056);

(statearr_51258_52338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (16))){
var inst_51061 = (state_51087[(2)]);
var inst_51062 = com.wsscode.common.async_cljs.throw_err(inst_51061);
var state_51087__$1 = state_51087;
var statearr_51259_52339 = state_51087__$1;
(statearr_51259_52339[(2)] = inst_51062);

(statearr_51259_52339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51089 === (10))){
var inst_51000 = (state_51087[(19)]);
var inst_50997 = (state_51087[(20)]);
var inst_50992 = (state_51087[(16)]);
var inst_51002 = (state_51087[(21)]);
var inst_51005 = (state_51087[(22)]);
var inst_51003 = (state_51087[(23)]);
var inst_51006 = (state_51087[(24)]);
var inst_51016 = (state_51087[(2)]);
var inst_51017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_51018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_51020 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_51021 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_51006,inst_51020);
var inst_51022 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_51017,inst_51021);
var inst_51024 = (function (){var from_chan = inst_51017;
var join_item = inst_51002;
var first_res = inst_51016;
var vec__50994 = coll;
var trace_id__8599__auto__ = inst_50992;
var check_ast_opt_QMARK_ = inst_51000;
var out_chan = inst_51018;
var ast = inst_50997;
var env__$1 = inst_51003;
var seq__50995 = inst_51006;
var head = inst_51005;
var first__50996 = inst_51005;
var tail = inst_51006;
return ((function (from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__51270,res_ch){
var vec__51273 = p__51270;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51273,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51273,(1),null);
var c__43002__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto____$1,vec__51273,ent,i,from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto____$1,vec__51273,ent,i,from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function (state_51330){
var state_val_51331 = (state_51330[(1)]);
if((state_val_51331 === (7))){
var inst_51300 = (state_51330[(2)]);
var state_51330__$1 = state_51330;
var statearr_51336_52340 = state_51330__$1;
(statearr_51336_52340[(2)] = inst_51300);

(statearr_51336_52340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (1))){
var inst_51283 = (state_51330[(7)]);
var inst_51282 = (i + (1));
var inst_51283__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_51282);
var inst_51285 = (inst_51283__$1 == null);
var inst_51286 = cljs.core.not(inst_51285);
var state_51330__$1 = (function (){var statearr_51342 = state_51330;
(statearr_51342[(7)] = inst_51283__$1);

return statearr_51342;
})();
if(inst_51286){
var statearr_51343_52341 = state_51330__$1;
(statearr_51343_52341[(1)] = (2));

} else {
var statearr_51344_52342 = state_51330__$1;
(statearr_51344_52342[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (4))){
var inst_51303 = (state_51330[(2)]);
var state_51330__$1 = state_51330;
if(cljs.core.truth_(inst_51303)){
var statearr_51349_52343 = state_51330__$1;
(statearr_51349_52343[(1)] = (8));

} else {
var statearr_51351_52344 = state_51330__$1;
(statearr_51351_52344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (15))){
var inst_51327 = (state_51330[(2)]);
var inst_51328 = cljs.core.async.close_BANG_(res_ch);
var state_51330__$1 = (function (){var statearr_51354 = state_51330;
(statearr_51354[(8)] = inst_51327);

return statearr_51354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51330__$1,inst_51328);
} else {
if((state_val_51331 === (13))){
var inst_51325 = (state_51330[(2)]);
var state_51330__$1 = state_51330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51330__$1,(15),res_ch,inst_51325);
} else {
if((state_val_51331 === (6))){
var state_51330__$1 = state_51330;
var statearr_51360_52345 = state_51330__$1;
(statearr_51360_52345[(2)] = false);

(statearr_51360_52345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (3))){
var state_51330__$1 = state_51330;
var statearr_51365_52346 = state_51330__$1;
(statearr_51365_52346[(2)] = false);

(statearr_51365_52346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (12))){
var inst_51318 = (state_51330[(9)]);
var state_51330__$1 = state_51330;
var statearr_51370_52347 = state_51330__$1;
(statearr_51370_52347[(2)] = inst_51318);

(statearr_51370_52347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (2))){
var inst_51283 = (state_51330[(7)]);
var inst_51288 = inst_51283.cljs$lang$protocol_mask$partition0$;
var inst_51289 = (inst_51288 & (64));
var inst_51294 = inst_51283.cljs$core$ISeq$;
var inst_51295 = (cljs.core.PROTOCOL_SENTINEL === inst_51294);
var inst_51296 = ((inst_51289) || (inst_51295));
var state_51330__$1 = state_51330;
if(cljs.core.truth_(inst_51296)){
var statearr_51371_52348 = state_51330__$1;
(statearr_51371_52348[(1)] = (5));

} else {
var statearr_51372_52349 = state_51330__$1;
(statearr_51372_52349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (11))){
var inst_51318 = (state_51330[(9)]);
var state_51330__$1 = state_51330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51330__$1,(14),inst_51318);
} else {
if((state_val_51331 === (9))){
var inst_51283 = (state_51330[(7)]);
var state_51330__$1 = state_51330;
var statearr_51373_52350 = state_51330__$1;
(statearr_51373_52350[(2)] = inst_51283);

(statearr_51373_52350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (5))){
var state_51330__$1 = state_51330;
var statearr_51374_52351 = state_51330__$1;
(statearr_51374_52351[(2)] = true);

(statearr_51374_52351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (14))){
var inst_51322 = (state_51330[(2)]);
var state_51330__$1 = state_51330;
var statearr_51379_52352 = state_51330__$1;
(statearr_51379_52352[(2)] = inst_51322);

(statearr_51379_52352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (10))){
var inst_51318 = (state_51330[(9)]);
var inst_51308 = (state_51330[(2)]);
var inst_51309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51308,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_51310 = cljs.core.deref(entity_path_cache);
var inst_51311 = cljs.core.PersistentHashMap.EMPTY;
var inst_51312 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51310,inst_51309,inst_51311);
var inst_51313 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51312,ent], 0));
var inst_51318__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_51308,inst_51313) : join_item.call(null,inst_51308,inst_51313));
var inst_51319 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51318__$1);
var state_51330__$1 = (function (){var statearr_51381 = state_51330;
(statearr_51381[(9)] = inst_51318__$1);

return statearr_51381;
})();
if(inst_51319){
var statearr_51386_52353 = state_51330__$1;
(statearr_51386_52353[(1)] = (11));

} else {
var statearr_51387_52354 = state_51330__$1;
(statearr_51387_52354[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51331 === (8))){
var inst_51283 = (state_51330[(7)]);
var inst_51305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51283);
var state_51330__$1 = state_51330;
var statearr_51391_52355 = state_51330__$1;
(statearr_51391_52355[(2)] = inst_51305);

(statearr_51391_52355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43002__auto____$1,vec__51273,ent,i,from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
;
return ((function (switch__42979__auto__,c__43002__auto____$1,vec__51273,ent,i,from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____0 = (function (){
var statearr_51397 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51397[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__);

(statearr_51397[(1)] = (1));

return statearr_51397;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____1 = (function (state_51330){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51330);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51398){if((e51398 instanceof Object)){
var ex__42983__auto__ = e51398;
var statearr_51399_52356 = state_51330;
(statearr_51399_52356[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52357 = state_51330;
state_51330 = G__52357;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__ = function(state_51330){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____1.call(this,state_51330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto____$1,vec__51273,ent,i,from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var state__43004__auto__ = (function (){var statearr_51404 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51404[(6)] = c__43002__auto____$1);

return statearr_51404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto____$1,vec__51273,ent,i,from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
);

return c__43002__auto____$1;
});
;})(from_chan,join_item,first_res,vec__50994,trace_id__8599__auto__,check_ast_opt_QMARK_,out_chan,ast,env__$1,seq__50995,head,first__50996,tail,inst_51000,inst_50997,inst_50992,inst_51002,inst_51005,inst_51003,inst_51006,inst_51016,inst_51017,inst_51018,inst_51020,inst_51021,inst_51022,state_val_51089,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var inst_51025 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_51018,inst_51024,inst_51017);
var inst_51026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51027 = [inst_51016];
var inst_51028 = (new cljs.core.PersistentVector(null,1,(5),inst_51026,inst_51027,null));
var inst_51029 = cljs.core.async.into(inst_51028,inst_51018);
var state_51087__$1 = (function (){var statearr_51409 = state_51087;
(statearr_51409[(25)] = inst_51022);

(statearr_51409[(26)] = inst_51025);

return statearr_51409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51087__$1,(12),inst_51029);
} else {
if((state_val_51089 === (8))){
var inst_51008 = (state_51087[(18)]);
var state_51087__$1 = state_51087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51087__$1,(11),inst_51008);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
;
return ((function (switch__42979__auto__,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto____0 = (function (){
var statearr_51414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51414[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto__);

(statearr_51414[(1)] = (1));

return statearr_51414;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto____1 = (function (state_51087){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51087);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51415){if((e51415 instanceof Object)){
var ex__42983__auto__ = e51415;
var statearr_51416_52358 = state_51087;
(statearr_51416_52358[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52359 = state_51087;
state_51087 = G__52359;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto__ = function(state_51087){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto____1.call(this,state_51087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
})();
var state__43004__auto__ = (function (){var statearr_51417 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51417[(6)] = c__43002__auto__);

return statearr_51417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,map__50975,map__50975__$1,env,query,entity_path_cache))
);

return c__43002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__51423,coll){
var map__51424 = p__51423;
var map__51424__$1 = (((((!((map__51424 == null))))?(((((map__51424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51424):map__51424);
var env = map__51424__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__51424,map__51424__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__51424,map__51424__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__51449 = coll;
var vec__51450 = G__51449;
var seq__51451 = cljs.core.seq(vec__51450);
var first__51452 = cljs.core.first(seq__51451);
var seq__51451__$1 = cljs.core.next(seq__51451);
var ent = first__51452;
var tail = seq__51451__$1;
var out__$1 = out;
var G__51449__$1 = G__51449;
while(true){
var out__$2 = out__$1;
var vec__51524 = G__51449__$1;
var seq__51525 = cljs.core.seq(vec__51524);
var first__51526 = cljs.core.first(seq__51525);
var seq__51525__$1 = cljs.core.next(seq__51525);
var ent__$1 = first__51526;
var tail__$1 = seq__51525__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__51449__$1,c__43002__auto__,res,out__$2,vec__51524,seq__51525,first__51526,seq__51525__$1,ent__$1,tail__$1,out,G__51449,vec__51450,seq__51451,first__51452,seq__51451__$1,ent,tail,map__51424,map__51424__$1,env,parallel_QMARK_){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (out__$1,G__51449__$1,c__43002__auto__,res,out__$2,vec__51524,seq__51525,first__51526,seq__51525__$1,ent__$1,tail__$1,out,G__51449,vec__51450,seq__51451,first__51452,seq__51451__$1,ent,tail,map__51424,map__51424__$1,env,parallel_QMARK_){
return (function (state_51574){
var state_val_51575 = (state_51574[(1)]);
if((state_val_51575 === (7))){
var inst_51570 = (state_51574[(2)]);
var state_51574__$1 = state_51574;
var statearr_51577_52360 = state_51574__$1;
(statearr_51577_52360[(2)] = inst_51570);


cljs.core.async.impl.ioc_helpers.process_exception(state_51574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (1))){
var state_51574__$1 = state_51574;
var statearr_51578_52361 = state_51574__$1;
(statearr_51578_52361[(2)] = null);

(statearr_51578_52361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51574,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51540 = cljs.core.PersistentVector.EMPTY_NODE;
var state_51574__$1 = (function (){var statearr_51581 = state_51574;
(statearr_51581[(7)] = inst_51540);

return statearr_51581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51574__$1,(5),res);
} else {
if((state_val_51575 === (6))){
var inst_51550 = (state_51574[(8)]);
var inst_51557 = (state_51574[(9)]);
var inst_51556 = cljs.core.seq(inst_51550);
var inst_51557__$1 = cljs.core.first(inst_51556);
var inst_51558 = cljs.core.next(inst_51556);
var state_51574__$1 = (function (){var statearr_51583 = state_51574;
(statearr_51583[(10)] = inst_51558);

(statearr_51583[(9)] = inst_51557__$1);

return statearr_51583;
})();
if(cljs.core.truth_(inst_51557__$1)){
var statearr_51584_52362 = state_51574__$1;
(statearr_51584_52362[(1)] = (8));

} else {
var statearr_51585_52363 = state_51574__$1;
(statearr_51585_52363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (3))){
var inst_51528 = (state_51574[(2)]);
var state_51574__$1 = state_51574;
var statearr_51586_52364 = state_51574__$1;
(statearr_51586_52364[(2)] = inst_51528);


cljs.core.async.impl.ioc_helpers.process_exception(state_51574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (2))){
var inst_51572 = (state_51574[(2)]);
var state_51574__$1 = state_51574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51574__$1,inst_51572);
} else {
if((state_val_51575 === (11))){
var inst_51558 = (state_51574[(10)]);
var inst_51549 = (state_51574[(11)]);
var inst_51562 = (state_51574[(2)]);
var inst_51563 = com.wsscode.common.async_cljs.throw_err(inst_51562);
var inst_51564 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51549,inst_51563);
var inst_51549__$1 = inst_51564;
var inst_51550 = inst_51558;
var state_51574__$1 = (function (){var statearr_51589 = state_51574;
(statearr_51589[(8)] = inst_51550);

(statearr_51589[(11)] = inst_51549__$1);

return statearr_51589;
})();
var statearr_51591_52365 = state_51574__$1;
(statearr_51591_52365[(2)] = null);

(statearr_51591_52365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (9))){
var inst_51549 = (state_51574[(11)]);
var state_51574__$1 = state_51574;
var statearr_51593_52366 = state_51574__$1;
(statearr_51593_52366[(2)] = inst_51549);

(statearr_51593_52366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (5))){
var inst_51540 = (state_51574[(7)]);
var inst_51542 = (state_51574[(2)]);
var inst_51543 = com.wsscode.common.async_cljs.throw_err(inst_51542);
var inst_51544 = [inst_51543];
var inst_51545 = (new cljs.core.PersistentVector(null,1,(5),inst_51540,inst_51544,null));
var inst_51546 = cljs.core.seq(tail__$1);
var inst_51547 = cljs.core.first(inst_51546);
var inst_51548 = cljs.core.next(inst_51546);
var inst_51549 = inst_51545;
var inst_51550 = tail__$1;
var state_51574__$1 = (function (){var statearr_51594 = state_51574;
(statearr_51594[(12)] = inst_51547);

(statearr_51594[(8)] = inst_51550);

(statearr_51594[(11)] = inst_51549);

(statearr_51594[(13)] = inst_51548);

return statearr_51594;
})();
var statearr_51595_52367 = state_51574__$1;
(statearr_51595_52367[(2)] = null);

(statearr_51595_52367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (10))){
var inst_51568 = (state_51574[(2)]);
var state_51574__$1 = state_51574;
var statearr_51596_52368 = state_51574__$1;
(statearr_51596_52368[(2)] = inst_51568);

(statearr_51596_52368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51575 === (8))){
var inst_51549 = (state_51574[(11)]);
var inst_51557 = (state_51574[(9)]);
var inst_51560 = join_item(inst_51557,inst_51549);
var state_51574__$1 = state_51574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51574__$1,(11),inst_51560);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(out__$1,G__51449__$1,c__43002__auto__,res,out__$2,vec__51524,seq__51525,first__51526,seq__51525__$1,ent__$1,tail__$1,out,G__51449,vec__51450,seq__51451,first__51452,seq__51451__$1,ent,tail,map__51424,map__51424__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__51449__$1,switch__42979__auto__,c__43002__auto__,res,out__$2,vec__51524,seq__51525,first__51526,seq__51525__$1,ent__$1,tail__$1,out,G__51449,vec__51450,seq__51451,first__51452,seq__51451__$1,ent,tail,map__51424,map__51424__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto____0 = (function (){
var statearr_51599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51599[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto__);

(statearr_51599[(1)] = (1));

return statearr_51599;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto____1 = (function (state_51574){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51574);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51600){if((e51600 instanceof Object)){
var ex__42983__auto__ = e51600;
var statearr_51601_52369 = state_51574;
(statearr_51601_52369[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52370 = state_51574;
state_51574 = G__52370;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto__ = function(state_51574){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto____1.call(this,state_51574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__42980__auto__;
})()
;})(out__$1,G__51449__$1,switch__42979__auto__,c__43002__auto__,res,out__$2,vec__51524,seq__51525,first__51526,seq__51525__$1,ent__$1,tail__$1,out,G__51449,vec__51450,seq__51451,first__51452,seq__51451__$1,ent,tail,map__51424,map__51424__$1,env,parallel_QMARK_))
})();
var state__43004__auto__ = (function (){var statearr_51602 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51602[(6)] = c__43002__auto__);

return statearr_51602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(out__$1,G__51449__$1,c__43002__auto__,res,out__$2,vec__51524,seq__51525,first__51526,seq__51525__$1,ent__$1,tail__$1,out,G__51449,vec__51450,seq__51451,first__51452,seq__51451__$1,ent,tail,map__51424,map__51424__$1,env,parallel_QMARK_))
);

return c__43002__auto__;
} else {
var G__52371 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__52372 = tail__$1;
out__$1 = G__52371;
G__51449__$1 = G__52372;
continue;
}
} else {
return out__$2;
}
break;
}
}
});
com.wsscode.pathom.core.ident_QMARK_ = (function com$wsscode$pathom$core$ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))));
});
com.wsscode.pathom.core.ident_key_STAR_ = (function com$wsscode$pathom$core$ident_key_STAR_(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
/**
 * The first element of an ident.
 */
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__51605){
var map__51606 = p__51605;
var map__51606__$1 = (((((!((map__51606 == null))))?(((((map__51606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51606):map__51606);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__51609 = ast;
if((G__51609 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__51609);
}
})();
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ident_value_STAR_ = (function com$wsscode$pathom$core$ident_value_STAR_(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * The second element of an ident
 */
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__51611){
var map__51612 = p__51611;
var map__51612__$1 = (((((!((map__51612 == null))))?(((((map__51612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51612):map__51612);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__51614 = ast;
if((G__51614 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__51614);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__51619,elision_set){
var map__51620 = p__51619;
var map__51620__$1 = (((((!((map__51620 == null))))?(((((map__51620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51620):map__51620);
var ast = map__51620__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51620__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51620__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__51620,map__51620__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__51620,map__51620__$1,ast,key,union_key){
return (function (p1__51617_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__51617_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__51617_SHARP_,elision_set));
});})(union_elision_QMARK_,map__51620,map__51620__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__51620,map__51620__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__51628){
var map__51630 = p__51628;
var map__51630__$1 = (((((!((map__51630 == null))))?(((((map__51630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51630):map__51630);
var env = map__51630__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51630__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__51633 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51633,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__51633;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__51636){
var map__51637 = p__51636;
var map__51637__$1 = (((((!((map__51637 == null))))?(((((map__51637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51637):map__51637);
var item_b = map__51637__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51637__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51637__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51637__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5733__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__51637,map__51637__$1,item_b,key,type,params){
return (function (p1__51635_SHARP_,p2__51634_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__51634_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51635_SHARP_,p2__51634_SHARP_], null);
} else {
return null;
}
});})(map__51637,map__51637__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51641 = temp__5733__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51641,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51641,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),com.wsscode.pathom.core.merge_queries_STAR_,item_b);
} else {
return cljs.core.reduced(null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type)))){
return cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),item_b);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.reduced(null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,item_b);
}
}),qa,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(qb));
});
com.wsscode.pathom.core.merge_queries = (function com$wsscode$pathom$core$merge_queries(qa,qb){
var G__51649 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__51649 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__51649);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__51655 = x;
var G__51655__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51655,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__51655);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__51655__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__51655,G__51655__$1){
return (function (p1__51652_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__51655,G__51655__$1){
return (function (p__51656){
var vec__51657 = p__51656;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51657,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51657,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__51655,G__51655__$1))
),p1__51652_SHARP_);
});})(G__51655,G__51655__$1))
);
} else {
return G__51655__$1;
}
})),com.wsscode.pathom.core.query__GT_ast(query)));
});
/**
 * Generates a consistent hash from the query. The query first goes to a process to remove any
 *   variables from idents and params, then we get the Clojure hash of it. You can use this to save
 *   information about a query that can be used to correlate with the query later.
 */
com.wsscode.pathom.core.query_id = (function com$wsscode$pathom$core$query_id(query){
return cljs.core.hash(com.wsscode.pathom.core.normalize_query_variables(query));
});
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__51665){
var map__51667 = p__51665;
var map__51667__$1 = (((((!((map__51667 == null))))?(((((map__51667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51667):map__51667);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__51669){
var map__51670 = p__51669;
var map__51670__$1 = (((((!((map__51670 == null))))?(((((map__51670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51670):map__51670);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return null;
}
});
/**
 * Produces a reader that will respond to any keyword whose namespace
 *   is in the set `(::placeholder-prefixes env)`. The join node logical
 *   level stays the same as the parent where the placeholder node is
 *   requested.
 */
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__51674){
var map__51676 = p__51674;
var map__51676__$1 = (((((!((map__51676 == null))))?(((((map__51676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51676):map__51676);
var env = map__51676__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51676__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
if(cljs.core.truth_(placeholder_prefixes)){
} else {
throw (new Error(["Assert failed: ","To use env-placeholder-reader please add ::p/placeholder-prefixes to your environment.","\n","placeholder-prefixes"].join('')));
}

if(cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env))))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This will lift the queries from placeholders to the same level of the query, as if there was not placeholders in it.
 */
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(p__51683,query){
var map__51686 = p__51683;
var map__51686__$1 = (((((!((map__51686 == null))))?(((((map__51686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51686):map__51686);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51686__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var ast = com.wsscode.pathom.core.query__GT_ast(query);
var ast_SINGLEQUOTE_ = clojure.walk.postwalk(((function (ast,map__51686,map__51686__$1,placeholder_prefixes){
return (function (x){
var temp__5733__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var children = temp__5733__auto__;
var map__51690 = cljs.core.group_by(((function (children,temp__5733__auto__,ast,map__51686,map__51686__$1,placeholder_prefixes){
return (function (p1__51680_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51680_SHARP_))) && (cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__51680_SHARP_)))));
});})(children,temp__5733__auto__,ast,map__51686,map__51686__$1,placeholder_prefixes))
,children);
var map__51690__$1 = (((((!((map__51690 == null))))?(((((map__51690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51690):map__51690);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51690__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51690__$1,false);
var _LT__GT_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var or__4131__auto__ = regular;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.core.merge_queries_STAR_,_LT__GT_,placeholders);
} else {
return x;
}
});})(ast,map__51686,map__51686__$1,placeholder_prefixes))
,ast);
return com.wsscode.pathom.core.ast__GT_query(ast_SINGLEQUOTE_);
});
/**
 * Map reader will try to find the ast key on the current entity and output it. When the value is a map and a
 *   sub query is present, it will apply the sub query on that value (recursively). When the value is a sequence,
 *   map-reader will do a join on each of the items (and apply sub queries if it's present and values are maps.
 * 
 *   Map-reader will defer the read when the key is not present at entity.
 */
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__51697){
var map__51698 = p__51697;
var map__51698__$1 = (((((!((map__51698 == null))))?(((((map__51698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51698):map__51698);
var env = map__51698__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51698__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51698__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = cljs.core.find(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51702 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(1),null);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return query;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(v,env);
} else {
return v;
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like map-reader, but it has extra options (read from the environment):
 *   map-key-transform: (fn [key]) will transform the key on the AST before trying to match with entity key
 *   map-value-transform: (fn [key value]) will transform the output value after reading from the entity.
 * 
 *   The reason to have a separated reader is so the plain version (map-reader) can be faster by avoiding checking
 *   the presence of transform functions.
 */
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__51705){
var map__51706 = p__51705;
var map__51706__$1 = (((((!((map__51706 == null))))?(((((map__51706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51706):map__51706);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51706__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51706__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__51706,map__51706__$1,map_key_transform,map_value_transform){
return (function (p__51709){
var map__51710 = p__51709;
var map__51710__$1 = (((((!((map__51710 == null))))?(((((map__51710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51710):map__51710);
var env = map__51710__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51710__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51710__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51710__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__51712 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__51712) : map_key_transform.call(null,G__51712));
} else {
return G__51712;
}
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5733__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__51713 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(1),null);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return query;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__51717 = v;
if(cljs.core.truth_(map_value_transform)){
var G__51718 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__51719 = G__51717;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__51718,G__51719) : map_value_transform.call(null,G__51718,G__51719));
} else {
return G__51717;
}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__51706,map__51706__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__51723){
var map__51724 = p__51723;
var map__51724__$1 = (((((!((map__51724 == null))))?(((((map__51724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51724):map__51724);
var env = map__51724__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51724__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51724__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51724__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51724__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__51724,map__51724__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__51724,map__51724__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51724__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__51726 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__51726) : js_key_transform.call(null,G__51726));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(v));
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__51727 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__51728 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__51727,G__51728) : js_value_transform.call(null,G__51727,G__51728));
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This reader will join on any ident join, the entity for the join will be a map containing the same
 *   key and value expressed on the ident, eg: [{[:id 123] [:id]}], the join entry will be {:id 123}.
 */
com.wsscode.pathom.core.ident_join_reader = (function com$wsscode$pathom$core$ident_join_reader(env){
var temp__5733__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5733__auto__)){
var key = temp__5733__auto__;
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Helper to create a plugin that can view/modify the env/tx of a top-level request.
 *   f - (fn [{:keys [env tx]}] {:env new-env :tx new-tx})
 *   If the function returns no env or tx, then the parser will not be called (aborts the parse)
 */
com.wsscode.pathom.core.pre_process_parser_plugin = (function com$wsscode$pathom$core$pre_process_parser_plugin(f){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$pre_process_parser_plugin_$_transform_parser_out_plugin_external(parser){
return (function com$wsscode$pathom$core$pre_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal(env,tx){
var map__51731 = (function (){var G__51732 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51732) : f.call(null,G__51732));
})();
var map__51731__$1 = (((((!((map__51731 == null))))?(((((map__51731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51731):map__51731);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
if(((cljs.core.map_QMARK_(env__$1)) && (cljs.core.seq(tx__$1)))){
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env__$1,tx__$1) : parser.call(null,env__$1,tx__$1));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
})], null);
});
/**
 * Helper to create a plugin to work on the parser output. `f` will run once with the parser final result.
 */
com.wsscode.pathom.core.post_process_parser_plugin = (function com$wsscode$pathom$core$post_process_parser_plugin(f){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external(parser){
return (function com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal(env,tx){
var res__48511__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__){
return (function (state_51751){
var state_val_51752 = (state_51751[(1)]);
if((state_val_51752 === (1))){
var state_51751__$1 = state_51751;
var statearr_51755_52373 = state_51751__$1;
(statearr_51755_52373[(2)] = null);

(statearr_51755_52373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (2))){
var inst_51749 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51751__$1,inst_51749);
} else {
if((state_val_51752 === (3))){
var inst_51739 = (state_51751[(2)]);
var state_51751__$1 = state_51751;
var statearr_51756_52374 = state_51751__$1;
(statearr_51756_52374[(2)] = inst_51739);


cljs.core.async.impl.ioc_helpers.process_exception(state_51751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51752 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51751,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51751__$1 = state_51751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51751__$1,(5),res__48511__auto__);
} else {
if((state_val_51752 === (5))){
var inst_51745 = (state_51751[(2)]);
var inst_51746 = com.wsscode.common.async_cljs.throw_err(inst_51745);
var inst_51747 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51746) : f.call(null,inst_51746));
var state_51751__$1 = state_51751;
var statearr_51757_52375 = state_51751__$1;
(statearr_51757_52375[(2)] = inst_51747);


cljs.core.async.impl.ioc_helpers.process_exception(state_51751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__){
return (function() {
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto____0 = (function (){
var statearr_51758 = [null,null,null,null,null,null,null];
(statearr_51758[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto__);

(statearr_51758[(1)] = (1));

return statearr_51758;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto____1 = (function (state_51751){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51751);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51759){if((e51759 instanceof Object)){
var ex__42983__auto__ = e51759;
var statearr_51760_52376 = state_51751;
(statearr_51760_52376[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52377 = state_51751;
state_51751 = G__52377;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto__ = function(state_51751){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto____1.call(this,state_51751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__))
})();
var state__43004__auto__ = (function (){var statearr_51763 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51763[(6)] = c__43002__auto__);

return statearr_51763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__))
);

return c__43002__auto__;
} else {
var res = res__48511__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(res) : f.call(null,res));
}
});
})], null);
});
com.wsscode.pathom.core.elide_special_outputs_plugin = com.wsscode.pathom.core.post_process_parser_plugin(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.elide_items,com.wsscode.pathom.core.special_outputs));
com.wsscode.pathom.core.error_message = (function com$wsscode$pathom$core$error_message(err){
return err.message;
});
com.wsscode.pathom.core.error_str = (function com$wsscode$pathom$core$error_str(err){
var msg = err.message;
var data = cljs.core.ex_data(err);
var G__51770 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51770)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__51770;
}
});
/**
 * Helper function to update a mutation action.
 */
com.wsscode.pathom.core.update_action = (function com$wsscode$pathom$core$update_action(m,f){
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"action","action",-811238024))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"action","action",-811238024),f);
} else {
return m;
}
});
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__51774,e){
var map__51775 = p__51774;
var map__51775__$1 = (((((!((map__51775 == null))))?(((((map__51775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51775):map__51775);
var env = map__51775__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51775__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__51777,e){
var map__51778 = p__51777;
var map__51778__$1 = (((((!((map__51778 == null))))?(((((map__51778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51778):map__51778);
var env = map__51778__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51778__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51778__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__51780){
var map__51781 = p__51780;
var map__51781__$1 = (((((!((map__51781 == null))))?(((((map__51781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51781):map__51781);
var env = map__51781__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51781__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(x)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,x,map__51781,map__51781__$1,env,fail_fast_QMARK_){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,x,map__51781,map__51781__$1,env,fail_fast_QMARK_){
return (function (state_51795){
var state_val_51796 = (state_51795[(1)]);
if((state_val_51796 === (1))){
var state_51795__$1 = state_51795;
var statearr_51797_52378 = state_51795__$1;
(statearr_51797_52378[(2)] = null);

(statearr_51797_52378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (2))){
var inst_51793 = (state_51795[(2)]);
var state_51795__$1 = state_51795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51795__$1,inst_51793);
} else {
if((state_val_51796 === (3))){
var inst_51784 = (state_51795[(2)]);
var inst_51785 = com.wsscode.pathom.core.add_error(env,inst_51784);
var state_51795__$1 = state_51795;
var statearr_51799_52379 = state_51795__$1;
(statearr_51799_52379[(2)] = inst_51785);


cljs.core.async.impl.ioc_helpers.process_exception(state_51795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51796 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51795,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51795__$1 = state_51795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51795__$1,(5),x);
} else {
if((state_val_51796 === (5))){
var inst_51790 = (state_51795[(2)]);
var inst_51791 = com.wsscode.common.async_cljs.throw_err(inst_51790);
var state_51795__$1 = state_51795;
var statearr_51801_52380 = state_51795__$1;
(statearr_51801_52380[(2)] = inst_51791);


cljs.core.async.impl.ioc_helpers.process_exception(state_51795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,x,map__51781,map__51781__$1,env,fail_fast_QMARK_))
;
return ((function (switch__42979__auto__,c__43002__auto__,x,map__51781,map__51781__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto____0 = (function (){
var statearr_51804 = [null,null,null,null,null,null,null];
(statearr_51804[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto__);

(statearr_51804[(1)] = (1));

return statearr_51804;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto____1 = (function (state_51795){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51795);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51806){if((e51806 instanceof Object)){
var ex__42983__auto__ = e51806;
var statearr_51807_52381 = state_51795;
(statearr_51807_52381[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52382 = state_51795;
state_51795 = G__52382;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto__ = function(state_51795){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto____1.call(this,state_51795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,x,map__51781,map__51781__$1,env,fail_fast_QMARK_))
})();
var state__43004__auto__ = (function (){var statearr_51811 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51811[(6)] = c__43002__auto__);

return statearr_51811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,x,map__51781,map__51781__$1,env,fail_fast_QMARK_))
);

return c__43002__auto__;
} else {
return x;
}
}catch (e51783){var e = e51783;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__51816,k,p){
var map__51817 = p__51816;
var map__51817__$1 = (((((!((map__51817 == null))))?(((((map__51817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51817):map__51817);
var env = map__51817__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51817__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51817__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_){
return (function (state_51841){
var state_val_51842 = (state_51841[(1)]);
if((state_val_51842 === (1))){
var state_51841__$1 = state_51841;
var statearr_51843_52383 = state_51841__$1;
(statearr_51843_52383[(2)] = null);

(statearr_51843_52383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (2))){
var inst_51839 = (state_51841[(2)]);
var state_51841__$1 = state_51841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51841__$1,inst_51839);
} else {
if((state_val_51842 === (3))){
var inst_51822 = (state_51841[(2)]);
var state_51841__$1 = (function (){var statearr_51844 = state_51841;
(statearr_51844[(7)] = inst_51822);

return statearr_51844;
})();
if(cljs.core.truth_(process_error)){
var statearr_51845_52384 = state_51841__$1;
(statearr_51845_52384[(1)] = (4));

} else {
var statearr_51846_52385 = state_51841__$1;
(statearr_51846_52385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (4))){
var inst_51822 = (state_51841[(7)]);
var inst_51824 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_51822) : process_error.call(null,env,inst_51822));
var state_51841__$1 = state_51841;
var statearr_51847_52386 = state_51841__$1;
(statearr_51847_52386[(2)] = inst_51824);

(statearr_51847_52386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (5))){
var inst_51822 = (state_51841[(7)]);
var inst_51826 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_51827 = com.wsscode.pathom.core.error_str(inst_51822);
var inst_51828 = [inst_51827];
var inst_51829 = cljs.core.PersistentHashMap.fromArrays(inst_51826,inst_51828);
var state_51841__$1 = state_51841;
var statearr_51849_52387 = state_51841__$1;
(statearr_51849_52387[(2)] = inst_51829);

(statearr_51849_52387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (6))){
var inst_51831 = (state_51841[(2)]);
var state_51841__$1 = state_51841;
var statearr_51851_52388 = state_51841__$1;
(statearr_51851_52388[(2)] = inst_51831);


cljs.core.async.impl.ioc_helpers.process_exception(state_51841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51842 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51841,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51841__$1 = state_51841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51841__$1,(8),res);
} else {
if((state_val_51842 === (8))){
var inst_51836 = (state_51841[(2)]);
var inst_51837 = com.wsscode.common.async_cljs.throw_err(inst_51836);
var state_51841__$1 = state_51841;
var statearr_51854_52389 = state_51841__$1;
(statearr_51854_52389[(2)] = inst_51837);


cljs.core.async.impl.ioc_helpers.process_exception(state_51841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__,res,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__42979__auto__,c__43002__auto__,res,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto____0 = (function (){
var statearr_51857 = [null,null,null,null,null,null,null,null];
(statearr_51857[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto__);

(statearr_51857[(1)] = (1));

return statearr_51857;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto____1 = (function (state_51841){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51841);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51860){if((e51860 instanceof Object)){
var ex__42983__auto__ = e51860;
var statearr_51861_52390 = state_51841;
(statearr_51861_52390[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52391 = state_51841;
state_51841 = G__52391;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto__ = function(state_51841){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto____1.call(this,state_51841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_))
})();
var state__43004__auto__ = (function (){var statearr_51862 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51862[(6)] = c__43002__auto__);

return statearr_51862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_))
);

return c__43002__auto__;
} else {
return res;
}
}catch (e51821){var e = e51821;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_))
});})(map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e51820){var e = e51820;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__51817,map__51817__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__48511__auto__ = (function (){var G__51866 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__51867 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__51866,G__51867) : parser.call(null,G__51866,G__51867));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__,errors){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__,errors){
return (function (state_51891){
var state_val_51892 = (state_51891[(1)]);
if((state_val_51892 === (1))){
var state_51891__$1 = state_51891;
var statearr_51896_52392 = state_51891__$1;
(statearr_51896_52392[(2)] = null);

(statearr_51896_52392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (2))){
var inst_51889 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51891__$1,inst_51889);
} else {
if((state_val_51892 === (3))){
var inst_51870 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51900_52393 = state_51891__$1;
(statearr_51900_52393[(2)] = inst_51870);


cljs.core.async.impl.ioc_helpers.process_exception(state_51891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51891,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51891__$1 = state_51891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51891__$1,(5),res__48511__auto__);
} else {
if((state_val_51892 === (5))){
var inst_51875 = (state_51891[(2)]);
var inst_51877 = com.wsscode.common.async_cljs.throw_err(inst_51875);
var inst_51879 = cljs.core.deref(errors);
var inst_51880 = cljs.core.seq(inst_51879);
var state_51891__$1 = (function (){var statearr_51904 = state_51891;
(statearr_51904[(7)] = inst_51877);

return statearr_51904;
})();
if(inst_51880){
var statearr_51906_52394 = state_51891__$1;
(statearr_51906_52394[(1)] = (6));

} else {
var statearr_51907_52395 = state_51891__$1;
(statearr_51907_52395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (6))){
var inst_51877 = (state_51891[(7)]);
var inst_51882 = cljs.core.deref(errors);
var inst_51883 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_51877,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_51882);
var state_51891__$1 = state_51891;
var statearr_51908_52396 = state_51891__$1;
(statearr_51908_52396[(2)] = inst_51883);

(statearr_51908_52396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (7))){
var inst_51877 = (state_51891[(7)]);
var state_51891__$1 = state_51891;
var statearr_51911_52397 = state_51891__$1;
(statearr_51911_52397[(2)] = inst_51877);

(statearr_51911_52397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51892 === (8))){
var inst_51886 = (state_51891[(2)]);
var state_51891__$1 = state_51891;
var statearr_51912_52398 = state_51891__$1;
(statearr_51912_52398[(2)] = inst_51886);


cljs.core.async.impl.ioc_helpers.process_exception(state_51891__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__,errors))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto____0 = (function (){
var statearr_51915 = [null,null,null,null,null,null,null,null];
(statearr_51915[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto__);

(statearr_51915[(1)] = (1));

return statearr_51915;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto____1 = (function (state_51891){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51891);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51917){if((e51917 instanceof Object)){
var ex__42983__auto__ = e51917;
var statearr_51919_52399 = state_51891;
(statearr_51919_52399[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51917;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52400 = state_51891;
state_51891 = G__52400;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto__ = function(state_51891){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto____1.call(this,state_51891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__,errors))
})();
var state__43004__auto__ = (function (){var statearr_51921 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_51921[(6)] = c__43002__auto__);

return statearr_51921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__,errors))
);

return c__43002__auto__;
} else {
var res = res__48511__auto__;
var G__51922 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51922,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__51922;
}
}
});
});
com.wsscode.pathom.core.error_handler_plugin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),com.wsscode.pathom.core.wrap_handle_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.core.wrap_parser_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),com.wsscode.pathom.core.wrap_mutate_handle_exception], null);
com.wsscode.pathom.core.trace_plugin = com.wsscode.pathom.trace.trace_plugin;
com.wsscode.pathom.core.collapse_error_path = (function com$wsscode$pathom$core$collapse_error_path(m,path){

return cljs.core.vec((function (){var path_SINGLEQUOTE_ = path;
while(true){
if((cljs.core.count(path_SINGLEQUOTE_) === (0))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),path);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path_SINGLEQUOTE_))){
return path_SINGLEQUOTE_;
} else {
var G__52401 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__52401;
continue;
}
}
break;
}
})());
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","collapse-error-path","com.wsscode.pathom.core/collapse-error-path",-1124133360,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__51933){
var vec__51936 = p__51933;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path))){
var path_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.last(path)], null));
return cljs.core.assoc_in(m,path_SINGLEQUOTE_,err);
} else {
return m;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","raise-errors","com.wsscode.pathom.core/raise-errors",77570572,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51944){
return cljs.core.map_QMARK_(G__51944);
})], null),(function (G__51944){
return cljs.core.map_QMARK_(G__51944);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
/**
 * Mutations running through a parser all come back in a map like this {'my/mutation {:result {...}}}. This function
 *   converts that to {'my/mutation {...}}. Copied from fulcro.server.
 */
com.wsscode.pathom.core.raise_response = (function com$wsscode$pathom$core$raise_response(resp){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__51957){
var vec__51958 = p__51957;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51958,(1),null);
if((((k instanceof cljs.core.Symbol)) && ((!((new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(v) == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return x;
}
}),resp);
});
com.wsscode.pathom.core.raise_mutation_result_plugin = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$raise_mutation_result_wrap_parser(parser){
return (function com$wsscode$pathom$core$raise_mutation_result_wrap_parser_$_raise_mutation_result_wrap_internal(env,tx){
return com.wsscode.pathom.core.raise_response((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx)));
});
})], null);
com.wsscode.pathom.core.env_plugin = (function com$wsscode$pathom$core$env_plugin(extra_env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser_$_env_plugin_wrap_internal(env,tx){
var G__51963 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__51964 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__51963,G__51964) : parser.call(null,G__51963,G__51964));
});
})], null);
});
/**
 * This plugin receives a function that will be called to wrap the current
 *   enviroment each time the main parser is called (parser level).
 */
com.wsscode.pathom.core.env_wrap_plugin = (function com$wsscode$pathom$core$env_wrap_plugin(extra_env_wrapper){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser_$_env_wrap_wrap_internal(env,tx){
var G__51967 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__51968 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__51967,G__51968) : parser.call(null,G__51967,G__51968));
});
})], null);
});
/**
 * DEPRECATED not required anymore, this was integrated in the main engine.
 */
com.wsscode.pathom.core.request_cache_plugin = cljs.core.PersistentArrayMap.EMPTY;
com.wsscode.pathom.core.cached_STAR_ = (function com$wsscode$pathom$core$cached_STAR_(env,key,body_fn){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(temp__5733__auto__)){
var cache = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.core.find(cljs.core.deref(cache),key);
if(cljs.core.truth_(temp__5733__auto____$1)){
var vec__51973 = temp__5733__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.common.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__48511__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e51976){var e = e51976;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__,temp__5733__auto____$1,cache,temp__5733__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__,temp__5733__auto____$1,cache,temp__5733__auto__){
return (function (state_51988){
var state_val_51989 = (state_51988[(1)]);
if((state_val_51989 === (1))){
var state_51988__$1 = state_51988;
var statearr_51992_52402 = state_51988__$1;
(statearr_51992_52402[(2)] = null);

(statearr_51992_52402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (2))){
var inst_51986 = (state_51988[(2)]);
var state_51988__$1 = state_51988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51988__$1,inst_51986);
} else {
if((state_val_51989 === (3))){
var inst_51977 = (state_51988[(2)]);
var state_51988__$1 = state_51988;
var statearr_51993_52403 = state_51988__$1;
(statearr_51993_52403[(2)] = inst_51977);


cljs.core.async.impl.ioc_helpers.process_exception(state_51988__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51989 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51988,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51988__$1 = state_51988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51988__$1,(5),res__48511__auto__);
} else {
if((state_val_51989 === (5))){
var inst_51982 = (state_51988[(2)]);
var inst_51983 = com.wsscode.common.async_cljs.throw_err(inst_51982);
var inst_51984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_51983);
var state_51988__$1 = (function (){var statearr_51994 = state_51988;
(statearr_51994[(7)] = inst_51984);

return statearr_51994;
})();
var statearr_51996_52404 = state_51988__$1;
(statearr_51996_52404[(2)] = inst_51983);


cljs.core.async.impl.ioc_helpers.process_exception(state_51988__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__,temp__5733__auto____$1,cache,temp__5733__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__,temp__5733__auto____$1,cache,temp__5733__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto____0 = (function (){
var statearr_51997 = [null,null,null,null,null,null,null,null];
(statearr_51997[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto__);

(statearr_51997[(1)] = (1));

return statearr_51997;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto____1 = (function (state_51988){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_51988);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e51998){if((e51998 instanceof Object)){
var ex__42983__auto__ = e51998;
var statearr_51999_52405 = state_51988;
(statearr_51999_52405[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52406 = state_51988;
state_51988 = G__52406;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto__ = function(state_51988){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto____1.call(this,state_51988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__,temp__5733__auto____$1,cache,temp__5733__auto__))
})();
var state__43004__auto__ = (function (){var statearr_52002 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_52002[(6)] = c__43002__auto__);

return statearr_52002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__,temp__5733__auto____$1,cache,temp__5733__auto__))
);

return c__43002__auto__;
} else {
var hit = res__48511__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,hit);

return hit;
}
}
} else {
return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}
});
com.wsscode.pathom.core.cached_async_STAR_ = (function com$wsscode$pathom$core$cached_async_STAR_(env,key,f){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(temp__5733__auto__)){
var cache = temp__5733__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.update,key,((function (cache,temp__5733__auto__){
return (function (x){
if(cljs.core.truth_(x)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return x;
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var ch__48531__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__43002__auto___52407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto___52407,ch__48531__auto__,cache,temp__5733__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto___52407,ch__48531__auto__,cache,temp__5733__auto__){
return (function (state_52021){
var state_val_52022 = (state_52021[(1)]);
if((state_val_52022 === (1))){
var state_52021__$1 = state_52021;
var statearr_52023_52408 = state_52021__$1;
(statearr_52023_52408[(2)] = null);

(statearr_52023_52408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (2))){
var inst_52018 = (state_52021[(2)]);
var inst_52019 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__48531__auto__,inst_52018);
var state_52021__$1 = state_52021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52021__$1,inst_52019);
} else {
if((state_val_52022 === (3))){
var inst_52005 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
var statearr_52024_52409 = state_52021__$1;
(statearr_52024_52409[(2)] = inst_52005);


cljs.core.async.impl.ioc_helpers.process_exception(state_52021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (4))){
var inst_52009 = (state_52021[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52021,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_52009__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_52010 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52009__$1);
var state_52021__$1 = (function (){var statearr_52025 = state_52021;
(statearr_52025[(7)] = inst_52009__$1);

return statearr_52025;
})();
if(inst_52010){
var statearr_52026_52410 = state_52021__$1;
(statearr_52026_52410[(1)] = (5));

} else {
var statearr_52027_52411 = state_52021__$1;
(statearr_52027_52411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (5))){
var inst_52009 = (state_52021[(7)]);
var state_52021__$1 = state_52021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52021__$1,(8),inst_52009);
} else {
if((state_val_52022 === (6))){
var inst_52009 = (state_52021[(7)]);
var state_52021__$1 = state_52021;
var statearr_52028_52412 = state_52021__$1;
(statearr_52028_52412[(2)] = inst_52009);

(statearr_52028_52412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (7))){
var inst_52016 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
var statearr_52029_52413 = state_52021__$1;
(statearr_52029_52413[(2)] = inst_52016);


cljs.core.async.impl.ioc_helpers.process_exception(state_52021__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (8))){
var inst_52013 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
var statearr_52030_52414 = state_52021__$1;
(statearr_52030_52414[(2)] = inst_52013);

(statearr_52030_52414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto___52407,ch__48531__auto__,cache,temp__5733__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto___52407,ch__48531__auto__,cache,temp__5733__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____0 = (function (){
var statearr_52031 = [null,null,null,null,null,null,null,null];
(statearr_52031[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__);

(statearr_52031[(1)] = (1));

return statearr_52031;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____1 = (function (state_52021){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_52021);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e52034){if((e52034 instanceof Object)){
var ex__42983__auto__ = e52034;
var statearr_52035_52415 = state_52021;
(statearr_52035_52415[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52416 = state_52021;
state_52021 = G__52416;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__ = function(state_52021){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____1.call(this,state_52021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto___52407,ch__48531__auto__,cache,temp__5733__auto__))
})();
var state__43004__auto__ = (function (){var statearr_52038 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_52038[(6)] = c__43002__auto___52407);

return statearr_52038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto___52407,ch__48531__auto__,cache,temp__5733__auto__))
);


return ch__48531__auto__;
}
});})(cache,temp__5733__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__48531__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__43002__auto___52417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto___52417,ch__48531__auto__,temp__5733__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto___52417,ch__48531__auto__,temp__5733__auto__){
return (function (state_52057){
var state_val_52058 = (state_52057[(1)]);
if((state_val_52058 === (1))){
var state_52057__$1 = state_52057;
var statearr_52061_52418 = state_52057__$1;
(statearr_52061_52418[(2)] = null);

(statearr_52061_52418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (2))){
var inst_52054 = (state_52057[(2)]);
var inst_52055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__48531__auto__,inst_52054);
var state_52057__$1 = state_52057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52057__$1,inst_52055);
} else {
if((state_val_52058 === (3))){
var inst_52039 = (state_52057[(2)]);
var state_52057__$1 = state_52057;
var statearr_52062_52419 = state_52057__$1;
(statearr_52062_52419[(2)] = inst_52039);


cljs.core.async.impl.ioc_helpers.process_exception(state_52057__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (4))){
var inst_52044 = (state_52057[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52057,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_52044__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_52045 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52044__$1);
var state_52057__$1 = (function (){var statearr_52063 = state_52057;
(statearr_52063[(7)] = inst_52044__$1);

return statearr_52063;
})();
if(inst_52045){
var statearr_52064_52420 = state_52057__$1;
(statearr_52064_52420[(1)] = (5));

} else {
var statearr_52065_52421 = state_52057__$1;
(statearr_52065_52421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (5))){
var inst_52044 = (state_52057[(7)]);
var state_52057__$1 = state_52057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52057__$1,(8),inst_52044);
} else {
if((state_val_52058 === (6))){
var inst_52044 = (state_52057[(7)]);
var state_52057__$1 = state_52057;
var statearr_52068_52422 = state_52057__$1;
(statearr_52068_52422[(2)] = inst_52044);

(statearr_52068_52422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (7))){
var inst_52052 = (state_52057[(2)]);
var state_52057__$1 = state_52057;
var statearr_52070_52423 = state_52057__$1;
(statearr_52070_52423[(2)] = inst_52052);


cljs.core.async.impl.ioc_helpers.process_exception(state_52057__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52058 === (8))){
var inst_52048 = (state_52057[(2)]);
var state_52057__$1 = state_52057;
var statearr_52071_52424 = state_52057__$1;
(statearr_52071_52424[(2)] = inst_52048);

(statearr_52071_52424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto___52417,ch__48531__auto__,temp__5733__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto___52417,ch__48531__auto__,temp__5733__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____0 = (function (){
var statearr_52073 = [null,null,null,null,null,null,null,null];
(statearr_52073[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__);

(statearr_52073[(1)] = (1));

return statearr_52073;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____1 = (function (state_52057){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_52057);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e52074){if((e52074 instanceof Object)){
var ex__42983__auto__ = e52074;
var statearr_52075_52425 = state_52057;
(statearr_52075_52425[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52426 = state_52057;
state_52057 = G__52426;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__ = function(state_52057){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____1.call(this,state_52057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto___52417,ch__48531__auto__,temp__5733__auto__))
})();
var state__43004__auto__ = (function (){var statearr_52076 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_52076[(6)] = c__43002__auto___52417);

return statearr_52076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto___52417,ch__48531__auto__,temp__5733__auto__))
);


return ch__48531__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__52078,key,f){
var map__52079 = p__52078;
var map__52079__$1 = (((((!((map__52079 == null))))?(((((map__52079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52079):map__52079);
var env = map__52079__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__48531__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__43002__auto___52427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto___52427,ch__48531__auto__,out,map__52079,map__52079__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto___52427,ch__48531__auto__,out,map__52079,map__52079__$1,env,async_request_cache_ch,request_cache){
return (function (state_52093){
var state_val_52094 = (state_52093[(1)]);
if((state_val_52094 === (1))){
var state_52093__$1 = state_52093;
var statearr_52095_52428 = state_52093__$1;
(statearr_52095_52428[(2)] = null);

(statearr_52095_52428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (2))){
var inst_52090 = (state_52093[(2)]);
var inst_52091 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__48531__auto__,inst_52090);
var state_52093__$1 = state_52093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52093__$1,inst_52091);
} else {
if((state_val_52094 === (3))){
var inst_52081 = (state_52093[(2)]);
var state_52093__$1 = state_52093;
var statearr_52097_52429 = state_52093__$1;
(statearr_52097_52429[(2)] = inst_52081);


cljs.core.async.impl.ioc_helpers.process_exception(state_52093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52093,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_52093__$1 = state_52093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52093__$1,(6),out);
} else {
if((state_val_52094 === (5))){
var inst_52088 = (state_52093[(2)]);
var state_52093__$1 = state_52093;
var statearr_52099_52430 = state_52093__$1;
(statearr_52099_52430[(2)] = inst_52088);


cljs.core.async.impl.ioc_helpers.process_exception(state_52093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52094 === (6))){
var inst_52086 = (state_52093[(2)]);
var state_52093__$1 = state_52093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52093__$1,(5),inst_52086);
} else {
return null;
}
}
}
}
}
}
});})(c__43002__auto___52427,ch__48531__auto__,out,map__52079,map__52079__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__42979__auto__,c__43002__auto___52427,ch__48531__auto__,out,map__52079,map__52079__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto____0 = (function (){
var statearr_52103 = [null,null,null,null,null,null,null];
(statearr_52103[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto__);

(statearr_52103[(1)] = (1));

return statearr_52103;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto____1 = (function (state_52093){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_52093);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e52104){if((e52104 instanceof Object)){
var ex__42983__auto__ = e52104;
var statearr_52105_52431 = state_52093;
(statearr_52105_52431[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52432 = state_52093;
state_52093 = G__52432;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto__ = function(state_52093){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto____1.call(this,state_52093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto___52427,ch__48531__auto__,out,map__52079,map__52079__$1,env,async_request_cache_ch,request_cache))
})();
var state__43004__auto__ = (function (){var statearr_52106 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_52106[(6)] = c__43002__auto___52427);

return statearr_52106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto___52427,ch__48531__auto__,out,map__52079,map__52079__$1,env,async_request_cache_ch,request_cache))
);


return ch__48531__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__){
return (function (state_52133){
var state_val_52134 = (state_52133[(1)]);
if((state_val_52134 === (1))){
var state_52133__$1 = state_52133;
var statearr_52136_52433 = state_52133__$1;
(statearr_52136_52433[(2)] = null);

(statearr_52136_52433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (2))){
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52133__$1,(4),ch);
} else {
if((state_val_52134 === (3))){
var inst_52131 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52133__$1,inst_52131);
} else {
if((state_val_52134 === (4))){
var inst_52113 = (state_52133[(7)]);
var inst_52113__$1 = (state_52133[(2)]);
var state_52133__$1 = (function (){var statearr_52139 = state_52133;
(statearr_52139[(7)] = inst_52113__$1);

return statearr_52139;
})();
if(cljs.core.truth_(inst_52113__$1)){
var statearr_52140_52434 = state_52133__$1;
(statearr_52140_52434[(1)] = (5));

} else {
var statearr_52141_52435 = state_52133__$1;
(statearr_52141_52435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (5))){
var inst_52113 = (state_52133[(7)]);
var inst_52119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52113,(0),null);
var inst_52120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52113,(1),null);
var inst_52121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52113,(2),null);
var inst_52122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52113,(3),null);
var inst_52123 = com.wsscode.pathom.core.cached_async_STAR_(inst_52119,inst_52120,inst_52121);
var state_52133__$1 = state_52133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52133__$1,(8),inst_52122,inst_52123);
} else {
if((state_val_52134 === (6))){
var state_52133__$1 = state_52133;
var statearr_52142_52436 = state_52133__$1;
(statearr_52142_52436[(2)] = null);

(statearr_52142_52436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (7))){
var inst_52129 = (state_52133[(2)]);
var state_52133__$1 = state_52133;
var statearr_52143_52437 = state_52133__$1;
(statearr_52143_52437[(2)] = inst_52129);

(statearr_52143_52437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52134 === (8))){
var inst_52125 = (state_52133[(2)]);
var state_52133__$1 = (function (){var statearr_52144 = state_52133;
(statearr_52144[(8)] = inst_52125);

return statearr_52144;
})();
var statearr_52145_52438 = state_52133__$1;
(statearr_52145_52438[(2)] = null);

(statearr_52145_52438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43002__auto__))
;
return ((function (switch__42979__auto__,c__43002__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto____0 = (function (){
var statearr_52147 = [null,null,null,null,null,null,null,null,null];
(statearr_52147[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto__);

(statearr_52147[(1)] = (1));

return statearr_52147;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto____1 = (function (state_52133){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_52133);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e52149){if((e52149 instanceof Object)){
var ex__42983__auto__ = e52149;
var statearr_52150_52439 = state_52133;
(statearr_52150_52439[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52440 = state_52133;
state_52133 = G__52440;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto__ = function(state_52133){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto____1.call(this,state_52133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__))
})();
var state__43004__auto__ = (function (){var statearr_52151 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_52151[(6)] = c__43002__auto__);

return statearr_52151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__))
);

return c__43002__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__52152,key,value){
var map__52153 = p__52152;
var map__52153__$1 = (((((!((map__52153 == null))))?(((((map__52153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52153):map__52153);
var env = map__52153__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52153__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__52156,key){
var map__52157 = p__52156;
var map__52157__$1 = (((((!((map__52157 == null))))?(((((map__52157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52157):map__52157);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52157__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__52162,key){
var map__52164 = p__52162;
var map__52164__$1 = (((((!((map__52164 == null))))?(((((map__52164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52164):map__52164);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52164__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__52169){
var map__52170 = p__52169;
var map__52170__$1 = (((((!((map__52170 == null))))?(((((map__52170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52170):map__52170);
var env = map__52170__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52170__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__52173 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__52173) : reader.call(null,G__52173));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__52176){
var vec__52177 = p__52176;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52177,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__52183 = arguments.length;
switch (G__52183) {
case 1:
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$1 = (function (parser){
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2 = (function (parser,plugins){
return (function() {
var com$wsscode$pathom$core$wrap_normalize_env_internal = null;
var com$wsscode$pathom$core$wrap_normalize_env_internal__2 = (function (env,tx){
return com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$3(env,tx,null);
});
var com$wsscode$pathom$core$wrap_normalize_env_internal__3 = (function (env,tx,target){
var G__52184 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__52185 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__52184,G__52185) : parser.call(null,G__52184,G__52185));
});
com$wsscode$pathom$core$wrap_normalize_env_internal = function(env,tx,target){
switch(arguments.length){
case 2:
return com$wsscode$pathom$core$wrap_normalize_env_internal__2.call(this,env,tx);
case 3:
return com$wsscode$pathom$core$wrap_normalize_env_internal__3.call(this,env,tx,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom$core$wrap_normalize_env_internal__2;
com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$3 = com$wsscode$pathom$core$wrap_normalize_env_internal__3;
return com$wsscode$pathom$core$wrap_normalize_env_internal;
})()
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__48511__auto__ = (function (){var G__52186 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__52187 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__52186,G__52187) : parser.call(null,G__52186,G__52187));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__48511__auto__)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,res__48511__auto__,async_cache_ch){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,res__48511__auto__,async_cache_ch){
return (function (state_52199){
var state_val_52200 = (state_52199[(1)]);
if((state_val_52200 === (1))){
var state_52199__$1 = state_52199;
var statearr_52201_52442 = state_52199__$1;
(statearr_52201_52442[(2)] = null);

(statearr_52201_52442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (2))){
var inst_52197 = (state_52199[(2)]);
var state_52199__$1 = state_52199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52199__$1,inst_52197);
} else {
if((state_val_52200 === (3))){
var inst_52188 = (state_52199[(2)]);
var state_52199__$1 = state_52199;
var statearr_52202_52443 = state_52199__$1;
(statearr_52202_52443[(2)] = inst_52188);


cljs.core.async.impl.ioc_helpers.process_exception(state_52199__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52200 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52199,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_52199__$1 = state_52199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52199__$1,(5),res__48511__auto__);
} else {
if((state_val_52200 === (5))){
var inst_52193 = (state_52199[(2)]);
var inst_52194 = com.wsscode.common.async_cljs.throw_err(inst_52193);
var inst_52195 = cljs.core.async.close_BANG_(async_cache_ch);
var state_52199__$1 = (function (){var statearr_52203 = state_52199;
(statearr_52203[(7)] = inst_52195);

return statearr_52203;
})();
var statearr_52204_52444 = state_52199__$1;
(statearr_52204_52444[(2)] = inst_52194);


cljs.core.async.impl.ioc_helpers.process_exception(state_52199__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto__,res__48511__auto__,async_cache_ch))
;
return ((function (switch__42979__auto__,c__43002__auto__,res__48511__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto____0 = (function (){
var statearr_52205 = [null,null,null,null,null,null,null,null];
(statearr_52205[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto__);

(statearr_52205[(1)] = (1));

return statearr_52205;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto____1 = (function (state_52199){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_52199);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e52206){if((e52206 instanceof Object)){
var ex__42983__auto__ = e52206;
var statearr_52207_52445 = state_52199;
(statearr_52207_52445[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52446 = state_52199;
state_52199 = G__52446;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto__ = function(state_52199){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto____1.call(this,state_52199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,res__48511__auto__,async_cache_ch))
})();
var state__43004__auto__ = (function (){var statearr_52208 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_52208[(6)] = c__43002__auto__);

return statearr_52208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,res__48511__auto__,async_cache_ch))
);

return c__43002__auto__;
} else {
var res = res__48511__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__52447 = null;
var G__52447__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__52447__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__52447 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__52447__1.call(this,env);
case 3:
return G__52447__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52447.cljs$core$IFn$_invoke$arity$1 = G__52447__1;
G__52447.cljs$core$IFn$_invoke$arity$3 = G__52447__3;
return G__52447;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__52209){
var map__52210 = p__52209;
var map__52210__$1 = (((((!((map__52210 == null))))?(((((map__52210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52210):map__52210);
var env = map__52210__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52210__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52448 = arguments.length;
var i__4731__auto___52449 = (0);
while(true){
if((i__4731__auto___52449 < len__4730__auto___52448)){
args__4736__auto__.push((arguments[i__4731__auto___52449]));

var G__52450 = (i__4731__auto___52449 + (1));
i__4731__auto___52449 = G__52450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic = (function (v,plugins,key,params){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,plugin){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,key);
if(cljs.core.truth_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,params);
} else {
return x;
}
}),v,plugins);
});

com.wsscode.pathom.core.apply_plugins.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq52212){
var G__52213 = cljs.core.first(seq52212);
var seq52212__$1 = cljs.core.next(seq52212);
var G__52214 = cljs.core.first(seq52212__$1);
var seq52212__$2 = cljs.core.next(seq52212__$1);
var G__52215 = cljs.core.first(seq52212__$2);
var seq52212__$3 = cljs.core.next(seq52212__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52213,G__52214,G__52215,seq52212__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52451 = arguments.length;
var i__4731__auto___52452 = (0);
while(true){
if((i__4731__auto___52452 < len__4730__auto___52451)){
args__4736__auto__.push((arguments[i__4731__auto___52452]));

var G__52453 = (i__4731__auto___52452 + (1));
i__4731__auto___52452 = G__52453;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic = (function (env,key,v,args){
var plugins = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),key], null),cljs.core.PersistentVector.EMPTY);
var augmented_v = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (plugins){
return (function (x,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});})(plugins))
,v,plugins);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(augmented_v,args);
});

com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq52216){
var G__52217 = cljs.core.first(seq52216);
var seq52216__$1 = cljs.core.next(seq52216);
var G__52218 = cljs.core.first(seq52216__$1);
var seq52216__$2 = cljs.core.next(seq52216__$1);
var G__52219 = cljs.core.first(seq52216__$2);
var seq52216__$3 = cljs.core.next(seq52216__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52217,G__52218,G__52219,seq52216__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__52220){
var map__52221 = p__52220;
var map__52221__$1 = (((((!((map__52221 == null))))?(((((map__52221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52221):map__52221);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52221__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52221__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__52223 = plugins;
var G__52223__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__52223):G__52223);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__52223__$1);
} else {
return G__52223__$1;
}
});
com.wsscode.pathom.core.settings_mutation = (function com$wsscode$pathom$core$settings_mutation(settings){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173).cljs$core$IFn$_invoke$arity$1(settings);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(settings);
}
});
/**
 * Create a new pathom serial parser, this parser is capable of waiting for core.async
 *   to continue processing, allowing async operations to happen during the parsing.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 */
com.wsscode.pathom.core.parser = (function com$wsscode$pathom$core$parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)),plugins);
});
/**
 * Create a new pathom async parser, this parser is serial and capable of waiting for core.async
 *   to continue processing, allowing async operations to happen during the parsing.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 */
com.wsscode.pathom.core.async_parser = (function com$wsscode$pathom$core$async_parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0))),plugins);
});
/**
 * Creaate a new pathom parallel parser, this parser is capable of coordinating parallel
 *   data fetch. This also works as an async parser and will handle core async channels
 *   properly.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 * 
 *   ::pc/async-request-cache-ch-size - Pathom uses internally a queue to avoid concurrency
 *   issues with concurrency, each request gets its own channel, so you can consider this
 *   size needs to accomodate the max parallelism for a single query. Default: 1024
 * 
 *   ::pt/max-key-iterations - there is a loop that happens when processing attributes in
 *   parallel, this loop will cause multiple iterations to happen in order for a single
 *   atribute to be processed, but in some conditions this loop can go indefinely, to
 *   prevent this situation this option allows to control the max number of iterations, after
 *   that it will give up on processing that attribute. Default: 10
 * 
 *   ::pt/key-process-timeout - Max time allowed to run the full query. This is a cascading
 *   timeout, the first level will have the total amount
 */
com.wsscode.pathom.core.parallel_parser = (function com$wsscode$pathom$core$parallel_parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null),new cljs.core.Keyword(null,"add-error","add-error",-1195330235),com.wsscode.pathom.core.add_error], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0))),plugins);
});
/**
 * Starting from a map, do a EQL selection on that map. Think of this function as
 *   a power up version of select-keys, but supporting nested selections and placeholders
 *   using the default `>` namespace.
 * 
 *   Example:
 *   (p/map-select {:foo "bar" :deep {:a 1 :b 2}} [{:deep [:a]}])
 *   => {:deep {:a 1}}
 */
com.wsscode.pathom.core.map_select = (function (){var parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.elide_special_outputs_plugin], null)], null));
return ((function (parser){
return (function (map,selection){
var G__52224 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),map], null);
var G__52225 = selection;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__52224,G__52225) : parser.call(null,G__52224,G__52225));
});
;})(parser))
})();
com.wsscode.pathom.core.continue$ = com.wsscode.pathom.core.join;
com.wsscode.pathom.core.continue_seq = com.wsscode.pathom.core.join_seq;
/**
 * DEPRECATED: use env-placeholder-reader instead.
 * 
 *   Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
 *   as the parent where the placeholder node is requested.
 */
com.wsscode.pathom.core.placeholder_reader = (function com$wsscode$pathom$core$placeholder_reader(var_args){
var G__52227 = arguments.length;
switch (G__52227) {
case 0:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1(">");
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return (function (p__52228){
var map__52229 = p__52228;
var map__52229__$1 = (((((!((map__52229 == null))))?(((((map__52229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52229):map__52229);
var env = map__52229__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52229__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
});

com.wsscode.pathom.core.placeholder_reader.cljs$lang$maxFixedArity = 1;

com.wsscode.pathom.core.placeholder_node = com.wsscode.pathom.core.placeholder_reader;
/**
 * DEPRECATED: use p/parser to create your parser
 */
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__52231,_,___$1){
var map__52232 = p__52231;
var map__52232__$1 = (((((!((map__52232 == null))))?(((((map__52232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52232):map__52232);
var env = map__52232__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52232__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52232__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__52234 = ast;
if((G__52234 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__52234);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ensure_attrs = (function com$wsscode$pathom$core$ensure_attrs(env,attributes){

return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
});

//# sourceMappingURL=com.wsscode.pathom.core.js.map
