angular.module('uctc',[]);

angular.module('uctc').controller('homeCtrl',function(caLogic, $scope){
  $scope.rows = [1];
  $scope.$on('addRow',function(){
    console.log('event');
    $scope.rows.push($scope.rows.length+1);

  });
});
