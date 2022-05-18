import { getDatabase, ref, set } from 'firebase/database';

import { getFirebaseApp } from '../config/firebase.js';

const notifyNewAppointment = (appointmentData) => {
  try {
    if (appointmentData.doctor.user?.username) {
      const database = getDatabase(getFirebaseApp());
      set(ref(database, `notifications/appointments/${appointmentData.doctor.user ?.username}/${new Date(appointmentData.start).getTime()}`), {
          description: `Tienes un nuevo turno con el paciente ${appointmentData.patient.firstName} ${appointmentData.patient.lastName} el día ${new Date(appointmentData.start).toLocaleString(
            'es',
            {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }
          )} hs`,
      });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    // process.exit(1);
  }
};

export default notifyNewAppointment;
