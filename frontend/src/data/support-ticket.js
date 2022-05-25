import React from 'react';
import CustomMaterialMenu from '../components/common/data-table/customMaterialMenu';
import user from "../assets/images/user/1.jpg";
import user2 from '../assets/images/user/2.png';
import user3 from '../assets/images/user/3.png';
import user4 from '../assets/images/user/4.jpg';
import user5 from '../assets/images/user/5.png';
import user6 from '../assets/images/user/6.jpg';
import user7 from '../assets/images/user/7.jpg';
import user8 from '../assets/images/user/8.jpg';
import user9 from '../assets/images/user/9.jpg';
import user10 from '../assets/images/user/10.jpg';
import user11 from '../assets/images/user/11.jpg';
import user12 from '../assets/images/user/12.png';

export const supportDB  = [
        {
            id: 1,
            image: <img src={user} className="img-50 img-fluid" alt="" />,
            name: "Jesica Alba",
            nationalId: "35769315",
            birthDate: "02/03/1984",
            healthInsurance: "OSDE",
            healthRecordId: '123671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/01/2022",
            status: "active"
        },
        {
            id: 2,
            image: <img src={user2} className="img-50 img-fluid" alt="" />,
            name: "Manuel Mandeb",
            nationalId: "35569315",
            birthDate: "02/03/1978",
            healthInsurance: "Swiss Medical",
            healthRecordId: '9823873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "22/01/2022",
            status: "pending"
        },

        {
            id: 3,
            image: <img src={user3} className="img-50 img-fluid" alt="" />,
            name: "Agustina Cherri",
            nationalId: "24569315",
            birthDate: "02/03/1982",
            healthInsurance: "AMUTMIN",
            healthRecordId: '453671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/01/2022",
            status: "pending"
        },

        {
            id: 4,
            image: <img src={user4} className="img-50 img-fluid" alt="" />,
            name: "Sandra Velzquez",
            nationalId: "33129315",
            birthDate: "02/03/1977",
            healthInsurance: "OSDE",
            healthRecordId: '15243671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/11/2021",
            status: "active"
        },

        {
            id: 5,
            image: <img src={user5} className="img-50 img-fluid" alt="" />,
            name: "Agustín Vázquez",
            nationalId: "35569315",
            birthDate: "02/03/1990",
            healthInsurance: "AMUTMIN",
            healthRecordId: '123671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/01/2022",
            status: "active"
        },

        {
            id: 6,
            image: <img src={user5} className="img-50 img-fluid" alt="" />,
            name: "Serapio Garcia",
            nationalId: "11569315",
            birthDate: "02/03/1980",
            healthInsurance: "OSDE",
            healthRecordId: '666671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/02/2021",
            status: "active"
        },

        {
            id: 7,
            image: <img src={user6} className="img-50 img-fluid" alt="" />,
            name: "Kevin Kostner",
            nationalId: "29569315",
            birthDate: "02/03/1980",
            healthInsurance: "OSDE",
            healthRecordId: '715671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/01/2021",
            status: "active"
        },

        {
            id: 8,
            image: <img src={user7} className="img-50 img-fluid" alt="" />,
            name: "Al Pacino",
            nationalId: "16341441",
            birthDate: "02/03/1963",
            healthInsurance: "-",
            healthRecordId: '51243671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/01/2021",
            status: "active"
        },
        {
            id: 9,
            image: <img src={user8} className="img-50 img-fluid" alt="" />,
            name: "Robert De Niro",
            nationalId: "16123781",
            birthDate: "02/03/1961",
            healthInsurance: "CSS",
            healthRecordId: '918671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/10/2021",
            status: "active"
        },

        {
            id: 10,
            image: <img src={user9} className="img-50 img-fluid" alt="" />,
            name: "Elba Gallo",
            nationalId: "23781951",
            birthDate: "02/03/1970",
            healthInsurance: "Swiss Medical",
            healthRecordId: '66891273',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "23/01/2022",
            status: "active"
        },

        {
            id: 11,
            image: <img src={user10} className="img-50 img-fluid" alt="" />,
            name: "Mara Lerchundi",
            nationalId: "15569315",
            birthDate: "02/03/1963",
            healthInsurance: "AMUTMIN",
            healthRecordId: '92312839',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/01/2022",
            status: "active"
        },

        {
            id: 12,
            image: <img src={user11} className="img-50 img-fluid" alt="" />,
            name: "Moria Casanova",
            nationalId: "10342519",
            birthDate: "02/03/1955",
            healthInsurance: "OSDE",
            healthRecordId: '615671873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "05/01/2022",
            status: "active"
        },

        {
            id: 13,
            image: <img src={user12} className="img-50 img-fluid" alt="" />,
            name: "Cesar Feü",
            nationalId: "33898122",
            birthDate: "10/07/1984",
            healthInsurance: "CSS",
            healthRecordId: '41242689',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "02/01/2022",
            status: "active"
        },

        {
            id: 14,
            image: <img src={user3} className="img-50 img-fluid" alt="" />,
            name: "Marcela Baum",
            nationalId: "357810231",
            birthDate: "02/05/1990",
            healthInsurance: "OSDE",
            healthRecordId: '512497123',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/08/2021",
            status: "active"
        },

        {
            id: 15,
            image: <img src={user4} className="img-50 img-fluid" alt="" />,
            name: "Erica Rivas",
            nationalId: "25123918",
            birthDate: "02/03/1987",
            healthInsurance: "-",
            healthRecordId: '14163234',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "21/03/2021",
            status: "active"
        },

        {
            id: 16,
            image: <img src={user} className="img-50 img-fluid" alt="" />,
            name: "Mónica Galindo",
            nationalId: "12456123",
            birthDate: "02/03/1970",
            healthInsurance: "CSS",
            healthRecordId: '70987123',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "15/01/2022",
            status: "pending"
        },

        {
            id: 17,
            image: <img src={user6} className="img-50 img-fluid" alt="" />,
            name: "Diego Caruso",
            nationalId: "33415789",
            birthDate: "02/03/1984",
            healthInsurance: "CSS",
            healthRecordId: '56781243',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "17/12/2021",
            status: "inactive"
        },

        {
            id: 18,
            image: <img src={user7} className="img-50 img-fluid" alt="" />,
            name: "Guillermo Compuertas",
            nationalId: "11323451",
            birthDate: "02/03/1950",
            healthInsurance: "OSDE",
            healthRecordId: '242371873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "03/04/2021",
            status: "pending"
        },
        {
            id: 19,
            image: <img src={user8} className="img-50 img-fluid" alt="" />,
            name: "Carlos Santana",
            nationalId: "223135123",
            birthDate: "02/03/1980",
            healthInsurance: "CSS",
            healthRecordId: '3135612',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "06/10/2021",
            status: "pending"
        },

        {
            id: 20,
            image: <img src={user4} className="img-50 img-fluid" alt="" />,
            name: "Nerea Salvato",
            nationalId: "391231092",
            birthDate: "02/03/1999",
            healthInsurance: "OSDE",
            healthRecordId: '41873',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "01/12/2021",
            status: "inactive"
        },

        {
            id: 21,
            image: <img src={user5} className="img-50 img-fluid" alt="" />,
            name: "Augusto García",
            nationalId: "32415678",
            birthDate: "02/03/1988",
            healthInsurance: "AMUTMIN",
            healthRecordId: '7231239',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "26/01/2022",
            status: "active"
        },

        {
            id: 22,
            image: <img src={user5} className="img-50 img-fluid" alt="" />,
            name: "Marcos Mata",
            nationalId: "21456123",
            birthDate: "02/03/1983",
            healthInsurance: "OSDE",
            healthRecordId: '3131346',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "15/01/2022",
            status: "active"
        },

        {
            id: 23,
            image: <img src={user6} className="img-50 img-fluid" alt="" />,
            name: "Eduardo Díaz",
            nationalId: "15424678",
            birthDate: "02/03/1962",
            healthInsurance: "OSDE",
            healthRecordId: '414123123',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "23/01/2022",
            status: "pending"
        },

        {
            id: 24,
            image: <img src={user7} className="img-50 img-fluid" alt="" />,
            name: "Esteban Quito",
            nationalId: "423231909",
            birthDate: "02/03/2001",
            healthInsurance: "Swiss Medical",
            healthRecordId: '4124123123',
            email: <a href="mailto:t.nixon@datatables.net" >t.nixon@datatables.net</a>,
            lastVisit: "22/01/2021",
            status: "inactive"
        },
    ]
export const supportColumns = [
    // {
	// 	cell: () => <i className="fa fa-th text-success" />, 
	// 	width: '56px', // custom width for icon button
	// 	style: {
	// 		borderBottom: '1px solid #FFFFFF',
	// 		marginBottom: '-1px',
	// 	},
	// },
    {
        name: 'Foto',
        selector: 'image',
        sortable: false,
        center:true,
        width: '80px',
        cell: (row, index, column, id) => <img src={`${process.env.PUBLIC_URL}/assets/images/${row.image}`} className="img-50 img-fluid" alt="" />
    },
    {
        name: 'Nombre y Apellido',
        selector: 'name',
        sortable: true,
        left:true,
    },
    {
        name: 'Documento',
        selector: 'nationalId',
        sortable: true,
        left:true,
     
    },
    {
        name: 'Fec. Nacimiento',
        selector: 'birthDate',
        sortable: true,
        center:true,
    },
    {
        name: 'Obra Social',
        selector: 'healthInsurance',
        sortable: true,
        center:true,
    },
    {
        name: 'Nro. Historia Clínica',
        selector: 'healthRecordId',
        sortable: true,
        left:true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
        center:true,
        cell: (row, index, column, id) => <a href={`mailto:${row.email}`}>{row.email}</a>
    },
    {
        name: 'Última Visita',
        selector: 'lastVisit',
        sortable: true,
        center:true,
    },
    {
        name:"Estado",
        selector: 'status',
        sortable: true,
        center: true,
        cell: (row, index, column, id) => row.status === 'active' ? <span className="badge badge-success">Activo</span> : row.status === 'pending' ? <span className="badge badge-warning">Pendiente</span> : <span className="badge badge-light">Inactivo</span>
    },
    {
      sortable: false,
      allowOverflow: true,
      ignoreRowClick: true,
      cell: (row, index, column, id) =>
                    <div>
                        <span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
                        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
                        <CustomMaterialMenu size="small" row={row} menuItems={[{ actionName: 'Ver Historia Clínica', actionIcon: 'fa fa-medkit' }, { actionName: 'Próx. Turnos', actionIcon: 'fa fa-calendar' }]} />
                    </div>
    },    
  ];
