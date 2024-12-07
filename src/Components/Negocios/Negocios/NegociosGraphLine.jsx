import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Margin } from "@mui/icons-material";

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[
        {
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          label: "Mes",
        },
      ]}
      yAxis={[
        {
          label: "Número de Negocios\n",
        },
      ]}
      series={[
        {
          data: [25, 85, 125, 186, 265, 282, 301, 325, 224],
          label: "NUEVOS NEGOCIOS x MES",
        },
      ]}
      width={500}
      height={300}
    />
  );
}
