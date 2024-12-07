import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicArea() {
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
          label: "Nuevos de Clientes\n",
        },
      ]}
      series={[
        {
          data: [25, 85, 125, 186, 265, 282, 301, 325, 224],
          label: "NUEVOS CLIENTES x MES",
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
