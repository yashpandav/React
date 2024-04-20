
import './App.css';
import Product from './products.js';
import React from 'react';

function App() {
  const products = [
    {
      id: 1,
      title: 'Nirma',
      amount: 200,
      date: new Date(2021, 1, 10),
    },
    {
      id: 2,
      title: 'Surf Excel',
      amount: 20,
      date: new Date(2011, 2, 10),
    },
    {
      id: 3,
      title: 'Tide',
      amount: 230,
      date: new Date(2021, 11, 20),
    },
    {
      id: 4,
      title: 'Urja',
      amount: 100,
      date: new Date(2020, 10, 10),
    },
  ];

  return <Product items={products} />;
}

export default App;