const noop = () => {};

const pickRandomElement = <T>(array: Array<T>): T =>
    array[Math.floor(Math.random() * array.length)];

const arrayDifference = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> =>
    arr1.filter((elem) => !arr2.includes(elem));

export { noop, pickRandomElement, arrayDifference };
