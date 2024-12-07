import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Negocio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Negocio"
          onChange={handleChange}
        >
          <MenuItem value={10}>Central</MenuItem>
          <MenuItem value={20}>Maido</MenuItem>
          <MenuItem value={30}>Astrid y Gastón</MenuItem>
          <MenuItem value={30}>La Mar</MenuItem>
          <MenuItem value={30}>Rafael</MenuItem>
          <MenuItem value={30}>Isolina</MenuItem>
          <MenuItem value={30}>Osakan</MenuItem>
          <MenuItem value={30}>La Picantería</MenuItem>
          <MenuItem value={30}>El Mercado</MenuItem>
          <MenuItem value={30}>Amaz</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
