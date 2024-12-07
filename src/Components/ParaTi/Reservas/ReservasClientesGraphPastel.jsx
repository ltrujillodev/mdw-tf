import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 40, label: "Realizado", color: "green" },
            { id: 1, value: 15, label: "Cancelado", color: "red" },
          ],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
