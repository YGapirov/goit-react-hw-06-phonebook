import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    filterPhone(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterPhone } = filterSlice.actions;

// import { createAction, createReducer } from '@reduxjs/toolkit';

// const initialState = {
//   filter: '',
// };

// //екшини
// export const filterPhone = createAction('filters/filterPhone');

// export const filterReducer = createReducer(initialState, builder => {
//   builder.addCase(filterPhone, (state, action) => {
//     state.filter = action.payload;
//   });
// });
