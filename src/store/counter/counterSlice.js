import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    mutiply: (state, action) => {
      if (state.value == 0) {
        console.log("Please increase by 1 then try again.");
      } else {
        state.value *= action.payload;
      }
    }
  },
})

export const { increment, decrement, incrementByAmount, mutiply } = counterSlice.actions

export default counterSlice.reducer