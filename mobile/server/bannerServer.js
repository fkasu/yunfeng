/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').factory('bannerServer', function () {
    var data = {
        does_continue:true,
        slide_interval:2000,
        imgs:[
            {
                img:'bg.png',
            },
            {
                img:'bg4.png',
            },
            {
                img:'bg3.png',
            },
        ]
        
    };
    return data;
});