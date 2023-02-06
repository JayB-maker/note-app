const baseUrl = "https://dropper-api-core.herokuapp.com/api/v1";
// const baseUrl = "https://api.dropper.africa/api/v1";

export const apiUrls = {
  logIn: `${baseUrl}/auth/login`,
  changePassword: `${baseUrl}/auth/password/change/`,
  getUser: `${baseUrl}/auth/me`,
  getStates: `${baseUrl}/order/states`,
  getDrops: `${baseUrl}/dropper/drops`,
  getBalance: `${baseUrl}/dropper`,
  createDrops: `${baseUrl}/dropper/drop/create`,
  uploadImage: `${baseUrl}/media/upload/image`,
  getSingleDrop: (dropId?: string) => `${baseUrl}/dropper/drop/${dropId}`,
  getCity: (stateId?: string) => `${baseUrl}/order/state/${stateId}/lgas`,
  // editCategory: (categoryId: string) => `${baseUrl}/categories/${categoryId}`,
  // deleteCategory: (categoryId: string) =>
  // `${adminUrl}/categories/${categoryId}`,
};


export const apiQueryMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};
