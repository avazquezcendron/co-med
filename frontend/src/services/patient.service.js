import axios from 'axios';

export const getAll = () => {
  return axios.get(`${process.env.PUBLIC_URL}/api/patients.json`);
};

export const savePatient = async (patientData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${userInfo.token}`,
    },
  };

  return await axios.post('/api/patient', patientData, config);
};
