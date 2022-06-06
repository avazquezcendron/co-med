import { getDatabase, ref, set } from 'firebase/database';
import axios from 'axios';

import { getFirebaseApp } from '../config/firebase.js';

const notifyNewAppointment = async (appointmentData) => {
  try {
    if (appointmentData.doctor.user?.username) {
      const database = getDatabase(getFirebaseApp());
      set(
        ref(
          database,
          `notifications/appointments/${
            appointmentData.doctor.user?.username
          }/${new Date(appointmentData.start).getTime()}`
        ),
        {
          description: `Tienes un nuevo turno con el paciente ${
            appointmentData.patient.firstName
          } ${appointmentData.patient.lastName} el día ${new Date(
            appointmentData.start
          ).toLocaleString('es', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })} hs`,
        }
      );
    }
    // TODO: wasap notification
    // if (appointmentData.patient.phoneNumber) {
    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${process.env.WASAP_MESSAGE_TOKEN}`,
    //       'Content-Type': 'application/json',
    //     },
    //   };
    //   const messageData = {
    //     messaging_product: 'whatsapp',
    //     to: `54${appointmentData.patient.phoneNumber}`,
    //     type: 'template',
    //     template: { name: 'new_appointment', language: { code: 'es_AR' } },
    //     components: [
    //       {
    //         type: 'header',
    //         parameters: [
    //           {
    //             type: 'text',
    //             text: appointmentData.patient.firstName,
    //           }
    //         ],
    //       },
    //       {
    //         type: 'body',
    //         parameters: [
    //           {
    //             type: 'text',
    //             text: `día ${new Date(
    //                       appointmentData.start
    //                     ).toLocaleString('es', {
    //                       year: 'numeric',
    //                       month: 'numeric',
    //                       day: 'numeric',
    //                       hour: '2-digit',
    //                       minute: '2-digit',
    //                       hour12: false,
    //                     })} hs`,
    //           },
    //           {
    //             type: 'text',
    //             text: appointmentData.doctor.biologicalSex === 'm' ? 'el Dr.' : 'la Dra.' + `${appointmentData.doctor.firstName} ${appointmentData.doctor.lastName}`,
    //           },
    //         ],
    //       }
    //     ],
    //   };
    //   const { data } = await axios.post(
    //     process.env.WASAP_MESSAGE_URL,
    //     messageData,
    //     config
    //   );
    // }
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default notifyNewAppointment;
