goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52477 = arguments.length;
switch (G__52477) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52478 = (function (f,blockable,meta52479){
this.f = f;
this.blockable = blockable;
this.meta52479 = meta52479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52480,meta52479__$1){
var self__ = this;
var _52480__$1 = this;
return (new cljs.core.async.t_cljs$core$async52478(self__.f,self__.blockable,meta52479__$1));
});

cljs.core.async.t_cljs$core$async52478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52480){
var self__ = this;
var _52480__$1 = this;
return self__.meta52479;
});

cljs.core.async.t_cljs$core$async52478.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52478.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52479","meta52479",1339788736,null)], null);
});

cljs.core.async.t_cljs$core$async52478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52478";

cljs.core.async.t_cljs$core$async52478.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52478");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52478.
 */
cljs.core.async.__GT_t_cljs$core$async52478 = (function cljs$core$async$__GT_t_cljs$core$async52478(f__$1,blockable__$1,meta52479){
return (new cljs.core.async.t_cljs$core$async52478(f__$1,blockable__$1,meta52479));
});

}

return (new cljs.core.async.t_cljs$core$async52478(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__52499 = arguments.length;
switch (G__52499) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__52509 = arguments.length;
switch (G__52509) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52511 = arguments.length;
switch (G__52511) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53983 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53983) : fn1.call(null,val_53983));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53983,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53983) : fn1.call(null,val_53983));
});})(val_53983,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52518 = arguments.length;
switch (G__52518) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53985 = n;
var x_53986 = (0);
while(true){
if((x_53986 < n__4607__auto___53985)){
(a[x_53986] = x_53986);

var G__53987 = (x_53986 + (1));
x_53986 = G__53987;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52519 = (function (flag,meta52520){
this.flag = flag;
this.meta52520 = meta52520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52521,meta52520__$1){
var self__ = this;
var _52521__$1 = this;
return (new cljs.core.async.t_cljs$core$async52519(self__.flag,meta52520__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52521){
var self__ = this;
var _52521__$1 = this;
return self__.meta52520;
});})(flag))
;

cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52519.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52520","meta52520",-1960542431,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52519";

cljs.core.async.t_cljs$core$async52519.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52519");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52519.
 */
cljs.core.async.__GT_t_cljs$core$async52519 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52519(flag__$1,meta52520){
return (new cljs.core.async.t_cljs$core$async52519(flag__$1,meta52520));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52519(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52528 = (function (flag,cb,meta52529){
this.flag = flag;
this.cb = cb;
this.meta52529 = meta52529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52530,meta52529__$1){
var self__ = this;
var _52530__$1 = this;
return (new cljs.core.async.t_cljs$core$async52528(self__.flag,self__.cb,meta52529__$1));
});

cljs.core.async.t_cljs$core$async52528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52530){
var self__ = this;
var _52530__$1 = this;
return self__.meta52529;
});

cljs.core.async.t_cljs$core$async52528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async52528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52529","meta52529",255624599,null)], null);
});

cljs.core.async.t_cljs$core$async52528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52528";

cljs.core.async.t_cljs$core$async52528.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52528");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52528.
 */
cljs.core.async.__GT_t_cljs$core$async52528 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52528(flag__$1,cb__$1,meta52529){
return (new cljs.core.async.t_cljs$core$async52528(flag__$1,cb__$1,meta52529));
});

}

return (new cljs.core.async.t_cljs$core$async52528(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52555_SHARP_){
var G__52563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52555_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52563) : fret.call(null,G__52563));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52556_SHARP_){
var G__52564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52556_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52564) : fret.call(null,G__52564));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53994 = (i + (1));
i = G__53994;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53999 = arguments.length;
var i__4731__auto___54000 = (0);
while(true){
if((i__4731__auto___54000 < len__4730__auto___53999)){
args__4736__auto__.push((arguments[i__4731__auto___54000]));

var G__54001 = (i__4731__auto___54000 + (1));
i__4731__auto___54000 = G__54001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52568){
var map__52569 = p__52568;
var map__52569__$1 = (((((!((map__52569 == null))))?(((((map__52569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52569):map__52569);
var opts = map__52569__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52565){
var G__52566 = cljs.core.first(seq52565);
var seq52565__$1 = cljs.core.next(seq52565);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52566,seq52565__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52572 = arguments.length;
switch (G__52572) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__52380__auto___54018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54018){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54018){
return (function (state_52596){
var state_val_52597 = (state_52596[(1)]);
if((state_val_52597 === (7))){
var inst_52592 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
var statearr_52598_54023 = state_52596__$1;
(statearr_52598_54023[(2)] = inst_52592);

(statearr_52598_54023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (1))){
var state_52596__$1 = state_52596;
var statearr_52599_54027 = state_52596__$1;
(statearr_52599_54027[(2)] = null);

(statearr_52599_54027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (4))){
var inst_52575 = (state_52596[(7)]);
var inst_52575__$1 = (state_52596[(2)]);
var inst_52576 = (inst_52575__$1 == null);
var state_52596__$1 = (function (){var statearr_52600 = state_52596;
(statearr_52600[(7)] = inst_52575__$1);

return statearr_52600;
})();
if(cljs.core.truth_(inst_52576)){
var statearr_52601_54029 = state_52596__$1;
(statearr_52601_54029[(1)] = (5));

} else {
var statearr_52602_54030 = state_52596__$1;
(statearr_52602_54030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (13))){
var state_52596__$1 = state_52596;
var statearr_52603_54031 = state_52596__$1;
(statearr_52603_54031[(2)] = null);

(statearr_52603_54031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (6))){
var inst_52575 = (state_52596[(7)]);
var state_52596__$1 = state_52596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52596__$1,(11),to,inst_52575);
} else {
if((state_val_52597 === (3))){
var inst_52594 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52596__$1,inst_52594);
} else {
if((state_val_52597 === (12))){
var state_52596__$1 = state_52596;
var statearr_52604_54037 = state_52596__$1;
(statearr_52604_54037[(2)] = null);

(statearr_52604_54037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (2))){
var state_52596__$1 = state_52596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52596__$1,(4),from);
} else {
if((state_val_52597 === (11))){
var inst_52585 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
if(cljs.core.truth_(inst_52585)){
var statearr_52605_54042 = state_52596__$1;
(statearr_52605_54042[(1)] = (12));

} else {
var statearr_52606_54043 = state_52596__$1;
(statearr_52606_54043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (9))){
var state_52596__$1 = state_52596;
var statearr_52607_54045 = state_52596__$1;
(statearr_52607_54045[(2)] = null);

(statearr_52607_54045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (5))){
var state_52596__$1 = state_52596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52608_54048 = state_52596__$1;
(statearr_52608_54048[(1)] = (8));

} else {
var statearr_52609_54049 = state_52596__$1;
(statearr_52609_54049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (14))){
var inst_52590 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
var statearr_52610_54055 = state_52596__$1;
(statearr_52610_54055[(2)] = inst_52590);

(statearr_52610_54055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (10))){
var inst_52582 = (state_52596[(2)]);
var state_52596__$1 = state_52596;
var statearr_52611_54057 = state_52596__$1;
(statearr_52611_54057[(2)] = inst_52582);

(statearr_52611_54057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52597 === (8))){
var inst_52579 = cljs.core.async.close_BANG_(to);
var state_52596__$1 = state_52596;
var statearr_52612_54060 = state_52596__$1;
(statearr_52612_54060[(2)] = inst_52579);

(statearr_52612_54060[(1)] = (10));


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
});})(c__52380__auto___54018))
;
return ((function (switch__51967__auto__,c__52380__auto___54018){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_52613 = [null,null,null,null,null,null,null,null];
(statearr_52613[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_52613[(1)] = (1));

return statearr_52613;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_52596){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52596);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52614){if((e52614 instanceof Object)){
var ex__51971__auto__ = e52614;
var statearr_52615_54066 = state_52596;
(statearr_52615_54066[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54070 = state_52596;
state_52596 = G__54070;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_52596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_52596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54018))
})();
var state__52382__auto__ = (function (){var statearr_52616 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52616[(6)] = c__52380__auto___54018);

return statearr_52616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54018))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__52617){
var vec__52618 = p__52617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618,(1),null);
var job = vec__52618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__52380__auto___54079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54079,res,vec__52618,v,p,job,jobs,results){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54079,res,vec__52618,v,p,job,jobs,results){
return (function (state_52625){
var state_val_52626 = (state_52625[(1)]);
if((state_val_52626 === (1))){
var state_52625__$1 = state_52625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52625__$1,(2),res,v);
} else {
if((state_val_52626 === (2))){
var inst_52622 = (state_52625[(2)]);
var inst_52623 = cljs.core.async.close_BANG_(res);
var state_52625__$1 = (function (){var statearr_52627 = state_52625;
(statearr_52627[(7)] = inst_52622);

return statearr_52627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52625__$1,inst_52623);
} else {
return null;
}
}
});})(c__52380__auto___54079,res,vec__52618,v,p,job,jobs,results))
;
return ((function (switch__51967__auto__,c__52380__auto___54079,res,vec__52618,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0 = (function (){
var statearr_52628 = [null,null,null,null,null,null,null,null];
(statearr_52628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__);

(statearr_52628[(1)] = (1));

return statearr_52628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1 = (function (state_52625){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52625);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52629){if((e52629 instanceof Object)){
var ex__51971__auto__ = e52629;
var statearr_52630_54096 = state_52625;
(statearr_52630_54096[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54097 = state_52625;
state_52625 = G__54097;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = function(state_52625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1.call(this,state_52625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54079,res,vec__52618,v,p,job,jobs,results))
})();
var state__52382__auto__ = (function (){var statearr_52631 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52631[(6)] = c__52380__auto___54079);

return statearr_52631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54079,res,vec__52618,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52632){
var vec__52633 = p__52632;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52633,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52633,(1),null);
var job = vec__52633;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___54098 = n;
var __54099 = (0);
while(true){
if((__54099 < n__4607__auto___54098)){
var G__52636_54100 = type;
var G__52636_54101__$1 = (((G__52636_54100 instanceof cljs.core.Keyword))?G__52636_54100.fqn:null);
switch (G__52636_54101__$1) {
case "compute":
var c__52380__auto___54103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54099,c__52380__auto___54103,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (__54099,c__52380__auto___54103,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async){
return (function (state_52649){
var state_val_52650 = (state_52649[(1)]);
if((state_val_52650 === (1))){
var state_52649__$1 = state_52649;
var statearr_52651_54104 = state_52649__$1;
(statearr_52651_54104[(2)] = null);

(statearr_52651_54104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (2))){
var state_52649__$1 = state_52649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52649__$1,(4),jobs);
} else {
if((state_val_52650 === (3))){
var inst_52647 = (state_52649[(2)]);
var state_52649__$1 = state_52649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52649__$1,inst_52647);
} else {
if((state_val_52650 === (4))){
var inst_52639 = (state_52649[(2)]);
var inst_52640 = process(inst_52639);
var state_52649__$1 = state_52649;
if(cljs.core.truth_(inst_52640)){
var statearr_52652_54107 = state_52649__$1;
(statearr_52652_54107[(1)] = (5));

} else {
var statearr_52653_54108 = state_52649__$1;
(statearr_52653_54108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (5))){
var state_52649__$1 = state_52649;
var statearr_52654_54109 = state_52649__$1;
(statearr_52654_54109[(2)] = null);

(statearr_52654_54109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (6))){
var state_52649__$1 = state_52649;
var statearr_52655_54110 = state_52649__$1;
(statearr_52655_54110[(2)] = null);

(statearr_52655_54110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52650 === (7))){
var inst_52645 = (state_52649[(2)]);
var state_52649__$1 = state_52649;
var statearr_52656_54111 = state_52649__$1;
(statearr_52656_54111[(2)] = inst_52645);

(statearr_52656_54111[(1)] = (3));


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
});})(__54099,c__52380__auto___54103,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async))
;
return ((function (__54099,switch__51967__auto__,c__52380__auto___54103,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0 = (function (){
var statearr_52657 = [null,null,null,null,null,null,null];
(statearr_52657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__);

(statearr_52657[(1)] = (1));

return statearr_52657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1 = (function (state_52649){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52649);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52658){if((e52658 instanceof Object)){
var ex__51971__auto__ = e52658;
var statearr_52659_54116 = state_52649;
(statearr_52659_54116[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54118 = state_52649;
state_52649 = G__54118;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = function(state_52649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1.call(this,state_52649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__;
})()
;})(__54099,switch__51967__auto__,c__52380__auto___54103,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async))
})();
var state__52382__auto__ = (function (){var statearr_52660 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52660[(6)] = c__52380__auto___54103);

return statearr_52660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(__54099,c__52380__auto___54103,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async))
);


break;
case "async":
var c__52380__auto___54120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__54099,c__52380__auto___54120,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (__54099,c__52380__auto___54120,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async){
return (function (state_52673){
var state_val_52674 = (state_52673[(1)]);
if((state_val_52674 === (1))){
var state_52673__$1 = state_52673;
var statearr_52675_54122 = state_52673__$1;
(statearr_52675_54122[(2)] = null);

(statearr_52675_54122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (2))){
var state_52673__$1 = state_52673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52673__$1,(4),jobs);
} else {
if((state_val_52674 === (3))){
var inst_52671 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52673__$1,inst_52671);
} else {
if((state_val_52674 === (4))){
var inst_52663 = (state_52673[(2)]);
var inst_52664 = async(inst_52663);
var state_52673__$1 = state_52673;
if(cljs.core.truth_(inst_52664)){
var statearr_52676_54123 = state_52673__$1;
(statearr_52676_54123[(1)] = (5));

} else {
var statearr_52677_54124 = state_52673__$1;
(statearr_52677_54124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (5))){
var state_52673__$1 = state_52673;
var statearr_52678_54125 = state_52673__$1;
(statearr_52678_54125[(2)] = null);

(statearr_52678_54125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (6))){
var state_52673__$1 = state_52673;
var statearr_52679_54127 = state_52673__$1;
(statearr_52679_54127[(2)] = null);

(statearr_52679_54127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52674 === (7))){
var inst_52669 = (state_52673[(2)]);
var state_52673__$1 = state_52673;
var statearr_52680_54128 = state_52673__$1;
(statearr_52680_54128[(2)] = inst_52669);

(statearr_52680_54128[(1)] = (3));


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
});})(__54099,c__52380__auto___54120,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async))
;
return ((function (__54099,switch__51967__auto__,c__52380__auto___54120,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0 = (function (){
var statearr_52681 = [null,null,null,null,null,null,null];
(statearr_52681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__);

(statearr_52681[(1)] = (1));

return statearr_52681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1 = (function (state_52673){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52673);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52682){if((e52682 instanceof Object)){
var ex__51971__auto__ = e52682;
var statearr_52683_54134 = state_52673;
(statearr_52683_54134[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54136 = state_52673;
state_52673 = G__54136;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = function(state_52673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1.call(this,state_52673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__;
})()
;})(__54099,switch__51967__auto__,c__52380__auto___54120,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async))
})();
var state__52382__auto__ = (function (){var statearr_52684 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52684[(6)] = c__52380__auto___54120);

return statearr_52684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(__54099,c__52380__auto___54120,G__52636_54100,G__52636_54101__$1,n__4607__auto___54098,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52636_54101__$1)].join('')));

}

var G__54138 = (__54099 + (1));
__54099 = G__54138;
continue;
} else {
}
break;
}

var c__52380__auto___54140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54140,jobs,results,process,async){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54140,jobs,results,process,async){
return (function (state_52706){
var state_val_52707 = (state_52706[(1)]);
if((state_val_52707 === (7))){
var inst_52702 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52708_54144 = state_52706__$1;
(statearr_52708_54144[(2)] = inst_52702);

(statearr_52708_54144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (1))){
var state_52706__$1 = state_52706;
var statearr_52709_54145 = state_52706__$1;
(statearr_52709_54145[(2)] = null);

(statearr_52709_54145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (4))){
var inst_52687 = (state_52706[(7)]);
var inst_52687__$1 = (state_52706[(2)]);
var inst_52688 = (inst_52687__$1 == null);
var state_52706__$1 = (function (){var statearr_52710 = state_52706;
(statearr_52710[(7)] = inst_52687__$1);

return statearr_52710;
})();
if(cljs.core.truth_(inst_52688)){
var statearr_52711_54147 = state_52706__$1;
(statearr_52711_54147[(1)] = (5));

} else {
var statearr_52712_54148 = state_52706__$1;
(statearr_52712_54148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (6))){
var inst_52687 = (state_52706[(7)]);
var inst_52692 = (state_52706[(8)]);
var inst_52692__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52694 = [inst_52687,inst_52692__$1];
var inst_52695 = (new cljs.core.PersistentVector(null,2,(5),inst_52693,inst_52694,null));
var state_52706__$1 = (function (){var statearr_52713 = state_52706;
(statearr_52713[(8)] = inst_52692__$1);

return statearr_52713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52706__$1,(8),jobs,inst_52695);
} else {
if((state_val_52707 === (3))){
var inst_52704 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52706__$1,inst_52704);
} else {
if((state_val_52707 === (2))){
var state_52706__$1 = state_52706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52706__$1,(4),from);
} else {
if((state_val_52707 === (9))){
var inst_52699 = (state_52706[(2)]);
var state_52706__$1 = (function (){var statearr_52714 = state_52706;
(statearr_52714[(9)] = inst_52699);

return statearr_52714;
})();
var statearr_52715_54150 = state_52706__$1;
(statearr_52715_54150[(2)] = null);

(statearr_52715_54150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (5))){
var inst_52690 = cljs.core.async.close_BANG_(jobs);
var state_52706__$1 = state_52706;
var statearr_52716_54152 = state_52706__$1;
(statearr_52716_54152[(2)] = inst_52690);

(statearr_52716_54152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (8))){
var inst_52692 = (state_52706[(8)]);
var inst_52697 = (state_52706[(2)]);
var state_52706__$1 = (function (){var statearr_52717 = state_52706;
(statearr_52717[(10)] = inst_52697);

return statearr_52717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52706__$1,(9),results,inst_52692);
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
});})(c__52380__auto___54140,jobs,results,process,async))
;
return ((function (switch__51967__auto__,c__52380__auto___54140,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0 = (function (){
var statearr_52718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__);

(statearr_52718[(1)] = (1));

return statearr_52718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1 = (function (state_52706){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52706);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52719){if((e52719 instanceof Object)){
var ex__51971__auto__ = e52719;
var statearr_52720_54157 = state_52706;
(statearr_52720_54157[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54159 = state_52706;
state_52706 = G__54159;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = function(state_52706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1.call(this,state_52706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54140,jobs,results,process,async))
})();
var state__52382__auto__ = (function (){var statearr_52721 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52721[(6)] = c__52380__auto___54140);

return statearr_52721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54140,jobs,results,process,async))
);


var c__52380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto__,jobs,results,process,async){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto__,jobs,results,process,async){
return (function (state_52759){
var state_val_52760 = (state_52759[(1)]);
if((state_val_52760 === (7))){
var inst_52755 = (state_52759[(2)]);
var state_52759__$1 = state_52759;
var statearr_52761_54170 = state_52759__$1;
(statearr_52761_54170[(2)] = inst_52755);

(statearr_52761_54170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (20))){
var state_52759__$1 = state_52759;
var statearr_52762_54171 = state_52759__$1;
(statearr_52762_54171[(2)] = null);

(statearr_52762_54171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (1))){
var state_52759__$1 = state_52759;
var statearr_52763_54174 = state_52759__$1;
(statearr_52763_54174[(2)] = null);

(statearr_52763_54174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (4))){
var inst_52724 = (state_52759[(7)]);
var inst_52724__$1 = (state_52759[(2)]);
var inst_52725 = (inst_52724__$1 == null);
var state_52759__$1 = (function (){var statearr_52764 = state_52759;
(statearr_52764[(7)] = inst_52724__$1);

return statearr_52764;
})();
if(cljs.core.truth_(inst_52725)){
var statearr_52765_54177 = state_52759__$1;
(statearr_52765_54177[(1)] = (5));

} else {
var statearr_52766_54180 = state_52759__$1;
(statearr_52766_54180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (15))){
var inst_52737 = (state_52759[(8)]);
var state_52759__$1 = state_52759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52759__$1,(18),to,inst_52737);
} else {
if((state_val_52760 === (21))){
var inst_52750 = (state_52759[(2)]);
var state_52759__$1 = state_52759;
var statearr_52767_54183 = state_52759__$1;
(statearr_52767_54183[(2)] = inst_52750);

(statearr_52767_54183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (13))){
var inst_52752 = (state_52759[(2)]);
var state_52759__$1 = (function (){var statearr_52768 = state_52759;
(statearr_52768[(9)] = inst_52752);

return statearr_52768;
})();
var statearr_52769_54186 = state_52759__$1;
(statearr_52769_54186[(2)] = null);

(statearr_52769_54186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (6))){
var inst_52724 = (state_52759[(7)]);
var state_52759__$1 = state_52759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52759__$1,(11),inst_52724);
} else {
if((state_val_52760 === (17))){
var inst_52745 = (state_52759[(2)]);
var state_52759__$1 = state_52759;
if(cljs.core.truth_(inst_52745)){
var statearr_52770_54189 = state_52759__$1;
(statearr_52770_54189[(1)] = (19));

} else {
var statearr_52771_54190 = state_52759__$1;
(statearr_52771_54190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (3))){
var inst_52757 = (state_52759[(2)]);
var state_52759__$1 = state_52759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52759__$1,inst_52757);
} else {
if((state_val_52760 === (12))){
var inst_52734 = (state_52759[(10)]);
var state_52759__$1 = state_52759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52759__$1,(14),inst_52734);
} else {
if((state_val_52760 === (2))){
var state_52759__$1 = state_52759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52759__$1,(4),results);
} else {
if((state_val_52760 === (19))){
var state_52759__$1 = state_52759;
var statearr_52772_54191 = state_52759__$1;
(statearr_52772_54191[(2)] = null);

(statearr_52772_54191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (11))){
var inst_52734 = (state_52759[(2)]);
var state_52759__$1 = (function (){var statearr_52773 = state_52759;
(statearr_52773[(10)] = inst_52734);

return statearr_52773;
})();
var statearr_52774_54192 = state_52759__$1;
(statearr_52774_54192[(2)] = null);

(statearr_52774_54192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (9))){
var state_52759__$1 = state_52759;
var statearr_52775_54194 = state_52759__$1;
(statearr_52775_54194[(2)] = null);

(statearr_52775_54194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (5))){
var state_52759__$1 = state_52759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52776_54195 = state_52759__$1;
(statearr_52776_54195[(1)] = (8));

} else {
var statearr_52777_54196 = state_52759__$1;
(statearr_52777_54196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (14))){
var inst_52739 = (state_52759[(11)]);
var inst_52737 = (state_52759[(8)]);
var inst_52737__$1 = (state_52759[(2)]);
var inst_52738 = (inst_52737__$1 == null);
var inst_52739__$1 = cljs.core.not(inst_52738);
var state_52759__$1 = (function (){var statearr_52778 = state_52759;
(statearr_52778[(11)] = inst_52739__$1);

(statearr_52778[(8)] = inst_52737__$1);

return statearr_52778;
})();
if(inst_52739__$1){
var statearr_52779_54197 = state_52759__$1;
(statearr_52779_54197[(1)] = (15));

} else {
var statearr_52780_54198 = state_52759__$1;
(statearr_52780_54198[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (16))){
var inst_52739 = (state_52759[(11)]);
var state_52759__$1 = state_52759;
var statearr_52781_54199 = state_52759__$1;
(statearr_52781_54199[(2)] = inst_52739);

(statearr_52781_54199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (10))){
var inst_52731 = (state_52759[(2)]);
var state_52759__$1 = state_52759;
var statearr_52782_54200 = state_52759__$1;
(statearr_52782_54200[(2)] = inst_52731);

(statearr_52782_54200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (18))){
var inst_52742 = (state_52759[(2)]);
var state_52759__$1 = state_52759;
var statearr_52783_54208 = state_52759__$1;
(statearr_52783_54208[(2)] = inst_52742);

(statearr_52783_54208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52760 === (8))){
var inst_52728 = cljs.core.async.close_BANG_(to);
var state_52759__$1 = state_52759;
var statearr_52784_54213 = state_52759__$1;
(statearr_52784_54213[(2)] = inst_52728);

(statearr_52784_54213[(1)] = (10));


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
});})(c__52380__auto__,jobs,results,process,async))
;
return ((function (switch__51967__auto__,c__52380__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0 = (function (){
var statearr_52785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__);

(statearr_52785[(1)] = (1));

return statearr_52785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1 = (function (state_52759){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52759);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52786){if((e52786 instanceof Object)){
var ex__51971__auto__ = e52786;
var statearr_52787_54221 = state_52759;
(statearr_52787_54221[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54222 = state_52759;
state_52759 = G__54222;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__ = function(state_52759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1.call(this,state_52759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto__,jobs,results,process,async))
})();
var state__52382__auto__ = (function (){var statearr_52788 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52788[(6)] = c__52380__auto__);

return statearr_52788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto__,jobs,results,process,async))
);

return c__52380__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52790 = arguments.length;
switch (G__52790) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52792 = arguments.length;
switch (G__52792) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52794 = arguments.length;
switch (G__52794) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__52380__auto___54260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54260,tc,fc){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54260,tc,fc){
return (function (state_52820){
var state_val_52821 = (state_52820[(1)]);
if((state_val_52821 === (7))){
var inst_52816 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
var statearr_52822_54265 = state_52820__$1;
(statearr_52822_54265[(2)] = inst_52816);

(statearr_52822_54265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (1))){
var state_52820__$1 = state_52820;
var statearr_52823_54266 = state_52820__$1;
(statearr_52823_54266[(2)] = null);

(statearr_52823_54266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (4))){
var inst_52797 = (state_52820[(7)]);
var inst_52797__$1 = (state_52820[(2)]);
var inst_52798 = (inst_52797__$1 == null);
var state_52820__$1 = (function (){var statearr_52824 = state_52820;
(statearr_52824[(7)] = inst_52797__$1);

return statearr_52824;
})();
if(cljs.core.truth_(inst_52798)){
var statearr_52825_54275 = state_52820__$1;
(statearr_52825_54275[(1)] = (5));

} else {
var statearr_52826_54276 = state_52820__$1;
(statearr_52826_54276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (13))){
var state_52820__$1 = state_52820;
var statearr_52827_54278 = state_52820__$1;
(statearr_52827_54278[(2)] = null);

(statearr_52827_54278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (6))){
var inst_52797 = (state_52820[(7)]);
var inst_52803 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52797) : p.call(null,inst_52797));
var state_52820__$1 = state_52820;
if(cljs.core.truth_(inst_52803)){
var statearr_52828_54283 = state_52820__$1;
(statearr_52828_54283[(1)] = (9));

} else {
var statearr_52829_54284 = state_52820__$1;
(statearr_52829_54284[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (3))){
var inst_52818 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52820__$1,inst_52818);
} else {
if((state_val_52821 === (12))){
var state_52820__$1 = state_52820;
var statearr_52830_54290 = state_52820__$1;
(statearr_52830_54290[(2)] = null);

(statearr_52830_54290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (2))){
var state_52820__$1 = state_52820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52820__$1,(4),ch);
} else {
if((state_val_52821 === (11))){
var inst_52797 = (state_52820[(7)]);
var inst_52807 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52820__$1,(8),inst_52807,inst_52797);
} else {
if((state_val_52821 === (9))){
var state_52820__$1 = state_52820;
var statearr_52831_54296 = state_52820__$1;
(statearr_52831_54296[(2)] = tc);

(statearr_52831_54296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (5))){
var inst_52800 = cljs.core.async.close_BANG_(tc);
var inst_52801 = cljs.core.async.close_BANG_(fc);
var state_52820__$1 = (function (){var statearr_52832 = state_52820;
(statearr_52832[(8)] = inst_52800);

return statearr_52832;
})();
var statearr_52833_54303 = state_52820__$1;
(statearr_52833_54303[(2)] = inst_52801);

(statearr_52833_54303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (14))){
var inst_52814 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
var statearr_52834_54307 = state_52820__$1;
(statearr_52834_54307[(2)] = inst_52814);

(statearr_52834_54307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (10))){
var state_52820__$1 = state_52820;
var statearr_52835_54311 = state_52820__$1;
(statearr_52835_54311[(2)] = fc);

(statearr_52835_54311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (8))){
var inst_52809 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
if(cljs.core.truth_(inst_52809)){
var statearr_52836_54314 = state_52820__$1;
(statearr_52836_54314[(1)] = (12));

} else {
var statearr_52837_54315 = state_52820__$1;
(statearr_52837_54315[(1)] = (13));

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
}
}
}
});})(c__52380__auto___54260,tc,fc))
;
return ((function (switch__51967__auto__,c__52380__auto___54260,tc,fc){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_52838 = [null,null,null,null,null,null,null,null,null];
(statearr_52838[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_52838[(1)] = (1));

return statearr_52838;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_52820){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52820);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52839){if((e52839 instanceof Object)){
var ex__51971__auto__ = e52839;
var statearr_52840_54330 = state_52820;
(statearr_52840_54330[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54332 = state_52820;
state_52820 = G__54332;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_52820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_52820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54260,tc,fc))
})();
var state__52382__auto__ = (function (){var statearr_52841 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52841[(6)] = c__52380__auto___54260);

return statearr_52841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54260,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__52380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto__){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto__){
return (function (state_52862){
var state_val_52863 = (state_52862[(1)]);
if((state_val_52863 === (7))){
var inst_52858 = (state_52862[(2)]);
var state_52862__$1 = state_52862;
var statearr_52864_54342 = state_52862__$1;
(statearr_52864_54342[(2)] = inst_52858);

(statearr_52864_54342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (1))){
var inst_52842 = init;
var state_52862__$1 = (function (){var statearr_52865 = state_52862;
(statearr_52865[(7)] = inst_52842);

return statearr_52865;
})();
var statearr_52866_54345 = state_52862__$1;
(statearr_52866_54345[(2)] = null);

(statearr_52866_54345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (4))){
var inst_52845 = (state_52862[(8)]);
var inst_52845__$1 = (state_52862[(2)]);
var inst_52846 = (inst_52845__$1 == null);
var state_52862__$1 = (function (){var statearr_52867 = state_52862;
(statearr_52867[(8)] = inst_52845__$1);

return statearr_52867;
})();
if(cljs.core.truth_(inst_52846)){
var statearr_52868_54347 = state_52862__$1;
(statearr_52868_54347[(1)] = (5));

} else {
var statearr_52869_54350 = state_52862__$1;
(statearr_52869_54350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (6))){
var inst_52845 = (state_52862[(8)]);
var inst_52842 = (state_52862[(7)]);
var inst_52849 = (state_52862[(9)]);
var inst_52849__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52842,inst_52845) : f.call(null,inst_52842,inst_52845));
var inst_52850 = cljs.core.reduced_QMARK_(inst_52849__$1);
var state_52862__$1 = (function (){var statearr_52870 = state_52862;
(statearr_52870[(9)] = inst_52849__$1);

return statearr_52870;
})();
if(inst_52850){
var statearr_52871_54353 = state_52862__$1;
(statearr_52871_54353[(1)] = (8));

} else {
var statearr_52872_54354 = state_52862__$1;
(statearr_52872_54354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (3))){
var inst_52860 = (state_52862[(2)]);
var state_52862__$1 = state_52862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52862__$1,inst_52860);
} else {
if((state_val_52863 === (2))){
var state_52862__$1 = state_52862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52862__$1,(4),ch);
} else {
if((state_val_52863 === (9))){
var inst_52849 = (state_52862[(9)]);
var inst_52842 = inst_52849;
var state_52862__$1 = (function (){var statearr_52873 = state_52862;
(statearr_52873[(7)] = inst_52842);

return statearr_52873;
})();
var statearr_52874_54359 = state_52862__$1;
(statearr_52874_54359[(2)] = null);

(statearr_52874_54359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (5))){
var inst_52842 = (state_52862[(7)]);
var state_52862__$1 = state_52862;
var statearr_52875_54361 = state_52862__$1;
(statearr_52875_54361[(2)] = inst_52842);

(statearr_52875_54361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (10))){
var inst_52856 = (state_52862[(2)]);
var state_52862__$1 = state_52862;
var statearr_52876_54364 = state_52862__$1;
(statearr_52876_54364[(2)] = inst_52856);

(statearr_52876_54364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52863 === (8))){
var inst_52849 = (state_52862[(9)]);
var inst_52852 = cljs.core.deref(inst_52849);
var state_52862__$1 = state_52862;
var statearr_52877_54366 = state_52862__$1;
(statearr_52877_54366[(2)] = inst_52852);

(statearr_52877_54366[(1)] = (10));


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
});})(c__52380__auto__))
;
return ((function (switch__51967__auto__,c__52380__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__51968__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51968__auto____0 = (function (){
var statearr_52878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52878[(0)] = cljs$core$async$reduce_$_state_machine__51968__auto__);

(statearr_52878[(1)] = (1));

return statearr_52878;
});
var cljs$core$async$reduce_$_state_machine__51968__auto____1 = (function (state_52862){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52862);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52879){if((e52879 instanceof Object)){
var ex__51971__auto__ = e52879;
var statearr_52880_54370 = state_52862;
(statearr_52880_54370[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54371 = state_52862;
state_52862 = G__54371;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51968__auto__ = function(state_52862){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51968__auto____1.call(this,state_52862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51968__auto____0;
cljs$core$async$reduce_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51968__auto____1;
return cljs$core$async$reduce_$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto__))
})();
var state__52382__auto__ = (function (){var statearr_52881 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52881[(6)] = c__52380__auto__);

return statearr_52881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto__))
);

return c__52380__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__52380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto__,f__$1){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto__,f__$1){
return (function (state_52887){
var state_val_52888 = (state_52887[(1)]);
if((state_val_52888 === (1))){
var inst_52882 = cljs.core.async.reduce(f__$1,init,ch);
var state_52887__$1 = state_52887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52887__$1,(2),inst_52882);
} else {
if((state_val_52888 === (2))){
var inst_52884 = (state_52887[(2)]);
var inst_52885 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52884) : f__$1.call(null,inst_52884));
var state_52887__$1 = state_52887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52887__$1,inst_52885);
} else {
return null;
}
}
});})(c__52380__auto__,f__$1))
;
return ((function (switch__51967__auto__,c__52380__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__51968__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51968__auto____0 = (function (){
var statearr_52889 = [null,null,null,null,null,null,null];
(statearr_52889[(0)] = cljs$core$async$transduce_$_state_machine__51968__auto__);

(statearr_52889[(1)] = (1));

return statearr_52889;
});
var cljs$core$async$transduce_$_state_machine__51968__auto____1 = (function (state_52887){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52887);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52890){if((e52890 instanceof Object)){
var ex__51971__auto__ = e52890;
var statearr_52891_54389 = state_52887;
(statearr_52891_54389[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54392 = state_52887;
state_52887 = G__54392;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51968__auto__ = function(state_52887){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51968__auto____1.call(this,state_52887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51968__auto____0;
cljs$core$async$transduce_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51968__auto____1;
return cljs$core$async$transduce_$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto__,f__$1))
})();
var state__52382__auto__ = (function (){var statearr_52892 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52892[(6)] = c__52380__auto__);

return statearr_52892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto__,f__$1))
);

return c__52380__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52894 = arguments.length;
switch (G__52894) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__52380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto__){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto__){
return (function (state_52919){
var state_val_52920 = (state_52919[(1)]);
if((state_val_52920 === (7))){
var inst_52901 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52921_54400 = state_52919__$1;
(statearr_52921_54400[(2)] = inst_52901);

(statearr_52921_54400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (1))){
var inst_52895 = cljs.core.seq(coll);
var inst_52896 = inst_52895;
var state_52919__$1 = (function (){var statearr_52922 = state_52919;
(statearr_52922[(7)] = inst_52896);

return statearr_52922;
})();
var statearr_52923_54408 = state_52919__$1;
(statearr_52923_54408[(2)] = null);

(statearr_52923_54408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (4))){
var inst_52896 = (state_52919[(7)]);
var inst_52899 = cljs.core.first(inst_52896);
var state_52919__$1 = state_52919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52919__$1,(7),ch,inst_52899);
} else {
if((state_val_52920 === (13))){
var inst_52913 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52924_54419 = state_52919__$1;
(statearr_52924_54419[(2)] = inst_52913);

(statearr_52924_54419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (6))){
var inst_52904 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
if(cljs.core.truth_(inst_52904)){
var statearr_52925_54422 = state_52919__$1;
(statearr_52925_54422[(1)] = (8));

} else {
var statearr_52926_54423 = state_52919__$1;
(statearr_52926_54423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (3))){
var inst_52917 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52919__$1,inst_52917);
} else {
if((state_val_52920 === (12))){
var state_52919__$1 = state_52919;
var statearr_52927_54432 = state_52919__$1;
(statearr_52927_54432[(2)] = null);

(statearr_52927_54432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (2))){
var inst_52896 = (state_52919[(7)]);
var state_52919__$1 = state_52919;
if(cljs.core.truth_(inst_52896)){
var statearr_52928_54443 = state_52919__$1;
(statearr_52928_54443[(1)] = (4));

} else {
var statearr_52929_54444 = state_52919__$1;
(statearr_52929_54444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (11))){
var inst_52910 = cljs.core.async.close_BANG_(ch);
var state_52919__$1 = state_52919;
var statearr_52930_54445 = state_52919__$1;
(statearr_52930_54445[(2)] = inst_52910);

(statearr_52930_54445[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (9))){
var state_52919__$1 = state_52919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52931_54447 = state_52919__$1;
(statearr_52931_54447[(1)] = (11));

} else {
var statearr_52932_54450 = state_52919__$1;
(statearr_52932_54450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (5))){
var inst_52896 = (state_52919[(7)]);
var state_52919__$1 = state_52919;
var statearr_52933_54453 = state_52919__$1;
(statearr_52933_54453[(2)] = inst_52896);

(statearr_52933_54453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (10))){
var inst_52915 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52934_54454 = state_52919__$1;
(statearr_52934_54454[(2)] = inst_52915);

(statearr_52934_54454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (8))){
var inst_52896 = (state_52919[(7)]);
var inst_52906 = cljs.core.next(inst_52896);
var inst_52896__$1 = inst_52906;
var state_52919__$1 = (function (){var statearr_52935 = state_52919;
(statearr_52935[(7)] = inst_52896__$1);

return statearr_52935;
})();
var statearr_52936_54455 = state_52919__$1;
(statearr_52936_54455[(2)] = null);

(statearr_52936_54455[(1)] = (2));


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
});})(c__52380__auto__))
;
return ((function (switch__51967__auto__,c__52380__auto__){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_52937 = [null,null,null,null,null,null,null,null];
(statearr_52937[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_52937[(1)] = (1));

return statearr_52937;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_52919){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_52919);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e52938){if((e52938 instanceof Object)){
var ex__51971__auto__ = e52938;
var statearr_52939_54462 = state_52919;
(statearr_52939_54462[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54463 = state_52919;
state_52919 = G__54463;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_52919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_52919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto__))
})();
var state__52382__auto__ = (function (){var statearr_52940 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_52940[(6)] = c__52380__auto__);

return statearr_52940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto__))
);

return c__52380__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52941 = (function (ch,cs,meta52942){
this.ch = ch;
this.cs = cs;
this.meta52942 = meta52942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52943,meta52942__$1){
var self__ = this;
var _52943__$1 = this;
return (new cljs.core.async.t_cljs$core$async52941(self__.ch,self__.cs,meta52942__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52943){
var self__ = this;
var _52943__$1 = this;
return self__.meta52942;
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52942","meta52942",-1545891125,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52941";

cljs.core.async.t_cljs$core$async52941.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52941");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52941.
 */
cljs.core.async.__GT_t_cljs$core$async52941 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52941(ch__$1,cs__$1,meta52942){
return (new cljs.core.async.t_cljs$core$async52941(ch__$1,cs__$1,meta52942));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52941(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__52380__auto___54489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54489,cs,m,dchan,dctr,done){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54489,cs,m,dchan,dctr,done){
return (function (state_53078){
var state_val_53079 = (state_53078[(1)]);
if((state_val_53079 === (7))){
var inst_53074 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53080_54490 = state_53078__$1;
(statearr_53080_54490[(2)] = inst_53074);

(statearr_53080_54490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (20))){
var inst_52977 = (state_53078[(7)]);
var inst_52989 = cljs.core.first(inst_52977);
var inst_52990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52989,(0),null);
var inst_52991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52989,(1),null);
var state_53078__$1 = (function (){var statearr_53081 = state_53078;
(statearr_53081[(8)] = inst_52990);

return statearr_53081;
})();
if(cljs.core.truth_(inst_52991)){
var statearr_53082_54492 = state_53078__$1;
(statearr_53082_54492[(1)] = (22));

} else {
var statearr_53083_54493 = state_53078__$1;
(statearr_53083_54493[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (27))){
var inst_53019 = (state_53078[(9)]);
var inst_53021 = (state_53078[(10)]);
var inst_53026 = (state_53078[(11)]);
var inst_52946 = (state_53078[(12)]);
var inst_53026__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53019,inst_53021);
var inst_53027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_53026__$1,inst_52946,done);
var state_53078__$1 = (function (){var statearr_53084 = state_53078;
(statearr_53084[(11)] = inst_53026__$1);

return statearr_53084;
})();
if(cljs.core.truth_(inst_53027)){
var statearr_53085_54495 = state_53078__$1;
(statearr_53085_54495[(1)] = (30));

} else {
var statearr_53086_54496 = state_53078__$1;
(statearr_53086_54496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (1))){
var state_53078__$1 = state_53078;
var statearr_53087_54497 = state_53078__$1;
(statearr_53087_54497[(2)] = null);

(statearr_53087_54497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (24))){
var inst_52977 = (state_53078[(7)]);
var inst_52996 = (state_53078[(2)]);
var inst_52997 = cljs.core.next(inst_52977);
var inst_52955 = inst_52997;
var inst_52956 = null;
var inst_52957 = (0);
var inst_52958 = (0);
var state_53078__$1 = (function (){var statearr_53088 = state_53078;
(statearr_53088[(13)] = inst_52956);

(statearr_53088[(14)] = inst_52957);

(statearr_53088[(15)] = inst_52958);

(statearr_53088[(16)] = inst_52955);

(statearr_53088[(17)] = inst_52996);

return statearr_53088;
})();
var statearr_53089_54499 = state_53078__$1;
(statearr_53089_54499[(2)] = null);

(statearr_53089_54499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (39))){
var state_53078__$1 = state_53078;
var statearr_53093_54500 = state_53078__$1;
(statearr_53093_54500[(2)] = null);

(statearr_53093_54500[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (4))){
var inst_52946 = (state_53078[(12)]);
var inst_52946__$1 = (state_53078[(2)]);
var inst_52947 = (inst_52946__$1 == null);
var state_53078__$1 = (function (){var statearr_53094 = state_53078;
(statearr_53094[(12)] = inst_52946__$1);

return statearr_53094;
})();
if(cljs.core.truth_(inst_52947)){
var statearr_53095_54503 = state_53078__$1;
(statearr_53095_54503[(1)] = (5));

} else {
var statearr_53096_54504 = state_53078__$1;
(statearr_53096_54504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (15))){
var inst_52956 = (state_53078[(13)]);
var inst_52957 = (state_53078[(14)]);
var inst_52958 = (state_53078[(15)]);
var inst_52955 = (state_53078[(16)]);
var inst_52973 = (state_53078[(2)]);
var inst_52974 = (inst_52958 + (1));
var tmp53090 = inst_52956;
var tmp53091 = inst_52957;
var tmp53092 = inst_52955;
var inst_52955__$1 = tmp53092;
var inst_52956__$1 = tmp53090;
var inst_52957__$1 = tmp53091;
var inst_52958__$1 = inst_52974;
var state_53078__$1 = (function (){var statearr_53097 = state_53078;
(statearr_53097[(13)] = inst_52956__$1);

(statearr_53097[(14)] = inst_52957__$1);

(statearr_53097[(15)] = inst_52958__$1);

(statearr_53097[(16)] = inst_52955__$1);

(statearr_53097[(18)] = inst_52973);

return statearr_53097;
})();
var statearr_53098_54507 = state_53078__$1;
(statearr_53098_54507[(2)] = null);

(statearr_53098_54507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (21))){
var inst_53000 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53102_54515 = state_53078__$1;
(statearr_53102_54515[(2)] = inst_53000);

(statearr_53102_54515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (31))){
var inst_53026 = (state_53078[(11)]);
var inst_53030 = done(null);
var inst_53031 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_53026);
var state_53078__$1 = (function (){var statearr_53103 = state_53078;
(statearr_53103[(19)] = inst_53030);

return statearr_53103;
})();
var statearr_53104_54519 = state_53078__$1;
(statearr_53104_54519[(2)] = inst_53031);

(statearr_53104_54519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (32))){
var inst_53019 = (state_53078[(9)]);
var inst_53020 = (state_53078[(20)]);
var inst_53018 = (state_53078[(21)]);
var inst_53021 = (state_53078[(10)]);
var inst_53033 = (state_53078[(2)]);
var inst_53034 = (inst_53021 + (1));
var tmp53099 = inst_53019;
var tmp53100 = inst_53020;
var tmp53101 = inst_53018;
var inst_53018__$1 = tmp53101;
var inst_53019__$1 = tmp53099;
var inst_53020__$1 = tmp53100;
var inst_53021__$1 = inst_53034;
var state_53078__$1 = (function (){var statearr_53105 = state_53078;
(statearr_53105[(9)] = inst_53019__$1);

(statearr_53105[(22)] = inst_53033);

(statearr_53105[(20)] = inst_53020__$1);

(statearr_53105[(21)] = inst_53018__$1);

(statearr_53105[(10)] = inst_53021__$1);

return statearr_53105;
})();
var statearr_53106_54547 = state_53078__$1;
(statearr_53106_54547[(2)] = null);

(statearr_53106_54547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (40))){
var inst_53046 = (state_53078[(23)]);
var inst_53050 = done(null);
var inst_53051 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_53046);
var state_53078__$1 = (function (){var statearr_53107 = state_53078;
(statearr_53107[(24)] = inst_53050);

return statearr_53107;
})();
var statearr_53108_54550 = state_53078__$1;
(statearr_53108_54550[(2)] = inst_53051);

(statearr_53108_54550[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (33))){
var inst_53037 = (state_53078[(25)]);
var inst_53039 = cljs.core.chunked_seq_QMARK_(inst_53037);
var state_53078__$1 = state_53078;
if(inst_53039){
var statearr_53109_54552 = state_53078__$1;
(statearr_53109_54552[(1)] = (36));

} else {
var statearr_53110_54553 = state_53078__$1;
(statearr_53110_54553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (13))){
var inst_52967 = (state_53078[(26)]);
var inst_52970 = cljs.core.async.close_BANG_(inst_52967);
var state_53078__$1 = state_53078;
var statearr_53111_54554 = state_53078__$1;
(statearr_53111_54554[(2)] = inst_52970);

(statearr_53111_54554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (22))){
var inst_52990 = (state_53078[(8)]);
var inst_52993 = cljs.core.async.close_BANG_(inst_52990);
var state_53078__$1 = state_53078;
var statearr_53112_54555 = state_53078__$1;
(statearr_53112_54555[(2)] = inst_52993);

(statearr_53112_54555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (36))){
var inst_53037 = (state_53078[(25)]);
var inst_53041 = cljs.core.chunk_first(inst_53037);
var inst_53042 = cljs.core.chunk_rest(inst_53037);
var inst_53043 = cljs.core.count(inst_53041);
var inst_53018 = inst_53042;
var inst_53019 = inst_53041;
var inst_53020 = inst_53043;
var inst_53021 = (0);
var state_53078__$1 = (function (){var statearr_53113 = state_53078;
(statearr_53113[(9)] = inst_53019);

(statearr_53113[(20)] = inst_53020);

(statearr_53113[(21)] = inst_53018);

(statearr_53113[(10)] = inst_53021);

return statearr_53113;
})();
var statearr_53114_54556 = state_53078__$1;
(statearr_53114_54556[(2)] = null);

(statearr_53114_54556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (41))){
var inst_53037 = (state_53078[(25)]);
var inst_53053 = (state_53078[(2)]);
var inst_53054 = cljs.core.next(inst_53037);
var inst_53018 = inst_53054;
var inst_53019 = null;
var inst_53020 = (0);
var inst_53021 = (0);
var state_53078__$1 = (function (){var statearr_53115 = state_53078;
(statearr_53115[(9)] = inst_53019);

(statearr_53115[(20)] = inst_53020);

(statearr_53115[(21)] = inst_53018);

(statearr_53115[(10)] = inst_53021);

(statearr_53115[(27)] = inst_53053);

return statearr_53115;
})();
var statearr_53116_54557 = state_53078__$1;
(statearr_53116_54557[(2)] = null);

(statearr_53116_54557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (43))){
var state_53078__$1 = state_53078;
var statearr_53117_54558 = state_53078__$1;
(statearr_53117_54558[(2)] = null);

(statearr_53117_54558[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (29))){
var inst_53062 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53118_54559 = state_53078__$1;
(statearr_53118_54559[(2)] = inst_53062);

(statearr_53118_54559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (44))){
var inst_53071 = (state_53078[(2)]);
var state_53078__$1 = (function (){var statearr_53119 = state_53078;
(statearr_53119[(28)] = inst_53071);

return statearr_53119;
})();
var statearr_53120_54560 = state_53078__$1;
(statearr_53120_54560[(2)] = null);

(statearr_53120_54560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (6))){
var inst_53010 = (state_53078[(29)]);
var inst_53009 = cljs.core.deref(cs);
var inst_53010__$1 = cljs.core.keys(inst_53009);
var inst_53011 = cljs.core.count(inst_53010__$1);
var inst_53012 = cljs.core.reset_BANG_(dctr,inst_53011);
var inst_53017 = cljs.core.seq(inst_53010__$1);
var inst_53018 = inst_53017;
var inst_53019 = null;
var inst_53020 = (0);
var inst_53021 = (0);
var state_53078__$1 = (function (){var statearr_53121 = state_53078;
(statearr_53121[(9)] = inst_53019);

(statearr_53121[(30)] = inst_53012);

(statearr_53121[(20)] = inst_53020);

(statearr_53121[(21)] = inst_53018);

(statearr_53121[(10)] = inst_53021);

(statearr_53121[(29)] = inst_53010__$1);

return statearr_53121;
})();
var statearr_53122_54563 = state_53078__$1;
(statearr_53122_54563[(2)] = null);

(statearr_53122_54563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (28))){
var inst_53018 = (state_53078[(21)]);
var inst_53037 = (state_53078[(25)]);
var inst_53037__$1 = cljs.core.seq(inst_53018);
var state_53078__$1 = (function (){var statearr_53123 = state_53078;
(statearr_53123[(25)] = inst_53037__$1);

return statearr_53123;
})();
if(inst_53037__$1){
var statearr_53124_54567 = state_53078__$1;
(statearr_53124_54567[(1)] = (33));

} else {
var statearr_53125_54568 = state_53078__$1;
(statearr_53125_54568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (25))){
var inst_53020 = (state_53078[(20)]);
var inst_53021 = (state_53078[(10)]);
var inst_53023 = (inst_53021 < inst_53020);
var inst_53024 = inst_53023;
var state_53078__$1 = state_53078;
if(cljs.core.truth_(inst_53024)){
var statearr_53126_54569 = state_53078__$1;
(statearr_53126_54569[(1)] = (27));

} else {
var statearr_53127_54570 = state_53078__$1;
(statearr_53127_54570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (34))){
var state_53078__$1 = state_53078;
var statearr_53128_54571 = state_53078__$1;
(statearr_53128_54571[(2)] = null);

(statearr_53128_54571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (17))){
var state_53078__$1 = state_53078;
var statearr_53129_54574 = state_53078__$1;
(statearr_53129_54574[(2)] = null);

(statearr_53129_54574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (3))){
var inst_53076 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53078__$1,inst_53076);
} else {
if((state_val_53079 === (12))){
var inst_53005 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53130_54576 = state_53078__$1;
(statearr_53130_54576[(2)] = inst_53005);

(statearr_53130_54576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (2))){
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53078__$1,(4),ch);
} else {
if((state_val_53079 === (23))){
var state_53078__$1 = state_53078;
var statearr_53131_54578 = state_53078__$1;
(statearr_53131_54578[(2)] = null);

(statearr_53131_54578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (35))){
var inst_53060 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53132_54580 = state_53078__$1;
(statearr_53132_54580[(2)] = inst_53060);

(statearr_53132_54580[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (19))){
var inst_52977 = (state_53078[(7)]);
var inst_52981 = cljs.core.chunk_first(inst_52977);
var inst_52982 = cljs.core.chunk_rest(inst_52977);
var inst_52983 = cljs.core.count(inst_52981);
var inst_52955 = inst_52982;
var inst_52956 = inst_52981;
var inst_52957 = inst_52983;
var inst_52958 = (0);
var state_53078__$1 = (function (){var statearr_53133 = state_53078;
(statearr_53133[(13)] = inst_52956);

(statearr_53133[(14)] = inst_52957);

(statearr_53133[(15)] = inst_52958);

(statearr_53133[(16)] = inst_52955);

return statearr_53133;
})();
var statearr_53134_54585 = state_53078__$1;
(statearr_53134_54585[(2)] = null);

(statearr_53134_54585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (11))){
var inst_52977 = (state_53078[(7)]);
var inst_52955 = (state_53078[(16)]);
var inst_52977__$1 = cljs.core.seq(inst_52955);
var state_53078__$1 = (function (){var statearr_53135 = state_53078;
(statearr_53135[(7)] = inst_52977__$1);

return statearr_53135;
})();
if(inst_52977__$1){
var statearr_53136_54587 = state_53078__$1;
(statearr_53136_54587[(1)] = (16));

} else {
var statearr_53137_54588 = state_53078__$1;
(statearr_53137_54588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (9))){
var inst_53007 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53138_54589 = state_53078__$1;
(statearr_53138_54589[(2)] = inst_53007);

(statearr_53138_54589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (5))){
var inst_52953 = cljs.core.deref(cs);
var inst_52954 = cljs.core.seq(inst_52953);
var inst_52955 = inst_52954;
var inst_52956 = null;
var inst_52957 = (0);
var inst_52958 = (0);
var state_53078__$1 = (function (){var statearr_53139 = state_53078;
(statearr_53139[(13)] = inst_52956);

(statearr_53139[(14)] = inst_52957);

(statearr_53139[(15)] = inst_52958);

(statearr_53139[(16)] = inst_52955);

return statearr_53139;
})();
var statearr_53140_54591 = state_53078__$1;
(statearr_53140_54591[(2)] = null);

(statearr_53140_54591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (14))){
var state_53078__$1 = state_53078;
var statearr_53141_54592 = state_53078__$1;
(statearr_53141_54592[(2)] = null);

(statearr_53141_54592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (45))){
var inst_53068 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53142_54594 = state_53078__$1;
(statearr_53142_54594[(2)] = inst_53068);

(statearr_53142_54594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (26))){
var inst_53010 = (state_53078[(29)]);
var inst_53064 = (state_53078[(2)]);
var inst_53065 = cljs.core.seq(inst_53010);
var state_53078__$1 = (function (){var statearr_53143 = state_53078;
(statearr_53143[(31)] = inst_53064);

return statearr_53143;
})();
if(inst_53065){
var statearr_53144_54596 = state_53078__$1;
(statearr_53144_54596[(1)] = (42));

} else {
var statearr_53145_54597 = state_53078__$1;
(statearr_53145_54597[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (16))){
var inst_52977 = (state_53078[(7)]);
var inst_52979 = cljs.core.chunked_seq_QMARK_(inst_52977);
var state_53078__$1 = state_53078;
if(inst_52979){
var statearr_53146_54598 = state_53078__$1;
(statearr_53146_54598[(1)] = (19));

} else {
var statearr_53147_54599 = state_53078__$1;
(statearr_53147_54599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (38))){
var inst_53057 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53148_54601 = state_53078__$1;
(statearr_53148_54601[(2)] = inst_53057);

(statearr_53148_54601[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (30))){
var state_53078__$1 = state_53078;
var statearr_53149_54602 = state_53078__$1;
(statearr_53149_54602[(2)] = null);

(statearr_53149_54602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (10))){
var inst_52956 = (state_53078[(13)]);
var inst_52958 = (state_53078[(15)]);
var inst_52966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52956,inst_52958);
var inst_52967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52966,(0),null);
var inst_52968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52966,(1),null);
var state_53078__$1 = (function (){var statearr_53150 = state_53078;
(statearr_53150[(26)] = inst_52967);

return statearr_53150;
})();
if(cljs.core.truth_(inst_52968)){
var statearr_53151_54608 = state_53078__$1;
(statearr_53151_54608[(1)] = (13));

} else {
var statearr_53152_54609 = state_53078__$1;
(statearr_53152_54609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (18))){
var inst_53003 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53153_54610 = state_53078__$1;
(statearr_53153_54610[(2)] = inst_53003);

(statearr_53153_54610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (42))){
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53078__$1,(45),dchan);
} else {
if((state_val_53079 === (37))){
var inst_53037 = (state_53078[(25)]);
var inst_53046 = (state_53078[(23)]);
var inst_52946 = (state_53078[(12)]);
var inst_53046__$1 = cljs.core.first(inst_53037);
var inst_53047 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_53046__$1,inst_52946,done);
var state_53078__$1 = (function (){var statearr_53154 = state_53078;
(statearr_53154[(23)] = inst_53046__$1);

return statearr_53154;
})();
if(cljs.core.truth_(inst_53047)){
var statearr_53155_54615 = state_53078__$1;
(statearr_53155_54615[(1)] = (39));

} else {
var statearr_53156_54616 = state_53078__$1;
(statearr_53156_54616[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (8))){
var inst_52957 = (state_53078[(14)]);
var inst_52958 = (state_53078[(15)]);
var inst_52960 = (inst_52958 < inst_52957);
var inst_52961 = inst_52960;
var state_53078__$1 = state_53078;
if(cljs.core.truth_(inst_52961)){
var statearr_53157_54617 = state_53078__$1;
(statearr_53157_54617[(1)] = (10));

} else {
var statearr_53158_54618 = state_53078__$1;
(statearr_53158_54618[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52380__auto___54489,cs,m,dchan,dctr,done))
;
return ((function (switch__51967__auto__,c__52380__auto___54489,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__51968__auto__ = null;
var cljs$core$async$mult_$_state_machine__51968__auto____0 = (function (){
var statearr_53159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53159[(0)] = cljs$core$async$mult_$_state_machine__51968__auto__);

(statearr_53159[(1)] = (1));

return statearr_53159;
});
var cljs$core$async$mult_$_state_machine__51968__auto____1 = (function (state_53078){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53078);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53160){if((e53160 instanceof Object)){
var ex__51971__auto__ = e53160;
var statearr_53161_54619 = state_53078;
(statearr_53161_54619[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54621 = state_53078;
state_53078 = G__54621;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51968__auto__ = function(state_53078){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51968__auto____1.call(this,state_53078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51968__auto____0;
cljs$core$async$mult_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51968__auto____1;
return cljs$core$async$mult_$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54489,cs,m,dchan,dctr,done))
})();
var state__52382__auto__ = (function (){var statearr_53162 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53162[(6)] = c__52380__auto___54489);

return statearr_53162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54489,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__53164 = arguments.length;
switch (G__53164) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54664 = arguments.length;
var i__4731__auto___54665 = (0);
while(true){
if((i__4731__auto___54665 < len__4730__auto___54664)){
args__4736__auto__.push((arguments[i__4731__auto___54665]));

var G__54666 = (i__4731__auto___54665 + (1));
i__4731__auto___54665 = G__54666;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53169){
var map__53170 = p__53169;
var map__53170__$1 = (((((!((map__53170 == null))))?(((((map__53170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53170):map__53170);
var opts = map__53170__$1;
var statearr_53172_54674 = state;
(statearr_53172_54674[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__53170,map__53170__$1,opts){
return (function (val){
var statearr_53173_54675 = state;
(statearr_53173_54675[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__53170,map__53170__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_53174_54677 = state;
(statearr_53174_54677[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53165){
var G__53166 = cljs.core.first(seq53165);
var seq53165__$1 = cljs.core.next(seq53165);
var G__53167 = cljs.core.first(seq53165__$1);
var seq53165__$2 = cljs.core.next(seq53165__$1);
var G__53168 = cljs.core.first(seq53165__$2);
var seq53165__$3 = cljs.core.next(seq53165__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53166,G__53167,G__53168,seq53165__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53175 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53176){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53176 = meta53176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53177,meta53176__$1){
var self__ = this;
var _53177__$1 = this;
return (new cljs.core.async.t_cljs$core$async53175(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53176__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53177){
var self__ = this;
var _53177__$1 = this;
return self__.meta53176;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53176","meta53176",-1528162267,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53175";

cljs.core.async.t_cljs$core$async53175.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53175");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53175.
 */
cljs.core.async.__GT_t_cljs$core$async53175 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async53175(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53176){
return (new cljs.core.async.t_cljs$core$async53175(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53176));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async53175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52380__auto___54719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53279){
var state_val_53280 = (state_53279[(1)]);
if((state_val_53280 === (7))){
var inst_53194 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
var statearr_53281_54721 = state_53279__$1;
(statearr_53281_54721[(2)] = inst_53194);

(statearr_53281_54721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (20))){
var inst_53206 = (state_53279[(7)]);
var state_53279__$1 = state_53279;
var statearr_53282_54722 = state_53279__$1;
(statearr_53282_54722[(2)] = inst_53206);

(statearr_53282_54722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (27))){
var state_53279__$1 = state_53279;
var statearr_53283_54724 = state_53279__$1;
(statearr_53283_54724[(2)] = null);

(statearr_53283_54724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (1))){
var inst_53181 = (state_53279[(8)]);
var inst_53181__$1 = calc_state();
var inst_53183 = (inst_53181__$1 == null);
var inst_53184 = cljs.core.not(inst_53183);
var state_53279__$1 = (function (){var statearr_53284 = state_53279;
(statearr_53284[(8)] = inst_53181__$1);

return statearr_53284;
})();
if(inst_53184){
var statearr_53285_54732 = state_53279__$1;
(statearr_53285_54732[(1)] = (2));

} else {
var statearr_53286_54733 = state_53279__$1;
(statearr_53286_54733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (24))){
var inst_53239 = (state_53279[(9)]);
var inst_53253 = (state_53279[(10)]);
var inst_53230 = (state_53279[(11)]);
var inst_53253__$1 = (inst_53230.cljs$core$IFn$_invoke$arity$1 ? inst_53230.cljs$core$IFn$_invoke$arity$1(inst_53239) : inst_53230.call(null,inst_53239));
var state_53279__$1 = (function (){var statearr_53287 = state_53279;
(statearr_53287[(10)] = inst_53253__$1);

return statearr_53287;
})();
if(cljs.core.truth_(inst_53253__$1)){
var statearr_53288_54734 = state_53279__$1;
(statearr_53288_54734[(1)] = (29));

} else {
var statearr_53289_54735 = state_53279__$1;
(statearr_53289_54735[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (4))){
var inst_53197 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53197)){
var statearr_53290_54736 = state_53279__$1;
(statearr_53290_54736[(1)] = (8));

} else {
var statearr_53291_54737 = state_53279__$1;
(statearr_53291_54737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (15))){
var inst_53224 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53224)){
var statearr_53292_54739 = state_53279__$1;
(statearr_53292_54739[(1)] = (19));

} else {
var statearr_53293_54740 = state_53279__$1;
(statearr_53293_54740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (21))){
var inst_53229 = (state_53279[(12)]);
var inst_53229__$1 = (state_53279[(2)]);
var inst_53230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53229__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53229__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53229__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53279__$1 = (function (){var statearr_53294 = state_53279;
(statearr_53294[(12)] = inst_53229__$1);

(statearr_53294[(11)] = inst_53230);

(statearr_53294[(13)] = inst_53231);

return statearr_53294;
})();
return cljs.core.async.ioc_alts_BANG_(state_53279__$1,(22),inst_53232);
} else {
if((state_val_53280 === (31))){
var inst_53261 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53261)){
var statearr_53295_54744 = state_53279__$1;
(statearr_53295_54744[(1)] = (32));

} else {
var statearr_53296_54745 = state_53279__$1;
(statearr_53296_54745[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (32))){
var inst_53238 = (state_53279[(14)]);
var state_53279__$1 = state_53279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53279__$1,(35),out,inst_53238);
} else {
if((state_val_53280 === (33))){
var inst_53229 = (state_53279[(12)]);
var inst_53206 = inst_53229;
var state_53279__$1 = (function (){var statearr_53297 = state_53279;
(statearr_53297[(7)] = inst_53206);

return statearr_53297;
})();
var statearr_53298_54751 = state_53279__$1;
(statearr_53298_54751[(2)] = null);

(statearr_53298_54751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (13))){
var inst_53206 = (state_53279[(7)]);
var inst_53213 = inst_53206.cljs$lang$protocol_mask$partition0$;
var inst_53214 = (inst_53213 & (64));
var inst_53215 = inst_53206.cljs$core$ISeq$;
var inst_53216 = (cljs.core.PROTOCOL_SENTINEL === inst_53215);
var inst_53217 = ((inst_53214) || (inst_53216));
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53217)){
var statearr_53299_54753 = state_53279__$1;
(statearr_53299_54753[(1)] = (16));

} else {
var statearr_53300_54754 = state_53279__$1;
(statearr_53300_54754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (22))){
var inst_53238 = (state_53279[(14)]);
var inst_53239 = (state_53279[(9)]);
var inst_53237 = (state_53279[(2)]);
var inst_53238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53237,(0),null);
var inst_53239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53237,(1),null);
var inst_53240 = (inst_53238__$1 == null);
var inst_53241 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53239__$1,change);
var inst_53242 = ((inst_53240) || (inst_53241));
var state_53279__$1 = (function (){var statearr_53301 = state_53279;
(statearr_53301[(14)] = inst_53238__$1);

(statearr_53301[(9)] = inst_53239__$1);

return statearr_53301;
})();
if(cljs.core.truth_(inst_53242)){
var statearr_53302_54756 = state_53279__$1;
(statearr_53302_54756[(1)] = (23));

} else {
var statearr_53303_54757 = state_53279__$1;
(statearr_53303_54757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (36))){
var inst_53229 = (state_53279[(12)]);
var inst_53206 = inst_53229;
var state_53279__$1 = (function (){var statearr_53304 = state_53279;
(statearr_53304[(7)] = inst_53206);

return statearr_53304;
})();
var statearr_53305_54759 = state_53279__$1;
(statearr_53305_54759[(2)] = null);

(statearr_53305_54759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (29))){
var inst_53253 = (state_53279[(10)]);
var state_53279__$1 = state_53279;
var statearr_53306_54763 = state_53279__$1;
(statearr_53306_54763[(2)] = inst_53253);

(statearr_53306_54763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (6))){
var state_53279__$1 = state_53279;
var statearr_53307_54764 = state_53279__$1;
(statearr_53307_54764[(2)] = false);

(statearr_53307_54764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (28))){
var inst_53249 = (state_53279[(2)]);
var inst_53250 = calc_state();
var inst_53206 = inst_53250;
var state_53279__$1 = (function (){var statearr_53308 = state_53279;
(statearr_53308[(15)] = inst_53249);

(statearr_53308[(7)] = inst_53206);

return statearr_53308;
})();
var statearr_53309_54765 = state_53279__$1;
(statearr_53309_54765[(2)] = null);

(statearr_53309_54765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (25))){
var inst_53275 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
var statearr_53310_54766 = state_53279__$1;
(statearr_53310_54766[(2)] = inst_53275);

(statearr_53310_54766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (34))){
var inst_53273 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
var statearr_53311_54767 = state_53279__$1;
(statearr_53311_54767[(2)] = inst_53273);

(statearr_53311_54767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (17))){
var state_53279__$1 = state_53279;
var statearr_53312_54768 = state_53279__$1;
(statearr_53312_54768[(2)] = false);

(statearr_53312_54768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (3))){
var state_53279__$1 = state_53279;
var statearr_53313_54769 = state_53279__$1;
(statearr_53313_54769[(2)] = false);

(statearr_53313_54769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (12))){
var inst_53277 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53279__$1,inst_53277);
} else {
if((state_val_53280 === (2))){
var inst_53181 = (state_53279[(8)]);
var inst_53186 = inst_53181.cljs$lang$protocol_mask$partition0$;
var inst_53187 = (inst_53186 & (64));
var inst_53188 = inst_53181.cljs$core$ISeq$;
var inst_53189 = (cljs.core.PROTOCOL_SENTINEL === inst_53188);
var inst_53190 = ((inst_53187) || (inst_53189));
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53190)){
var statearr_53314_54770 = state_53279__$1;
(statearr_53314_54770[(1)] = (5));

} else {
var statearr_53315_54772 = state_53279__$1;
(statearr_53315_54772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (23))){
var inst_53238 = (state_53279[(14)]);
var inst_53244 = (inst_53238 == null);
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53244)){
var statearr_53316_54773 = state_53279__$1;
(statearr_53316_54773[(1)] = (26));

} else {
var statearr_53317_54774 = state_53279__$1;
(statearr_53317_54774[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (35))){
var inst_53264 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
if(cljs.core.truth_(inst_53264)){
var statearr_53318_54775 = state_53279__$1;
(statearr_53318_54775[(1)] = (36));

} else {
var statearr_53319_54777 = state_53279__$1;
(statearr_53319_54777[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (19))){
var inst_53206 = (state_53279[(7)]);
var inst_53226 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53206);
var state_53279__$1 = state_53279;
var statearr_53320_54778 = state_53279__$1;
(statearr_53320_54778[(2)] = inst_53226);

(statearr_53320_54778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (11))){
var inst_53206 = (state_53279[(7)]);
var inst_53210 = (inst_53206 == null);
var inst_53211 = cljs.core.not(inst_53210);
var state_53279__$1 = state_53279;
if(inst_53211){
var statearr_53321_54779 = state_53279__$1;
(statearr_53321_54779[(1)] = (13));

} else {
var statearr_53322_54781 = state_53279__$1;
(statearr_53322_54781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (9))){
var inst_53181 = (state_53279[(8)]);
var state_53279__$1 = state_53279;
var statearr_53323_54783 = state_53279__$1;
(statearr_53323_54783[(2)] = inst_53181);

(statearr_53323_54783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (5))){
var state_53279__$1 = state_53279;
var statearr_53324_54787 = state_53279__$1;
(statearr_53324_54787[(2)] = true);

(statearr_53324_54787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (14))){
var state_53279__$1 = state_53279;
var statearr_53325_54790 = state_53279__$1;
(statearr_53325_54790[(2)] = false);

(statearr_53325_54790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (26))){
var inst_53239 = (state_53279[(9)]);
var inst_53246 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_53239);
var state_53279__$1 = state_53279;
var statearr_53326_54794 = state_53279__$1;
(statearr_53326_54794[(2)] = inst_53246);

(statearr_53326_54794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (16))){
var state_53279__$1 = state_53279;
var statearr_53327_54796 = state_53279__$1;
(statearr_53327_54796[(2)] = true);

(statearr_53327_54796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (38))){
var inst_53269 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
var statearr_53328_54798 = state_53279__$1;
(statearr_53328_54798[(2)] = inst_53269);

(statearr_53328_54798[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (30))){
var inst_53239 = (state_53279[(9)]);
var inst_53230 = (state_53279[(11)]);
var inst_53231 = (state_53279[(13)]);
var inst_53256 = cljs.core.empty_QMARK_(inst_53230);
var inst_53257 = (inst_53231.cljs$core$IFn$_invoke$arity$1 ? inst_53231.cljs$core$IFn$_invoke$arity$1(inst_53239) : inst_53231.call(null,inst_53239));
var inst_53258 = cljs.core.not(inst_53257);
var inst_53259 = ((inst_53256) && (inst_53258));
var state_53279__$1 = state_53279;
var statearr_53329_54799 = state_53279__$1;
(statearr_53329_54799[(2)] = inst_53259);

(statearr_53329_54799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (10))){
var inst_53181 = (state_53279[(8)]);
var inst_53202 = (state_53279[(2)]);
var inst_53203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53202,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53202,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53202,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53206 = inst_53181;
var state_53279__$1 = (function (){var statearr_53330 = state_53279;
(statearr_53330[(16)] = inst_53205);

(statearr_53330[(17)] = inst_53204);

(statearr_53330[(7)] = inst_53206);

(statearr_53330[(18)] = inst_53203);

return statearr_53330;
})();
var statearr_53331_54801 = state_53279__$1;
(statearr_53331_54801[(2)] = null);

(statearr_53331_54801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (18))){
var inst_53221 = (state_53279[(2)]);
var state_53279__$1 = state_53279;
var statearr_53332_54803 = state_53279__$1;
(statearr_53332_54803[(2)] = inst_53221);

(statearr_53332_54803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (37))){
var state_53279__$1 = state_53279;
var statearr_53333_54804 = state_53279__$1;
(statearr_53333_54804[(2)] = null);

(statearr_53333_54804[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53280 === (8))){
var inst_53181 = (state_53279[(8)]);
var inst_53199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53181);
var state_53279__$1 = state_53279;
var statearr_53334_54806 = state_53279__$1;
(statearr_53334_54806[(2)] = inst_53199);

(statearr_53334_54806[(1)] = (10));


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
});})(c__52380__auto___54719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__51967__auto__,c__52380__auto___54719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__51968__auto__ = null;
var cljs$core$async$mix_$_state_machine__51968__auto____0 = (function (){
var statearr_53335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53335[(0)] = cljs$core$async$mix_$_state_machine__51968__auto__);

(statearr_53335[(1)] = (1));

return statearr_53335;
});
var cljs$core$async$mix_$_state_machine__51968__auto____1 = (function (state_53279){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53279);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53336){if((e53336 instanceof Object)){
var ex__51971__auto__ = e53336;
var statearr_53337_54808 = state_53279;
(statearr_53337_54808[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54810 = state_53279;
state_53279 = G__54810;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51968__auto__ = function(state_53279){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51968__auto____1.call(this,state_53279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51968__auto____0;
cljs$core$async$mix_$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51968__auto____1;
return cljs$core$async$mix_$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__52382__auto__ = (function (){var statearr_53338 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53338[(6)] = c__52380__auto___54719);

return statearr_53338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54719,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53340 = arguments.length;
switch (G__53340) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53343 = arguments.length;
switch (G__53343) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__53341_SHARP_){
if(cljs.core.truth_((p1__53341_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53341_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53341_SHARP_.call(null,topic)))){
return p1__53341_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53341_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53344 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53345){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53345 = meta53345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53346,meta53345__$1){
var self__ = this;
var _53346__$1 = this;
return (new cljs.core.async.t_cljs$core$async53344(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53345__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53346){
var self__ = this;
var _53346__$1 = this;
return self__.meta53345;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53345","meta53345",-1286863267,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53344";

cljs.core.async.t_cljs$core$async53344.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53344");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53344.
 */
cljs.core.async.__GT_t_cljs$core$async53344 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53344(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53345){
return (new cljs.core.async.t_cljs$core$async53344(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53345));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53344(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52380__auto___54846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54846,mults,ensure_mult,p){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54846,mults,ensure_mult,p){
return (function (state_53418){
var state_val_53419 = (state_53418[(1)]);
if((state_val_53419 === (7))){
var inst_53414 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
var statearr_53420_54848 = state_53418__$1;
(statearr_53420_54848[(2)] = inst_53414);

(statearr_53420_54848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (20))){
var state_53418__$1 = state_53418;
var statearr_53421_54849 = state_53418__$1;
(statearr_53421_54849[(2)] = null);

(statearr_53421_54849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (1))){
var state_53418__$1 = state_53418;
var statearr_53422_54850 = state_53418__$1;
(statearr_53422_54850[(2)] = null);

(statearr_53422_54850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (24))){
var inst_53397 = (state_53418[(7)]);
var inst_53406 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53397);
var state_53418__$1 = state_53418;
var statearr_53423_54851 = state_53418__$1;
(statearr_53423_54851[(2)] = inst_53406);

(statearr_53423_54851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (4))){
var inst_53349 = (state_53418[(8)]);
var inst_53349__$1 = (state_53418[(2)]);
var inst_53350 = (inst_53349__$1 == null);
var state_53418__$1 = (function (){var statearr_53424 = state_53418;
(statearr_53424[(8)] = inst_53349__$1);

return statearr_53424;
})();
if(cljs.core.truth_(inst_53350)){
var statearr_53425_54853 = state_53418__$1;
(statearr_53425_54853[(1)] = (5));

} else {
var statearr_53426_54854 = state_53418__$1;
(statearr_53426_54854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (15))){
var inst_53391 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
var statearr_53427_54855 = state_53418__$1;
(statearr_53427_54855[(2)] = inst_53391);

(statearr_53427_54855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (21))){
var inst_53411 = (state_53418[(2)]);
var state_53418__$1 = (function (){var statearr_53428 = state_53418;
(statearr_53428[(9)] = inst_53411);

return statearr_53428;
})();
var statearr_53429_54872 = state_53418__$1;
(statearr_53429_54872[(2)] = null);

(statearr_53429_54872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (13))){
var inst_53373 = (state_53418[(10)]);
var inst_53375 = cljs.core.chunked_seq_QMARK_(inst_53373);
var state_53418__$1 = state_53418;
if(inst_53375){
var statearr_53430_54873 = state_53418__$1;
(statearr_53430_54873[(1)] = (16));

} else {
var statearr_53431_54874 = state_53418__$1;
(statearr_53431_54874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (22))){
var inst_53403 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
if(cljs.core.truth_(inst_53403)){
var statearr_53432_54875 = state_53418__$1;
(statearr_53432_54875[(1)] = (23));

} else {
var statearr_53433_54876 = state_53418__$1;
(statearr_53433_54876[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (6))){
var inst_53397 = (state_53418[(7)]);
var inst_53349 = (state_53418[(8)]);
var inst_53399 = (state_53418[(11)]);
var inst_53397__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53349) : topic_fn.call(null,inst_53349));
var inst_53398 = cljs.core.deref(mults);
var inst_53399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53398,inst_53397__$1);
var state_53418__$1 = (function (){var statearr_53434 = state_53418;
(statearr_53434[(7)] = inst_53397__$1);

(statearr_53434[(11)] = inst_53399__$1);

return statearr_53434;
})();
if(cljs.core.truth_(inst_53399__$1)){
var statearr_53435_54880 = state_53418__$1;
(statearr_53435_54880[(1)] = (19));

} else {
var statearr_53436_54881 = state_53418__$1;
(statearr_53436_54881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (25))){
var inst_53408 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
var statearr_53437_54883 = state_53418__$1;
(statearr_53437_54883[(2)] = inst_53408);

(statearr_53437_54883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (17))){
var inst_53373 = (state_53418[(10)]);
var inst_53382 = cljs.core.first(inst_53373);
var inst_53383 = cljs.core.async.muxch_STAR_(inst_53382);
var inst_53384 = cljs.core.async.close_BANG_(inst_53383);
var inst_53385 = cljs.core.next(inst_53373);
var inst_53359 = inst_53385;
var inst_53360 = null;
var inst_53361 = (0);
var inst_53362 = (0);
var state_53418__$1 = (function (){var statearr_53438 = state_53418;
(statearr_53438[(12)] = inst_53384);

(statearr_53438[(13)] = inst_53360);

(statearr_53438[(14)] = inst_53362);

(statearr_53438[(15)] = inst_53359);

(statearr_53438[(16)] = inst_53361);

return statearr_53438;
})();
var statearr_53439_54893 = state_53418__$1;
(statearr_53439_54893[(2)] = null);

(statearr_53439_54893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (3))){
var inst_53416 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53418__$1,inst_53416);
} else {
if((state_val_53419 === (12))){
var inst_53393 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
var statearr_53440_54900 = state_53418__$1;
(statearr_53440_54900[(2)] = inst_53393);

(statearr_53440_54900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (2))){
var state_53418__$1 = state_53418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53418__$1,(4),ch);
} else {
if((state_val_53419 === (23))){
var state_53418__$1 = state_53418;
var statearr_53441_54901 = state_53418__$1;
(statearr_53441_54901[(2)] = null);

(statearr_53441_54901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (19))){
var inst_53349 = (state_53418[(8)]);
var inst_53399 = (state_53418[(11)]);
var inst_53401 = cljs.core.async.muxch_STAR_(inst_53399);
var state_53418__$1 = state_53418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53418__$1,(22),inst_53401,inst_53349);
} else {
if((state_val_53419 === (11))){
var inst_53373 = (state_53418[(10)]);
var inst_53359 = (state_53418[(15)]);
var inst_53373__$1 = cljs.core.seq(inst_53359);
var state_53418__$1 = (function (){var statearr_53442 = state_53418;
(statearr_53442[(10)] = inst_53373__$1);

return statearr_53442;
})();
if(inst_53373__$1){
var statearr_53443_54903 = state_53418__$1;
(statearr_53443_54903[(1)] = (13));

} else {
var statearr_53444_54904 = state_53418__$1;
(statearr_53444_54904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (9))){
var inst_53395 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
var statearr_53445_54905 = state_53418__$1;
(statearr_53445_54905[(2)] = inst_53395);

(statearr_53445_54905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (5))){
var inst_53356 = cljs.core.deref(mults);
var inst_53357 = cljs.core.vals(inst_53356);
var inst_53358 = cljs.core.seq(inst_53357);
var inst_53359 = inst_53358;
var inst_53360 = null;
var inst_53361 = (0);
var inst_53362 = (0);
var state_53418__$1 = (function (){var statearr_53446 = state_53418;
(statearr_53446[(13)] = inst_53360);

(statearr_53446[(14)] = inst_53362);

(statearr_53446[(15)] = inst_53359);

(statearr_53446[(16)] = inst_53361);

return statearr_53446;
})();
var statearr_53447_54906 = state_53418__$1;
(statearr_53447_54906[(2)] = null);

(statearr_53447_54906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (14))){
var state_53418__$1 = state_53418;
var statearr_53451_54913 = state_53418__$1;
(statearr_53451_54913[(2)] = null);

(statearr_53451_54913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (16))){
var inst_53373 = (state_53418[(10)]);
var inst_53377 = cljs.core.chunk_first(inst_53373);
var inst_53378 = cljs.core.chunk_rest(inst_53373);
var inst_53379 = cljs.core.count(inst_53377);
var inst_53359 = inst_53378;
var inst_53360 = inst_53377;
var inst_53361 = inst_53379;
var inst_53362 = (0);
var state_53418__$1 = (function (){var statearr_53452 = state_53418;
(statearr_53452[(13)] = inst_53360);

(statearr_53452[(14)] = inst_53362);

(statearr_53452[(15)] = inst_53359);

(statearr_53452[(16)] = inst_53361);

return statearr_53452;
})();
var statearr_53453_54914 = state_53418__$1;
(statearr_53453_54914[(2)] = null);

(statearr_53453_54914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (10))){
var inst_53360 = (state_53418[(13)]);
var inst_53362 = (state_53418[(14)]);
var inst_53359 = (state_53418[(15)]);
var inst_53361 = (state_53418[(16)]);
var inst_53367 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53360,inst_53362);
var inst_53368 = cljs.core.async.muxch_STAR_(inst_53367);
var inst_53369 = cljs.core.async.close_BANG_(inst_53368);
var inst_53370 = (inst_53362 + (1));
var tmp53448 = inst_53360;
var tmp53449 = inst_53359;
var tmp53450 = inst_53361;
var inst_53359__$1 = tmp53449;
var inst_53360__$1 = tmp53448;
var inst_53361__$1 = tmp53450;
var inst_53362__$1 = inst_53370;
var state_53418__$1 = (function (){var statearr_53454 = state_53418;
(statearr_53454[(17)] = inst_53369);

(statearr_53454[(13)] = inst_53360__$1);

(statearr_53454[(14)] = inst_53362__$1);

(statearr_53454[(15)] = inst_53359__$1);

(statearr_53454[(16)] = inst_53361__$1);

return statearr_53454;
})();
var statearr_53455_54921 = state_53418__$1;
(statearr_53455_54921[(2)] = null);

(statearr_53455_54921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (18))){
var inst_53388 = (state_53418[(2)]);
var state_53418__$1 = state_53418;
var statearr_53456_54922 = state_53418__$1;
(statearr_53456_54922[(2)] = inst_53388);

(statearr_53456_54922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53419 === (8))){
var inst_53362 = (state_53418[(14)]);
var inst_53361 = (state_53418[(16)]);
var inst_53364 = (inst_53362 < inst_53361);
var inst_53365 = inst_53364;
var state_53418__$1 = state_53418;
if(cljs.core.truth_(inst_53365)){
var statearr_53457_54923 = state_53418__$1;
(statearr_53457_54923[(1)] = (10));

} else {
var statearr_53458_54924 = state_53418__$1;
(statearr_53458_54924[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52380__auto___54846,mults,ensure_mult,p))
;
return ((function (switch__51967__auto__,c__52380__auto___54846,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53459[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53459[(1)] = (1));

return statearr_53459;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53418){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53418);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53460){if((e53460 instanceof Object)){
var ex__51971__auto__ = e53460;
var statearr_53461_54925 = state_53418;
(statearr_53461_54925[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54926 = state_53418;
state_53418 = G__54926;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54846,mults,ensure_mult,p))
})();
var state__52382__auto__ = (function (){var statearr_53462 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53462[(6)] = c__52380__auto___54846);

return statearr_53462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54846,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53464 = arguments.length;
switch (G__53464) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53466 = arguments.length;
switch (G__53466) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53468 = arguments.length;
switch (G__53468) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__52380__auto___54944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53507){
var state_val_53508 = (state_53507[(1)]);
if((state_val_53508 === (7))){
var state_53507__$1 = state_53507;
var statearr_53509_54945 = state_53507__$1;
(statearr_53509_54945[(2)] = null);

(statearr_53509_54945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (1))){
var state_53507__$1 = state_53507;
var statearr_53510_54946 = state_53507__$1;
(statearr_53510_54946[(2)] = null);

(statearr_53510_54946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (4))){
var inst_53471 = (state_53507[(7)]);
var inst_53473 = (inst_53471 < cnt);
var state_53507__$1 = state_53507;
if(cljs.core.truth_(inst_53473)){
var statearr_53511_54947 = state_53507__$1;
(statearr_53511_54947[(1)] = (6));

} else {
var statearr_53512_54948 = state_53507__$1;
(statearr_53512_54948[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (15))){
var inst_53503 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53513_54949 = state_53507__$1;
(statearr_53513_54949[(2)] = inst_53503);

(statearr_53513_54949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (13))){
var inst_53496 = cljs.core.async.close_BANG_(out);
var state_53507__$1 = state_53507;
var statearr_53514_54950 = state_53507__$1;
(statearr_53514_54950[(2)] = inst_53496);

(statearr_53514_54950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (6))){
var state_53507__$1 = state_53507;
var statearr_53515_54952 = state_53507__$1;
(statearr_53515_54952[(2)] = null);

(statearr_53515_54952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (3))){
var inst_53505 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53507__$1,inst_53505);
} else {
if((state_val_53508 === (12))){
var inst_53493 = (state_53507[(8)]);
var inst_53493__$1 = (state_53507[(2)]);
var inst_53494 = cljs.core.some(cljs.core.nil_QMARK_,inst_53493__$1);
var state_53507__$1 = (function (){var statearr_53516 = state_53507;
(statearr_53516[(8)] = inst_53493__$1);

return statearr_53516;
})();
if(cljs.core.truth_(inst_53494)){
var statearr_53517_54954 = state_53507__$1;
(statearr_53517_54954[(1)] = (13));

} else {
var statearr_53518_54955 = state_53507__$1;
(statearr_53518_54955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (2))){
var inst_53470 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53471 = (0);
var state_53507__$1 = (function (){var statearr_53519 = state_53507;
(statearr_53519[(9)] = inst_53470);

(statearr_53519[(7)] = inst_53471);

return statearr_53519;
})();
var statearr_53520_54956 = state_53507__$1;
(statearr_53520_54956[(2)] = null);

(statearr_53520_54956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (11))){
var inst_53471 = (state_53507[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53507,(10),Object,null,(9));
var inst_53480 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53471) : chs__$1.call(null,inst_53471));
var inst_53481 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53471) : done.call(null,inst_53471));
var inst_53482 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53480,inst_53481);
var state_53507__$1 = state_53507;
var statearr_53521_54962 = state_53507__$1;
(statearr_53521_54962[(2)] = inst_53482);


cljs.core.async.impl.ioc_helpers.process_exception(state_53507__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (9))){
var inst_53471 = (state_53507[(7)]);
var inst_53484 = (state_53507[(2)]);
var inst_53485 = (inst_53471 + (1));
var inst_53471__$1 = inst_53485;
var state_53507__$1 = (function (){var statearr_53522 = state_53507;
(statearr_53522[(10)] = inst_53484);

(statearr_53522[(7)] = inst_53471__$1);

return statearr_53522;
})();
var statearr_53523_54967 = state_53507__$1;
(statearr_53523_54967[(2)] = null);

(statearr_53523_54967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (5))){
var inst_53491 = (state_53507[(2)]);
var state_53507__$1 = (function (){var statearr_53524 = state_53507;
(statearr_53524[(11)] = inst_53491);

return statearr_53524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53507__$1,(12),dchan);
} else {
if((state_val_53508 === (14))){
var inst_53493 = (state_53507[(8)]);
var inst_53498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53493);
var state_53507__$1 = state_53507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53507__$1,(16),out,inst_53498);
} else {
if((state_val_53508 === (16))){
var inst_53500 = (state_53507[(2)]);
var state_53507__$1 = (function (){var statearr_53525 = state_53507;
(statearr_53525[(12)] = inst_53500);

return statearr_53525;
})();
var statearr_53526_54972 = state_53507__$1;
(statearr_53526_54972[(2)] = null);

(statearr_53526_54972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (10))){
var inst_53475 = (state_53507[(2)]);
var inst_53476 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53507__$1 = (function (){var statearr_53527 = state_53507;
(statearr_53527[(13)] = inst_53475);

return statearr_53527;
})();
var statearr_53528_54974 = state_53507__$1;
(statearr_53528_54974[(2)] = inst_53476);


cljs.core.async.impl.ioc_helpers.process_exception(state_53507__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53508 === (8))){
var inst_53489 = (state_53507[(2)]);
var state_53507__$1 = state_53507;
var statearr_53529_54975 = state_53507__$1;
(statearr_53529_54975[(2)] = inst_53489);

(statearr_53529_54975[(1)] = (5));


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
});})(c__52380__auto___54944,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__51967__auto__,c__52380__auto___54944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53530[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53530[(1)] = (1));

return statearr_53530;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53507){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53507);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53531){if((e53531 instanceof Object)){
var ex__51971__auto__ = e53531;
var statearr_53532_54976 = state_53507;
(statearr_53532_54976[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54977 = state_53507;
state_53507 = G__54977;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54944,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__52382__auto__ = (function (){var statearr_53533 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53533[(6)] = c__52380__auto___54944);

return statearr_53533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54944,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53536 = arguments.length;
switch (G__53536) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52380__auto___54979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54979,out){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54979,out){
return (function (state_53568){
var state_val_53569 = (state_53568[(1)]);
if((state_val_53569 === (7))){
var inst_53547 = (state_53568[(7)]);
var inst_53548 = (state_53568[(8)]);
var inst_53547__$1 = (state_53568[(2)]);
var inst_53548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53547__$1,(0),null);
var inst_53549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53547__$1,(1),null);
var inst_53550 = (inst_53548__$1 == null);
var state_53568__$1 = (function (){var statearr_53570 = state_53568;
(statearr_53570[(7)] = inst_53547__$1);

(statearr_53570[(9)] = inst_53549);

(statearr_53570[(8)] = inst_53548__$1);

return statearr_53570;
})();
if(cljs.core.truth_(inst_53550)){
var statearr_53571_54980 = state_53568__$1;
(statearr_53571_54980[(1)] = (8));

} else {
var statearr_53572_54981 = state_53568__$1;
(statearr_53572_54981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (1))){
var inst_53537 = cljs.core.vec(chs);
var inst_53538 = inst_53537;
var state_53568__$1 = (function (){var statearr_53573 = state_53568;
(statearr_53573[(10)] = inst_53538);

return statearr_53573;
})();
var statearr_53574_54982 = state_53568__$1;
(statearr_53574_54982[(2)] = null);

(statearr_53574_54982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (4))){
var inst_53538 = (state_53568[(10)]);
var state_53568__$1 = state_53568;
return cljs.core.async.ioc_alts_BANG_(state_53568__$1,(7),inst_53538);
} else {
if((state_val_53569 === (6))){
var inst_53564 = (state_53568[(2)]);
var state_53568__$1 = state_53568;
var statearr_53575_54985 = state_53568__$1;
(statearr_53575_54985[(2)] = inst_53564);

(statearr_53575_54985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (3))){
var inst_53566 = (state_53568[(2)]);
var state_53568__$1 = state_53568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53568__$1,inst_53566);
} else {
if((state_val_53569 === (2))){
var inst_53538 = (state_53568[(10)]);
var inst_53540 = cljs.core.count(inst_53538);
var inst_53541 = (inst_53540 > (0));
var state_53568__$1 = state_53568;
if(cljs.core.truth_(inst_53541)){
var statearr_53577_54987 = state_53568__$1;
(statearr_53577_54987[(1)] = (4));

} else {
var statearr_53578_54988 = state_53568__$1;
(statearr_53578_54988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (11))){
var inst_53538 = (state_53568[(10)]);
var inst_53557 = (state_53568[(2)]);
var tmp53576 = inst_53538;
var inst_53538__$1 = tmp53576;
var state_53568__$1 = (function (){var statearr_53579 = state_53568;
(statearr_53579[(10)] = inst_53538__$1);

(statearr_53579[(11)] = inst_53557);

return statearr_53579;
})();
var statearr_53580_54989 = state_53568__$1;
(statearr_53580_54989[(2)] = null);

(statearr_53580_54989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (9))){
var inst_53548 = (state_53568[(8)]);
var state_53568__$1 = state_53568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53568__$1,(11),out,inst_53548);
} else {
if((state_val_53569 === (5))){
var inst_53562 = cljs.core.async.close_BANG_(out);
var state_53568__$1 = state_53568;
var statearr_53581_54990 = state_53568__$1;
(statearr_53581_54990[(2)] = inst_53562);

(statearr_53581_54990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (10))){
var inst_53560 = (state_53568[(2)]);
var state_53568__$1 = state_53568;
var statearr_53582_54991 = state_53568__$1;
(statearr_53582_54991[(2)] = inst_53560);

(statearr_53582_54991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53569 === (8))){
var inst_53538 = (state_53568[(10)]);
var inst_53547 = (state_53568[(7)]);
var inst_53549 = (state_53568[(9)]);
var inst_53548 = (state_53568[(8)]);
var inst_53552 = (function (){var cs = inst_53538;
var vec__53543 = inst_53547;
var v = inst_53548;
var c = inst_53549;
return ((function (cs,vec__53543,v,c,inst_53538,inst_53547,inst_53549,inst_53548,state_val_53569,c__52380__auto___54979,out){
return (function (p1__53534_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53534_SHARP_);
});
;})(cs,vec__53543,v,c,inst_53538,inst_53547,inst_53549,inst_53548,state_val_53569,c__52380__auto___54979,out))
})();
var inst_53553 = cljs.core.filterv(inst_53552,inst_53538);
var inst_53538__$1 = inst_53553;
var state_53568__$1 = (function (){var statearr_53583 = state_53568;
(statearr_53583[(10)] = inst_53538__$1);

return statearr_53583;
})();
var statearr_53584_54993 = state_53568__$1;
(statearr_53584_54993[(2)] = null);

(statearr_53584_54993[(1)] = (2));


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
});})(c__52380__auto___54979,out))
;
return ((function (switch__51967__auto__,c__52380__auto___54979,out){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53585[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53585[(1)] = (1));

return statearr_53585;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53568){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53568);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53586){if((e53586 instanceof Object)){
var ex__51971__auto__ = e53586;
var statearr_53587_54995 = state_53568;
(statearr_53587_54995[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54997 = state_53568;
state_53568 = G__54997;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54979,out))
})();
var state__52382__auto__ = (function (){var statearr_53588 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53588[(6)] = c__52380__auto___54979);

return statearr_53588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54979,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53590 = arguments.length;
switch (G__53590) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52380__auto___54999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___54999,out){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___54999,out){
return (function (state_53614){
var state_val_53615 = (state_53614[(1)]);
if((state_val_53615 === (7))){
var inst_53596 = (state_53614[(7)]);
var inst_53596__$1 = (state_53614[(2)]);
var inst_53597 = (inst_53596__$1 == null);
var inst_53598 = cljs.core.not(inst_53597);
var state_53614__$1 = (function (){var statearr_53616 = state_53614;
(statearr_53616[(7)] = inst_53596__$1);

return statearr_53616;
})();
if(inst_53598){
var statearr_53617_55000 = state_53614__$1;
(statearr_53617_55000[(1)] = (8));

} else {
var statearr_53618_55001 = state_53614__$1;
(statearr_53618_55001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (1))){
var inst_53591 = (0);
var state_53614__$1 = (function (){var statearr_53619 = state_53614;
(statearr_53619[(8)] = inst_53591);

return statearr_53619;
})();
var statearr_53620_55002 = state_53614__$1;
(statearr_53620_55002[(2)] = null);

(statearr_53620_55002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (4))){
var state_53614__$1 = state_53614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53614__$1,(7),ch);
} else {
if((state_val_53615 === (6))){
var inst_53609 = (state_53614[(2)]);
var state_53614__$1 = state_53614;
var statearr_53621_55019 = state_53614__$1;
(statearr_53621_55019[(2)] = inst_53609);

(statearr_53621_55019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (3))){
var inst_53611 = (state_53614[(2)]);
var inst_53612 = cljs.core.async.close_BANG_(out);
var state_53614__$1 = (function (){var statearr_53622 = state_53614;
(statearr_53622[(9)] = inst_53611);

return statearr_53622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53614__$1,inst_53612);
} else {
if((state_val_53615 === (2))){
var inst_53591 = (state_53614[(8)]);
var inst_53593 = (inst_53591 < n);
var state_53614__$1 = state_53614;
if(cljs.core.truth_(inst_53593)){
var statearr_53623_55025 = state_53614__$1;
(statearr_53623_55025[(1)] = (4));

} else {
var statearr_53624_55026 = state_53614__$1;
(statearr_53624_55026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (11))){
var inst_53591 = (state_53614[(8)]);
var inst_53601 = (state_53614[(2)]);
var inst_53602 = (inst_53591 + (1));
var inst_53591__$1 = inst_53602;
var state_53614__$1 = (function (){var statearr_53625 = state_53614;
(statearr_53625[(10)] = inst_53601);

(statearr_53625[(8)] = inst_53591__$1);

return statearr_53625;
})();
var statearr_53626_55027 = state_53614__$1;
(statearr_53626_55027[(2)] = null);

(statearr_53626_55027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (9))){
var state_53614__$1 = state_53614;
var statearr_53627_55028 = state_53614__$1;
(statearr_53627_55028[(2)] = null);

(statearr_53627_55028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (5))){
var state_53614__$1 = state_53614;
var statearr_53628_55029 = state_53614__$1;
(statearr_53628_55029[(2)] = null);

(statearr_53628_55029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (10))){
var inst_53606 = (state_53614[(2)]);
var state_53614__$1 = state_53614;
var statearr_53629_55030 = state_53614__$1;
(statearr_53629_55030[(2)] = inst_53606);

(statearr_53629_55030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53615 === (8))){
var inst_53596 = (state_53614[(7)]);
var state_53614__$1 = state_53614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53614__$1,(11),out,inst_53596);
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
});})(c__52380__auto___54999,out))
;
return ((function (switch__51967__auto__,c__52380__auto___54999,out){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53630[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53630[(1)] = (1));

return statearr_53630;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53614){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53614);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53631){if((e53631 instanceof Object)){
var ex__51971__auto__ = e53631;
var statearr_53632_55035 = state_53614;
(statearr_53632_55035[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55040 = state_53614;
state_53614 = G__55040;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___54999,out))
})();
var state__52382__auto__ = (function (){var statearr_53633 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53633[(6)] = c__52380__auto___54999);

return statearr_53633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___54999,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53635 = (function (f,ch,meta53636){
this.f = f;
this.ch = ch;
this.meta53636 = meta53636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53637,meta53636__$1){
var self__ = this;
var _53637__$1 = this;
return (new cljs.core.async.t_cljs$core$async53635(self__.f,self__.ch,meta53636__$1));
});

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53637){
var self__ = this;
var _53637__$1 = this;
return self__.meta53636;
});

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53638 = (function (f,ch,meta53636,_,fn1,meta53639){
this.f = f;
this.ch = ch;
this.meta53636 = meta53636;
this._ = _;
this.fn1 = fn1;
this.meta53639 = meta53639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53640,meta53639__$1){
var self__ = this;
var _53640__$1 = this;
return (new cljs.core.async.t_cljs$core$async53638(self__.f,self__.ch,self__.meta53636,self__._,self__.fn1,meta53639__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53640){
var self__ = this;
var _53640__$1 = this;
return self__.meta53639;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53634_SHARP_){
var G__53641 = (((p1__53634_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53634_SHARP_) : self__.f.call(null,p1__53634_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53641) : f1.call(null,G__53641));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53638.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53636","meta53636",-452189946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53635","cljs.core.async/t_cljs$core$async53635",2133533172,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53639","meta53639",2017903674,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53638";

cljs.core.async.t_cljs$core$async53638.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53638");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53638.
 */
cljs.core.async.__GT_t_cljs$core$async53638 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53638(f__$1,ch__$1,meta53636__$1,___$2,fn1__$1,meta53639){
return (new cljs.core.async.t_cljs$core$async53638(f__$1,ch__$1,meta53636__$1,___$2,fn1__$1,meta53639));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53638(self__.f,self__.ch,self__.meta53636,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53642 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53642) : self__.f.call(null,G__53642));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53636","meta53636",-452189946,null)], null);
});

cljs.core.async.t_cljs$core$async53635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53635";

cljs.core.async.t_cljs$core$async53635.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53635");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53635.
 */
cljs.core.async.__GT_t_cljs$core$async53635 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53635(f__$1,ch__$1,meta53636){
return (new cljs.core.async.t_cljs$core$async53635(f__$1,ch__$1,meta53636));
});

}

return (new cljs.core.async.t_cljs$core$async53635(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53643 = (function (f,ch,meta53644){
this.f = f;
this.ch = ch;
this.meta53644 = meta53644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53645,meta53644__$1){
var self__ = this;
var _53645__$1 = this;
return (new cljs.core.async.t_cljs$core$async53643(self__.f,self__.ch,meta53644__$1));
});

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53645){
var self__ = this;
var _53645__$1 = this;
return self__.meta53644;
});

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async53643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53644","meta53644",534039049,null)], null);
});

cljs.core.async.t_cljs$core$async53643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53643";

cljs.core.async.t_cljs$core$async53643.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53643");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53643.
 */
cljs.core.async.__GT_t_cljs$core$async53643 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53643(f__$1,ch__$1,meta53644){
return (new cljs.core.async.t_cljs$core$async53643(f__$1,ch__$1,meta53644));
});

}

return (new cljs.core.async.t_cljs$core$async53643(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53646 = (function (p,ch,meta53647){
this.p = p;
this.ch = ch;
this.meta53647 = meta53647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53648,meta53647__$1){
var self__ = this;
var _53648__$1 = this;
return (new cljs.core.async.t_cljs$core$async53646(self__.p,self__.ch,meta53647__$1));
});

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53648){
var self__ = this;
var _53648__$1 = this;
return self__.meta53647;
});

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53647","meta53647",212862097,null)], null);
});

cljs.core.async.t_cljs$core$async53646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53646";

cljs.core.async.t_cljs$core$async53646.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53646");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53646.
 */
cljs.core.async.__GT_t_cljs$core$async53646 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53646(p__$1,ch__$1,meta53647){
return (new cljs.core.async.t_cljs$core$async53646(p__$1,ch__$1,meta53647));
});

}

return (new cljs.core.async.t_cljs$core$async53646(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53650 = arguments.length;
switch (G__53650) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52380__auto___55069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___55069,out){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___55069,out){
return (function (state_53671){
var state_val_53672 = (state_53671[(1)]);
if((state_val_53672 === (7))){
var inst_53667 = (state_53671[(2)]);
var state_53671__$1 = state_53671;
var statearr_53673_55072 = state_53671__$1;
(statearr_53673_55072[(2)] = inst_53667);

(statearr_53673_55072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (1))){
var state_53671__$1 = state_53671;
var statearr_53674_55073 = state_53671__$1;
(statearr_53674_55073[(2)] = null);

(statearr_53674_55073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (4))){
var inst_53653 = (state_53671[(7)]);
var inst_53653__$1 = (state_53671[(2)]);
var inst_53654 = (inst_53653__$1 == null);
var state_53671__$1 = (function (){var statearr_53675 = state_53671;
(statearr_53675[(7)] = inst_53653__$1);

return statearr_53675;
})();
if(cljs.core.truth_(inst_53654)){
var statearr_53676_55078 = state_53671__$1;
(statearr_53676_55078[(1)] = (5));

} else {
var statearr_53677_55081 = state_53671__$1;
(statearr_53677_55081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (6))){
var inst_53653 = (state_53671[(7)]);
var inst_53658 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53653) : p.call(null,inst_53653));
var state_53671__$1 = state_53671;
if(cljs.core.truth_(inst_53658)){
var statearr_53678_55087 = state_53671__$1;
(statearr_53678_55087[(1)] = (8));

} else {
var statearr_53679_55092 = state_53671__$1;
(statearr_53679_55092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (3))){
var inst_53669 = (state_53671[(2)]);
var state_53671__$1 = state_53671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53671__$1,inst_53669);
} else {
if((state_val_53672 === (2))){
var state_53671__$1 = state_53671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53671__$1,(4),ch);
} else {
if((state_val_53672 === (11))){
var inst_53661 = (state_53671[(2)]);
var state_53671__$1 = state_53671;
var statearr_53680_55104 = state_53671__$1;
(statearr_53680_55104[(2)] = inst_53661);

(statearr_53680_55104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (9))){
var state_53671__$1 = state_53671;
var statearr_53681_55128 = state_53671__$1;
(statearr_53681_55128[(2)] = null);

(statearr_53681_55128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (5))){
var inst_53656 = cljs.core.async.close_BANG_(out);
var state_53671__$1 = state_53671;
var statearr_53682_55129 = state_53671__$1;
(statearr_53682_55129[(2)] = inst_53656);

(statearr_53682_55129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (10))){
var inst_53664 = (state_53671[(2)]);
var state_53671__$1 = (function (){var statearr_53683 = state_53671;
(statearr_53683[(8)] = inst_53664);

return statearr_53683;
})();
var statearr_53684_55130 = state_53671__$1;
(statearr_53684_55130[(2)] = null);

(statearr_53684_55130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53672 === (8))){
var inst_53653 = (state_53671[(7)]);
var state_53671__$1 = state_53671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53671__$1,(11),out,inst_53653);
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
});})(c__52380__auto___55069,out))
;
return ((function (switch__51967__auto__,c__52380__auto___55069,out){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53685 = [null,null,null,null,null,null,null,null,null];
(statearr_53685[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53685[(1)] = (1));

return statearr_53685;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53671){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53671);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53686){if((e53686 instanceof Object)){
var ex__51971__auto__ = e53686;
var statearr_53687_55133 = state_53671;
(statearr_53687_55133[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55134 = state_53671;
state_53671 = G__55134;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___55069,out))
})();
var state__52382__auto__ = (function (){var statearr_53688 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53688[(6)] = c__52380__auto___55069);

return statearr_53688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___55069,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53690 = arguments.length;
switch (G__53690) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__52380__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto__){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto__){
return (function (state_53752){
var state_val_53753 = (state_53752[(1)]);
if((state_val_53753 === (7))){
var inst_53748 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53754_55166 = state_53752__$1;
(statearr_53754_55166[(2)] = inst_53748);

(statearr_53754_55166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (20))){
var inst_53718 = (state_53752[(7)]);
var inst_53729 = (state_53752[(2)]);
var inst_53730 = cljs.core.next(inst_53718);
var inst_53704 = inst_53730;
var inst_53705 = null;
var inst_53706 = (0);
var inst_53707 = (0);
var state_53752__$1 = (function (){var statearr_53755 = state_53752;
(statearr_53755[(8)] = inst_53705);

(statearr_53755[(9)] = inst_53706);

(statearr_53755[(10)] = inst_53729);

(statearr_53755[(11)] = inst_53707);

(statearr_53755[(12)] = inst_53704);

return statearr_53755;
})();
var statearr_53756_55171 = state_53752__$1;
(statearr_53756_55171[(2)] = null);

(statearr_53756_55171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (1))){
var state_53752__$1 = state_53752;
var statearr_53757_55173 = state_53752__$1;
(statearr_53757_55173[(2)] = null);

(statearr_53757_55173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (4))){
var inst_53693 = (state_53752[(13)]);
var inst_53693__$1 = (state_53752[(2)]);
var inst_53694 = (inst_53693__$1 == null);
var state_53752__$1 = (function (){var statearr_53758 = state_53752;
(statearr_53758[(13)] = inst_53693__$1);

return statearr_53758;
})();
if(cljs.core.truth_(inst_53694)){
var statearr_53759_55174 = state_53752__$1;
(statearr_53759_55174[(1)] = (5));

} else {
var statearr_53760_55175 = state_53752__$1;
(statearr_53760_55175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (15))){
var state_53752__$1 = state_53752;
var statearr_53764_55176 = state_53752__$1;
(statearr_53764_55176[(2)] = null);

(statearr_53764_55176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (21))){
var state_53752__$1 = state_53752;
var statearr_53765_55183 = state_53752__$1;
(statearr_53765_55183[(2)] = null);

(statearr_53765_55183[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (13))){
var inst_53705 = (state_53752[(8)]);
var inst_53706 = (state_53752[(9)]);
var inst_53707 = (state_53752[(11)]);
var inst_53704 = (state_53752[(12)]);
var inst_53714 = (state_53752[(2)]);
var inst_53715 = (inst_53707 + (1));
var tmp53761 = inst_53705;
var tmp53762 = inst_53706;
var tmp53763 = inst_53704;
var inst_53704__$1 = tmp53763;
var inst_53705__$1 = tmp53761;
var inst_53706__$1 = tmp53762;
var inst_53707__$1 = inst_53715;
var state_53752__$1 = (function (){var statearr_53766 = state_53752;
(statearr_53766[(8)] = inst_53705__$1);

(statearr_53766[(9)] = inst_53706__$1);

(statearr_53766[(11)] = inst_53707__$1);

(statearr_53766[(14)] = inst_53714);

(statearr_53766[(12)] = inst_53704__$1);

return statearr_53766;
})();
var statearr_53767_55194 = state_53752__$1;
(statearr_53767_55194[(2)] = null);

(statearr_53767_55194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (22))){
var state_53752__$1 = state_53752;
var statearr_53768_55195 = state_53752__$1;
(statearr_53768_55195[(2)] = null);

(statearr_53768_55195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (6))){
var inst_53693 = (state_53752[(13)]);
var inst_53702 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53693) : f.call(null,inst_53693));
var inst_53703 = cljs.core.seq(inst_53702);
var inst_53704 = inst_53703;
var inst_53705 = null;
var inst_53706 = (0);
var inst_53707 = (0);
var state_53752__$1 = (function (){var statearr_53769 = state_53752;
(statearr_53769[(8)] = inst_53705);

(statearr_53769[(9)] = inst_53706);

(statearr_53769[(11)] = inst_53707);

(statearr_53769[(12)] = inst_53704);

return statearr_53769;
})();
var statearr_53770_55200 = state_53752__$1;
(statearr_53770_55200[(2)] = null);

(statearr_53770_55200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (17))){
var inst_53718 = (state_53752[(7)]);
var inst_53722 = cljs.core.chunk_first(inst_53718);
var inst_53723 = cljs.core.chunk_rest(inst_53718);
var inst_53724 = cljs.core.count(inst_53722);
var inst_53704 = inst_53723;
var inst_53705 = inst_53722;
var inst_53706 = inst_53724;
var inst_53707 = (0);
var state_53752__$1 = (function (){var statearr_53771 = state_53752;
(statearr_53771[(8)] = inst_53705);

(statearr_53771[(9)] = inst_53706);

(statearr_53771[(11)] = inst_53707);

(statearr_53771[(12)] = inst_53704);

return statearr_53771;
})();
var statearr_53772_55204 = state_53752__$1;
(statearr_53772_55204[(2)] = null);

(statearr_53772_55204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (3))){
var inst_53750 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53752__$1,inst_53750);
} else {
if((state_val_53753 === (12))){
var inst_53738 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53773_55206 = state_53752__$1;
(statearr_53773_55206[(2)] = inst_53738);

(statearr_53773_55206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (2))){
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53752__$1,(4),in$);
} else {
if((state_val_53753 === (23))){
var inst_53746 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53774_55207 = state_53752__$1;
(statearr_53774_55207[(2)] = inst_53746);

(statearr_53774_55207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (19))){
var inst_53733 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53775_55208 = state_53752__$1;
(statearr_53775_55208[(2)] = inst_53733);

(statearr_53775_55208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (11))){
var inst_53718 = (state_53752[(7)]);
var inst_53704 = (state_53752[(12)]);
var inst_53718__$1 = cljs.core.seq(inst_53704);
var state_53752__$1 = (function (){var statearr_53776 = state_53752;
(statearr_53776[(7)] = inst_53718__$1);

return statearr_53776;
})();
if(inst_53718__$1){
var statearr_53777_55209 = state_53752__$1;
(statearr_53777_55209[(1)] = (14));

} else {
var statearr_53778_55212 = state_53752__$1;
(statearr_53778_55212[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (9))){
var inst_53740 = (state_53752[(2)]);
var inst_53741 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53752__$1 = (function (){var statearr_53779 = state_53752;
(statearr_53779[(15)] = inst_53740);

return statearr_53779;
})();
if(cljs.core.truth_(inst_53741)){
var statearr_53780_55217 = state_53752__$1;
(statearr_53780_55217[(1)] = (21));

} else {
var statearr_53781_55222 = state_53752__$1;
(statearr_53781_55222[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (5))){
var inst_53696 = cljs.core.async.close_BANG_(out);
var state_53752__$1 = state_53752;
var statearr_53782_55224 = state_53752__$1;
(statearr_53782_55224[(2)] = inst_53696);

(statearr_53782_55224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (14))){
var inst_53718 = (state_53752[(7)]);
var inst_53720 = cljs.core.chunked_seq_QMARK_(inst_53718);
var state_53752__$1 = state_53752;
if(inst_53720){
var statearr_53783_55230 = state_53752__$1;
(statearr_53783_55230[(1)] = (17));

} else {
var statearr_53784_55232 = state_53752__$1;
(statearr_53784_55232[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (16))){
var inst_53736 = (state_53752[(2)]);
var state_53752__$1 = state_53752;
var statearr_53785_55242 = state_53752__$1;
(statearr_53785_55242[(2)] = inst_53736);

(statearr_53785_55242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53753 === (10))){
var inst_53705 = (state_53752[(8)]);
var inst_53707 = (state_53752[(11)]);
var inst_53712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53705,inst_53707);
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53752__$1,(13),out,inst_53712);
} else {
if((state_val_53753 === (18))){
var inst_53718 = (state_53752[(7)]);
var inst_53727 = cljs.core.first(inst_53718);
var state_53752__$1 = state_53752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53752__$1,(20),out,inst_53727);
} else {
if((state_val_53753 === (8))){
var inst_53706 = (state_53752[(9)]);
var inst_53707 = (state_53752[(11)]);
var inst_53709 = (inst_53707 < inst_53706);
var inst_53710 = inst_53709;
var state_53752__$1 = state_53752;
if(cljs.core.truth_(inst_53710)){
var statearr_53786_55255 = state_53752__$1;
(statearr_53786_55255[(1)] = (10));

} else {
var statearr_53787_55260 = state_53752__$1;
(statearr_53787_55260[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__52380__auto__))
;
return ((function (switch__51967__auto__,c__52380__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51968__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51968__auto____0 = (function (){
var statearr_53788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53788[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51968__auto__);

(statearr_53788[(1)] = (1));

return statearr_53788;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51968__auto____1 = (function (state_53752){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53752);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53789){if((e53789 instanceof Object)){
var ex__51971__auto__ = e53789;
var statearr_53790_55275 = state_53752;
(statearr_53790_55275[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55276 = state_53752;
state_53752 = G__55276;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51968__auto__ = function(state_53752){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51968__auto____1.call(this,state_53752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51968__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51968__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto__))
})();
var state__52382__auto__ = (function (){var statearr_53791 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53791[(6)] = c__52380__auto__);

return statearr_53791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto__))
);

return c__52380__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53793 = arguments.length;
switch (G__53793) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53795 = arguments.length;
switch (G__53795) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53797 = arguments.length;
switch (G__53797) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52380__auto___55292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___55292,out){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___55292,out){
return (function (state_53821){
var state_val_53822 = (state_53821[(1)]);
if((state_val_53822 === (7))){
var inst_53816 = (state_53821[(2)]);
var state_53821__$1 = state_53821;
var statearr_53823_55304 = state_53821__$1;
(statearr_53823_55304[(2)] = inst_53816);

(statearr_53823_55304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (1))){
var inst_53798 = null;
var state_53821__$1 = (function (){var statearr_53824 = state_53821;
(statearr_53824[(7)] = inst_53798);

return statearr_53824;
})();
var statearr_53825_55305 = state_53821__$1;
(statearr_53825_55305[(2)] = null);

(statearr_53825_55305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (4))){
var inst_53801 = (state_53821[(8)]);
var inst_53801__$1 = (state_53821[(2)]);
var inst_53802 = (inst_53801__$1 == null);
var inst_53803 = cljs.core.not(inst_53802);
var state_53821__$1 = (function (){var statearr_53826 = state_53821;
(statearr_53826[(8)] = inst_53801__$1);

return statearr_53826;
})();
if(inst_53803){
var statearr_53827_55307 = state_53821__$1;
(statearr_53827_55307[(1)] = (5));

} else {
var statearr_53828_55308 = state_53821__$1;
(statearr_53828_55308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (6))){
var state_53821__$1 = state_53821;
var statearr_53829_55313 = state_53821__$1;
(statearr_53829_55313[(2)] = null);

(statearr_53829_55313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (3))){
var inst_53818 = (state_53821[(2)]);
var inst_53819 = cljs.core.async.close_BANG_(out);
var state_53821__$1 = (function (){var statearr_53830 = state_53821;
(statearr_53830[(9)] = inst_53818);

return statearr_53830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53821__$1,inst_53819);
} else {
if((state_val_53822 === (2))){
var state_53821__$1 = state_53821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53821__$1,(4),ch);
} else {
if((state_val_53822 === (11))){
var inst_53801 = (state_53821[(8)]);
var inst_53810 = (state_53821[(2)]);
var inst_53798 = inst_53801;
var state_53821__$1 = (function (){var statearr_53831 = state_53821;
(statearr_53831[(7)] = inst_53798);

(statearr_53831[(10)] = inst_53810);

return statearr_53831;
})();
var statearr_53832_55315 = state_53821__$1;
(statearr_53832_55315[(2)] = null);

(statearr_53832_55315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (9))){
var inst_53801 = (state_53821[(8)]);
var state_53821__$1 = state_53821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53821__$1,(11),out,inst_53801);
} else {
if((state_val_53822 === (5))){
var inst_53798 = (state_53821[(7)]);
var inst_53801 = (state_53821[(8)]);
var inst_53805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53801,inst_53798);
var state_53821__$1 = state_53821;
if(inst_53805){
var statearr_53834_55319 = state_53821__$1;
(statearr_53834_55319[(1)] = (8));

} else {
var statearr_53835_55320 = state_53821__$1;
(statearr_53835_55320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (10))){
var inst_53813 = (state_53821[(2)]);
var state_53821__$1 = state_53821;
var statearr_53836_55321 = state_53821__$1;
(statearr_53836_55321[(2)] = inst_53813);

(statearr_53836_55321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53822 === (8))){
var inst_53798 = (state_53821[(7)]);
var tmp53833 = inst_53798;
var inst_53798__$1 = tmp53833;
var state_53821__$1 = (function (){var statearr_53837 = state_53821;
(statearr_53837[(7)] = inst_53798__$1);

return statearr_53837;
})();
var statearr_53838_55322 = state_53821__$1;
(statearr_53838_55322[(2)] = null);

(statearr_53838_55322[(1)] = (2));


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
});})(c__52380__auto___55292,out))
;
return ((function (switch__51967__auto__,c__52380__auto___55292,out){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53839[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53839[(1)] = (1));

return statearr_53839;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53821){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53821);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53840){if((e53840 instanceof Object)){
var ex__51971__auto__ = e53840;
var statearr_53841_55323 = state_53821;
(statearr_53841_55323[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55324 = state_53821;
state_53821 = G__55324;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___55292,out))
})();
var state__52382__auto__ = (function (){var statearr_53842 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53842[(6)] = c__52380__auto___55292);

return statearr_53842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___55292,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53844 = arguments.length;
switch (G__53844) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52380__auto___55331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___55331,out){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___55331,out){
return (function (state_53882){
var state_val_53883 = (state_53882[(1)]);
if((state_val_53883 === (7))){
var inst_53878 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
var statearr_53884_55332 = state_53882__$1;
(statearr_53884_55332[(2)] = inst_53878);

(statearr_53884_55332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (1))){
var inst_53845 = (new Array(n));
var inst_53846 = inst_53845;
var inst_53847 = (0);
var state_53882__$1 = (function (){var statearr_53885 = state_53882;
(statearr_53885[(7)] = inst_53847);

(statearr_53885[(8)] = inst_53846);

return statearr_53885;
})();
var statearr_53886_55336 = state_53882__$1;
(statearr_53886_55336[(2)] = null);

(statearr_53886_55336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (4))){
var inst_53850 = (state_53882[(9)]);
var inst_53850__$1 = (state_53882[(2)]);
var inst_53851 = (inst_53850__$1 == null);
var inst_53852 = cljs.core.not(inst_53851);
var state_53882__$1 = (function (){var statearr_53887 = state_53882;
(statearr_53887[(9)] = inst_53850__$1);

return statearr_53887;
})();
if(inst_53852){
var statearr_53888_55339 = state_53882__$1;
(statearr_53888_55339[(1)] = (5));

} else {
var statearr_53889_55340 = state_53882__$1;
(statearr_53889_55340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (15))){
var inst_53872 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
var statearr_53890_55341 = state_53882__$1;
(statearr_53890_55341[(2)] = inst_53872);

(statearr_53890_55341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (13))){
var state_53882__$1 = state_53882;
var statearr_53891_55342 = state_53882__$1;
(statearr_53891_55342[(2)] = null);

(statearr_53891_55342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (6))){
var inst_53847 = (state_53882[(7)]);
var inst_53868 = (inst_53847 > (0));
var state_53882__$1 = state_53882;
if(cljs.core.truth_(inst_53868)){
var statearr_53892_55350 = state_53882__$1;
(statearr_53892_55350[(1)] = (12));

} else {
var statearr_53893_55351 = state_53882__$1;
(statearr_53893_55351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (3))){
var inst_53880 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53882__$1,inst_53880);
} else {
if((state_val_53883 === (12))){
var inst_53846 = (state_53882[(8)]);
var inst_53870 = cljs.core.vec(inst_53846);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53882__$1,(15),out,inst_53870);
} else {
if((state_val_53883 === (2))){
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53882__$1,(4),ch);
} else {
if((state_val_53883 === (11))){
var inst_53862 = (state_53882[(2)]);
var inst_53863 = (new Array(n));
var inst_53846 = inst_53863;
var inst_53847 = (0);
var state_53882__$1 = (function (){var statearr_53894 = state_53882;
(statearr_53894[(10)] = inst_53862);

(statearr_53894[(7)] = inst_53847);

(statearr_53894[(8)] = inst_53846);

return statearr_53894;
})();
var statearr_53895_55361 = state_53882__$1;
(statearr_53895_55361[(2)] = null);

(statearr_53895_55361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (9))){
var inst_53846 = (state_53882[(8)]);
var inst_53860 = cljs.core.vec(inst_53846);
var state_53882__$1 = state_53882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53882__$1,(11),out,inst_53860);
} else {
if((state_val_53883 === (5))){
var inst_53855 = (state_53882[(11)]);
var inst_53847 = (state_53882[(7)]);
var inst_53850 = (state_53882[(9)]);
var inst_53846 = (state_53882[(8)]);
var inst_53854 = (inst_53846[inst_53847] = inst_53850);
var inst_53855__$1 = (inst_53847 + (1));
var inst_53856 = (inst_53855__$1 < n);
var state_53882__$1 = (function (){var statearr_53896 = state_53882;
(statearr_53896[(11)] = inst_53855__$1);

(statearr_53896[(12)] = inst_53854);

return statearr_53896;
})();
if(cljs.core.truth_(inst_53856)){
var statearr_53897_55365 = state_53882__$1;
(statearr_53897_55365[(1)] = (8));

} else {
var statearr_53898_55366 = state_53882__$1;
(statearr_53898_55366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (14))){
var inst_53875 = (state_53882[(2)]);
var inst_53876 = cljs.core.async.close_BANG_(out);
var state_53882__$1 = (function (){var statearr_53900 = state_53882;
(statearr_53900[(13)] = inst_53875);

return statearr_53900;
})();
var statearr_53901_55368 = state_53882__$1;
(statearr_53901_55368[(2)] = inst_53876);

(statearr_53901_55368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (10))){
var inst_53866 = (state_53882[(2)]);
var state_53882__$1 = state_53882;
var statearr_53902_55369 = state_53882__$1;
(statearr_53902_55369[(2)] = inst_53866);

(statearr_53902_55369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53883 === (8))){
var inst_53855 = (state_53882[(11)]);
var inst_53846 = (state_53882[(8)]);
var tmp53899 = inst_53846;
var inst_53846__$1 = tmp53899;
var inst_53847 = inst_53855;
var state_53882__$1 = (function (){var statearr_53903 = state_53882;
(statearr_53903[(7)] = inst_53847);

(statearr_53903[(8)] = inst_53846__$1);

return statearr_53903;
})();
var statearr_53904_55374 = state_53882__$1;
(statearr_53904_55374[(2)] = null);

(statearr_53904_55374[(1)] = (2));


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
});})(c__52380__auto___55331,out))
;
return ((function (switch__51967__auto__,c__52380__auto___55331,out){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53905[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53905[(1)] = (1));

return statearr_53905;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53882){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53882);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53906){if((e53906 instanceof Object)){
var ex__51971__auto__ = e53906;
var statearr_53907_55379 = state_53882;
(statearr_53907_55379[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55380 = state_53882;
state_53882 = G__55380;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___55331,out))
})();
var state__52382__auto__ = (function (){var statearr_53908 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53908[(6)] = c__52380__auto___55331);

return statearr_53908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___55331,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53910 = arguments.length;
switch (G__53910) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52380__auto___55386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__52380__auto___55386,out){
return (function (){
var f__52381__auto__ = (function (){var switch__51967__auto__ = ((function (c__52380__auto___55386,out){
return (function (state_53952){
var state_val_53953 = (state_53952[(1)]);
if((state_val_53953 === (7))){
var inst_53948 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53954_55388 = state_53952__$1;
(statearr_53954_55388[(2)] = inst_53948);

(statearr_53954_55388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (1))){
var inst_53911 = [];
var inst_53912 = inst_53911;
var inst_53913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53952__$1 = (function (){var statearr_53955 = state_53952;
(statearr_53955[(7)] = inst_53913);

(statearr_53955[(8)] = inst_53912);

return statearr_53955;
})();
var statearr_53956_55390 = state_53952__$1;
(statearr_53956_55390[(2)] = null);

(statearr_53956_55390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (4))){
var inst_53916 = (state_53952[(9)]);
var inst_53916__$1 = (state_53952[(2)]);
var inst_53917 = (inst_53916__$1 == null);
var inst_53918 = cljs.core.not(inst_53917);
var state_53952__$1 = (function (){var statearr_53957 = state_53952;
(statearr_53957[(9)] = inst_53916__$1);

return statearr_53957;
})();
if(inst_53918){
var statearr_53958_55394 = state_53952__$1;
(statearr_53958_55394[(1)] = (5));

} else {
var statearr_53959_55395 = state_53952__$1;
(statearr_53959_55395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (15))){
var inst_53942 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53960_55396 = state_53952__$1;
(statearr_53960_55396[(2)] = inst_53942);

(statearr_53960_55396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (13))){
var state_53952__$1 = state_53952;
var statearr_53961_55397 = state_53952__$1;
(statearr_53961_55397[(2)] = null);

(statearr_53961_55397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (6))){
var inst_53912 = (state_53952[(8)]);
var inst_53937 = inst_53912.length;
var inst_53938 = (inst_53937 > (0));
var state_53952__$1 = state_53952;
if(cljs.core.truth_(inst_53938)){
var statearr_53962_55400 = state_53952__$1;
(statearr_53962_55400[(1)] = (12));

} else {
var statearr_53963_55401 = state_53952__$1;
(statearr_53963_55401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (3))){
var inst_53950 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53952__$1,inst_53950);
} else {
if((state_val_53953 === (12))){
var inst_53912 = (state_53952[(8)]);
var inst_53940 = cljs.core.vec(inst_53912);
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53952__$1,(15),out,inst_53940);
} else {
if((state_val_53953 === (2))){
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53952__$1,(4),ch);
} else {
if((state_val_53953 === (11))){
var inst_53916 = (state_53952[(9)]);
var inst_53920 = (state_53952[(10)]);
var inst_53930 = (state_53952[(2)]);
var inst_53931 = [];
var inst_53932 = inst_53931.push(inst_53916);
var inst_53912 = inst_53931;
var inst_53913 = inst_53920;
var state_53952__$1 = (function (){var statearr_53964 = state_53952;
(statearr_53964[(11)] = inst_53932);

(statearr_53964[(7)] = inst_53913);

(statearr_53964[(12)] = inst_53930);

(statearr_53964[(8)] = inst_53912);

return statearr_53964;
})();
var statearr_53965_55406 = state_53952__$1;
(statearr_53965_55406[(2)] = null);

(statearr_53965_55406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (9))){
var inst_53912 = (state_53952[(8)]);
var inst_53928 = cljs.core.vec(inst_53912);
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53952__$1,(11),out,inst_53928);
} else {
if((state_val_53953 === (5))){
var inst_53916 = (state_53952[(9)]);
var inst_53913 = (state_53952[(7)]);
var inst_53920 = (state_53952[(10)]);
var inst_53920__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53916) : f.call(null,inst_53916));
var inst_53921 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53920__$1,inst_53913);
var inst_53922 = cljs.core.keyword_identical_QMARK_(inst_53913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53923 = ((inst_53921) || (inst_53922));
var state_53952__$1 = (function (){var statearr_53966 = state_53952;
(statearr_53966[(10)] = inst_53920__$1);

return statearr_53966;
})();
if(cljs.core.truth_(inst_53923)){
var statearr_53967_55411 = state_53952__$1;
(statearr_53967_55411[(1)] = (8));

} else {
var statearr_53968_55414 = state_53952__$1;
(statearr_53968_55414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (14))){
var inst_53945 = (state_53952[(2)]);
var inst_53946 = cljs.core.async.close_BANG_(out);
var state_53952__$1 = (function (){var statearr_53970 = state_53952;
(statearr_53970[(13)] = inst_53945);

return statearr_53970;
})();
var statearr_53971_55419 = state_53952__$1;
(statearr_53971_55419[(2)] = inst_53946);

(statearr_53971_55419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (10))){
var inst_53935 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53972_55420 = state_53952__$1;
(statearr_53972_55420[(2)] = inst_53935);

(statearr_53972_55420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (8))){
var inst_53916 = (state_53952[(9)]);
var inst_53920 = (state_53952[(10)]);
var inst_53912 = (state_53952[(8)]);
var inst_53925 = inst_53912.push(inst_53916);
var tmp53969 = inst_53912;
var inst_53912__$1 = tmp53969;
var inst_53913 = inst_53920;
var state_53952__$1 = (function (){var statearr_53973 = state_53952;
(statearr_53973[(7)] = inst_53913);

(statearr_53973[(8)] = inst_53912__$1);

(statearr_53973[(14)] = inst_53925);

return statearr_53973;
})();
var statearr_53974_55425 = state_53952__$1;
(statearr_53974_55425[(2)] = null);

(statearr_53974_55425[(1)] = (2));


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
});})(c__52380__auto___55386,out))
;
return ((function (switch__51967__auto__,c__52380__auto___55386,out){
return (function() {
var cljs$core$async$state_machine__51968__auto__ = null;
var cljs$core$async$state_machine__51968__auto____0 = (function (){
var statearr_53975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53975[(0)] = cljs$core$async$state_machine__51968__auto__);

(statearr_53975[(1)] = (1));

return statearr_53975;
});
var cljs$core$async$state_machine__51968__auto____1 = (function (state_53952){
while(true){
var ret_value__51969__auto__ = (function (){try{while(true){
var result__51970__auto__ = switch__51967__auto__(state_53952);
if(cljs.core.keyword_identical_QMARK_(result__51970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51970__auto__;
}
break;
}
}catch (e53976){if((e53976 instanceof Object)){
var ex__51971__auto__ = e53976;
var statearr_53977_55426 = state_53952;
(statearr_53977_55426[(5)] = ex__51971__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55428 = state_53952;
state_53952 = G__55428;
continue;
} else {
return ret_value__51969__auto__;
}
break;
}
});
cljs$core$async$state_machine__51968__auto__ = function(state_53952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51968__auto____1.call(this,state_53952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51968__auto____0;
cljs$core$async$state_machine__51968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51968__auto____1;
return cljs$core$async$state_machine__51968__auto__;
})()
;})(switch__51967__auto__,c__52380__auto___55386,out))
})();
var state__52382__auto__ = (function (){var statearr_53978 = (f__52381__auto__.cljs$core$IFn$_invoke$arity$0 ? f__52381__auto__.cljs$core$IFn$_invoke$arity$0() : f__52381__auto__.call(null));
(statearr_53978[(6)] = c__52380__auto___55386);

return statearr_53978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52382__auto__);
});})(c__52380__auto___55386,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
