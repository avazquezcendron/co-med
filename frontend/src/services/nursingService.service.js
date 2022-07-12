import axios from 'axios';

export const getAll = async (entity, loggedUser, currentMonth, currentYear) => {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/nursingService?month=${currentMonth}&year=${currentYear}`, config);
    return data;
  };