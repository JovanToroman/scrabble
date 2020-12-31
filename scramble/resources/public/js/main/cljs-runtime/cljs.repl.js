goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52100){
var map__52101 = p__52100;
var map__52101__$1 = (((((!((map__52101 == null))))?(((((map__52101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52101):map__52101);
var m = map__52101__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52105_52301 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52106_52302 = null;
var count__52107_52303 = (0);
var i__52108_52304 = (0);
while(true){
if((i__52108_52304 < count__52107_52303)){
var f_52305 = chunk__52106_52302.cljs$core$IIndexed$_nth$arity$2(null,i__52108_52304);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52305], 0));


var G__52307 = seq__52105_52301;
var G__52308 = chunk__52106_52302;
var G__52309 = count__52107_52303;
var G__52310 = (i__52108_52304 + (1));
seq__52105_52301 = G__52307;
chunk__52106_52302 = G__52308;
count__52107_52303 = G__52309;
i__52108_52304 = G__52310;
continue;
} else {
var temp__5735__auto___52312 = cljs.core.seq(seq__52105_52301);
if(temp__5735__auto___52312){
var seq__52105_52313__$1 = temp__5735__auto___52312;
if(cljs.core.chunked_seq_QMARK_(seq__52105_52313__$1)){
var c__4550__auto___52315 = cljs.core.chunk_first(seq__52105_52313__$1);
var G__52316 = cljs.core.chunk_rest(seq__52105_52313__$1);
var G__52317 = c__4550__auto___52315;
var G__52318 = cljs.core.count(c__4550__auto___52315);
var G__52319 = (0);
seq__52105_52301 = G__52316;
chunk__52106_52302 = G__52317;
count__52107_52303 = G__52318;
i__52108_52304 = G__52319;
continue;
} else {
var f_52320 = cljs.core.first(seq__52105_52313__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52320], 0));


var G__52321 = cljs.core.next(seq__52105_52313__$1);
var G__52322 = null;
var G__52323 = (0);
var G__52324 = (0);
seq__52105_52301 = G__52321;
chunk__52106_52302 = G__52322;
count__52107_52303 = G__52323;
i__52108_52304 = G__52324;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52327 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52327], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52327)))?cljs.core.second(arglists_52327):arglists_52327)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52109_52328 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52110_52329 = null;
var count__52111_52330 = (0);
var i__52112_52331 = (0);
while(true){
if((i__52112_52331 < count__52111_52330)){
var vec__52133_52332 = chunk__52110_52329.cljs$core$IIndexed$_nth$arity$2(null,i__52112_52331);
var name_52333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52133_52332,(0),null);
var map__52136_52334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52133_52332,(1),null);
var map__52136_52335__$1 = (((((!((map__52136_52334 == null))))?(((((map__52136_52334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52136_52334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52136_52334):map__52136_52334);
var doc_52336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136_52335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136_52335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52333], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52337], 0));

if(cljs.core.truth_(doc_52336)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52336], 0));
} else {
}


var G__52343 = seq__52109_52328;
var G__52344 = chunk__52110_52329;
var G__52345 = count__52111_52330;
var G__52346 = (i__52112_52331 + (1));
seq__52109_52328 = G__52343;
chunk__52110_52329 = G__52344;
count__52111_52330 = G__52345;
i__52112_52331 = G__52346;
continue;
} else {
var temp__5735__auto___52348 = cljs.core.seq(seq__52109_52328);
if(temp__5735__auto___52348){
var seq__52109_52349__$1 = temp__5735__auto___52348;
if(cljs.core.chunked_seq_QMARK_(seq__52109_52349__$1)){
var c__4550__auto___52350 = cljs.core.chunk_first(seq__52109_52349__$1);
var G__52351 = cljs.core.chunk_rest(seq__52109_52349__$1);
var G__52352 = c__4550__auto___52350;
var G__52353 = cljs.core.count(c__4550__auto___52350);
var G__52354 = (0);
seq__52109_52328 = G__52351;
chunk__52110_52329 = G__52352;
count__52111_52330 = G__52353;
i__52112_52331 = G__52354;
continue;
} else {
var vec__52139_52355 = cljs.core.first(seq__52109_52349__$1);
var name_52356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52139_52355,(0),null);
var map__52142_52357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52139_52355,(1),null);
var map__52142_52358__$1 = (((((!((map__52142_52357 == null))))?(((((map__52142_52357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52142_52357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52142_52357):map__52142_52357);
var doc_52359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52142_52358__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52142_52358__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52356], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52360], 0));

if(cljs.core.truth_(doc_52359)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52359], 0));
} else {
}


var G__52362 = cljs.core.next(seq__52109_52349__$1);
var G__52363 = null;
var G__52364 = (0);
var G__52365 = (0);
seq__52109_52328 = G__52362;
chunk__52110_52329 = G__52363;
count__52111_52330 = G__52364;
i__52112_52331 = G__52365;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52146 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52147 = null;
var count__52148 = (0);
var i__52149 = (0);
while(true){
if((i__52149 < count__52148)){
var role = chunk__52147.cljs$core$IIndexed$_nth$arity$2(null,i__52149);
var temp__5735__auto___52366__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52366__$1)){
var spec_52367 = temp__5735__auto___52366__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52367)], 0));
} else {
}


var G__52369 = seq__52146;
var G__52370 = chunk__52147;
var G__52371 = count__52148;
var G__52372 = (i__52149 + (1));
seq__52146 = G__52369;
chunk__52147 = G__52370;
count__52148 = G__52371;
i__52149 = G__52372;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__52146);
if(temp__5735__auto____$1){
var seq__52146__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52146__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52146__$1);
var G__52376 = cljs.core.chunk_rest(seq__52146__$1);
var G__52377 = c__4550__auto__;
var G__52378 = cljs.core.count(c__4550__auto__);
var G__52379 = (0);
seq__52146 = G__52376;
chunk__52147 = G__52377;
count__52148 = G__52378;
i__52149 = G__52379;
continue;
} else {
var role = cljs.core.first(seq__52146__$1);
var temp__5735__auto___52383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52383__$2)){
var spec_52384 = temp__5735__auto___52383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52384)], 0));
} else {
}


var G__52385 = cljs.core.next(seq__52146__$1);
var G__52386 = null;
var G__52387 = (0);
var G__52388 = (0);
seq__52146 = G__52385;
chunk__52147 = G__52386;
count__52148 = G__52387;
i__52149 = G__52388;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__52400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52401 = cljs.core.ex_cause(t);
via = G__52400;
t = G__52401;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52172 = datafied_throwable;
var map__52172__$1 = (((((!((map__52172 == null))))?(((((map__52172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52172):map__52172);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52172__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52173 = cljs.core.last(via);
var map__52173__$1 = (((((!((map__52173 == null))))?(((((map__52173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52173):map__52173);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52173__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52173__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52174 = data;
var map__52174__$1 = (((((!((map__52174 == null))))?(((((map__52174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52174):map__52174);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52174__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52175 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52175__$1 = (((((!((map__52175 == null))))?(((((map__52175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52175):map__52175);
var top_data = map__52175__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52175__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52183 = phase;
var G__52183__$1 = (((G__52183 instanceof cljs.core.Keyword))?G__52183.fqn:null);
switch (G__52183__$1) {
case "read-source":
var map__52184 = data;
var map__52184__$1 = (((((!((map__52184 == null))))?(((((map__52184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52184):map__52184);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52184__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52184__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52186 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52186__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52186,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52186);
var G__52186__$2 = (cljs.core.truth_((function (){var fexpr__52187 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52187.cljs$core$IFn$_invoke$arity$1 ? fexpr__52187.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52187.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52186__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52186__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52186__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52189 = top_data;
var G__52189__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52189,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52189);
var G__52189__$2 = (cljs.core.truth_((function (){var fexpr__52192 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52192.cljs$core$IFn$_invoke$arity$1 ? fexpr__52192.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52192.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52189__$1);
var G__52189__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52189__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52189__$2);
var G__52189__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52189__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52189__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52189__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52189__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52197 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52197,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52197,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52197,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52197,(3),null);
var G__52200 = top_data;
var G__52200__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52200,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52200);
var G__52200__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52200__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52200__$1);
var G__52200__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52200__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52200__$2);
var G__52200__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52200__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52200__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52200__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52200__$4;
}

break;
case "execution":
var vec__52203 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52203,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52203,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52203,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52203,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__52203,source__$1,method,file,line,G__52183,G__52183__$1,map__52172,map__52172__$1,via,trace,phase,map__52173,map__52173__$1,type,message,data,map__52174,map__52174__$1,problems,fn,caller,map__52175,map__52175__$1,top_data,source){
return (function (p1__52171_SHARP_){
var or__4131__auto__ = (p1__52171_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__52207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52207.cljs$core$IFn$_invoke$arity$1 ? fexpr__52207.cljs$core$IFn$_invoke$arity$1(p1__52171_SHARP_) : fexpr__52207.call(null,p1__52171_SHARP_));
}
});})(vec__52203,source__$1,method,file,line,G__52183,G__52183__$1,map__52172,map__52172__$1,via,trace,phase,map__52173,map__52173__$1,type,message,data,map__52174,map__52174__$1,problems,fn,caller,map__52175,map__52175__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__52208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52208__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52208,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52208);
var G__52208__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52208__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52208__$1);
var G__52208__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52208__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52208__$2);
var G__52208__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52208__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52208__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52208__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52208__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52183__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52226){
var map__52228 = p__52226;
var map__52228__$1 = (((((!((map__52228 == null))))?(((((map__52228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52228):map__52228);
var triage_data = map__52228__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52243 = phase;
var G__52243__$1 = (((G__52243 instanceof cljs.core.Keyword))?G__52243.fqn:null);
switch (G__52243__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52244 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52245 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52246 = loc;
var G__52247 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52250_52486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52251_52487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52252_52488 = true;
var _STAR_print_fn_STAR__temp_val__52253_52489 = ((function (_STAR_print_newline_STAR__orig_val__52250_52486,_STAR_print_fn_STAR__orig_val__52251_52487,_STAR_print_newline_STAR__temp_val__52252_52488,sb__4661__auto__,G__52244,G__52245,G__52246,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__52250_52486,_STAR_print_fn_STAR__orig_val__52251_52487,_STAR_print_newline_STAR__temp_val__52252_52488,sb__4661__auto__,G__52244,G__52245,G__52246,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52252_52488;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52253_52489;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__52250_52486,_STAR_print_fn_STAR__orig_val__52251_52487,_STAR_print_newline_STAR__temp_val__52252_52488,_STAR_print_fn_STAR__temp_val__52253_52489,sb__4661__auto__,G__52244,G__52245,G__52246,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__52250_52486,_STAR_print_fn_STAR__orig_val__52251_52487,_STAR_print_newline_STAR__temp_val__52252_52488,_STAR_print_fn_STAR__temp_val__52253_52489,sb__4661__auto__,G__52244,G__52245,G__52246,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__52220_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52220_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__52250_52486,_STAR_print_fn_STAR__orig_val__52251_52487,_STAR_print_newline_STAR__temp_val__52252_52488,_STAR_print_fn_STAR__temp_val__52253_52489,sb__4661__auto__,G__52244,G__52245,G__52246,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__52250_52486,_STAR_print_fn_STAR__orig_val__52251_52487,_STAR_print_newline_STAR__temp_val__52252_52488,_STAR_print_fn_STAR__temp_val__52253_52489,sb__4661__auto__,G__52244,G__52245,G__52246,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52251_52487;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52250_52486;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52244,G__52245,G__52246,G__52247) : format.call(null,G__52244,G__52245,G__52246,G__52247));

break;
case "macroexpansion":
var G__52254 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52255 = cause_type;
var G__52256 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52257 = loc;
var G__52258 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52254,G__52255,G__52256,G__52257,G__52258) : format.call(null,G__52254,G__52255,G__52256,G__52257,G__52258));

break;
case "compile-syntax-check":
var G__52260 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52261 = cause_type;
var G__52262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52263 = loc;
var G__52264 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52260,G__52261,G__52262,G__52263,G__52264) : format.call(null,G__52260,G__52261,G__52262,G__52263,G__52264));

break;
case "compilation":
var G__52266 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52267 = cause_type;
var G__52268 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52269 = loc;
var G__52270 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52266,G__52267,G__52268,G__52269,G__52270) : format.call(null,G__52266,G__52267,G__52268,G__52269,G__52270));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52273 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52274 = symbol;
var G__52275 = loc;
var G__52276 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52277_52500 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52278_52501 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52279_52502 = true;
var _STAR_print_fn_STAR__temp_val__52280_52503 = ((function (_STAR_print_newline_STAR__orig_val__52277_52500,_STAR_print_fn_STAR__orig_val__52278_52501,_STAR_print_newline_STAR__temp_val__52279_52502,sb__4661__auto__,G__52273,G__52274,G__52275,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__52277_52500,_STAR_print_fn_STAR__orig_val__52278_52501,_STAR_print_newline_STAR__temp_val__52279_52502,sb__4661__auto__,G__52273,G__52274,G__52275,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52279_52502;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52280_52503;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__52277_52500,_STAR_print_fn_STAR__orig_val__52278_52501,_STAR_print_newline_STAR__temp_val__52279_52502,_STAR_print_fn_STAR__temp_val__52280_52503,sb__4661__auto__,G__52273,G__52274,G__52275,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__52277_52500,_STAR_print_fn_STAR__orig_val__52278_52501,_STAR_print_newline_STAR__temp_val__52279_52502,_STAR_print_fn_STAR__temp_val__52280_52503,sb__4661__auto__,G__52273,G__52274,G__52275,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__52221_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52221_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__52277_52500,_STAR_print_fn_STAR__orig_val__52278_52501,_STAR_print_newline_STAR__temp_val__52279_52502,_STAR_print_fn_STAR__temp_val__52280_52503,sb__4661__auto__,G__52273,G__52274,G__52275,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__52277_52500,_STAR_print_fn_STAR__orig_val__52278_52501,_STAR_print_newline_STAR__temp_val__52279_52502,_STAR_print_fn_STAR__temp_val__52280_52503,sb__4661__auto__,G__52273,G__52274,G__52275,G__52243,G__52243__$1,loc,class_name,simple_class,cause_type,format,map__52228,map__52228__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52278_52501;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52277_52500;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52273,G__52274,G__52275,G__52276) : format.call(null,G__52273,G__52274,G__52275,G__52276));
} else {
var G__52286 = "Execution error%s at %s(%s).\n%s\n";
var G__52287 = cause_type;
var G__52288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52289 = loc;
var G__52290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52286,G__52287,G__52288,G__52289,G__52290) : format.call(null,G__52286,G__52287,G__52288,G__52289,G__52290));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52243__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
