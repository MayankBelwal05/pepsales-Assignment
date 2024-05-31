import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../redux/cryptoSlice';
import { Grid, Card, CardContent, Typography, CircularProgress, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './DashBoard.css';

function Dashboard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  if (loading) {
    return <div className="loading"><CircularProgress /></div>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={3} className="dashboard-container">
      {data.map(crypto => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={crypto.id}>
          <Card className="crypto-card" style={{ backgroundColor: '#f3f3f3' }}>
            <CardContent>
              <div className="crypto-header">
                <Typography variant="h5" component="div">{crypto.name}</Typography>
                <img src={crypto.image} alt={crypto.name} className="crypto-image" />
              </div>
              <ul className="crypto-list">
                <li>
                  <Typography variant="body2" style={{ fontWeight: 'bold', color: 'black' }}>
                    Price: ${crypto.current_price}
                  </Typography>
                </li>
                <li><Typography variant="body2" style={{ fontWeight: 'bold', color: 'grey' }}>Market Cap: ${crypto.market_cap}</Typography></li>
                <li><Typography variant="body2" style={{ fontWeight: 'bold', color: 'orange' }}>24h Change: {crypto.price_change_percentage_24h}%</Typography></li>
              </ul>
              <Button variant="contained" color="primary" component={Link} to={`/detail/${crypto.id}`}>
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;
