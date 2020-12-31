goog.provide('com.wsscode.pathom.parser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.trace');
goog.require('clojure.set');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
com.wsscode.pathom.parser.atom_QMARK_ = (function com$wsscode$pathom$parser$atom_QMARK_(x){
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
com.wsscode.pathom.parser.mark_meta = (function com$wsscode$pathom$parser$mark_meta(source,target){
var G__48610 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48610,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__48610;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__48613){
var vec__48614 = p__48613;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48614,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__48617){
var vec__48618 = p__48617;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48618,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48618,(1),null);
var call = vec__48618;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : com.wsscode.pathom.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : com.wsscode.pathom.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__48621 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48621,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__48621;
}
}
});
/**
 * Convert a query to its AST representation.
 */
com.wsscode.pathom.parser.query__GT_ast = (function com$wsscode$pathom$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.join__GT_ast = (function com$wsscode$pathom$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__48622 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48622,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__48625){
var vec__48626 = p__48625;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(1),null);
var ref = vec__48626;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.parser.expr__GT_ast = (function com$wsscode$pathom$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return com.wsscode.pathom.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return com.wsscode.pathom.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return com.wsscode.pathom.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return com.wsscode.pathom.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
com.wsscode.pathom.parser.wrap_expr = (function com$wsscode$pathom$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__48630 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__48630,null,(1),null));
} else {
return G__48630;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
com.wsscode.pathom.parser.parameterize = (function com$wsscode$pathom$parser$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_(params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
com.wsscode.pathom.parser.ast__GT_expr = (function com$wsscode$pathom$parser$ast__GT_expr(var_args){
var G__48635 = arguments.length;
switch (G__48635) {
case 1:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__48636,unparse_QMARK_){
var map__48637 = p__48636;
var map__48637__$1 = (((((!((map__48637 == null))))?(((((map__48637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48637):map__48637);
var ast = map__48637__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__48639 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__48637,map__48637__$1,ast,ast_meta,type,component){
return (function (p1__48631_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__48631_SHARP_,unparse_QMARK_);
});})(map__48637,map__48637__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__48639,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__48639;
}
} else {
var map__48640 = ast;
var map__48640__$1 = (((((!((map__48640 == null))))?(((((map__48640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48640):map__48640);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.wsscode.pathom.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__4120__auto__;
}
})())?(function (){var expr = com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return com.wsscode.pathom.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?com.wsscode.pathom.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__4120__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))){
var map__48642 = ast;
var map__48642__$1 = (((((!((map__48642 == null))))?(((((map__48642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48642):map__48642);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__48644 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__48644,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__48644;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__48642,map__48642__$1,children,query_meta,key__$1,map__48640,map__48640__$1,key,query,query_root,params,map__48637,map__48637__$1,ast,ast_meta,type,component){
return (function (p__48645){
var map__48646 = p__48645;
var map__48646__$1 = (((((!((map__48646 == null))))?(((((map__48646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48646):map__48646);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48646__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48646__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__48648 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__48646,map__48646__$1,union_key,children__$1,component__$1,map__48642,map__48642__$1,children,query_meta,key__$1,map__48640,map__48640__$1,key,query,query_root,params,map__48637,map__48637__$1,ast,ast_meta,type,component){
return (function (p1__48632_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__48632_SHARP_,unparse_QMARK_);
});})(map__48646,map__48646__$1,union_key,children__$1,component__$1,map__48642,map__48642__$1,children,query_meta,key__$1,map__48640,map__48640__$1,key,query,query_root,params,map__48637,map__48637__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__48648,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__48648;
}
})()], null);
});})(map__48642,map__48642__$1,children,query_meta,key__$1,map__48640,map__48640__$1,key,query,query_root,params,map__48637,map__48637__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__48649 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__48642,map__48642__$1,children,query_meta,key__$1,map__48640,map__48640__$1,key,query,query_root,params,map__48637,map__48637__$1,ast,ast_meta,type,component){
return (function (p1__48633_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__48633_SHARP_,unparse_QMARK_);
});})(map__48642,map__48642__$1,children,query_meta,key__$1,map__48640,map__48640__$1,key,query,query_root,params,map__48637,map__48637__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__48649,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__48649;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.parser.focus_subquery_union_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48650_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__48650_SHARP_),p1__48650_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__48651){
var map__48652 = p__48651;
var map__48652__$1 = (((((!((map__48652 == null))))?(((((map__48652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48652):map__48652);
var union_entry = map__48652__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48652__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5733__auto__)){
var sub = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
});})(s_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
com.wsscode.pathom.parser.focus_subquery_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__48654){
var map__48655 = p__48654;
var map__48655__$1 = (((((!((map__48655 == null))))?(((((map__48655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48655):map__48655);
var focus = map__48655__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48655__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48655__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5733__auto__)){
var source = temp__5733__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5733__auto__,map__48655,map__48655__$1,focus,key,type,q_index){
return (function (children__$1,source__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source__$1,focus) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,source__$1,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,com.wsscode.pathom.parser.focus_subquery_union_STAR_(source__$1,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,source__$1);

}
}
});})(source,temp__5733__auto__,map__48655,map__48655__$1,focus,key,type,q_index))
,children,source);
} else {
return children;
}
});})(q_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
com.wsscode.pathom.parser.focus_subquery = (function com$wsscode$pathom$parser$focus_subquery(query,sub_query){
var query_ast = com.wsscode.pathom.parser.query__GT_ast(query);
var sub_ast = com.wsscode.pathom.parser.query__GT_ast(sub_query);
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.parser.focus_subquery_STAR_(query_ast,sub_ast),true);
});
com.wsscode.pathom.parser.normalize_atom = (function com$wsscode$pathom$parser$normalize_atom(x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.parser.ast__GT_out_key = (function com$wsscode$pathom$parser$ast__GT_out_key(ast){
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"key","key",-1516042587));
}
});
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__48659){
var map__48660 = p__48659;
var map__48660__$1 = (((((!((map__48660 == null))))?(((((map__48660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48660):map__48660);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__48660,map__48660__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__8599__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__8600__auto__ = (function (){var map__48662 = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.parser.query__GT_ast(tx);
}
})();
var map__48662__$1 = (((((!((map__48662 == null))))?(((((map__48662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48662):map__48662);
var tx_ast = map__48662__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__48669 = children;
var vec__48670 = G__48669;
var seq__48671 = cljs.core.seq(vec__48670);
var first__48672 = cljs.core.first(seq__48671);
var seq__48671__$1 = cljs.core.next(seq__48671);
var map__48673 = first__48672;
var map__48673__$1 = (((((!((map__48673 == null))))?(((((map__48673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48673):map__48673);
var ast = map__48673__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__48671__$1;
var res__$1 = res;
var G__48669__$1 = G__48669;
while(true){
var res__$2 = res__$1;
var vec__48687 = G__48669__$1;
var seq__48688 = cljs.core.seq(vec__48687);
var first__48689 = cljs.core.first(seq__48688);
var seq__48688__$1 = cljs.core.next(seq__48688);
var map__48690 = first__48689;
var map__48690__$1 = (((((!((map__48690 == null))))?(((((map__48690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48690):map__48690);
var ast__$1 = map__48690__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__48688__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var query__$2 = (function (){var G__48692 = query__$1;
if(cljs.core.vector_QMARK_(query__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__48692,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
} else {
return G__48692;
}
})();
var env__$2 = (function (){var G__48693 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$2], null)], 0));
var G__48693__$1 = (((query__$2 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48693,new cljs.core.Keyword(null,"query","query",-1288509510)):G__48693);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48693__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__48693__$1;
}
})();
var value = (function (){var G__48694 = type__$1;
var G__48694__$1 = (((G__48694 instanceof cljs.core.Keyword))?G__48694.fqn:null);
switch (G__48694__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__48695 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__48695__$1 = (((((!((map__48695 == null))))?(((((map__48695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48695):map__48695);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48695__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__50544 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__50545 = tail__$1;
res__$1 = G__50544;
G__48669__$1 = G__50545;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__8599__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__8600__auto__;
} else {
var map__48697 = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.parser.query__GT_ast(tx);
}
})();
var map__48697__$1 = (((((!((map__48697 == null))))?(((((map__48697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48697):map__48697);
var tx_ast = map__48697__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__48703 = children;
var vec__48704 = G__48703;
var seq__48705 = cljs.core.seq(vec__48704);
var first__48706 = cljs.core.first(seq__48705);
var seq__48705__$1 = cljs.core.next(seq__48705);
var map__48707 = first__48706;
var map__48707__$1 = (((((!((map__48707 == null))))?(((((map__48707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48707):map__48707);
var ast = map__48707__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48707__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__48705__$1;
var res__$1 = res;
var G__48703__$1 = G__48703;
while(true){
var res__$2 = res__$1;
var vec__48719 = G__48703__$1;
var seq__48720 = cljs.core.seq(vec__48719);
var first__48721 = cljs.core.first(seq__48720);
var seq__48720__$1 = cljs.core.next(seq__48720);
var map__48722 = first__48721;
var map__48722__$1 = (((((!((map__48722 == null))))?(((((map__48722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48722):map__48722);
var ast__$1 = map__48722__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48722__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48722__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48722__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48722__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__48720__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var query__$2 = (function (){var G__48724 = query__$1;
if(cljs.core.vector_QMARK_(query__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__48724,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
} else {
return G__48724;
}
})();
var env__$2 = (function (){var G__48725 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$2], null)], 0));
var G__48725__$1 = (((query__$2 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48725,new cljs.core.Keyword(null,"query","query",-1288509510)):G__48725);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48725__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__48725__$1;
}
})();
var value = (function (){var G__48726 = type__$1;
var G__48726__$1 = (((G__48726 instanceof cljs.core.Keyword))?G__48726.fqn:null);
switch (G__48726__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__48727 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__48727__$1 = (((((!((map__48727 == null))))?(((((map__48727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48727):map__48727);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__50576 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__50577 = tail__$1;
res__$1 = G__50576;
G__48703__$1 = G__50577;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__48660,map__48660__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__48729){
var map__48730 = p__48729;
var map__48730__$1 = (((((!((map__48730 == null))))?(((((map__48730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48730):map__48730);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48730__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48730__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__48730,map__48730__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,map__48730,map__48730__$1,read,mutate){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,map__48730,map__48730__$1,read,mutate){
return (function (state_49150){
var state_val_49151 = (state_49150[(1)]);
if((state_val_49151 === (121))){
var inst_49048 = (state_49150[(7)]);
var inst_49079 = (state_49150[(2)]);
var state_49150__$1 = (function (){var statearr_49152 = state_49150;
(statearr_49152[(8)] = inst_49079);

return statearr_49152;
})();
var G__49153_50583 = inst_49048;
var G__49153_50584__$1 = (((G__49153_50583 instanceof cljs.core.Keyword))?G__49153_50583.fqn:null);
switch (G__49153_50584__$1) {
case "call":
var statearr_49154_50587 = state_49150__$1;
(statearr_49154_50587[(1)] = (123));


break;
case "prop":
case "join":
case "union":
var statearr_49155_50591 = state_49150__$1;
(statearr_49155_50591[(1)] = (139));


break;
default:
var statearr_49156_50592 = state_49150__$1;
(statearr_49156_50592[(1)] = (143));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (65))){
var inst_48906 = (state_49150[(9)]);
var inst_48905 = (state_49150[(2)]);
var inst_48906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48905,new cljs.core.Keyword(null,"action","action",-811238024));
var state_49150__$1 = (function (){var statearr_49157 = state_49150;
(statearr_49157[(9)] = inst_48906__$1);

return statearr_49157;
})();
if(cljs.core.truth_(inst_48906__$1)){
var statearr_49158_50593 = state_49150__$1;
(statearr_49158_50593[(1)] = (66));

} else {
var statearr_49159_50594 = state_49150__$1;
(statearr_49159_50594[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (70))){
var state_49150__$1 = state_49150;
var statearr_49160_50596 = state_49150__$1;
(statearr_49160_50596[(2)] = null);

(statearr_49160_50596[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (62))){
var inst_48897 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49161_50597 = state_49150__$1;
(statearr_49161_50597[(2)] = inst_48897);

(statearr_49161_50597[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (74))){
var inst_48924 = (state_49150[(10)]);
var state_49150__$1 = state_49150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49150__$1,(77),inst_48924);
} else {
if((state_val_49151 === (110))){
var inst_49046 = (state_49150[(11)]);
var inst_49047 = (state_49150[(12)]);
var inst_48976 = (state_49150[(13)]);
var inst_49051 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49052 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_49047];
var inst_49053 = cljs.core.PersistentHashMap.fromArrays(inst_49051,inst_49052);
var inst_49054 = com.wsscode.pathom.trace.trace(inst_48976,inst_49053);
var inst_49056 = cljs.core.vector_QMARK_(inst_49046);
var state_49150__$1 = (function (){var statearr_49162 = state_49150;
(statearr_49162[(14)] = inst_49054);

return statearr_49162;
})();
if(inst_49056){
var statearr_49163_50601 = state_49150__$1;
(statearr_49163_50601[(1)] = (113));

} else {
var statearr_49164_50602 = state_49150__$1;
(statearr_49164_50602[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (130))){
var state_49150__$1 = state_49150;
var statearr_49165_50603 = state_49150__$1;
(statearr_49165_50603[(2)] = true);

(statearr_49165_50603[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (128))){
var state_49150__$1 = state_49150;
var statearr_49166_50604 = state_49150__$1;
(statearr_49166_50604[(2)] = false);

(statearr_49166_50604[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (7))){
var inst_49146 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49167_50605 = state_49150__$1;
(statearr_49167_50605[(2)] = inst_49146);


cljs.core.async.impl.ioc_helpers.process_exception(state_49150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (59))){
var inst_48900 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48900)){
var statearr_49168_50606 = state_49150__$1;
(statearr_49168_50606[(1)] = (63));

} else {
var statearr_49169_50607 = state_49150__$1;
(statearr_49169_50607[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (86))){
var inst_48965 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49170_50608 = state_49150__$1;
(statearr_49170_50608[(2)] = inst_48965);

(statearr_49170_50608[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (20))){
var inst_48784 = (state_49150[(15)]);
var inst_48790 = inst_48784.cljs$lang$protocol_mask$partition0$;
var inst_48791 = (inst_48790 & (64));
var inst_48792 = inst_48784.cljs$core$ISeq$;
var inst_48793 = (cljs.core.PROTOCOL_SENTINEL === inst_48792);
var inst_48794 = ((inst_48791) || (inst_48793));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48794)){
var statearr_49171_50611 = state_49150__$1;
(statearr_49171_50611[(1)] = (23));

} else {
var statearr_49172_50612 = state_49150__$1;
(statearr_49172_50612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (72))){
var inst_48875 = (state_49150[(16)]);
var inst_48919 = (state_49150[(2)]);
var inst_48920 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_48875) : read.call(null,inst_48875));
var state_49150__$1 = (function (){var statearr_49173 = state_49150;
(statearr_49173[(17)] = inst_48919);

return statearr_49173;
})();
var statearr_49174_50615 = state_49150__$1;
(statearr_49174_50615[(2)] = inst_48920);

(statearr_49174_50615[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (58))){
var state_49150__$1 = state_49150;
var statearr_49175_50617 = state_49150__$1;
(statearr_49175_50617[(2)] = false);

(statearr_49175_50617[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (60))){
var state_49150__$1 = state_49150;
var statearr_49176_50620 = state_49150__$1;
(statearr_49176_50620[(2)] = true);

(statearr_49176_50620[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (27))){
var inst_48784 = (state_49150[(15)]);
var state_49150__$1 = state_49150;
var statearr_49177_50625 = state_49150__$1;
(statearr_49177_50625[(2)] = inst_48784);

(statearr_49177_50625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (1))){
var state_49150__$1 = state_49150;
var statearr_49178_50639 = state_49150__$1;
(statearr_49178_50639[(2)] = null);

(statearr_49178_50639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (69))){
var state_49150__$1 = state_49150;
if(cljs.core.truth_(read)){
var statearr_49179_50641 = state_49150__$1;
(statearr_49179_50641[(1)] = (70));

} else {
var statearr_49180_50642 = state_49150__$1;
(statearr_49180_50642[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (101))){
var inst_49023 = (state_49150[(18)]);
var inst_49029 = inst_49023.cljs$lang$protocol_mask$partition0$;
var inst_49030 = (inst_49029 & (64));
var inst_49031 = inst_49023.cljs$core$ISeq$;
var inst_49032 = (cljs.core.PROTOCOL_SENTINEL === inst_49031);
var inst_49033 = ((inst_49030) || (inst_49032));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_49033)){
var statearr_49181_50645 = state_49150__$1;
(statearr_49181_50645[(1)] = (104));

} else {
var statearr_49182_50646 = state_49150__$1;
(statearr_49182_50646[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (24))){
var state_49150__$1 = state_49150;
var statearr_49183_50648 = state_49150__$1;
(statearr_49183_50648[(2)] = false);

(statearr_49183_50648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (102))){
var state_49150__$1 = state_49150;
var statearr_49184_50651 = state_49150__$1;
(statearr_49184_50651[(2)] = false);

(statearr_49184_50651[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (135))){
var inst_49110 = (state_49150[(19)]);
var inst_49109 = (state_49150[(2)]);
var inst_49110__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49109,new cljs.core.Keyword(null,"action","action",-811238024));
var state_49150__$1 = (function (){var statearr_49185 = state_49150;
(statearr_49185[(19)] = inst_49110__$1);

return statearr_49185;
})();
if(cljs.core.truth_(inst_49110__$1)){
var statearr_49186_50655 = state_49150__$1;
(statearr_49186_50655[(1)] = (136));

} else {
var statearr_49187_50657 = state_49150__$1;
(statearr_49187_50657[(1)] = (137));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (55))){
var inst_48878 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_48879 = (new Error(inst_48878));
var inst_48880 = (function(){throw inst_48879})();
var state_49150__$1 = state_49150;
var statearr_49188_50660 = state_49150__$1;
(statearr_49188_50660[(2)] = inst_48880);

(statearr_49188_50660[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (85))){
var state_49150__$1 = state_49150;
var statearr_49189_50662 = state_49150__$1;
(statearr_49189_50662[(2)] = false);

(statearr_49189_50662[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (39))){
var inst_48841 = (state_49150[(20)]);
var inst_48841__$1 = (state_49150[(2)]);
var inst_48842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48841__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_48843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48841__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_48844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_48845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48841__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_49150__$1 = (function (){var statearr_49190 = state_49150;
(statearr_49190[(21)] = inst_48844);

(statearr_49190[(22)] = inst_48842);

(statearr_49190[(23)] = inst_48843);

(statearr_49190[(20)] = inst_48841__$1);

(statearr_49190[(24)] = inst_48845);

return statearr_49190;
})();
if(cljs.core.truth_(inst_48841__$1)){
var statearr_49191_50663 = state_49150__$1;
(statearr_49191_50663[(1)] = (40));

} else {
var statearr_49192_50664 = state_49150__$1;
(statearr_49192_50664[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (88))){
var inst_48952 = (state_49150[(25)]);
var state_49150__$1 = state_49150;
var statearr_49193_50665 = state_49150__$1;
(statearr_49193_50665[(2)] = inst_48952);

(statearr_49193_50665[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (46))){
var inst_48862 = (state_49150[(26)]);
var inst_48865 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_48862,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_49150__$1 = state_49150;
var statearr_49194_50666 = state_49150__$1;
(statearr_49194_50666[(2)] = inst_48865);

(statearr_49194_50666[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49150,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48736)){
var statearr_49195_50668 = state_49150__$1;
(statearr_49195_50668[(1)] = (5));

} else {
var statearr_49196_50669 = state_49150__$1;
(statearr_49196_50669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (77))){
var inst_48928 = (state_49150[(2)]);
var inst_48929 = com.wsscode.common.async_cljs.throw_err(inst_48928);
var state_49150__$1 = state_49150;
var statearr_49197_50670 = state_49150__$1;
(statearr_49197_50670[(2)] = inst_48929);

(statearr_49197_50670[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (106))){
var inst_49037 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49198_50671 = state_49150__$1;
(statearr_49198_50671[(2)] = inst_49037);

(statearr_49198_50671[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (119))){
var inst_48975 = (state_49150[(27)]);
var inst_49072 = (state_49150[(28)]);
var inst_49076 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49072,new cljs.core.Keyword(null,"query","query",-1288509510),inst_48975);
var state_49150__$1 = state_49150;
var statearr_49199_50674 = state_49150__$1;
(statearr_49199_50674[(2)] = inst_49076);

(statearr_49199_50674[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (95))){
var inst_49002 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49200_50675 = state_49150__$1;
(statearr_49200_50675[(2)] = inst_49002);

(statearr_49200_50675[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (144))){
var inst_49128 = (state_49150[(29)]);
var state_49150__$1 = state_49150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49150__$1,(147),inst_49128);
} else {
if((state_val_49151 === (54))){
var state_49150__$1 = state_49150;
var statearr_49201_50676 = state_49150__$1;
(statearr_49201_50676[(2)] = null);

(statearr_49201_50676[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (92))){
var inst_49005 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_49005)){
var statearr_49202_50681 = state_49150__$1;
(statearr_49202_50681[(1)] = (96));

} else {
var statearr_49203_50687 = state_49150__$1;
(statearr_49203_50687[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (141))){
var inst_49119 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_49120 = (new Error(inst_49119));
var inst_49121 = (function(){throw inst_49120})();
var state_49150__$1 = state_49150;
var statearr_49204_50692 = state_49150__$1;
(statearr_49204_50692[(2)] = inst_49121);

(statearr_49204_50692[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (137))){
var state_49150__$1 = state_49150;
var statearr_49205_50694 = state_49150__$1;
(statearr_49205_50694[(2)] = null);

(statearr_49205_50694[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (104))){
var state_49150__$1 = state_49150;
var statearr_49206_50695 = state_49150__$1;
(statearr_49206_50695[(2)] = true);

(statearr_49206_50695[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (15))){
var state_49150__$1 = state_49150;
var statearr_49207_50697 = state_49150__$1;
(statearr_49207_50697[(2)] = false);

(statearr_49207_50697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (48))){
var inst_48857 = (state_49150[(30)]);
var inst_48868 = (state_49150[(2)]);
var inst_48869 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_48870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48869,inst_48857);
var state_49150__$1 = (function (){var statearr_49208 = state_49150;
(statearr_49208[(31)] = inst_48868);

return statearr_49208;
})();
if(inst_48870){
var statearr_49209_50699 = state_49150__$1;
(statearr_49209_50699[(1)] = (49));

} else {
var statearr_49210_50700 = state_49150__$1;
(statearr_49210_50700[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (50))){
var inst_48868 = (state_49150[(31)]);
var state_49150__$1 = state_49150;
var statearr_49211_50703 = state_49150__$1;
(statearr_49211_50703[(2)] = inst_48868);

(statearr_49211_50703[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (116))){
var inst_49066 = (state_49150[(32)]);
var inst_49069 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_49066,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_49150__$1 = state_49150;
var statearr_49212_50705 = state_49150__$1;
(statearr_49212_50705[(2)] = inst_49069);

(statearr_49212_50705[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (75))){
var inst_48924 = (state_49150[(10)]);
var state_49150__$1 = state_49150;
var statearr_49213_50707 = state_49150__$1;
(statearr_49213_50707[(2)] = inst_48924);

(statearr_49213_50707[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (99))){
var inst_49023 = (state_49150[(18)]);
var inst_49016 = (state_49150[(33)]);
var inst_49022 = cljs.core.seq(inst_49016);
var inst_49023__$1 = cljs.core.first(inst_49022);
var inst_49024 = cljs.core.next(inst_49022);
var inst_49026 = (inst_49023__$1 == null);
var inst_49027 = cljs.core.not(inst_49026);
var state_49150__$1 = (function (){var statearr_49214 = state_49150;
(statearr_49214[(34)] = inst_49024);

(statearr_49214[(18)] = inst_49023__$1);

return statearr_49214;
})();
if(inst_49027){
var statearr_49215_50724 = state_49150__$1;
(statearr_49215_50724[(1)] = (101));

} else {
var statearr_49216_50730 = state_49150__$1;
(statearr_49216_50730[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (21))){
var state_49150__$1 = state_49150;
var statearr_49217_50731 = state_49150__$1;
(statearr_49217_50731[(2)] = false);

(statearr_49217_50731[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (31))){
var inst_48819 = (state_49150[(35)]);
var inst_48825 = inst_48819.cljs$lang$protocol_mask$partition0$;
var inst_48826 = (inst_48825 & (64));
var inst_48827 = inst_48819.cljs$core$ISeq$;
var inst_48828 = (cljs.core.PROTOCOL_SENTINEL === inst_48827);
var inst_48829 = ((inst_48826) || (inst_48828));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48829)){
var statearr_49218_50733 = state_49150__$1;
(statearr_49218_50733[(1)] = (34));

} else {
var statearr_49219_50734 = state_49150__$1;
(statearr_49219_50734[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (113))){
var inst_49046 = (state_49150[(11)]);
var inst_48973 = (state_49150[(36)]);
var inst_49058 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(inst_49046,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_48973);
var state_49150__$1 = state_49150;
var statearr_49220_50736 = state_49150__$1;
(statearr_49220_50736[(2)] = inst_49058);

(statearr_49220_50736[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (32))){
var state_49150__$1 = state_49150;
var statearr_49221_50737 = state_49150__$1;
(statearr_49221_50737[(2)] = false);

(statearr_49221_50737[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (136))){
var inst_49110 = (state_49150[(19)]);
var inst_49112 = (inst_49110.cljs$core$IFn$_invoke$arity$0 ? inst_49110.cljs$core$IFn$_invoke$arity$0() : inst_49110.call(null));
var state_49150__$1 = state_49150;
var statearr_49222_50741 = state_49150__$1;
(statearr_49222_50741[(2)] = inst_49112);

(statearr_49222_50741[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (139))){
var state_49150__$1 = state_49150;
if(cljs.core.truth_(read)){
var statearr_49223_50743 = state_49150__$1;
(statearr_49223_50743[(1)] = (140));

} else {
var statearr_49224_50745 = state_49150__$1;
(statearr_49224_50745[(1)] = (141));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (40))){
var inst_48772 = (state_49150[(37)]);
var inst_48842 = (state_49150[(22)]);
var inst_48843 = (state_49150[(23)]);
var inst_48847 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_48848 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_48843];
var inst_48849 = cljs.core.PersistentHashMap.fromArrays(inst_48847,inst_48848);
var inst_48850 = com.wsscode.pathom.trace.trace(inst_48772,inst_48849);
var inst_48852 = cljs.core.vector_QMARK_(inst_48842);
var state_49150__$1 = (function (){var statearr_49225 = state_49150;
(statearr_49225[(38)] = inst_48850);

return statearr_49225;
})();
if(inst_48852){
var statearr_49226_50750 = state_49150__$1;
(statearr_49226_50750[(1)] = (43));

} else {
var statearr_49227_50751 = state_49150__$1;
(statearr_49227_50751[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (129))){
var inst_49104 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_49104)){
var statearr_49228_50752 = state_49150__$1;
(statearr_49228_50752[(1)] = (133));

} else {
var statearr_49229_50754 = state_49150__$1;
(statearr_49229_50754[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (91))){
var state_49150__$1 = state_49150;
var statearr_49230_50755 = state_49150__$1;
(statearr_49230_50755[(2)] = false);

(statearr_49230_50755[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (117))){
var inst_49066 = (state_49150[(32)]);
var state_49150__$1 = state_49150;
var statearr_49231_50757 = state_49150__$1;
(statearr_49231_50757[(2)] = inst_49066);

(statearr_49231_50757[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (108))){
var inst_49023 = (state_49150[(18)]);
var state_49150__$1 = state_49150;
var statearr_49232_50758 = state_49150__$1;
(statearr_49232_50758[(2)] = inst_49023);

(statearr_49232_50758[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (56))){
var inst_48884 = (state_49150[(39)]);
var inst_48843 = (state_49150[(23)]);
var inst_48845 = (state_49150[(24)]);
var inst_48875 = (state_49150[(16)]);
var inst_48882 = (state_49150[(2)]);
var inst_48884__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_48875,inst_48843,inst_48845) : mutate.call(null,inst_48875,inst_48843,inst_48845));
var inst_48886 = (inst_48884__$1 == null);
var inst_48887 = cljs.core.not(inst_48886);
var state_49150__$1 = (function (){var statearr_49233 = state_49150;
(statearr_49233[(39)] = inst_48884__$1);

(statearr_49233[(40)] = inst_48882);

return statearr_49233;
})();
if(inst_48887){
var statearr_49234_50759 = state_49150__$1;
(statearr_49234_50759[(1)] = (57));

} else {
var statearr_49235_50760 = state_49150__$1;
(statearr_49235_50760[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (33))){
var inst_48836 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48836)){
var statearr_49236_50762 = state_49150__$1;
(statearr_49236_50762[(1)] = (37));

} else {
var statearr_49237_50765 = state_49150__$1;
(statearr_49237_50765[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (13))){
var inst_48764 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48764)){
var statearr_49238_50766 = state_49150__$1;
(statearr_49238_50766[(1)] = (17));

} else {
var statearr_49239_50767 = state_49150__$1;
(statearr_49239_50767[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (22))){
var inst_48801 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48801)){
var statearr_49240_50776 = state_49150__$1;
(statearr_49240_50776[(1)] = (26));

} else {
var statearr_49241_50783 = state_49150__$1;
(statearr_49241_50783[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (90))){
var inst_48988 = (state_49150[(41)]);
var inst_48994 = inst_48988.cljs$lang$protocol_mask$partition0$;
var inst_48995 = (inst_48994 & (64));
var inst_48996 = inst_48988.cljs$core$ISeq$;
var inst_48997 = (cljs.core.PROTOCOL_SENTINEL === inst_48996);
var inst_48998 = ((inst_48995) || (inst_48997));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48998)){
var statearr_49242_50799 = state_49150__$1;
(statearr_49242_50799[(1)] = (93));

} else {
var statearr_49243_50800 = state_49150__$1;
(statearr_49243_50800[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (109))){
var inst_49045 = (state_49150[(42)]);
var inst_49045__$1 = (state_49150[(2)]);
var inst_49046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49045__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_49047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49045__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_49048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49045__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_49049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49045__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_49150__$1 = (function (){var statearr_49244 = state_49150;
(statearr_49244[(11)] = inst_49046);

(statearr_49244[(12)] = inst_49047);

(statearr_49244[(42)] = inst_49045__$1);

(statearr_49244[(43)] = inst_49049);

(statearr_49244[(7)] = inst_49048);

return statearr_49244;
})();
if(cljs.core.truth_(inst_49045__$1)){
var statearr_49245_50803 = state_49150__$1;
(statearr_49245_50803[(1)] = (110));

} else {
var statearr_49246_50804 = state_49150__$1;
(statearr_49246_50804[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (143))){
var state_49150__$1 = state_49150;
var statearr_49247_50805 = state_49150__$1;
(statearr_49247_50805[(2)] = null);

(statearr_49247_50805[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (36))){
var inst_48833 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49248_50807 = state_49150__$1;
(statearr_49248_50807[(2)] = inst_48833);

(statearr_49248_50807[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (41))){
var inst_48811 = (state_49150[(44)]);
var state_49150__$1 = state_49150;
var statearr_49249_50810 = state_49150__$1;
(statearr_49249_50810[(2)] = inst_48811);

(statearr_49249_50810[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (118))){
var inst_49061 = (state_49150[(45)]);
var inst_49072 = (state_49150[(2)]);
var inst_49073 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_49074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49073,inst_49061);
var state_49150__$1 = (function (){var statearr_49250 = state_49150;
(statearr_49250[(28)] = inst_49072);

return statearr_49250;
})();
if(inst_49074){
var statearr_49251_50813 = state_49150__$1;
(statearr_49251_50813[(1)] = (119));

} else {
var statearr_49252_50815 = state_49150__$1;
(statearr_49252_50815[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (89))){
var inst_48974 = (state_49150[(46)]);
var inst_48988 = (state_49150[(41)]);
var inst_48973 = (state_49150[(36)]);
var inst_48973__$1 = (state_49150[(2)]);
var inst_48974__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_48975 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_48973__$1);
var inst_48976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_48986 = cljs.core.PersistentHashMap.EMPTY;
var inst_48987 = cljs.core.seq(inst_48974__$1);
var inst_48988__$1 = cljs.core.first(inst_48987);
var inst_48989 = cljs.core.next(inst_48987);
var inst_48991 = (inst_48988__$1 == null);
var inst_48992 = cljs.core.not(inst_48991);
var state_49150__$1 = (function (){var statearr_49253 = state_49150;
(statearr_49253[(27)] = inst_48975);

(statearr_49253[(46)] = inst_48974__$1);

(statearr_49253[(47)] = inst_48989);

(statearr_49253[(13)] = inst_48976);

(statearr_49253[(48)] = inst_48986);

(statearr_49253[(41)] = inst_48988__$1);

(statearr_49253[(36)] = inst_48973__$1);

return statearr_49253;
})();
if(inst_48992){
var statearr_49254_50821 = state_49150__$1;
(statearr_49254_50821[(1)] = (90));

} else {
var statearr_49255_50822 = state_49150__$1;
(statearr_49255_50822[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (100))){
var inst_49144 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49256_50823 = state_49150__$1;
(statearr_49256_50823[(2)] = inst_49144);

(statearr_49256_50823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (131))){
var state_49150__$1 = state_49150;
var statearr_49257_50824 = state_49150__$1;
(statearr_49257_50824[(2)] = false);

(statearr_49257_50824[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (122))){
var inst_49128 = (state_49150[(29)]);
var inst_49128__$1 = (state_49150[(2)]);
var inst_49129 = com.wsscode.common.async_cljs.chan_QMARK_(inst_49128__$1);
var state_49150__$1 = (function (){var statearr_49258 = state_49150;
(statearr_49258[(29)] = inst_49128__$1);

return statearr_49258;
})();
if(inst_49129){
var statearr_49259_50825 = state_49150__$1;
(statearr_49259_50825[(1)] = (144));

} else {
var statearr_49260_50826 = state_49150__$1;
(statearr_49260_50826[(1)] = (145));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (43))){
var inst_48769 = (state_49150[(49)]);
var inst_48842 = (state_49150[(22)]);
var inst_48854 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(inst_48842,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_48769);
var state_49150__$1 = state_49150;
var statearr_49261_50827 = state_49150__$1;
(statearr_49261_50827[(2)] = inst_48854);

(statearr_49261_50827[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (61))){
var state_49150__$1 = state_49150;
var statearr_49262_50828 = state_49150__$1;
(statearr_49262_50828[(2)] = false);

(statearr_49262_50828[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (29))){
var inst_48819 = (state_49150[(35)]);
var inst_48812 = (state_49150[(50)]);
var inst_48818 = cljs.core.seq(inst_48812);
var inst_48819__$1 = cljs.core.first(inst_48818);
var inst_48820 = cljs.core.next(inst_48818);
var inst_48822 = (inst_48819__$1 == null);
var inst_48823 = cljs.core.not(inst_48822);
var state_49150__$1 = (function (){var statearr_49263 = state_49150;
(statearr_49263[(35)] = inst_48819__$1);

(statearr_49263[(51)] = inst_48820);

return statearr_49263;
})();
if(inst_48823){
var statearr_49264_50830 = state_49150__$1;
(statearr_49264_50830[(1)] = (31));

} else {
var statearr_49265_50831 = state_49150__$1;
(statearr_49265_50831[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (44))){
var inst_48842 = (state_49150[(22)]);
var state_49150__$1 = state_49150;
var statearr_49266_50832 = state_49150__$1;
(statearr_49266_50832[(2)] = inst_48842);

(statearr_49266_50832[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (93))){
var state_49150__$1 = state_49150;
var statearr_49267_50833 = state_49150__$1;
(statearr_49267_50833[(2)] = true);

(statearr_49267_50833[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (6))){
var inst_48947 = (state_49150[(52)]);
var inst_48947__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
var state_49150__$1 = (function (){var statearr_49268 = state_49150;
(statearr_49268[(52)] = inst_48947__$1);

return statearr_49268;
})();
if(cljs.core.truth_(inst_48947__$1)){
var statearr_49269_50834 = state_49150__$1;
(statearr_49269_50834[(1)] = (78));

} else {
var statearr_49270_50837 = state_49150__$1;
(statearr_49270_50837[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (111))){
var inst_49015 = (state_49150[(53)]);
var state_49150__$1 = state_49150;
var statearr_49271_50847 = state_49150__$1;
(statearr_49271_50847[(2)] = inst_49015);

(statearr_49271_50847[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (28))){
var inst_48782 = (state_49150[(54)]);
var inst_48770 = (state_49150[(55)]);
var inst_48806 = (state_49150[(2)]);
var inst_48807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48806,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_48808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48806,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_48809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48806,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_48810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48806,new cljs.core.Keyword(null,"params","params",710516235));
var inst_48811 = inst_48782;
var inst_48812 = inst_48770;
var state_49150__$1 = (function (){var statearr_49272 = state_49150;
(statearr_49272[(56)] = inst_48810);

(statearr_49272[(50)] = inst_48812);

(statearr_49272[(44)] = inst_48811);

(statearr_49272[(57)] = inst_48809);

(statearr_49272[(58)] = inst_48808);

(statearr_49272[(59)] = inst_48807);

return statearr_49272;
})();
var statearr_49273_50851 = state_49150__$1;
(statearr_49273_50851[(2)] = null);

(statearr_49273_50851[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (134))){
var inst_49088 = (state_49150[(60)]);
var state_49150__$1 = state_49150;
var statearr_49274_50853 = state_49150__$1;
(statearr_49274_50853[(2)] = inst_49088);

(statearr_49274_50853[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (64))){
var inst_48884 = (state_49150[(39)]);
var state_49150__$1 = state_49150;
var statearr_49275_50855 = state_49150__$1;
(statearr_49275_50855[(2)] = inst_48884);

(statearr_49275_50855[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (103))){
var inst_49040 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_49040)){
var statearr_49276_50856 = state_49150__$1;
(statearr_49276_50856[(1)] = (107));

} else {
var statearr_49277_50858 = state_49150__$1;
(statearr_49277_50858[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (51))){
var inst_48844 = (state_49150[(21)]);
var inst_48875 = (state_49150[(2)]);
var state_49150__$1 = (function (){var statearr_49278 = state_49150;
(statearr_49278[(16)] = inst_48875);

return statearr_49278;
})();
var G__49279_50861 = inst_48844;
var G__49279_50862__$1 = (((G__49279_50861 instanceof cljs.core.Keyword))?G__49279_50861.fqn:null);
switch (G__49279_50862__$1) {
case "call":
var statearr_49280_50864 = state_49150__$1;
(statearr_49280_50864[(1)] = (53));


break;
case "prop":
case "join":
case "union":
var statearr_49281_50865 = state_49150__$1;
(statearr_49281_50865[(1)] = (69));


break;
default:
var statearr_49282_50867 = state_49150__$1;
(statearr_49282_50867[(1)] = (73));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (25))){
var inst_48798 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49283_50868 = state_49150__$1;
(statearr_49283_50868[(2)] = inst_48798);

(statearr_49283_50868[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (34))){
var state_49150__$1 = state_49150;
var statearr_49284_50869 = state_49150__$1;
(statearr_49284_50869[(2)] = true);

(statearr_49284_50869[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (146))){
var inst_49024 = (state_49150[(34)]);
var inst_49045 = (state_49150[(42)]);
var inst_49015 = (state_49150[(53)]);
var inst_49136 = (state_49150[(2)]);
var inst_49137 = com.wsscode.pathom.parser.ast__GT_out_key(inst_49045);
var inst_49138 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49015,inst_49137,inst_49136);
var inst_49015__$1 = inst_49138;
var inst_49016 = inst_49024;
var state_49150__$1 = (function (){var statearr_49285 = state_49150;
(statearr_49285[(33)] = inst_49016);

(statearr_49285[(53)] = inst_49015__$1);

return statearr_49285;
})();
var statearr_49286_50870 = state_49150__$1;
(statearr_49286_50870[(2)] = null);

(statearr_49286_50870[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (125))){
var inst_49082 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_49083 = (new Error(inst_49082));
var inst_49084 = (function(){throw inst_49083})();
var state_49150__$1 = state_49150;
var statearr_49287_50874 = state_49150__$1;
(statearr_49287_50874[(2)] = inst_49084);

(statearr_49287_50874[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (17))){
var inst_48748 = (state_49150[(61)]);
var inst_48766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48748);
var state_49150__$1 = state_49150;
var statearr_49288_50875 = state_49150__$1;
(statearr_49288_50875[(2)] = inst_48766);

(statearr_49288_50875[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (3))){
var inst_48732 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49289_50876 = state_49150__$1;
(statearr_49289_50876[(2)] = inst_48732);


cljs.core.async.impl.ioc_helpers.process_exception(state_49150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (12))){
var state_49150__$1 = state_49150;
var statearr_49290_50877 = state_49150__$1;
(statearr_49290_50877[(2)] = false);

(statearr_49290_50877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (2))){
var inst_49148 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49150__$1,inst_49148);
} else {
if((state_val_49151 === (66))){
var inst_48906 = (state_49150[(9)]);
var inst_48908 = (inst_48906.cljs$core$IFn$_invoke$arity$0 ? inst_48906.cljs$core$IFn$_invoke$arity$0() : inst_48906.call(null));
var state_49150__$1 = state_49150;
var statearr_49291_50878 = state_49150__$1;
(statearr_49291_50878[(2)] = inst_48908);

(statearr_49291_50878[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (142))){
var inst_49079 = (state_49150[(8)]);
var inst_49123 = (state_49150[(2)]);
var inst_49124 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_49079) : read.call(null,inst_49079));
var state_49150__$1 = (function (){var statearr_49292 = state_49150;
(statearr_49292[(62)] = inst_49123);

return statearr_49292;
})();
var statearr_49293_50879 = state_49150__$1;
(statearr_49293_50879[(2)] = inst_49124);

(statearr_49293_50879[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (107))){
var inst_49023 = (state_49150[(18)]);
var inst_49042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49023);
var state_49150__$1 = state_49150;
var statearr_49294_50883 = state_49150__$1;
(statearr_49294_50883[(2)] = inst_49042);

(statearr_49294_50883[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (23))){
var state_49150__$1 = state_49150;
var statearr_49295_50884 = state_49150__$1;
(statearr_49295_50884[(2)] = true);

(statearr_49295_50884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (47))){
var inst_48862 = (state_49150[(26)]);
var state_49150__$1 = state_49150;
var statearr_49296_50885 = state_49150__$1;
(statearr_49296_50885[(2)] = inst_48862);

(statearr_49296_50885[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (35))){
var state_49150__$1 = state_49150;
var statearr_49297_50886 = state_49150__$1;
(statearr_49297_50886[(2)] = false);

(statearr_49297_50886[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (127))){
var inst_49088 = (state_49150[(60)]);
var inst_49093 = inst_49088.cljs$lang$protocol_mask$partition0$;
var inst_49094 = (inst_49093 & (64));
var inst_49095 = inst_49088.cljs$core$ISeq$;
var inst_49096 = (cljs.core.PROTOCOL_SENTINEL === inst_49095);
var inst_49097 = ((inst_49094) || (inst_49096));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_49097)){
var statearr_49298_50888 = state_49150__$1;
(statearr_49298_50888[(1)] = (130));

} else {
var statearr_49299_50889 = state_49150__$1;
(statearr_49299_50889[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (82))){
var state_49150__$1 = state_49150;
var statearr_49300_50890 = state_49150__$1;
(statearr_49300_50890[(2)] = false);

(statearr_49300_50890[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (76))){
var inst_48811 = (state_49150[(44)]);
var inst_48820 = (state_49150[(51)]);
var inst_48841 = (state_49150[(20)]);
var inst_48932 = (state_49150[(2)]);
var inst_48933 = com.wsscode.pathom.parser.ast__GT_out_key(inst_48841);
var inst_48934 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_48811,inst_48933,inst_48932);
var inst_48811__$1 = inst_48934;
var inst_48812 = inst_48820;
var state_49150__$1 = (function (){var statearr_49301 = state_49150;
(statearr_49301[(50)] = inst_48812);

(statearr_49301[(44)] = inst_48811__$1);

return statearr_49301;
})();
var statearr_49302_50895 = state_49150__$1;
(statearr_49302_50895[(2)] = null);

(statearr_49302_50895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (97))){
var inst_48988 = (state_49150[(41)]);
var state_49150__$1 = state_49150;
var statearr_49303_50896 = state_49150__$1;
(statearr_49303_50896[(2)] = inst_48988);

(statearr_49303_50896[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (19))){
var inst_48784 = (state_49150[(15)]);
var inst_48769 = (state_49150[(49)]);
var inst_48770 = (state_49150[(55)]);
var inst_48769__$1 = (state_49150[(2)]);
var inst_48770__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_48771 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_48769__$1);
var inst_48772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_48782 = cljs.core.PersistentHashMap.EMPTY;
var inst_48783 = cljs.core.seq(inst_48770__$1);
var inst_48784__$1 = cljs.core.first(inst_48783);
var inst_48785 = cljs.core.next(inst_48783);
var inst_48787 = (inst_48784__$1 == null);
var inst_48788 = cljs.core.not(inst_48787);
var state_49150__$1 = (function (){var statearr_49304 = state_49150;
(statearr_49304[(63)] = inst_48785);

(statearr_49304[(37)] = inst_48772);

(statearr_49304[(15)] = inst_48784__$1);

(statearr_49304[(49)] = inst_48769__$1);

(statearr_49304[(54)] = inst_48782);

(statearr_49304[(64)] = inst_48771);

(statearr_49304[(55)] = inst_48770__$1);

return statearr_49304;
})();
if(inst_48788){
var statearr_49305_50898 = state_49150__$1;
(statearr_49305_50898[(1)] = (20));

} else {
var statearr_49306_50899 = state_49150__$1;
(statearr_49306_50899[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (57))){
var inst_48884 = (state_49150[(39)]);
var inst_48889 = inst_48884.cljs$lang$protocol_mask$partition0$;
var inst_48890 = (inst_48889 & (64));
var inst_48891 = inst_48884.cljs$core$ISeq$;
var inst_48892 = (cljs.core.PROTOCOL_SENTINEL === inst_48891);
var inst_48893 = ((inst_48890) || (inst_48892));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48893)){
var statearr_49307_50900 = state_49150__$1;
(statearr_49307_50900[(1)] = (60));

} else {
var statearr_49308_50901 = state_49150__$1;
(statearr_49308_50901[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (68))){
var inst_48911 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49309_50903 = state_49150__$1;
(statearr_49309_50903[(2)] = inst_48911);

(statearr_49309_50903[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (11))){
var inst_48748 = (state_49150[(61)]);
var inst_48753 = inst_48748.cljs$lang$protocol_mask$partition0$;
var inst_48754 = (inst_48753 & (64));
var inst_48755 = inst_48748.cljs$core$ISeq$;
var inst_48756 = (cljs.core.PROTOCOL_SENTINEL === inst_48755);
var inst_48757 = ((inst_48754) || (inst_48756));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48757)){
var statearr_49310_50907 = state_49150__$1;
(statearr_49310_50907[(1)] = (14));

} else {
var statearr_49311_50908 = state_49150__$1;
(statearr_49311_50908[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (115))){
var inst_49061 = (state_49150[(45)]);
var inst_48976 = (state_49150[(13)]);
var inst_49045 = (state_49150[(42)]);
var inst_49061__$1 = (state_49150[(2)]);
var inst_49063 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_49064 = [inst_49045,inst_49061__$1];
var inst_49065 = cljs.core.PersistentHashMap.fromArrays(inst_49063,inst_49064);
var inst_49066 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48976,inst_49065], 0));
var inst_49067 = (inst_49061__$1 == null);
var state_49150__$1 = (function (){var statearr_49312 = state_49150;
(statearr_49312[(32)] = inst_49066);

(statearr_49312[(45)] = inst_49061__$1);

return statearr_49312;
})();
if(cljs.core.truth_(inst_49067)){
var statearr_49313_50910 = state_49150__$1;
(statearr_49313_50910[(1)] = (116));

} else {
var statearr_49314_50911 = state_49150__$1;
(statearr_49314_50911[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (9))){
var inst_48746 = com.wsscode.pathom.parser.query__GT_ast(tx);
var state_49150__$1 = state_49150;
var statearr_49315_50912 = state_49150__$1;
(statearr_49315_50912[(2)] = inst_48746);

(statearr_49315_50912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (145))){
var inst_49128 = (state_49150[(29)]);
var state_49150__$1 = state_49150;
var statearr_49316_50914 = state_49150__$1;
(statearr_49316_50914[(2)] = inst_49128);

(statearr_49316_50914[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (5))){
var inst_48743 = (state_49150[(65)]);
var inst_48738 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_48739 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_48740 = cljs.core.PersistentHashMap.fromArrays(inst_48738,inst_48739);
var inst_48741 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_48740);
var inst_48743__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
var state_49150__$1 = (function (){var statearr_49317 = state_49150;
(statearr_49317[(65)] = inst_48743__$1);

(statearr_49317[(66)] = inst_48741);

return statearr_49317;
})();
if(cljs.core.truth_(inst_48743__$1)){
var statearr_49318_50919 = state_49150__$1;
(statearr_49318_50919[(1)] = (8));

} else {
var statearr_49319_50920 = state_49150__$1;
(statearr_49319_50920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (112))){
var inst_49142 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49320_50921 = state_49150__$1;
(statearr_49320_50921[(2)] = inst_49142);

(statearr_49320_50921[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (83))){
var inst_48968 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48968)){
var statearr_49321_50922 = state_49150__$1;
(statearr_49321_50922[(1)] = (87));

} else {
var statearr_49322_50923 = state_49150__$1;
(statearr_49322_50923[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (138))){
var inst_49115 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49323_50927 = state_49150__$1;
(statearr_49323_50927[(2)] = inst_49115);

(statearr_49323_50927[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (14))){
var state_49150__$1 = state_49150;
var statearr_49324_50928 = state_49150__$1;
(statearr_49324_50928[(2)] = true);

(statearr_49324_50928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (45))){
var inst_48857 = (state_49150[(30)]);
var inst_48772 = (state_49150[(37)]);
var inst_48841 = (state_49150[(20)]);
var inst_48857__$1 = (state_49150[(2)]);
var inst_48859 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_48860 = [inst_48841,inst_48857__$1];
var inst_48861 = cljs.core.PersistentHashMap.fromArrays(inst_48859,inst_48860);
var inst_48862 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48772,inst_48861], 0));
var inst_48863 = (inst_48857__$1 == null);
var state_49150__$1 = (function (){var statearr_49325 = state_49150;
(statearr_49325[(30)] = inst_48857__$1);

(statearr_49325[(26)] = inst_48862);

return statearr_49325;
})();
if(cljs.core.truth_(inst_48863)){
var statearr_49326_50930 = state_49150__$1;
(statearr_49326_50930[(1)] = (46));

} else {
var statearr_49327_50931 = state_49150__$1;
(statearr_49327_50931[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (53))){
var state_49150__$1 = state_49150;
if(cljs.core.truth_(mutate)){
var statearr_49328_50933 = state_49150__$1;
(statearr_49328_50933[(1)] = (54));

} else {
var statearr_49329_50934 = state_49150__$1;
(statearr_49329_50934[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (78))){
var inst_48947 = (state_49150[(52)]);
var state_49150__$1 = state_49150;
var statearr_49330_50935 = state_49150__$1;
(statearr_49330_50935[(2)] = inst_48947);

(statearr_49330_50935[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (132))){
var inst_49101 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49331_50938 = state_49150__$1;
(statearr_49331_50938[(2)] = inst_49101);

(statearr_49331_50938[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (26))){
var inst_48784 = (state_49150[(15)]);
var inst_48803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48784);
var state_49150__$1 = state_49150;
var statearr_49332_50941 = state_49150__$1;
(statearr_49332_50941[(2)] = inst_48803);

(statearr_49332_50941[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (123))){
var state_49150__$1 = state_49150;
if(cljs.core.truth_(mutate)){
var statearr_49333_50956 = state_49150__$1;
(statearr_49333_50956[(1)] = (124));

} else {
var statearr_49334_50957 = state_49150__$1;
(statearr_49334_50957[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (140))){
var state_49150__$1 = state_49150;
var statearr_49335_50958 = state_49150__$1;
(statearr_49335_50958[(2)] = null);

(statearr_49335_50958[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (16))){
var inst_48761 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49336_50960 = state_49150__$1;
(statearr_49336_50960[(2)] = inst_48761);

(statearr_49336_50960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (133))){
var inst_49088 = (state_49150[(60)]);
var inst_49106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49088);
var state_49150__$1 = state_49150;
var statearr_49337_50963 = state_49150__$1;
(statearr_49337_50963[(2)] = inst_49106);

(statearr_49337_50963[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (81))){
var inst_48952 = (state_49150[(25)]);
var inst_48957 = inst_48952.cljs$lang$protocol_mask$partition0$;
var inst_48958 = (inst_48957 & (64));
var inst_48959 = inst_48952.cljs$core$ISeq$;
var inst_48960 = (cljs.core.PROTOCOL_SENTINEL === inst_48959);
var inst_48961 = ((inst_48958) || (inst_48960));
var state_49150__$1 = state_49150;
if(cljs.core.truth_(inst_48961)){
var statearr_49338_50967 = state_49150__$1;
(statearr_49338_50967[(1)] = (84));

} else {
var statearr_49339_50969 = state_49150__$1;
(statearr_49339_50969[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (120))){
var inst_49072 = (state_49150[(28)]);
var state_49150__$1 = state_49150;
var statearr_49340_50970 = state_49150__$1;
(statearr_49340_50970[(2)] = inst_49072);

(statearr_49340_50970[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (79))){
var inst_48950 = com.wsscode.pathom.parser.query__GT_ast(tx);
var state_49150__$1 = state_49150;
var statearr_49341_50972 = state_49150__$1;
(statearr_49341_50972[(2)] = inst_48950);

(statearr_49341_50972[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (38))){
var inst_48819 = (state_49150[(35)]);
var state_49150__$1 = state_49150;
var statearr_49342_50973 = state_49150__$1;
(statearr_49342_50973[(2)] = inst_48819);

(statearr_49342_50973[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (126))){
var inst_49047 = (state_49150[(12)]);
var inst_49049 = (state_49150[(43)]);
var inst_49079 = (state_49150[(8)]);
var inst_49088 = (state_49150[(60)]);
var inst_49086 = (state_49150[(2)]);
var inst_49088__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_49079,inst_49047,inst_49049) : mutate.call(null,inst_49079,inst_49047,inst_49049));
var inst_49090 = (inst_49088__$1 == null);
var inst_49091 = cljs.core.not(inst_49090);
var state_49150__$1 = (function (){var statearr_49343 = state_49150;
(statearr_49343[(67)] = inst_49086);

(statearr_49343[(60)] = inst_49088__$1);

return statearr_49343;
})();
if(inst_49091){
var statearr_49344_50977 = state_49150__$1;
(statearr_49344_50977[(1)] = (127));

} else {
var statearr_49345_50978 = state_49150__$1;
(statearr_49345_50978[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (98))){
var inst_48974 = (state_49150[(46)]);
var inst_48986 = (state_49150[(48)]);
var inst_49010 = (state_49150[(2)]);
var inst_49011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49010,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_49012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49010,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_49013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49010,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_49014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49010,new cljs.core.Keyword(null,"params","params",710516235));
var inst_49015 = inst_48986;
var inst_49016 = inst_48974;
var state_49150__$1 = (function (){var statearr_49346 = state_49150;
(statearr_49346[(68)] = inst_49011);

(statearr_49346[(33)] = inst_49016);

(statearr_49346[(69)] = inst_49012);

(statearr_49346[(53)] = inst_49015);

(statearr_49346[(70)] = inst_49014);

(statearr_49346[(71)] = inst_49013);

return statearr_49346;
})();
var statearr_49347_50985 = state_49150__$1;
(statearr_49347_50985[(2)] = null);

(statearr_49347_50985[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (124))){
var state_49150__$1 = state_49150;
var statearr_49348_50993 = state_49150__$1;
(statearr_49348_50993[(2)] = null);

(statearr_49348_50993[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (87))){
var inst_48952 = (state_49150[(25)]);
var inst_48970 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48952);
var state_49150__$1 = state_49150;
var statearr_49349_51001 = state_49150__$1;
(statearr_49349_51001[(2)] = inst_48970);

(statearr_49349_51001[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (30))){
var inst_48741 = (state_49150[(66)]);
var inst_48940 = (state_49150[(2)]);
var inst_48941 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_48942 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_48943 = cljs.core.PersistentHashMap.fromArrays(inst_48941,inst_48942);
var inst_48944 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_48741,inst_48943);
var state_49150__$1 = (function (){var statearr_49350 = state_49150;
(statearr_49350[(72)] = inst_48944);

return statearr_49350;
})();
var statearr_49351_51019 = state_49150__$1;
(statearr_49351_51019[(2)] = inst_48940);

(statearr_49351_51019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (73))){
var state_49150__$1 = state_49150;
var statearr_49352_51023 = state_49150__$1;
(statearr_49352_51023[(2)] = null);

(statearr_49352_51023[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (96))){
var inst_48988 = (state_49150[(41)]);
var inst_49007 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48988);
var state_49150__$1 = state_49150;
var statearr_49353_51032 = state_49150__$1;
(statearr_49353_51032[(2)] = inst_49007);

(statearr_49353_51032[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (10))){
var inst_48748 = (state_49150[(61)]);
var inst_48748__$1 = (state_49150[(2)]);
var inst_48750 = (inst_48748__$1 == null);
var inst_48751 = cljs.core.not(inst_48750);
var state_49150__$1 = (function (){var statearr_49354 = state_49150;
(statearr_49354[(61)] = inst_48748__$1);

return statearr_49354;
})();
if(inst_48751){
var statearr_49355_51048 = state_49150__$1;
(statearr_49355_51048[(1)] = (11));

} else {
var statearr_49356_51050 = state_49150__$1;
(statearr_49356_51050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (18))){
var inst_48748 = (state_49150[(61)]);
var state_49150__$1 = state_49150;
var statearr_49357_51057 = state_49150__$1;
(statearr_49357_51057[(2)] = inst_48748);

(statearr_49357_51057[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (105))){
var state_49150__$1 = state_49150;
var statearr_49358_51068 = state_49150__$1;
(statearr_49358_51068[(2)] = false);

(statearr_49358_51068[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (52))){
var inst_48924 = (state_49150[(10)]);
var inst_48924__$1 = (state_49150[(2)]);
var inst_48925 = com.wsscode.common.async_cljs.chan_QMARK_(inst_48924__$1);
var state_49150__$1 = (function (){var statearr_49359 = state_49150;
(statearr_49359[(10)] = inst_48924__$1);

return statearr_49359;
})();
if(inst_48925){
var statearr_49360_51085 = state_49150__$1;
(statearr_49360_51085[(1)] = (74));

} else {
var statearr_49361_51086 = state_49150__$1;
(statearr_49361_51086[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (114))){
var inst_49046 = (state_49150[(11)]);
var state_49150__$1 = state_49150;
var statearr_49362_51088 = state_49150__$1;
(statearr_49362_51088[(2)] = inst_49046);

(statearr_49362_51088[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (147))){
var inst_49132 = (state_49150[(2)]);
var inst_49133 = com.wsscode.common.async_cljs.throw_err(inst_49132);
var state_49150__$1 = state_49150;
var statearr_49363_51090 = state_49150__$1;
(statearr_49363_51090[(2)] = inst_49133);

(statearr_49363_51090[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (67))){
var state_49150__$1 = state_49150;
var statearr_49364_51091 = state_49150__$1;
(statearr_49364_51091[(2)] = null);

(statearr_49364_51091[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (71))){
var inst_48915 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_48916 = (new Error(inst_48915));
var inst_48917 = (function(){throw inst_48916})();
var state_49150__$1 = state_49150;
var statearr_49365_51093 = state_49150__$1;
(statearr_49365_51093[(2)] = inst_48917);

(statearr_49365_51093[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (42))){
var inst_48938 = (state_49150[(2)]);
var state_49150__$1 = state_49150;
var statearr_49366_51095 = state_49150__$1;
(statearr_49366_51095[(2)] = inst_48938);

(statearr_49366_51095[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (80))){
var inst_48952 = (state_49150[(25)]);
var inst_48952__$1 = (state_49150[(2)]);
var inst_48954 = (inst_48952__$1 == null);
var inst_48955 = cljs.core.not(inst_48954);
var state_49150__$1 = (function (){var statearr_49367 = state_49150;
(statearr_49367[(25)] = inst_48952__$1);

return statearr_49367;
})();
if(inst_48955){
var statearr_49368_51097 = state_49150__$1;
(statearr_49368_51097[(1)] = (81));

} else {
var statearr_49369_51099 = state_49150__$1;
(statearr_49369_51099[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (37))){
var inst_48819 = (state_49150[(35)]);
var inst_48838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48819);
var state_49150__$1 = state_49150;
var statearr_49370_51100 = state_49150__$1;
(statearr_49370_51100[(2)] = inst_48838);

(statearr_49370_51100[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (63))){
var inst_48884 = (state_49150[(39)]);
var inst_48902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48884);
var state_49150__$1 = state_49150;
var statearr_49371_51101 = state_49150__$1;
(statearr_49371_51101[(2)] = inst_48902);

(statearr_49371_51101[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (94))){
var state_49150__$1 = state_49150;
var statearr_49372_51102 = state_49150__$1;
(statearr_49372_51102[(2)] = false);

(statearr_49372_51102[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (8))){
var inst_48743 = (state_49150[(65)]);
var state_49150__$1 = state_49150;
var statearr_49373_51103 = state_49150__$1;
(statearr_49373_51103[(2)] = inst_48743);

(statearr_49373_51103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (49))){
var inst_48868 = (state_49150[(31)]);
var inst_48771 = (state_49150[(64)]);
var inst_48872 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_48868,new cljs.core.Keyword(null,"query","query",-1288509510),inst_48771);
var state_49150__$1 = state_49150;
var statearr_49374_51108 = state_49150__$1;
(statearr_49374_51108[(2)] = inst_48872);

(statearr_49374_51108[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49151 === (84))){
var state_49150__$1 = state_49150;
var statearr_49375_51110 = state_49150__$1;
(statearr_49375_51110[(2)] = true);

(statearr_49375_51110[(1)] = (86));


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
});})(c__43002__auto__,map__48730,map__48730__$1,read,mutate))
;
return ((function (switch__42979__auto__,c__43002__auto__,map__48730,map__48730__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto____0 = (function (){
var statearr_49376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49376[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto__);

(statearr_49376[(1)] = (1));

return statearr_49376;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto____1 = (function (state_49150){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_49150);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e49377){if((e49377 instanceof Object)){
var ex__42983__auto__ = e49377;
var statearr_49378_51153 = state_49150;
(statearr_49378_51153[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51154 = state_49150;
state_49150 = G__51154;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto__ = function(state_49150){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto____1.call(this,state_49150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,map__48730,map__48730__$1,read,mutate))
})();
var state__43004__auto__ = (function (){var statearr_49379 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_49379[(6)] = c__43002__auto__);

return statearr_49379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,map__48730,map__48730__$1,read,mutate))
);

return c__43002__auto__;
});
;})(map__48730,map__48730__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__49380,key){
var map__49381 = p__49380;
var map__49381__$1 = (((((!((map__49381 == null))))?(((((map__49381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49381):map__49381);
var env = map__49381__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49381__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__43002__auto___51158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto___51158,ch,map__49381,map__49381__$1,env,key_watchers){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto___51158,ch,map__49381,map__49381__$1,env,key_watchers){
return (function (state_49405){
var state_val_49406 = (state_49405[(1)]);
if((state_val_49406 === (1))){
var inst_49383 = cljs.core.async.timeout((1));
var state_49405__$1 = state_49405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49405__$1,(2),inst_49383);
} else {
if((state_val_49406 === (2))){
var inst_49385 = (state_49405[(2)]);
var inst_49386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_49387 = cljs.core.deref(inst_49386);
var inst_49388 = cljs.core.contains_QMARK_(inst_49387,key);
var state_49405__$1 = (function (){var statearr_49407 = state_49405;
(statearr_49407[(7)] = inst_49385);

return statearr_49407;
})();
if(inst_49388){
var statearr_49408_51163 = state_49405__$1;
(statearr_49408_51163[(1)] = (3));

} else {
var statearr_49409_51164 = state_49405__$1;
(statearr_49409_51164[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49406 === (3))){
var inst_49390 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49391 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_49392 = cljs.core.PersistentHashMap.fromArrays(inst_49390,inst_49391);
var inst_49393 = com.wsscode.pathom.trace.trace(env,inst_49392);
var inst_49394 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_49395 = [key];
var inst_49396 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_49395);
var inst_49397 = [inst_49396];
var inst_49398 = cljs.core.PersistentHashMap.fromArrays(inst_49394,inst_49397);
var inst_49399 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_49398);
var inst_49400 = cljs.core.async.close_BANG_(ch);
var state_49405__$1 = (function (){var statearr_49410 = state_49405;
(statearr_49410[(8)] = inst_49393);

(statearr_49410[(9)] = inst_49399);

return statearr_49410;
})();
var statearr_49411_51168 = state_49405__$1;
(statearr_49411_51168[(2)] = inst_49400);

(statearr_49411_51168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49406 === (4))){
var state_49405__$1 = state_49405;
var statearr_49412_51169 = state_49405__$1;
(statearr_49412_51169[(2)] = null);

(statearr_49412_51169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49406 === (5))){
var inst_49403 = (state_49405[(2)]);
var state_49405__$1 = state_49405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49405__$1,inst_49403);
} else {
return null;
}
}
}
}
}
});})(c__43002__auto___51158,ch,map__49381,map__49381__$1,env,key_watchers))
;
return ((function (switch__42979__auto__,c__43002__auto___51158,ch,map__49381,map__49381__$1,env,key_watchers){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto____0 = (function (){
var statearr_49413 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49413[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto__);

(statearr_49413[(1)] = (1));

return statearr_49413;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto____1 = (function (state_49405){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_49405);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e49414){if((e49414 instanceof Object)){
var ex__42983__auto__ = e49414;
var statearr_49415_51173 = state_49405;
(statearr_49415_51173[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51175 = state_49405;
state_49405 = G__51175;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto__ = function(state_49405){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto____1.call(this,state_49405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto___51158,ch,map__49381,map__49381__$1,env,key_watchers))
})();
var state__43004__auto__ = (function (){var statearr_49416 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_49416[(6)] = c__43002__auto___51158);

return statearr_49416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto___51158,ch,map__49381,map__49381__$1,env,key_watchers))
);


return ch;
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__49417,e){
var map__49418 = p__49417;
var map__49418__$1 = (((((!((map__49418 == null))))?(((((map__49418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49418):map__49418);
var env = map__49418__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__49420 = ast;
var map__49420__$1 = (((((!((map__49420 == null))))?(((((map__49420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49420):map__49420);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49420__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49420__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49420__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49420__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__49422 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__49422__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49422,new cljs.core.Keyword(null,"query","query",-1288509510)):G__49422);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49422__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__49422__$1;
}
})();
var value = (function (){var G__49423 = type;
var G__49423__$1 = (((G__49423 instanceof cljs.core.Keyword))?G__49423.fqn:null);
switch (G__49423__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__49424 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__49424__$1 = (((((!((map__49424 == null))))?(((((map__49424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49424):map__49424);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,map__49424,map__49424__$1,action,G__49423,G__49423__$1,map__49420,map__49420__$1,query,key,type,params,env__$1){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,map__49424,map__49424__$1,action,G__49423,G__49423__$1,map__49420,map__49420__$1,query,key,type,params,env__$1){
return (function (state_49450){
var state_val_49451 = (state_49450[(1)]);
if((state_val_49451 === (1))){
var state_49450__$1 = state_49450;
var statearr_49452_51187 = state_49450__$1;
(statearr_49452_51187[(2)] = null);

(statearr_49452_51187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49451 === (2))){
var inst_49448 = (state_49450[(2)]);
var state_49450__$1 = state_49450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49450__$1,inst_49448);
} else {
if((state_val_49451 === (3))){
var inst_49426 = (state_49450[(2)]);
var inst_49427 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_49428 = com.wsscode.pathom.parser.process_error(env__$1,inst_49426);
var inst_49429 = [inst_49428];
var inst_49430 = cljs.core.PersistentHashMap.fromArrays(inst_49427,inst_49429);
var state_49450__$1 = state_49450;
var statearr_49453_51191 = state_49450__$1;
(statearr_49453_51191[(2)] = inst_49430);


cljs.core.async.impl.ioc_helpers.process_exception(state_49450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49451 === (4))){
var inst_49438 = (state_49450[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49450,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49434 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_49435 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_49436 = cljs.core.PersistentHashMap.fromArrays(inst_49434,inst_49435);
var inst_49437 = com.wsscode.pathom.trace.trace(env__$1,inst_49436);
var inst_49438__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_49439 = com.wsscode.common.async_cljs.chan_QMARK_(inst_49438__$1);
var state_49450__$1 = (function (){var statearr_49454 = state_49450;
(statearr_49454[(7)] = inst_49438__$1);

(statearr_49454[(8)] = inst_49437);

return statearr_49454;
})();
if(inst_49439){
var statearr_49455_51198 = state_49450__$1;
(statearr_49455_51198[(1)] = (5));

} else {
var statearr_49456_51199 = state_49450__$1;
(statearr_49456_51199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49451 === (5))){
var inst_49438 = (state_49450[(7)]);
var state_49450__$1 = state_49450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49450__$1,(8),inst_49438);
} else {
if((state_val_49451 === (6))){
var inst_49438 = (state_49450[(7)]);
var state_49450__$1 = state_49450;
var statearr_49457_51203 = state_49450__$1;
(statearr_49457_51203[(2)] = inst_49438);

(statearr_49457_51203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49451 === (7))){
var inst_49446 = (state_49450[(2)]);
var state_49450__$1 = state_49450;
var statearr_49458_51207 = state_49450__$1;
(statearr_49458_51207[(2)] = inst_49446);


cljs.core.async.impl.ioc_helpers.process_exception(state_49450__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49451 === (8))){
var inst_49442 = (state_49450[(2)]);
var inst_49443 = com.wsscode.common.async_cljs.throw_err(inst_49442);
var state_49450__$1 = state_49450;
var statearr_49459_51208 = state_49450__$1;
(statearr_49459_51208[(2)] = inst_49443);

(statearr_49459_51208[(1)] = (7));


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
});})(c__43002__auto__,map__49424,map__49424__$1,action,G__49423,G__49423__$1,map__49420,map__49420__$1,query,key,type,params,env__$1))
;
return ((function (switch__42979__auto__,c__43002__auto__,map__49424,map__49424__$1,action,G__49423,G__49423__$1,map__49420,map__49420__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____0 = (function (){
var statearr_49460 = [null,null,null,null,null,null,null,null,null];
(statearr_49460[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__);

(statearr_49460[(1)] = (1));

return statearr_49460;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____1 = (function (state_49450){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_49450);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e49461){if((e49461 instanceof Object)){
var ex__42983__auto__ = e49461;
var statearr_49462_51218 = state_49450;
(statearr_49462_51218[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51220 = state_49450;
state_49450 = G__51220;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__ = function(state_49450){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____1.call(this,state_49450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,map__49424,map__49424__$1,action,G__49423,G__49423__$1,map__49420,map__49420__$1,query,key,type,params,env__$1))
})();
var state__43004__auto__ = (function (){var statearr_49463 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_49463[(6)] = c__43002__auto__);

return statearr_49463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,map__49424,map__49424__$1,action,G__49423,G__49423__$1,map__49420,map__49420__$1,query,key,type,params,env__$1))
);

return c__43002__auto__;
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__8599__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__8600__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__8599__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__8600__auto__;
} else {
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
}

break;
default:
return null;

}
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(value)){
var provides = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var stream = (function (){var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,provides,map__49420,map__49420__$1,query,key,type,params,env__$1,value){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,provides,map__49420,map__49420__$1,query,key,type,params,env__$1,value){
return (function (state_49474){
var state_val_49475 = (state_49474[(1)]);
if((state_val_49475 === (1))){
var inst_49464 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_49465 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_49474__$1 = (function (){var statearr_49476 = state_49474;
(statearr_49476[(7)] = inst_49465);

(statearr_49476[(8)] = inst_49464);

return statearr_49476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49474__$1,(2),value);
} else {
if((state_val_49475 === (2))){
var inst_49465 = (state_49474[(7)]);
var inst_49464 = (state_49474[(8)]);
var inst_49467 = (state_49474[(2)]);
var inst_49468 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_49469 = [inst_49467,inst_49468];
var inst_49470 = cljs.core.PersistentHashMap.fromArrays(inst_49465,inst_49469);
var inst_49471 = [provides,true,inst_49470];
var inst_49472 = cljs.core.PersistentHashMap.fromArrays(inst_49464,inst_49471);
var state_49474__$1 = state_49474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49474__$1,inst_49472);
} else {
return null;
}
}
});})(c__43002__auto__,provides,map__49420,map__49420__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__42979__auto__,c__43002__auto__,provides,map__49420,map__49420__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____0 = (function (){
var statearr_49477 = [null,null,null,null,null,null,null,null,null];
(statearr_49477[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__);

(statearr_49477[(1)] = (1));

return statearr_49477;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____1 = (function (state_49474){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_49474);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e49478){if((e49478 instanceof Object)){
var ex__42983__auto__ = e49478;
var statearr_49479_51238 = state_49474;
(statearr_49479_51238[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51239 = state_49474;
state_49474 = G__51239;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__ = function(state_49474){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____1.call(this,state_49474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,provides,map__49420,map__49420__$1,query,key,type,params,env__$1,value))
})();
var state__43004__auto__ = (function (){var statearr_49480 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_49480[(6)] = c__43002__auto__);

return statearr_49480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,provides,map__49420,map__49420__$1,query,key,type,params,env__$1,value))
);

return c__43002__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,stream),key_iterations,tail], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value))){
var provides = new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
var stream = new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292).cljs$core$IFn$_invoke$arity$1(value);
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provided-return","com.wsscode.pathom.parser/provided-return",9084378),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,stream),key_iterations,tail], null);
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","value-return","com.wsscode.pathom.parser/value-return",1158220150),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,com.wsscode.pathom.parser.ast__GT_out_key(ast),value),waiting,processing,key_iterations,tail], null);

}
}
});
com.wsscode.pathom.parser.parallel_flush_watchers = (function com$wsscode$pathom$parser$parallel_flush_watchers(env,key_watchers,provides,error){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__8599__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__8600__auto__ = (function (){var seq__49481 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__49482 = null;
var count__49483 = (0);
var i__49484 = (0);
while(true){
if((i__49484 < count__49483)){
var vec__49499 = chunk__49482.cljs$core$IIndexed$_nth$arity$2(null,i__49484);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49499,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49499,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__49502_51260 = cljs.core.seq(watchers);
var chunk__49503_51261 = null;
var count__49504_51262 = (0);
var i__49505_51263 = (0);
while(true){
if((i__49505_51263 < count__49504_51262)){
var out_51264 = chunk__49503_51261.cljs$core$IIndexed$_nth$arity$2(null,i__49505_51263);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51264,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51264);


var G__51265 = seq__49502_51260;
var G__51266 = chunk__49503_51261;
var G__51267 = count__49504_51262;
var G__51268 = (i__49505_51263 + (1));
seq__49502_51260 = G__51265;
chunk__49503_51261 = G__51266;
count__49504_51262 = G__51267;
i__49505_51263 = G__51268;
continue;
} else {
var temp__5735__auto___51269 = cljs.core.seq(seq__49502_51260);
if(temp__5735__auto___51269){
var seq__49502_51271__$1 = temp__5735__auto___51269;
if(cljs.core.chunked_seq_QMARK_(seq__49502_51271__$1)){
var c__4550__auto___51272 = cljs.core.chunk_first(seq__49502_51271__$1);
var G__51276 = cljs.core.chunk_rest(seq__49502_51271__$1);
var G__51277 = c__4550__auto___51272;
var G__51278 = cljs.core.count(c__4550__auto___51272);
var G__51279 = (0);
seq__49502_51260 = G__51276;
chunk__49503_51261 = G__51277;
count__49504_51262 = G__51278;
i__49505_51263 = G__51279;
continue;
} else {
var out_51281 = cljs.core.first(seq__49502_51271__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51281,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51281);


var G__51290 = cljs.core.next(seq__49502_51271__$1);
var G__51291 = null;
var G__51292 = (0);
var G__51293 = (0);
seq__49502_51260 = G__51290;
chunk__49503_51261 = G__51291;
count__49504_51262 = G__51292;
i__49505_51263 = G__51293;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__51314 = seq__49481;
var G__51315 = chunk__49482;
var G__51316 = count__49483;
var G__51317 = (i__49484 + (1));
seq__49481 = G__51314;
chunk__49482 = G__51315;
count__49483 = G__51316;
i__49484 = G__51317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49481);
if(temp__5735__auto__){
var seq__49481__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49481__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49481__$1);
var G__51332 = cljs.core.chunk_rest(seq__49481__$1);
var G__51333 = c__4550__auto__;
var G__51334 = cljs.core.count(c__4550__auto__);
var G__51335 = (0);
seq__49481 = G__51332;
chunk__49482 = G__51333;
count__49483 = G__51334;
i__49484 = G__51335;
continue;
} else {
var vec__49506 = cljs.core.first(seq__49481__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49506,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49506,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__49509_51337 = cljs.core.seq(watchers);
var chunk__49510_51338 = null;
var count__49511_51339 = (0);
var i__49512_51340 = (0);
while(true){
if((i__49512_51340 < count__49511_51339)){
var out_51341 = chunk__49510_51338.cljs$core$IIndexed$_nth$arity$2(null,i__49512_51340);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51341,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51341);


var G__51345 = seq__49509_51337;
var G__51346 = chunk__49510_51338;
var G__51347 = count__49511_51339;
var G__51348 = (i__49512_51340 + (1));
seq__49509_51337 = G__51345;
chunk__49510_51338 = G__51346;
count__49511_51339 = G__51347;
i__49512_51340 = G__51348;
continue;
} else {
var temp__5735__auto___51350__$1 = cljs.core.seq(seq__49509_51337);
if(temp__5735__auto___51350__$1){
var seq__49509_51352__$1 = temp__5735__auto___51350__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49509_51352__$1)){
var c__4550__auto___51353 = cljs.core.chunk_first(seq__49509_51352__$1);
var G__51355 = cljs.core.chunk_rest(seq__49509_51352__$1);
var G__51356 = c__4550__auto___51353;
var G__51357 = cljs.core.count(c__4550__auto___51353);
var G__51358 = (0);
seq__49509_51337 = G__51355;
chunk__49510_51338 = G__51356;
count__49511_51339 = G__51357;
i__49512_51340 = G__51358;
continue;
} else {
var out_51359 = cljs.core.first(seq__49509_51352__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51359,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51359);


var G__51361 = cljs.core.next(seq__49509_51352__$1);
var G__51362 = null;
var G__51363 = (0);
var G__51364 = (0);
seq__49509_51337 = G__51361;
chunk__49510_51338 = G__51362;
count__49511_51339 = G__51363;
i__49512_51340 = G__51364;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__51366 = cljs.core.next(seq__49481__$1);
var G__51367 = null;
var G__51368 = (0);
var G__51369 = (0);
seq__49481 = G__51366;
chunk__49482 = G__51367;
count__49483 = G__51368;
i__49484 = G__51369;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__8599__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__8600__auto__;
} else {
var seq__49513 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__49514 = null;
var count__49515 = (0);
var i__49516 = (0);
while(true){
if((i__49516 < count__49515)){
var vec__49531 = chunk__49514.cljs$core$IIndexed$_nth$arity$2(null,i__49516);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__49534_51375 = cljs.core.seq(watchers);
var chunk__49535_51376 = null;
var count__49536_51377 = (0);
var i__49537_51378 = (0);
while(true){
if((i__49537_51378 < count__49536_51377)){
var out_51380 = chunk__49535_51376.cljs$core$IIndexed$_nth$arity$2(null,i__49537_51378);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51380,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51380);


var G__51382 = seq__49534_51375;
var G__51383 = chunk__49535_51376;
var G__51384 = count__49536_51377;
var G__51385 = (i__49537_51378 + (1));
seq__49534_51375 = G__51382;
chunk__49535_51376 = G__51383;
count__49536_51377 = G__51384;
i__49537_51378 = G__51385;
continue;
} else {
var temp__5735__auto___51388 = cljs.core.seq(seq__49534_51375);
if(temp__5735__auto___51388){
var seq__49534_51389__$1 = temp__5735__auto___51388;
if(cljs.core.chunked_seq_QMARK_(seq__49534_51389__$1)){
var c__4550__auto___51390 = cljs.core.chunk_first(seq__49534_51389__$1);
var G__51392 = cljs.core.chunk_rest(seq__49534_51389__$1);
var G__51393 = c__4550__auto___51390;
var G__51394 = cljs.core.count(c__4550__auto___51390);
var G__51395 = (0);
seq__49534_51375 = G__51392;
chunk__49535_51376 = G__51393;
count__49536_51377 = G__51394;
i__49537_51378 = G__51395;
continue;
} else {
var out_51396 = cljs.core.first(seq__49534_51389__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51396,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51396);


var G__51400 = cljs.core.next(seq__49534_51389__$1);
var G__51401 = null;
var G__51402 = (0);
var G__51403 = (0);
seq__49534_51375 = G__51400;
chunk__49535_51376 = G__51401;
count__49536_51377 = G__51402;
i__49537_51378 = G__51403;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__51405 = seq__49513;
var G__51406 = chunk__49514;
var G__51407 = count__49515;
var G__51408 = (i__49516 + (1));
seq__49513 = G__51405;
chunk__49514 = G__51406;
count__49515 = G__51407;
i__49516 = G__51408;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49513);
if(temp__5735__auto__){
var seq__49513__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49513__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49513__$1);
var G__51410 = cljs.core.chunk_rest(seq__49513__$1);
var G__51411 = c__4550__auto__;
var G__51412 = cljs.core.count(c__4550__auto__);
var G__51413 = (0);
seq__49513 = G__51410;
chunk__49514 = G__51411;
count__49515 = G__51412;
i__49516 = G__51413;
continue;
} else {
var vec__49538 = cljs.core.first(seq__49513__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49538,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49538,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__49541_51418 = cljs.core.seq(watchers);
var chunk__49542_51419 = null;
var count__49543_51420 = (0);
var i__49544_51421 = (0);
while(true){
if((i__49544_51421 < count__49543_51420)){
var out_51422 = chunk__49542_51419.cljs$core$IIndexed$_nth$arity$2(null,i__49544_51421);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51422,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51422);


var G__51425 = seq__49541_51418;
var G__51426 = chunk__49542_51419;
var G__51427 = count__49543_51420;
var G__51428 = (i__49544_51421 + (1));
seq__49541_51418 = G__51425;
chunk__49542_51419 = G__51426;
count__49543_51420 = G__51427;
i__49544_51421 = G__51428;
continue;
} else {
var temp__5735__auto___51430__$1 = cljs.core.seq(seq__49541_51418);
if(temp__5735__auto___51430__$1){
var seq__49541_51431__$1 = temp__5735__auto___51430__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49541_51431__$1)){
var c__4550__auto___51432 = cljs.core.chunk_first(seq__49541_51431__$1);
var G__51433 = cljs.core.chunk_rest(seq__49541_51431__$1);
var G__51434 = c__4550__auto___51432;
var G__51435 = cljs.core.count(c__4550__auto___51432);
var G__51436 = (0);
seq__49541_51418 = G__51433;
chunk__49542_51419 = G__51434;
count__49543_51420 = G__51435;
i__49544_51421 = G__51436;
continue;
} else {
var out_51437 = cljs.core.first(seq__49541_51431__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_51437,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_51437);


var G__51438 = cljs.core.next(seq__49541_51431__$1);
var G__51439 = null;
var G__51440 = (0);
var G__51441 = (0);
seq__49541_51418 = G__51438;
chunk__49542_51419 = G__51439;
count__49543_51420 = G__51440;
i__49544_51421 = G__51441;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__51442 = cljs.core.next(seq__49513__$1);
var G__51443 = null;
var G__51444 = (0);
var G__51445 = (0);
seq__49513 = G__51442;
chunk__49514 = G__51443;
count__49515 = G__51444;
i__49516 = G__51445;
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
com.wsscode.pathom.parser.default_step_fn = (function com$wsscode$pathom$parser$default_step_fn(amount,min){
return (function (env,x){
var G__49545 = (x - amount);
var G__49546 = min;
return Math.max(G__49545,G__49546);
});
});
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__49549,p__49550,tx){
var map__49551 = p__49549;
var map__49551__$1 = (((((!((map__49551 == null))))?(((((map__49551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49551):map__49551);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49551__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49551__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__49552 = p__49550;
var map__49552__$1 = (((((!((map__49552 == null))))?(((((map__49552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49552):map__49552);
var env = map__49552__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(10));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_50145){
var state_val_50146 = (state_50145[(1)]);
if((state_val_50146 === (121))){
var inst_49954 = (state_50145[(7)]);
var inst_49920 = (state_50145[(8)]);
var inst_49956 = (state_50145[(9)]);
var inst_49604 = (state_50145[(10)]);
var inst_49965 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_49966 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_49954,max_key_iterations];
var inst_49967 = cljs.core.PersistentHashMap.fromArrays(inst_49965,inst_49966);
var inst_49968 = com.wsscode.pathom.trace.trace(inst_49604,inst_49967);
var inst_49970 = cljs.core.contains_QMARK_(inst_49920,inst_49956);
var inst_49971 = (!(inst_49970));
var state_50145__$1 = (function (){var statearr_50147 = state_50145;
(statearr_50147[(11)] = inst_49968);

return statearr_50147;
})();
if(inst_49971){
var statearr_50148_51509 = state_50145__$1;
(statearr_50148_51509[(1)] = (124));

} else {
var statearr_50149_51510 = state_50145__$1;
(statearr_50149_51510[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (65))){
var inst_49687 = (state_50145[(12)]);
var inst_49654 = (state_50145[(13)]);
var inst_49735 = cljs.core.contains_QMARK_(inst_49654,inst_49687);
var state_50145__$1 = state_50145;
if(inst_49735){
var statearr_50150_51514 = state_50145__$1;
(statearr_50150_51514[(1)] = (67));

} else {
var statearr_50151_51515 = state_50145__$1;
(statearr_50151_51515[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (70))){
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49604 = (state_50145[(10)]);
var inst_49686 = (state_50145[(16)]);
var inst_49598 = (state_50145[(17)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49654 = (state_50145[(13)]);
var inst_49747 = com.wsscode.pathom.parser.parallel_process_value(inst_49604,tx,inst_49686,inst_49598,inst_49653,inst_49654,inst_49655,read,mutate,inst_49656,inst_49665);
var inst_49748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49747,(0),null);
var inst_49749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49747,(1),null);
var inst_49750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49747,(2),null);
var inst_49751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49747,(3),null);
var inst_49752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49747,(4),null);
var inst_49653__$1 = inst_49748;
var inst_49654__$1 = inst_49749;
var inst_49655__$1 = inst_49750;
var inst_49656__$1 = inst_49751;
var inst_49657 = inst_49752;
var state_50145__$1 = (function (){var statearr_50152 = state_50145;
(statearr_50152[(20)] = inst_49657);

(statearr_50152[(14)] = inst_49653__$1);

(statearr_50152[(15)] = inst_49656__$1);

(statearr_50152[(19)] = inst_49655__$1);

(statearr_50152[(13)] = inst_49654__$1);

return statearr_50152;
})();
var statearr_50153_51523 = state_50145__$1;
(statearr_50153_51523[(2)] = null);

(statearr_50153_51523[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (62))){
var inst_49720 = (state_50145[(21)]);
var state_50145__$1 = state_50145;
var statearr_50154_51527 = state_50145__$1;
(statearr_50154_51527[(2)] = inst_49720);

(statearr_50154_51527[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (74))){
var inst_49653 = (state_50145[(14)]);
var state_50145__$1 = state_50145;
var statearr_50155_51536 = state_50145__$1;
(statearr_50155_51536[(2)] = inst_49653);

(statearr_50155_51536[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (110))){
var state_50145__$1 = state_50145;
var statearr_50156_51552 = state_50145__$1;
(statearr_50156_51552[(2)] = false);

(statearr_50156_51552[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (130))){
var inst_49954 = (state_50145[(7)]);
var inst_49921 = (state_50145[(22)]);
var inst_49989 = cljs.core.contains_QMARK_(inst_49921,inst_49954);
var state_50145__$1 = state_50145;
var statearr_50157_51576 = state_50145__$1;
(statearr_50157_51576[(2)] = inst_49989);

(statearr_50157_51576[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (128))){
var inst_49987 = (state_50145[(23)]);
var inst_49604 = (state_50145[(10)]);
var inst_49987__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_49604);
var state_50145__$1 = (function (){var statearr_50158 = state_50145;
(statearr_50158[(23)] = inst_49987__$1);

return statearr_50158;
})();
if(cljs.core.truth_(inst_49987__$1)){
var statearr_50159_51579 = state_50145__$1;
(statearr_50159_51579[(1)] = (130));

} else {
var statearr_50160_51580 = state_50145__$1;
(statearr_50160_51580[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (153))){
var inst_50042 = (state_50145[(24)]);
var state_50145__$1 = state_50145;
var statearr_50161_51582 = state_50145__$1;
(statearr_50161_51582[(2)] = inst_50042);

(statearr_50161_51582[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (7))){
var inst_49564 = (state_50145[(2)]);
var state_50145__$1 = (function (){var statearr_50162 = state_50145;
(statearr_50162[(25)] = inst_49564);

return statearr_50162;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_50163_51587 = state_50145__$1;
(statearr_50163_51587[(1)] = (8));

} else {
var statearr_50164_51588 = state_50145__$1;
(statearr_50164_51588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (59))){
var inst_49604 = (state_50145[(10)]);
var inst_49720 = (state_50145[(21)]);
var inst_49720__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_49604);
var state_50145__$1 = (function (){var statearr_50165 = state_50145;
(statearr_50165[(21)] = inst_49720__$1);

return statearr_50165;
})();
if(cljs.core.truth_(inst_49720__$1)){
var statearr_50166_51590 = state_50145__$1;
(statearr_50166_51590[(1)] = (61));

} else {
var statearr_50167_51592 = state_50145__$1;
(statearr_50167_51592[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (86))){
var inst_49805 = (state_50145[(26)]);
var inst_49799 = (state_50145[(27)]);
var inst_49802 = (state_50145[(28)]);
var inst_49798 = (state_50145[(29)]);
var inst_49809 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_49810 = cljs.core.boolean$(inst_49799);
var inst_49811 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_49798,inst_49805,inst_49810];
var inst_49812 = cljs.core.PersistentHashMap.fromArrays(inst_49809,inst_49811);
var state_50145__$1 = (function (){var statearr_50168 = state_50145;
(statearr_50168[(30)] = inst_49812);

return statearr_50168;
})();
if(cljs.core.truth_(inst_49802)){
var statearr_50169_51597 = state_50145__$1;
(statearr_50169_51597[(1)] = (89));

} else {
var statearr_50170_51598 = state_50145__$1;
(statearr_50170_51598[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (154))){
var inst_50063 = (state_50145[(31)]);
var inst_50069 = (state_50145[(32)]);
var inst_49921 = (state_50145[(22)]);
var inst_50065 = (state_50145[(33)]);
var inst_50041 = (state_50145[(34)]);
var inst_50063__$1 = (state_50145[(2)]);
var inst_50064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50063__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_50065__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50063__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_50066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50063__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_50067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50063__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_50068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50041,(1),null);
var inst_50069__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_50063__$1);
var inst_50070 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_50065__$1,inst_50069__$1);
var inst_50071 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_50064);
var inst_50072 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_50064,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_50073 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_49921,inst_50069__$1);
var state_50145__$1 = (function (){var statearr_50171 = state_50145;
(statearr_50171[(31)] = inst_50063__$1);

(statearr_50171[(32)] = inst_50069__$1);

(statearr_50171[(35)] = inst_50070);

(statearr_50171[(36)] = inst_50071);

(statearr_50171[(37)] = inst_50066);

(statearr_50171[(38)] = inst_50072);

(statearr_50171[(39)] = inst_50067);

(statearr_50171[(33)] = inst_50065__$1);

(statearr_50171[(40)] = inst_50068);

(statearr_50171[(41)] = inst_50073);

return statearr_50171;
})();
if(cljs.core.truth_(inst_50063__$1)){
var statearr_50172_51603 = state_50145__$1;
(statearr_50172_51603[(1)] = (155));

} else {
var statearr_50173_51604 = state_50145__$1;
(statearr_50173_51604[(1)] = (156));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (20))){
var state_50145__$1 = state_50145;
var statearr_50178_51608 = state_50145__$1;
(statearr_50178_51608[(2)] = key_watchers);

(statearr_50178_51608[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (72))){
var inst_49756 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50179_51610 = state_50145__$1;
(statearr_50179_51610[(2)] = inst_49756);

(statearr_50179_51610[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (58))){
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49604 = (state_50145[(10)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49687 = (state_50145[(12)]);
var inst_49654 = (state_50145[(13)]);
var inst_49714 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49715 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_49687];
var inst_49716 = cljs.core.PersistentHashMap.fromArrays(inst_49714,inst_49715);
var inst_49717 = com.wsscode.pathom.trace.trace(inst_49604,inst_49716);
var tmp50174 = inst_49653;
var tmp50175 = inst_49656;
var tmp50176 = inst_49655;
var tmp50177 = inst_49654;
var inst_49653__$1 = tmp50174;
var inst_49654__$1 = tmp50177;
var inst_49655__$1 = tmp50176;
var inst_49656__$1 = tmp50175;
var inst_49657 = inst_49665;
var state_50145__$1 = (function (){var statearr_50180 = state_50145;
(statearr_50180[(20)] = inst_49657);

(statearr_50180[(14)] = inst_49653__$1);

(statearr_50180[(15)] = inst_49656__$1);

(statearr_50180[(42)] = inst_49717);

(statearr_50180[(19)] = inst_49655__$1);

(statearr_50180[(13)] = inst_49654__$1);

return statearr_50180;
})();
var statearr_50181_51615 = state_50145__$1;
(statearr_50181_51615[(2)] = null);

(statearr_50181_51615[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (60))){
var inst_49762 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50182_51616 = state_50145__$1;
(statearr_50182_51616[(2)] = inst_49762);

(statearr_50182_51616[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (27))){
var inst_49623 = cljs.core.PersistentHashSet.EMPTY;
var state_50145__$1 = state_50145;
var statearr_50183_51618 = state_50145__$1;
(statearr_50183_51618[(2)] = inst_49623);

(statearr_50183_51618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (1))){
var state_50145__$1 = state_50145;
var statearr_50184_51622 = state_50145__$1;
(statearr_50184_51622[(2)] = null);

(statearr_50184_51622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (69))){
var inst_49758 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50185_51623 = state_50145__$1;
(statearr_50185_51623[(2)] = inst_49758);

(statearr_50185_51623[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (101))){
var state_50145__$1 = state_50145;
var statearr_50186_51624 = state_50145__$1;
(statearr_50186_51624[(2)] = true);

(statearr_50186_51624[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (24))){
var inst_49887 = cljs.core.PersistentHashMap.EMPTY;
var state_50145__$1 = (function (){var statearr_50187 = state_50145;
(statearr_50187[(43)] = inst_49887);

return statearr_50187;
})();
if(cljs.core.truth_(waiting)){
var statearr_50188_51625 = state_50145__$1;
(statearr_50188_51625[(1)] = (95));

} else {
var statearr_50189_51626 = state_50145__$1;
(statearr_50189_51626[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (102))){
var state_50145__$1 = state_50145;
var statearr_50190_51627 = state_50145__$1;
(statearr_50190_51627[(2)] = false);

(statearr_50190_51627[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (135))){
var inst_50027 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50191_51629 = state_50145__$1;
(statearr_50191_51629[(2)] = inst_50027);

(statearr_50191_51629[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (55))){
var inst_49653 = (state_50145[(14)]);
var inst_49689 = (state_50145[(44)]);
var inst_49706 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49653,inst_49689,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_50145__$1 = state_50145;
var statearr_50192_51632 = state_50145__$1;
(statearr_50192_51632[(2)] = inst_49706);

(statearr_50192_51632[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (85))){
var inst_49796 = (state_50145[(45)]);
var inst_49802 = (state_50145[(28)]);
var inst_49798 = (state_50145[(29)]);
var inst_49654 = (state_50145[(13)]);
var inst_49774 = (state_50145[(46)]);
var inst_49796__$1 = (state_50145[(2)]);
var inst_49797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49796__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_49798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49796__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_49799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49796__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_49800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49796__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_49801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49774,(1),null);
var inst_49802__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_49796__$1);
var inst_49803 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_49798__$1,inst_49802__$1);
var inst_49804 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_49797);
var inst_49805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_49797,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_49806 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_49654,inst_49802__$1);
var state_50145__$1 = (function (){var statearr_50193 = state_50145;
(statearr_50193[(26)] = inst_49805);

(statearr_50193[(47)] = inst_49806);

(statearr_50193[(27)] = inst_49799);

(statearr_50193[(48)] = inst_49804);

(statearr_50193[(49)] = inst_49803);

(statearr_50193[(50)] = inst_49800);

(statearr_50193[(45)] = inst_49796__$1);

(statearr_50193[(28)] = inst_49802__$1);

(statearr_50193[(29)] = inst_49798__$1);

(statearr_50193[(51)] = inst_49801);

return statearr_50193;
})();
if(cljs.core.truth_(inst_49796__$1)){
var statearr_50194_51639 = state_50145__$1;
(statearr_50194_51639[(1)] = (86));

} else {
var statearr_50195_51640 = state_50145__$1;
(statearr_50195_51640[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (39))){
var inst_49610 = (state_50145[(52)]);
var inst_49569 = (state_50145[(53)]);
var inst_49604 = (state_50145[(10)]);
var inst_49872 = (state_50145[(2)]);
var inst_49873 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_49874 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_49569];
var inst_49875 = cljs.core.PersistentHashMap.fromArrays(inst_49873,inst_49874);
var inst_49876 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_49604,inst_49610,inst_49875);
var state_50145__$1 = (function (){var statearr_50196 = state_50145;
(statearr_50196[(54)] = inst_49876);

return statearr_50196;
})();
var statearr_50197_51644 = state_50145__$1;
(statearr_50197_51644[(2)] = inst_49872);

(statearr_50197_51644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (88))){
var inst_49865 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50198_51645 = state_50145__$1;
(statearr_50198_51645[(2)] = inst_49865);

(statearr_50198_51645[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (46))){
var inst_49664 = (state_50145[(55)]);
var inst_49683 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49664);
var state_50145__$1 = state_50145;
var statearr_50199_51646 = state_50145__$1;
(statearr_50199_51646[(2)] = inst_49683);

(statearr_50199_51646[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (149))){
var state_50145__$1 = state_50145;
var statearr_50200_51647 = state_50145__$1;
(statearr_50200_51647[(2)] = true);

(statearr_50200_51647[(1)] = (151));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (157))){
var inst_50132 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50201_51648 = state_50145__$1;
(statearr_50201_51648[(2)] = inst_50132);

(statearr_50201_51648[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50145,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_50202_51650 = state_50145__$1;
(statearr_50202_51650[(1)] = (5));

} else {
var statearr_50203_51651 = state_50145__$1;
(statearr_50203_51651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (77))){
var inst_49775 = (state_50145[(56)]);
var inst_49780 = inst_49775.cljs$lang$protocol_mask$partition0$;
var inst_49781 = (inst_49780 & (64));
var inst_49782 = inst_49775.cljs$core$ISeq$;
var inst_49783 = (cljs.core.PROTOCOL_SENTINEL === inst_49782);
var inst_49784 = ((inst_49781) || (inst_49783));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49784)){
var statearr_50204_51653 = state_50145__$1;
(statearr_50204_51653[(1)] = (80));

} else {
var statearr_50205_51654 = state_50145__$1;
(statearr_50205_51654[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (106))){
var inst_49894 = (state_50145[(57)]);
var inst_49893 = (state_50145[(58)]);
var inst_49887 = (state_50145[(43)]);
var inst_49918 = (state_50145[(59)]);
var inst_49592 = (state_50145[(60)]);
var inst_49892 = (state_50145[(61)]);
var inst_49918__$1 = (state_50145[(2)]);
var inst_49919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49918__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_49920 = inst_49887;
var inst_49921 = inst_49892;
var inst_49922 = inst_49893;
var inst_49923 = inst_49894;
var inst_49924 = inst_49592;
var state_50145__$1 = (function (){var statearr_50206 = state_50145;
(statearr_50206[(62)] = inst_49919);

(statearr_50206[(8)] = inst_49920);

(statearr_50206[(59)] = inst_49918__$1);

(statearr_50206[(63)] = inst_49922);

(statearr_50206[(64)] = inst_49924);

(statearr_50206[(65)] = inst_49923);

(statearr_50206[(22)] = inst_49921);

return statearr_50206;
})();
var statearr_50207_51660 = state_50145__$1;
(statearr_50207_51660[(2)] = null);

(statearr_50207_51660[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (119))){
var inst_49922 = (state_50145[(63)]);
var inst_50033 = cljs.core.seq(inst_49922);
var state_50145__$1 = state_50145;
if(inst_50033){
var statearr_50208_51661 = state_50145__$1;
(statearr_50208_51661[(1)] = (142));

} else {
var statearr_50209_51662 = state_50145__$1;
(statearr_50209_51662[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (95))){
var state_50145__$1 = state_50145;
var statearr_50210_51663 = state_50145__$1;
(statearr_50210_51663[(2)] = waiting);

(statearr_50210_51663[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (144))){
var inst_50135 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50213_51664 = state_50145__$1;
(statearr_50213_51664[(2)] = inst_50135);

(statearr_50213_51664[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (54))){
var inst_49764 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50214_51666 = state_50145__$1;
(statearr_50214_51666[(2)] = inst_49764);

(statearr_50214_51666[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (92))){
var inst_49805 = (state_50145[(26)]);
var inst_49806 = (state_50145[(47)]);
var inst_49804 = (state_50145[(48)]);
var inst_49803 = (state_50145[(49)]);
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49604 = (state_50145[(10)]);
var inst_49655 = (state_50145[(19)]);
var inst_49824 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_49825 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_49805];
var inst_49826 = cljs.core.PersistentHashMap.fromArrays(inst_49824,inst_49825);
var inst_49827 = com.wsscode.pathom.trace.trace(inst_49604,inst_49826);
var inst_49828 = cljs.core.vals(inst_49805);
var inst_49829 = cljs.core.first(inst_49828);
var inst_49830 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49653,inst_49804,inst_49829);
var inst_49831 = cljs.core.PersistentHashSet.EMPTY;
var inst_49832 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_49803);
var inst_49833 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_49831,inst_49832,inst_49806);
var inst_49834 = cljs.core.PersistentVector.EMPTY;
var tmp50211 = inst_49656;
var tmp50212 = inst_49655;
var inst_49653__$1 = inst_49830;
var inst_49654 = inst_49833;
var inst_49655__$1 = tmp50212;
var inst_49656__$1 = tmp50211;
var inst_49657 = inst_49834;
var state_50145__$1 = (function (){var statearr_50215 = state_50145;
(statearr_50215[(20)] = inst_49657);

(statearr_50215[(14)] = inst_49653__$1);

(statearr_50215[(15)] = inst_49656__$1);

(statearr_50215[(66)] = inst_49827);

(statearr_50215[(19)] = inst_49655__$1);

(statearr_50215[(13)] = inst_49654);

return statearr_50215;
})();
var statearr_50216_51672 = state_50145__$1;
(statearr_50216_51672[(2)] = null);

(statearr_50216_51672[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (141))){
var inst_50023 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50217_51673 = state_50145__$1;
(statearr_50217_51673[(2)] = inst_50023);

(statearr_50217_51673[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (137))){
var state_50145__$1 = state_50145;
var statearr_50218_51675 = state_50145__$1;
(statearr_50218_51675[(1)] = (139));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (104))){
var inst_49896 = (state_50145[(67)]);
var inst_49915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49896);
var state_50145__$1 = state_50145;
var statearr_50220_51678 = state_50145__$1;
(statearr_50220_51678[(2)] = inst_49915);

(statearr_50220_51678[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (15))){
var state_50145__$1 = state_50145;
var statearr_50221_51679 = state_50145__$1;
(statearr_50221_51679[(2)] = false);

(statearr_50221_51679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (48))){
var inst_49686 = (state_50145[(16)]);
var inst_49686__$1 = (state_50145[(2)]);
var inst_49687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49686__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_50145__$1 = (function (){var statearr_50222 = state_50145;
(statearr_50222[(16)] = inst_49686__$1);

(statearr_50222[(12)] = inst_49687);

return statearr_50222;
})();
if(cljs.core.truth_(inst_49686__$1)){
var statearr_50223_51681 = state_50145__$1;
(statearr_50223_51681[(1)] = (49));

} else {
var statearr_50224_51682 = state_50145__$1;
(statearr_50224_51682[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (50))){
var inst_49655 = (state_50145[(19)]);
var inst_49766 = cljs.core.seq(inst_49655);
var state_50145__$1 = state_50145;
if(inst_49766){
var statearr_50225_51684 = state_50145__$1;
(statearr_50225_51684[(1)] = (73));

} else {
var statearr_50226_51685 = state_50145__$1;
(statearr_50226_51685[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (116))){
var inst_49931 = (state_50145[(68)]);
var state_50145__$1 = state_50145;
var statearr_50227_51688 = state_50145__$1;
(statearr_50227_51688[(2)] = inst_49931);

(statearr_50227_51688[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (75))){
var inst_49868 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50228_51689 = state_50145__$1;
(statearr_50228_51689[(2)] = inst_49868);

(statearr_50228_51689[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (159))){
var inst_50079 = (state_50145[(69)]);
var state_50145__$1 = state_50145;
var statearr_50229_51691 = state_50145__$1;
(statearr_50229_51691[(2)] = inst_50079);

(statearr_50229_51691[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (99))){
var state_50145__$1 = state_50145;
var statearr_50230_51693 = state_50145__$1;
(statearr_50230_51693[(2)] = false);

(statearr_50230_51693[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (21))){
var inst_49595 = cljs.core.PersistentHashMap.EMPTY;
var inst_49596 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_49595);
var state_50145__$1 = state_50145;
var statearr_50231_51694 = state_50145__$1;
(statearr_50231_51694[(2)] = inst_49596);

(statearr_50231_51694[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (31))){
var inst_49646 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49646)){
var statearr_50232_51695 = state_50145__$1;
(statearr_50232_51695[(1)] = (35));

} else {
var statearr_50233_51696 = state_50145__$1;
(statearr_50233_51696[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (113))){
var state_50145__$1 = state_50145;
var statearr_50238_51700 = state_50145__$1;
(statearr_50238_51700[(2)] = false);

(statearr_50238_51700[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (32))){
var state_50145__$1 = state_50145;
var statearr_50239_51701 = state_50145__$1;
(statearr_50239_51701[(2)] = true);

(statearr_50239_51701[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (136))){
var inst_49954 = (state_50145[(7)]);
var inst_49932 = (state_50145[(70)]);
var inst_49920 = (state_50145[(8)]);
var inst_49604 = (state_50145[(10)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_49921 = (state_50145[(22)]);
var inst_50004 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_50005 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_49954];
var inst_50006 = cljs.core.PersistentHashMap.fromArrays(inst_50004,inst_50005);
var inst_50007 = com.wsscode.pathom.trace.trace(inst_49604,inst_50006);
var tmp50234 = inst_49920;
var tmp50235 = inst_49922;
var tmp50236 = inst_49923;
var tmp50237 = inst_49921;
var inst_49920__$1 = tmp50234;
var inst_49921__$1 = tmp50237;
var inst_49922__$1 = tmp50235;
var inst_49923__$1 = tmp50236;
var inst_49924 = inst_49932;
var state_50145__$1 = (function (){var statearr_50240 = state_50145;
(statearr_50240[(8)] = inst_49920__$1);

(statearr_50240[(63)] = inst_49922__$1);

(statearr_50240[(71)] = inst_50007);

(statearr_50240[(64)] = inst_49924);

(statearr_50240[(65)] = inst_49923__$1);

(statearr_50240[(22)] = inst_49921__$1);

return statearr_50240;
})();
var statearr_50241_51708 = state_50145__$1;
(statearr_50241_51708[(2)] = null);

(statearr_50241_51708[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (139))){
var inst_49953 = (state_50145[(72)]);
var inst_49932 = (state_50145[(70)]);
var inst_49920 = (state_50145[(8)]);
var inst_49604 = (state_50145[(10)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_49598 = (state_50145[(17)]);
var inst_49921 = (state_50145[(22)]);
var inst_50014 = com.wsscode.pathom.parser.parallel_process_value(inst_49604,tx,inst_49953,inst_49598,inst_49920,inst_49921,inst_49922,read,mutate,inst_49923,inst_49932);
var inst_50015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50014,(0),null);
var inst_50016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50014,(1),null);
var inst_50017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50014,(2),null);
var inst_50018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50014,(3),null);
var inst_50019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50014,(4),null);
var inst_49920__$1 = inst_50015;
var inst_49921__$1 = inst_50016;
var inst_49922__$1 = inst_50017;
var inst_49923__$1 = inst_50018;
var inst_49924 = inst_50019;
var state_50145__$1 = (function (){var statearr_50242 = state_50145;
(statearr_50242[(8)] = inst_49920__$1);

(statearr_50242[(63)] = inst_49922__$1);

(statearr_50242[(64)] = inst_49924);

(statearr_50242[(65)] = inst_49923__$1);

(statearr_50242[(22)] = inst_49921__$1);

return statearr_50242;
})();
var statearr_50243_51716 = state_50145__$1;
(statearr_50243_51716[(2)] = null);

(statearr_50243_51716[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (40))){
var inst_49664 = (state_50145[(55)]);
var inst_49670 = inst_49664.cljs$lang$protocol_mask$partition0$;
var inst_49671 = (inst_49670 & (64));
var inst_49672 = inst_49664.cljs$core$ISeq$;
var inst_49673 = (cljs.core.PROTOCOL_SENTINEL === inst_49672);
var inst_49674 = ((inst_49671) || (inst_49673));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49674)){
var statearr_50244_51720 = state_50145__$1;
(statearr_50244_51720[(1)] = (43));

} else {
var statearr_50245_51721 = state_50145__$1;
(statearr_50245_51721[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (129))){
var inst_50029 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50246_51722 = state_50145__$1;
(statearr_50246_51722[(2)] = inst_50029);

(statearr_50246_51722[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (91))){
var inst_49657 = (state_50145[(20)]);
var inst_49805 = (state_50145[(26)]);
var inst_49806 = (state_50145[(47)]);
var inst_49799 = (state_50145[(27)]);
var inst_49610 = (state_50145[(52)]);
var inst_49569 = (state_50145[(53)]);
var inst_49804 = (state_50145[(48)]);
var inst_49803 = (state_50145[(49)]);
var inst_49630 = (state_50145[(73)]);
var inst_49591 = (state_50145[(74)]);
var inst_49629 = (state_50145[(75)]);
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49564 = (state_50145[(25)]);
var inst_49604 = (state_50145[(10)]);
var inst_49686 = (state_50145[(16)]);
var inst_49651 = (state_50145[(76)]);
var inst_49800 = (state_50145[(50)]);
var inst_49601 = (state_50145[(77)]);
var inst_49592 = (state_50145[(60)]);
var inst_49664 = (state_50145[(55)]);
var inst_49796 = (state_50145[(45)]);
var inst_49598 = (state_50145[(17)]);
var inst_49802 = (state_50145[(28)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49687 = (state_50145[(12)]);
var inst_49798 = (state_50145[(29)]);
var inst_49774 = (state_50145[(46)]);
var inst_49801 = (state_50145[(51)]);
var inst_49817 = (state_50145[(2)]);
var inst_49818 = com.wsscode.pathom.trace.trace(inst_49604,inst_49817);
var inst_49819 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(inst_49604);
var inst_49820 = (function (){var res = inst_49653;
var map__49771 = inst_49796;
var p = inst_49801;
var merge_result_QMARK_ = inst_49799;
var map__49559 = inst_49591;
var key_watchers__$1 = inst_49598;
var trace_id__8599__auto__ = inst_49610;
var vec__49616 = inst_49592;
var map__49662 = inst_49686;
var first__49618 = inst_49629;
var children = inst_49592;
var G__49615 = inst_49657;
var map__49619 = inst_49651;
var response_value = inst_49805;
var processing = inst_49655;
var key = inst_49687;
var seq__49660 = inst_49665;
var key_process_timeout__$1 = inst_49569;
var key_as = inst_49804;
var vec__49659 = inst_49657;
var ast = inst_49686;
var key_process_timeout_step__$1 = inst_49564;
var provides_SINGLEQUOTE_ = inst_49803;
var msg = inst_49796;
var env__$1 = inst_49604;
var waiting__$1 = inst_49806;
var path_entity = inst_49601;
var seq__49617 = inst_49630;
var vec__49768 = inst_49774;
var key_iterations = inst_49656;
var tail = inst_49665;
var waiting_SINGLEQUOTE_ = inst_49802;
var first__49661 = inst_49664;
var error = inst_49800;
var provides = inst_49798;
return ((function (res,map__49771,p,merge_result_QMARK_,map__49559,key_watchers__$1,trace_id__8599__auto__,vec__49616,map__49662,first__49618,children,G__49615,map__49619,response_value,processing,key,seq__49660,key_process_timeout__$1,key_as,vec__49659,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,seq__49617,vec__49768,key_iterations,tail,waiting_SINGLEQUOTE_,first__49661,error,provides,inst_49657,inst_49805,inst_49806,inst_49799,inst_49610,inst_49569,inst_49804,inst_49803,inst_49630,inst_49591,inst_49629,inst_49653,inst_49656,inst_49564,inst_49604,inst_49686,inst_49651,inst_49800,inst_49601,inst_49592,inst_49664,inst_49796,inst_49598,inst_49802,inst_49665,inst_49655,inst_49687,inst_49798,inst_49774,inst_49801,inst_49817,inst_49818,inst_49819,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__49548_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__49548_SHARP_], 0));
});
;})(res,map__49771,p,merge_result_QMARK_,map__49559,key_watchers__$1,trace_id__8599__auto__,vec__49616,map__49662,first__49618,children,G__49615,map__49619,response_value,processing,key,seq__49660,key_process_timeout__$1,key_as,vec__49659,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,seq__49617,vec__49768,key_iterations,tail,waiting_SINGLEQUOTE_,first__49661,error,provides,inst_49657,inst_49805,inst_49806,inst_49799,inst_49610,inst_49569,inst_49804,inst_49803,inst_49630,inst_49591,inst_49629,inst_49653,inst_49656,inst_49564,inst_49604,inst_49686,inst_49651,inst_49800,inst_49601,inst_49592,inst_49664,inst_49796,inst_49598,inst_49802,inst_49665,inst_49655,inst_49687,inst_49798,inst_49774,inst_49801,inst_49817,inst_49818,inst_49819,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_49821 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49819,inst_49820);
var inst_49822 = com.wsscode.pathom.parser.parallel_flush_watchers(inst_49604,inst_49598,inst_49803,inst_49800);
var state_50145__$1 = (function (){var statearr_50247 = state_50145;
(statearr_50247[(78)] = inst_49822);

(statearr_50247[(79)] = inst_49818);

(statearr_50247[(80)] = inst_49821);

return statearr_50247;
})();
if(cljs.core.truth_(inst_49799)){
var statearr_50248_51729 = state_50145__$1;
(statearr_50248_51729[(1)] = (92));

} else {
var statearr_50249_51730 = state_50145__$1;
(statearr_50249_51730[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (117))){
var inst_49953 = (state_50145[(72)]);
var inst_49953__$1 = (state_50145[(2)]);
var inst_49954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49953__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_50145__$1 = (function (){var statearr_50252 = state_50145;
(statearr_50252[(72)] = inst_49953__$1);

(statearr_50252[(7)] = inst_49954);

return statearr_50252;
})();
if(cljs.core.truth_(inst_49953__$1)){
var statearr_50253_51733 = state_50145__$1;
(statearr_50253_51733[(1)] = (118));

} else {
var statearr_50254_51735 = state_50145__$1;
(statearr_50254_51735[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (108))){
var inst_50139 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50255_51736 = state_50145__$1;
(statearr_50255_51736[(2)] = inst_50139);

(statearr_50255_51736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (156))){
var inst_49920 = (state_50145[(8)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_50068 = (state_50145[(40)]);
var inst_50073 = (state_50145[(41)]);
var inst_50128 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_49922,inst_50068);
var inst_50129 = cljs.core.PersistentVector.EMPTY;
var tmp50250 = inst_49920;
var tmp50251 = inst_49923;
var inst_49920__$1 = tmp50250;
var inst_49921 = inst_50073;
var inst_49922__$1 = inst_50128;
var inst_49923__$1 = tmp50251;
var inst_49924 = inst_50129;
var state_50145__$1 = (function (){var statearr_50256 = state_50145;
(statearr_50256[(8)] = inst_49920__$1);

(statearr_50256[(63)] = inst_49922__$1);

(statearr_50256[(64)] = inst_49924);

(statearr_50256[(65)] = inst_49923__$1);

(statearr_50256[(22)] = inst_49921);

return statearr_50256;
})();
var statearr_50257_51737 = state_50145__$1;
(statearr_50257_51737[(2)] = null);

(statearr_50257_51737[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (56))){
var inst_49653 = (state_50145[(14)]);
var state_50145__$1 = state_50145;
var statearr_50258_51738 = state_50145__$1;
(statearr_50258_51738[(2)] = inst_49653);

(statearr_50258_51738[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (33))){
var state_50145__$1 = state_50145;
var statearr_50259_51743 = state_50145__$1;
(statearr_50259_51743[(2)] = false);

(statearr_50259_51743[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (13))){
var inst_49586 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49586)){
var statearr_50260_51753 = state_50145__$1;
(statearr_50260_51753[(1)] = (17));

} else {
var statearr_50261_51754 = state_50145__$1;
(statearr_50261_51754[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (22))){
var inst_49569 = (state_50145[(53)]);
var inst_49591 = (state_50145[(74)]);
var inst_49564 = (state_50145[(25)]);
var inst_49604 = (state_50145[(10)]);
var inst_49601 = (state_50145[(77)]);
var inst_49592 = (state_50145[(60)]);
var inst_49598 = (state_50145[(17)]);
var inst_49598__$1 = (state_50145[(2)]);
var inst_49599 = cljs.core.deref(entity_path_cache);
var inst_49600 = cljs.core.PersistentHashMap.EMPTY;
var inst_49601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_49599,path,inst_49600);
var inst_49602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_49569], 0));
var inst_49603 = (function (){var key_process_timeout_step__$1 = inst_49564;
var key_process_timeout__$1 = inst_49569;
var map__49559 = inst_49591;
var children = inst_49592;
var key_watchers__$1 = inst_49598__$1;
var path_entity = inst_49601__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__49559,children,key_watchers__$1,path_entity,inst_49569,inst_49591,inst_49564,inst_49604,inst_49601,inst_49592,inst_49598,inst_49598__$1,inst_49599,inst_49600,inst_49601__$1,inst_49602,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__49559,children,key_watchers__$1,path_entity,inst_49569,inst_49591,inst_49564,inst_49604,inst_49601,inst_49592,inst_49598,inst_49598__$1,inst_49599,inst_49600,inst_49601__$1,inst_49602,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__49547_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__49547_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__49559,children,key_watchers__$1,path_entity,inst_49569,inst_49591,inst_49564,inst_49604,inst_49601,inst_49592,inst_49598,inst_49598__$1,inst_49599,inst_49600,inst_49601__$1,inst_49602,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__49559,children,key_watchers__$1,path_entity,inst_49569,inst_49591,inst_49564,inst_49604,inst_49601,inst_49592,inst_49598,inst_49598__$1,inst_49599,inst_49600,inst_49601__$1,inst_49602,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_49604__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_49602,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_49603);
var inst_49605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49604__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_50145__$1 = (function (){var statearr_50262 = state_50145;
(statearr_50262[(10)] = inst_49604__$1);

(statearr_50262[(77)] = inst_49601__$1);

(statearr_50262[(17)] = inst_49598__$1);

return statearr_50262;
})();
if(cljs.core.truth_(inst_49605)){
var statearr_50263_51761 = state_50145__$1;
(statearr_50263_51761[(1)] = (23));

} else {
var statearr_50264_51762 = state_50145__$1;
(statearr_50264_51762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (90))){
var inst_49812 = (state_50145[(30)]);
var state_50145__$1 = state_50145;
var statearr_50265_51764 = state_50145__$1;
(statearr_50265_51764[(2)] = inst_49812);

(statearr_50265_51764[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (109))){
var inst_49931 = (state_50145[(68)]);
var inst_49937 = inst_49931.cljs$lang$protocol_mask$partition0$;
var inst_49938 = (inst_49937 & (64));
var inst_49939 = inst_49931.cljs$core$ISeq$;
var inst_49940 = (cljs.core.PROTOCOL_SENTINEL === inst_49939);
var inst_49941 = ((inst_49938) || (inst_49940));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49941)){
var statearr_50266_51765 = state_50145__$1;
(statearr_50266_51765[(1)] = (112));

} else {
var statearr_50267_51766 = state_50145__$1;
(statearr_50267_51766[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (143))){
var inst_49920 = (state_50145[(8)]);
var state_50145__$1 = state_50145;
var statearr_50268_51767 = state_50145__$1;
(statearr_50268_51767[(2)] = inst_49920);

(statearr_50268_51767[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (36))){
var inst_49629 = (state_50145[(75)]);
var state_50145__$1 = state_50145;
var statearr_50269_51768 = state_50145__$1;
(statearr_50269_51768[(2)] = inst_49629);

(statearr_50269_51768[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (41))){
var state_50145__$1 = state_50145;
var statearr_50270_51769 = state_50145__$1;
(statearr_50270_51769[(2)] = false);

(statearr_50270_51769[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (118))){
var inst_49953 = (state_50145[(72)]);
var inst_49954 = (state_50145[(7)]);
var inst_49604 = (state_50145[(10)]);
var inst_49923 = (state_50145[(65)]);
var inst_49956 = com.wsscode.pathom.parser.ast__GT_out_key(inst_49953);
var inst_49957 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49958 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_49954];
var inst_49959 = cljs.core.PersistentHashMap.fromArrays(inst_49957,inst_49958);
var inst_49960 = com.wsscode.pathom.trace.trace(inst_49604,inst_49959);
var inst_49961 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_49923,inst_49954,(0));
var inst_49962 = (max_key_iterations - (1));
var inst_49963 = (inst_49961 > inst_49962);
var state_50145__$1 = (function (){var statearr_50273 = state_50145;
(statearr_50273[(9)] = inst_49956);

(statearr_50273[(81)] = inst_49960);

return statearr_50273;
})();
if(cljs.core.truth_(inst_49963)){
var statearr_50274_51771 = state_50145__$1;
(statearr_50274_51771[(1)] = (121));

} else {
var statearr_50275_51772 = state_50145__$1;
(statearr_50275_51772[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (150))){
var state_50145__$1 = state_50145;
var statearr_50276_51773 = state_50145__$1;
(statearr_50276_51773[(2)] = false);

(statearr_50276_51773[(1)] = (151));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (162))){
var inst_49953 = (state_50145[(72)]);
var inst_49954 = (state_50145[(7)]);
var inst_50063 = (state_50145[(31)]);
var inst_49932 = (state_50145[(70)]);
var inst_50069 = (state_50145[(32)]);
var inst_50070 = (state_50145[(35)]);
var inst_49920 = (state_50145[(8)]);
var inst_49569 = (state_50145[(53)]);
var inst_50071 = (state_50145[(36)]);
var inst_49591 = (state_50145[(74)]);
var inst_50066 = (state_50145[(37)]);
var inst_50072 = (state_50145[(38)]);
var inst_49564 = (state_50145[(25)]);
var inst_49604 = (state_50145[(10)]);
var inst_49918 = (state_50145[(59)]);
var inst_49922 = (state_50145[(63)]);
var inst_49897 = (state_50145[(82)]);
var inst_50067 = (state_50145[(39)]);
var inst_49601 = (state_50145[(77)]);
var inst_49592 = (state_50145[(60)]);
var inst_49896 = (state_50145[(67)]);
var inst_49924 = (state_50145[(64)]);
var inst_49923 = (state_50145[(65)]);
var inst_49931 = (state_50145[(68)]);
var inst_49598 = (state_50145[(17)]);
var inst_50065 = (state_50145[(33)]);
var inst_50041 = (state_50145[(34)]);
var inst_50068 = (state_50145[(40)]);
var inst_50073 = (state_50145[(41)]);
var inst_50104 = cljs.core.keys(inst_49920);
var inst_50105 = cljs.core.set(inst_50104);
var inst_50106 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_50105,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_50107 = cljs.core.vec(inst_50070);
var inst_50108 = com.wsscode.pathom.parser.focus_subquery(tx,inst_50107);
var inst_50109 = com.wsscode.pathom.parser.query__GT_ast(inst_50108);
var inst_50110 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_50109);
var inst_50111 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_50106,inst_50110);
var inst_50112 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_50111);
var inst_50113 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_50114 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_50112);
var inst_50115 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_50114];
var inst_50116 = cljs.core.PersistentHashMap.fromArrays(inst_50113,inst_50115);
var inst_50117 = com.wsscode.pathom.trace.trace(inst_49604,inst_50116);
var inst_50118 = cljs.core.PersistentHashSet.EMPTY;
var inst_50119 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_50070);
var inst_50120 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_50118,inst_50119,inst_50073);
var inst_50122 = (function (){var res = inst_49920;
var map__50038 = inst_50063;
var map__49929 = inst_49953;
var p = inst_50068;
var seq__49927 = inst_49932;
var merge_result_QMARK_ = inst_50066;
var map__49559 = inst_49591;
var key_watchers__$1 = inst_49598;
var vec__50035 = inst_50041;
var first__49885 = inst_49896;
var children = inst_49592;
var vec__49883 = inst_49592;
var G__49882 = inst_49924;
var response_value = inst_50072;
var processing = inst_49922;
var key = inst_49954;
var key_process_timeout__$1 = inst_49569;
var next_children = inst_50112;
var key_as = inst_50071;
var vec__49926 = inst_49924;
var map__49886 = inst_49918;
var ast = inst_49953;
var key_process_timeout_step__$1 = inst_49564;
var provides_SINGLEQUOTE_ = inst_50070;
var msg = inst_50063;
var env__$1 = inst_49604;
var seq__49884 = inst_49897;
var waiting__$1 = inst_50073;
var first__49928 = inst_49931;
var path_entity = inst_49601;
var key_iterations = inst_49923;
var tail = inst_49932;
var waiting_SINGLEQUOTE_ = inst_50069;
var error = inst_50067;
var provides = inst_50065;
return ((function (res,map__50038,map__49929,p,seq__49927,merge_result_QMARK_,map__49559,key_watchers__$1,vec__50035,first__49885,children,vec__49883,G__49882,response_value,processing,key,key_process_timeout__$1,next_children,key_as,vec__49926,map__49886,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,seq__49884,waiting__$1,first__49928,path_entity,key_iterations,tail,waiting_SINGLEQUOTE_,error,provides,inst_49953,inst_49954,inst_50063,inst_49932,inst_50069,inst_50070,inst_49920,inst_49569,inst_50071,inst_49591,inst_50066,inst_50072,inst_49564,inst_49604,inst_49918,inst_49922,inst_49897,inst_50067,inst_49601,inst_49592,inst_49896,inst_49924,inst_49923,inst_49931,inst_49598,inst_50065,inst_50041,inst_50068,inst_50073,inst_50104,inst_50105,inst_50106,inst_50107,inst_50108,inst_50109,inst_50110,inst_50111,inst_50112,inst_50113,inst_50114,inst_50115,inst_50116,inst_50117,inst_50118,inst_50119,inst_50120,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (iter,p__50121){
var map__50277 = p__50121;
var map__50277__$1 = (((((!((map__50277 == null))))?(((((map__50277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50277):map__50277);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(iter,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
;})(res,map__50038,map__49929,p,seq__49927,merge_result_QMARK_,map__49559,key_watchers__$1,vec__50035,first__49885,children,vec__49883,G__49882,response_value,processing,key,key_process_timeout__$1,next_children,key_as,vec__49926,map__49886,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,seq__49884,waiting__$1,first__49928,path_entity,key_iterations,tail,waiting_SINGLEQUOTE_,error,provides,inst_49953,inst_49954,inst_50063,inst_49932,inst_50069,inst_50070,inst_49920,inst_49569,inst_50071,inst_49591,inst_50066,inst_50072,inst_49564,inst_49604,inst_49918,inst_49922,inst_49897,inst_50067,inst_49601,inst_49592,inst_49896,inst_49924,inst_49923,inst_49931,inst_49598,inst_50065,inst_50041,inst_50068,inst_50073,inst_50104,inst_50105,inst_50106,inst_50107,inst_50108,inst_50109,inst_50110,inst_50111,inst_50112,inst_50113,inst_50114,inst_50115,inst_50116,inst_50117,inst_50118,inst_50119,inst_50120,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_50123 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_50122,inst_49923,inst_50112);
var tmp50271 = inst_49920;
var tmp50272 = inst_49922;
var inst_49920__$1 = tmp50271;
var inst_49921 = inst_50120;
var inst_49922__$1 = tmp50272;
var inst_49923__$1 = inst_50123;
var inst_49924__$1 = inst_50112;
var state_50145__$1 = (function (){var statearr_50279 = state_50145;
(statearr_50279[(83)] = inst_50117);

(statearr_50279[(8)] = inst_49920__$1);

(statearr_50279[(63)] = inst_49922__$1);

(statearr_50279[(64)] = inst_49924__$1);

(statearr_50279[(65)] = inst_49923__$1);

(statearr_50279[(22)] = inst_49921);

return statearr_50279;
})();
var statearr_50280_51798 = state_50145__$1;
(statearr_50280_51798[(2)] = null);

(statearr_50280_51798[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (89))){
var inst_49812 = (state_50145[(30)]);
var inst_49802 = (state_50145[(28)]);
var inst_49814 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49812,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_49802);
var state_50145__$1 = state_50145;
var statearr_50281_51800 = state_50145__$1;
(statearr_50281_51800[(2)] = inst_49814);

(statearr_50281_51800[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (100))){
var inst_49913 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49913)){
var statearr_50282_51802 = state_50145__$1;
(statearr_50282_51802[(1)] = (104));

} else {
var statearr_50283_51803 = state_50145__$1;
(statearr_50283_51803[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (131))){
var inst_49987 = (state_50145[(23)]);
var state_50145__$1 = state_50145;
var statearr_50284_51805 = state_50145__$1;
(statearr_50284_51805[(2)] = inst_49987);

(statearr_50284_51805[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (122))){
var inst_49920 = (state_50145[(8)]);
var inst_49956 = (state_50145[(9)]);
var inst_49979 = cljs.core.contains_QMARK_(inst_49920,inst_49956);
var state_50145__$1 = state_50145;
if(inst_49979){
var statearr_50285_51808 = state_50145__$1;
(statearr_50285_51808[(1)] = (127));

} else {
var statearr_50286_51809 = state_50145__$1;
(statearr_50286_51809[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (43))){
var state_50145__$1 = state_50145;
var statearr_50287_51810 = state_50145__$1;
(statearr_50287_51810[(2)] = true);

(statearr_50287_51810[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (61))){
var inst_49687 = (state_50145[(12)]);
var inst_49654 = (state_50145[(13)]);
var inst_49722 = cljs.core.contains_QMARK_(inst_49654,inst_49687);
var state_50145__$1 = state_50145;
var statearr_50288_51812 = state_50145__$1;
(statearr_50288_51812[(2)] = inst_49722);

(statearr_50288_51812[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (29))){
var inst_49629 = (state_50145[(75)]);
var inst_49635 = inst_49629.cljs$lang$protocol_mask$partition0$;
var inst_49636 = (inst_49635 & (64));
var inst_49637 = inst_49629.cljs$core$ISeq$;
var inst_49638 = (cljs.core.PROTOCOL_SENTINEL === inst_49637);
var inst_49639 = ((inst_49636) || (inst_49638));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49639)){
var statearr_50289_51813 = state_50145__$1;
(statearr_50289_51813[(1)] = (32));

} else {
var statearr_50290_51814 = state_50145__$1;
(statearr_50290_51814[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (151))){
var inst_50055 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50293_51815 = state_50145__$1;
(statearr_50293_51815[(2)] = inst_50055);

(statearr_50293_51815[(1)] = (148));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (44))){
var state_50145__$1 = state_50145;
var statearr_50294_51818 = state_50145__$1;
(statearr_50294_51818[(2)] = false);

(statearr_50294_51818[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (93))){
var inst_49657 = (state_50145[(20)]);
var inst_49805 = (state_50145[(26)]);
var inst_49806 = (state_50145[(47)]);
var inst_49799 = (state_50145[(27)]);
var inst_49610 = (state_50145[(52)]);
var inst_49569 = (state_50145[(53)]);
var inst_49804 = (state_50145[(48)]);
var inst_49803 = (state_50145[(49)]);
var inst_49630 = (state_50145[(73)]);
var inst_49591 = (state_50145[(74)]);
var inst_49629 = (state_50145[(75)]);
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49564 = (state_50145[(25)]);
var inst_49604 = (state_50145[(10)]);
var inst_49686 = (state_50145[(16)]);
var inst_49651 = (state_50145[(76)]);
var inst_49800 = (state_50145[(50)]);
var inst_49601 = (state_50145[(77)]);
var inst_49592 = (state_50145[(60)]);
var inst_49664 = (state_50145[(55)]);
var inst_49796 = (state_50145[(45)]);
var inst_49598 = (state_50145[(17)]);
var inst_49802 = (state_50145[(28)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49687 = (state_50145[(12)]);
var inst_49798 = (state_50145[(29)]);
var inst_49774 = (state_50145[(46)]);
var inst_49801 = (state_50145[(51)]);
var inst_49837 = cljs.core.keys(inst_49653);
var inst_49838 = cljs.core.set(inst_49837);
var inst_49839 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_49838,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_49840 = cljs.core.vec(inst_49803);
var inst_49841 = com.wsscode.pathom.parser.focus_subquery(tx,inst_49840);
var inst_49842 = com.wsscode.pathom.parser.query__GT_ast(inst_49841);
var inst_49843 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_49842);
var inst_49844 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_49839,inst_49843);
var inst_49845 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_49844);
var inst_49846 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_49847 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_49845);
var inst_49848 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_49847];
var inst_49849 = cljs.core.PersistentHashMap.fromArrays(inst_49846,inst_49848);
var inst_49850 = com.wsscode.pathom.trace.trace(inst_49604,inst_49849);
var inst_49851 = cljs.core.PersistentHashSet.EMPTY;
var inst_49852 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_49803);
var inst_49853 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_49851,inst_49852,inst_49806);
var inst_49855 = (function (){var res = inst_49653;
var map__49771 = inst_49796;
var p = inst_49801;
var merge_result_QMARK_ = inst_49799;
var map__49559 = inst_49591;
var key_watchers__$1 = inst_49598;
var trace_id__8599__auto__ = inst_49610;
var vec__49616 = inst_49592;
var map__49662 = inst_49686;
var first__49618 = inst_49629;
var children = inst_49592;
var G__49615 = inst_49657;
var map__49619 = inst_49651;
var response_value = inst_49805;
var processing = inst_49655;
var key = inst_49687;
var seq__49660 = inst_49665;
var key_process_timeout__$1 = inst_49569;
var next_children = inst_49845;
var key_as = inst_49804;
var vec__49659 = inst_49657;
var ast = inst_49686;
var key_process_timeout_step__$1 = inst_49564;
var provides_SINGLEQUOTE_ = inst_49803;
var msg = inst_49796;
var env__$1 = inst_49604;
var waiting__$1 = inst_49806;
var path_entity = inst_49601;
var seq__49617 = inst_49630;
var vec__49768 = inst_49774;
var key_iterations = inst_49656;
var tail = inst_49665;
var waiting_SINGLEQUOTE_ = inst_49802;
var first__49661 = inst_49664;
var error = inst_49800;
var provides = inst_49798;
return ((function (res,map__49771,p,merge_result_QMARK_,map__49559,key_watchers__$1,trace_id__8599__auto__,vec__49616,map__49662,first__49618,children,G__49615,map__49619,response_value,processing,key,seq__49660,key_process_timeout__$1,next_children,key_as,vec__49659,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,seq__49617,vec__49768,key_iterations,tail,waiting_SINGLEQUOTE_,first__49661,error,provides,inst_49657,inst_49805,inst_49806,inst_49799,inst_49610,inst_49569,inst_49804,inst_49803,inst_49630,inst_49591,inst_49629,inst_49653,inst_49656,inst_49564,inst_49604,inst_49686,inst_49651,inst_49800,inst_49601,inst_49592,inst_49664,inst_49796,inst_49598,inst_49802,inst_49665,inst_49655,inst_49687,inst_49798,inst_49774,inst_49801,inst_49837,inst_49838,inst_49839,inst_49840,inst_49841,inst_49842,inst_49843,inst_49844,inst_49845,inst_49846,inst_49847,inst_49848,inst_49849,inst_49850,inst_49851,inst_49852,inst_49853,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (iter,p__49854){
var map__50295 = p__49854;
var map__50295__$1 = (((((!((map__50295 == null))))?(((((map__50295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50295):map__50295);
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(iter,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
;})(res,map__49771,p,merge_result_QMARK_,map__49559,key_watchers__$1,trace_id__8599__auto__,vec__49616,map__49662,first__49618,children,G__49615,map__49619,response_value,processing,key,seq__49660,key_process_timeout__$1,next_children,key_as,vec__49659,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,waiting__$1,path_entity,seq__49617,vec__49768,key_iterations,tail,waiting_SINGLEQUOTE_,first__49661,error,provides,inst_49657,inst_49805,inst_49806,inst_49799,inst_49610,inst_49569,inst_49804,inst_49803,inst_49630,inst_49591,inst_49629,inst_49653,inst_49656,inst_49564,inst_49604,inst_49686,inst_49651,inst_49800,inst_49601,inst_49592,inst_49664,inst_49796,inst_49598,inst_49802,inst_49665,inst_49655,inst_49687,inst_49798,inst_49774,inst_49801,inst_49837,inst_49838,inst_49839,inst_49840,inst_49841,inst_49842,inst_49843,inst_49844,inst_49845,inst_49846,inst_49847,inst_49848,inst_49849,inst_49850,inst_49851,inst_49852,inst_49853,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_49856 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_49855,inst_49656,inst_49845);
var tmp50291 = inst_49653;
var tmp50292 = inst_49655;
var inst_49653__$1 = tmp50291;
var inst_49654 = inst_49853;
var inst_49655__$1 = tmp50292;
var inst_49656__$1 = inst_49856;
var inst_49657__$1 = inst_49845;
var state_50145__$1 = (function (){var statearr_50297 = state_50145;
(statearr_50297[(20)] = inst_49657__$1);

(statearr_50297[(84)] = inst_49850);

(statearr_50297[(14)] = inst_49653__$1);

(statearr_50297[(15)] = inst_49656__$1);

(statearr_50297[(19)] = inst_49655__$1);

(statearr_50297[(13)] = inst_49654);

return statearr_50297;
})();
var statearr_50298_51848 = state_50145__$1;
(statearr_50298_51848[(2)] = null);

(statearr_50298_51848[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (6))){
var inst_49562 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_50145__$1 = state_50145;
var statearr_50299_51850 = state_50145__$1;
(statearr_50299_51850[(2)] = inst_49562);

(statearr_50299_51850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (111))){
var inst_49948 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49948)){
var statearr_50300_51852 = state_50145__$1;
(statearr_50300_51852[(1)] = (115));

} else {
var statearr_50301_51853 = state_50145__$1;
(statearr_50301_51853[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (28))){
var inst_49629 = (state_50145[(75)]);
var inst_49592 = (state_50145[(60)]);
var inst_49625 = (state_50145[(2)]);
var inst_49626 = cljs.core.PersistentHashSet.EMPTY;
var inst_49627 = cljs.core.PersistentHashMap.EMPTY;
var inst_49628 = cljs.core.seq(inst_49592);
var inst_49629__$1 = cljs.core.first(inst_49628);
var inst_49630 = cljs.core.next(inst_49628);
var inst_49632 = (inst_49629__$1 == null);
var inst_49633 = cljs.core.not(inst_49632);
var state_50145__$1 = (function (){var statearr_50305 = state_50145;
(statearr_50305[(85)] = inst_49626);

(statearr_50305[(73)] = inst_49630);

(statearr_50305[(75)] = inst_49629__$1);

(statearr_50305[(86)] = inst_49627);

(statearr_50305[(87)] = inst_49625);

return statearr_50305;
})();
if(inst_49633){
var statearr_50306_51855 = state_50145__$1;
(statearr_50306_51855[(1)] = (29));

} else {
var statearr_50307_51856 = state_50145__$1;
(statearr_50307_51856[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (134))){
var inst_49954 = (state_50145[(7)]);
var inst_49921 = (state_50145[(22)]);
var inst_50002 = cljs.core.contains_QMARK_(inst_49921,inst_49954);
var state_50145__$1 = state_50145;
if(inst_50002){
var statearr_50308_51858 = state_50145__$1;
(statearr_50308_51858[(1)] = (136));

} else {
var statearr_50309_51859 = state_50145__$1;
(statearr_50309_51859[(1)] = (137));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (64))){
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49604 = (state_50145[(10)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49687 = (state_50145[(12)]);
var inst_49654 = (state_50145[(13)]);
var inst_49727 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49728 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_49687];
var inst_49729 = cljs.core.PersistentHashMap.fromArrays(inst_49727,inst_49728);
var inst_49730 = com.wsscode.pathom.trace.trace(inst_49604,inst_49729);
var inst_49731 = com.wsscode.pathom.parser.watch_pending_key(inst_49604,inst_49687);
var inst_49732 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49655,inst_49731);
var tmp50302 = inst_49653;
var tmp50303 = inst_49656;
var tmp50304 = inst_49654;
var inst_49653__$1 = tmp50302;
var inst_49654__$1 = tmp50304;
var inst_49655__$1 = inst_49732;
var inst_49656__$1 = tmp50303;
var inst_49657 = inst_49665;
var state_50145__$1 = (function (){var statearr_50310 = state_50145;
(statearr_50310[(20)] = inst_49657);

(statearr_50310[(88)] = inst_49730);

(statearr_50310[(14)] = inst_49653__$1);

(statearr_50310[(15)] = inst_49656__$1);

(statearr_50310[(19)] = inst_49655__$1);

(statearr_50310[(13)] = inst_49654__$1);

return statearr_50310;
})();
var statearr_50311_51863 = state_50145__$1;
(statearr_50311_51863[(2)] = null);

(statearr_50311_51863[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (155))){
var inst_50069 = (state_50145[(32)]);
var inst_50066 = (state_50145[(37)]);
var inst_50072 = (state_50145[(38)]);
var inst_50065 = (state_50145[(33)]);
var inst_50076 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_50077 = cljs.core.boolean$(inst_50066);
var inst_50078 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_50065,inst_50072,inst_50077];
var inst_50079 = cljs.core.PersistentHashMap.fromArrays(inst_50076,inst_50078);
var state_50145__$1 = (function (){var statearr_50312 = state_50145;
(statearr_50312[(69)] = inst_50079);

return statearr_50312;
})();
if(cljs.core.truth_(inst_50069)){
var statearr_50313_51864 = state_50145__$1;
(statearr_50313_51864[(1)] = (158));

} else {
var statearr_50314_51865 = state_50145__$1;
(statearr_50314_51865[(1)] = (159));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (103))){
var inst_49910 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50315_51868 = state_50145__$1;
(statearr_50315_51868[(2)] = inst_49910);

(statearr_50315_51868[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (51))){
var inst_49870 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50316_51869 = state_50145__$1;
(statearr_50316_51869[(2)] = inst_49870);

(statearr_50316_51869[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (25))){
var inst_50141 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50317_51876 = state_50145__$1;
(statearr_50317_51876[(2)] = inst_50141);


cljs.core.async.impl.ioc_helpers.process_exception(state_50145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (34))){
var inst_49643 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50318_51887 = state_50145__$1;
(statearr_50318_51887[(2)] = inst_49643);

(statearr_50318_51887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (146))){
var inst_50042 = (state_50145[(24)]);
var inst_50047 = inst_50042.cljs$lang$protocol_mask$partition0$;
var inst_50048 = (inst_50047 & (64));
var inst_50049 = inst_50042.cljs$core$ISeq$;
var inst_50050 = (cljs.core.PROTOCOL_SENTINEL === inst_50049);
var inst_50051 = ((inst_50048) || (inst_50050));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_50051)){
var statearr_50319_51893 = state_50145__$1;
(statearr_50319_51893[(1)] = (149));

} else {
var statearr_50320_51894 = state_50145__$1;
(statearr_50320_51894[(1)] = (150));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (125))){
var inst_49920 = (state_50145[(8)]);
var state_50145__$1 = state_50145;
var statearr_50321_51895 = state_50145__$1;
(statearr_50321_51895[(2)] = inst_49920);

(statearr_50321_51895[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (148))){
var inst_50058 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_50058)){
var statearr_50322_51897 = state_50145__$1;
(statearr_50322_51897[(1)] = (152));

} else {
var statearr_50323_51898 = state_50145__$1;
(statearr_50323_51898[(1)] = (153));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (17))){
var inst_49570 = (state_50145[(89)]);
var inst_49588 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49570);
var state_50145__$1 = state_50145;
var statearr_50324_51899 = state_50145__$1;
(statearr_50324_51899[(2)] = inst_49588);

(statearr_50324_51899[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (3))){
var inst_49555 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50325_51901 = state_50145__$1;
(statearr_50325_51901[(2)] = inst_49555);


cljs.core.async.impl.ioc_helpers.process_exception(state_50145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (12))){
var state_50145__$1 = state_50145;
var statearr_50326_51902 = state_50145__$1;
(statearr_50326_51902[(2)] = false);

(statearr_50326_51902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (152))){
var inst_50042 = (state_50145[(24)]);
var inst_50060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50042);
var state_50145__$1 = state_50145;
var statearr_50327_51903 = state_50145__$1;
(statearr_50327_51903[(2)] = inst_50060);

(statearr_50327_51903[(1)] = (154));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (2))){
var inst_50143 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50145__$1,inst_50143);
} else {
if((state_val_50146 === (66))){
var inst_49760 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50328_51905 = state_50145__$1;
(statearr_50328_51905[(2)] = inst_49760);

(statearr_50328_51905[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (142))){
var inst_49922 = (state_50145[(63)]);
var inst_50039 = cljs.core.vec(inst_49922);
var state_50145__$1 = state_50145;
return cljs.core.async.ioc_alts_BANG_(state_50145__$1,(145),inst_50039);
} else {
if((state_val_50146 === (107))){
var inst_49924 = (state_50145[(64)]);
var inst_49931 = (state_50145[(68)]);
var inst_49930 = cljs.core.seq(inst_49924);
var inst_49931__$1 = cljs.core.first(inst_49930);
var inst_49932 = cljs.core.next(inst_49930);
var inst_49934 = (inst_49931__$1 == null);
var inst_49935 = cljs.core.not(inst_49934);
var state_50145__$1 = (function (){var statearr_50329 = state_50145;
(statearr_50329[(70)] = inst_49932);

(statearr_50329[(68)] = inst_49931__$1);

return statearr_50329;
})();
if(inst_49935){
var statearr_50330_51909 = state_50145__$1;
(statearr_50330_51909[(1)] = (109));

} else {
var statearr_50331_51910 = state_50145__$1;
(statearr_50331_51910[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (23))){
var inst_49569 = (state_50145[(53)]);
var inst_49604 = (state_50145[(10)]);
var inst_49607 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_49608 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_49569];
var inst_49609 = cljs.core.PersistentHashMap.fromArrays(inst_49607,inst_49608);
var inst_49610 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_49604,inst_49609);
var inst_49620 = cljs.core.PersistentHashMap.EMPTY;
var state_50145__$1 = (function (){var statearr_50332 = state_50145;
(statearr_50332[(52)] = inst_49610);

(statearr_50332[(90)] = inst_49620);

return statearr_50332;
})();
if(cljs.core.truth_(waiting)){
var statearr_50333_51913 = state_50145__$1;
(statearr_50333_51913[(1)] = (26));

} else {
var statearr_50334_51914 = state_50145__$1;
(statearr_50334_51914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (47))){
var inst_49664 = (state_50145[(55)]);
var state_50145__$1 = state_50145;
var statearr_50335_51916 = state_50145__$1;
(statearr_50335_51916[(2)] = inst_49664);

(statearr_50335_51916[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (158))){
var inst_50069 = (state_50145[(32)]);
var inst_50079 = (state_50145[(69)]);
var inst_50081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_50079,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_50069);
var state_50145__$1 = state_50145;
var statearr_50340_51918 = state_50145__$1;
(statearr_50340_51918[(2)] = inst_50081);

(statearr_50340_51918[(1)] = (160));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (35))){
var inst_49629 = (state_50145[(75)]);
var inst_49648 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49629);
var state_50145__$1 = state_50145;
var statearr_50341_51920 = state_50145__$1;
(statearr_50341_51920[(2)] = inst_49648);

(statearr_50341_51920[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (127))){
var inst_49954 = (state_50145[(7)]);
var inst_49932 = (state_50145[(70)]);
var inst_49920 = (state_50145[(8)]);
var inst_49604 = (state_50145[(10)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_49921 = (state_50145[(22)]);
var inst_49981 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49982 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_49954];
var inst_49983 = cljs.core.PersistentHashMap.fromArrays(inst_49981,inst_49982);
var inst_49984 = com.wsscode.pathom.trace.trace(inst_49604,inst_49983);
var tmp50336 = inst_49920;
var tmp50337 = inst_49922;
var tmp50338 = inst_49923;
var tmp50339 = inst_49921;
var inst_49920__$1 = tmp50336;
var inst_49921__$1 = tmp50339;
var inst_49922__$1 = tmp50337;
var inst_49923__$1 = tmp50338;
var inst_49924 = inst_49932;
var state_50145__$1 = (function (){var statearr_50342 = state_50145;
(statearr_50342[(91)] = inst_49984);

(statearr_50342[(8)] = inst_49920__$1);

(statearr_50342[(63)] = inst_49922__$1);

(statearr_50342[(64)] = inst_49924);

(statearr_50342[(65)] = inst_49923__$1);

(statearr_50342[(22)] = inst_49921__$1);

return statearr_50342;
})();
var statearr_50343_51923 = state_50145__$1;
(statearr_50343_51923[(2)] = null);

(statearr_50343_51923[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (82))){
var inst_49788 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50344_51924 = state_50145__$1;
(statearr_50344_51924[(2)] = inst_49788);

(statearr_50344_51924[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (76))){
var inst_49775 = (state_50145[(56)]);
var inst_49774 = (state_50145[(46)]);
var inst_49774__$1 = (state_50145[(2)]);
var inst_49775__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49774__$1,(0),null);
var inst_49777 = (inst_49775__$1 == null);
var inst_49778 = cljs.core.not(inst_49777);
var state_50145__$1 = (function (){var statearr_50345 = state_50145;
(statearr_50345[(56)] = inst_49775__$1);

(statearr_50345[(46)] = inst_49774__$1);

return statearr_50345;
})();
if(inst_49778){
var statearr_50346_51925 = state_50145__$1;
(statearr_50346_51925[(1)] = (77));

} else {
var statearr_50347_51926 = state_50145__$1;
(statearr_50347_51926[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (97))){
var inst_49592 = (state_50145[(60)]);
var inst_49896 = (state_50145[(67)]);
var inst_49892 = (state_50145[(2)]);
var inst_49893 = cljs.core.PersistentHashSet.EMPTY;
var inst_49894 = cljs.core.PersistentHashMap.EMPTY;
var inst_49895 = cljs.core.seq(inst_49592);
var inst_49896__$1 = cljs.core.first(inst_49895);
var inst_49897 = cljs.core.next(inst_49895);
var inst_49899 = (inst_49896__$1 == null);
var inst_49900 = cljs.core.not(inst_49899);
var state_50145__$1 = (function (){var statearr_50351 = state_50145;
(statearr_50351[(57)] = inst_49894);

(statearr_50351[(58)] = inst_49893);

(statearr_50351[(82)] = inst_49897);

(statearr_50351[(67)] = inst_49896__$1);

(statearr_50351[(61)] = inst_49892);

return statearr_50351;
})();
if(inst_49900){
var statearr_50352_51927 = state_50145__$1;
(statearr_50352_51927[(1)] = (98));

} else {
var statearr_50353_51928 = state_50145__$1;
(statearr_50353_51928[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (19))){
var inst_49591 = (state_50145[(74)]);
var inst_49591__$1 = (state_50145[(2)]);
var inst_49592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_50145__$1 = (function (){var statearr_50354 = state_50145;
(statearr_50354[(74)] = inst_49591__$1);

(statearr_50354[(60)] = inst_49592);

return statearr_50354;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_50355_51929 = state_50145__$1;
(statearr_50355_51929[(1)] = (20));

} else {
var statearr_50356_51930 = state_50145__$1;
(statearr_50356_51930[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (57))){
var inst_49656 = (state_50145[(15)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49654 = (state_50145[(13)]);
var inst_49709 = (state_50145[(2)]);
var tmp50348 = inst_49656;
var tmp50349 = inst_49655;
var tmp50350 = inst_49654;
var inst_49653 = inst_49709;
var inst_49654__$1 = tmp50350;
var inst_49655__$1 = tmp50349;
var inst_49656__$1 = tmp50348;
var inst_49657 = inst_49665;
var state_50145__$1 = (function (){var statearr_50357 = state_50145;
(statearr_50357[(20)] = inst_49657);

(statearr_50357[(14)] = inst_49653);

(statearr_50357[(15)] = inst_49656__$1);

(statearr_50357[(19)] = inst_49655__$1);

(statearr_50357[(13)] = inst_49654__$1);

return statearr_50357;
})();
var statearr_50358_51931 = state_50145__$1;
(statearr_50358_51931[(2)] = null);

(statearr_50358_51931[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (68))){
var state_50145__$1 = state_50145;
var statearr_50359_51932 = state_50145__$1;
(statearr_50359_51932[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (11))){
var inst_49570 = (state_50145[(89)]);
var inst_49575 = inst_49570.cljs$lang$protocol_mask$partition0$;
var inst_49576 = (inst_49575 & (64));
var inst_49577 = inst_49570.cljs$core$ISeq$;
var inst_49578 = (cljs.core.PROTOCOL_SENTINEL === inst_49577);
var inst_49579 = ((inst_49576) || (inst_49578));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49579)){
var statearr_50361_51934 = state_50145__$1;
(statearr_50361_51934[(1)] = (14));

} else {
var statearr_50362_51935 = state_50145__$1;
(statearr_50362_51935[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (115))){
var inst_49931 = (state_50145[(68)]);
var inst_49950 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49931);
var state_50145__$1 = state_50145;
var statearr_50363_51939 = state_50145__$1;
(statearr_50363_51939[(2)] = inst_49950);

(statearr_50363_51939[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (9))){
var state_50145__$1 = state_50145;
var statearr_50364_51940 = state_50145__$1;
(statearr_50364_51940[(2)] = null);

(statearr_50364_51940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (145))){
var inst_50042 = (state_50145[(24)]);
var inst_50041 = (state_50145[(34)]);
var inst_50041__$1 = (state_50145[(2)]);
var inst_50042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50041__$1,(0),null);
var inst_50044 = (inst_50042__$1 == null);
var inst_50045 = cljs.core.not(inst_50044);
var state_50145__$1 = (function (){var statearr_50365 = state_50145;
(statearr_50365[(24)] = inst_50042__$1);

(statearr_50365[(34)] = inst_50041__$1);

return statearr_50365;
})();
if(inst_50045){
var statearr_50366_51941 = state_50145__$1;
(statearr_50366_51941[(1)] = (146));

} else {
var statearr_50367_51942 = state_50145__$1;
(statearr_50367_51942[(1)] = (147));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (5))){
var state_50145__$1 = state_50145;
var statearr_50368_51943 = state_50145__$1;
(statearr_50368_51943[(2)] = key_process_timeout_step);

(statearr_50368_51943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (112))){
var state_50145__$1 = state_50145;
var statearr_50369_51945 = state_50145__$1;
(statearr_50369_51945[(2)] = true);

(statearr_50369_51945[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (83))){
var inst_49775 = (state_50145[(56)]);
var inst_49793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49775);
var state_50145__$1 = state_50145;
var statearr_50370_51946 = state_50145__$1;
(statearr_50370_51946[(2)] = inst_49793);

(statearr_50370_51946[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (138))){
var inst_50025 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50371_51947 = state_50145__$1;
(statearr_50371_51947[(2)] = inst_50025);

(statearr_50371_51947[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (14))){
var state_50145__$1 = state_50145;
var statearr_50372_51948 = state_50145__$1;
(statearr_50372_51948[(2)] = true);

(statearr_50372_51948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (45))){
var inst_49678 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50373_51949 = state_50145__$1;
(statearr_50373_51949[(2)] = inst_49678);

(statearr_50373_51949[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (53))){
var inst_49653 = (state_50145[(14)]);
var inst_49689 = (state_50145[(44)]);
var inst_49712 = cljs.core.contains_QMARK_(inst_49653,inst_49689);
var state_50145__$1 = state_50145;
if(inst_49712){
var statearr_50374_51950 = state_50145__$1;
(statearr_50374_51950[(1)] = (58));

} else {
var statearr_50375_51951 = state_50145__$1;
(statearr_50375_51951[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (78))){
var state_50145__$1 = state_50145;
var statearr_50376_51952 = state_50145__$1;
(statearr_50376_51952[(2)] = false);

(statearr_50376_51952[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (132))){
var inst_49992 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49992)){
var statearr_50377_51953 = state_50145__$1;
(statearr_50377_51953[(1)] = (133));

} else {
var statearr_50378_51954 = state_50145__$1;
(statearr_50378_51954[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (26))){
var state_50145__$1 = state_50145;
var statearr_50379_51955 = state_50145__$1;
(statearr_50379_51955[(2)] = waiting);

(statearr_50379_51955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (123))){
var inst_50031 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50380_51956 = state_50145__$1;
(statearr_50380_51956[(2)] = inst_50031);

(statearr_50380_51956[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (140))){
var state_50145__$1 = state_50145;
var statearr_50384_51961 = state_50145__$1;
(statearr_50384_51961[(2)] = null);

(statearr_50384_51961[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (16))){
var inst_49583 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50385_51962 = state_50145__$1;
(statearr_50385_51962[(2)] = inst_49583);

(statearr_50385_51962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (133))){
var inst_49954 = (state_50145[(7)]);
var inst_49932 = (state_50145[(70)]);
var inst_49920 = (state_50145[(8)]);
var inst_49604 = (state_50145[(10)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_49921 = (state_50145[(22)]);
var inst_49994 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49995 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_49954];
var inst_49996 = cljs.core.PersistentHashMap.fromArrays(inst_49994,inst_49995);
var inst_49997 = com.wsscode.pathom.trace.trace(inst_49604,inst_49996);
var inst_49998 = com.wsscode.pathom.parser.watch_pending_key(inst_49604,inst_49954);
var inst_49999 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49922,inst_49998);
var tmp50381 = inst_49920;
var tmp50382 = inst_49923;
var tmp50383 = inst_49921;
var inst_49920__$1 = tmp50381;
var inst_49921__$1 = tmp50383;
var inst_49922__$1 = inst_49999;
var inst_49923__$1 = tmp50382;
var inst_49924 = inst_49932;
var state_50145__$1 = (function (){var statearr_50386 = state_50145;
(statearr_50386[(8)] = inst_49920__$1);

(statearr_50386[(63)] = inst_49922__$1);

(statearr_50386[(64)] = inst_49924);

(statearr_50386[(65)] = inst_49923__$1);

(statearr_50386[(22)] = inst_49921__$1);

(statearr_50386[(92)] = inst_49997);

return statearr_50386;
})();
var statearr_50387_51965 = state_50145__$1;
(statearr_50387_51965[(2)] = null);

(statearr_50387_51965[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (163))){
var inst_50126 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50388_51966 = state_50145__$1;
(statearr_50388_51966[(2)] = inst_50126);

(statearr_50388_51966[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (81))){
var state_50145__$1 = state_50145;
var statearr_50389_51969 = state_50145__$1;
(statearr_50389_51969[(2)] = false);

(statearr_50389_51969[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (120))){
var inst_50137 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50390_51970 = state_50145__$1;
(statearr_50390_51970[(2)] = inst_50137);

(statearr_50390_51970[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (79))){
var inst_49791 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49791)){
var statearr_50394_51971 = state_50145__$1;
(statearr_50394_51971[(1)] = (83));

} else {
var statearr_50395_51972 = state_50145__$1;
(statearr_50395_51972[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (38))){
var inst_49657 = (state_50145[(20)]);
var inst_49664 = (state_50145[(55)]);
var inst_49663 = cljs.core.seq(inst_49657);
var inst_49664__$1 = cljs.core.first(inst_49663);
var inst_49665 = cljs.core.next(inst_49663);
var inst_49667 = (inst_49664__$1 == null);
var inst_49668 = cljs.core.not(inst_49667);
var state_50145__$1 = (function (){var statearr_50396 = state_50145;
(statearr_50396[(55)] = inst_49664__$1);

(statearr_50396[(18)] = inst_49665);

return statearr_50396;
})();
if(inst_49668){
var statearr_50397_51990 = state_50145__$1;
(statearr_50397_51990[(1)] = (40));

} else {
var statearr_50398_51991 = state_50145__$1;
(statearr_50398_51991[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (126))){
var inst_49932 = (state_50145[(70)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_49921 = (state_50145[(22)]);
var inst_49976 = (state_50145[(2)]);
var tmp50391 = inst_49922;
var tmp50392 = inst_49923;
var tmp50393 = inst_49921;
var inst_49920 = inst_49976;
var inst_49921__$1 = tmp50393;
var inst_49922__$1 = tmp50391;
var inst_49923__$1 = tmp50392;
var inst_49924 = inst_49932;
var state_50145__$1 = (function (){var statearr_50399 = state_50145;
(statearr_50399[(8)] = inst_49920);

(statearr_50399[(63)] = inst_49922__$1);

(statearr_50399[(64)] = inst_49924);

(statearr_50399[(65)] = inst_49923__$1);

(statearr_50399[(22)] = inst_49921__$1);

return statearr_50399;
})();
var statearr_50400_51995 = state_50145__$1;
(statearr_50400_51995[(2)] = null);

(statearr_50400_51995[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (98))){
var inst_49896 = (state_50145[(67)]);
var inst_49902 = inst_49896.cljs$lang$protocol_mask$partition0$;
var inst_49903 = (inst_49902 & (64));
var inst_49904 = inst_49896.cljs$core$ISeq$;
var inst_49905 = (cljs.core.PROTOCOL_SENTINEL === inst_49904);
var inst_49906 = ((inst_49903) || (inst_49905));
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49906)){
var statearr_50403_52000 = state_50145__$1;
(statearr_50403_52000[(1)] = (101));

} else {
var statearr_50404_52001 = state_50145__$1;
(statearr_50404_52001[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (124))){
var inst_49920 = (state_50145[(8)]);
var inst_49956 = (state_50145[(9)]);
var inst_49973 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49920,inst_49956,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_50145__$1 = state_50145;
var statearr_50405_52003 = state_50145__$1;
(statearr_50405_52003[(2)] = inst_49973);

(statearr_50405_52003[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (87))){
var inst_49806 = (state_50145[(47)]);
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49655 = (state_50145[(19)]);
var inst_49801 = (state_50145[(51)]);
var inst_49861 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_49655,inst_49801);
var inst_49862 = cljs.core.PersistentVector.EMPTY;
var tmp50401 = inst_49653;
var tmp50402 = inst_49656;
var inst_49653__$1 = tmp50401;
var inst_49654 = inst_49806;
var inst_49655__$1 = inst_49861;
var inst_49656__$1 = tmp50402;
var inst_49657 = inst_49862;
var state_50145__$1 = (function (){var statearr_50406 = state_50145;
(statearr_50406[(20)] = inst_49657);

(statearr_50406[(14)] = inst_49653__$1);

(statearr_50406[(15)] = inst_49656__$1);

(statearr_50406[(19)] = inst_49655__$1);

(statearr_50406[(13)] = inst_49654);

return statearr_50406;
})();
var statearr_50407_52004 = state_50145__$1;
(statearr_50407_52004[(2)] = null);

(statearr_50407_52004[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (160))){
var inst_49953 = (state_50145[(72)]);
var inst_49954 = (state_50145[(7)]);
var inst_50063 = (state_50145[(31)]);
var inst_49932 = (state_50145[(70)]);
var inst_50069 = (state_50145[(32)]);
var inst_50070 = (state_50145[(35)]);
var inst_49920 = (state_50145[(8)]);
var inst_49569 = (state_50145[(53)]);
var inst_50071 = (state_50145[(36)]);
var inst_49591 = (state_50145[(74)]);
var inst_50066 = (state_50145[(37)]);
var inst_50072 = (state_50145[(38)]);
var inst_49564 = (state_50145[(25)]);
var inst_49604 = (state_50145[(10)]);
var inst_49918 = (state_50145[(59)]);
var inst_49922 = (state_50145[(63)]);
var inst_49897 = (state_50145[(82)]);
var inst_50067 = (state_50145[(39)]);
var inst_49601 = (state_50145[(77)]);
var inst_49592 = (state_50145[(60)]);
var inst_49896 = (state_50145[(67)]);
var inst_49924 = (state_50145[(64)]);
var inst_49923 = (state_50145[(65)]);
var inst_49931 = (state_50145[(68)]);
var inst_49598 = (state_50145[(17)]);
var inst_50065 = (state_50145[(33)]);
var inst_50041 = (state_50145[(34)]);
var inst_50068 = (state_50145[(40)]);
var inst_50073 = (state_50145[(41)]);
var inst_50084 = (state_50145[(2)]);
var inst_50085 = com.wsscode.pathom.trace.trace(inst_49604,inst_50084);
var inst_50086 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(inst_49604);
var inst_50087 = (function (){var res = inst_49920;
var map__50038 = inst_50063;
var map__49929 = inst_49953;
var p = inst_50068;
var seq__49927 = inst_49932;
var merge_result_QMARK_ = inst_50066;
var map__49559 = inst_49591;
var key_watchers__$1 = inst_49598;
var vec__50035 = inst_50041;
var first__49885 = inst_49896;
var children = inst_49592;
var vec__49883 = inst_49592;
var G__49882 = inst_49924;
var response_value = inst_50072;
var processing = inst_49922;
var key = inst_49954;
var key_process_timeout__$1 = inst_49569;
var key_as = inst_50071;
var vec__49926 = inst_49924;
var map__49886 = inst_49918;
var ast = inst_49953;
var key_process_timeout_step__$1 = inst_49564;
var provides_SINGLEQUOTE_ = inst_50070;
var msg = inst_50063;
var env__$1 = inst_49604;
var seq__49884 = inst_49897;
var waiting__$1 = inst_50073;
var first__49928 = inst_49931;
var path_entity = inst_49601;
var key_iterations = inst_49923;
var tail = inst_49932;
var waiting_SINGLEQUOTE_ = inst_50069;
var error = inst_50067;
var provides = inst_50065;
return ((function (res,map__50038,map__49929,p,seq__49927,merge_result_QMARK_,map__49559,key_watchers__$1,vec__50035,first__49885,children,vec__49883,G__49882,response_value,processing,key,key_process_timeout__$1,key_as,vec__49926,map__49886,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,seq__49884,waiting__$1,first__49928,path_entity,key_iterations,tail,waiting_SINGLEQUOTE_,error,provides,inst_49953,inst_49954,inst_50063,inst_49932,inst_50069,inst_50070,inst_49920,inst_49569,inst_50071,inst_49591,inst_50066,inst_50072,inst_49564,inst_49604,inst_49918,inst_49922,inst_49897,inst_50067,inst_49601,inst_49592,inst_49896,inst_49924,inst_49923,inst_49931,inst_49598,inst_50065,inst_50041,inst_50068,inst_50073,inst_50084,inst_50085,inst_50086,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__49548_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__49548_SHARP_], 0));
});
;})(res,map__50038,map__49929,p,seq__49927,merge_result_QMARK_,map__49559,key_watchers__$1,vec__50035,first__49885,children,vec__49883,G__49882,response_value,processing,key,key_process_timeout__$1,key_as,vec__49926,map__49886,ast,key_process_timeout_step__$1,provides_SINGLEQUOTE_,msg,env__$1,seq__49884,waiting__$1,first__49928,path_entity,key_iterations,tail,waiting_SINGLEQUOTE_,error,provides,inst_49953,inst_49954,inst_50063,inst_49932,inst_50069,inst_50070,inst_49920,inst_49569,inst_50071,inst_49591,inst_50066,inst_50072,inst_49564,inst_49604,inst_49918,inst_49922,inst_49897,inst_50067,inst_49601,inst_49592,inst_49896,inst_49924,inst_49923,inst_49931,inst_49598,inst_50065,inst_50041,inst_50068,inst_50073,inst_50084,inst_50085,inst_50086,state_val_50146,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_50088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50086,inst_50087);
var inst_50089 = com.wsscode.pathom.parser.parallel_flush_watchers(inst_49604,inst_49598,inst_50070,inst_50067);
var state_50145__$1 = (function (){var statearr_50408 = state_50145;
(statearr_50408[(93)] = inst_50088);

(statearr_50408[(94)] = inst_50089);

(statearr_50408[(95)] = inst_50085);

return statearr_50408;
})();
if(cljs.core.truth_(inst_50066)){
var statearr_50409_52032 = state_50145__$1;
(statearr_50409_52032[(1)] = (161));

} else {
var statearr_50410_52033 = state_50145__$1;
(statearr_50410_52033[(1)] = (162));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (30))){
var state_50145__$1 = state_50145;
var statearr_50411_52036 = state_50145__$1;
(statearr_50411_52036[(2)] = false);

(statearr_50411_52036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (73))){
var inst_49655 = (state_50145[(19)]);
var inst_49772 = cljs.core.vec(inst_49655);
var state_50145__$1 = state_50145;
return cljs.core.async.ioc_alts_BANG_(state_50145__$1,(76),inst_49772);
} else {
if((state_val_50146 === (96))){
var inst_49890 = cljs.core.PersistentHashSet.EMPTY;
var state_50145__$1 = state_50145;
var statearr_50412_52037 = state_50145__$1;
(statearr_50412_52037[(2)] = inst_49890);

(statearr_50412_52037[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (10))){
var inst_49570 = (state_50145[(89)]);
var inst_49569 = (state_50145[(2)]);
var inst_49570__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_49572 = (inst_49570__$1 == null);
var inst_49573 = cljs.core.not(inst_49572);
var state_50145__$1 = (function (){var statearr_50413 = state_50145;
(statearr_50413[(53)] = inst_49569);

(statearr_50413[(89)] = inst_49570__$1);

return statearr_50413;
})();
if(inst_49573){
var statearr_50414_52043 = state_50145__$1;
(statearr_50414_52043[(1)] = (11));

} else {
var statearr_50415_52051 = state_50145__$1;
(statearr_50415_52051[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (18))){
var inst_49570 = (state_50145[(89)]);
var state_50145__$1 = state_50145;
var statearr_50416_52059 = state_50145__$1;
(statearr_50416_52059[(2)] = inst_49570);

(statearr_50416_52059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (105))){
var inst_49896 = (state_50145[(67)]);
var state_50145__$1 = state_50145;
var statearr_50417_52060 = state_50145__$1;
(statearr_50417_52060[(2)] = inst_49896);

(statearr_50417_52060[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (52))){
var inst_49653 = (state_50145[(14)]);
var inst_49604 = (state_50145[(10)]);
var inst_49687 = (state_50145[(12)]);
var inst_49689 = (state_50145[(44)]);
var inst_49698 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_49699 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_49687,max_key_iterations];
var inst_49700 = cljs.core.PersistentHashMap.fromArrays(inst_49698,inst_49699);
var inst_49701 = com.wsscode.pathom.trace.trace(inst_49604,inst_49700);
var inst_49703 = cljs.core.contains_QMARK_(inst_49653,inst_49689);
var inst_49704 = (!(inst_49703));
var state_50145__$1 = (function (){var statearr_50418 = state_50145;
(statearr_50418[(96)] = inst_49701);

return statearr_50418;
})();
if(inst_49704){
var statearr_50419_52066 = state_50145__$1;
(statearr_50419_52066[(1)] = (55));

} else {
var statearr_50420_52067 = state_50145__$1;
(statearr_50420_52067[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (114))){
var inst_49945 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50425_52069 = state_50145__$1;
(statearr_50425_52069[(2)] = inst_49945);

(statearr_50425_52069[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (147))){
var state_50145__$1 = state_50145;
var statearr_50428_52072 = state_50145__$1;
(statearr_50428_52072[(2)] = false);

(statearr_50428_52072[(1)] = (148));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (67))){
var inst_49653 = (state_50145[(14)]);
var inst_49656 = (state_50145[(15)]);
var inst_49604 = (state_50145[(10)]);
var inst_49665 = (state_50145[(18)]);
var inst_49655 = (state_50145[(19)]);
var inst_49687 = (state_50145[(12)]);
var inst_49654 = (state_50145[(13)]);
var inst_49737 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49738 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_49687];
var inst_49739 = cljs.core.PersistentHashMap.fromArrays(inst_49737,inst_49738);
var inst_49740 = com.wsscode.pathom.trace.trace(inst_49604,inst_49739);
var tmp50421 = inst_49653;
var tmp50422 = inst_49656;
var tmp50423 = inst_49655;
var tmp50424 = inst_49654;
var inst_49653__$1 = tmp50421;
var inst_49654__$1 = tmp50424;
var inst_49655__$1 = tmp50423;
var inst_49656__$1 = tmp50422;
var inst_49657 = inst_49665;
var state_50145__$1 = (function (){var statearr_50429 = state_50145;
(statearr_50429[(20)] = inst_49657);

(statearr_50429[(14)] = inst_49653__$1);

(statearr_50429[(15)] = inst_49656__$1);

(statearr_50429[(97)] = inst_49740);

(statearr_50429[(19)] = inst_49655__$1);

(statearr_50429[(13)] = inst_49654__$1);

return statearr_50429;
})();
var statearr_50430_52077 = state_50145__$1;
(statearr_50430_52077[(2)] = null);

(statearr_50430_52077[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (161))){
var inst_50070 = (state_50145[(35)]);
var inst_49920 = (state_50145[(8)]);
var inst_50071 = (state_50145[(36)]);
var inst_50072 = (state_50145[(38)]);
var inst_49604 = (state_50145[(10)]);
var inst_49922 = (state_50145[(63)]);
var inst_49923 = (state_50145[(65)]);
var inst_50073 = (state_50145[(41)]);
var inst_50091 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_50092 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_50072];
var inst_50093 = cljs.core.PersistentHashMap.fromArrays(inst_50091,inst_50092);
var inst_50094 = com.wsscode.pathom.trace.trace(inst_49604,inst_50093);
var inst_50095 = cljs.core.vals(inst_50072);
var inst_50096 = cljs.core.first(inst_50095);
var inst_50097 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49920,inst_50071,inst_50096);
var inst_50098 = cljs.core.PersistentHashSet.EMPTY;
var inst_50099 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_50070);
var inst_50100 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_50098,inst_50099,inst_50073);
var inst_50101 = cljs.core.PersistentVector.EMPTY;
var tmp50426 = inst_49922;
var tmp50427 = inst_49923;
var inst_49920__$1 = inst_50097;
var inst_49921 = inst_50100;
var inst_49922__$1 = tmp50426;
var inst_49923__$1 = tmp50427;
var inst_49924 = inst_50101;
var state_50145__$1 = (function (){var statearr_50431 = state_50145;
(statearr_50431[(8)] = inst_49920__$1);

(statearr_50431[(63)] = inst_49922__$1);

(statearr_50431[(64)] = inst_49924);

(statearr_50431[(65)] = inst_49923__$1);

(statearr_50431[(22)] = inst_49921);

(statearr_50431[(98)] = inst_50094);

return statearr_50431;
})();
var statearr_50432_52096 = state_50145__$1;
(statearr_50432_52096[(2)] = null);

(statearr_50432_52096[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (71))){
var state_50145__$1 = state_50145;
var statearr_50433_52098 = state_50145__$1;
(statearr_50433_52098[(2)] = null);

(statearr_50433_52098[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (42))){
var inst_49681 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49681)){
var statearr_50434_52100 = state_50145__$1;
(statearr_50434_52100[(1)] = (46));

} else {
var statearr_50435_52101 = state_50145__$1;
(statearr_50435_52101[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (80))){
var state_50145__$1 = state_50145;
var statearr_50436_52102 = state_50145__$1;
(statearr_50436_52102[(2)] = true);

(statearr_50436_52102[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (37))){
var inst_49626 = (state_50145[(85)]);
var inst_49627 = (state_50145[(86)]);
var inst_49651 = (state_50145[(76)]);
var inst_49620 = (state_50145[(90)]);
var inst_49625 = (state_50145[(87)]);
var inst_49592 = (state_50145[(60)]);
var inst_49651__$1 = (state_50145[(2)]);
var inst_49652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49651__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_49653 = inst_49620;
var inst_49654 = inst_49625;
var inst_49655 = inst_49626;
var inst_49656 = inst_49627;
var inst_49657 = inst_49592;
var state_50145__$1 = (function (){var statearr_50437 = state_50145;
(statearr_50437[(20)] = inst_49657);

(statearr_50437[(14)] = inst_49653);

(statearr_50437[(15)] = inst_49656);

(statearr_50437[(76)] = inst_49651__$1);

(statearr_50437[(19)] = inst_49655);

(statearr_50437[(99)] = inst_49652);

(statearr_50437[(13)] = inst_49654);

return statearr_50437;
})();
var statearr_50438_52107 = state_50145__$1;
(statearr_50438_52107[(2)] = null);

(statearr_50438_52107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (63))){
var inst_49725 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_49725)){
var statearr_50439_52108 = state_50145__$1;
(statearr_50439_52108[(1)] = (64));

} else {
var statearr_50440_52109 = state_50145__$1;
(statearr_50440_52109[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (94))){
var inst_49859 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50441_52111 = state_50145__$1;
(statearr_50441_52111[(2)] = inst_49859);

(statearr_50441_52111[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (8))){
var inst_49564 = (state_50145[(25)]);
var inst_49566 = (inst_49564.cljs$core$IFn$_invoke$arity$2 ? inst_49564.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_49564.call(null,env,key_process_timeout));
var state_50145__$1 = state_50145;
var statearr_50442_52118 = state_50145__$1;
(statearr_50442_52118[(2)] = inst_49566);

(statearr_50442_52118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (49))){
var inst_49656 = (state_50145[(15)]);
var inst_49604 = (state_50145[(10)]);
var inst_49686 = (state_50145[(16)]);
var inst_49687 = (state_50145[(12)]);
var inst_49689 = com.wsscode.pathom.parser.ast__GT_out_key(inst_49686);
var inst_49690 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_49691 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_49687];
var inst_49692 = cljs.core.PersistentHashMap.fromArrays(inst_49690,inst_49691);
var inst_49693 = com.wsscode.pathom.trace.trace(inst_49604,inst_49692);
var inst_49694 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_49656,inst_49687,(0));
var inst_49695 = (max_key_iterations - (1));
var inst_49696 = (inst_49694 > inst_49695);
var state_50145__$1 = (function (){var statearr_50443 = state_50145;
(statearr_50443[(100)] = inst_49693);

(statearr_50443[(44)] = inst_49689);

return statearr_50443;
})();
if(cljs.core.truth_(inst_49696)){
var statearr_50444_52135 = state_50145__$1;
(statearr_50444_52135[(1)] = (52));

} else {
var statearr_50445_52137 = state_50145__$1;
(statearr_50445_52137[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (84))){
var inst_49775 = (state_50145[(56)]);
var state_50145__$1 = state_50145;
var statearr_50446_52138 = state_50145__$1;
(statearr_50446_52138[(2)] = inst_49775);

(statearr_50446_52138[(1)] = (85));


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
});})(c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__42979__auto__,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto____0 = (function (){
var statearr_50447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50447[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto__);

(statearr_50447[(1)] = (1));

return statearr_50447;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto____1 = (function (state_50145){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50145);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50448){if((e50448 instanceof Object)){
var ex__42983__auto__ = e50448;
var statearr_50449_52146 = state_50145;
(statearr_50449_52146[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52148 = state_50145;
state_50145 = G__52148;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto__ = function(state_50145){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto____1.call(this,state_50145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__43004__auto__ = (function (){var statearr_50450 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50450[(6)] = c__43002__auto__);

return statearr_50450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,map__49551,map__49551__$1,read,mutate,map__49552,map__49552__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__43002__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__50451){
var map__50452 = p__50451;
var map__50452__$1 = (((((!((map__50452 == null))))?(((((map__50452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50452):map__50452);
var pconfig = map__50452__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50452__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__50452,map__50452__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__50454,tx){
var map__50455 = p__50454;
var map__50455__$1 = (((((!((map__50455 == null))))?(((((map__50455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50455):map__50455);
var env = map__50455__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50455__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var c__43002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43002__auto__,map__50455,map__50455__$1,env,key_process_timeout,map__50452,map__50452__$1,pconfig,add_error){
return (function (){
var f__43003__auto__ = (function (){var switch__42979__auto__ = ((function (c__43002__auto__,map__50455,map__50455__$1,env,key_process_timeout,map__50452,map__50452__$1,pconfig,add_error){
return (function (state_50493){
var state_val_50494 = (state_50493[(1)]);
if((state_val_50494 === (7))){
var inst_50475 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
return cljs.core.async.ioc_alts_BANG_(state_50493__$1,(8),inst_50475);
} else {
if((state_val_50494 === (1))){
var state_50493__$1 = state_50493;
var statearr_50495_52155 = state_50493__$1;
(statearr_50495_52155[(2)] = null);

(statearr_50495_52155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (4))){
var inst_50465 = (state_50493[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50493,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50464 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout], 0));
var inst_50465__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_50464,tx);
var inst_50467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50468 = [inst_50465__$1];
var inst_50469 = (new cljs.core.PersistentVector(null,1,(5),inst_50467,inst_50468,null));
var state_50493__$1 = (function (){var statearr_50496 = state_50493;
(statearr_50496[(7)] = inst_50465__$1);

(statearr_50496[(8)] = inst_50469);

return statearr_50496;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_50497_52159 = state_50493__$1;
(statearr_50497_52159[(1)] = (5));

} else {
var statearr_50498_52160 = state_50493__$1;
(statearr_50498_52160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (6))){
var inst_50469 = (state_50493[(8)]);
var state_50493__$1 = state_50493;
var statearr_50499_52161 = state_50493__$1;
(statearr_50499_52161[(2)] = inst_50469);

(statearr_50499_52161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (3))){
var inst_50457 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
var statearr_50500_52163 = state_50493__$1;
(statearr_50500_52163[(2)] = inst_50457);


cljs.core.async.impl.ioc_helpers.process_exception(state_50493__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (2))){
var inst_50491 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50493__$1,inst_50491);
} else {
if((state_val_50494 === (11))){
var inst_50489 = (state_50493[(2)]);
var state_50493__$1 = state_50493;
var statearr_50501_52166 = state_50493__$1;
(statearr_50501_52166[(2)] = inst_50489);


cljs.core.async.impl.ioc_helpers.process_exception(state_50493__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (9))){
var inst_50478 = (state_50493[(9)]);
var state_50493__$1 = state_50493;
var statearr_50502_52167 = state_50493__$1;
(statearr_50502_52167[(2)] = inst_50478);

(statearr_50502_52167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (5))){
var inst_50469 = (state_50493[(8)]);
var inst_50471 = cljs.core.async.timeout(key_process_timeout);
var inst_50472 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50469,inst_50471);
var state_50493__$1 = state_50493;
var statearr_50503_52168 = state_50493__$1;
(statearr_50503_52168[(2)] = inst_50472);

(statearr_50503_52168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (10))){
var inst_50483 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_50484 = [key_process_timeout];
var inst_50485 = cljs.core.PersistentHashMap.fromArrays(inst_50483,inst_50484);
var inst_50486 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_50485);
var inst_50487 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_50486) : add_error.call(null,env,inst_50486));
var state_50493__$1 = state_50493;
var statearr_50504_52172 = state_50493__$1;
(statearr_50504_52172[(2)] = inst_50487);

(statearr_50504_52172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50494 === (8))){
var inst_50465 = (state_50493[(7)]);
var inst_50477 = (state_50493[(2)]);
var inst_50478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50477,(0),null);
var inst_50479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50477,(1),null);
var inst_50480 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50465,inst_50479);
var state_50493__$1 = (function (){var statearr_50505 = state_50493;
(statearr_50505[(9)] = inst_50478);

return statearr_50505;
})();
if(inst_50480){
var statearr_50506_52174 = state_50493__$1;
(statearr_50506_52174[(1)] = (9));

} else {
var statearr_50507_52175 = state_50493__$1;
(statearr_50507_52175[(1)] = (10));

}

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
});})(c__43002__auto__,map__50455,map__50455__$1,env,key_process_timeout,map__50452,map__50452__$1,pconfig,add_error))
;
return ((function (switch__42979__auto__,c__43002__auto__,map__50455,map__50455__$1,env,key_process_timeout,map__50452,map__50452__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto____0 = (function (){
var statearr_50508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50508[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto__);

(statearr_50508[(1)] = (1));

return statearr_50508;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto____1 = (function (state_50493){
while(true){
var ret_value__42981__auto__ = (function (){try{while(true){
var result__42982__auto__ = switch__42979__auto__(state_50493);
if(cljs.core.keyword_identical_QMARK_(result__42982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42982__auto__;
}
break;
}
}catch (e50509){if((e50509 instanceof Object)){
var ex__42983__auto__ = e50509;
var statearr_50510_52180 = state_50493;
(statearr_50510_52180[(5)] = ex__42983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52181 = state_50493;
state_50493 = G__52181;
continue;
} else {
return ret_value__42981__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto__ = function(state_50493){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto____1.call(this,state_50493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42980__auto__;
})()
;})(switch__42979__auto__,c__43002__auto__,map__50455,map__50455__$1,env,key_process_timeout,map__50452,map__50452__$1,pconfig,add_error))
})();
var state__43004__auto__ = (function (){var statearr_50511 = (f__43003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43003__auto__.cljs$core$IFn$_invoke$arity$0() : f__43003__auto__.call(null));
(statearr_50511[(6)] = c__43002__auto__);

return statearr_50511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43004__auto__);
});})(c__43002__auto__,map__50455,map__50455__$1,env,key_process_timeout,map__50452,map__50452__$1,pconfig,add_error))
);

return c__43002__auto__;
});
;})(map__50452,map__50452__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
