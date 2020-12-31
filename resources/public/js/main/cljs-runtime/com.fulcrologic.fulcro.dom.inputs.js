goog.provide('com.fulcrologic.fulcro.dom.inputs');
/**
 * Create a new type of input that can be derived from a string. `kw` is a fully-qualified keyword name for the new
 *   class (which will be used to register it in the component registry), and `model->string` and `string->model` are
 *   functions that can do the conversions (and MUST tolerate nil as input).
 *   `model->string` MUST return a string (empty if invalid), and `string->model` should return nil if the string doesn't
 *   yet convert to a valid model value.
 * 
 *   `string-filter` is an optional `(fn [string?] string?)` that can be used to rewrite incoming strings (i.e. filter
 *   things).
 *   
 */
com.fulcrologic.fulcro.dom.inputs.StringBufferedInput = (function com$fulcrologic$fulcro$dom$inputs$StringBufferedInput(kw,p__61616){
var map__61618 = p__61616;
var map__61618__$1 = (((((!((map__61618 == null))))?(((((map__61618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61618):map__61618);
var model__GT_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"model->string","model->string",-2085451701));
var string__GT_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"string->model","string->model",-134531957));
var string_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"string-filter","string-filter",781255569));
var cls = (function (props){
var this$ = this;
var props_61655__$1 = goog.object.get(props,"fulcro$value");
var map__61622_61656 = props_61655__$1;
var map__61622_61657__$1 = (((((!((map__61622_61656 == null))))?(((((map__61622_61656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61622_61656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61622_61656):map__61622_61656);
var value_61658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61622_61657__$1,new cljs.core.Keyword(null,"value","value",305978217));
var initial_state_61659 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"oldPropValue","oldPropValue",1507086672),value_61658,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var map__61624 = com.fulcrologic.fulcro.components.props(this$);
var map__61624__$1 = (((((!((map__61624 == null))))?(((((map__61624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61624):map__61624);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61624__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var nsv = com.fulcrologic.fulcro.dom.events.target_value(evt);
var nv = (string__GT_model.cljs$core$IFn$_invoke$arity$1 ? string__GT_model.cljs$core$IFn$_invoke$arity$1(nsv) : string__GT_model.call(null,nsv));
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stringValue","stringValue",1623733802),nsv,new cljs.core.Keyword(null,"oldPropValue","oldPropValue",1507086672),value__$1,new cljs.core.Keyword(null,"value","value",305978217),nv], null));

if(cljs.core.truth_((function (){var and__4115__auto__ = onChange;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,nv);
} else {
return and__4115__auto__;
}
})())){
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(nv) : onChange.call(null,nv));
} else {
return null;
}
}),new cljs.core.Keyword(null,"stringValue","stringValue",1623733802),(model__GT_string.cljs$core$IFn$_invoke$arity$1 ? model__GT_string.cljs$core$IFn$_invoke$arity$1(value_61658) : model__GT_string.call(null,value_61658))], null);
(this$.state = (function (){var obj61630 = ({"fulcro$state":initial_state_61659});
return obj61630;
})());

return null;
});
com.fulcrologic.fulcro.components.configure_component_BANG_(cls,kw,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),(function (latest_props,state){
var map__61631 = latest_props;
var map__61631__$1 = (((((!((map__61631 == null))))?(((((map__61631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61631):map__61631);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61631__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__61632 = state;
var map__61632__$1 = (((((!((map__61632 == null))))?(((((map__61632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61632):map__61632);
var oldPropValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61632__$1,new cljs.core.Keyword(null,"oldPropValue","oldPropValue",1507086672));
var stringValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61632__$1,new cljs.core.Keyword(null,"stringValue","stringValue",1623733802));
var ignorePropValue_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldPropValue,value)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state))));
var stringValue__$1 = (function (){var G__61635 = ((ignorePropValue_QMARK_)?stringValue:(model__GT_string.cljs$core$IFn$_invoke$arity$1 ? model__GT_string.cljs$core$IFn$_invoke$arity$1(value) : model__GT_string.call(null,value)));
if(cljs.core.truth_(string_filter)){
return (string_filter.cljs$core$IFn$_invoke$arity$1 ? string_filter.cljs$core$IFn$_invoke$arity$1(G__61635) : string_filter.call(null,G__61635));
} else {
return G__61635;
}
})();
var new_derived_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stringValue","stringValue",1623733802),stringValue__$1,new cljs.core.Keyword(null,"oldPropValue","oldPropValue",1507086672),value], null)], 0));
return ({"fulcro$state": new_derived_state});
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
var map__61637 = com.fulcrologic.fulcro.components.props(this$);
var map__61637__$1 = (((((!((map__61637 == null))))?(((((map__61637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61637):map__61637);
var props = map__61637__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61637__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61637__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
var map__61638 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__61638__$1 = (((((!((map__61638 == null))))?(((((map__61638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61638):map__61638);
var stringValue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"stringValue","stringValue",1623733802));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61638__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return React.createElement("input",cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,(function (){var G__61643 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),stringValue,new cljs.core.Keyword(null,"onChange","onChange",-312891301),on_change], null);
if(cljs.core.truth_(onBlur)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61643,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
var G__61644 = (function (){var G__61645 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (string__GT_model.cljs$core$IFn$_invoke$arity$1 ? string__GT_model.cljs$core$IFn$_invoke$arity$1(G__61645) : string__GT_model.call(null,G__61645));
})();
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__61644) : onBlur.call(null,G__61644));
}));
} else {
return G__61643;
}
})()], 0))));
})], null));

com.fulcrologic.fulcro.components.register_component_BANG_(kw,cls);

return cls;
});
/**
 * Returns `s` with all non-digits stripped.
 */
com.fulcrologic.fulcro.dom.inputs.symbol_chars = (function com$fulcrologic$fulcro$dom$inputs$symbol_chars(s){
return clojure.string.replace(s,/[\s\t:]/,"");
});
/**
 * A keyword input. Used just like a DOM input, but requires you supply nil or a keyword for `:value`, and
 * will send a keyword to `onChange` and `onBlur`. Any other attributes in props are passed directly to the
 * underlying `dom/input`.
 */
com.fulcrologic.fulcro.dom.inputs.ui_keyword_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom.inputs","KeywordInput","com.fulcrologic.fulcro.dom.inputs/KeywordInput",1544417213),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model->string","model->string",-2085451701),(function (p1__61646_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__61649 = p1__61646_SHARP_;
if((G__61649 == null)){
return null;
} else {
return cljs.core.name(G__61649);
}
})());
}),new cljs.core.Keyword(null,"string-filter","string-filter",781255569),com.fulcrologic.fulcro.dom.inputs.symbol_chars,new cljs.core.Keyword(null,"string->model","string->model",-134531957),(function (p1__61647_SHARP_){
if(cljs.core.seq(p1__61647_SHARP_)){
var G__61651 = p1__61647_SHARP_;
if((G__61651 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__61651);
}
} else {
return null;
}
})], null)));
/**
 * Convert a string `s`
 */
com.fulcrologic.fulcro.dom.inputs.to_int = (function com$fulcrologic$fulcro$dom$inputs$to_int(s){
var n = parseInt(s);
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
});
var digits_61680 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
/**
 * Returns `s` with all non-digits stripped.
 */
com.fulcrologic.fulcro.dom.inputs.just_digits = (function com$fulcrologic$fulcro$dom$inputs$just_digits(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(digits_61680,cljs.core.seq(s)));
});
/**
 * An integer input. Can be used like `dom/input` but onChange and onBlur handlers will be passed an int instead of
 *   a raw react event, and you should supply an int for `:value` instead of a string.  You may set the `:type` to text
 *   or number depending on how you want the control to display, even though the model value is always an int or nil.
 *   All other attributes passed in props are passed through to the contained `dom/input`.
 */
com.fulcrologic.fulcro.dom.inputs.ui_int_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom.inputs","IntInput","com.fulcrologic.fulcro.dom.inputs/IntInput",-2005429371),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.str,new cljs.core.Keyword(null,"string->model","string->model",-134531957),com.fulcrologic.fulcro.dom.inputs.to_int,new cljs.core.Keyword(null,"string-filter","string-filter",781255569),com.fulcrologic.fulcro.dom.inputs.just_digits], null)));

//# sourceMappingURL=com.fulcrologic.fulcro.dom.inputs.js.map
