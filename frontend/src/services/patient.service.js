import axios from 'axios';

export const getAll = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/patients.json`);
};
