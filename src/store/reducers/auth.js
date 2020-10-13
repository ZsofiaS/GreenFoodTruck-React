const initialState = {
  token: '',
  user: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.token,
        user: action.user,
      };
    case 'SIGNUP':
      return {
        token: action.token,
        user: action.user,
      };
    default:
      return state;
  }
};
