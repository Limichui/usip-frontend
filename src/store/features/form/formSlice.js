import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formLogin: {
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-LIMBERT'
    },
    inputsDisabled: false //Variable de estado global para habilitar/deshabilitar los campos del formulario
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setInitialValue: (state, action) => {
            state.formLogin = action.payload
        },
        clearFormData: (state) => {
            state.formLogin = { 
                username: '', 
                email: '', 
                password: '', 
                module: '' 
            };
        },
        setInputsDisabled: (state, action) => {
            state.inputsDisabled = action.payload; // Cambiar el valor de inputsDisabled
        }
    },
})

export const { setInitialValue, clearFormData, setInputsDisabled } = formSlice.actions

export default formSlice.reducer