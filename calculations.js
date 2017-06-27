angular.module('uctc').factory('caLogic', function(constants){
    var caLogic = {};

    //returns data of unit.
    caLogic.returnUnitData = function(unit){
      for(var i =0;i<constants.unitCostTimeTable.length;i++){
        if(constants.unitCostTimeTable[i].Unit==unit){
          return constants.unitCostTimeTable[i];
        }
      }
    };

    //takes unit, number of facilities, returns villager number/type required
    caLogic.requiredForUnit = function(model){
      if(model.unit){
        
        if(!model.number){
          model.number=1;
        }
        var unitCosts = this.returnUnitData(model.unit);
        //resourceCost/(timeToBuild*resourceCollectionRate)

        var villPerResource = {"W":0,"F":0,"G":0};

        angular.forEach(villPerResource, function(val,key){
          val = (unitCosts[key]/(unitCosts.Time*constants.collectionRate[key]));
          val = Math.ceil(val);
          val = val*model.number;
          villPerResource[key]=val;
        });

        if(model.unit=="Villager"){
          villPerResource["W"]+=3*model.number;
        }else if(model.vil=='true' && model.unit!="Villager"){
          villPerResource["F"]+=7;
          villPerResource["W"]+=3;
        }
        villPerResource.Unit = model.unit;
        return villPerResource;
      }

    };
  return caLogic;
});
