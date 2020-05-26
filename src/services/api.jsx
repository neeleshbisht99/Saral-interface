import axios from 'axios';

const host = 'http://localhost:4000/api';

export const call = async (method, path, data) => {
  try {
    const response = await axios[method](`${host}/${path}`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default { call };
