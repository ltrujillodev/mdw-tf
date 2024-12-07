import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicLabel() {
  return (
    <BarChart
      {...props}
      series={[
        {
          data: [51462, 85232, 74563, 68721, 84175, 54216, 70215, 57986, 74852],
          label: "TOTAL x MES",
        },
      ]}
    />
  );
}

const props = {
  width: 600,
  height: 300,
  xAxis: [
    {
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
      scaleType: "band",
      label: "Mes",
    },
  ],
  yAxis: [
    {
      label: "Total\n\n",
    },
  ],
};
