const  storedInLS = (id) => {
    let myDB = {}
    let currentCartItem = JSON.parse(localStorage.getItem('cartItem'))
    if(currentCartItem){
         if(currentCartItem[id]){
             currentCartItem[id]+=1
         } else{
             currentCartItem[id] = 1
         }
         localStorage.setItem('cartItem', JSON.stringify(currentCartItem))
    } else{
         myDB[id] = 1
         localStorage.setItem('cartItem', JSON.stringify(myDB))
    }
 };

 const getFromLS =  async () => {
    let res = await fetch('http://localhost:1000/products')
    let products = await res.json()

    let storedData = JSON.parse(localStorage.getItem('cartItem'))
    // console.log(storedData);
    let storedProducts = []
    for (const id in storedData){
        let existProduct = products.find(pd => pd._id === id)
        if(existProduct){
            existProduct.quantity = storedData[id]
            storedProducts.push(existProduct)
        } 
    }
    return storedProducts
}  

const clearLS = ()=>{
     localStorage.removeItem('cartItem')
}

export {storedInLS, getFromLS, clearLS}