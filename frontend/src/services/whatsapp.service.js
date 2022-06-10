export const sendMessage = (appointment) => {
  const patient = appointment.patient;
//   if (patient?.phoneNumber) {
    const to = '542966536853'// + patient.phoneNumber;
    const number = to.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    const message = `Hola ${patient.firstName}, te comunicamos que hemos agendado un turno para el día ${new Date(
      appointment.start
    ).toLocaleString('es', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })} hs con ${
      appointment.doctor.biologicalSex === 'm' ? 'el Dr.' : 'la Dra.'
    } ${appointment.doctor.firstName} ${appointment.doctor.lastName}.

Saludos!
Co-Med | Consultorios Médicos San Julián`;
    let url = `https://web.whatsapp.com/send?phone=${number}`;
    url += `&text=${encodeURI(message)}&app_absent=0`;

    let windowFeatures = "popup";
    window.open(url, 'Enviar Notificación de Turno', windowFeatures);
//   }
};
