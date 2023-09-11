const noop = () => {};

const pickRandomElement = <T>(array: Array<T>): T =>
    array[Math.floor(Math.random() * array.length)];

export { noop, pickRandomElement };
