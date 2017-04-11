export default (state = null, action) => {
  switch (action.typ) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
