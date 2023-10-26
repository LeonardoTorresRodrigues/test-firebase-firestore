import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPlansAcess, setPlansAcess } from './services/dataAcess/plansAcess';
import { addPlansAction, getPlansAction, setPlansAction, updatePlansAction } from './services/actions/plansAction';
import { getPlansObserver } from './services/observers/plansObservers';

function App() {
  const [plans, setPlans] = useState<any[]>([]);
  useEffect(() => {
    getPlansObserver(setPlans, ['year', 'month', 'quarter'], 'snxn6GMp9jQPmQvAbxdL')
  }, [])
  return (
    <div className="App">
      {plans.map((elem) => (
        <p>{elem.text}</p>
      ))}
      <button onClick={() => {
        addPlansAction({
          text: 'Mensal',
          value: 34,
          type: 'month',
          gymId: 'snxn6GMp9jQPmQvAbxdL'
        })
      }}>Adicionar</button>
    </div>
  );
}

export default App;
