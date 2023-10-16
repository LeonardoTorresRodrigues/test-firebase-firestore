import { db } from "../../firebaseConfig";

const plansReference = db.collection('planos');

export function addPlansAcess(){
  plansReference.add({text: 'Mensal', value: 69}).then((res)=>{
    console.log(res.id);
  })
}