// 控制器
angular.module('app.controller', ['app.lib']);
// 指令、服务、过滤器
angular.module('app.lib', []);

angular.module('app', [ 'ngAnimate', 'app.controller', 'ui.router', 'validation', 'ngCookies']);
