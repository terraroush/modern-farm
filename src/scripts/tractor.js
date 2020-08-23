import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js";

export const plantSeeds = (planArr) => {
    for(const planRows of planArr) {
        for(const row of planRows) {

            if( row === "Potato") {
                const potatoSeed = createPotato();
                addPlant(potatoSeed);
            } else if( row === "Wheat") {
                const wheatSeed = createWheat();
                addPlant(wheatSeed);
            } else if( row === "Soybean") {
                const soybeanSeed = createSoybean();
                addPlant(soybeanSeed);
            } else if( row === "Sunflower") {
                const sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed);
            } else if( row === "Asparagus") {
                const asparagusSeed = createAsparagus();
                addPlant(asparagusSeed);
            } else if( row === "Corn") {
                const cornSeed = createCorn();
                addPlant(cornSeed[0]);
                addPlant(cornSeed[1]);
            }
        }
    }
}
