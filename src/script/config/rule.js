  angular.module('app').config(['$validationProvider', function($validationProvider) {
    var expression = {
      required: function(value) {
        return !!value;
      },
      number: /^\d+$/,
      minlength: function(value, scope, element, attrs, param) {
        return value.length >= param;
      },
      maxlength: function(value, scope, element, attrs, param) {
        return value.length <= param;
      },
      phone: /^1[\d]{10}$/
    };

    var defaultMsg = {
      required: {
        error: '必须填写',
        success: ''
      },
      url: {
        error: 'This should be Url',
        success: 'It\'s Url'
      },
      email: {
        error: 'This should be Email',
        success: 'It\'s Email'
      },
      number: {
        error: 'This should be Number',
        success: 'It\'s Number'
      },
      minlength: {
        error: '小于最小长度',
        success: ''
      },
      maxlength: {
        error: 'This should be shorter',
        success: 'Short enough!'
      },
      phone: {
        error: '请输入正确的手机号',
        success: ''
      }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
  }]);
