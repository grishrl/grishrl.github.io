angular.module('uctc',[]);

angular.module('uctc').controller('homeCtrl',function($scope, totalFactory){
  $scope.rows = [{}];

  $scope.$on('addRow',function(){

    $scope.rows.push($scope.rows.length+1);

  });

  $scope.$watch(function(){return totalFactory.totalsArray;},function(){

    var total = totalFactory.totalsArray;
    var totalsForScope = {"w":0,"f":0,"g":0};

    for(var i = 0; i<total.length;i++){
      totalsForScope.w += total[i].W;
      totalsForScope.f += total[i].F;
      totalsForScope.g += total[i].G;
    }

    $scope.totals = totalsForScope;
  },true);

$scope.reset = function(){
  $scope.rows=undefined;
  $scope.rows=[{}];
  totalFactory.totalsArray=[];
  totalFactory.totalsObject = {};
}

});
