import { loaderUpdate, loaderUpdateRefresh } from "../action/globalsActions";

const globals = {
  loader: false,
  loaderRefresh: false,
  headers: { headers: { "Content-Type": "application/json" } }
};

function reducer(state = globals, { type, payload }) {
  switch (type) {
    case loaderUpdate: {
      return { ...state, loader: payload };
    }
    case loaderUpdateRefresh: {
      return { ...state, loaderRefresh: payload };
    }
    default: {
      return state;
    }
  }
}
export default reducer;
