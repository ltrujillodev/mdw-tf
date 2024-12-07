import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', visits: 4000 },
  { name: 'Feb', visits: 3000 },
  { name: 'Mar', visits: 2000 },
  { name: 'Apr', visits: 2780 },
  { name: 'May', visits: 1890 },
  { name: 'Jun', visits: 2390 },
  { name: 'Jul', visits: 3490 },
  { name: 'Aug', visits: 2000 },
  { name: 'Sep', visits: 3000 },
];

export default function VistaGeneralGrafica({ color }) {
  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="visits" stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
