import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cartactive',
    initialState: {
        active: null,
    },
    reducers: {
        isActive: (state) => {
            state.active = true
        },
        isInactive: (state) => {
            state.active = false
        }
    }
})

export const { isActive, isInactive } = cartSlice.actions

export default cartSlice.reducer