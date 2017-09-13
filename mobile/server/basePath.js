//路径服务
angular.module('mobileApp').provider('basePath', function () {
   var path='/yunfengtiku/mobile/';
    this.routerTemplatePath=path+'routerTemplate/';
    
    //this.$get 可以让provider服务在config里面使用
    this.$get = function () {
        return {
            directiveTemplatePath: path+'directiveTemplate/',
            imgPath:path+'assets/img/',
            path:path
        };
    };
});
