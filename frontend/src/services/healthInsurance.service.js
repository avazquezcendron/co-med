import axios from 'axios';

export const getAll = async (loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  return await axios.get(
    `${process.env.PUBLIC_URL}/api/healthInsurance`,
    config
  );
};
