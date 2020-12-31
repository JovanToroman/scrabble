goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__42909){
var vec__42910 = p__42909;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42910,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42910,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__42913 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42913,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42913,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42913,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__42917 = arguments.length;
switch (G__42917) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__42945_43044 = clojure.data.equality_partition;
var G__42946_43045 = "null";
var G__42947_43046 = ((function (G__42945_43044,G__42946_43045){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42945_43044,G__42946_43045))
;
goog.object.set(G__42945_43044,G__42946_43045,G__42947_43046);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__42950_43051 = clojure.data.equality_partition;
var G__42951_43052 = "string";
var G__42952_43053 = ((function (G__42950_43051,G__42951_43052){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42950_43051,G__42951_43052))
;
goog.object.set(G__42950_43051,G__42951_43052,G__42952_43053);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__42955_43059 = clojure.data.equality_partition;
var G__42956_43060 = "number";
var G__42957_43061 = ((function (G__42955_43059,G__42956_43060){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42955_43059,G__42956_43060))
;
goog.object.set(G__42955_43059,G__42956_43060,G__42957_43061);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__42960_43077 = clojure.data.equality_partition;
var G__42961_43078 = "array";
var G__42962_43079 = ((function (G__42960_43077,G__42961_43078){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__42960_43077,G__42961_43078))
;
goog.object.set(G__42960_43077,G__42961_43078,G__42962_43079);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__42965_43083 = clojure.data.equality_partition;
var G__42966_43084 = "function";
var G__42967_43085 = ((function (G__42965_43083,G__42966_43084){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42965_43083,G__42966_43084))
;
goog.object.set(G__42965_43083,G__42966_43084,G__42967_43085);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__42974_43089 = clojure.data.equality_partition;
var G__42975_43090 = "boolean";
var G__42976_43091 = ((function (G__42974_43089,G__42975_43090){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__42974_43089,G__42975_43090))
;
goog.object.set(G__42974_43089,G__42975_43090,G__42976_43091);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__42980_43094 = clojure.data.equality_partition;
var G__42981_43095 = "_";
var G__42982_43096 = ((function (G__42980_43094,G__42981_43095){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__42980_43094,G__42981_43095))
;
goog.object.set(G__42980_43094,G__42981_43095,G__42982_43096);
goog.object.set(clojure.data.Diff,"null",true);

var G__42996_43108 = clojure.data.diff_similar;
var G__42997_43109 = "null";
var G__42998_43110 = ((function (G__42996_43108,G__42997_43109){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42996_43108,G__42997_43109))
;
goog.object.set(G__42996_43108,G__42997_43109,G__42998_43110);

goog.object.set(clojure.data.Diff,"string",true);

var G__42999_43113 = clojure.data.diff_similar;
var G__43000_43114 = "string";
var G__43001_43115 = ((function (G__42999_43113,G__43000_43114){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__42999_43113,G__43000_43114))
;
goog.object.set(G__42999_43113,G__43000_43114,G__43001_43115);

goog.object.set(clojure.data.Diff,"number",true);

var G__43002_43118 = clojure.data.diff_similar;
var G__43003_43119 = "number";
var G__43004_43120 = ((function (G__43002_43118,G__43003_43119){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__43002_43118,G__43003_43119))
;
goog.object.set(G__43002_43118,G__43003_43119,G__43004_43120);

goog.object.set(clojure.data.Diff,"array",true);

var G__43007_43125 = clojure.data.diff_similar;
var G__43008_43126 = "array";
var G__43009_43127 = ((function (G__43007_43125,G__43008_43126){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__43007_43125,G__43008_43126))
;
goog.object.set(G__43007_43125,G__43008_43126,G__43009_43127);

goog.object.set(clojure.data.Diff,"function",true);

var G__43011_43128 = clojure.data.diff_similar;
var G__43012_43129 = "function";
var G__43013_43130 = ((function (G__43011_43128,G__43012_43129){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__43011_43128,G__43012_43129))
;
goog.object.set(G__43011_43128,G__43012_43129,G__43013_43130);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__43014_43132 = clojure.data.diff_similar;
var G__43015_43133 = "boolean";
var G__43016_43134 = ((function (G__43014_43132,G__43015_43133){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__43014_43132,G__43015_43133))
;
goog.object.set(G__43014_43132,G__43015_43133,G__43016_43134);

goog.object.set(clojure.data.Diff,"_",true);

var G__43017_43135 = clojure.data.diff_similar;
var G__43018_43136 = "_";
var G__43019_43137 = ((function (G__43017_43135,G__43018_43136){
return (function (a,b){
var fexpr__43023 = (function (){var G__43024 = clojure.data.equality_partition(a);
var G__43024__$1 = (((G__43024 instanceof cljs.core.Keyword))?G__43024.fqn:null);
switch (G__43024__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43024__$1)].join('')));

}
})();
return (fexpr__43023.cljs$core$IFn$_invoke$arity$2 ? fexpr__43023.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__43023.call(null,a,b));
});})(G__43017_43135,G__43018_43136))
;
goog.object.set(G__43017_43135,G__43018_43136,G__43019_43137);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
