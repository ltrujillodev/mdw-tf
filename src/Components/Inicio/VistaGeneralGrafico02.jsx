import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', downloads: 6000 },
  { name: 'Feb', downloads: 12000 },
  { name: 'Mar', downloads: 9000 },
  { name: 'Apr', downloads: 15000 },
  { name: 'May', downloads: 14000 },
  { name: 'Jun', downloads: 10000 },
  { name: 'Jul', downloads: 11000 },
];

export default function VistaGeneralGrafico02() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Acumulado por meses</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="downloads" fill="#3f51b5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
