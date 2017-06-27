angular.module('uctc').provider('constants',function(){
  var constantsProvider = {};


  //resource and time costs of each unit.
  constantsProvider.unitCostTimeTable = [
{
  "Unit" : "Archer",
  "W" : 25,
  "F" : 0,
  "G" : 45,
  "Time" : 35
},
{
  "Unit" : "Battering Ram",
  "W" : 160,
  "F" : 0,
  "G" : 75,
  "Time" : 36
},
 {
  "Unit" : "Bombard Cannon",
  "W" : 225,
  "F" : 0,
  "G" : 225,
  "Time" : 57
},
 {
  "Unit" : "Camel",
  "W" : 0,
  "F" : 55,
  "G" : 60,
  "Time" : 22
},
 {
  "Unit" : "Cannon Galleon",
  "W" : 200,
  "F" : 0,
  "G" : 150,
  "Time" : 46
},
 {
  "Unit" : "Cavalry Archer",
  "W" : 40,
  "F" : 0,
  "G" : 70,
  "Time" : 34
},
 {
  "Unit" : "Demolition Ship",
  "W" : 70,
  "F" : 0,
  "G" : 50,
  "Time" : 30
},
 {
  "Unit" : "Eagle Warrior",
  "W" : 0,
  "F" : 25,
  "G" : 50,
  "Time" : 35
},
 {
  "Unit" : "Fire Ship",
  "W" : 75,
  "F" : 0,
  "G" : 45,
  "Time" : 36
},
{
  "Unit" : "Fishing Ship",
  "W" : 75,
  "F" : 0,
  "G" : 0,
  "Time" : 40
},
 {
  "Unit" : "Galley",
  "W" : 90,
  "F" : 0,
  "G" : 30,
  "Time" : 60
},
 {
  "Unit" : "Hand Cannoneer",
  "W" : 0,
  "F" : 45,
  "G" : 50,
  "Time" : 34
},
{
  "Unit" : "Knight",
  "W" : 0,
  "F" : 60,
  "G" : 75,
  "Time" : 30
},
{
  "Unit" : "Scout Cavalry",
  "W" : 0,
  "F" : 80,
  "G" : 0,
  "Time" : 30
},
 {
  "Unit" : "Mangonel",
  "W" : 160,
  "F" : 0,
  "G" : 135,
  "Time" : 46
},
{
  "Unit" : "Monk",
  "W" : 0,
  "F" : 0,
  "G" : 100,
  "Time" : 51
},
 {
  "Unit" : "Scorpion",
  "W" : 75,
  "F" : 0,
  "G" : 75,
  "Time" : 30
},
 {
  "Unit" : "Skirmisher",
  "W" : 35,
  "F" : 25,
  "G" : 0,
  "Time" : 22
},
{
  "Unit" : "Spearman",
  "W" : 25,
  "F" : 35,
  "G" : 0,
  "Time" : 22
},
 {
  "Unit" : "Swordsman",
  "W" : 0,
  "F" : 60,
  "G" : 20,
  "Time" : 22
},
{
  "Unit" : "Trade Cart",
  "W" : 100,
  "F" : 0,
  "G" : 50,
  "Time" : 50
},
{
  "Unit" : "Trade Cog",
  "W" : 100,
  "F" : 0,
  "G" : 50,
  "Time" : 36
},
 {
  "Unit" : "Transport Ship",
  "W" : 125,
  "F" : 0,
  "G" : 0,
  "Time" : 46
},
{
  "Unit" : "Trebuchet",
  "W" : 200,
  "F" : 0,
  "G" : 200,
  "Time" : 50
},
 {
  "Unit" : "Villager",
  "W" : 0,
  "F" : 50,
  "G" : 0,
  "Time" : 25
},
 {
  "Unit" : "Berserk",
  "W" : 0,
  "F" : 65,
  "G" : 25,
  "Time" : 16
},
{
  "Unit" : "Cataphract",
  "W" : 0,
  "F" : 60,
  "G" : 75,
  "Time" : 20
},
{
  "Unit" : "Chu Ko Nu",
  "W" : 40,
  "F" : 0,
  "G" : 35,
  "Time" : 19
},
{
  "Unit" : "Conquistador",
  "W" : 0,
  "F" : 60,
  "G" : 70,
  "Time" : 24
},
 {
  "Unit" : "Huskarl",
  "W" : 0,
  "F" : 80,
  "G" : 40,
  "Time" : 13
},
{
  "Unit" : "Jaguar Warrior",
  "W" : 0,
  "F" : 60,
  "G" : 30,
  "Time" : 17
},
{
  "Unit" : "Janissary",
  "W" : 0,
  "F" : 60,
  "G" : 55,
  "Time" : 17
},
{
  "Unit" : "Longboat",
  "W" : 100,
  "F" : 0,
  "G" : 50,
  "Time" : 25
},
 {
  "Unit" : "Longbowman",
  "W" : 35,
  "F" : 0,
  "G" : 40,
  "Time" : 19
},
 {
  "Unit" : "Mameluke",
  "W" : 0,
  "F" : 55,
  "G" : 85,
  "Time" : 23
},
{
  "Unit" : "Mangudai",
  "W" : 55,
  "F" : 0,
  "G" : 65,
  "Time" : 26
},
 {
  "Unit" : "Missionary",
  "W" : 0,
  "F" : 0,
  "G" : 100,
  "Time" : 51
},
 {
  "Unit" : "Plumed Archer",
  "W" : 46,
  "F" : 0,
  "G" : 46,
  "Time" : 16
},
{
  "Unit" : "Samurai",
  "W" : 0,
  "F" : 60,
  "G" : 30,
  "Time" : 9
},
 {
  "Unit" : "Tarkan",
  "W" : 0,
  "F" : 60,
  "G" : 60,
  "Time" : 14
},
 {
  "Unit" : "Throwing Axeman",
  "W" : 0,
  "F" : 55,
  "G" : 25,
  "Time" : 17
},
 {
  "Unit" : "Teutonic Knight",
  "W" : 0,
  "F" : 85,
  "G" : 40,
  "Time" : 12
},
 {
  "Unit" : "Turtle Ship",
  "W" : 200,
  "F" : 0,
  "G" : 200,
  "Time" : 50
},
{
  "Unit" : "War Elephant",
  "W" : 0,
  "F" : 200,
  "G" : 75,
  "Time" : 31
},
 {
  "Unit" : "War Wagon",
  "W" : 120,
  "F" : 0,
  "G" : 60,
  "Time" : 25
},
{
  "Unit" : "Woad Raider",
  "W" : 0,
  "F" : 65,
  "G" : 25,
  "Time" : 10
},
{
  "Unit" : "Farm",
  "W" : 60,
  "F" : 0,
  "G" : 0,
  "Time" : 580
}
  ];

  //collection rates of villiger
constantsProvider.collectionRate = {
  "W": 0.38,
  "F": 0.3,
  "G": 0.37,
  "S": 0.35
};

//provide unit list
constantsProvider.unitList = [
  "Archer",
"Battering Ram",
"Berserk",
"Bombard Cannon",
"Camel",
"Cannon Galleon",
"Cataphract",
"Cavalry Archer",
"Chu Ko Nu",
"Conquistador",
"Demolition Ship",
"Eagle Warrior",
"Fire Ship" ,
"Fishing Ship" ,
"Galley" ,
"Hand Cannoneer",
"Huskarl" ,
"Jaguar Warrior",
"Janissary" ,
"Knight" ,
"Longboat" ,
"Longbowman" ,
"Mameluke" ,
"Mangonel",
"Mangudai",
"Missionary",
"Monk",
"Plumed Archer",
"Samurai",
"Scorpion",
"Scout Cavalry",
"Skirmisher",
"Spearman",
"Swordsman",
"Tarkan",
"Teutonic Knight",
"Throwing Axeman",
"Trade Cart",
"Trade Cog",
"Transport Ship",
"Trebuchet",
"Turtle Ship",
"Villager",
"War Elephant",
"War Wagon",
"Woad Raider"
];

constantsProvider.$get = function() {
      var getter = {};

      getter.unitCostTimeTable = constantsProvider.unitCostTimeTable;
      getter.collectionRate = constantsProvider.collectionRate;
      getter.unitList = constantsProvider.unitList;

      return getter;
  };

  return constantsProvider;

});
