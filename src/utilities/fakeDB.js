import React from 'react';

export const  fakeDB = (id) => {
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