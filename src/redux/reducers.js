
export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return !state.isLoggedIn;
    default:
      return state;
  }
};
