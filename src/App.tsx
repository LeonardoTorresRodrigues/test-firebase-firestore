import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPlansAcess, setPlansAcess } from './services/dataAcess/plansAcess';
import { addPlansAction, deletePlansAction, getPlansAction, setPlansAction, updatePlansAction } from './services/actions/plansAction';
import { getPlansObserver } from './services/observers/plansObservers';
import { PlanGetType } from './interfaces/plansInterfaces';

function App() {
  const [plans, setPlans] = useState<PlanGetType[]>([]);
  useEffect(() => {
    getPlansObserver(setPlans, ['year', 'month', 'quarter'], 'snxn6GMp9jQPmQvAbxdL')
  }, [])
  return (
    <div className="App">
      {plans.map((elem) => (
        <>
          <p>{elem.text}</p>
          <button onClick={() => { deletePlansAction(elem.id) }}>Delete</button>
        </>
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
