import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import * as io from 'socket.io-client';
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
        var ioFunc = io.default ? io.default : io;
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
export { WrappedSocket };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LWlvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc29ja2V0LWlvLyIsInNvdXJjZXMiOlsic3JjL3NvY2tldC1pby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJdkM7SUFRSSx1QkFBb0IsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFQMUMsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLGdCQUFXLEdBQW1CO1lBQzFCLEdBQUcsRUFBRSxFQUFFO1lBQ1AsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBR0UsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzdCO1FBQ0QsSUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFNLE9BQU8sR0FBUSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFJLEVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFFLEVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDBCQUFFLEdBQUYsVUFBRyxTQUFpQjtRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMEJBQUUsR0FBRixVQUFHLFNBQWlCLEVBQUUsUUFBa0I7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssU0FBaUIsRUFBRSxRQUFrQjtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxTQUFpQixFQUFFLElBQVUsRUFBRSxRQUFtQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsU0FBaUIsRUFBRSxRQUFtQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsU0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQWEsU0FBaUI7UUFBOUIsaUJBY0M7UUFiRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUUsVUFBQyxRQUFhO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLElBQU87Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO2dCQUNILElBQUksS0FBSSxDQUFDLGtCQUFrQixLQUFLLENBQUMsRUFBRTtvQkFDaEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzFDO1lBQ04sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNILEtBQUssRUFBRSxDQUNWLENBQUM7SUFDTixDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQW9CLFNBQWlCO1FBQXJDLGlCQUVDO1FBREcsT0FBTyxJQUFJLE9BQU8sQ0FBSSxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0ICogYXMgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBTb2NrZXRJb0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NvY2tldC1pby5jb25maWcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdyYXBwZWRTb2NrZXQge1xyXG4gICAgc3Vic2NyaWJlcnNDb3VudGVyID0gMDtcclxuICAgIGlvU29ja2V0OiBhbnk7XHJcbiAgICBlbXB0eUNvbmZpZzogU29ja2V0SW9Db25maWcgPSB7XHJcbiAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogU29ja2V0SW9Db25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uZmlnID0gdGhpcy5lbXB0eUNvbmZpZztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSBjb25maWcudXJsO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IGNvbmZpZy5vcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IGlvRnVuYyA9IChpbyBhcyBhbnkpLmRlZmF1bHQgPyAoaW8gYXMgYW55KS5kZWZhdWx0IDogaW87XHJcbiAgICAgICAgdGhpcy5pb1NvY2tldCA9IGlvRnVuYyh1cmwsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mKG5hbWVzcGFjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pb1NvY2tldC5vZihuYW1lc3BhY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmlvU29ja2V0Lm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uY2UoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuaW9Tb2NrZXQub25jZShldmVudE5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlvU29ja2V0LmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0KGNsb3NlPzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW9Tb2NrZXQuZGlzY29ubmVjdC5hcHBseSh0aGlzLmlvU29ja2V0LCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnksIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pb1NvY2tldC5lbWl0LmFwcGx5KHRoaXMuaW9Tb2NrZXQsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pb1NvY2tldC5yZW1vdmVMaXN0ZW5lci5hcHBseSh0aGlzLmlvU29ja2V0LCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFsbExpc3RlbmVycyhldmVudE5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pb1NvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMuYXBwbHkodGhpcy5pb1NvY2tldCwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tRXZlbnQ8VD4oZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzQ291bnRlcisrO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSggKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgIHRoaXMuaW9Tb2NrZXQub24oZXZlbnROYW1lLCAoZGF0YTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZGF0YSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlcnNDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pb1NvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KS5waXBlKFxyXG4gICAgICAgICAgICBzaGFyZSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tT25lVGltZUV2ZW50PFQ+KGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KHJlc29sdmUgPT4gdGhpcy5vbmNlKGV2ZW50TmFtZSwgcmVzb2x2ZSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=