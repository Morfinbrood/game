const AIMonsterUnit = require('./AIMonsterUnit');

const arrayOfPlayerUnits = [{ hp: 10 }, { hp: -23 }, { hp: 0 }, { hp: 100 }];
const arrayOfMosnterUnits = [{ hp: 10 }, { hp: -23 }, { hp: 0 }];

const abilities = {
	fireball: { damage: 10 },
	bash: { damage: 0 },
	heal: { damage: -20 }
};

const AITurn = AIMonsterUnit.generateAITurn(arrayOfPlayerUnits, arrayOfMosnterUnits, abilities);
console.log(AITurn);

// this is example for Node.js
// write in console or terminal 
// node example.js
