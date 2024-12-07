import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { IconButton } from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Breadcrumbs from './Breadcrumbs'


const columns = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "nombre", headerName: "NOMBRE", width: 150 },
  { field: "razonSocial", headerName: "RAZÓN SOCIAL", width: 250 },
  { field: "ruc", headerName: "RUC", width: 125 },
  { field: "direccion", headerName: "DIRECCIÓN", width: 250 },
  {
    field: "actions",
    headerName: "Acciones",
    width: 100,
    renderCell: (params) => (
      <>
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <CreateIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    nombre: "Central",
    razonSocial: "Restaurante Central S.A.C.",
    ruc: "20548745123",
    direccion: "Av. Pedro de Osma 301, Barranco",
  },
  {
    id: 2,
    nombre: "Maido",
    razonSocial: "Maido Cocina Nikkei S.A.C.",
    ruc: "20563145789",
    direccion: "Calle San Martín 399, Miraflores",
  },
  {
    id: 3,
    nombre: "Astrid y Gastón",
    razonSocial: "Grupo Acurio Restaurantes S.A.C.",
    ruc: "20484567492",
    direccion: "Av. Paz Soldán 290, San Isidro",
  },
  {
    id: 4,
    nombre: "La Mar",
    razonSocial: "La Mar Cevichería S.A.C.",
    ruc: "20584791236",
    direccion: "Av. La Mar 770, Miraflores",
  },
  {
    id: 5,
    nombre: "Rafael",
    razonSocial: "Restaurante Rafael S.A.C.",
    ruc: "20548976483",
    direccion: "Calle San Martín 300, Miraflores",
  },
  {
    id: 6,
    nombre: "Isolina",
    razonSocial: "Isolina Taberna Peruana S.A.C.",
    ruc: "20574638901",
    direccion: "Av. Pedro de Osma 101, Barranco",
  },
  {
    id: 7,
    nombre: "Osaka",
    razonSocial: "Osaka Cocina Nikkei S.A.C.",
    ruc: "20513487291",
    direccion: "Av. Pardo y Aliaga 660, San Isidro",
  },
  {
    id: 8,
    nombre: "La Picantería",
    razonSocial: "La Picantería S.A.C.",
    ruc: "20489567345",
    direccion: "Av. Francisco Moreno 388, Surquillo",
  },
  {
    id: 9,
    nombre: "El Mercado",
    razonSocial: "El Mercado S.A.C.",
    ruc: "20531457892",
    direccion: "Av. Hipólito Unanue 203, Miraflores",
  },
  {
    id: 10,
    nombre: "Amaz",
    razonSocial: "Amaz S.A.C.",
    ruc: "20519475234",
    direccion: "Av. La Paz 1079, Miraflores",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const handleEdit = (id) => {
    console.log(`Editar registro con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar registro con ID: ${id}`);
  };
  return (
    
    <Paper sx={{ height: 400, width: "100%" ,padding: "0 0 35px 0" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
