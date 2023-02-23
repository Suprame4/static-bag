const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(25)
        expect(bag.weight).toBe(25)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })

    //if the bag has weight greater than 23kg 
    test('weight of bag is greater than 23 kg return an error', () => {
        const bag1 = new Bag(20)
        expect(bag1.weight).toBeLessThan(23)
    })
})