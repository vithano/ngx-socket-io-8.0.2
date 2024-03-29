import { __decorate } from "tslib";
import { NgModule, InjectionToken } from '@angular/core';
import { WrappedSocket } from './socket-io.service';
/** Socket factory */
export function SocketFactory(config) {
    return new WrappedSocket(config);
}
export var SOCKET_CONFIG_TOKEN = new InjectionToken('__SOCKET_IO_CONFIG__');
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
export { SocketIoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LWlvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zb2NrZXQtaW8vIiwic291cmNlcyI6WyJzcmMvc29ja2V0LWlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxxQkFBcUI7QUFDckIsTUFBTSxVQUFVLGFBQWEsQ0FBQyxNQUFzQjtJQUNoRCxPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsc0JBQXNCLENBQUMsQ0FBQztBQUc5RjtJQUFBO0lBY0MsQ0FBQzt1QkFkVyxjQUFjO0lBQ2hCLHNCQUFPLEdBQWQsVUFBZSxNQUFzQjtRQUNqQyxPQUFPO1lBQ0gsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNsRDtvQkFDSSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLElBQUksRUFBRyxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O0lBYlEsY0FBYztRQUQxQixRQUFRLENBQUMsRUFBRSxDQUFDO09BQ0EsY0FBYyxDQWN6QjtJQUFELHFCQUFDO0NBQUEsQUFkRixJQWNFO1NBZFcsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTb2NrZXRJb0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NvY2tldC1pby5jb25maWcnO1xyXG5pbXBvcnQgeyBXcmFwcGVkU29ja2V0IH0gZnJvbSAnLi9zb2NrZXQtaW8uc2VydmljZSc7XHJcblxyXG4vKiogU29ja2V0IGZhY3RvcnkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNvY2tldEZhY3RvcnkoY29uZmlnOiBTb2NrZXRJb0NvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBXcmFwcGVkU29ja2V0KGNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTT0NLRVRfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFNvY2tldElvQ29uZmlnPignX19TT0NLRVRfSU9fQ09ORklHX18nKTtcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIFNvY2tldElvTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZzogU29ja2V0SW9Db25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNvY2tldElvTW9kdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IFNvY2tldElvTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogU09DS0VUX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFdyYXBwZWRTb2NrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogU29ja2V0RmFjdG9yeSxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzIDogW1NPQ0tFVF9DT05GSUdfVE9LRU5dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gfVxyXG4iXX0=