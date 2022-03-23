
interface Params{
    size:string,
    toppings: string[]
}
interface IPizza{
    size:string,
    addToppings(topping:string):void
}

class Pizza implements IPizza{
public size:string
private toppings: string[]

    constructor({size, toppings=[]}:Params){
        this.size = size
        this.toppings = toppings
    }
private validateToppings(toppings:string):boolean{
    console.log(toppings)
    return true
}
public addToppings(topping:string){
    console.log(this.validateToppings(topping))
    this.toppings.push(topping)
}
}
const pizza = new Pizza({size: 'medium', toppings:['cheese']})
console.log(pizza)
pizza.addToppings('some')

export {}