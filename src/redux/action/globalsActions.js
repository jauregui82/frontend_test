export const loaderUpdate = "UPDATE-LOADER-BAR";
export const loaderUpdateRefresh = "UPDATE-LOADER-REFRESH";

export const updateLoader = show => ({
  type: loaderUpdate,
  payload: show
});
export const updateLoaderRefresh = show => ({
  type: loaderUpdateRefresh,
  payload: show
});
