import React, { useState } from 'react';
import './styles.css';
import ButtonFB from '../../common/ButtonFB';
import InputFB from '../../common/InputFB';

const PlanPostModal: React.FC = () => {
  const [textPlan, setTextPlan] = useState<string>("");
  const handlerPlanText = (e: React.FormEvent<HTMLInputElement>) => {
    setTextPlan(e.currentTarget.value);
  };

  return (
    <div className='plan-post-modal-container'>
      <div className='plan-post-modal-closer'></div>
      <div className='plan-post-modal-content'>
        <header>
          <h3>Adicionar novo plano</h3>
        </header>
        <form>
          <InputFB label='Nome do Plano' placeholder='digite o texto do plano' value={textPlan} onChange={handlerPlanText} />
          <ButtonFB text='Adicionar' />
        </form>
      </div>
    </div>
  );
};

export default PlanPostModal;