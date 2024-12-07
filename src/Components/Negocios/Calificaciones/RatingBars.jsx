import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          label: "Mes",
        },
      ]}
      yAxis={[
        {
          label: "Número de calificaciones\n",
        },
      ]}
      series={[
        { data: [56, 38, 28, 60, 45, 62, 78, 60, 54] },
        { data: [25, 47, 35, 45, 62, 12, 74, 41, 25] },
        { data: [26, 41, 52, 32, 12, 26, 41, 23, 43] },
        { data: [14, 26, 12, 8, 15, 6, 17, 4, 7] },
        { data: [6, 12, 3, 5, 8, 2, 7, 4, 5] },
      ]}
      width={1000}
      height={375}
    />
  );
}
