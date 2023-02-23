class Bag {
    //add a static property for max weight
    static MAX_WEIGHT = 23

    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        
        if(weight > this.MAX_WEIGHT){
            throw new Error("bag exceeds max weight (23kg)")
        }

        this.weight = weight
    }
    //test
}
const bag1 = new Bag(20)

console.log("test 1 ", Bag.MAX_WEIGHT)

module.exports = Bag