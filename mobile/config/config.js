//在config里面设置ionic的一些初始化
angular.module('mobileApp').config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
    
    // Tab风格
    $ionicConfigProvider.tabs.style('standard');

    // Tab位置
    $ionicConfigProvider.tabs.position('bottom');

    //标题位置
    $ionicConfigProvider.navBar.alignTitle('center');

    // 主要操作按钮位置
    // $ionicConfigProvider.navBar.positionPrimaryButtons('left');

    //次要操作按钮位置
    // $ionicConfigProvider.navBar.positionSecondaryButtons('right');

//禁止侧滑后退事件
//     $ionicConfigProvider.views.swipeBackEnabled(false);
});
$(function () {
    //去除后退按钮文字说明
    $('.back-text').html(' ');
    

});