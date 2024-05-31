import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function CryptoDetail() {
  const { id } = useParams();
  const crypto = useSelector(state => state.crypto.data.find(item => item.id === id));
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const generateRandomData = () => {
      const data = [];
      for (let i = 0; i < 24; i++) {
        const time = `${i < 10 ? '0' + i : i}:00`;
        const price = Math.floor(Math.random() * (crypto.high_24h - crypto.low_24h + 1)) + crypto.low_24h;
        data.push({ time, price });
      }
      return data;
    };

    if (crypto) {
      const timeout = setTimeout(() => {
        const randomData = generateRandomData();
        setChartData(randomData);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [crypto]);

  if (!crypto) {
    return <Typography variant="h6" color="error">Crypto not found</Typography>;
  }

  return (
    <Box 
      sx={{
        width: '96vw',
        marginLeft: '-50vw',
        left: '50%',
        position: 'relative',
        padding: '20px'
      }}
    >
      <Card style={{ backgroundColor: '#1f1f1f', color: '#fff', marginTop: '30px', borderRadius: '40px', width: '100%' }}>
        <CardContent>
          <Typography variant="h4" align="center">{crypto.name}</Typography>
          <img src={crypto.image} alt={crypto.name} style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }} />
          <Typography variant="h6" align="center">CODE: {crypto.symbol}</Typography>
          <Typography variant="body1" align="center" style={{ fontWeight: 'bold', color: 'yellow' }}>Current Price: ${crypto.current_price}</Typography>
          <Typography variant="body1" align="center" style={{ fontWeight: 'bold', color: 'orange' }}>Market Cap: ${crypto.market_cap}</Typography>
          <Typography variant="body1" align="center" style={{ fontWeight: 'bold', color: 'lightgreen' }}>24h High: ${crypto.high_24h}</Typography>
          <Typography variant="body1" align="center" style={{ fontWeight: 'bold', color: 'red' }}>24h Low: ${crypto.low_24h}</Typography>
          <div style={{ marginTop: '20px', height: '400px', width: '100%' }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis dataKey="price" domain={['auto', 'auto']} />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CryptoDetail;
