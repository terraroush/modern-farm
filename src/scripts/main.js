import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { plantSeeds } from "./tractor.js"


const yearlyPlan = createPlan();
// console.log(yearlyPlan);

const potatoSeed = createPotato();
addPlant(potatoSeed)
usePlants();
console.log(addPlant(potatoSeed));

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

console.log(asparagusSeed);



