import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import ClientesLista from "./ClientesLista";
import ClientesGraphArea from "./ClientesGraphArea";

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
      <Grid
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid size={{ xs: 6, md: 12 }}>
          <ClientesLista />
        </Grid>
        <Grid size={{ xs: 6, md: 10 }}></Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          size={{ xs: 6, md: 12 }}
          sx={{
            display: {
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <ClientesGraphArea />
        </Grid>
      </Grid>
    </Box>
  );
}
