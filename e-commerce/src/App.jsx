import { useState } from 'react';
import Page from './components/Page/Page';
import './App.css';

const obj = [
  { name: 'Impulse', age: 30, city: 'Minsk' },
  { name: 'Bob', age: 45, city: 'USA' },
  { name: 'Sam', age: 32, city: 'Paris' },
];

function App() {
  return (
    <div className='App'>
      <Page item={obj} />
    </div>
  );
}

export default App;
