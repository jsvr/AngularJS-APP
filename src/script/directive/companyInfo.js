angular.module('app.lib').directive('mkCompanyInfo', function() {
  return {
    scope: {
      cmp: '=data'
    },
    replace: true,
    templateUrl: 'view/template/companyInfo.html'
  }
});
