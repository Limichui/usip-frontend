import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/product/productSlice.js'
import formReducer from './features/form/formSlice.js'
// import userReducer from './features/user/userDlice.js'
// import userProduct from './features/user/userProduct.js'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        form: formReducer,
        // user: userReducer,
        // product: userProduct,
    },
});

export default store;