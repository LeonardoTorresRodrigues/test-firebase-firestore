import React, { useEffect, useState } from 'react';
import './styles.css';
import ButtonFB from '../../common/ButtonFB';
import { addPlansAction, deletePlansAction } from '../../services/actions/plansAction';
import { getPlansObserver } from '../../services/observers/plansObservers';
import { PlanGetType } from '../../interfaces/plansInterfaces';
import PlansTable from '../../components/PlansTable';

const PlansPage: React.FC = () => {
  const [plans, setPlans] = useState<PlanGetType[]>([]);
  useEffect(() => {
    getPlansObserver(setPlans, ['year', 'month', 'quarter'], 'snxn6GMp9jQPmQvAbxdL')
  }, [])
  return (
    <div className="App">
      <PlansTable plans={plans} />
      <ButtonFB
        text='Adicionar'
        onClick={() => {
          addPlansAction({
            text: 'Mensal',
            value: 34,
            type: 'month',
            gymId: 'snxn6GMp9jQPmQvAbxdL'
          })
        }}
      />
    </div>
  );
}

export default PlansPage;