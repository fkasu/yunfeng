/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').factory('topicTypeServer', function () {
    var data = {
        topicTypes: [
            {
                name:'单选题',
                icon: 'singleIcon.png',
                href:'#/tab/subjectPage',
            },
            {
                name:'多选题',
                icon: 'doubleIcon.png',
                href:'#/tab/subjectPage',
            },
            {
                name:'判断题',
                icon: 'judIcon.png',
                href:'#/tab/subjectPage',
            },
            {
                name:'填空题',
                icon: 'blankIcon.png',
                href:'#/tab/subjectPage',
            },
            {
                name:'问答题',
                icon: 'answerIcon.png',
                href:'#/tab/subjectPage',
            }

        ]
    };
    return data;
});