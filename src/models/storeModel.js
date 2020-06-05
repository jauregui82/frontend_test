import Model from "./Model";

export default class StoreModels extends Model {
  constructor(globals) {
    super();
    this.headers = globals.headers.headers;
  }

  getData = async (link = "") => {
    let url = `${this.baseUrl}${link}`;
    let response = { data: {} };
    try {
      response = await this.get(url, this.headers);
    } catch (e) {
      console.error(e);
    }
    return response.data;
  };

  postData = async (data, link = "") => {
    let url = `${this.baseUrl}${link}`;
    let response = { status: 400 };
    try {
      response = await this.post(url, data, this.headers);
    } catch (e) {
      console.error(e);
    }
    return response;
  };
  deleteData = async data => {
    let url = `${this.baseUrl}`;
    let response = { status: 400 };
    try {
      response = await this.deleteBody(url, data, this.headers);
    } catch (error) {
      console.error(error);
      return response;
    }
    return response;
  };

} //End class
