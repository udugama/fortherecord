export const isSquare = (number: number) => {
    return number > 0 && Math.sqrt(number) % 1 === 0;
};

export const isFibonacci = (value: number) => {
    if (isSquare(5*(value*value)-4) || isSquare(5*(value*value)+4)) {
       return true;
    } else {
       return false;
    }
};