
const fieldArr = [];

export const addPlant = (seedObj) => {
    fieldArr.push(seedObj);
}

export const usePlants = () => {
    return fieldArr.slice();
}

// console.log(fieldArr);
