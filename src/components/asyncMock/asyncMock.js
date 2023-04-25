const products = [
    {
        id: '1',
        name: 'Samsung S22',
        price: 1000,
        category: 'celular',
        img:'./src/components/S22.png',
        stock: 25,
        description:'Descripcion de Samsung S22'
    },
    {id: '2', name: 'Tablet Samsung', price: 800, category: 'tablet', img: './src/components/tablet.png' , stock:20, description: 'Descripcion Samsung A7'},
    {id: '3', name: 'Laptop', price: 1200, category: 'Laptop', img:'./src/components/Laptop.png', stock:15, description: 'Descripcion Laptop'},
];

export const getProducts = () => {
    return new Promise ((resolve) => {        
    setTimeout (() => {
        resolve(products)
        }, 500)
    }) 
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => { 
        resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};

