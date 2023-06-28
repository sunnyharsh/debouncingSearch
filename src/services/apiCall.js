import Axios from "axios";

let callAPI = async ({ url, method }) => {
  return await Axios({
    url,
    method,
  });
};

export default callAPI;
