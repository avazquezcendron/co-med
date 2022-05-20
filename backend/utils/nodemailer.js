import nodemailer from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';

const sendMail = (
  to,
  subject,
  type,
  contentOrTemplateName,
  appointmentData
) => {
  const transporter = nodemailer.createTransport(`smtps://${process.env.MAIL_USERNAME}%40gmail.com:${process.env.MAIL_PASSWORD}@smtp.gmail.com`);
  
  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./backend/views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./backend/views/'),
  };
  // use a template file with nodemailer
  transporter.use('compile', hbs(handlebarOptions));
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: to,
    subject: subject,
    // attachments: [
    //   {
    //     filename: 'logo-principal-gris.png',
    //     path: path.resolve('./backend/assets/logo-principal-gris.png'),
    //     cid: 'imgLogoname',
    //   },
    // ],
  };
  if (type === 'html') {
    (mailOptions.template = contentOrTemplateName), // the name of the template file i.e email.handlebars
      (mailOptions.context = {
        patientFirstName: appointmentData.patient.firstName,
        appointmentStart: new Date(appointmentData.start).toLocaleString('es', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        doctorRoom: appointmentData.doctor.room,
        doctorFullName: appointmentData.doctor.fullName,
        doctorSpecialities: appointmentData.doctor.specialities.join(', '),
        healthInsurance:
          appointmentData.patient.healthInsurances?.length > 0
            ? appointmentData.patient.healthInsurances[0].healthInsuranceCompany
                .description +
              ' (' +
              appointmentData.patient.healthInsurances[0].plan.code +
              ')' +
              ' | Nro. de Credencial ' +
              appointmentData.patient.healthInsurances[0].cardNumber
            : ' - ',
        appointmentType: appointmentData.appointmentType,
        appointmentMode: appointmentData.mode,
      });
  } else {
    mailOptions.text = contentOrTemplateName;
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export default sendMail;
