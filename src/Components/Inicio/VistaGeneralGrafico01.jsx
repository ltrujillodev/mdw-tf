import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Apr 5', sessions: 5000 },
  { name: 'Apr 10', sessions: 10000 },
  { name: 'Apr 15', sessions: 15000 },
  { name: 'Apr 20', sessions: 20000 },
  { name: 'Apr 25', sessions: 22000 },
  { name: 'Apr 30', sessions: 25000 },
];

export default function VistaGeneralGrafico01() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Total de Més</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sessions" stroke="#1E88E5" fill="#1E88E5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
