import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Home'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open } = cartSlice.actions
export default cartSlice.reducer
