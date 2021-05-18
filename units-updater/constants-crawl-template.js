angular.module('uctc').provider('constants', function () {
  var constantsProvider = {};

  constantsProvider.source = 'https://ageofempires.fandom.com/';
  constantsProvider.lastUpdate = 'LAST UPDATE PLACEHOLDER';

  //resource and time costs of each unit.
  constantsProvider.unitCostTimeTable = 'UNITS COST PLACEHOLDER';

  //collection rates of villiger
  constantsProvider.collectionRate = {
    "W": 0.38,
    "F": 0.3,
    "G": 0.37,
    "S": 0.35
  };

  //provide unit list
  constantsProvider.unitList = constantsProvider
    .unitCostTimeTable
    .map(unitCost => unitCost.Unit);

  constantsProvider.$get = function () {
    var getter = {};

    getter.unitCostTimeTable = constantsProvider.unitCostTimeTable;
    getter.collectionRate = constantsProvider.collectionRate;
    getter.unitList = constantsProvider.unitList;

    return getter;
  };

  return constantsProvider;

});
