
angular.module('uctc').factory('totalFactory',function(){
  var totalFactory = {};
  totalFactory.totalObject = {};
  totalFactory.totalsArray = [];

  totalFactory.villagerRefresh = function(){

    let keysArray = Object.keys(totalFactory.totalObject);
    var count = 0;
    keysArray.forEach(function(key){
      let value = totalFactory.totalObject[key];
      if(value.vil == 'true'){
        count++;
      }
    });
    return count;
  }
  return totalFactory;


});
