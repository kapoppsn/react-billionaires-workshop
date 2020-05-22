export const divide = (x, y) => {
    if(y === 0) {
        throw Error('Cannot devide by 0')
    }
    return x/y
}