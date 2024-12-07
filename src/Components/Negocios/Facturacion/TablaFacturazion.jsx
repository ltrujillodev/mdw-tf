import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { IconButton, Tooltip, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal, Box, Button, TextField } from "@mui/material";

const useTableStyles = (theme) => ({
  paperBackground: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  rowBackground: theme.palette.mode === "dark" ? "#2D3748" : "#f5f5f5",
  rowAlternateBackground: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  rowHoverBackground: theme.palette.mode === "dark" ? "#4A5568" : "#e0f7fa",
  textPrimary: theme.palette.mode === "dark" ? "#E2E8F0" : "#333",
  textSecondary: theme.palette.mode === "dark" ? "#CBD5E0" : "#555",
  headerBackground: theme.palette.mode === "dark" ? "#2D3748" : "#e0e0e0",
  headerText: theme.palette.mode === "dark" ? "#CBD5E0" : "#333",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
}));

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "negocio", headerName: "NEGOCIO", width: 200 },
  { field: "razonSocial", headerName: "RAZÓN SOCIAL", width: 250 },
  { field: "fecha", headerName: "FECHA", width: 120 },
  { field: "ruc", headerName: "RUC", width: 150 },
  { field: "direccion", headerName: "DIRECCIÓN", width: 250 },
  { field: "importe", headerName: "Importe", width: 150 },
  {
    field: "actions",
    headerName: "Acciones",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Tooltip title="Editar">
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleOpenEditModal(params.row)}
          >
            <CreateIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Imprimir">
          <IconButton
            size="small"
            color="secondary"
            onClick={() => handlePrint(params.row)}
          >
            <PrintIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

export default function DataTable() {
  const theme = useTheme();
  const styles = useTableStyles(theme);
  const [rows, setRows] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedFactura, setSelectedFactura] = useState(null);

  useEffect(() => {
    const fetchFacturas = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/facturacion");
        const data = await response.json();
        setRows(data.map((factura) => ({ ...factura, id: factura._id })));
      } catch (error) {
        console.error("Error al cargar facturas:", error);
      }
    };
    fetchFacturas();
  }, []);

  const handleOpenEditModal = (factura) => {
    setSelectedFactura(factura);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedFactura(null);
  };

  const handleEditFactura = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/facturacion/${selectedFactura.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedFactura),
      });
      const updatedFactura = await response.json();
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === updatedFactura.id ? updatedFactura : row))
      );
      handleCloseEditModal();
    } catch (error) {
      console.error("Error al editar la factura:", error);
    }
  };

  const handlePrint = (factura) => {
    const pdfContent = `
      <h1>Factura</h1>
      <p>Negocio: ${factura.negocio}</p>
      <p>Razon Social: ${factura.razonSocial}</p>
      <p>Fecha: ${factura.fecha}</p>
      <p>RUC: ${factura.ruc}</p>
      <p>Dirección: ${factura.direccion}</p>
      <p>Importe: ${factura.importe}</p>
    `;
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    saveAs(blob, `Factura_${factura.id}.pdf`);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/facturacion/${id}`, {
        method: "DELETE",
      });
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Error al eliminar la factura:", error);
    }
  };

  return (
    <StyledPaper
      sx={{
        width: "100%",
        height: 500,
        backgroundColor: styles.paperBackground,
        margin: 0,
        padding: 0,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          border: 0,
          width: "100%",
          ".MuiDataGrid-row": {
            backgroundColor: styles.rowBackground,
            "&:nth-of-type(odd)": {
              backgroundColor: styles.rowAlternateBackground,
            },
            "&:hover": {
              backgroundColor: styles.rowHoverBackground,
            },
          },
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: styles.headerBackground,
            color: styles.headerText,
            fontSize: "16px",
            borderBottom: `1px solid ${styles.textSecondary}`,
          },
          ".MuiDataGrid-cell": {
            color: styles.textPrimary,
          },
        }}
      />

      {editModalOpen && selectedFactura && (
        <Modal open={editModalOpen} onClose={handleCloseEditModal}>
          <Box sx={{ padding: 4, backgroundColor: "white", margin: "auto", maxWidth: 400 }}>
            <h2>Editar Factura</h2>
            <TextField
              label="Negocio"
              fullWidth
              value={selectedFactura.negocio}
              onChange={(e) => setSelectedFactura({ ...selectedFactura, negocio: e.target.value })}
              margin="normal"
            />
            <TextField
              label="Razón Social"
              fullWidth
              value={selectedFactura.razonSocial}
              onChange={(e) =>
                setSelectedFactura({ ...selectedFactura, razonSocial: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Fecha"
              type="date"
              fullWidth
              value={selectedFactura.fecha}
              onChange={(e) => setSelectedFactura({ ...selectedFactura, fecha: e.target.value })}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="RUC"
              fullWidth
              value={selectedFactura.ruc}
              onChange={(e) => setSelectedFactura({ ...selectedFactura, ruc: e.target.value })}
              margin="normal"
            />
            <TextField
              label="Dirección"
              fullWidth
              value={selectedFactura.direccion}
              onChange={(e) =>
                setSelectedFactura({ ...selectedFactura, direccion: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Importe"
              type="number"
              fullWidth
              value={selectedFactura.importe}
              onChange={(e) => setSelectedFactura({ ...selectedFactura, importe: e.target.value })}
              margin="normal"
            />
            <Button onClick={handleEditFactura} variant="contained" color="primary" fullWidth>
              Guardar Cambios
            </Button>
          </Box>
        </Modal>
      )}
    </StyledPaper>
  );
}
