'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ui.select',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'angular-jwt',
  'restangular',
  //'bd.sockjs',
  'datatables',
  'datatables.buttons',
  'w5c.validator',
  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);

var setting = {
    saveSuccess:"保存成功"
    ,saveError:"保存失败"
    ,getDataError:"获取数据失败"
};
angular.module('BlurAdmin').constant('setting', setting);


angular.module('BlurAdmin')
    .constant('defaultOptionsDom'
        ,'<"row"<"col-xs-9 col-md-9"B><"col-xs-3 col-md-3"f>>rt<"row"<"col-md-3"l><"col-md-6"p><"col-md-3"i>>');



angular.module('BlurAdmin')
    .config(config).run(appRun);


/** @ngInject */
function config($httpProvider
    ,RestangularProvider
    ,jwtOptionsProvider
    ,w5cValidatorProvider
) {



    RestangularProvider.setBaseUrl('http://localhost:8081/api');
    // You can set some default headers for calling the API
    // RestangularProvider.setDefaultHeaders(
    //     // { "Accept": 'application/vnd.acme-v1'},
    //     { "Content-Type": "application/json+hal" }
    // );


    // RestangularProvider.setRestangularFields({
    //     selfLink: '_links'
    // });

    // Use Request interceptor
    RestangularProvider.setRequestInterceptor(function(element, operation, route, url) {
        delete element._links;
        return element;
    });


    // Please note we're annotating the function so that the $injector works when the file is minified
    jwtOptionsProvider.config({
        authPrefix: '',
        tokenGetter: function() {
            var token = localStorage.getItem('token');
            if (!token) {
                token = sessionStorage.getItem('token');
            }
            return token;
        }
        ,unauthenticatedRedirector: function() {
            var landingUrl = "http://" + window.location.host + "/auth.html";
            console.log(landingUrl);
            window.location.href = landingUrl;
        }
        ,whiteListedDomains: ['localhost','localhost:8081']
    });
    $httpProvider.interceptors.push('jwtInterceptor');

    // 全局配置
    w5cValidatorProvider.config({
        blurTrig: true,
        showError: true,
        removeError: true

    });

    w5cValidatorProvider.setRules({
        email: {
            required: "输入的邮箱地址不能为空",
            email: "输入邮箱地址格式不正确"
        },
        username: {
            required: "输入的用户名不能为空",
            pattern: "用户名必须输入字母、数字、下划线,以字母开头",
            minlength: "用户名长度不能小于{minlength}",
            maxlength: "用户名长度不能大于{maxlength}",
            w5cuniquecheck: "输入用户名已经存在，请重新输入"
        },
        password: {
            required: "密码不能为空",
            minlength: "密码长度不能小于{minlength}",
            maxlength: "密码长度不能大于{maxlength}"
        },
        repeatPassword: {
            required: "重复密码不能为空",
            repeat: "两次密码输入不一致"
        },
        number: {
            required: "数字不能为空"
        },
        commonName: {
            required: "输入不能为空"
        },
        customizer: {
            customizer: "自定义验证数字必须大于上面的数字"
        },
        dynamicName: {
            required: "动态Name不能为空"
        },
        dynamic: {
            required: "动态元素不能为空"
        }
    });



}

/** @ngInject */
function appRun(authManager,$rootScope,DTDefaultOptions) {
    //console.info("appRun");

var oLanguage=
    {

        "sEmptyTable":     "没有可用的数据",
        "copy":"拷贝",

        "sInfo":           "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
        "sInfoEmpty":      "显示 0 to 0 of 0 条",
        "sInfoFiltered":   "(从 _MAX_ 条数据中检索)",
        "sInfoPostFix":    "",
        "sInfoThousands":  ",",
        "sLengthMenu":     "每页显示 _MENU_ 条记录",
        "sLoadingRecords": "加载中...",
        "sProcessing":     "处理中...",
        "sSearch":         "查询:",
        "sZeroRecords":    "没有检索到数据",
        "oPaginate": {
        "sFirst":    "首页",
            "sLast":     "尾页",
            "sNext":     "前一页",
            "sPrevious": "后一页"
    },
        "oAria": {
        "sSortAscending":  ": activate to sort column ascending",
            "sSortDescending": ": activate to sort column descending"
    }
    };
    DTDefaultOptions.setLanguage(oLanguage);


    authManager.redirectWhenUnauthenticated();

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            //console.log("fromState"+fromState.toString()+"toState"+toState.toString());
            if (!authManager.isAuthenticated() ) {
                var landingUrl = "http://" + window.location.host + "/auth.html";
                console.log(landingUrl);
                window.location.href = landingUrl;
            }

        });

}