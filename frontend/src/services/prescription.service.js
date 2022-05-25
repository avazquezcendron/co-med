import axios from 'axios';
import * as entityService from './entity.service';

export const getAll = async (loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/prescription?frequents=true`, config);
  return data;
};

export const save = (entityData, loggedUser) => {
  return entityService.save('prescription', entityData, loggedUser);
};