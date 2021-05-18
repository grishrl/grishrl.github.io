angular.module('uctc',[]);

angular.module('uctc').controller('homeCtrl',function($scope, totalFactory, constants){
  $scope.rows = [{}];
  $scope.source = constants.source;
  $scope.lastUpdate = constants.lastUpdate;

  
  if (window.location.hash) {
    try {
      const hashContent = decodeURI(window.location.hash).replace(/#/, '');
      const models = JSON.parse(hashContent);
      models.forEach(function (model) {
        $scope.rows.push({
          id: $scope.lastId + 1,
          model,
        })
      });
    } catch(error) {
      console.error(error);
      $scope.rows = [];
    }
  }

  $scope.$on('addRow',function(){
    $scope.rows.push({
      id: $scope.lastId + 1,
      model: {
        unit: 'Archer',
        number: '1',
        vil: 'false',
      }
    });
    $scope.lastId += 1;
  });

  $scope.$on('deleteRow', function(event, { rowIndex }){
    totalFactory.totalsArray.splice(rowIndex, 1);
    $scope.rows.splice(rowIndex, 1);
  });

  $scope.$watch('rows', function() {
    const hashValue = JSON.stringify($scope.rows
      .map(function (row) {
        return row.model;
      }));
    window.location.hash = encodeURI(hashValue);
  }, true);

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
    $scope.rows=[];
    $scope.lastId = 0;
    totalFactory.totalsArray=[];
    totalFactory.totalsObject = {};
    window.location.hash = '';
  }

  $scope.addRow=function(){
    $scope.$emit('addRow');
  };

  $scope.shareLink=function() {
    navigator.clipboard.writeText(window.location.href).then(function() {
      /* clipboard successfully set */
    }, function() {
      /* clipboard write failed */
      console.error('could not access clipboard');
    });
  }
});
