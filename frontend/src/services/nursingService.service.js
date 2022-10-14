import { backendApi } from './axios.service';

export const getAll = async (entity, loggedUser, currentMonth, currentYear) => {
    const { data } = await backendApi.get(`/nursingService?month=${currentMonth}&year=${currentYear}`);
    return data;
  };