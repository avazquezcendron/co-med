import axios from 'axios';

let patients = [];
axios
  .get(`${process.env.PUBLIC_URL}/api/patients.json`)
  .then((res) => (patients = res.data));

export const getAllPatients = () => {
  return patients;
};