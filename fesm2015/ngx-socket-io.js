import { __decorate } from 'tslib';
import { InjectionToken, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import * as io from 'socket.io-client';
import io__default from 'socket.io-client';

class WrappedSocket {
    constructor(config) {
        this.config = config;
        this.subscribersCounter = 0;
        this.emptyConfig = {
            url: '',
            options: {}
        };
        if (config === undefined) {
            config = this.emptyConfig;
        }
        const url = config.url;
        const options = config.options;
        const ioFunc = io__default ? io__default : io;
        this.ioSocket = ioFunc(url, options);
    }
    of(namespace) {
        this.ioSocket.of(namespace);
    }
    on(eventName, callback) {
        this.ioSocket.on(eventName, callback);
    }
    once(eventName, callback) {
        this.ioSocket.once(eventName, callback);
    }
    connect() {
        return this.ioSocket.connect();
    }
    disconnect(close) {
        return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
    }
    emit(eventName, data, callback) {
        return this.ioSocket.emit.apply(this.ioSocket, arguments);
    }
    removeListener(eventName, callback) {
        return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
    }
    removeAllListeners(eventName) {
        return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
    }
    fromEvent(eventName) {
        this.subscribersCounter++;
        return Observable.create((observer) => {
            this.ioSocket.on(eventName, (data) => {
                observer.next(data);
            });
            return () => {
                if (this.subscribersCounter === 1) {
                    this.ioSocket.removeListener(eventName);
                }
            };
        }).pipe(share());
    }
    fromOneTimeEvent(eventName) {
        return new Promise(resolve => this.once(eventName, resolve));
    }
}

var SocketIoModule_1;
/** Socket factory */
function SocketFactory(config) {
    return new WrappedSocket(config);
}
const SOCKET_CONFIG_TOKEN = new InjectionToken('__SOCKET_IO_CONFIG__');
let SocketIoModule = SocketIoModule_1 = class SocketIoModule {
    static forRoot(config) {
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
    }
};
SocketIoModule = SocketIoModule_1 = __decorate([
    NgModule({})
], SocketIoModule);

/**
 * Generated bundle index. Do not edit.
 */

export { WrappedSocket as Socket, SocketIoModule, SocketFactory as ɵa, SOCKET_CONFIG_TOKEN as ɵb };
//# sourceMappingURL=ngx-socket-io.js.map
