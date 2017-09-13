/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').controller('mobileHomeCtrl',function ($scope,$ionicSlideBoxDelegate,$ionicNavBarDelegate) {
    //解决路由切换后，ionicSlideBox不会自动播放
    $scope.bannerRun=function () {
        $ionicSlideBoxDelegate.stop();
        $ionicSlideBoxDelegate.start();
    }

});