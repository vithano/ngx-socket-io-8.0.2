import { __decorate } from 'tslib';
import { InjectionToken, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import * as io from 'socket.io-client';
import io__default from 'socket.io-client';

var WrappedSocket = /** @class */ (function () {
    function WrappedSocket(config) {
        this.config = config;
        this.subscribersCounter = 0;
        this.emptyConfig = {
            url: '',
            options: {}
        };
        if (config === undefined) {
            config = this.emptyConfig;
        }
        var url = config.url;
        var options = config.options;
        var ioFunc = io__default ? io__default : io;
        this.ioSocket = ioFunc(url, options);
    }
    WrappedSocket.prototype.of = function (namespace) {
        this.ioSocket.of(namespace);
    };
    WrappedSocket.prototype.on = function (eventName, callback) {
        this.ioSocket.on(eventName, callback);
    };
    WrappedSocket.prototype.once = function (eventName, callback) {
        this.ioSocket.once(eventName, callback);
    };
    WrappedSocket.prototype.connect = function () {
        return this.ioSocket.connect();
    };
    WrappedSocket.prototype.disconnect = function (close) {
        return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.emit = function (eventName, data, callback) {
        return this.ioSocket.emit.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.removeListener = function (eventName, callback) {
        return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.removeAllListeners = function (eventName) {
        return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.fromEvent = function (eventName) {
        var _this = this;
        this.subscribersCounter++;
        return Observable.create(function (observer) {
            _this.ioSocket.on(eventName, function (data) {
                observer.next(data);
            });
            return function () {
                if (_this.subscribersCounter === 1) {
                    _this.ioSocket.removeListener(eventName);
                }
            };
        }).pipe(share());
    };
    WrappedSocket.prototype.fromOneTimeEvent = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this.once(eventName, resolve); });
    };
    return WrappedSocket;
}());

/** Socket factory */
function SocketFactory(config) {
    return new WrappedSocket(config);
}
var SOCKET_CONFIG_TOKEN = new InjectionToken('__SOCKET_IO_CONFIG__');
var SocketIoModule = /** @class */ (function () {
    function SocketIoModule() {
    }
    SocketIoModule_1 = SocketIoModule;
    SocketIoModule.forRoot = function (config) {
        return {
            ngModule: SocketIoModule_1,
            providers: [
                { provide: SOCKET_CONFIG_TOKEN, useValue: config },
                {
                    provide: WrappedSocket,
                    useFactory: SocketFactory,
                    deps: [SOCKET_CONFIG_TOKEN]
                }
            ]
        };
    };
    var SocketIoModule_1;
    SocketIoModule = SocketIoModule_1 = __decorate([
        NgModule({})
    ], SocketIoModule);
    return SocketIoModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { WrappedSocket as Socket, SocketIoModule, SocketFactory as ɵa, SOCKET_CONFIG_TOKEN as ɵb };
//# sourceMappingURL=ngx-socket-io.js.map
