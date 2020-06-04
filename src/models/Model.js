import axios from "axios";
/** *
Base Parent Model, "All sub clases models have to extends from this class"
*/
class Model {
  /** *
  Method: Constructor
  Definition: Here declare base url Apis for propagate to all extends classes
  */
  constructor() {
    this.baseUrl = `/api/v1/counter/`;
  }

  /** *
  Method: Get
  Param: url, null
  Return: Result [] or reject error
  */
  get = (url, headers) =>
    new Promise((resolve, reject) => {
      axios
        .get(url, headers)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });

  /** *
  Method:Post
  Param: url, []
  Return: Result [] or reject error
  */
  post = (url, argument = [], headers) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, argument, headers)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });

  /** *
  Method: Put
  Param: url, []
  Return: Result [] or reject error
  */
  put = (url, argument = [], headers) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, argument, this.headers)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });

  /** *
  Method: Delete
  Params: url, null
  Return: Result [] or reject error
  */
  delete = (url, headers) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url, headers)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });

  deleteBody = (url, data, headers) => {
    return fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        return response;
      });
  };
} // End class

export default Model;
