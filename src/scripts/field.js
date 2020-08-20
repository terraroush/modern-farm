export const field = [];

export const addPlant = (seedObj) => {
    field.push(seedObj);
}

export const usePlants = () => {
    field.slice();
}