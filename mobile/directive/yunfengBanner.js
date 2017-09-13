/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').directive('yunfengBanner', function (bannerServer,basePath) {
    return {
        restrict: 'E',
        scope: '=',
        templateUrl: basePath.directiveTemplatePath+'banner.html',
        require: '',
        controller: function ($rootScope,$scope,$element,$attrs,$transclude,$ionicSlideBoxDelegate) {
            $scope.does_continue=bannerServer.does_continue;
            $scope.slide_interval=bannerServer.slide_interval;
            $scope.imgs=bannerServer.imgs;
            $scope.imgPath=basePath.imgPath;
        },
        transclude: true
        
    };

});




