export const loaderUpdate = "UPDATE-LOADER-BAR"; // This types have to be unique name

export const updateLoader = show => ({
  type: loaderUpdate,
  payload: show
});

export default updateLoader;
