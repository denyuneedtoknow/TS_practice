const firstArray: (number | string)[] = [5, 19, 23, 15, -4]
const secondtArray: Array<number> = [5, 19, 23, 15, -4]
const thirdArray: readonly (number | string)[] = [5, 19, 23, 15, -4]
firstArray.push('some')
secondtArray.push(16)// wouldn't work
// thirdArray.push(16)
const coords: [number, number] = [50.5213, 65.6443,]

coords.push(55.3333)

console.log(firstArray, secondtArray, thirdArray, coords)
export { }