/**
 * Created by Administrator on 2016/11/17 0017.
 */
/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').service('infoServer',function () {

    this.data =[];
    this.currentItem = 0;
    this.title=function () {
        return sessionStorage.getItem('subjectName')+'【'+this.data.length+'】';
    };
    this.pre = function () {
        if (this.currentItem > 0) {
            this.currentItem--;
        }
    };
    this.next = function () {
        if (this.currentItem < (this.data.length - 1)) {
            this.currentItem++;
        }
    };
    this.now = function (current) {

            this.currentItem=current-1;

    };

});