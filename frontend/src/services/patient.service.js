import { toast } from 'react-toastify';

import { backendApi } from './axios.service';

export const getAll = async (loggedUser) => {
  const { data } = await backendApi.get(`/patient`);
  return data;
};

export const getById = async (id, loggedUser) => {
  try {
    const { data } = await backendApi.get(`/patient/${id}`);
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener los datos del paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};

export const save = async (patientData, loggedUser) => {
  try {
    const { data } = await backendApi.post(`/patient`, patientData);
    toast.success('Paciente dado de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al dar de alta al Paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const update = async (patientData, loggedUser) => {
  try {
    const { data } = await backendApi.put(
      `/patient/${patientData.id}`,
      patientData
    );
    toast.success('Paciente actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al actualizar al paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const updateHealthRecord = async (
  patient,
  healthRecordData,
  loggedUser
) => {
  try {
    const { data } = await backendApi.put(
      `/patient/${patient.id}/healthRecord`,
      { ...healthRecordData, patientVersion: patient.__v }
    );
    toast.success('Paciente actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al actualizar al paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const changeStatus = async (id, currentStatus, loggedUser) => {
  try {
    const actionStatus = currentStatus === 'active' ? 'inactivate' : 'activate';
    const { data } = await backendApi.get(`/patient/${id}/${actionStatus}`);
    toast.success('El estado del paciente se ha actualizado con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al actualizar al paciente. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const getPatientsByFilter = async (filter, loggedUser) => {
  try {
    const { data } = await backendApi.get(
      `/patient/?status=active&filterBy=${filter}`
    );
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al intentar obtener los datos del registro. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }
};

export const getVisits = async (
  { patientId, startDate, endDate },
  loggedUser
) => {
  let filterDates = '';
  if (startDate && endDate) {
    filterDates = `?startDate=${startDate}&endDate=${endDate}`;
  }
  const { data } = await backendApi.get(
    `/patient/${patientId}/visit${filterDates}`
  );
  return data;
};

export const saveVisit = async (patient, visitData, loggedUser) => {
  try {
    const { data } = await backendApi.post(`/patient/${patient.id}/visit`, {
      ...visitData,
      patientVersion: patient.__v,
    });
    toast.success('Consulta dada de alta con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al dar de alta la consulta. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const updateVisit = async (patient, visitData, loggedUser) => {
  try {
    const { data } = await backendApi.put(`/patient/${patient.id}/visit`, {
      ...visitData,
      patientVersion: patient.__v,
    });
    toast.success('Consulta actualizada con éxito.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return data;
  } catch (err) {
    const errorMsg =
      err.response && err.response.data ? err.response.data : err.message;
    toast.error(
      `Ocurrió un error al actualizar la consulta. Detalle: ${errorMsg}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
    throw err;
  }
};

export const getPrescriptions = async (
  { patientId, startDate, endDate },
  loggedUser
) => {
  let pagination = '';
  if (pagination) {
    pagination = `?pagination=${startDate}&endDate=${endDate}`;
  }
  const { data } = await backendApi.get(`/patient/${patientId}/prescription`);
  return data;
};

export const getLaboratoryExams = async (
  { patientId, startDate, endDate },
  loggedUser
) => {
  let filterDates = '';
  if (startDate && endDate) {
    filterDates = `?startDate=${startDate}&endDate=${endDate}`;
  }
  const { data } = await backendApi.get(`/patient/${patientId}/laboratoryExam`);
  return data;
};

export const saveLaboratoryExam = async (
  patient,
  laboratoryExamData,
  loggedUser
) => {
  const { data } = await backendApi.post(
    `/patient/${patient.id}/laboratoryExam`,
    { ...laboratoryExamData, patientVersion: patient.__v }
  );
  toast.success('Examen de laboratorio dado de alta con éxito.', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  return data;
};

export const getStudy = async (
  { patientId, startDate, endDate },
  loggedUser
) => {
  let filterDates = '';
  if (startDate && endDate) {
    filterDates = `?startDate=${startDate}&endDate=${endDate}`;
  }
  const { data } = await backendApi.get(`/patient/${patientId}/studyExam`);
  return data;
};

export const saveStudy = async (patient, studyExamData, loggedUser) => {
  const { data } = await backendApi.post(`/patient/${patient.id}/studyExam`, {
    ...studyExamData,
    patientVersion: patient.__v,
  });
  toast.success('Estudio complementario dado de alta con éxito.', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  return data;
};

export const getHealthRecordHistory = async (
  { patientId, page, limit, filter },
  loggedUser
) => {
  const { data } = await backendApi.get(
    `/patient/${patientId}/healthRecordHistory?page=${page}&limit=${limit}&filter=${filter}`
  );
  return data;
};
