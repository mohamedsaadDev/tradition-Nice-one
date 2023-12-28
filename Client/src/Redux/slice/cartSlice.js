import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartitems:localStorage.getItem("cartItems")?
        JSON.parse(localStorage.getItem("cartItems")):
        []
    },
    reducers:{
        addtocart(state, action){
            const newItem = action.payload;
            const isExistcart = state.cartitems.find((cartitem) => cartitem._id === newItem._id);
            if(isExistcart) {
                state.cartitems = state.cartitems
                .map((item) =>item._id === newItem._id? { ...item, quantity: item.quantity + 1 }: item);
            }else{
                state.cartitems = [...state.cartitems,newItem]
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartitems));
        },
        decrease(state, action){
            const newItem = action.payload; 
            const isExistcart = state.cartitems.find((cartitem) => cartitem.id === newItem.id);
            if(isExistcart) {
                state.cartitems = state.cartitems
                .map((item) =>item.id === newItem.id? { ...item, quantity: item.quantity -1 }:item);
            }
        },
        removeitem(state, action){
            state.cartitems = state.cartitems.filter(item => item._id !== action.payload)
            localStorage.removeItem('cartItems');
        },
        removecart(state){
            state.cartitems = []
            console.log('Removing done')
        }
    }
}
)
export const cartaction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
/* updateQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
      //const {quantity } = action.payload;
                //isExistcart.quantity = quantity;
                //state.cartitems = [...state.cartitems,newItem]
                //state.cartitems = state.cartitems.map(item => item.quantity === newItem.quantity ? newItem : item)
                //isExistcart.quantity.quantity
      */