import { loaderUpdate } from "../action/globalsActions";
  
  const globals = {
    loader: false,
    headers: { headers: { 'Content-Type': 'application/json' } },
  };
  
  function reducer(state = globals, { type, payload }) {
    switch (type) {
      case loaderUpdate: {
        return { ...state, loader: payload };
      }
      default: {
        return state;
      }
    }
  }
  export default reducer;
  