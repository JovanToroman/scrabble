goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54105 = coll;
var G__54106 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54105,G__54106) : shadow.dom.lazy_native_coll_seq.call(null,G__54105,G__54106));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__54133 = arguments.length;
switch (G__54133) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__54139 = arguments.length;
switch (G__54139) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__54149 = arguments.length;
switch (G__54149) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__54153 = arguments.length;
switch (G__54153) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__54164 = arguments.length;
switch (G__54164) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__54166 = document;
var G__54167 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54166,G__54167);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__54168 = shadow.dom.dom_node(parent);
var G__54169 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54168,G__54169);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__54172 = shadow.dom.dom_node(el);
var G__54173 = cls;
return goog.dom.classlist.add(G__54172,G__54173);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__54178 = shadow.dom.dom_node(el);
var G__54179 = cls;
return goog.dom.classlist.remove(G__54178,G__54179);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__54185 = arguments.length;
switch (G__54185) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__54187 = shadow.dom.dom_node(el);
var G__54188 = cls;
return goog.dom.classlist.toggle(G__54187,G__54188);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e54193){if((e54193 instanceof Object)){
var e = e54193;
return console.log("didnt support attachEvent",el,e);
} else {
throw e54193;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__54202 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54203 = null;
var count__54204 = (0);
var i__54205 = (0);
while(true){
if((i__54205 < count__54204)){
var el = chunk__54203.cljs$core$IIndexed$_nth$arity$2(null,i__54205);
var handler_55003__$1 = ((function (seq__54202,chunk__54203,count__54204,i__54205,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54202,chunk__54203,count__54204,i__54205,el))
;
var G__54223_55004 = el;
var G__54224_55005 = cljs.core.name(ev);
var G__54225_55006 = handler_55003__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54223_55004,G__54224_55005,G__54225_55006) : shadow.dom.dom_listen.call(null,G__54223_55004,G__54224_55005,G__54225_55006));


var G__55007 = seq__54202;
var G__55008 = chunk__54203;
var G__55009 = count__54204;
var G__55010 = (i__54205 + (1));
seq__54202 = G__55007;
chunk__54203 = G__55008;
count__54204 = G__55009;
i__54205 = G__55010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54202);
if(temp__5735__auto__){
var seq__54202__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54202__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54202__$1);
var G__55011 = cljs.core.chunk_rest(seq__54202__$1);
var G__55012 = c__4550__auto__;
var G__55013 = cljs.core.count(c__4550__auto__);
var G__55014 = (0);
seq__54202 = G__55011;
chunk__54203 = G__55012;
count__54204 = G__55013;
i__54205 = G__55014;
continue;
} else {
var el = cljs.core.first(seq__54202__$1);
var handler_55015__$1 = ((function (seq__54202,chunk__54203,count__54204,i__54205,el,seq__54202__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54202,chunk__54203,count__54204,i__54205,el,seq__54202__$1,temp__5735__auto__))
;
var G__54236_55016 = el;
var G__54237_55017 = cljs.core.name(ev);
var G__54238_55018 = handler_55015__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54236_55016,G__54237_55017,G__54238_55018) : shadow.dom.dom_listen.call(null,G__54236_55016,G__54237_55017,G__54238_55018));


var G__55020 = cljs.core.next(seq__54202__$1);
var G__55021 = null;
var G__55022 = (0);
var G__55023 = (0);
seq__54202 = G__55020;
chunk__54203 = G__55021;
count__54204 = G__55022;
i__54205 = G__55023;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__54245 = arguments.length;
switch (G__54245) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__54253 = shadow.dom.dom_node(el);
var G__54254 = cljs.core.name(ev);
var G__54255 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54253,G__54254,G__54255) : shadow.dom.dom_listen.call(null,G__54253,G__54254,G__54255));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__54261 = shadow.dom.dom_node(el);
var G__54262 = cljs.core.name(ev);
var G__54263 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__54261,G__54262,G__54263) : shadow.dom.dom_listen_remove.call(null,G__54261,G__54262,G__54263));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__54267 = cljs.core.seq(events);
var chunk__54268 = null;
var count__54269 = (0);
var i__54270 = (0);
while(true){
if((i__54270 < count__54269)){
var vec__54285 = chunk__54268.cljs$core$IIndexed$_nth$arity$2(null,i__54270);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54285,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54285,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55031 = seq__54267;
var G__55032 = chunk__54268;
var G__55033 = count__54269;
var G__55034 = (i__54270 + (1));
seq__54267 = G__55031;
chunk__54268 = G__55032;
count__54269 = G__55033;
i__54270 = G__55034;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54267);
if(temp__5735__auto__){
var seq__54267__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54267__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54267__$1);
var G__55036 = cljs.core.chunk_rest(seq__54267__$1);
var G__55037 = c__4550__auto__;
var G__55038 = cljs.core.count(c__4550__auto__);
var G__55039 = (0);
seq__54267 = G__55036;
chunk__54268 = G__55037;
count__54269 = G__55038;
i__54270 = G__55039;
continue;
} else {
var vec__54292 = cljs.core.first(seq__54267__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54292,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__55041 = cljs.core.next(seq__54267__$1);
var G__55042 = null;
var G__55043 = (0);
var G__55044 = (0);
seq__54267 = G__55041;
chunk__54268 = G__55042;
count__54269 = G__55043;
i__54270 = G__55044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__54299 = cljs.core.seq(styles);
var chunk__54300 = null;
var count__54301 = (0);
var i__54302 = (0);
while(true){
if((i__54302 < count__54301)){
var vec__54324 = chunk__54300.cljs$core$IIndexed$_nth$arity$2(null,i__54302);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(1),null);
var G__54327_55045 = dom;
var G__54328_55046 = cljs.core.name(k);
var G__54329_55047 = (((v == null))?"":v);
goog.style.setStyle(G__54327_55045,G__54328_55046,G__54329_55047);


var G__55048 = seq__54299;
var G__55049 = chunk__54300;
var G__55050 = count__54301;
var G__55051 = (i__54302 + (1));
seq__54299 = G__55048;
chunk__54300 = G__55049;
count__54301 = G__55050;
i__54302 = G__55051;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54299);
if(temp__5735__auto__){
var seq__54299__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54299__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54299__$1);
var G__55052 = cljs.core.chunk_rest(seq__54299__$1);
var G__55053 = c__4550__auto__;
var G__55054 = cljs.core.count(c__4550__auto__);
var G__55055 = (0);
seq__54299 = G__55052;
chunk__54300 = G__55053;
count__54301 = G__55054;
i__54302 = G__55055;
continue;
} else {
var vec__54334 = cljs.core.first(seq__54299__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54334,(1),null);
var G__54338_55056 = dom;
var G__54339_55057 = cljs.core.name(k);
var G__54340_55058 = (((v == null))?"":v);
goog.style.setStyle(G__54338_55056,G__54339_55057,G__54340_55058);


var G__55059 = cljs.core.next(seq__54299__$1);
var G__55060 = null;
var G__55061 = (0);
var G__55062 = (0);
seq__54299 = G__55059;
chunk__54300 = G__55060;
count__54301 = G__55061;
i__54302 = G__55062;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__54344_55063 = key;
var G__54344_55064__$1 = (((G__54344_55063 instanceof cljs.core.Keyword))?G__54344_55063.fqn:null);
switch (G__54344_55064__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_55066 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_55066,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_55066,"aria-");
}
})())){
el.setAttribute(ks_55066,value);
} else {
(el[ks_55066] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__54362 = shadow.dom.dom_node(el);
var G__54363 = cls;
return goog.dom.classlist.contains(G__54362,G__54363);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54373){
var map__54374 = p__54373;
var map__54374__$1 = (((((!((map__54374 == null))))?(((((map__54374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54374):map__54374);
var props = map__54374__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54374__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54378 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54386 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54386,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54386;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54391 = arguments.length;
switch (G__54391) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54407){
var vec__54409 = p__54407;
var seq__54410 = cljs.core.seq(vec__54409);
var first__54411 = cljs.core.first(seq__54410);
var seq__54410__$1 = cljs.core.next(seq__54410);
var nn = first__54411;
var first__54411__$1 = cljs.core.first(seq__54410__$1);
var seq__54410__$2 = cljs.core.next(seq__54410__$1);
var np = first__54411__$1;
var nc = seq__54410__$2;
var node = vec__54409;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54417 = nn;
var G__54418 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54417,G__54418) : create_fn.call(null,G__54417,G__54418));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54420 = nn;
var G__54421 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54420,G__54421) : create_fn.call(null,G__54420,G__54421));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54425 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54425,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54425,(1),null);
var seq__54428_55074 = cljs.core.seq(node_children);
var chunk__54429_55075 = null;
var count__54430_55076 = (0);
var i__54431_55077 = (0);
while(true){
if((i__54431_55077 < count__54430_55076)){
var child_struct_55079 = chunk__54429_55075.cljs$core$IIndexed$_nth$arity$2(null,i__54431_55077);
var children_55080 = shadow.dom.dom_node(child_struct_55079);
if(cljs.core.seq_QMARK_(children_55080)){
var seq__54466_55082 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55080));
var chunk__54468_55083 = null;
var count__54469_55084 = (0);
var i__54470_55085 = (0);
while(true){
if((i__54470_55085 < count__54469_55084)){
var child_55086 = chunk__54468_55083.cljs$core$IIndexed$_nth$arity$2(null,i__54470_55085);
if(cljs.core.truth_(child_55086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55086);


var G__55088 = seq__54466_55082;
var G__55089 = chunk__54468_55083;
var G__55090 = count__54469_55084;
var G__55091 = (i__54470_55085 + (1));
seq__54466_55082 = G__55088;
chunk__54468_55083 = G__55089;
count__54469_55084 = G__55090;
i__54470_55085 = G__55091;
continue;
} else {
var G__55093 = seq__54466_55082;
var G__55094 = chunk__54468_55083;
var G__55095 = count__54469_55084;
var G__55096 = (i__54470_55085 + (1));
seq__54466_55082 = G__55093;
chunk__54468_55083 = G__55094;
count__54469_55084 = G__55095;
i__54470_55085 = G__55096;
continue;
}
} else {
var temp__5735__auto___55097 = cljs.core.seq(seq__54466_55082);
if(temp__5735__auto___55097){
var seq__54466_55098__$1 = temp__5735__auto___55097;
if(cljs.core.chunked_seq_QMARK_(seq__54466_55098__$1)){
var c__4550__auto___55099 = cljs.core.chunk_first(seq__54466_55098__$1);
var G__55100 = cljs.core.chunk_rest(seq__54466_55098__$1);
var G__55101 = c__4550__auto___55099;
var G__55102 = cljs.core.count(c__4550__auto___55099);
var G__55103 = (0);
seq__54466_55082 = G__55100;
chunk__54468_55083 = G__55101;
count__54469_55084 = G__55102;
i__54470_55085 = G__55103;
continue;
} else {
var child_55105 = cljs.core.first(seq__54466_55098__$1);
if(cljs.core.truth_(child_55105)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55105);


var G__55106 = cljs.core.next(seq__54466_55098__$1);
var G__55107 = null;
var G__55108 = (0);
var G__55109 = (0);
seq__54466_55082 = G__55106;
chunk__54468_55083 = G__55107;
count__54469_55084 = G__55108;
i__54470_55085 = G__55109;
continue;
} else {
var G__55110 = cljs.core.next(seq__54466_55098__$1);
var G__55111 = null;
var G__55112 = (0);
var G__55113 = (0);
seq__54466_55082 = G__55110;
chunk__54468_55083 = G__55111;
count__54469_55084 = G__55112;
i__54470_55085 = G__55113;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55080);
}


var G__55114 = seq__54428_55074;
var G__55115 = chunk__54429_55075;
var G__55116 = count__54430_55076;
var G__55117 = (i__54431_55077 + (1));
seq__54428_55074 = G__55114;
chunk__54429_55075 = G__55115;
count__54430_55076 = G__55116;
i__54431_55077 = G__55117;
continue;
} else {
var temp__5735__auto___55119 = cljs.core.seq(seq__54428_55074);
if(temp__5735__auto___55119){
var seq__54428_55120__$1 = temp__5735__auto___55119;
if(cljs.core.chunked_seq_QMARK_(seq__54428_55120__$1)){
var c__4550__auto___55121 = cljs.core.chunk_first(seq__54428_55120__$1);
var G__55123 = cljs.core.chunk_rest(seq__54428_55120__$1);
var G__55124 = c__4550__auto___55121;
var G__55125 = cljs.core.count(c__4550__auto___55121);
var G__55126 = (0);
seq__54428_55074 = G__55123;
chunk__54429_55075 = G__55124;
count__54430_55076 = G__55125;
i__54431_55077 = G__55126;
continue;
} else {
var child_struct_55127 = cljs.core.first(seq__54428_55120__$1);
var children_55135 = shadow.dom.dom_node(child_struct_55127);
if(cljs.core.seq_QMARK_(children_55135)){
var seq__54482_55136 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55135));
var chunk__54484_55137 = null;
var count__54485_55138 = (0);
var i__54486_55139 = (0);
while(true){
if((i__54486_55139 < count__54485_55138)){
var child_55140 = chunk__54484_55137.cljs$core$IIndexed$_nth$arity$2(null,i__54486_55139);
if(cljs.core.truth_(child_55140)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55140);


var G__55141 = seq__54482_55136;
var G__55142 = chunk__54484_55137;
var G__55143 = count__54485_55138;
var G__55144 = (i__54486_55139 + (1));
seq__54482_55136 = G__55141;
chunk__54484_55137 = G__55142;
count__54485_55138 = G__55143;
i__54486_55139 = G__55144;
continue;
} else {
var G__55146 = seq__54482_55136;
var G__55147 = chunk__54484_55137;
var G__55148 = count__54485_55138;
var G__55149 = (i__54486_55139 + (1));
seq__54482_55136 = G__55146;
chunk__54484_55137 = G__55147;
count__54485_55138 = G__55148;
i__54486_55139 = G__55149;
continue;
}
} else {
var temp__5735__auto___55150__$1 = cljs.core.seq(seq__54482_55136);
if(temp__5735__auto___55150__$1){
var seq__54482_55151__$1 = temp__5735__auto___55150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54482_55151__$1)){
var c__4550__auto___55152 = cljs.core.chunk_first(seq__54482_55151__$1);
var G__55153 = cljs.core.chunk_rest(seq__54482_55151__$1);
var G__55154 = c__4550__auto___55152;
var G__55155 = cljs.core.count(c__4550__auto___55152);
var G__55156 = (0);
seq__54482_55136 = G__55153;
chunk__54484_55137 = G__55154;
count__54485_55138 = G__55155;
i__54486_55139 = G__55156;
continue;
} else {
var child_55157 = cljs.core.first(seq__54482_55151__$1);
if(cljs.core.truth_(child_55157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55157);


var G__55158 = cljs.core.next(seq__54482_55151__$1);
var G__55159 = null;
var G__55160 = (0);
var G__55161 = (0);
seq__54482_55136 = G__55158;
chunk__54484_55137 = G__55159;
count__54485_55138 = G__55160;
i__54486_55139 = G__55161;
continue;
} else {
var G__55162 = cljs.core.next(seq__54482_55151__$1);
var G__55163 = null;
var G__55164 = (0);
var G__55165 = (0);
seq__54482_55136 = G__55162;
chunk__54484_55137 = G__55163;
count__54485_55138 = G__55164;
i__54486_55139 = G__55165;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55135);
}


var G__55167 = cljs.core.next(seq__54428_55120__$1);
var G__55168 = null;
var G__55169 = (0);
var G__55170 = (0);
seq__54428_55074 = G__55167;
chunk__54429_55075 = G__55168;
count__54430_55076 = G__55169;
i__54431_55077 = G__55170;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__54506 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__54506);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__54510 = cljs.core.seq(node);
var chunk__54511 = null;
var count__54512 = (0);
var i__54513 = (0);
while(true){
if((i__54513 < count__54512)){
var n = chunk__54511.cljs$core$IIndexed$_nth$arity$2(null,i__54513);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55178 = seq__54510;
var G__55179 = chunk__54511;
var G__55180 = count__54512;
var G__55181 = (i__54513 + (1));
seq__54510 = G__55178;
chunk__54511 = G__55179;
count__54512 = G__55180;
i__54513 = G__55181;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54510);
if(temp__5735__auto__){
var seq__54510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54510__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54510__$1);
var G__55184 = cljs.core.chunk_rest(seq__54510__$1);
var G__55185 = c__4550__auto__;
var G__55186 = cljs.core.count(c__4550__auto__);
var G__55187 = (0);
seq__54510 = G__55184;
chunk__54511 = G__55185;
count__54512 = G__55186;
i__54513 = G__55187;
continue;
} else {
var n = cljs.core.first(seq__54510__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55188 = cljs.core.next(seq__54510__$1);
var G__55189 = null;
var G__55190 = (0);
var G__55191 = (0);
seq__54510 = G__55188;
chunk__54511 = G__55189;
count__54512 = G__55190;
i__54513 = G__55191;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__54517 = shadow.dom.dom_node(new$);
var G__54518 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__54517,G__54518);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__54529 = arguments.length;
switch (G__54529) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__54562 = arguments.length;
switch (G__54562) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__54583 = arguments.length;
switch (G__54583) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55210 = arguments.length;
var i__4731__auto___55211 = (0);
while(true){
if((i__4731__auto___55211 < len__4730__auto___55210)){
args__4736__auto__.push((arguments[i__4731__auto___55211]));

var G__55213 = (i__4731__auto___55211 + (1));
i__4731__auto___55211 = G__55213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__54611_55218 = cljs.core.seq(nodes);
var chunk__54612_55219 = null;
var count__54613_55220 = (0);
var i__54614_55221 = (0);
while(true){
if((i__54614_55221 < count__54613_55220)){
var node_55223 = chunk__54612_55219.cljs$core$IIndexed$_nth$arity$2(null,i__54614_55221);
fragment.appendChild(shadow.dom._to_dom(node_55223));


var G__55225 = seq__54611_55218;
var G__55226 = chunk__54612_55219;
var G__55227 = count__54613_55220;
var G__55228 = (i__54614_55221 + (1));
seq__54611_55218 = G__55225;
chunk__54612_55219 = G__55226;
count__54613_55220 = G__55227;
i__54614_55221 = G__55228;
continue;
} else {
var temp__5735__auto___55229 = cljs.core.seq(seq__54611_55218);
if(temp__5735__auto___55229){
var seq__54611_55231__$1 = temp__5735__auto___55229;
if(cljs.core.chunked_seq_QMARK_(seq__54611_55231__$1)){
var c__4550__auto___55233 = cljs.core.chunk_first(seq__54611_55231__$1);
var G__55238 = cljs.core.chunk_rest(seq__54611_55231__$1);
var G__55239 = c__4550__auto___55233;
var G__55240 = cljs.core.count(c__4550__auto___55233);
var G__55241 = (0);
seq__54611_55218 = G__55238;
chunk__54612_55219 = G__55239;
count__54613_55220 = G__55240;
i__54614_55221 = G__55241;
continue;
} else {
var node_55243 = cljs.core.first(seq__54611_55231__$1);
fragment.appendChild(shadow.dom._to_dom(node_55243));


var G__55244 = cljs.core.next(seq__54611_55231__$1);
var G__55245 = null;
var G__55246 = (0);
var G__55247 = (0);
seq__54611_55218 = G__55244;
chunk__54612_55219 = G__55245;
count__54613_55220 = G__55246;
i__54614_55221 = G__55247;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq54600){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54600));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54626_55248 = cljs.core.seq(scripts);
var chunk__54627_55249 = null;
var count__54628_55250 = (0);
var i__54629_55251 = (0);
while(true){
if((i__54629_55251 < count__54628_55250)){
var vec__54641_55252 = chunk__54627_55249.cljs$core$IIndexed$_nth$arity$2(null,i__54629_55251);
var script_tag_55253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54641_55252,(0),null);
var script_body_55254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54641_55252,(1),null);
eval(script_body_55254);


var G__55256 = seq__54626_55248;
var G__55257 = chunk__54627_55249;
var G__55258 = count__54628_55250;
var G__55259 = (i__54629_55251 + (1));
seq__54626_55248 = G__55256;
chunk__54627_55249 = G__55257;
count__54628_55250 = G__55258;
i__54629_55251 = G__55259;
continue;
} else {
var temp__5735__auto___55261 = cljs.core.seq(seq__54626_55248);
if(temp__5735__auto___55261){
var seq__54626_55262__$1 = temp__5735__auto___55261;
if(cljs.core.chunked_seq_QMARK_(seq__54626_55262__$1)){
var c__4550__auto___55263 = cljs.core.chunk_first(seq__54626_55262__$1);
var G__55264 = cljs.core.chunk_rest(seq__54626_55262__$1);
var G__55265 = c__4550__auto___55263;
var G__55266 = cljs.core.count(c__4550__auto___55263);
var G__55267 = (0);
seq__54626_55248 = G__55264;
chunk__54627_55249 = G__55265;
count__54628_55250 = G__55266;
i__54629_55251 = G__55267;
continue;
} else {
var vec__54644_55268 = cljs.core.first(seq__54626_55262__$1);
var script_tag_55269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54644_55268,(0),null);
var script_body_55270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54644_55268,(1),null);
eval(script_body_55270);


var G__55271 = cljs.core.next(seq__54626_55262__$1);
var G__55272 = null;
var G__55273 = (0);
var G__55274 = (0);
seq__54626_55248 = G__55271;
chunk__54627_55249 = G__55272;
count__54628_55250 = G__55273;
i__54629_55251 = G__55274;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__54647){
var vec__54650 = p__54647;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54650,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54650,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__54657 = shadow.dom.dom_node(el);
var G__54658 = cls;
return goog.dom.getAncestorByClass(G__54657,G__54658);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54663 = arguments.length;
switch (G__54663) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__54669 = shadow.dom.dom_node(el);
var G__54670 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__54669,G__54670);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54671 = shadow.dom.dom_node(el);
var G__54672 = cljs.core.name(tag);
var G__54673 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54671,G__54672,G__54673);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54678 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54678);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54681 = shadow.dom.dom_node(dom);
var G__54682 = value;
return goog.dom.forms.setValue(G__54681,G__54682);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54692 = cljs.core.seq(style_keys);
var chunk__54693 = null;
var count__54694 = (0);
var i__54695 = (0);
while(true){
if((i__54695 < count__54694)){
var it = chunk__54693.cljs$core$IIndexed$_nth$arity$2(null,i__54695);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55288 = seq__54692;
var G__55289 = chunk__54693;
var G__55290 = count__54694;
var G__55291 = (i__54695 + (1));
seq__54692 = G__55288;
chunk__54693 = G__55289;
count__54694 = G__55290;
i__54695 = G__55291;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54692);
if(temp__5735__auto__){
var seq__54692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54692__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54692__$1);
var G__55293 = cljs.core.chunk_rest(seq__54692__$1);
var G__55294 = c__4550__auto__;
var G__55295 = cljs.core.count(c__4550__auto__);
var G__55296 = (0);
seq__54692 = G__55293;
chunk__54693 = G__55294;
count__54694 = G__55295;
i__54695 = G__55296;
continue;
} else {
var it = cljs.core.first(seq__54692__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55298 = cljs.core.next(seq__54692__$1);
var G__55299 = null;
var G__55300 = (0);
var G__55301 = (0);
seq__54692 = G__55298;
chunk__54693 = G__55299;
count__54694 = G__55300;
i__54695 = G__55301;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54699,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54703 = k54699;
var G__54703__$1 = (((G__54703 instanceof cljs.core.Keyword))?G__54703.fqn:null);
switch (G__54703__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54699,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54709){
var vec__54710 = p__54709;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54710,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54710,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54698){
var self__ = this;
var G__54698__$1 = this;
return (new cljs.core.RecordIter((0),G__54698__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54718 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54718(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54700,other54701){
var self__ = this;
var this54700__$1 = this;
return (((!((other54701 == null)))) && ((this54700__$1.constructor === other54701.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54700__$1.x,other54701.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54700__$1.y,other54701.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54700__$1.__extmap,other54701.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54698){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54725 = cljs.core.keyword_identical_QMARK_;
var expr__54726 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54728 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54729 = expr__54726;
return (pred__54725.cljs$core$IFn$_invoke$arity$2 ? pred__54725.cljs$core$IFn$_invoke$arity$2(G__54728,G__54729) : pred__54725.call(null,G__54728,G__54729));
})())){
return (new shadow.dom.Coordinate(G__54698,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54730 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54731 = expr__54726;
return (pred__54725.cljs$core$IFn$_invoke$arity$2 ? pred__54725.cljs$core$IFn$_invoke$arity$2(G__54730,G__54731) : pred__54725.call(null,G__54730,G__54731));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54698,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54698),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54698){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54698,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54702){
var extmap__4424__auto__ = (function (){var G__54738 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54702,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54702)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54738);
} else {
return G__54738;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54702),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54702),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54741 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54741);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54743 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54743);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54746 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54746);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54748,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54755 = k54748;
var G__54755__$1 = (((G__54755 instanceof cljs.core.Keyword))?G__54755.fqn:null);
switch (G__54755__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54748,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54758){
var vec__54760 = p__54758;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54760,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54760,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54747){
var self__ = this;
var G__54747__$1 = this;
return (new cljs.core.RecordIter((0),G__54747__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54771 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54771(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54749,other54750){
var self__ = this;
var this54749__$1 = this;
return (((!((other54750 == null)))) && ((this54749__$1.constructor === other54750.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54749__$1.w,other54750.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54749__$1.h,other54750.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54749__$1.__extmap,other54750.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54747){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54784 = cljs.core.keyword_identical_QMARK_;
var expr__54785 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54788 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54789 = expr__54785;
return (pred__54784.cljs$core$IFn$_invoke$arity$2 ? pred__54784.cljs$core$IFn$_invoke$arity$2(G__54788,G__54789) : pred__54784.call(null,G__54788,G__54789));
})())){
return (new shadow.dom.Size(G__54747,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54791 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54792 = expr__54785;
return (pred__54784.cljs$core$IFn$_invoke$arity$2 ? pred__54784.cljs$core$IFn$_invoke$arity$2(G__54791,G__54792) : pred__54784.call(null,G__54791,G__54792));
})())){
return (new shadow.dom.Size(self__.w,G__54747,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54747),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54747){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54747,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54752){
var extmap__4424__auto__ = (function (){var G__54805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54752,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54752)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54805);
} else {
return G__54805;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54752),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54752),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54809 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54809);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__55403 = (i + (1));
var G__55404 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55403;
ret = G__55404;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54816){
var vec__54817 = p__54816;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54817,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54817,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54824 = arguments.length;
switch (G__54824) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54836_55412 = new_node;
var G__54837_55413 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54836_55412,G__54837_55413);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54842_55415 = new_node;
var G__54844_55416 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54842_55415,G__54844_55416);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55421 = ps;
var G__55422 = (i + (1));
el__$1 = G__55421;
i = G__55422;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54845 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54845);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__54847 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54847);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54852 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54852);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54856 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54856,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54856,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54856,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54859_55430 = cljs.core.seq(props);
var chunk__54860_55431 = null;
var count__54861_55432 = (0);
var i__54862_55433 = (0);
while(true){
if((i__54862_55433 < count__54861_55432)){
var vec__54869_55438 = chunk__54860_55431.cljs$core$IIndexed$_nth$arity$2(null,i__54862_55433);
var k_55439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869_55438,(0),null);
var v_55440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869_55438,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_55439);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55439),v_55440);


var G__55442 = seq__54859_55430;
var G__55443 = chunk__54860_55431;
var G__55444 = count__54861_55432;
var G__55445 = (i__54862_55433 + (1));
seq__54859_55430 = G__55442;
chunk__54860_55431 = G__55443;
count__54861_55432 = G__55444;
i__54862_55433 = G__55445;
continue;
} else {
var temp__5735__auto___55446 = cljs.core.seq(seq__54859_55430);
if(temp__5735__auto___55446){
var seq__54859_55447__$1 = temp__5735__auto___55446;
if(cljs.core.chunked_seq_QMARK_(seq__54859_55447__$1)){
var c__4550__auto___55448 = cljs.core.chunk_first(seq__54859_55447__$1);
var G__55449 = cljs.core.chunk_rest(seq__54859_55447__$1);
var G__55450 = c__4550__auto___55448;
var G__55451 = cljs.core.count(c__4550__auto___55448);
var G__55452 = (0);
seq__54859_55430 = G__55449;
chunk__54860_55431 = G__55450;
count__54861_55432 = G__55451;
i__54862_55433 = G__55452;
continue;
} else {
var vec__54877_55453 = cljs.core.first(seq__54859_55447__$1);
var k_55454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54877_55453,(0),null);
var v_55455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54877_55453,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_55454);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55454),v_55455);


var G__55457 = cljs.core.next(seq__54859_55447__$1);
var G__55458 = null;
var G__55459 = (0);
var G__55460 = (0);
seq__54859_55430 = G__55457;
chunk__54860_55431 = G__55458;
count__54861_55432 = G__55459;
i__54862_55433 = G__55460;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54884 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54884,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54884,(1),null);
var seq__54887_55465 = cljs.core.seq(node_children);
var chunk__54889_55466 = null;
var count__54890_55467 = (0);
var i__54891_55468 = (0);
while(true){
if((i__54891_55468 < count__54890_55467)){
var child_struct_55469 = chunk__54889_55466.cljs$core$IIndexed$_nth$arity$2(null,i__54891_55468);
if((!((child_struct_55469 == null)))){
if(typeof child_struct_55469 === 'string'){
var text_55470 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55470),child_struct_55469].join(''));
} else {
var children_55471 = shadow.dom.svg_node(child_struct_55469);
if(cljs.core.seq_QMARK_(children_55471)){
var seq__54915_55472 = cljs.core.seq(children_55471);
var chunk__54917_55473 = null;
var count__54918_55474 = (0);
var i__54919_55475 = (0);
while(true){
if((i__54919_55475 < count__54918_55474)){
var child_55476 = chunk__54917_55473.cljs$core$IIndexed$_nth$arity$2(null,i__54919_55475);
if(cljs.core.truth_(child_55476)){
node.appendChild(child_55476);


var G__55477 = seq__54915_55472;
var G__55478 = chunk__54917_55473;
var G__55479 = count__54918_55474;
var G__55480 = (i__54919_55475 + (1));
seq__54915_55472 = G__55477;
chunk__54917_55473 = G__55478;
count__54918_55474 = G__55479;
i__54919_55475 = G__55480;
continue;
} else {
var G__55481 = seq__54915_55472;
var G__55482 = chunk__54917_55473;
var G__55483 = count__54918_55474;
var G__55484 = (i__54919_55475 + (1));
seq__54915_55472 = G__55481;
chunk__54917_55473 = G__55482;
count__54918_55474 = G__55483;
i__54919_55475 = G__55484;
continue;
}
} else {
var temp__5735__auto___55485 = cljs.core.seq(seq__54915_55472);
if(temp__5735__auto___55485){
var seq__54915_55486__$1 = temp__5735__auto___55485;
if(cljs.core.chunked_seq_QMARK_(seq__54915_55486__$1)){
var c__4550__auto___55487 = cljs.core.chunk_first(seq__54915_55486__$1);
var G__55488 = cljs.core.chunk_rest(seq__54915_55486__$1);
var G__55489 = c__4550__auto___55487;
var G__55490 = cljs.core.count(c__4550__auto___55487);
var G__55491 = (0);
seq__54915_55472 = G__55488;
chunk__54917_55473 = G__55489;
count__54918_55474 = G__55490;
i__54919_55475 = G__55491;
continue;
} else {
var child_55492 = cljs.core.first(seq__54915_55486__$1);
if(cljs.core.truth_(child_55492)){
node.appendChild(child_55492);


var G__55493 = cljs.core.next(seq__54915_55486__$1);
var G__55494 = null;
var G__55495 = (0);
var G__55496 = (0);
seq__54915_55472 = G__55493;
chunk__54917_55473 = G__55494;
count__54918_55474 = G__55495;
i__54919_55475 = G__55496;
continue;
} else {
var G__55497 = cljs.core.next(seq__54915_55486__$1);
var G__55498 = null;
var G__55499 = (0);
var G__55500 = (0);
seq__54915_55472 = G__55497;
chunk__54917_55473 = G__55498;
count__54918_55474 = G__55499;
i__54919_55475 = G__55500;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55471);
}
}


var G__55502 = seq__54887_55465;
var G__55503 = chunk__54889_55466;
var G__55504 = count__54890_55467;
var G__55505 = (i__54891_55468 + (1));
seq__54887_55465 = G__55502;
chunk__54889_55466 = G__55503;
count__54890_55467 = G__55504;
i__54891_55468 = G__55505;
continue;
} else {
var G__55506 = seq__54887_55465;
var G__55507 = chunk__54889_55466;
var G__55508 = count__54890_55467;
var G__55509 = (i__54891_55468 + (1));
seq__54887_55465 = G__55506;
chunk__54889_55466 = G__55507;
count__54890_55467 = G__55508;
i__54891_55468 = G__55509;
continue;
}
} else {
var temp__5735__auto___55510 = cljs.core.seq(seq__54887_55465);
if(temp__5735__auto___55510){
var seq__54887_55511__$1 = temp__5735__auto___55510;
if(cljs.core.chunked_seq_QMARK_(seq__54887_55511__$1)){
var c__4550__auto___55512 = cljs.core.chunk_first(seq__54887_55511__$1);
var G__55513 = cljs.core.chunk_rest(seq__54887_55511__$1);
var G__55514 = c__4550__auto___55512;
var G__55515 = cljs.core.count(c__4550__auto___55512);
var G__55516 = (0);
seq__54887_55465 = G__55513;
chunk__54889_55466 = G__55514;
count__54890_55467 = G__55515;
i__54891_55468 = G__55516;
continue;
} else {
var child_struct_55517 = cljs.core.first(seq__54887_55511__$1);
if((!((child_struct_55517 == null)))){
if(typeof child_struct_55517 === 'string'){
var text_55518 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55518),child_struct_55517].join(''));
} else {
var children_55519 = shadow.dom.svg_node(child_struct_55517);
if(cljs.core.seq_QMARK_(children_55519)){
var seq__54927_55520 = cljs.core.seq(children_55519);
var chunk__54929_55521 = null;
var count__54930_55522 = (0);
var i__54931_55523 = (0);
while(true){
if((i__54931_55523 < count__54930_55522)){
var child_55524 = chunk__54929_55521.cljs$core$IIndexed$_nth$arity$2(null,i__54931_55523);
if(cljs.core.truth_(child_55524)){
node.appendChild(child_55524);


var G__55525 = seq__54927_55520;
var G__55526 = chunk__54929_55521;
var G__55527 = count__54930_55522;
var G__55528 = (i__54931_55523 + (1));
seq__54927_55520 = G__55525;
chunk__54929_55521 = G__55526;
count__54930_55522 = G__55527;
i__54931_55523 = G__55528;
continue;
} else {
var G__55529 = seq__54927_55520;
var G__55530 = chunk__54929_55521;
var G__55531 = count__54930_55522;
var G__55532 = (i__54931_55523 + (1));
seq__54927_55520 = G__55529;
chunk__54929_55521 = G__55530;
count__54930_55522 = G__55531;
i__54931_55523 = G__55532;
continue;
}
} else {
var temp__5735__auto___55536__$1 = cljs.core.seq(seq__54927_55520);
if(temp__5735__auto___55536__$1){
var seq__54927_55539__$1 = temp__5735__auto___55536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54927_55539__$1)){
var c__4550__auto___55540 = cljs.core.chunk_first(seq__54927_55539__$1);
var G__55543 = cljs.core.chunk_rest(seq__54927_55539__$1);
var G__55544 = c__4550__auto___55540;
var G__55545 = cljs.core.count(c__4550__auto___55540);
var G__55546 = (0);
seq__54927_55520 = G__55543;
chunk__54929_55521 = G__55544;
count__54930_55522 = G__55545;
i__54931_55523 = G__55546;
continue;
} else {
var child_55547 = cljs.core.first(seq__54927_55539__$1);
if(cljs.core.truth_(child_55547)){
node.appendChild(child_55547);


var G__55548 = cljs.core.next(seq__54927_55539__$1);
var G__55549 = null;
var G__55550 = (0);
var G__55551 = (0);
seq__54927_55520 = G__55548;
chunk__54929_55521 = G__55549;
count__54930_55522 = G__55550;
i__54931_55523 = G__55551;
continue;
} else {
var G__55552 = cljs.core.next(seq__54927_55539__$1);
var G__55553 = null;
var G__55554 = (0);
var G__55555 = (0);
seq__54927_55520 = G__55552;
chunk__54929_55521 = G__55553;
count__54930_55522 = G__55554;
i__54931_55523 = G__55555;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55519);
}
}


var G__55556 = cljs.core.next(seq__54887_55511__$1);
var G__55557 = null;
var G__55558 = (0);
var G__55559 = (0);
seq__54887_55465 = G__55556;
chunk__54889_55466 = G__55557;
count__54890_55467 = G__55558;
i__54891_55468 = G__55559;
continue;
} else {
var G__55560 = cljs.core.next(seq__54887_55511__$1);
var G__55561 = null;
var G__55562 = (0);
var G__55563 = (0);
seq__54887_55465 = G__55560;
chunk__54889_55466 = G__55561;
count__54890_55467 = G__55562;
i__54891_55468 = G__55563;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__54936_55564 = shadow.dom._to_svg;
var G__54937_55565 = "string";
var G__54938_55566 = ((function (G__54936_55564,G__54937_55565){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54936_55564,G__54937_55565))
;
goog.object.set(G__54936_55564,G__54937_55565,G__54938_55566);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__54939_55573 = shadow.dom._to_svg;
var G__54940_55574 = "null";
var G__54941_55575 = ((function (G__54939_55573,G__54940_55574){
return (function (_){
return null;
});})(G__54939_55573,G__54940_55574))
;
goog.object.set(G__54939_55573,G__54940_55574,G__54941_55575);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55580 = arguments.length;
var i__4731__auto___55581 = (0);
while(true){
if((i__4731__auto___55581 < len__4730__auto___55580)){
args__4736__auto__.push((arguments[i__4731__auto___55581]));

var G__55583 = (i__4731__auto___55581 + (1));
i__4731__auto___55581 = G__55583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq54942){
var G__54943 = cljs.core.first(seq54942);
var seq54942__$1 = cljs.core.next(seq54942);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54943,seq54942__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54953 = arguments.length;
switch (G__54953) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__54957_55593 = shadow.dom.dom_node(el);
var G__54958_55594 = cljs.core.name(event);
var G__54959_55595 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54957_55593,G__54958_55594,G__54959_55595) : shadow.dom.dom_listen.call(null,G__54957_55593,G__54958_55594,G__54959_55595));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__52380__auto___55600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___55600,buf,chan,event_fn){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___55600,buf,chan,event_fn){
return (function (state_54965){
var state_val_54966 = (state_54965[(1)]);
if((state_val_54966 === (1))){
var state_54965__$1 = state_54965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54965__$1,(2),once_or_cleanup);
} else {
if((state_val_54966 === (2))){
var inst_54961 = (state_54965[(2)]);
var inst_54963 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54965__$1 = (function (){var statearr_54968 = state_54965;
(statearr_54968[(7)] = inst_54961);

return statearr_54968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54965__$1,inst_54963);
} else {
return null;
}
}
});})(c__52380__auto___55600,buf,chan,event_fn))
;
return ((function (switch__51967__auto__,c__52380__auto___55600,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__51968__auto__ = null;
var shadow$dom$state_machine__51968__auto____0 = (function (){
var statearr_54969 = [null,null,null,null,null,null,null,null];
(statearr_54969[(0)] = shadow$dom$state_machine__51968__auto__);

(statearr_54969[(1)] = (1));

return statearr_54969;
});
var shadow$dom$state_machine__51968__auto____1 = (function (state_54965){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_54965);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e54970){if((e54970 instanceof Object)){
var ex__51971__auto__ = e54970;
var statearr_54971_55612 = state_54965;
(statearr_54971_55612[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55613 = state_54965;
state_54965 = G__55613;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
shadow$dom$state_machine__51968__auto__ = function(state_54965){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51968__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51968__auto____1.call(this,state_54965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51968__auto____0;
shadow$dom$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51968__auto____1;
return shadow$dom$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___55600,buf,chan,event_fn))
})();
var state__52382__auto__ = (function (){var statearr_54973 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_54973[(6)] = c__52380__auto___55600);

return statearr_54973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___55600,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
