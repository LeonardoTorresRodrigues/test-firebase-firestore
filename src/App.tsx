import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPlansAcess, setPlansAcess } from './services/dataAcess/plansAcess';
import { getPlansAction, setPlansAction, updatePlansAction } from './services/actions/plansAction';
import { getPlansObserver } from './services/observers/plansObservers';

function App() {
  const [plans, setPlans] = useState<any[]>([]);
  useEffect(() => {
    getPlansObserver(setPlans)
  }, [])
  return (
    <div className="App">
      {plans.map((elem) => (
        <p>{elem.text}</p>
      ))}
    </div>
  );
}

export default App;
