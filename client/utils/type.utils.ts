export const isString = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object String]';
}

export const isNumber = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object Number]';
}
