/**
 * Created by Pevon on 2016/11/16.
 */

angular.module('mobileApp').service('historyServer',function (basePath) {
    var data1= [
        {
            imgIon:basePath.imgPath + 'htmlIcon.png',
            name:'HTML',
            browse:[
                {
                    topic:'单选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'多选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'填空题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'判断题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'问答题',
                    subject:'你上次看到第一题'
                }

            ],

        },
        {
            imgIon:basePath.imgPath + 'jqueryIcon.png',
            name:'Jquery',
            browse:[
                {
                    topic:'单选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'多选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'填空题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'判断题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'问答题',
                    subject:'你上次看到第一题'
                }
            ]
        },
        {
            imgIon:basePath.imgPath + 'jsIcon.png',
            name:'JavaScript',
            browse:[
                {
                    topic:'单选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'多选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'填空题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'判断题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'问答题',
                    subject:'你上次看到第一题'
                }
            ]
        },
        {
            imgIon:basePath.imgPath + 'angularIcon.png',
            name:'Angular',
            browse:[
                {
                    topic:'单选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'多选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'填空题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'判断题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'问答题',
                    subject:'你上次看到第一题'
                }
            ]
        },
        {
            imgIon:basePath.imgPath + 'cssIcon.png',
            name:'CSS',
            browse:[
                {
                    topic:'单选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'多选题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'填空题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'判断题',
                    subject:'你上次看到第一题'
                },
                {
                    topic:'问答题',
                    subject:'你上次看到第一题'
                }
            ]
        }
    ];

    this.getData1= function () {
        return data1;
    }
});