angular.module('uctc').directive('rowTemplate',function($scope){
  var directive = {};
  directive.templateUrl = 'rowTemplate.html';
  directive.restrict = 'E';
  directive.controller = 'rowTemplateController';
  directive.controllerAs = 'ctrl';


  return directive;
});
angular.module('uctc').controller('rowTemplateController',function(constants, caLogic, totalFactory, $scope){
  $scope.model={};
  $scope.unitList = constants.unitList;
  var numberToShow = 10;
  var arrayToShow = [];
  for(var i = 0; i<numberToShow; i++){
    arrayToShow.push(i+1);
  }

  $scope.numbers = arrayToShow;

  $scope.deleteRow = function(rowIndex) {
    $scope.$emit('deleteRow', { rowIndex });
  };

  $scope.total = [];

  $scope.calculate=function(rowIndex){
    var tempReturn = caLogic.requiredForUnit($scope.model, rowIndex)

    $scope.returnedCalcs=tempReturn;
    
    if(totalFactory.totalsArray[rowIndex]){
      totalFactory.totalsArray[rowIndex]=tempReturn;
    }else{
      totalFactory.totalsArray.push(tempReturn);
    }
  };

  $scope.init=function({ id, model }, rowIndex) {
    $scope.model = model;
    $scope.calculate(rowIndex);
  }
});
