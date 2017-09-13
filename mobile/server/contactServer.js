angular.module('mobileApp').factory('contactServer', function () {
    var data =[
        {
            name:'邮箱',
            info:'yunfeng@163.com',
        },
        {
            name:'电话',
            info:'020-81433368',
        },
        {
            name:'地址',
            info:'广州市天河区大观中路95号科汇园F栋413',
        },
    ];

    return data;
});