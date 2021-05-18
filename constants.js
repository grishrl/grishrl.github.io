angular.module('uctc').provider('constants', function () {
  var constantsProvider = {};

  constantsProvider.source = 'https://ageofempires.fandom.com/';
  constantsProvider.lastUpdate = '2021-05-18T07:34:11.689Z';

  //resource and time costs of each unit.
  constantsProvider.unitCostTimeTable = [
  {
    "Unit": "Arambai",
    "W": 75,
    "F": 0,
    "G": 60,
    "Time": 21
  },
  {
    "Unit": "Arbalester",
    "W": 25,
    "F": 0,
    "G": 45,
    "Time": 27
  },
  {
    "Unit": "Archer",
    "W": 25,
    "F": 0,
    "G": 45,
    "Time": 35
  },
  {
    "Unit": "Ballista Elephant",
    "W": 0,
    "F": 100,
    "G": 80,
    "Time": 25
  },
  {
    "Unit": "Battering Ram",
    "W": 160,
    "F": 0,
    "G": 75,
    "Time": 36
  },
  {
    "Unit": "Battle Elephant",
    "W": 0,
    "F": 120,
    "G": 70,
    "Time": 24
  },
  {
    "Unit": "Berserk",
    "W": 0,
    "F": 65,
    "G": 25,
    "Time": 14
  },
  {
    "Unit": "Bombard Cannon",
    "W": 225,
    "F": 0,
    "G": 225,
    "Time": 56
  },
  {
    "Unit": "Boyar",
    "W": 0,
    "F": 50,
    "G": 80,
    "Time": 15
  },
  {
    "Unit": "Camel Archer",
    "W": 50,
    "F": 0,
    "G": 60,
    "Time": 25
  },
  {
    "Unit": "Camel Rider",
    "W": 0,
    "F": 55,
    "G": 60,
    "Time": 22
  },
  {
    "Unit": "Cannon Galleon",
    "W": 200,
    "F": 0,
    "G": 150,
    "Time": 46
  },
  {
    "Unit": "Capped Ram",
    "W": 160,
    "F": 0,
    "G": 75,
    "Time": 36
  },
  {
    "Unit": "Caravel",
    "W": 90,
    "F": 0,
    "G": 34,
    "Time": 36
  },
  {
    "Unit": "Cataphract",
    "W": 0,
    "F": 70,
    "G": 75,
    "Time": 20
  },
  {
    "Unit": "Cavalier",
    "W": 0,
    "F": 60,
    "G": 75,
    "Time": 30
  },
  {
    "Unit": "Cavalry Archer",
    "W": 40,
    "F": 0,
    "G": 60,
    "Time": 34
  },
  {
    "Unit": "Champion",
    "W": 0,
    "F": 60,
    "G": 20,
    "Time": 21
  },
  {
    "Unit": "Chu Ko Nu",
    "W": 40,
    "F": 0,
    "G": 35,
    "Time": 16
  },
  {
    "Unit": "Condottiero",
    "W": 0,
    "F": 50,
    "G": 35,
    "Time": 18
  },
  {
    "Unit": "Conquistador",
    "W": 0,
    "F": 60,
    "G": 70,
    "Time": 24
  },
  {
    "Unit": "Coustillier",
    "W": 0,
    "F": 55,
    "G": 55,
    "Time": 15
  },
  {
    "Unit": "Crossbowman",
    "W": 25,
    "F": 0,
    "G": 45,
    "Time": 27
  },
  {
    "Unit": "Demolition Raft",
    "W": 70,
    "F": 0,
    "G": 50,
    "Time": 45
  },
  {
    "Unit": "Demolition Ship",
    "W": 70,
    "F": 0,
    "G": 50,
    "Time": 31
  },
  {
    "Unit": "Eagle Scout",
    "W": 0,
    "F": 20,
    "G": 50,
    "Time": 35
  },
  {
    "Unit": "Eagle Warrior",
    "W": 0,
    "F": 20,
    "G": 50,
    "Time": 35
  },
  {
    "Unit": "Elephant Archer",
    "W": 0,
    "F": 100,
    "G": 70,
    "Time": 25
  },
  {
    "Unit": "Elite Battle Elephant",
    "W": 0,
    "F": 120,
    "G": 70,
    "Time": 24
  },
  {
    "Unit": "Elite Cannon Galleon",
    "W": 200,
    "F": 0,
    "G": 150,
    "Time": 46
  },
  {
    "Unit": "Elite Eagle Warrior",
    "W": 0,
    "F": 20,
    "G": 50,
    "Time": 20
  },
  {
    "Unit": "Elite Skirmisher",
    "W": 35,
    "F": 25,
    "G": 0,
    "Time": 22
  },
  {
    "Unit": "Elite Steppe Lancer",
    "W": 0,
    "F": 70,
    "G": 40,
    "Time": 20
  },
  {
    "Unit": "Fast Fire Ship",
    "W": 75,
    "F": 0,
    "G": 45,
    "Time": 36
  },
  {
    "Unit": "Fire Galley",
    "W": 75,
    "F": 0,
    "G": 45,
    "Time": 65
  },
  {
    "Unit": "Fire Ship",
    "W": 75,
    "F": 0,
    "G": 45,
    "Time": 36
  },
  {
    "Unit": "Fishing Ship",
    "W": 75,
    "F": 0,
    "G": 0,
    "Time": 40
  },
  {
    "Unit": "Flaming Camel",
    "W": 0,
    "F": 75,
    "G": 30,
    "Time": 20
  },
  {
    "Unit": "Flemish Militia",
    "W": 0,
    "F": 60,
    "G": 25,
    "Time": 14
  },
  {
    "Unit": "Galleon",
    "W": 90,
    "F": 0,
    "G": 30,
    "Time": 36
  },
  {
    "Unit": "Galley",
    "W": 90,
    "F": 0,
    "G": 30,
    "Time": 60
  },
  {
    "Unit": "Gbeto",
    "W": 0,
    "F": 50,
    "G": 40,
    "Time": 17
  },
  {
    "Unit": "Genitour",
    "W": 35,
    "F": 50,
    "G": 0,
    "Time": 25
  },
  {
    "Unit": "Genoese Crossbowman",
    "W": 45,
    "F": 0,
    "G": 40,
    "Time": 18
  },
  {
    "Unit": "Halberdier",
    "W": 25,
    "F": 35,
    "G": 0,
    "Time": 22
  },
  {
    "Unit": "Hand Cannoneer",
    "W": 0,
    "F": 45,
    "G": 50,
    "Time": 34
  },
  {
    "Unit": "Heavy Camel Rider",
    "W": 0,
    "F": 55,
    "G": 60,
    "Time": 22
  },
  {
    "Unit": "Heavy Cavalry Archer",
    "W": 40,
    "F": 0,
    "G": 60,
    "Time": 27
  },
  {
    "Unit": "Heavy Demolition Ship",
    "W": 70,
    "F": 0,
    "G": 50,
    "Time": 31
  },
  {
    "Unit": "Heavy Scorpion",
    "W": 75,
    "F": 0,
    "G": 75,
    "Time": 30
  },
  {
    "Unit": "Huskarl",
    "W": 0,
    "F": 56,
    "G": 28,
    "Time": 16
  },
  {
    "Unit": "Hussar",
    "W": 0,
    "F": 80,
    "G": 0,
    "Time": 30
  },
  {
    "Unit": "Imperial Camel Rider",
    "W": 0,
    "F": 55,
    "G": 60,
    "Time": 20
  },
  {
    "Unit": "Imperial Skirmisher",
    "W": 35,
    "F": 25,
    "G": 0,
    "Time": 22
  },
  {
    "Unit": "Jaguar Warrior",
    "W": 0,
    "F": 60,
    "G": 30,
    "Time": 11
  },
  {
    "Unit": "Janissary",
    "W": 0,
    "F": 60,
    "G": 55,
    "Time": 17
  },
  {
    "Unit": "Kamayuk",
    "W": 0,
    "F": 60,
    "G": 30,
    "Time": 10
  },
  {
    "Unit": "Karambit Warrior",
    "W": 0,
    "F": 30,
    "G": 15,
    "Time": 6
  },
  {
    "Unit": "Keshik",
    "W": 0,
    "F": 60,
    "G": 40,
    "Time": 16
  },
  {
    "Unit": "Kipchak",
    "W": 60,
    "F": 0,
    "G": 35,
    "Time": 20
  },
  {
    "Unit": "Knight",
    "W": 0,
    "F": 60,
    "G": 75,
    "Time": 30
  },
  {
    "Unit": "Konnik",
    "W": 0,
    "F": 60,
    "G": 70,
    "Time": 19
  },
  {
    "Unit": "Leitis",
    "W": 0,
    "F": 70,
    "G": 50,
    "Time": 20
  },
  {
    "Unit": "Light Cavalry",
    "W": 0,
    "F": 80,
    "G": 0,
    "Time": 30
  },
  {
    "Unit": "Long Swordsman",
    "W": 0,
    "F": 60,
    "G": 20,
    "Time": 21
  },
  {
    "Unit": "Longboat",
    "W": 85,
    "F": 0,
    "G": 43,
    "Time": 25
  },
  {
    "Unit": "Longbowman",
    "W": 35,
    "F": 0,
    "G": 40,
    "Time": 18
  },
  {
    "Unit": "Magyar Huszar",
    "W": 0,
    "F": 80,
    "G": 10,
    "Time": 16
  },
  {
    "Unit": "Mameluke",
    "W": 0,
    "F": 55,
    "G": 85,
    "Time": 23
  },
  {
    "Unit": "Man-at-Arms",
    "W": 0,
    "F": 60,
    "G": 20,
    "Time": 21
  },
  {
    "Unit": "Mangonel",
    "W": 160,
    "F": 0,
    "G": 135,
    "Time": 46
  },
  {
    "Unit": "Mangudai",
    "W": 55,
    "F": 0,
    "G": 65,
    "Time": 26
  },
  {
    "Unit": "Militia",
    "W": 0,
    "F": 60,
    "G": 20,
    "Time": 21
  },
  {
    "Unit": "Missionary",
    "W": 0,
    "F": 0,
    "G": 100,
    "Time": 51
  },
  {
    "Unit": "Monk",
    "W": 0,
    "F": 0,
    "G": 100,
    "Time": 51
  },
  {
    "Unit": "Onager",
    "W": 160,
    "F": 0,
    "G": 135,
    "Time": 46
  },
  {
    "Unit": "Organ Gun",
    "W": 80,
    "F": 0,
    "G": 56,
    "Time": 21
  },
  {
    "Unit": "Paladin",
    "W": 0,
    "F": 60,
    "G": 75,
    "Time": 30
  },
  {
    "Unit": "Petard",
    "W": 0,
    "F": 65,
    "G": 20,
    "Time": 25
  },
  {
    "Unit": "Pikeman",
    "W": 25,
    "F": 35,
    "G": 0,
    "Time": 22
  },
  {
    "Unit": "Plumed Archer",
    "W": 44,
    "F": 0,
    "G": 44,
    "Time": 16
  },
  {
    "Unit": "Rattan Archer",
    "W": 50,
    "F": 0,
    "G": 45,
    "Time": 16
  },
  {
    "Unit": "Samurai",
    "W": 0,
    "F": 60,
    "G": 30,
    "Time": 9
  },
  {
    "Unit": "Scorpion",
    "W": 75,
    "F": 0,
    "G": 75,
    "Time": 30
  },
  {
    "Unit": "Scout Cavalry",
    "W": 0,
    "F": 80,
    "G": 0,
    "Time": 30
  },
  {
    "Unit": "Serjeant",
    "W": 0,
    "F": 60,
    "G": 35,
    "Time": 12
  },
  {
    "Unit": "Shotel Warrior",
    "W": 0,
    "F": 50,
    "G": 30,
    "Time": 8
  },
  {
    "Unit": "Siege Onager",
    "W": 160,
    "F": 0,
    "G": 135,
    "Time": 46
  },
  {
    "Unit": "Siege Ram",
    "W": 160,
    "F": 0,
    "G": 75,
    "Time": 36
  },
  {
    "Unit": "Siege Tower",
    "W": 200,
    "F": 0,
    "G": 160,
    "Time": 36
  },
  {
    "Unit": "Skirmisher",
    "W": 35,
    "F": 25,
    "G": 0,
    "Time": 22
  },
  {
    "Unit": "Slinger",
    "W": 0,
    "F": 30,
    "G": 40,
    "Time": 25
  },
  {
    "Unit": "Spearman",
    "W": 25,
    "F": 35,
    "G": 0,
    "Time": 22
  },
  {
    "Unit": "Steppe Lancer",
    "W": 0,
    "F": 70,
    "G": 40,
    "Time": 24
  },
  {
    "Unit": "Tarkan",
    "W": 0,
    "F": 60,
    "G": 60,
    "Time": 21
  },
  {
    "Unit": "Teutonic Knight",
    "W": 0,
    "F": 85,
    "G": 40,
    "Time": 12
  },
  {
    "Unit": "Throwing Axeman",
    "W": 0,
    "F": 55,
    "G": 25,
    "Time": 17
  },
  {
    "Unit": "Trade Cart",
    "W": 100,
    "F": 0,
    "G": 50,
    "Time": 51
  },
  {
    "Unit": "Trade Cog",
    "W": 100,
    "F": 0,
    "G": 50,
    "Time": 36
  },
  {
    "Unit": "Transport Ship",
    "W": 125,
    "F": 0,
    "G": 0,
    "Time": 46
  },
  {
    "Unit": "Trebuchet",
    "W": 200,
    "F": 0,
    "G": 200,
    "Time": 50
  },
  {
    "Unit": "Turtle Ship",
    "W": 152,
    "F": 0,
    "G": 180,
    "Time": 50
  },
  {
    "Unit": "Two-Handed Swordsman",
    "W": 0,
    "F": 60,
    "G": 20,
    "Time": 21
  },
  {
    "Unit": "Villager",
    "W": 0,
    "F": 50,
    "G": 0,
    "Time": 25
  },
  {
    "Unit": "War Elephant",
    "W": 0,
    "F": 200,
    "G": 75,
    "Time": 31
  },
  {
    "Unit": "War Galley",
    "W": 90,
    "F": 0,
    "G": 30,
    "Time": 36
  },
  {
    "Unit": "War Wagon",
    "W": 92,
    "F": 0,
    "G": 60,
    "Time": 21
  },
  {
    "Unit": "Woad Raider",
    "W": 0,
    "F": 65,
    "G": 25,
    "Time": 10
  },
  {
    "Unit": "Xolotl Warrior",
    "W": 0,
    "F": 60,
    "G": 75,
    "Time": 30
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
  constantsProvider.unitList = constantsProvider
    .unitCostTimeTable
    .map(unitCost => unitCost.Unit);

  constantsProvider.$get = function () {
    var getter = {};

    getter.unitCostTimeTable = constantsProvider.unitCostTimeTable;
    getter.collectionRate = constantsProvider.collectionRate;
    getter.unitList = constantsProvider.unitList;
    getter.source = constantsProvider.source;
    getter.lastUpdate = constantsProvider.lastUpdate;

    return getter;
  };

  return constantsProvider;

});
