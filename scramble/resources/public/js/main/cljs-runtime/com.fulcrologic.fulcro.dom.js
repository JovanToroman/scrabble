goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = (function (){var G__61874 = React.createElement("div",null);
var G__61875 = "$$typeof";
return goog.object.get(G__61874,G__61875);
})();
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(child)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__61907){
var vec__61908 = p__61907;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61908,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61908,(1),null);
var pair = vec__61908;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__61918){
var vec__61919 = p__61918;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61919,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61919,(1),null);
var pair = vec__61919;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(arg)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(arg)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__61933){
var vec__61935 = p__61933;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61935,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61935,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__61938 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61938,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__61938;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__61947 = arguments.length;
switch (G__61947) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__61948 = component.refs;
var G__61948__$1 = (((G__61948 == null))?null:goog.object.get(G__61948,name));
if((G__61948__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__61948__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__61962 = arguments.length;
switch (G__61962) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___62811 = arguments.length;
var i__4731__auto___62812 = (0);
while(true){
if((i__4731__auto___62812 < len__4730__auto___62811)){
args_arr__4751__auto__.push((arguments[i__4731__auto___62812]));

var G__62813 = (i__4731__auto___62812 + (1));
i__4731__auto___62812 = G__62813;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq61958){
var G__61959 = cljs.core.first(seq61958);
var seq61958__$1 = cljs.core.next(seq61958);
var G__61960 = cljs.core.first(seq61958__$1);
var seq61958__$2 = cljs.core.next(seq61958__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61959,G__61960,seq61958__$2);
});

com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__61976_62814 = next_state;
var G__61977_62815 = next_props;
var G__61978_62816 = ({"onChange": on_change});
goog.object.extend(G__61976_62814,G__61977_62815,G__61978_62816);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__61988 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__61988) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__61988));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__61991_62817 = state;
var G__61992_62818 = props;
var G__61993_62819 = ({"onChange": (function (){var G__61994 = goog.object.get(this$,"onChange");
var G__61995 = this$;
return goog.bind(G__61994,G__61995);
})()});
goog.object.extend(G__61991_62817,G__61992_62818,G__61993_62819);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x61998_62820 = ctor.prototype;
x61998_62820.onChange = ((function (x61998_62820,ctor){
return (function (event){
var this$ = this;
var temp__5735__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x61998_62820,ctor))
;

x61998_62820.UNSAFE_componentWillReceiveProps = ((function (x61998_62820,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__62005 = this_node;
var G__62006 = ((function (G__62005,state_value,this_node,this$,x61998_62820,ctor){
return (function (p1__61989_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__61989_SHARP_);
});})(G__62005,state_value,this_node,this$,x61998_62820,ctor))
;
return goog.dom.findNode(G__62005,G__62006);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = state_value;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = element_value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,168,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x61998_62820,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
});})(state_value,this_node,value_node,element_value,this$,x61998_62820,ctor))
,null)),null,1449743741);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x61998_62820,ctor))
;

x61998_62820.render = ((function (x61998_62820,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x61998_62820,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__62821__delegate = function (props,children){
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__62821 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__62822__i = 0, G__62822__a = new Array(arguments.length -  1);
while (G__62822__i < G__62822__a.length) {G__62822__a[G__62822__i] = arguments[G__62822__i + 1]; ++G__62822__i;}
  children = new cljs.core.IndexedSeq(G__62822__a,0,null);
} 
return G__62821__delegate.call(this,props,children);};
G__62821.cljs$lang$maxFixedArity = 1;
G__62821.cljs$lang$applyTo = (function (arglist__62823){
var props = cljs.core.first(arglist__62823);
var children = cljs.core.rest(arglist__62823);
return G__62821__delegate(props,children);
});
G__62821.cljs$core$IFn$_invoke$arity$variadic = G__62821__delegate;
return G__62821;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__62024 = tag;
switch (G__62024) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62024)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__62030 = arguments.length;
switch (G__62030) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__62031 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__62032 = cljs.core.seq(vec__62031);
var first__62033 = cljs.core.first(seq__62032);
var seq__62032__$1 = cljs.core.next(seq__62032);
var head = first__62033;
var tail = seq__62032__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__62034 = (function (){var G__62035 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__62035,tail);

return G__62035;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62034) : f.call(null,G__62034));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__62041 = (function (){var G__62042 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__62042,args);

return G__62042;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62041) : f.call(null,G__62041));
} else {
if(cljs.core.object_QMARK_(head)){
var G__62044 = (function (){var G__62045 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__62045,tail);

return G__62045;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62044) : f.call(null,G__62044));
} else {
if(cljs.core.map_QMARK_(head)){
var G__62047 = (function (){var G__62048 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__62048,tail);

return G__62048;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62047) : f.call(null,G__62047));
} else {
var G__62049 = (function (){var G__62050 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__62050,args);

return G__62050;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__62049) : f.call(null,G__62049));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62826 = arguments.length;
var i__4731__auto___62827 = (0);
while(true){
if((i__4731__auto___62827 < len__4730__auto___62826)){
args__4736__auto__.push((arguments[i__4731__auto___62827]));

var G__62828 = (i__4731__auto___62827 + (1));
i__4731__auto___62827 = G__62828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62078 = conformed_args__60569__auto__;
var map__62078__$1 = (((((!((map__62078 == null))))?(((((map__62078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62078):map__62078);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq62074){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62074));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62829 = arguments.length;
var i__4731__auto___62831 = (0);
while(true){
if((i__4731__auto___62831 < len__4730__auto___62829)){
args__4736__auto__.push((arguments[i__4731__auto___62831]));

var G__62833 = (i__4731__auto___62831 + (1));
i__4731__auto___62831 = G__62833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62085 = conformed_args__60569__auto__;
var map__62085__$1 = (((((!((map__62085 == null))))?(((((map__62085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62085):map__62085);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq62084){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62084));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62836 = arguments.length;
var i__4731__auto___62837 = (0);
while(true){
if((i__4731__auto___62837 < len__4730__auto___62836)){
args__4736__auto__.push((arguments[i__4731__auto___62837]));

var G__62838 = (i__4731__auto___62837 + (1));
i__4731__auto___62837 = G__62838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62091 = conformed_args__60569__auto__;
var map__62091__$1 = (((((!((map__62091 == null))))?(((((map__62091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62091):map__62091);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq62089){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62089));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62839 = arguments.length;
var i__4731__auto___62840 = (0);
while(true){
if((i__4731__auto___62840 < len__4730__auto___62839)){
args__4736__auto__.push((arguments[i__4731__auto___62840]));

var G__62841 = (i__4731__auto___62840 + (1));
i__4731__auto___62840 = G__62841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62094 = conformed_args__60569__auto__;
var map__62094__$1 = (((((!((map__62094 == null))))?(((((map__62094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62094):map__62094);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq62093){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62093));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62842 = arguments.length;
var i__4731__auto___62843 = (0);
while(true){
if((i__4731__auto___62843 < len__4730__auto___62842)){
args__4736__auto__.push((arguments[i__4731__auto___62843]));

var G__62844 = (i__4731__auto___62843 + (1));
i__4731__auto___62843 = G__62844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62098 = conformed_args__60569__auto__;
var map__62098__$1 = (((((!((map__62098 == null))))?(((((map__62098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62098):map__62098);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq62096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62096));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62845 = arguments.length;
var i__4731__auto___62846 = (0);
while(true){
if((i__4731__auto___62846 < len__4730__auto___62845)){
args__4736__auto__.push((arguments[i__4731__auto___62846]));

var G__62847 = (i__4731__auto___62846 + (1));
i__4731__auto___62846 = G__62847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62101 = conformed_args__60569__auto__;
var map__62101__$1 = (((((!((map__62101 == null))))?(((((map__62101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62101):map__62101);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq62100){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62100));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62849 = arguments.length;
var i__4731__auto___62850 = (0);
while(true){
if((i__4731__auto___62850 < len__4730__auto___62849)){
args__4736__auto__.push((arguments[i__4731__auto___62850]));

var G__62851 = (i__4731__auto___62850 + (1));
i__4731__auto___62850 = G__62851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62104 = conformed_args__60569__auto__;
var map__62104__$1 = (((((!((map__62104 == null))))?(((((map__62104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62104):map__62104);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq62103){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62103));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62858 = arguments.length;
var i__4731__auto___62859 = (0);
while(true){
if((i__4731__auto___62859 < len__4730__auto___62858)){
args__4736__auto__.push((arguments[i__4731__auto___62859]));

var G__62860 = (i__4731__auto___62859 + (1));
i__4731__auto___62859 = G__62860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62110 = conformed_args__60569__auto__;
var map__62110__$1 = (((((!((map__62110 == null))))?(((((map__62110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62110):map__62110);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq62107){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62107));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62867 = arguments.length;
var i__4731__auto___62868 = (0);
while(true){
if((i__4731__auto___62868 < len__4730__auto___62867)){
args__4736__auto__.push((arguments[i__4731__auto___62868]));

var G__62869 = (i__4731__auto___62868 + (1));
i__4731__auto___62868 = G__62869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62119 = conformed_args__60569__auto__;
var map__62119__$1 = (((((!((map__62119 == null))))?(((((map__62119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62119):map__62119);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq62113){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62113));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62871 = arguments.length;
var i__4731__auto___62872 = (0);
while(true){
if((i__4731__auto___62872 < len__4730__auto___62871)){
args__4736__auto__.push((arguments[i__4731__auto___62872]));

var G__62873 = (i__4731__auto___62872 + (1));
i__4731__auto___62872 = G__62873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62126 = conformed_args__60569__auto__;
var map__62126__$1 = (((((!((map__62126 == null))))?(((((map__62126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62126):map__62126);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq62121){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62121));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62874 = arguments.length;
var i__4731__auto___62875 = (0);
while(true){
if((i__4731__auto___62875 < len__4730__auto___62874)){
args__4736__auto__.push((arguments[i__4731__auto___62875]));

var G__62876 = (i__4731__auto___62875 + (1));
i__4731__auto___62875 = G__62876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62132 = conformed_args__60569__auto__;
var map__62132__$1 = (((((!((map__62132 == null))))?(((((map__62132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62132):map__62132);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62132__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62132__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62132__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq62129){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62129));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62882 = arguments.length;
var i__4731__auto___62883 = (0);
while(true){
if((i__4731__auto___62883 < len__4730__auto___62882)){
args__4736__auto__.push((arguments[i__4731__auto___62883]));

var G__62884 = (i__4731__auto___62883 + (1));
i__4731__auto___62883 = G__62884;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62148 = conformed_args__60569__auto__;
var map__62148__$1 = (((((!((map__62148 == null))))?(((((map__62148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62148):map__62148);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq62139){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62139));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62885 = arguments.length;
var i__4731__auto___62886 = (0);
while(true){
if((i__4731__auto___62886 < len__4730__auto___62885)){
args__4736__auto__.push((arguments[i__4731__auto___62886]));

var G__62887 = (i__4731__auto___62886 + (1));
i__4731__auto___62886 = G__62887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62155 = conformed_args__60569__auto__;
var map__62155__$1 = (((((!((map__62155 == null))))?(((((map__62155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62155):map__62155);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq62153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62153));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62888 = arguments.length;
var i__4731__auto___62889 = (0);
while(true){
if((i__4731__auto___62889 < len__4730__auto___62888)){
args__4736__auto__.push((arguments[i__4731__auto___62889]));

var G__62890 = (i__4731__auto___62889 + (1));
i__4731__auto___62889 = G__62890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62171 = conformed_args__60569__auto__;
var map__62171__$1 = (((((!((map__62171 == null))))?(((((map__62171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62171):map__62171);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq62163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62163));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62891 = arguments.length;
var i__4731__auto___62892 = (0);
while(true){
if((i__4731__auto___62892 < len__4730__auto___62891)){
args__4736__auto__.push((arguments[i__4731__auto___62892]));

var G__62893 = (i__4731__auto___62892 + (1));
i__4731__auto___62892 = G__62893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62181 = conformed_args__60569__auto__;
var map__62181__$1 = (((((!((map__62181 == null))))?(((((map__62181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62181):map__62181);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62181__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62181__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62181__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq62177){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62177));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62894 = arguments.length;
var i__4731__auto___62895 = (0);
while(true){
if((i__4731__auto___62895 < len__4730__auto___62894)){
args__4736__auto__.push((arguments[i__4731__auto___62895]));

var G__62896 = (i__4731__auto___62895 + (1));
i__4731__auto___62895 = G__62896;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62187 = conformed_args__60569__auto__;
var map__62187__$1 = (((((!((map__62187 == null))))?(((((map__62187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62187):map__62187);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq62184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62184));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62897 = arguments.length;
var i__4731__auto___62898 = (0);
while(true){
if((i__4731__auto___62898 < len__4730__auto___62897)){
args__4736__auto__.push((arguments[i__4731__auto___62898]));

var G__62899 = (i__4731__auto___62898 + (1));
i__4731__auto___62898 = G__62899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62193 = conformed_args__60569__auto__;
var map__62193__$1 = (((((!((map__62193 == null))))?(((((map__62193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62193):map__62193);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq62192){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62192));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62900 = arguments.length;
var i__4731__auto___62901 = (0);
while(true){
if((i__4731__auto___62901 < len__4730__auto___62900)){
args__4736__auto__.push((arguments[i__4731__auto___62901]));

var G__62902 = (i__4731__auto___62901 + (1));
i__4731__auto___62901 = G__62902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62198 = conformed_args__60569__auto__;
var map__62198__$1 = (((((!((map__62198 == null))))?(((((map__62198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62198):map__62198);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq62195){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62195));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62903 = arguments.length;
var i__4731__auto___62904 = (0);
while(true){
if((i__4731__auto___62904 < len__4730__auto___62903)){
args__4736__auto__.push((arguments[i__4731__auto___62904]));

var G__62905 = (i__4731__auto___62904 + (1));
i__4731__auto___62904 = G__62905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62203 = conformed_args__60569__auto__;
var map__62203__$1 = (((((!((map__62203 == null))))?(((((map__62203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62203):map__62203);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq62202){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62202));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62906 = arguments.length;
var i__4731__auto___62907 = (0);
while(true){
if((i__4731__auto___62907 < len__4730__auto___62906)){
args__4736__auto__.push((arguments[i__4731__auto___62907]));

var G__62908 = (i__4731__auto___62907 + (1));
i__4731__auto___62907 = G__62908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62209 = conformed_args__60569__auto__;
var map__62209__$1 = (((((!((map__62209 == null))))?(((((map__62209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62209):map__62209);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq62208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62208));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62909 = arguments.length;
var i__4731__auto___62910 = (0);
while(true){
if((i__4731__auto___62910 < len__4730__auto___62909)){
args__4736__auto__.push((arguments[i__4731__auto___62910]));

var G__62911 = (i__4731__auto___62910 + (1));
i__4731__auto___62910 = G__62911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62217 = conformed_args__60569__auto__;
var map__62217__$1 = (((((!((map__62217 == null))))?(((((map__62217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62217):map__62217);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq62213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62213));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62912 = arguments.length;
var i__4731__auto___62913 = (0);
while(true){
if((i__4731__auto___62913 < len__4730__auto___62912)){
args__4736__auto__.push((arguments[i__4731__auto___62913]));

var G__62914 = (i__4731__auto___62913 + (1));
i__4731__auto___62913 = G__62914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62223 = conformed_args__60569__auto__;
var map__62223__$1 = (((((!((map__62223 == null))))?(((((map__62223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62223):map__62223);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq62219){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62219));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62915 = arguments.length;
var i__4731__auto___62916 = (0);
while(true){
if((i__4731__auto___62916 < len__4730__auto___62915)){
args__4736__auto__.push((arguments[i__4731__auto___62916]));

var G__62917 = (i__4731__auto___62916 + (1));
i__4731__auto___62916 = G__62917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62237 = conformed_args__60569__auto__;
var map__62237__$1 = (((((!((map__62237 == null))))?(((((map__62237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62237):map__62237);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq62228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62228));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62918 = arguments.length;
var i__4731__auto___62919 = (0);
while(true){
if((i__4731__auto___62919 < len__4730__auto___62918)){
args__4736__auto__.push((arguments[i__4731__auto___62919]));

var G__62920 = (i__4731__auto___62919 + (1));
i__4731__auto___62919 = G__62920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62253 = conformed_args__60569__auto__;
var map__62253__$1 = (((((!((map__62253 == null))))?(((((map__62253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62253):map__62253);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq62248){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62248));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62921 = arguments.length;
var i__4731__auto___62922 = (0);
while(true){
if((i__4731__auto___62922 < len__4730__auto___62921)){
args__4736__auto__.push((arguments[i__4731__auto___62922]));

var G__62923 = (i__4731__auto___62922 + (1));
i__4731__auto___62922 = G__62923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62269 = conformed_args__60569__auto__;
var map__62269__$1 = (((((!((map__62269 == null))))?(((((map__62269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62269):map__62269);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq62264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62264));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62924 = arguments.length;
var i__4731__auto___62925 = (0);
while(true){
if((i__4731__auto___62925 < len__4730__auto___62924)){
args__4736__auto__.push((arguments[i__4731__auto___62925]));

var G__62926 = (i__4731__auto___62925 + (1));
i__4731__auto___62925 = G__62926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62275 = conformed_args__60569__auto__;
var map__62275__$1 = (((((!((map__62275 == null))))?(((((map__62275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62275):map__62275);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq62271){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62271));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62927 = arguments.length;
var i__4731__auto___62928 = (0);
while(true){
if((i__4731__auto___62928 < len__4730__auto___62927)){
args__4736__auto__.push((arguments[i__4731__auto___62928]));

var G__62929 = (i__4731__auto___62928 + (1));
i__4731__auto___62928 = G__62929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62278 = conformed_args__60569__auto__;
var map__62278__$1 = (((((!((map__62278 == null))))?(((((map__62278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62278):map__62278);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq62277){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62277));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62930 = arguments.length;
var i__4731__auto___62931 = (0);
while(true){
if((i__4731__auto___62931 < len__4730__auto___62930)){
args__4736__auto__.push((arguments[i__4731__auto___62931]));

var G__62932 = (i__4731__auto___62931 + (1));
i__4731__auto___62931 = G__62932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62281 = conformed_args__60569__auto__;
var map__62281__$1 = (((((!((map__62281 == null))))?(((((map__62281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62281):map__62281);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq62280){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62280));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62933 = arguments.length;
var i__4731__auto___62934 = (0);
while(true){
if((i__4731__auto___62934 < len__4730__auto___62933)){
args__4736__auto__.push((arguments[i__4731__auto___62934]));

var G__62935 = (i__4731__auto___62934 + (1));
i__4731__auto___62934 = G__62935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62285 = conformed_args__60569__auto__;
var map__62285__$1 = (((((!((map__62285 == null))))?(((((map__62285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62285):map__62285);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq62283){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62283));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62936 = arguments.length;
var i__4731__auto___62937 = (0);
while(true){
if((i__4731__auto___62937 < len__4730__auto___62936)){
args__4736__auto__.push((arguments[i__4731__auto___62937]));

var G__62938 = (i__4731__auto___62937 + (1));
i__4731__auto___62937 = G__62938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62298 = conformed_args__60569__auto__;
var map__62298__$1 = (((((!((map__62298 == null))))?(((((map__62298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62298):map__62298);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq62295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62295));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62939 = arguments.length;
var i__4731__auto___62940 = (0);
while(true){
if((i__4731__auto___62940 < len__4730__auto___62939)){
args__4736__auto__.push((arguments[i__4731__auto___62940]));

var G__62941 = (i__4731__auto___62940 + (1));
i__4731__auto___62940 = G__62941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62302 = conformed_args__60569__auto__;
var map__62302__$1 = (((((!((map__62302 == null))))?(((((map__62302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62302):map__62302);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq62301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62301));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62942 = arguments.length;
var i__4731__auto___62943 = (0);
while(true){
if((i__4731__auto___62943 < len__4730__auto___62942)){
args__4736__auto__.push((arguments[i__4731__auto___62943]));

var G__62944 = (i__4731__auto___62943 + (1));
i__4731__auto___62943 = G__62944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62306 = conformed_args__60569__auto__;
var map__62306__$1 = (((((!((map__62306 == null))))?(((((map__62306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62306):map__62306);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62306__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62306__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq62305){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62305));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62945 = arguments.length;
var i__4731__auto___62946 = (0);
while(true){
if((i__4731__auto___62946 < len__4730__auto___62945)){
args__4736__auto__.push((arguments[i__4731__auto___62946]));

var G__62947 = (i__4731__auto___62946 + (1));
i__4731__auto___62946 = G__62947;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62309 = conformed_args__60569__auto__;
var map__62309__$1 = (((((!((map__62309 == null))))?(((((map__62309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62309):map__62309);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq62308){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62308));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62948 = arguments.length;
var i__4731__auto___62949 = (0);
while(true){
if((i__4731__auto___62949 < len__4730__auto___62948)){
args__4736__auto__.push((arguments[i__4731__auto___62949]));

var G__62950 = (i__4731__auto___62949 + (1));
i__4731__auto___62949 = G__62950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62312 = conformed_args__60569__auto__;
var map__62312__$1 = (((((!((map__62312 == null))))?(((((map__62312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62312):map__62312);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq62311){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62311));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62951 = arguments.length;
var i__4731__auto___62952 = (0);
while(true){
if((i__4731__auto___62952 < len__4730__auto___62951)){
args__4736__auto__.push((arguments[i__4731__auto___62952]));

var G__62953 = (i__4731__auto___62952 + (1));
i__4731__auto___62952 = G__62953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62316 = conformed_args__60569__auto__;
var map__62316__$1 = (((((!((map__62316 == null))))?(((((map__62316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62316):map__62316);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq62315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62315));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62954 = arguments.length;
var i__4731__auto___62955 = (0);
while(true){
if((i__4731__auto___62955 < len__4730__auto___62954)){
args__4736__auto__.push((arguments[i__4731__auto___62955]));

var G__62956 = (i__4731__auto___62955 + (1));
i__4731__auto___62955 = G__62956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62319 = conformed_args__60569__auto__;
var map__62319__$1 = (((((!((map__62319 == null))))?(((((map__62319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62319):map__62319);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq62318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62318));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62957 = arguments.length;
var i__4731__auto___62958 = (0);
while(true){
if((i__4731__auto___62958 < len__4730__auto___62957)){
args__4736__auto__.push((arguments[i__4731__auto___62958]));

var G__62959 = (i__4731__auto___62958 + (1));
i__4731__auto___62958 = G__62959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62322 = conformed_args__60569__auto__;
var map__62322__$1 = (((((!((map__62322 == null))))?(((((map__62322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62322):map__62322);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq62321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62321));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62960 = arguments.length;
var i__4731__auto___62961 = (0);
while(true){
if((i__4731__auto___62961 < len__4730__auto___62960)){
args__4736__auto__.push((arguments[i__4731__auto___62961]));

var G__62962 = (i__4731__auto___62961 + (1));
i__4731__auto___62961 = G__62962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62325 = conformed_args__60569__auto__;
var map__62325__$1 = (((((!((map__62325 == null))))?(((((map__62325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62325):map__62325);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq62324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62324));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62963 = arguments.length;
var i__4731__auto___62964 = (0);
while(true){
if((i__4731__auto___62964 < len__4730__auto___62963)){
args__4736__auto__.push((arguments[i__4731__auto___62964]));

var G__62965 = (i__4731__auto___62964 + (1));
i__4731__auto___62964 = G__62965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62328 = conformed_args__60569__auto__;
var map__62328__$1 = (((((!((map__62328 == null))))?(((((map__62328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62328):map__62328);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq62327){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62327));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62966 = arguments.length;
var i__4731__auto___62967 = (0);
while(true){
if((i__4731__auto___62967 < len__4730__auto___62966)){
args__4736__auto__.push((arguments[i__4731__auto___62967]));

var G__62968 = (i__4731__auto___62967 + (1));
i__4731__auto___62967 = G__62968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62332 = conformed_args__60569__auto__;
var map__62332__$1 = (((((!((map__62332 == null))))?(((((map__62332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62332):map__62332);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq62330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62330));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62969 = arguments.length;
var i__4731__auto___62970 = (0);
while(true){
if((i__4731__auto___62970 < len__4730__auto___62969)){
args__4736__auto__.push((arguments[i__4731__auto___62970]));

var G__62971 = (i__4731__auto___62970 + (1));
i__4731__auto___62970 = G__62971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62335 = conformed_args__60569__auto__;
var map__62335__$1 = (((((!((map__62335 == null))))?(((((map__62335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62335):map__62335);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq62334){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62334));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62972 = arguments.length;
var i__4731__auto___62973 = (0);
while(true){
if((i__4731__auto___62973 < len__4730__auto___62972)){
args__4736__auto__.push((arguments[i__4731__auto___62973]));

var G__62974 = (i__4731__auto___62973 + (1));
i__4731__auto___62973 = G__62974;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62338 = conformed_args__60569__auto__;
var map__62338__$1 = (((((!((map__62338 == null))))?(((((map__62338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62338):map__62338);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq62337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62337));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62975 = arguments.length;
var i__4731__auto___62976 = (0);
while(true){
if((i__4731__auto___62976 < len__4730__auto___62975)){
args__4736__auto__.push((arguments[i__4731__auto___62976]));

var G__62977 = (i__4731__auto___62976 + (1));
i__4731__auto___62976 = G__62977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62341 = conformed_args__60569__auto__;
var map__62341__$1 = (((((!((map__62341 == null))))?(((((map__62341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62341):map__62341);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62341__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq62340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62978 = arguments.length;
var i__4731__auto___62979 = (0);
while(true){
if((i__4731__auto___62979 < len__4730__auto___62978)){
args__4736__auto__.push((arguments[i__4731__auto___62979]));

var G__62980 = (i__4731__auto___62979 + (1));
i__4731__auto___62979 = G__62980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62345 = conformed_args__60569__auto__;
var map__62345__$1 = (((((!((map__62345 == null))))?(((((map__62345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62345):map__62345);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq62344){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62344));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62981 = arguments.length;
var i__4731__auto___62982 = (0);
while(true){
if((i__4731__auto___62982 < len__4730__auto___62981)){
args__4736__auto__.push((arguments[i__4731__auto___62982]));

var G__62983 = (i__4731__auto___62982 + (1));
i__4731__auto___62982 = G__62983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62348 = conformed_args__60569__auto__;
var map__62348__$1 = (((((!((map__62348 == null))))?(((((map__62348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62348):map__62348);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62348__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq62347){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62347));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62984 = arguments.length;
var i__4731__auto___62985 = (0);
while(true){
if((i__4731__auto___62985 < len__4730__auto___62984)){
args__4736__auto__.push((arguments[i__4731__auto___62985]));

var G__62986 = (i__4731__auto___62985 + (1));
i__4731__auto___62985 = G__62986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62351 = conformed_args__60569__auto__;
var map__62351__$1 = (((((!((map__62351 == null))))?(((((map__62351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62351):map__62351);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq62350){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62350));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62987 = arguments.length;
var i__4731__auto___62988 = (0);
while(true){
if((i__4731__auto___62988 < len__4730__auto___62987)){
args__4736__auto__.push((arguments[i__4731__auto___62988]));

var G__62989 = (i__4731__auto___62988 + (1));
i__4731__auto___62988 = G__62989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62354 = conformed_args__60569__auto__;
var map__62354__$1 = (((((!((map__62354 == null))))?(((((map__62354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62354):map__62354);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq62353){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62353));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62990 = arguments.length;
var i__4731__auto___62991 = (0);
while(true){
if((i__4731__auto___62991 < len__4730__auto___62990)){
args__4736__auto__.push((arguments[i__4731__auto___62991]));

var G__62992 = (i__4731__auto___62991 + (1));
i__4731__auto___62991 = G__62992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62357 = conformed_args__60569__auto__;
var map__62357__$1 = (((((!((map__62357 == null))))?(((((map__62357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62357):map__62357);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq62356){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62356));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62993 = arguments.length;
var i__4731__auto___62994 = (0);
while(true){
if((i__4731__auto___62994 < len__4730__auto___62993)){
args__4736__auto__.push((arguments[i__4731__auto___62994]));

var G__62995 = (i__4731__auto___62994 + (1));
i__4731__auto___62994 = G__62995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62360 = conformed_args__60569__auto__;
var map__62360__$1 = (((((!((map__62360 == null))))?(((((map__62360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62360):map__62360);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62360__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62360__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62360__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq62359){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62359));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62996 = arguments.length;
var i__4731__auto___62997 = (0);
while(true){
if((i__4731__auto___62997 < len__4730__auto___62996)){
args__4736__auto__.push((arguments[i__4731__auto___62997]));

var G__62998 = (i__4731__auto___62997 + (1));
i__4731__auto___62997 = G__62998;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62363 = conformed_args__60569__auto__;
var map__62363__$1 = (((((!((map__62363 == null))))?(((((map__62363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62363):map__62363);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62363__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62363__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62363__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq62362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62362));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62999 = arguments.length;
var i__4731__auto___63000 = (0);
while(true){
if((i__4731__auto___63000 < len__4730__auto___62999)){
args__4736__auto__.push((arguments[i__4731__auto___63000]));

var G__63001 = (i__4731__auto___63000 + (1));
i__4731__auto___63000 = G__63001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62366 = conformed_args__60569__auto__;
var map__62366__$1 = (((((!((map__62366 == null))))?(((((map__62366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62366):map__62366);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq62365){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62365));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63002 = arguments.length;
var i__4731__auto___63003 = (0);
while(true){
if((i__4731__auto___63003 < len__4730__auto___63002)){
args__4736__auto__.push((arguments[i__4731__auto___63003]));

var G__63004 = (i__4731__auto___63003 + (1));
i__4731__auto___63003 = G__63004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62369 = conformed_args__60569__auto__;
var map__62369__$1 = (((((!((map__62369 == null))))?(((((map__62369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62369):map__62369);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq62368){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62368));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63005 = arguments.length;
var i__4731__auto___63006 = (0);
while(true){
if((i__4731__auto___63006 < len__4730__auto___63005)){
args__4736__auto__.push((arguments[i__4731__auto___63006]));

var G__63007 = (i__4731__auto___63006 + (1));
i__4731__auto___63006 = G__63007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62372 = conformed_args__60569__auto__;
var map__62372__$1 = (((((!((map__62372 == null))))?(((((map__62372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62372):map__62372);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq62371){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62371));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63008 = arguments.length;
var i__4731__auto___63009 = (0);
while(true){
if((i__4731__auto___63009 < len__4730__auto___63008)){
args__4736__auto__.push((arguments[i__4731__auto___63009]));

var G__63010 = (i__4731__auto___63009 + (1));
i__4731__auto___63009 = G__63010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62375 = conformed_args__60569__auto__;
var map__62375__$1 = (((((!((map__62375 == null))))?(((((map__62375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62375):map__62375);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62375__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62375__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62375__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq62374){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62374));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63011 = arguments.length;
var i__4731__auto___63012 = (0);
while(true){
if((i__4731__auto___63012 < len__4730__auto___63011)){
args__4736__auto__.push((arguments[i__4731__auto___63012]));

var G__63013 = (i__4731__auto___63012 + (1));
i__4731__auto___63012 = G__63013;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62378 = conformed_args__60569__auto__;
var map__62378__$1 = (((((!((map__62378 == null))))?(((((map__62378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62378):map__62378);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq62377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62377));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63014 = arguments.length;
var i__4731__auto___63015 = (0);
while(true){
if((i__4731__auto___63015 < len__4730__auto___63014)){
args__4736__auto__.push((arguments[i__4731__auto___63015]));

var G__63016 = (i__4731__auto___63015 + (1));
i__4731__auto___63015 = G__63016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62381 = conformed_args__60569__auto__;
var map__62381__$1 = (((((!((map__62381 == null))))?(((((map__62381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62381):map__62381);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq62380){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62380));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63017 = arguments.length;
var i__4731__auto___63018 = (0);
while(true){
if((i__4731__auto___63018 < len__4730__auto___63017)){
args__4736__auto__.push((arguments[i__4731__auto___63018]));

var G__63019 = (i__4731__auto___63018 + (1));
i__4731__auto___63018 = G__63019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62384 = conformed_args__60569__auto__;
var map__62384__$1 = (((((!((map__62384 == null))))?(((((map__62384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62384):map__62384);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq62383){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62383));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63020 = arguments.length;
var i__4731__auto___63021 = (0);
while(true){
if((i__4731__auto___63021 < len__4730__auto___63020)){
args__4736__auto__.push((arguments[i__4731__auto___63021]));

var G__63022 = (i__4731__auto___63021 + (1));
i__4731__auto___63021 = G__63022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62387 = conformed_args__60569__auto__;
var map__62387__$1 = (((((!((map__62387 == null))))?(((((map__62387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62387):map__62387);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62387__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62387__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62387__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq62386){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62386));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63023 = arguments.length;
var i__4731__auto___63024 = (0);
while(true){
if((i__4731__auto___63024 < len__4730__auto___63023)){
args__4736__auto__.push((arguments[i__4731__auto___63024]));

var G__63025 = (i__4731__auto___63024 + (1));
i__4731__auto___63024 = G__63025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62390 = conformed_args__60569__auto__;
var map__62390__$1 = (((((!((map__62390 == null))))?(((((map__62390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62390):map__62390);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq62389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62389));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63026 = arguments.length;
var i__4731__auto___63027 = (0);
while(true){
if((i__4731__auto___63027 < len__4730__auto___63026)){
args__4736__auto__.push((arguments[i__4731__auto___63027]));

var G__63028 = (i__4731__auto___63027 + (1));
i__4731__auto___63027 = G__63028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62393 = conformed_args__60569__auto__;
var map__62393__$1 = (((((!((map__62393 == null))))?(((((map__62393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62393):map__62393);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62393__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62393__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq62392){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62392));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63029 = arguments.length;
var i__4731__auto___63030 = (0);
while(true){
if((i__4731__auto___63030 < len__4730__auto___63029)){
args__4736__auto__.push((arguments[i__4731__auto___63030]));

var G__63031 = (i__4731__auto___63030 + (1));
i__4731__auto___63030 = G__63031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62396 = conformed_args__60569__auto__;
var map__62396__$1 = (((((!((map__62396 == null))))?(((((map__62396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62396):map__62396);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62396__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62396__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62396__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq62395){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62395));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63032 = arguments.length;
var i__4731__auto___63033 = (0);
while(true){
if((i__4731__auto___63033 < len__4730__auto___63032)){
args__4736__auto__.push((arguments[i__4731__auto___63033]));

var G__63034 = (i__4731__auto___63033 + (1));
i__4731__auto___63033 = G__63034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62399 = conformed_args__60569__auto__;
var map__62399__$1 = (((((!((map__62399 == null))))?(((((map__62399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62399):map__62399);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62399__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq62398){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62398));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63035 = arguments.length;
var i__4731__auto___63036 = (0);
while(true){
if((i__4731__auto___63036 < len__4730__auto___63035)){
args__4736__auto__.push((arguments[i__4731__auto___63036]));

var G__63037 = (i__4731__auto___63036 + (1));
i__4731__auto___63036 = G__63037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62402 = conformed_args__60569__auto__;
var map__62402__$1 = (((((!((map__62402 == null))))?(((((map__62402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62402):map__62402);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62402__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62402__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62402__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq62401){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62401));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63038 = arguments.length;
var i__4731__auto___63039 = (0);
while(true){
if((i__4731__auto___63039 < len__4730__auto___63038)){
args__4736__auto__.push((arguments[i__4731__auto___63039]));

var G__63040 = (i__4731__auto___63039 + (1));
i__4731__auto___63039 = G__63040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62405 = conformed_args__60569__auto__;
var map__62405__$1 = (((((!((map__62405 == null))))?(((((map__62405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62405):map__62405);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq62404){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62404));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63041 = arguments.length;
var i__4731__auto___63042 = (0);
while(true){
if((i__4731__auto___63042 < len__4730__auto___63041)){
args__4736__auto__.push((arguments[i__4731__auto___63042]));

var G__63043 = (i__4731__auto___63042 + (1));
i__4731__auto___63042 = G__63043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62408 = conformed_args__60569__auto__;
var map__62408__$1 = (((((!((map__62408 == null))))?(((((map__62408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62408):map__62408);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62408__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62408__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62408__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq62407){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62407));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63044 = arguments.length;
var i__4731__auto___63045 = (0);
while(true){
if((i__4731__auto___63045 < len__4730__auto___63044)){
args__4736__auto__.push((arguments[i__4731__auto___63045]));

var G__63046 = (i__4731__auto___63045 + (1));
i__4731__auto___63045 = G__63046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62411 = conformed_args__60569__auto__;
var map__62411__$1 = (((((!((map__62411 == null))))?(((((map__62411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62411):map__62411);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq62410){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62410));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63047 = arguments.length;
var i__4731__auto___63048 = (0);
while(true){
if((i__4731__auto___63048 < len__4730__auto___63047)){
args__4736__auto__.push((arguments[i__4731__auto___63048]));

var G__63049 = (i__4731__auto___63048 + (1));
i__4731__auto___63048 = G__63049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62414 = conformed_args__60569__auto__;
var map__62414__$1 = (((((!((map__62414 == null))))?(((((map__62414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62414):map__62414);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq62413){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62413));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63050 = arguments.length;
var i__4731__auto___63051 = (0);
while(true){
if((i__4731__auto___63051 < len__4730__auto___63050)){
args__4736__auto__.push((arguments[i__4731__auto___63051]));

var G__63052 = (i__4731__auto___63051 + (1));
i__4731__auto___63051 = G__63052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62417 = conformed_args__60569__auto__;
var map__62417__$1 = (((((!((map__62417 == null))))?(((((map__62417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62417):map__62417);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62417__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62417__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62417__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq62416){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62416));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63053 = arguments.length;
var i__4731__auto___63054 = (0);
while(true){
if((i__4731__auto___63054 < len__4730__auto___63053)){
args__4736__auto__.push((arguments[i__4731__auto___63054]));

var G__63055 = (i__4731__auto___63054 + (1));
i__4731__auto___63054 = G__63055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62420 = conformed_args__60569__auto__;
var map__62420__$1 = (((((!((map__62420 == null))))?(((((map__62420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62420):map__62420);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq62419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62419));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63056 = arguments.length;
var i__4731__auto___63057 = (0);
while(true){
if((i__4731__auto___63057 < len__4730__auto___63056)){
args__4736__auto__.push((arguments[i__4731__auto___63057]));

var G__63058 = (i__4731__auto___63057 + (1));
i__4731__auto___63057 = G__63058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62423 = conformed_args__60569__auto__;
var map__62423__$1 = (((((!((map__62423 == null))))?(((((map__62423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62423):map__62423);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62423__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62423__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62423__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq62422){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62422));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63059 = arguments.length;
var i__4731__auto___63060 = (0);
while(true){
if((i__4731__auto___63060 < len__4730__auto___63059)){
args__4736__auto__.push((arguments[i__4731__auto___63060]));

var G__63061 = (i__4731__auto___63060 + (1));
i__4731__auto___63060 = G__63061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62426 = conformed_args__60569__auto__;
var map__62426__$1 = (((((!((map__62426 == null))))?(((((map__62426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62426):map__62426);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq62425){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62425));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63062 = arguments.length;
var i__4731__auto___63063 = (0);
while(true){
if((i__4731__auto___63063 < len__4730__auto___63062)){
args__4736__auto__.push((arguments[i__4731__auto___63063]));

var G__63064 = (i__4731__auto___63063 + (1));
i__4731__auto___63063 = G__63064;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62429 = conformed_args__60569__auto__;
var map__62429__$1 = (((((!((map__62429 == null))))?(((((map__62429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62429):map__62429);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62429__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62429__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq62428){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62428));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63065 = arguments.length;
var i__4731__auto___63066 = (0);
while(true){
if((i__4731__auto___63066 < len__4730__auto___63065)){
args__4736__auto__.push((arguments[i__4731__auto___63066]));

var G__63067 = (i__4731__auto___63066 + (1));
i__4731__auto___63066 = G__63067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62432 = conformed_args__60569__auto__;
var map__62432__$1 = (((((!((map__62432 == null))))?(((((map__62432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62432):map__62432);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq62431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62431));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63068 = arguments.length;
var i__4731__auto___63069 = (0);
while(true){
if((i__4731__auto___63069 < len__4730__auto___63068)){
args__4736__auto__.push((arguments[i__4731__auto___63069]));

var G__63070 = (i__4731__auto___63069 + (1));
i__4731__auto___63069 = G__63070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62435 = conformed_args__60569__auto__;
var map__62435__$1 = (((((!((map__62435 == null))))?(((((map__62435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62435):map__62435);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq62434){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62434));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63071 = arguments.length;
var i__4731__auto___63072 = (0);
while(true){
if((i__4731__auto___63072 < len__4730__auto___63071)){
args__4736__auto__.push((arguments[i__4731__auto___63072]));

var G__63073 = (i__4731__auto___63072 + (1));
i__4731__auto___63072 = G__63073;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62438 = conformed_args__60569__auto__;
var map__62438__$1 = (((((!((map__62438 == null))))?(((((map__62438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62438):map__62438);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq62437){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62437));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63074 = arguments.length;
var i__4731__auto___63075 = (0);
while(true){
if((i__4731__auto___63075 < len__4730__auto___63074)){
args__4736__auto__.push((arguments[i__4731__auto___63075]));

var G__63076 = (i__4731__auto___63075 + (1));
i__4731__auto___63075 = G__63076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62441 = conformed_args__60569__auto__;
var map__62441__$1 = (((((!((map__62441 == null))))?(((((map__62441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62441):map__62441);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq62440){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62440));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63077 = arguments.length;
var i__4731__auto___63078 = (0);
while(true){
if((i__4731__auto___63078 < len__4730__auto___63077)){
args__4736__auto__.push((arguments[i__4731__auto___63078]));

var G__63079 = (i__4731__auto___63078 + (1));
i__4731__auto___63078 = G__63079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62444 = conformed_args__60569__auto__;
var map__62444__$1 = (((((!((map__62444 == null))))?(((((map__62444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62444):map__62444);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq62443){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62443));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63080 = arguments.length;
var i__4731__auto___63081 = (0);
while(true){
if((i__4731__auto___63081 < len__4730__auto___63080)){
args__4736__auto__.push((arguments[i__4731__auto___63081]));

var G__63082 = (i__4731__auto___63081 + (1));
i__4731__auto___63081 = G__63082;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62447 = conformed_args__60569__auto__;
var map__62447__$1 = (((((!((map__62447 == null))))?(((((map__62447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62447):map__62447);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62447__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62447__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62447__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq62446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62446));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63083 = arguments.length;
var i__4731__auto___63084 = (0);
while(true){
if((i__4731__auto___63084 < len__4730__auto___63083)){
args__4736__auto__.push((arguments[i__4731__auto___63084]));

var G__63085 = (i__4731__auto___63084 + (1));
i__4731__auto___63084 = G__63085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62450 = conformed_args__60569__auto__;
var map__62450__$1 = (((((!((map__62450 == null))))?(((((map__62450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62450):map__62450);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq62449){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62449));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63086 = arguments.length;
var i__4731__auto___63087 = (0);
while(true){
if((i__4731__auto___63087 < len__4730__auto___63086)){
args__4736__auto__.push((arguments[i__4731__auto___63087]));

var G__63088 = (i__4731__auto___63087 + (1));
i__4731__auto___63087 = G__63088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62453 = conformed_args__60569__auto__;
var map__62453__$1 = (((((!((map__62453 == null))))?(((((map__62453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62453):map__62453);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62453__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62453__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62453__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq62452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62452));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63089 = arguments.length;
var i__4731__auto___63090 = (0);
while(true){
if((i__4731__auto___63090 < len__4730__auto___63089)){
args__4736__auto__.push((arguments[i__4731__auto___63090]));

var G__63091 = (i__4731__auto___63090 + (1));
i__4731__auto___63090 = G__63091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62456 = conformed_args__60569__auto__;
var map__62456__$1 = (((((!((map__62456 == null))))?(((((map__62456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62456):map__62456);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq62455){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62455));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63092 = arguments.length;
var i__4731__auto___63093 = (0);
while(true){
if((i__4731__auto___63093 < len__4730__auto___63092)){
args__4736__auto__.push((arguments[i__4731__auto___63093]));

var G__63094 = (i__4731__auto___63093 + (1));
i__4731__auto___63093 = G__63094;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62459 = conformed_args__60569__auto__;
var map__62459__$1 = (((((!((map__62459 == null))))?(((((map__62459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62459):map__62459);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq62458){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62458));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63095 = arguments.length;
var i__4731__auto___63096 = (0);
while(true){
if((i__4731__auto___63096 < len__4730__auto___63095)){
args__4736__auto__.push((arguments[i__4731__auto___63096]));

var G__63097 = (i__4731__auto___63096 + (1));
i__4731__auto___63096 = G__63097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62462 = conformed_args__60569__auto__;
var map__62462__$1 = (((((!((map__62462 == null))))?(((((map__62462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62462):map__62462);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq62461){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62461));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63098 = arguments.length;
var i__4731__auto___63099 = (0);
while(true){
if((i__4731__auto___63099 < len__4730__auto___63098)){
args__4736__auto__.push((arguments[i__4731__auto___63099]));

var G__63100 = (i__4731__auto___63099 + (1));
i__4731__auto___63099 = G__63100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62465 = conformed_args__60569__auto__;
var map__62465__$1 = (((((!((map__62465 == null))))?(((((map__62465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62465):map__62465);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq62464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62464));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63101 = arguments.length;
var i__4731__auto___63102 = (0);
while(true){
if((i__4731__auto___63102 < len__4730__auto___63101)){
args__4736__auto__.push((arguments[i__4731__auto___63102]));

var G__63103 = (i__4731__auto___63102 + (1));
i__4731__auto___63102 = G__63103;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62468 = conformed_args__60569__auto__;
var map__62468__$1 = (((((!((map__62468 == null))))?(((((map__62468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62468):map__62468);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq62467){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62467));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63104 = arguments.length;
var i__4731__auto___63105 = (0);
while(true){
if((i__4731__auto___63105 < len__4730__auto___63104)){
args__4736__auto__.push((arguments[i__4731__auto___63105]));

var G__63106 = (i__4731__auto___63105 + (1));
i__4731__auto___63105 = G__63106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62471 = conformed_args__60569__auto__;
var map__62471__$1 = (((((!((map__62471 == null))))?(((((map__62471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62471):map__62471);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq62470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62470));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63107 = arguments.length;
var i__4731__auto___63108 = (0);
while(true){
if((i__4731__auto___63108 < len__4730__auto___63107)){
args__4736__auto__.push((arguments[i__4731__auto___63108]));

var G__63109 = (i__4731__auto___63108 + (1));
i__4731__auto___63108 = G__63109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62474 = conformed_args__60569__auto__;
var map__62474__$1 = (((((!((map__62474 == null))))?(((((map__62474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62474):map__62474);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq62473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62473));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63110 = arguments.length;
var i__4731__auto___63111 = (0);
while(true){
if((i__4731__auto___63111 < len__4730__auto___63110)){
args__4736__auto__.push((arguments[i__4731__auto___63111]));

var G__63112 = (i__4731__auto___63111 + (1));
i__4731__auto___63111 = G__63112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62477 = conformed_args__60569__auto__;
var map__62477__$1 = (((((!((map__62477 == null))))?(((((map__62477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62477):map__62477);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq62476){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62476));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63113 = arguments.length;
var i__4731__auto___63114 = (0);
while(true){
if((i__4731__auto___63114 < len__4730__auto___63113)){
args__4736__auto__.push((arguments[i__4731__auto___63114]));

var G__63115 = (i__4731__auto___63114 + (1));
i__4731__auto___63114 = G__63115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62480 = conformed_args__60569__auto__;
var map__62480__$1 = (((((!((map__62480 == null))))?(((((map__62480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62480):map__62480);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq62479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62479));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63116 = arguments.length;
var i__4731__auto___63117 = (0);
while(true){
if((i__4731__auto___63117 < len__4730__auto___63116)){
args__4736__auto__.push((arguments[i__4731__auto___63117]));

var G__63118 = (i__4731__auto___63117 + (1));
i__4731__auto___63117 = G__63118;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62483 = conformed_args__60569__auto__;
var map__62483__$1 = (((((!((map__62483 == null))))?(((((map__62483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62483):map__62483);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62483__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq62482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62482));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63119 = arguments.length;
var i__4731__auto___63120 = (0);
while(true){
if((i__4731__auto___63120 < len__4730__auto___63119)){
args__4736__auto__.push((arguments[i__4731__auto___63120]));

var G__63121 = (i__4731__auto___63120 + (1));
i__4731__auto___63120 = G__63121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62486 = conformed_args__60569__auto__;
var map__62486__$1 = (((((!((map__62486 == null))))?(((((map__62486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62486):map__62486);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq62485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62485));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63122 = arguments.length;
var i__4731__auto___63123 = (0);
while(true){
if((i__4731__auto___63123 < len__4730__auto___63122)){
args__4736__auto__.push((arguments[i__4731__auto___63123]));

var G__63124 = (i__4731__auto___63123 + (1));
i__4731__auto___63123 = G__63124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62489 = conformed_args__60569__auto__;
var map__62489__$1 = (((((!((map__62489 == null))))?(((((map__62489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62489):map__62489);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq62488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62488));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63125 = arguments.length;
var i__4731__auto___63126 = (0);
while(true){
if((i__4731__auto___63126 < len__4730__auto___63125)){
args__4736__auto__.push((arguments[i__4731__auto___63126]));

var G__63127 = (i__4731__auto___63126 + (1));
i__4731__auto___63126 = G__63127;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62492 = conformed_args__60569__auto__;
var map__62492__$1 = (((((!((map__62492 == null))))?(((((map__62492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62492):map__62492);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq62491){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62491));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63128 = arguments.length;
var i__4731__auto___63129 = (0);
while(true){
if((i__4731__auto___63129 < len__4730__auto___63128)){
args__4736__auto__.push((arguments[i__4731__auto___63129]));

var G__63130 = (i__4731__auto___63129 + (1));
i__4731__auto___63129 = G__63130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62495 = conformed_args__60569__auto__;
var map__62495__$1 = (((((!((map__62495 == null))))?(((((map__62495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62495):map__62495);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq62494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62494));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63131 = arguments.length;
var i__4731__auto___63132 = (0);
while(true){
if((i__4731__auto___63132 < len__4730__auto___63131)){
args__4736__auto__.push((arguments[i__4731__auto___63132]));

var G__63133 = (i__4731__auto___63132 + (1));
i__4731__auto___63132 = G__63133;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62498 = conformed_args__60569__auto__;
var map__62498__$1 = (((((!((map__62498 == null))))?(((((map__62498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62498):map__62498);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq62497){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62497));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63134 = arguments.length;
var i__4731__auto___63135 = (0);
while(true){
if((i__4731__auto___63135 < len__4730__auto___63134)){
args__4736__auto__.push((arguments[i__4731__auto___63135]));

var G__63136 = (i__4731__auto___63135 + (1));
i__4731__auto___63135 = G__63136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62501 = conformed_args__60569__auto__;
var map__62501__$1 = (((((!((map__62501 == null))))?(((((map__62501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62501):map__62501);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq62500){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62500));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63137 = arguments.length;
var i__4731__auto___63138 = (0);
while(true){
if((i__4731__auto___63138 < len__4730__auto___63137)){
args__4736__auto__.push((arguments[i__4731__auto___63138]));

var G__63139 = (i__4731__auto___63138 + (1));
i__4731__auto___63138 = G__63139;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62504 = conformed_args__60569__auto__;
var map__62504__$1 = (((((!((map__62504 == null))))?(((((map__62504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62504):map__62504);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq62503){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62503));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63140 = arguments.length;
var i__4731__auto___63141 = (0);
while(true){
if((i__4731__auto___63141 < len__4730__auto___63140)){
args__4736__auto__.push((arguments[i__4731__auto___63141]));

var G__63142 = (i__4731__auto___63141 + (1));
i__4731__auto___63141 = G__63142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62507 = conformed_args__60569__auto__;
var map__62507__$1 = (((((!((map__62507 == null))))?(((((map__62507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62507):map__62507);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq62506){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62506));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63143 = arguments.length;
var i__4731__auto___63144 = (0);
while(true){
if((i__4731__auto___63144 < len__4730__auto___63143)){
args__4736__auto__.push((arguments[i__4731__auto___63144]));

var G__63145 = (i__4731__auto___63144 + (1));
i__4731__auto___63144 = G__63145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62510 = conformed_args__60569__auto__;
var map__62510__$1 = (((((!((map__62510 == null))))?(((((map__62510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62510):map__62510);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq62509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62509));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63146 = arguments.length;
var i__4731__auto___63147 = (0);
while(true){
if((i__4731__auto___63147 < len__4730__auto___63146)){
args__4736__auto__.push((arguments[i__4731__auto___63147]));

var G__63148 = (i__4731__auto___63147 + (1));
i__4731__auto___63147 = G__63148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62513 = conformed_args__60569__auto__;
var map__62513__$1 = (((((!((map__62513 == null))))?(((((map__62513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62513):map__62513);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq62512){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62512));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63149 = arguments.length;
var i__4731__auto___63150 = (0);
while(true){
if((i__4731__auto___63150 < len__4730__auto___63149)){
args__4736__auto__.push((arguments[i__4731__auto___63150]));

var G__63151 = (i__4731__auto___63150 + (1));
i__4731__auto___63150 = G__63151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62516 = conformed_args__60569__auto__;
var map__62516__$1 = (((((!((map__62516 == null))))?(((((map__62516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62516):map__62516);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq62515){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62515));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63152 = arguments.length;
var i__4731__auto___63153 = (0);
while(true){
if((i__4731__auto___63153 < len__4730__auto___63152)){
args__4736__auto__.push((arguments[i__4731__auto___63153]));

var G__63154 = (i__4731__auto___63153 + (1));
i__4731__auto___63153 = G__63154;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62519 = conformed_args__60569__auto__;
var map__62519__$1 = (((((!((map__62519 == null))))?(((((map__62519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62519):map__62519);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq62518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62518));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63155 = arguments.length;
var i__4731__auto___63156 = (0);
while(true){
if((i__4731__auto___63156 < len__4730__auto___63155)){
args__4736__auto__.push((arguments[i__4731__auto___63156]));

var G__63157 = (i__4731__auto___63156 + (1));
i__4731__auto___63156 = G__63157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62522 = conformed_args__60569__auto__;
var map__62522__$1 = (((((!((map__62522 == null))))?(((((map__62522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62522):map__62522);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq62521){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62521));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63158 = arguments.length;
var i__4731__auto___63159 = (0);
while(true){
if((i__4731__auto___63159 < len__4730__auto___63158)){
args__4736__auto__.push((arguments[i__4731__auto___63159]));

var G__63160 = (i__4731__auto___63159 + (1));
i__4731__auto___63159 = G__63160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62525 = conformed_args__60569__auto__;
var map__62525__$1 = (((((!((map__62525 == null))))?(((((map__62525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62525):map__62525);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq62524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62524));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63161 = arguments.length;
var i__4731__auto___63162 = (0);
while(true){
if((i__4731__auto___63162 < len__4730__auto___63161)){
args__4736__auto__.push((arguments[i__4731__auto___63162]));

var G__63163 = (i__4731__auto___63162 + (1));
i__4731__auto___63162 = G__63163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62528 = conformed_args__60569__auto__;
var map__62528__$1 = (((((!((map__62528 == null))))?(((((map__62528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62528):map__62528);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq62527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62527));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63164 = arguments.length;
var i__4731__auto___63165 = (0);
while(true){
if((i__4731__auto___63165 < len__4730__auto___63164)){
args__4736__auto__.push((arguments[i__4731__auto___63165]));

var G__63166 = (i__4731__auto___63165 + (1));
i__4731__auto___63165 = G__63166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62531 = conformed_args__60569__auto__;
var map__62531__$1 = (((((!((map__62531 == null))))?(((((map__62531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62531):map__62531);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq62530){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62530));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63167 = arguments.length;
var i__4731__auto___63168 = (0);
while(true){
if((i__4731__auto___63168 < len__4730__auto___63167)){
args__4736__auto__.push((arguments[i__4731__auto___63168]));

var G__63169 = (i__4731__auto___63168 + (1));
i__4731__auto___63168 = G__63169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62534 = conformed_args__60569__auto__;
var map__62534__$1 = (((((!((map__62534 == null))))?(((((map__62534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62534):map__62534);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq62533){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62533));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63170 = arguments.length;
var i__4731__auto___63171 = (0);
while(true){
if((i__4731__auto___63171 < len__4730__auto___63170)){
args__4736__auto__.push((arguments[i__4731__auto___63171]));

var G__63172 = (i__4731__auto___63171 + (1));
i__4731__auto___63171 = G__63172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62537 = conformed_args__60569__auto__;
var map__62537__$1 = (((((!((map__62537 == null))))?(((((map__62537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62537):map__62537);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq62536){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62536));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63173 = arguments.length;
var i__4731__auto___63174 = (0);
while(true){
if((i__4731__auto___63174 < len__4730__auto___63173)){
args__4736__auto__.push((arguments[i__4731__auto___63174]));

var G__63175 = (i__4731__auto___63174 + (1));
i__4731__auto___63174 = G__63175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62540 = conformed_args__60569__auto__;
var map__62540__$1 = (((((!((map__62540 == null))))?(((((map__62540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62540):map__62540);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq62539){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62539));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63176 = arguments.length;
var i__4731__auto___63177 = (0);
while(true){
if((i__4731__auto___63177 < len__4730__auto___63176)){
args__4736__auto__.push((arguments[i__4731__auto___63177]));

var G__63178 = (i__4731__auto___63177 + (1));
i__4731__auto___63177 = G__63178;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62543 = conformed_args__60569__auto__;
var map__62543__$1 = (((((!((map__62543 == null))))?(((((map__62543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62543):map__62543);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq62542){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62542));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63179 = arguments.length;
var i__4731__auto___63180 = (0);
while(true){
if((i__4731__auto___63180 < len__4730__auto___63179)){
args__4736__auto__.push((arguments[i__4731__auto___63180]));

var G__63181 = (i__4731__auto___63180 + (1));
i__4731__auto___63180 = G__63181;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62546 = conformed_args__60569__auto__;
var map__62546__$1 = (((((!((map__62546 == null))))?(((((map__62546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62546):map__62546);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq62545){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62545));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63182 = arguments.length;
var i__4731__auto___63183 = (0);
while(true){
if((i__4731__auto___63183 < len__4730__auto___63182)){
args__4736__auto__.push((arguments[i__4731__auto___63183]));

var G__63184 = (i__4731__auto___63183 + (1));
i__4731__auto___63183 = G__63184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62549 = conformed_args__60569__auto__;
var map__62549__$1 = (((((!((map__62549 == null))))?(((((map__62549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62549):map__62549);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq62548){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62548));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63185 = arguments.length;
var i__4731__auto___63186 = (0);
while(true){
if((i__4731__auto___63186 < len__4730__auto___63185)){
args__4736__auto__.push((arguments[i__4731__auto___63186]));

var G__63187 = (i__4731__auto___63186 + (1));
i__4731__auto___63186 = G__63187;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62552 = conformed_args__60569__auto__;
var map__62552__$1 = (((((!((map__62552 == null))))?(((((map__62552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62552):map__62552);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq62551){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62551));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63188 = arguments.length;
var i__4731__auto___63189 = (0);
while(true){
if((i__4731__auto___63189 < len__4730__auto___63188)){
args__4736__auto__.push((arguments[i__4731__auto___63189]));

var G__63190 = (i__4731__auto___63189 + (1));
i__4731__auto___63189 = G__63190;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62555 = conformed_args__60569__auto__;
var map__62555__$1 = (((((!((map__62555 == null))))?(((((map__62555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62555):map__62555);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq62554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62554));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63191 = arguments.length;
var i__4731__auto___63192 = (0);
while(true){
if((i__4731__auto___63192 < len__4730__auto___63191)){
args__4736__auto__.push((arguments[i__4731__auto___63192]));

var G__63193 = (i__4731__auto___63192 + (1));
i__4731__auto___63192 = G__63193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62558 = conformed_args__60569__auto__;
var map__62558__$1 = (((((!((map__62558 == null))))?(((((map__62558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62558):map__62558);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq62557){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62557));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63194 = arguments.length;
var i__4731__auto___63195 = (0);
while(true){
if((i__4731__auto___63195 < len__4730__auto___63194)){
args__4736__auto__.push((arguments[i__4731__auto___63195]));

var G__63196 = (i__4731__auto___63195 + (1));
i__4731__auto___63195 = G__63196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62561 = conformed_args__60569__auto__;
var map__62561__$1 = (((((!((map__62561 == null))))?(((((map__62561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62561):map__62561);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq62560){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62560));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63197 = arguments.length;
var i__4731__auto___63198 = (0);
while(true){
if((i__4731__auto___63198 < len__4730__auto___63197)){
args__4736__auto__.push((arguments[i__4731__auto___63198]));

var G__63199 = (i__4731__auto___63198 + (1));
i__4731__auto___63198 = G__63199;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62564 = conformed_args__60569__auto__;
var map__62564__$1 = (((((!((map__62564 == null))))?(((((map__62564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62564):map__62564);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq62563){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62563));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63200 = arguments.length;
var i__4731__auto___63201 = (0);
while(true){
if((i__4731__auto___63201 < len__4730__auto___63200)){
args__4736__auto__.push((arguments[i__4731__auto___63201]));

var G__63202 = (i__4731__auto___63201 + (1));
i__4731__auto___63201 = G__63202;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62567 = conformed_args__60569__auto__;
var map__62567__$1 = (((((!((map__62567 == null))))?(((((map__62567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62567):map__62567);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq62566){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62566));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63203 = arguments.length;
var i__4731__auto___63204 = (0);
while(true){
if((i__4731__auto___63204 < len__4730__auto___63203)){
args__4736__auto__.push((arguments[i__4731__auto___63204]));

var G__63205 = (i__4731__auto___63204 + (1));
i__4731__auto___63204 = G__63205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62570 = conformed_args__60569__auto__;
var map__62570__$1 = (((((!((map__62570 == null))))?(((((map__62570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62570):map__62570);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq62569){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62569));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63206 = arguments.length;
var i__4731__auto___63207 = (0);
while(true){
if((i__4731__auto___63207 < len__4730__auto___63206)){
args__4736__auto__.push((arguments[i__4731__auto___63207]));

var G__63208 = (i__4731__auto___63207 + (1));
i__4731__auto___63207 = G__63208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62573 = conformed_args__60569__auto__;
var map__62573__$1 = (((((!((map__62573 == null))))?(((((map__62573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62573):map__62573);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq62572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62572));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63209 = arguments.length;
var i__4731__auto___63210 = (0);
while(true){
if((i__4731__auto___63210 < len__4730__auto___63209)){
args__4736__auto__.push((arguments[i__4731__auto___63210]));

var G__63211 = (i__4731__auto___63210 + (1));
i__4731__auto___63210 = G__63211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62576 = conformed_args__60569__auto__;
var map__62576__$1 = (((((!((map__62576 == null))))?(((((map__62576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62576):map__62576);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq62575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62575));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63212 = arguments.length;
var i__4731__auto___63213 = (0);
while(true){
if((i__4731__auto___63213 < len__4730__auto___63212)){
args__4736__auto__.push((arguments[i__4731__auto___63213]));

var G__63214 = (i__4731__auto___63213 + (1));
i__4731__auto___63213 = G__63214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62579 = conformed_args__60569__auto__;
var map__62579__$1 = (((((!((map__62579 == null))))?(((((map__62579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62579):map__62579);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq62578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62578));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63215 = arguments.length;
var i__4731__auto___63216 = (0);
while(true){
if((i__4731__auto___63216 < len__4730__auto___63215)){
args__4736__auto__.push((arguments[i__4731__auto___63216]));

var G__63217 = (i__4731__auto___63216 + (1));
i__4731__auto___63216 = G__63217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62582 = conformed_args__60569__auto__;
var map__62582__$1 = (((((!((map__62582 == null))))?(((((map__62582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62582):map__62582);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq62581){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62581));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63218 = arguments.length;
var i__4731__auto___63219 = (0);
while(true){
if((i__4731__auto___63219 < len__4730__auto___63218)){
args__4736__auto__.push((arguments[i__4731__auto___63219]));

var G__63220 = (i__4731__auto___63219 + (1));
i__4731__auto___63219 = G__63220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62585 = conformed_args__60569__auto__;
var map__62585__$1 = (((((!((map__62585 == null))))?(((((map__62585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62585):map__62585);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq62584){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62584));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63221 = arguments.length;
var i__4731__auto___63222 = (0);
while(true){
if((i__4731__auto___63222 < len__4730__auto___63221)){
args__4736__auto__.push((arguments[i__4731__auto___63222]));

var G__63223 = (i__4731__auto___63222 + (1));
i__4731__auto___63222 = G__63223;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62588 = conformed_args__60569__auto__;
var map__62588__$1 = (((((!((map__62588 == null))))?(((((map__62588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62588):map__62588);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq62587){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62587));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63224 = arguments.length;
var i__4731__auto___63225 = (0);
while(true){
if((i__4731__auto___63225 < len__4730__auto___63224)){
args__4736__auto__.push((arguments[i__4731__auto___63225]));

var G__63226 = (i__4731__auto___63225 + (1));
i__4731__auto___63225 = G__63226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62591 = conformed_args__60569__auto__;
var map__62591__$1 = (((((!((map__62591 == null))))?(((((map__62591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62591):map__62591);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq62590){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62590));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63227 = arguments.length;
var i__4731__auto___63228 = (0);
while(true){
if((i__4731__auto___63228 < len__4730__auto___63227)){
args__4736__auto__.push((arguments[i__4731__auto___63228]));

var G__63229 = (i__4731__auto___63228 + (1));
i__4731__auto___63228 = G__63229;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62594 = conformed_args__60569__auto__;
var map__62594__$1 = (((((!((map__62594 == null))))?(((((map__62594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62594):map__62594);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq62593){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62593));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63230 = arguments.length;
var i__4731__auto___63231 = (0);
while(true){
if((i__4731__auto___63231 < len__4730__auto___63230)){
args__4736__auto__.push((arguments[i__4731__auto___63231]));

var G__63232 = (i__4731__auto___63231 + (1));
i__4731__auto___63231 = G__63232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62597 = conformed_args__60569__auto__;
var map__62597__$1 = (((((!((map__62597 == null))))?(((((map__62597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62597):map__62597);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq62596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62596));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63233 = arguments.length;
var i__4731__auto___63234 = (0);
while(true){
if((i__4731__auto___63234 < len__4730__auto___63233)){
args__4736__auto__.push((arguments[i__4731__auto___63234]));

var G__63235 = (i__4731__auto___63234 + (1));
i__4731__auto___63234 = G__63235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62600 = conformed_args__60569__auto__;
var map__62600__$1 = (((((!((map__62600 == null))))?(((((map__62600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62600):map__62600);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq62599){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62599));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63236 = arguments.length;
var i__4731__auto___63237 = (0);
while(true){
if((i__4731__auto___63237 < len__4730__auto___63236)){
args__4736__auto__.push((arguments[i__4731__auto___63237]));

var G__63238 = (i__4731__auto___63237 + (1));
i__4731__auto___63237 = G__63238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62603 = conformed_args__60569__auto__;
var map__62603__$1 = (((((!((map__62603 == null))))?(((((map__62603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62603):map__62603);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq62602){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62602));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63239 = arguments.length;
var i__4731__auto___63240 = (0);
while(true){
if((i__4731__auto___63240 < len__4730__auto___63239)){
args__4736__auto__.push((arguments[i__4731__auto___63240]));

var G__63241 = (i__4731__auto___63240 + (1));
i__4731__auto___63240 = G__63241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62606 = conformed_args__60569__auto__;
var map__62606__$1 = (((((!((map__62606 == null))))?(((((map__62606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62606):map__62606);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq62605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62605));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63242 = arguments.length;
var i__4731__auto___63243 = (0);
while(true){
if((i__4731__auto___63243 < len__4730__auto___63242)){
args__4736__auto__.push((arguments[i__4731__auto___63243]));

var G__63244 = (i__4731__auto___63243 + (1));
i__4731__auto___63243 = G__63244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62609 = conformed_args__60569__auto__;
var map__62609__$1 = (((((!((map__62609 == null))))?(((((map__62609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62609):map__62609);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq62608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62608));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63245 = arguments.length;
var i__4731__auto___63246 = (0);
while(true){
if((i__4731__auto___63246 < len__4730__auto___63245)){
args__4736__auto__.push((arguments[i__4731__auto___63246]));

var G__63247 = (i__4731__auto___63246 + (1));
i__4731__auto___63246 = G__63247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62612 = conformed_args__60569__auto__;
var map__62612__$1 = (((((!((map__62612 == null))))?(((((map__62612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62612):map__62612);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq62611){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62611));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63248 = arguments.length;
var i__4731__auto___63249 = (0);
while(true){
if((i__4731__auto___63249 < len__4730__auto___63248)){
args__4736__auto__.push((arguments[i__4731__auto___63249]));

var G__63250 = (i__4731__auto___63249 + (1));
i__4731__auto___63249 = G__63250;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62615 = conformed_args__60569__auto__;
var map__62615__$1 = (((((!((map__62615 == null))))?(((((map__62615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62615):map__62615);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq62614){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62614));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63251 = arguments.length;
var i__4731__auto___63252 = (0);
while(true){
if((i__4731__auto___63252 < len__4730__auto___63251)){
args__4736__auto__.push((arguments[i__4731__auto___63252]));

var G__63253 = (i__4731__auto___63252 + (1));
i__4731__auto___63252 = G__63253;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62618 = conformed_args__60569__auto__;
var map__62618__$1 = (((((!((map__62618 == null))))?(((((map__62618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62618):map__62618);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq62617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62617));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63254 = arguments.length;
var i__4731__auto___63255 = (0);
while(true){
if((i__4731__auto___63255 < len__4730__auto___63254)){
args__4736__auto__.push((arguments[i__4731__auto___63255]));

var G__63256 = (i__4731__auto___63255 + (1));
i__4731__auto___63255 = G__63256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62621 = conformed_args__60569__auto__;
var map__62621__$1 = (((((!((map__62621 == null))))?(((((map__62621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62621):map__62621);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq62620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62620));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63257 = arguments.length;
var i__4731__auto___63258 = (0);
while(true){
if((i__4731__auto___63258 < len__4730__auto___63257)){
args__4736__auto__.push((arguments[i__4731__auto___63258]));

var G__63259 = (i__4731__auto___63258 + (1));
i__4731__auto___63258 = G__63259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62624 = conformed_args__60569__auto__;
var map__62624__$1 = (((((!((map__62624 == null))))?(((((map__62624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62624):map__62624);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq62623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62623));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63260 = arguments.length;
var i__4731__auto___63261 = (0);
while(true){
if((i__4731__auto___63261 < len__4730__auto___63260)){
args__4736__auto__.push((arguments[i__4731__auto___63261]));

var G__63262 = (i__4731__auto___63261 + (1));
i__4731__auto___63261 = G__63262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62627 = conformed_args__60569__auto__;
var map__62627__$1 = (((((!((map__62627 == null))))?(((((map__62627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62627):map__62627);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq62626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62626));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63263 = arguments.length;
var i__4731__auto___63264 = (0);
while(true){
if((i__4731__auto___63264 < len__4730__auto___63263)){
args__4736__auto__.push((arguments[i__4731__auto___63264]));

var G__63265 = (i__4731__auto___63264 + (1));
i__4731__auto___63264 = G__63265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62630 = conformed_args__60569__auto__;
var map__62630__$1 = (((((!((map__62630 == null))))?(((((map__62630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62630):map__62630);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq62629){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62629));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63266 = arguments.length;
var i__4731__auto___63267 = (0);
while(true){
if((i__4731__auto___63267 < len__4730__auto___63266)){
args__4736__auto__.push((arguments[i__4731__auto___63267]));

var G__63268 = (i__4731__auto___63267 + (1));
i__4731__auto___63267 = G__63268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62633 = conformed_args__60569__auto__;
var map__62633__$1 = (((((!((map__62633 == null))))?(((((map__62633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62633):map__62633);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq62632){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62632));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63269 = arguments.length;
var i__4731__auto___63270 = (0);
while(true){
if((i__4731__auto___63270 < len__4730__auto___63269)){
args__4736__auto__.push((arguments[i__4731__auto___63270]));

var G__63271 = (i__4731__auto___63270 + (1));
i__4731__auto___63270 = G__63271;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62636 = conformed_args__60569__auto__;
var map__62636__$1 = (((((!((map__62636 == null))))?(((((map__62636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62636):map__62636);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq62635){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62635));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63272 = arguments.length;
var i__4731__auto___63273 = (0);
while(true){
if((i__4731__auto___63273 < len__4730__auto___63272)){
args__4736__auto__.push((arguments[i__4731__auto___63273]));

var G__63274 = (i__4731__auto___63273 + (1));
i__4731__auto___63273 = G__63274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62639 = conformed_args__60569__auto__;
var map__62639__$1 = (((((!((map__62639 == null))))?(((((map__62639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62639):map__62639);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq62638){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62638));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63275 = arguments.length;
var i__4731__auto___63276 = (0);
while(true){
if((i__4731__auto___63276 < len__4730__auto___63275)){
args__4736__auto__.push((arguments[i__4731__auto___63276]));

var G__63277 = (i__4731__auto___63276 + (1));
i__4731__auto___63276 = G__63277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62642 = conformed_args__60569__auto__;
var map__62642__$1 = (((((!((map__62642 == null))))?(((((map__62642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62642):map__62642);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq62641){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62641));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63278 = arguments.length;
var i__4731__auto___63279 = (0);
while(true){
if((i__4731__auto___63279 < len__4730__auto___63278)){
args__4736__auto__.push((arguments[i__4731__auto___63279]));

var G__63280 = (i__4731__auto___63279 + (1));
i__4731__auto___63279 = G__63280;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62645 = conformed_args__60569__auto__;
var map__62645__$1 = (((((!((map__62645 == null))))?(((((map__62645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62645):map__62645);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq62644){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62644));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63281 = arguments.length;
var i__4731__auto___63282 = (0);
while(true){
if((i__4731__auto___63282 < len__4730__auto___63281)){
args__4736__auto__.push((arguments[i__4731__auto___63282]));

var G__63283 = (i__4731__auto___63282 + (1));
i__4731__auto___63282 = G__63283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62648 = conformed_args__60569__auto__;
var map__62648__$1 = (((((!((map__62648 == null))))?(((((map__62648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62648):map__62648);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq62647){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62647));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63284 = arguments.length;
var i__4731__auto___63285 = (0);
while(true){
if((i__4731__auto___63285 < len__4730__auto___63284)){
args__4736__auto__.push((arguments[i__4731__auto___63285]));

var G__63286 = (i__4731__auto___63285 + (1));
i__4731__auto___63285 = G__63286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62651 = conformed_args__60569__auto__;
var map__62651__$1 = (((((!((map__62651 == null))))?(((((map__62651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62651):map__62651);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq62650){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62650));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63287 = arguments.length;
var i__4731__auto___63288 = (0);
while(true){
if((i__4731__auto___63288 < len__4730__auto___63287)){
args__4736__auto__.push((arguments[i__4731__auto___63288]));

var G__63289 = (i__4731__auto___63288 + (1));
i__4731__auto___63288 = G__63289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62654 = conformed_args__60569__auto__;
var map__62654__$1 = (((((!((map__62654 == null))))?(((((map__62654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62654):map__62654);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq62653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62653));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63290 = arguments.length;
var i__4731__auto___63291 = (0);
while(true){
if((i__4731__auto___63291 < len__4730__auto___63290)){
args__4736__auto__.push((arguments[i__4731__auto___63291]));

var G__63292 = (i__4731__auto___63291 + (1));
i__4731__auto___63291 = G__63292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62657 = conformed_args__60569__auto__;
var map__62657__$1 = (((((!((map__62657 == null))))?(((((map__62657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62657):map__62657);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq62656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62656));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63293 = arguments.length;
var i__4731__auto___63294 = (0);
while(true){
if((i__4731__auto___63294 < len__4730__auto___63293)){
args__4736__auto__.push((arguments[i__4731__auto___63294]));

var G__63295 = (i__4731__auto___63294 + (1));
i__4731__auto___63294 = G__63295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62660 = conformed_args__60569__auto__;
var map__62660__$1 = (((((!((map__62660 == null))))?(((((map__62660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62660):map__62660);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq62659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62659));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63296 = arguments.length;
var i__4731__auto___63297 = (0);
while(true){
if((i__4731__auto___63297 < len__4730__auto___63296)){
args__4736__auto__.push((arguments[i__4731__auto___63297]));

var G__63298 = (i__4731__auto___63297 + (1));
i__4731__auto___63297 = G__63298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62663 = conformed_args__60569__auto__;
var map__62663__$1 = (((((!((map__62663 == null))))?(((((map__62663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62663):map__62663);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq62662){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62662));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63299 = arguments.length;
var i__4731__auto___63300 = (0);
while(true){
if((i__4731__auto___63300 < len__4730__auto___63299)){
args__4736__auto__.push((arguments[i__4731__auto___63300]));

var G__63301 = (i__4731__auto___63300 + (1));
i__4731__auto___63300 = G__63301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62666 = conformed_args__60569__auto__;
var map__62666__$1 = (((((!((map__62666 == null))))?(((((map__62666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62666):map__62666);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq62665){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62665));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63302 = arguments.length;
var i__4731__auto___63303 = (0);
while(true){
if((i__4731__auto___63303 < len__4730__auto___63302)){
args__4736__auto__.push((arguments[i__4731__auto___63303]));

var G__63304 = (i__4731__auto___63303 + (1));
i__4731__auto___63303 = G__63304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62669 = conformed_args__60569__auto__;
var map__62669__$1 = (((((!((map__62669 == null))))?(((((map__62669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62669):map__62669);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq62668){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62668));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63305 = arguments.length;
var i__4731__auto___63306 = (0);
while(true){
if((i__4731__auto___63306 < len__4730__auto___63305)){
args__4736__auto__.push((arguments[i__4731__auto___63306]));

var G__63307 = (i__4731__auto___63306 + (1));
i__4731__auto___63306 = G__63307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62672 = conformed_args__60569__auto__;
var map__62672__$1 = (((((!((map__62672 == null))))?(((((map__62672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62672):map__62672);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq62671){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62671));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63308 = arguments.length;
var i__4731__auto___63309 = (0);
while(true){
if((i__4731__auto___63309 < len__4730__auto___63308)){
args__4736__auto__.push((arguments[i__4731__auto___63309]));

var G__63310 = (i__4731__auto___63309 + (1));
i__4731__auto___63309 = G__63310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62675 = conformed_args__60569__auto__;
var map__62675__$1 = (((((!((map__62675 == null))))?(((((map__62675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62675):map__62675);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq62674){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62674));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63311 = arguments.length;
var i__4731__auto___63312 = (0);
while(true){
if((i__4731__auto___63312 < len__4730__auto___63311)){
args__4736__auto__.push((arguments[i__4731__auto___63312]));

var G__63313 = (i__4731__auto___63312 + (1));
i__4731__auto___63312 = G__63313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62678 = conformed_args__60569__auto__;
var map__62678__$1 = (((((!((map__62678 == null))))?(((((map__62678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62678):map__62678);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq62677){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62677));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63314 = arguments.length;
var i__4731__auto___63315 = (0);
while(true){
if((i__4731__auto___63315 < len__4730__auto___63314)){
args__4736__auto__.push((arguments[i__4731__auto___63315]));

var G__63316 = (i__4731__auto___63315 + (1));
i__4731__auto___63315 = G__63316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62681 = conformed_args__60569__auto__;
var map__62681__$1 = (((((!((map__62681 == null))))?(((((map__62681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62681):map__62681);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq62680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62680));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63317 = arguments.length;
var i__4731__auto___63318 = (0);
while(true){
if((i__4731__auto___63318 < len__4730__auto___63317)){
args__4736__auto__.push((arguments[i__4731__auto___63318]));

var G__63319 = (i__4731__auto___63318 + (1));
i__4731__auto___63318 = G__63319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62684 = conformed_args__60569__auto__;
var map__62684__$1 = (((((!((map__62684 == null))))?(((((map__62684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62684):map__62684);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq62683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62683));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63320 = arguments.length;
var i__4731__auto___63321 = (0);
while(true){
if((i__4731__auto___63321 < len__4730__auto___63320)){
args__4736__auto__.push((arguments[i__4731__auto___63321]));

var G__63322 = (i__4731__auto___63321 + (1));
i__4731__auto___63321 = G__63322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62687 = conformed_args__60569__auto__;
var map__62687__$1 = (((((!((map__62687 == null))))?(((((map__62687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62687):map__62687);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq62686){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62686));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63323 = arguments.length;
var i__4731__auto___63324 = (0);
while(true){
if((i__4731__auto___63324 < len__4730__auto___63323)){
args__4736__auto__.push((arguments[i__4731__auto___63324]));

var G__63325 = (i__4731__auto___63324 + (1));
i__4731__auto___63324 = G__63325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62690 = conformed_args__60569__auto__;
var map__62690__$1 = (((((!((map__62690 == null))))?(((((map__62690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62690):map__62690);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq62689){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62689));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63326 = arguments.length;
var i__4731__auto___63327 = (0);
while(true){
if((i__4731__auto___63327 < len__4730__auto___63326)){
args__4736__auto__.push((arguments[i__4731__auto___63327]));

var G__63328 = (i__4731__auto___63327 + (1));
i__4731__auto___63327 = G__63328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62693 = conformed_args__60569__auto__;
var map__62693__$1 = (((((!((map__62693 == null))))?(((((map__62693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62693):map__62693);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq62692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62692));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63329 = arguments.length;
var i__4731__auto___63330 = (0);
while(true){
if((i__4731__auto___63330 < len__4730__auto___63329)){
args__4736__auto__.push((arguments[i__4731__auto___63330]));

var G__63331 = (i__4731__auto___63330 + (1));
i__4731__auto___63330 = G__63331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62696 = conformed_args__60569__auto__;
var map__62696__$1 = (((((!((map__62696 == null))))?(((((map__62696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62696):map__62696);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq62695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62695));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63332 = arguments.length;
var i__4731__auto___63333 = (0);
while(true){
if((i__4731__auto___63333 < len__4730__auto___63332)){
args__4736__auto__.push((arguments[i__4731__auto___63333]));

var G__63334 = (i__4731__auto___63333 + (1));
i__4731__auto___63333 = G__63334;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62699 = conformed_args__60569__auto__;
var map__62699__$1 = (((((!((map__62699 == null))))?(((((map__62699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62699):map__62699);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq62698){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62698));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63335 = arguments.length;
var i__4731__auto___63336 = (0);
while(true){
if((i__4731__auto___63336 < len__4730__auto___63335)){
args__4736__auto__.push((arguments[i__4731__auto___63336]));

var G__63337 = (i__4731__auto___63336 + (1));
i__4731__auto___63336 = G__63337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62702 = conformed_args__60569__auto__;
var map__62702__$1 = (((((!((map__62702 == null))))?(((((map__62702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62702):map__62702);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq62701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62701));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63338 = arguments.length;
var i__4731__auto___63339 = (0);
while(true){
if((i__4731__auto___63339 < len__4730__auto___63338)){
args__4736__auto__.push((arguments[i__4731__auto___63339]));

var G__63340 = (i__4731__auto___63339 + (1));
i__4731__auto___63339 = G__63340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62705 = conformed_args__60569__auto__;
var map__62705__$1 = (((((!((map__62705 == null))))?(((((map__62705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62705):map__62705);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq62704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62704));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63341 = arguments.length;
var i__4731__auto___63342 = (0);
while(true){
if((i__4731__auto___63342 < len__4730__auto___63341)){
args__4736__auto__.push((arguments[i__4731__auto___63342]));

var G__63343 = (i__4731__auto___63342 + (1));
i__4731__auto___63342 = G__63343;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62708 = conformed_args__60569__auto__;
var map__62708__$1 = (((((!((map__62708 == null))))?(((((map__62708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62708):map__62708);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq62707){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62707));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63344 = arguments.length;
var i__4731__auto___63345 = (0);
while(true){
if((i__4731__auto___63345 < len__4730__auto___63344)){
args__4736__auto__.push((arguments[i__4731__auto___63345]));

var G__63346 = (i__4731__auto___63345 + (1));
i__4731__auto___63345 = G__63346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62711 = conformed_args__60569__auto__;
var map__62711__$1 = (((((!((map__62711 == null))))?(((((map__62711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62711):map__62711);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq62710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62710));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63347 = arguments.length;
var i__4731__auto___63348 = (0);
while(true){
if((i__4731__auto___63348 < len__4730__auto___63347)){
args__4736__auto__.push((arguments[i__4731__auto___63348]));

var G__63349 = (i__4731__auto___63348 + (1));
i__4731__auto___63348 = G__63349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62714 = conformed_args__60569__auto__;
var map__62714__$1 = (((((!((map__62714 == null))))?(((((map__62714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62714):map__62714);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq62713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62713));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63350 = arguments.length;
var i__4731__auto___63351 = (0);
while(true){
if((i__4731__auto___63351 < len__4730__auto___63350)){
args__4736__auto__.push((arguments[i__4731__auto___63351]));

var G__63352 = (i__4731__auto___63351 + (1));
i__4731__auto___63351 = G__63352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62717 = conformed_args__60569__auto__;
var map__62717__$1 = (((((!((map__62717 == null))))?(((((map__62717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62717):map__62717);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq62716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62716));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63353 = arguments.length;
var i__4731__auto___63354 = (0);
while(true){
if((i__4731__auto___63354 < len__4730__auto___63353)){
args__4736__auto__.push((arguments[i__4731__auto___63354]));

var G__63355 = (i__4731__auto___63354 + (1));
i__4731__auto___63354 = G__63355;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62720 = conformed_args__60569__auto__;
var map__62720__$1 = (((((!((map__62720 == null))))?(((((map__62720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62720):map__62720);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq62719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62719));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63356 = arguments.length;
var i__4731__auto___63357 = (0);
while(true){
if((i__4731__auto___63357 < len__4730__auto___63356)){
args__4736__auto__.push((arguments[i__4731__auto___63357]));

var G__63358 = (i__4731__auto___63357 + (1));
i__4731__auto___63357 = G__63358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62723 = conformed_args__60569__auto__;
var map__62723__$1 = (((((!((map__62723 == null))))?(((((map__62723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62723):map__62723);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq62722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62722));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63359 = arguments.length;
var i__4731__auto___63360 = (0);
while(true){
if((i__4731__auto___63360 < len__4730__auto___63359)){
args__4736__auto__.push((arguments[i__4731__auto___63360]));

var G__63361 = (i__4731__auto___63360 + (1));
i__4731__auto___63360 = G__63361;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62726 = conformed_args__60569__auto__;
var map__62726__$1 = (((((!((map__62726 == null))))?(((((map__62726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62726):map__62726);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq62725){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62725));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63362 = arguments.length;
var i__4731__auto___63363 = (0);
while(true){
if((i__4731__auto___63363 < len__4730__auto___63362)){
args__4736__auto__.push((arguments[i__4731__auto___63363]));

var G__63364 = (i__4731__auto___63363 + (1));
i__4731__auto___63363 = G__63364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62729 = conformed_args__60569__auto__;
var map__62729__$1 = (((((!((map__62729 == null))))?(((((map__62729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62729):map__62729);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq62728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62728));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63365 = arguments.length;
var i__4731__auto___63366 = (0);
while(true){
if((i__4731__auto___63366 < len__4730__auto___63365)){
args__4736__auto__.push((arguments[i__4731__auto___63366]));

var G__63367 = (i__4731__auto___63366 + (1));
i__4731__auto___63366 = G__63367;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62732 = conformed_args__60569__auto__;
var map__62732__$1 = (((((!((map__62732 == null))))?(((((map__62732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62732):map__62732);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq62731){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62731));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63368 = arguments.length;
var i__4731__auto___63369 = (0);
while(true){
if((i__4731__auto___63369 < len__4730__auto___63368)){
args__4736__auto__.push((arguments[i__4731__auto___63369]));

var G__63370 = (i__4731__auto___63369 + (1));
i__4731__auto___63369 = G__63370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62735 = conformed_args__60569__auto__;
var map__62735__$1 = (((((!((map__62735 == null))))?(((((map__62735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62735):map__62735);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq62734){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62734));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63371 = arguments.length;
var i__4731__auto___63372 = (0);
while(true){
if((i__4731__auto___63372 < len__4730__auto___63371)){
args__4736__auto__.push((arguments[i__4731__auto___63372]));

var G__63373 = (i__4731__auto___63372 + (1));
i__4731__auto___63372 = G__63373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62738 = conformed_args__60569__auto__;
var map__62738__$1 = (((((!((map__62738 == null))))?(((((map__62738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62738):map__62738);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq62737){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62737));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63374 = arguments.length;
var i__4731__auto___63375 = (0);
while(true){
if((i__4731__auto___63375 < len__4730__auto___63374)){
args__4736__auto__.push((arguments[i__4731__auto___63375]));

var G__63376 = (i__4731__auto___63375 + (1));
i__4731__auto___63375 = G__63376;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62741 = conformed_args__60569__auto__;
var map__62741__$1 = (((((!((map__62741 == null))))?(((((map__62741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62741):map__62741);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq62740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62740));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63377 = arguments.length;
var i__4731__auto___63378 = (0);
while(true){
if((i__4731__auto___63378 < len__4730__auto___63377)){
args__4736__auto__.push((arguments[i__4731__auto___63378]));

var G__63379 = (i__4731__auto___63378 + (1));
i__4731__auto___63378 = G__63379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62744 = conformed_args__60569__auto__;
var map__62744__$1 = (((((!((map__62744 == null))))?(((((map__62744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62744):map__62744);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq62743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62743));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63380 = arguments.length;
var i__4731__auto___63381 = (0);
while(true){
if((i__4731__auto___63381 < len__4730__auto___63380)){
args__4736__auto__.push((arguments[i__4731__auto___63381]));

var G__63382 = (i__4731__auto___63381 + (1));
i__4731__auto___63381 = G__63382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62747 = conformed_args__60569__auto__;
var map__62747__$1 = (((((!((map__62747 == null))))?(((((map__62747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62747):map__62747);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq62746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62746));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63383 = arguments.length;
var i__4731__auto___63384 = (0);
while(true){
if((i__4731__auto___63384 < len__4730__auto___63383)){
args__4736__auto__.push((arguments[i__4731__auto___63384]));

var G__63385 = (i__4731__auto___63384 + (1));
i__4731__auto___63384 = G__63385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62750 = conformed_args__60569__auto__;
var map__62750__$1 = (((((!((map__62750 == null))))?(((((map__62750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62750):map__62750);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq62749){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62749));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63386 = arguments.length;
var i__4731__auto___63387 = (0);
while(true){
if((i__4731__auto___63387 < len__4730__auto___63386)){
args__4736__auto__.push((arguments[i__4731__auto___63387]));

var G__63388 = (i__4731__auto___63387 + (1));
i__4731__auto___63387 = G__63388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62753 = conformed_args__60569__auto__;
var map__62753__$1 = (((((!((map__62753 == null))))?(((((map__62753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62753):map__62753);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq62752){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62752));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63389 = arguments.length;
var i__4731__auto___63390 = (0);
while(true){
if((i__4731__auto___63390 < len__4730__auto___63389)){
args__4736__auto__.push((arguments[i__4731__auto___63390]));

var G__63391 = (i__4731__auto___63390 + (1));
i__4731__auto___63390 = G__63391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62756 = conformed_args__60569__auto__;
var map__62756__$1 = (((((!((map__62756 == null))))?(((((map__62756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62756):map__62756);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq62755){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62755));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63392 = arguments.length;
var i__4731__auto___63393 = (0);
while(true){
if((i__4731__auto___63393 < len__4730__auto___63392)){
args__4736__auto__.push((arguments[i__4731__auto___63393]));

var G__63394 = (i__4731__auto___63393 + (1));
i__4731__auto___63393 = G__63394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62759 = conformed_args__60569__auto__;
var map__62759__$1 = (((((!((map__62759 == null))))?(((((map__62759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62759):map__62759);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq62758){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62758));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63395 = arguments.length;
var i__4731__auto___63396 = (0);
while(true){
if((i__4731__auto___63396 < len__4730__auto___63395)){
args__4736__auto__.push((arguments[i__4731__auto___63396]));

var G__63397 = (i__4731__auto___63396 + (1));
i__4731__auto___63396 = G__63397;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62762 = conformed_args__60569__auto__;
var map__62762__$1 = (((((!((map__62762 == null))))?(((((map__62762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62762):map__62762);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq62761){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62761));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63398 = arguments.length;
var i__4731__auto___63399 = (0);
while(true){
if((i__4731__auto___63399 < len__4730__auto___63398)){
args__4736__auto__.push((arguments[i__4731__auto___63399]));

var G__63400 = (i__4731__auto___63399 + (1));
i__4731__auto___63399 = G__63400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62765 = conformed_args__60569__auto__;
var map__62765__$1 = (((((!((map__62765 == null))))?(((((map__62765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62765):map__62765);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq62764){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62764));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63401 = arguments.length;
var i__4731__auto___63402 = (0);
while(true){
if((i__4731__auto___63402 < len__4730__auto___63401)){
args__4736__auto__.push((arguments[i__4731__auto___63402]));

var G__63403 = (i__4731__auto___63402 + (1));
i__4731__auto___63402 = G__63403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62768 = conformed_args__60569__auto__;
var map__62768__$1 = (((((!((map__62768 == null))))?(((((map__62768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62768):map__62768);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq62767){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62767));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63404 = arguments.length;
var i__4731__auto___63405 = (0);
while(true){
if((i__4731__auto___63405 < len__4730__auto___63404)){
args__4736__auto__.push((arguments[i__4731__auto___63405]));

var G__63406 = (i__4731__auto___63405 + (1));
i__4731__auto___63405 = G__63406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62771 = conformed_args__60569__auto__;
var map__62771__$1 = (((((!((map__62771 == null))))?(((((map__62771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62771):map__62771);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq62770){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62770));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63407 = arguments.length;
var i__4731__auto___63408 = (0);
while(true){
if((i__4731__auto___63408 < len__4730__auto___63407)){
args__4736__auto__.push((arguments[i__4731__auto___63408]));

var G__63409 = (i__4731__auto___63408 + (1));
i__4731__auto___63408 = G__63409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62774 = conformed_args__60569__auto__;
var map__62774__$1 = (((((!((map__62774 == null))))?(((((map__62774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62774):map__62774);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq62773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62773));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63410 = arguments.length;
var i__4731__auto___63411 = (0);
while(true){
if((i__4731__auto___63411 < len__4730__auto___63410)){
args__4736__auto__.push((arguments[i__4731__auto___63411]));

var G__63412 = (i__4731__auto___63411 + (1));
i__4731__auto___63411 = G__63412;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62777 = conformed_args__60569__auto__;
var map__62777__$1 = (((((!((map__62777 == null))))?(((((map__62777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62777):map__62777);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq62776){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62776));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63413 = arguments.length;
var i__4731__auto___63414 = (0);
while(true){
if((i__4731__auto___63414 < len__4730__auto___63413)){
args__4736__auto__.push((arguments[i__4731__auto___63414]));

var G__63415 = (i__4731__auto___63414 + (1));
i__4731__auto___63414 = G__63415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62780 = conformed_args__60569__auto__;
var map__62780__$1 = (((((!((map__62780 == null))))?(((((map__62780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62780):map__62780);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq62779){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62779));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63416 = arguments.length;
var i__4731__auto___63417 = (0);
while(true){
if((i__4731__auto___63417 < len__4730__auto___63416)){
args__4736__auto__.push((arguments[i__4731__auto___63417]));

var G__63418 = (i__4731__auto___63417 + (1));
i__4731__auto___63417 = G__63418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62783 = conformed_args__60569__auto__;
var map__62783__$1 = (((((!((map__62783 == null))))?(((((map__62783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62783):map__62783);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq62782){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62782));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63419 = arguments.length;
var i__4731__auto___63420 = (0);
while(true){
if((i__4731__auto___63420 < len__4730__auto___63419)){
args__4736__auto__.push((arguments[i__4731__auto___63420]));

var G__63421 = (i__4731__auto___63420 + (1));
i__4731__auto___63420 = G__63421;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62786 = conformed_args__60569__auto__;
var map__62786__$1 = (((((!((map__62786 == null))))?(((((map__62786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62786):map__62786);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq62785){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62785));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63422 = arguments.length;
var i__4731__auto___63423 = (0);
while(true){
if((i__4731__auto___63423 < len__4730__auto___63422)){
args__4736__auto__.push((arguments[i__4731__auto___63423]));

var G__63424 = (i__4731__auto___63423 + (1));
i__4731__auto___63423 = G__63424;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62789 = conformed_args__60569__auto__;
var map__62789__$1 = (((((!((map__62789 == null))))?(((((map__62789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62789):map__62789);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq62788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62788));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63425 = arguments.length;
var i__4731__auto___63426 = (0);
while(true){
if((i__4731__auto___63426 < len__4730__auto___63425)){
args__4736__auto__.push((arguments[i__4731__auto___63426]));

var G__63427 = (i__4731__auto___63426 + (1));
i__4731__auto___63426 = G__63427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62792 = conformed_args__60569__auto__;
var map__62792__$1 = (((((!((map__62792 == null))))?(((((map__62792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62792):map__62792);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq62791){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62791));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63428 = arguments.length;
var i__4731__auto___63429 = (0);
while(true){
if((i__4731__auto___63429 < len__4730__auto___63428)){
args__4736__auto__.push((arguments[i__4731__auto___63429]));

var G__63430 = (i__4731__auto___63429 + (1));
i__4731__auto___63429 = G__63430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62795 = conformed_args__60569__auto__;
var map__62795__$1 = (((((!((map__62795 == null))))?(((((map__62795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62795):map__62795);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq62794){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62794));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63431 = arguments.length;
var i__4731__auto___63432 = (0);
while(true){
if((i__4731__auto___63432 < len__4730__auto___63431)){
args__4736__auto__.push((arguments[i__4731__auto___63432]));

var G__63433 = (i__4731__auto___63432 + (1));
i__4731__auto___63432 = G__63433;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62798 = conformed_args__60569__auto__;
var map__62798__$1 = (((((!((map__62798 == null))))?(((((map__62798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62798):map__62798);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq62797){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62797));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63434 = arguments.length;
var i__4731__auto___63435 = (0);
while(true){
if((i__4731__auto___63435 < len__4730__auto___63434)){
args__4736__auto__.push((arguments[i__4731__auto___63435]));

var G__63436 = (i__4731__auto___63435 + (1));
i__4731__auto___63435 = G__63436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62801 = conformed_args__60569__auto__;
var map__62801__$1 = (((((!((map__62801 == null))))?(((((map__62801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62801):map__62801);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq62800){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62800));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63437 = arguments.length;
var i__4731__auto___63438 = (0);
while(true){
if((i__4731__auto___63438 < len__4730__auto___63437)){
args__4736__auto__.push((arguments[i__4731__auto___63438]));

var G__63439 = (i__4731__auto___63438 + (1));
i__4731__auto___63438 = G__63439;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62804 = conformed_args__60569__auto__;
var map__62804__$1 = (((((!((map__62804 == null))))?(((((map__62804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62804):map__62804);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq62803){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62803));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63440 = arguments.length;
var i__4731__auto___63441 = (0);
while(true){
if((i__4731__auto___63441 < len__4730__auto___63440)){
args__4736__auto__.push((arguments[i__4731__auto___63441]));

var G__63442 = (i__4731__auto___63441 + (1));
i__4731__auto___63441 = G__63442;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60569__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62807 = conformed_args__60569__auto__;
var map__62807__$1 = (((((!((map__62807 == null))))?(((((map__62807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62807):map__62807);
var attrs__60570__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60571__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60572__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60571__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60571__auto__);
var attrs_value__60573__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__60570__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60573__auto__], null),children__60571__auto____$1),css__60572__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq62806){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62806));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
