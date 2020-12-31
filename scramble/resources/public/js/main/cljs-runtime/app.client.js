goog.provide('app.client');
goog.require('cljs.core');
goog.require('app.application');
goog.require('app.ui');
goog.require('com.fulcrologic.fulcro.application');
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.app,app.ui.Scramble,"app");
});
goog.exportSymbol('app.client.init', app.client.init);
app.client.refresh = (function app$client$refresh(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.application.app,app.ui.Scramble,"app");
});
goog.exportSymbol('app.client.refresh', app.client.refresh);

//# sourceMappingURL=app.client.js.map
