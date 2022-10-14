import { backendApi } from './axios.service';
import * as entityService from './entity.service';

export const getAll = async (loggedUser) => {
  const { data } = await backendApi.get(`/prescription?frequents=true`);
  return data;
};

export const save = (entityData, loggedUser) => {
  return entityService.save('prescription', entityData, loggedUser);
};