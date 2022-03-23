
type addFn =(a: number, b:number)=> number

interface IAddFn {
    (a: number, b:number):number
}

const addExpression:addFn = function (x, y){
    return x+y
}
const multipleExpression:IAddFn = function (x, y){
    return x*y
}

type otherFn = (a:number, b:number, c:number, ...restParams:number[])=>number
const otherExpression:otherFn =  (a, b, c, ...restParams)=>{
    return a
}

type logFn = (a:string)=>void

const logFunction:logFn = (message)=>{
    console.log(message)
    return 6
}
enum PizzaSize{
    Small = 's',
    Medium = 'm',
    Large = 'l'
}
interface IPizza{
    size: PizzaSize.Small|PizzaSize.Medium|PizzaSize.Large,
    toppings: string[],
    // logSize:()=> void
    logSize():void,
    getSize():string,
    addToppings(toppings:string):void
}
const pizza:IPizza={
    size: PizzaSize.Small,
    toppings: ['sause', 'mushrooms'],
    logSize(){
        console.log(this.size)
    },
    getSize(){
        return this.size
    },
    addToppings(toppings){
        this.toppings.push(toppings)
    },
}


addExpression(2, 1)
multipleExpression(2, 5)
otherExpression(2,4,5,6,7,78)

logFunction('hello')

export{}