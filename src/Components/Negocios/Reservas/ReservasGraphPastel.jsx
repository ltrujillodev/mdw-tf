import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Tarjeta", color: "orange" },
            { id: 1, value: 15, label: "Efectivo", color: "white" },
            { id: 2, value: 20, label: "Yape", color: "purple" },
            { id: 3, value: 20, label: "Plin", color: "green" },
          ],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
