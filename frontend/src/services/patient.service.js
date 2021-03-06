import axios from 'axios';
import { toast } from 'react-toastify';

export const getAll = async (loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/patient`,
    config
  );
  return data;
};

export const getById = async (id, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/patient/${id}`,
      config
    );
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.PUBLIC_URL}/api/patient`,
      patientData,
      config
    );
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.PUBLIC_URL}/api/patient/${patientData.id}`,
      patientData,
      config
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.PUBLIC_URL}/api/patient/${patient.id}/healthRecord`,
      { ...healthRecordData, patientVersion: patient.__v },
      config
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const actionStatus = currentStatus === 'active' ? 'inactivate' : 'activate';
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/patient/${id}/${actionStatus}`,
      config
    );
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.PUBLIC_URL}/api/patient/?status=active&filterBy=${filter}`,
      config
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

export const getVisits = async ({ patientId, startDate, endDate }, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  let filterDates = '';
  if (startDate && endDate) {
    filterDates = `?startDate=${startDate}&endDate=${endDate}`
  }
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/patient/${patientId}/visit${filterDates}`,
    config
  );
  return data;
};

export const saveVisit = async (patient, visitData, loggedUser) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.post(
      `${process.env.PUBLIC_URL}/api/patient/${patient.id}/visit`,
      { ...visitData, patientVersion: patient.__v },
      config
    );
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
    const config = {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.PUBLIC_URL}/api/patient/${patient.id}/visit`,
      { ...visitData, patientVersion: patient.__v },
      config
    );
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

export const getPrescriptions = async ({ patientId, startDate, endDate }, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  let pagination = '';
  if (pagination) {
    pagination = `?pagination=${startDate}&endDate=${endDate}`
  }
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/patient/${patientId}/prescription`,
    config
  );
  return data;
};

export const getLaboratoryExams = async ({ patientId, startDate, endDate }, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  let filterDates = '';
  if (startDate && endDate) {
    filterDates = `?startDate=${startDate}&endDate=${endDate}`
  }
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/patient/${patientId}/laboratoryExam`,
    config
  );
  return data;
};

export const saveLaboratoryExam = async (patient, laboratoryExamData, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.post(
    `${process.env.PUBLIC_URL}/api/patient/${patient.id}/laboratoryExam`,
    { ...laboratoryExamData, patientVersion: patient.__v },
    config
  );
  toast.success('Examen de laboratorio dado de alta con éxito.', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  return data;
};

export const getStudy = async ({ patientId, startDate, endDate }, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  let filterDates = '';
  if (startDate && endDate) {
    filterDates = `?startDate=${startDate}&endDate=${endDate}`
  }
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/patient/${patientId}/studyExam`,
    config
  );
  return data;
};

export const saveStudy = async (patient, studyExamData, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.post(
    `${process.env.PUBLIC_URL}/api/patient/${patient.id}/studyExam`,
    { ...studyExamData, patientVersion: patient.__v },
    config
  );
  toast.success('Estudio complementario dado de alta con éxito.', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
  return data;
};

export const getHealthRecordHistory = async ({ patientId, page, limit, filter }, loggedUser) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loggedUser?.token}`,
    },
  };
  const { data } = await axios.get(
    `${process.env.PUBLIC_URL}/api/patient/${patientId}/healthRecordHistory?page=${page}&limit=${limit}&filter=${filter}`,
    config
  );
  return data;
};