/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').factory('guideServer', function () {
    var data = {
        url: 'mobileHome.html',
        bgs: [
            {
                img: 'welcome1.jpg',
            },
            {
                img: 'welcome2.jpg',
            },
            {
                img: 'welcome3.jpg',
            },
            {
                img: 'welcome4.jpg',
            }
        ]
    };
    return data;
});