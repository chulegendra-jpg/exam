let products = [
    Laptop = {
        name: 'asus',
        price: 375000000,
        category: 'electronic'
    },
    Phone = {
        name: 'xiaomi',
        price: '95000000',
        category: 'electronic'
    },
    Headphone = {
        name: 'anker',
        price: 20000000,
        category: 'electronic'
    }
]

products.push(Watch = {
    name: 'slazenger',
    price: 10000000,
    category: 'electronic'
})

products.shift()

let x = 375000000 + 95000000 + 20000000 + 10000000

let shop = {
    name : 'matin',
    products : products,
    address : {
        city : 'tehran',
        pelak : 618
    }
}
