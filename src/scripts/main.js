import { createPlan } from './plan.js';
import { createAsparagus } from "./seeds/asparagus.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { field } from "./field.js";


const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusSeed = createAsparagus();
// console.log(asparagusSeed);
const soybeanSeed = createSoybean();
// console.log(soybeanSeed);
const sunflowerSeed = createSunflower();
// console.log(sunflowerSeed);
const wheatSeed = createWheat();
// console.log(wheatSeed);
const potatoSeed = createPotato();
// console.log(potatoSeed);
const cornSeed = createCorn();
// console.log(cornSeed);

