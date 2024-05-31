import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import CryptoDetail from './components/CryptoDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static" color="transparent" elevation={0} style={{ width: '100%' }}>
          <Toolbar style={{ backgroundColor: 'black' }}>
            <Typography variant="h4" style={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                📈 N S E
              </a>
            </Typography>
            {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
            <Button variant="contained" color="primary" component={Link} to="/dashboard">
              Dashboard
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detail/:id" element={<CryptoDetail />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
