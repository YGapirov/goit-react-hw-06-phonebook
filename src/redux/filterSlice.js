export const filterPhone = value => {
  return {
    type: 'filters/filterPhone',
    payload: value,
  };
};

const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  //приймає попередній стан, і дію
  switch (
    action.type //тип дії
  ) {
    case 'filters/filterPhone':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
