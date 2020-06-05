export const loaderUpdate = "UPDATE-LOADER-BAR";
export const loaderUpdateRefresh = "UPDATE-LOADER-REFRESH";
export const openCloseModalCopy = "UPDATE-OPEN-CLOSE-MODAL-COPY";
export const openCloseModalAlert = "UPDATE-OPEN-CLOSE-MODAL-ALERT";
export const contentModalAlert = "CONTENT-MODAL-ALERT";

export const updateLoader = show => ({
  type: loaderUpdate,
  payload: show
});
export const updateLoaderRefresh = show => ({
  type: loaderUpdateRefresh,
  payload: show
});
export const modalCopy = show => ({
  type: openCloseModalCopy,
  payload: show
});
export const modalAlert = show => ({
  type: openCloseModalAlert,
  payload: show
});
export const modalAlertContent = objData => ({
  type: contentModalAlert,
  payload: objData
});
