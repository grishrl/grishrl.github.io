angular.module('uctc').directive('rowTemplate',function(){
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

  $scope.addRow=function(){

    $scope.$emit('addRow');
  };

  $scope.total = [];

  $scope.calculate=function(ind){

    var tempReturn = caLogic.requiredForUnit($scope.model)

    $scope.returnedCalcs=tempReturn;
    
    if(totalFactory.totalsArray[ind]){
      totalFactory.totalsArray[ind]=tempReturn;
    }else{
      totalFactory.totalsArray.push(tempReturn);
    }
  };

});
