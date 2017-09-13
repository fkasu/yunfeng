/**
 * Created by Pevon on 2016/11/16.
 */
/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').factory('subjectServer', function (basePath) {
    var data = [
        {
            img:basePath.imgPath+'htmlIcon.png;',
            title:'HTML'
        },
        {
            img:basePath.imgPath+'cssIcon.png;',
            title:'CSS'

        },
        {
            img:basePath.imgPath+'jsIcon.png;',
            title:'JavaScript'
        },
        {
            img:basePath.imgPath+'angularIcon.png;',
            title:'Angular'
        },
        {
            img:basePath.imgPath+'jqueryIcon.png;',
            title:'JQuery'
        }
    ];
    return data;
});