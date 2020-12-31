goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__47021_47041 = clojure.test.check.results.pass_QMARK_;
var G__47022_47042 = "_";
var G__47023_47043 = ((function (G__47021_47041,G__47022_47042){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__47021_47041,G__47022_47042))
;
goog.object.set(G__47021_47041,G__47022_47042,G__47023_47043);

var G__47024_47050 = clojure.test.check.results.result_data;
var G__47025_47051 = "_";
var G__47026_47052 = ((function (G__47024_47050,G__47025_47051){
return (function (this$){
return null;
});})(G__47024_47050,G__47025_47051))
;
goog.object.set(G__47024_47050,G__47025_47051,G__47026_47052);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__47027_47054 = clojure.test.check.results.pass_QMARK_;
var G__47028_47055 = "null";
var G__47029_47056 = ((function (G__47027_47054,G__47028_47055){
return (function (this$){
return false;
});})(G__47027_47054,G__47028_47055))
;
goog.object.set(G__47027_47054,G__47028_47055,G__47029_47056);

var G__47030_47057 = clojure.test.check.results.result_data;
var G__47031_47058 = "null";
var G__47032_47059 = ((function (G__47030_47057,G__47031_47058){
return (function (this$){
return null;
});})(G__47030_47057,G__47031_47058))
;
goog.object.set(G__47030_47057,G__47031_47058,G__47032_47059);

//# sourceMappingURL=clojure.test.check.results.js.map
