import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import RatingSearch from "../Calificaciones/RatingSearch";
import ReservasLista from "./ReservasLista";
import ReservasGraphPastel from "./ReservasGraphPastel";
import ReservasGraphBar from "./ReservasGraphBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid size={{ xs: 6, md: 5 }}>
        <h1>Reservas de Negocios</h1>
      </Grid>
      <Grid
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          size={{ xs: 6, md: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RatingSearch />
        </Grid>
        <Grid size={{ xs: 6, md: 10 }}></Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid size={{ xs: 6, md: 9 }}>
          <ReservasLista />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 10 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        <Grid size={{ xs: 6, md: 5 }} sx={{ display: { marginTop: 30 } }}>
          <ReservasGraphPastel />
        </Grid>
        <Grid
          size={{ xs: 6, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 0,
          }}
        >
          <ReservasGraphBar />
        </Grid>
      </Grid>
    </Box>
  );
}
