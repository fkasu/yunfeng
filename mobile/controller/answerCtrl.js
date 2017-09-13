/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').controller('answerCtrl', function ($scope, answerServer,infoServer) {


    $scope.result=infoServer;
    $scope.result.data=answerServer;


});
