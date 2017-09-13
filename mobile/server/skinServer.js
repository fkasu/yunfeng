/**
 * Created by Pevon on 2016/11/16.
 */
angular.module('mobileApp').factory('skinServer', function () {
    var data = {
        titles:[
            {name:'夜间模式'},
            {name:'护眼模式'},
            {name:'正常模式'},
        ]
    };
    return data;
});