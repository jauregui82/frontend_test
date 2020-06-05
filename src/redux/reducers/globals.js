import {
  loaderUpdate,
  loaderUpdateRefresh,
  openCloseModalCopy,
  openCloseModalAlert,
  contentModalAlert
} from "../action/globalsActions";

const globals = {
  loader: false,
  loaderRefresh: false,
  modalCopy: false,
  modalAlert: false,
  contentAlert: {
    title: "prueba",
    subTitle: "prueba",
    actionAcept: "",
    actionCancel: "",
    actionNameAcept: "",
    actionNameCancel: "",
    claseAcept: "",
    claseCancel: "",
    textAcept: "acept",
    textCancel: "cancel"
  },
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
    case openCloseModalCopy: {
      return { ...state, modalCopy: payload };
    }
    case openCloseModalAlert: {
      return { ...state, modalAlert: payload };
    }
    case contentModalAlert: {
      return { ...state, contentAlert: payload };
    }
    default: {
      return state;
    }
  }
}
export default reducer;
