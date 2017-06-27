angular.module('uctc').directive('rowTemplate',function(){
  var directive = {};
   directive.templateUrl = 'rowTemplate.html';
   directive.restrict = 'E';
   directive.controller = 'rowTemplateController';
   directive.controllerAs = 'ctrl';
  //  directive.transclude = false;
  //   directive.scope = {
  //      label : '@',
  //      queryObject: '@',
  //      searchModel: '='
  //    };
       //
      //  directive.link = function(scope, element, attrs) {
       //
      //  };

       return directive;
});
angular.module('uctc').controller('rowTemplateController',function(constants, caLogic, $scope){
  $scope.model={};
  $scope.unitList = constants.unitList;
  var numberToShow = 10;
  var arrayToShow = [];
  for(var i = 0; i<numberToShow; i++){
    arrayToShow.push(i+1);
  }
  console.log(arrayToShow);
  $scope.numbers = arrayToShow;

  $scope.addRow=function(){
    console.log('clicked');
    $scope.$emit('addRow');
  };

  $scope.calculate=function(){
    console.log('calc Func');
    console.log($scope.model.number);
    $scope.returnedCalcs=caLogic.requiredForUnit($scope.model.unit, $scope.model.number);
  };
});
