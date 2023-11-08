import React from 'react';
import './styles.css';
import { PlanGetType } from '../../interfaces/plansInterfaces';
import ButtonFB from '../../common/ButtonFB';
import { deletePlansAction } from '../../services/actions/plansAction';

interface IProps {
  plans: PlanGetType[]
}

const PlansTable: React.FC<IProps> = ({ plans }) => {
  return (
    <>
      <table className='plans-table-container'>
        <tr className='plans-table-header'>
          <th>Tipo</th>
          <th>Preço</th>
          <th>Actions</th>
        </tr>
        {plans.map((elem) => (
          <tr className='plans-table-body'>
            <td>
              <p>{elem.text}</p>
            </td>
            <td>
              <p>R${elem.value},00</p>
            </td>
            <td>
              <ButtonFB text='Delete' onClick={() => { deletePlansAction(elem.id) }} />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default PlansTable;