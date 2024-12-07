import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [excelente, setValue5] = React.useState(5);
  const [bueno, setValue4] = React.useState(4);
  const [normal, setValue3] = React.useState(3);
  const [malo, setValue2] = React.useState(2);
  const [muyMalo, setValue1] = React.useState(1);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      {/* EXCELENTE */}
      <Typography sx={{ fontWeight: "bold" }} component="legend">
        Excelente
      </Typography>
      <Rating
        sx={{ color: "#02B2AF" }}
        name="read-only"
        value={excelente}
        readOnly
      />

      {/* BUENO */}
      <Typography sx={{ fontWeight: "bold" }} component="legend">
        Bueno
      </Typography>
      <Rating
        sx={{ color: "#72CCFF" }}
        name="read-only"
        value={bueno}
        readOnly
      />

      {/* NORMAL */}
      <Typography sx={{ fontWeight: "bold" }} component="legend">
        Normal
      </Typography>
      <Rating
        sx={{ color: "#DA00FF" }}
        name="read-only"
        value={normal}
        readOnly
      />

      {/* MALO */}
      <Typography sx={{ fontWeight: "bold" }} component="legend">
        Malo
      </Typography>
      <Rating
        sx={{ color: "#9001CB" }}
        name="read-only"
        value={malo}
        readOnly
      />

      {/* MUY MALO */}
      <Typography sx={{ fontWeight: "bold" }} component="legend">
        Muy malo
      </Typography>
      <Rating
        sx={{ color: "#2E96FF" }}
        name="read-only"
        value={muyMalo}
        readOnly
      />
    </Box>
  );
}
