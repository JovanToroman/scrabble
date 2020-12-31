goog.provide('app.ui');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('app.mutations');

var options__44904__auto___52683 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(this$,p__52671){
var map__52672 = p__52671;
var map__52672__$1 = (((((!((map__52672 == null))))?(((((map__52672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52672):map__52672);
var str1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword("ui","str1","ui/str1",972555636));
var str2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword("ui","str2","ui/str2",-73532098));
var answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword("ui","answer","ui/answer",-742645599));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword("ui","error","ui/error",-978964660));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("scramble","id","scramble/id",-755159193),new cljs.core.Keyword(null,"scramble1","scramble1",-459126901)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","str1","ui/str1",972555636),new cljs.core.Keyword("ui","str2","ui/str2",-73532098),new cljs.core.Keyword("ui","answer","ui/answer",-742645599),new cljs.core.Keyword("ui","error","ui/error",-978964660)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Scramble(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52674 = com.fulcrologic.fulcro.components.props(this$);
var map__52674__$1 = (((((!((map__52674 == null))))?(((((map__52674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52674):map__52674);
var str1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword("ui","str1","ui/str1",972555636));
var str2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword("ui","str2","ui/str2",-73532098));
var answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword("ui","answer","ui/answer",-742645599));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword("ui","error","ui/error",-978964660));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"className": "text-justify"}),"Hi! Welcome to the scramble tester"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"className": "lead"}),"Please enter two strings in the form fields bellow. Strings need to be lowercase and contain only\n            letters. You can then check if the second string can be created by rearranging letters of the first one. ",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({}),"Have fun!"]))])], null),new cljs.core.Keyword(null,".row",".row",-368374508)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({"className": "mt-3"}),"String 1"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = str1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__52674,map__52674__$1,str1,str2,answer,error){
return (function (p1__52669_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("ui","str1","ui/str1",972555636),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__52669_SHARP_], 0));
});})(map__52674,map__52674__$1,str1,str2,answer,error))
], null)], null),new cljs.core.Keyword(null,".form-control",".form-control",-1327453657)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({"className": "mt-3"}),"String 2"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = str2;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__52674,map__52674__$1,str1,str2,answer,error){
return (function (p1__52670_SHARP_){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("ui","str2","ui/str2",-73532098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__52670_SHARP_], 0));
});})(map__52674,map__52674__$1,str1,str2,answer,error))
], null)], null),new cljs.core.Keyword(null,".form-control",".form-control",-1327453657)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__52674,map__52674__$1,str1,str2,answer,error){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52676 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str1","str1",972567240),(function (){var or__4131__auto__ = str1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"str2","str2",-73529614),(function (){var or__4131__auto__ = str2;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})()], null);
return (app.mutations.scramble.cljs$core$IFn$_invoke$arity$1 ? app.mutations.scramble.cljs$core$IFn$_invoke$arity$1(G__52676) : app.mutations.scramble.call(null,G__52676));
})()], null));
});})(map__52674,map__52674__$1,str1,str2,answer,error))
], null),"Scramble"], null),new cljs.core.Keyword(null,".btn.btn-primary.mt-3",".btn.btn-primary.mt-3",-1045776895))], null),new cljs.core.Keyword(null,".row.col-md-4",".row.col-md-4",-932453469)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((error == null))))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Scramble failed with the following error: "]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null),new cljs.core.Keyword(null,".text-danger",".text-danger",-387210206))], null),null):null)], null),new cljs.core.Keyword(null,".row.col-md-8.mt-3",".row.col-md-8.mt-3",-876976509)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((!((answer == null))))?(cljs.core.truth_(answer)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"className": "text-success"}),"String 2 can be created from letters in string 1"]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"className": "text-danger"}),"String 2 cannot be created from letters in string 1"])):null)], null),new cljs.core.Keyword(null,".row.col-md-8",".row.col-md-8",1554028064))], null),new cljs.core.Keyword(null,".container.mt-4",".container.mt-4",608040605));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Scramble !== 'undefined')){
} else {
app.ui.Scramble = ((function (options__44904__auto___52683){
return (function app$ui$Scramble(props__44905__auto__){
var this__44906__auto__ = this;
var temp__5733__auto___52684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__44904__auto___52683,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5733__auto___52684)){
var init_state__44907__auto___52685 = temp__5733__auto___52684;
this__44906__auto__.state = (function (){var obj52678 = ({"fulcro$state":(function (){var G__52679 = this__44906__auto__;
var G__52680 = goog.object.get(props__44905__auto__,"fulcro$value");
return (init_state__44907__auto___52685.cljs$core$IFn$_invoke$arity$2 ? init_state__44907__auto___52685.cljs$core$IFn$_invoke$arity$2(G__52679,G__52680) : init_state__44907__auto___52685.call(null,G__52679,G__52680));
})()});
return obj52678;
})();
} else {
this__44906__auto__.state = (function (){var obj52682 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj52682;
})();
}

return null;
});})(options__44904__auto___52683))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Scramble,new cljs.core.Keyword("app.ui","Scramble","app.ui/Scramble",-1157902572),options__44904__auto___52683);

//# sourceMappingURL=app.ui.js.map
