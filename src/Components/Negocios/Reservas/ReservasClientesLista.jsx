import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { IconButton } from "@mui/material";

//ESTADO
//realizado
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//cancelado
import UnpublishedIcon from "@mui/icons-material/Unpublished";

//ACCION
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PrintIcon from "@mui/icons-material/Print";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const columns = [
  { field: "id", headerName: "ID", width: 25 },
  { field: "nombreCliente", headerName: "CLIENTE", width: 250 },
  { field: "nombreNegocio", headerName: "NEGOCIO", width: 250 },
  { field: "fecha", headerName: "FECHA", width: 150 },
  { field: "hora", headerName: "HORA", width: 100 },
  {
    field: "estado",
    headerName: "Estado",
    width: 150,
    renderCell: (params) => {
      if (params.value === "realizado") {
        return (
          <>
            <CheckCircleIcon style={{ color: "green" }} />
          </>
        );
      } else {
        return (
          <>
            <UnpublishedIcon style={{ color: "red" }} />
          </>
        );
      }
    },
  },
  // {
  //   field: "pago",
  //   headerName: "MÉTODO DE PAGO",
  //   width: 200,
  //   renderCell: (params) => {
  //     if (params.value === "efectivo") {
  //       return (
  //         <>
  //           <LocalAtmIcon style={{ color: "white" }} />
  //         </>
  //       );
  //     } else if (params.value === "tarjeta") {
  //       return (
  //         <>
  //           <CreditCardIcon style={{ color: "orange" }} />
  //         </>
  //       );
  //     } else if (params.value === "yape") {
  //       return (
  //         <>
  //           <QrCodeScannerIcon style={{ color: "purple" }} />
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <QrCodeScannerIcon style={{ color: "green" }} />
  //         </>
  //       );
  //     }
  //   },
  // },
  // { field: "pago", headerName: "MÉTODO DE PAGO", width: 150 },
  {
    field: "accion",
    headerName: "ACCIÓN",
    width: 150,
    renderCell: (params) => (
      <>
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <PrintIcon />
        </IconButton>
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <CloudDownloadIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <RemoveRedEyeIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    nombreCliente: "Luis González",
    nombreNegocio: "Central",
    fecha: "2024-09-01",
    hora: "18:30",
    estado: "realizado",
  },
  {
    id: 2,
    nombreCliente: "María Fernández",
    nombreNegocio: "Maido",
    fecha: "2024-09-02",
    hora: "20:00",
    estado: "cancelado",
  },
  {
    id: 3,
    nombreCliente: "Juan Rojas",
    nombreNegocio: "Astrid y Gastón",
    fecha: "2024-09-03",
    hora: "19:45",
    estado: "realizado",
  },
  {
    id: 4,
    nombreCliente: "Ana Pérez",
    nombreNegocio: "Osso",
    fecha: "2024-09-04",
    hora: "21:00",
    estado: "realizado",
  },
  {
    id: 5,
    nombreCliente: "Carlos Ramírez",
    nombreNegocio: "Isolina",
    fecha: "2024-09-05",
    hora: "12:30",
    estado: "cancelado",
  },
  {
    id: 6,
    nombreCliente: "Rosa Mendoza",
    nombreNegocio: "Carnal",
    fecha: "2024-09-06",
    hora: "14:00",
    estado: "realizado",
  },
  {
    id: 7,
    nombreCliente: "Pedro Vargas",
    nombreNegocio: "La Mar",
    fecha: "2024-09-07",
    hora: "13:00",
    estado: "realizado",
  },
  {
    id: 8,
    nombreCliente: "Elena Castro",
    nombreNegocio: "Panchita",
    fecha: "2024-09-08",
    hora: "15:30",
    estado: "cancelado",
  },
  {
    id: 9,
    nombreCliente: "Diego Torres",
    nombreNegocio: "Mayta",
    fecha: "2024-09-09",
    hora: "19:00",
    estado: "realizado",
  },
  {
    id: 10,
    nombreCliente: "Claudia Reyes",
    nombreNegocio: "Rafael",
    fecha: "2024-09-10",
    hora: "16:45",
    estado: "cancelado",
  },
  {
    id: 11,
    nombreCliente: "Jorge Salazar",
    nombreNegocio: "El Mercado",
    fecha: "2024-09-11",
    hora: "18:15",
    estado: "realizado",
  },
  {
    id: 12,
    nombreCliente: "Mónica Peña",
    nombreNegocio: "El Pan de la Chola",
    fecha: "2024-09-12",
    hora: "09:30",
    estado: "realizado",
  },
  {
    id: 13,
    nombreCliente: "Miguel Silva",
    nombreNegocio: "Bodega 550",
    fecha: "2024-09-13",
    hora: "11:00",
    estado: "cancelado",
  },
  {
    id: 14,
    nombreCliente: "Laura Gutiérrez",
    nombreNegocio: "Tragaluz",
    fecha: "2024-09-14",
    hora: "20:30",
    estado: "realizado",
  },
  {
    id: 15,
    nombreCliente: "Ricardo Lopez",
    nombreNegocio: "Amoramar",
    fecha: "2024-09-15",
    hora: "17:00",
    estado: "cancelado",
  },
  {
    id: 16,
    nombreCliente: "Patricia Martínez",
    nombreNegocio: "Huaca Pucllana",
    fecha: "2024-09-16",
    hora: "18:45",
    estado: "realizado",
  },
  {
    id: 17,
    nombreCliente: "Felipe Vega",
    nombreNegocio: "La Lucha",
    fecha: "2024-09-17",
    hora: "13:15",
    estado: "realizado",
  },
  {
    id: 18,
    nombreCliente: "Verónica Romero",
    nombreNegocio: "Siete Sopas",
    fecha: "2024-09-18",
    hora: "14:30",
    estado: "cancelado",
  },
  {
    id: 19,
    nombreCliente: "Hugo Ortiz",
    nombreNegocio: "Don Belisario",
    fecha: "2024-09-19",
    hora: "19:00",
    estado: "realizado",
  },
  {
    id: 20,
    nombreCliente: "Gabriela Muñoz",
    nombreNegocio: "La Cabrera",
    fecha: "2024-09-20",
    hora: "20:00",
    estado: "realizado",
  },
  {
    id: 21,
    nombreCliente: "Andrés Paredes",
    nombreNegocio: "Nanka",
    fecha: "2024-09-21",
    hora: "12:00",
    estado: "cancelado",
  },
  {
    id: 22,
    nombreCliente: "Sofía Navarro",
    nombreNegocio: "Segundo Muelle",
    fecha: "2024-09-22",
    hora: "16:00",
    estado: "realizado",
  },
  {
    id: 23,
    nombreCliente: "Mauricio Espinoza",
    nombreNegocio: "Social",
    fecha: "2024-09-23",
    hora: "21:15",
    estado: "realizado",
  },
  {
    id: 24,
    nombreCliente: "Clara Rojas",
    nombreNegocio: "Cala",
    fecha: "2024-09-24",
    hora: "19:30",
    estado: "cancelado",
  },
  {
    id: 25,
    nombreCliente: "Emilio Zapata",
    nombreNegocio: "Papacho's",
    fecha: "2024-09-25",
    hora: "13:45",
    estado: "realizado",
  },
];
const paginationModel = {
  rowsPerPage: "Filas por mostrar",
  page: 0,
  pageSize: 5,
};

export default function DataTable() {
  const handleEdit = (id) => {
    console.log(`Editar registro con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar registro con ID: ${id}`);
  };
  return (
    <Paper sx={{ height: "auto", width: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        slotProps={{
          pagination: { labelRowsPerPage: "Filas por página" },
        }}
      />
    </Paper>
  );
}
