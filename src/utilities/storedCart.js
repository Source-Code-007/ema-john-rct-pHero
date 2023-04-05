export const storedCart =  async () => {
    let res = await fetch('products.json')
    let products = await res.json()

    let storedData = JSON.parse(localStorage.getItem('cartItem'))
    // console.log(storedData);
    let storedProducts = []
    for (const id in storedData){
        let existProduct = products.find(pd => pd.id === id)
        if(existProduct){
            existProduct.quantity = storedData[id]
            storedProducts.push(existProduct)
        } 
    }
    return storedProducts
}  