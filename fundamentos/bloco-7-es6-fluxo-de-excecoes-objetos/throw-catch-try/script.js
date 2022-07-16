// const sum = (value1, value2) => typeof value1 !== 'number' || typeof value2 !== 'number' ? 'Os valores precisam ser numericos' : value1 + value2;

// console.log(sum(5,3));

const verifyIsNumber = (value1, value2) => {
    if(typeof value1 !== 'number' || typeof value2 !== 'number'){
        throw new Error('Os valores precisam ser numericos');
    }
};

const sum = (value1, value2) => {
    try {
        verifyIsNumber (value1, value2)
            return value1 + value2;
        } catch (error) {
            return error.message;
        }
};

console.log(sum(2, 3));