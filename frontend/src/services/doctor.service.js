import axios from 'axios';
import * as entityService from './entity.service';

export const getAll = (loggedUser) => {
  return entityService.getAll('doctor', loggedUser);
};

export const getById = (id, loggedUser) => {
  return entityService.getById('doctor', id, loggedUser);
};

export const save = (entityData, loggedUser) => {
  return entityService.save('doctor', entityData, loggedUser);
};

export const update = (entityData, loggedUser) => {
  return entityService.update('doctor', entityData, loggedUser);
};

export const changeStatus = (id, currentStatus, loggedUser) => {
  return entityService.changeStatus('doctor', id, currentStatus, loggedUser);
};