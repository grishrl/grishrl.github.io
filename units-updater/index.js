const axios = require('axios');
const xray = require('x-ray')();
const fs = require('fs');
const { exit } = require('process');

units_data = {};
let tasks = 0;

tasks += 1;
axios
    .get('https://ageofempires.fandom.com/wiki/Unique_unit_(Age_of_Empires_II)')
    .then((response) => {
        xray(response.data, ['.article-table a@href'])(function(err, links) {
            links = links
                .filter(link => link.match(/^\//));
            tasks += links.length;
            links.forEach(link => {
                    axios
                    .get('https://ageofempires.fandom.com'+link)
                    .then((response) => {
                        xray(response.data, ['.WikiaArticle'])((err, content) => {
                            if (content.length && content[0].indexOf('Training') > -1 && content[0].indexOf('Unit information') > -1) {
                                xray(response.data, ['[role=region] h2[data-source=Name]'])(function(err, name) {
                                    if (name.length) {
                                        name = name[0];
                                        xray(response.data, ['[data-source=Wood] div'])(function(err, wood) {
                                            if (wood.length) {
                                                units_data[name].W = parseInt(wood[0]);
                                            }
                                        });
                                        xray(response.data, ['[data-source=Gold] div'])(function(err, gold) {
                                            if (gold.length) {
                                                units_data[name].G = parseInt(gold[0]);
                                            }
                                        });
                                        xray(response.data, ['[data-source=Food] div'])(function(err, food) {
                                            if (food.length) {
                                                units_data[name].F = parseInt(food[0]);
                                            }
                                        });
                                        xray(response.data, ['[data-source=TrainTime] div span'])(function(err, time) {
                                            if (time.length) {
                                                units_data[name].Time = parseInt(time[0]);
                                            } else {
                                                xray(response.data, ['[data-source=TrainTime] div'])(function(err, time) {
                                                    if (time.length) {
                                                        units_data[name].Time = parseInt(time[0].replace('seconds', ''));
                                                    }
                                                });
                                            }
                                        });
                                        units_data[name] = {
                                            "Unit" : name,
                                            "W" : 0,
                                            "F" : 0,
                                            "G" : 0,
                                            "Time" : 0,
                                        };
                                    }
                                    tasks -= 1;
                                });
                            } else {
                                tasks -= 1;
                            }
                        });
                    });
                });
            tasks -= 1;
        });
    });

tasks += 1;
axios
    .get('https://ageofempires.fandom.com/wiki/Units_(Age_of_Empires_II)')
    .then((response) => {
        xray(response.data, ['.mw-parser-output a@href'])(function(err, links) {
            links = links
                .filter(link => link.match(/^\//));
            tasks += links.length;
            links.forEach(link => {
                    axios
                    .get('https://ageofempires.fandom.com'+link)
                    .then((response) => {
                        xray(response.data, ['.WikiaArticle'])((err, content) => {
                            if (content.length && content[0].indexOf('Training') > -1 && content[0].indexOf('Unit information') > -1) {
                                xray(response.data, ['[role=region] h2[data-source=Name]'])(function(err, name) {
                                    if (name.length) {
                                        name = name[0];
                                        xray(response.data, ['[data-source=Wood] div'])(function(err, wood) {
                                            if (wood.length) {
                                                units_data[name].W = parseInt(wood[0]);
                                            }
                                        });
                                        xray(response.data, ['[data-source=Gold] div'])(function(err, gold) {
                                            if (gold.length) {
                                                units_data[name].G = parseInt(gold[0]);
                                            }
                                        });
                                        xray(response.data, ['[data-source=Food] div'])(function(err, food) {
                                            if (food.length) {
                                                units_data[name].F = parseInt(food[0]);
                                            }
                                        });
                                        xray(response.data, ['[data-source=TrainTime] div span'])(function(err, time) {
                                            if (time.length) {
                                                units_data[name].Time = parseInt(time[0]);
                                            } else {
                                                xray(response.data, ['[data-source=TrainTime] div'])(function(err, time) {
                                                    if (time.length) {
                                                        units_data[name].Time = parseInt(time[0].replace('seconds', ''));
                                                    }
                                                });
                                            }
                                        });
                                        units_data[name] = {
                                            "Unit" : name,
                                            "W" : 0,
                                            "F" : 0,
                                            "G" : 0,
                                            "Time" : 0,
                                        };
                                    }
                                    tasks -= 1;
                                });
                            } else {
                                tasks -= 1;
                            }
                        });
                    });
                });
            tasks -= 1;
        });
    });

const stopit = setInterval(() => {
    if (tasks === 0) {
        setTimeout(() => {
            units = Object.values(units_data);
            units.sort((a, b) => a.Unit.localeCompare(b.Unit));
            const trainTimeproblems = units.map(unit => {
                if (unit.Time === 0) {
                    return unit.Unit;
                } else {
                    return null;
                }
            }).filter(unit => unit !== null);
            if (trainTimeproblems.length > 0) {
                console.log('Could not complete task. These units have an incorrect Training time : ', trainTimeproblems);
                exit(-1);
            } else {
                let constantsCrawlTemplate = fs.readFileSync('./constants-crawl-template.js').toString();
                constantsCrawlTemplate = constantsCrawlTemplate.replace('\'UNITS COST PLACEHOLDER\'', JSON.stringify(units, null, 2));
                constantsCrawlTemplate = constantsCrawlTemplate.replace('LAST UPDATE PLACEHOLDER', new Date().toISOString());
                fs.writeFileSync('./constants.js', constantsCrawlTemplate);
                console.log('finished');
            }
        }, 1000);
        clearInterval(stopit);
    }
}, 1000);
