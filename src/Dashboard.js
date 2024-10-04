import React, { useState } from 'react';
import { BubbleChart, Bubble, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import './Dashboard.css'; // Importing the CSS file

const data = [
  { id: 1, name: "Item A", revenue: 100, population: 500 },
  { id: 2, name: "Item B", revenue: 200, population: 300 },
  { id: 3, name: "Item C", revenue: 150, population: 700 },
  { id: 4, name: "Item D", revenue: 300, population: 400 },
  // Add more data points as needed
];

const Dashboard = () => {
  const [filter, setFilter] = useState(data);

  const handleBubbleClick = (dataPoint) => {
    if (dataPoint.activePayload) {
      const selectedId = dataPoint.activePayload[0].payload.id;
      const filteredData = data.filter(item => item.id === selectedId);
      setFilter(filteredData);
    }
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 150, sortable: true },
    { field: 'revenue', headerName: 'Revenue', width: 150, sortable: true },
    { field: 'population', headerName: 'Population', width: 150, sortable: true },
  ];

  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <h3>Bubble Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BubbleChart onClick={handleBubbleClick}>
            <XAxis dataKey="revenue" name="Revenue" />
            <YAxis dataKey="population" name="Population" />
            <Tooltip cursor={false} />
            {data.map((entry) => (
              <Bubble key={entry.id} dataKey="revenue" data={entry} fill="#8884d8" />
            ))}
          </BubbleChart>
        </ResponsiveContainer>
      </div>
      <div className="grid-container">
        <h3>Data Grid</h3>
        <DataGrid
          rows={filter}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
          className="data-grid"
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Dashboard;
