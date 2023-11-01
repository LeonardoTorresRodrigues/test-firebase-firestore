import { db } from "../../firebaseConfig";
import { PlanAddType, PlanType } from "../../interfaces/plansInterfaces";

const plansReference = db.collection('planos');

export async function addPlansAcess(body: PlanType) {
  const planObject: PlanAddType = {
    text: body.text,
    value: body.value,
    type: body.type,
    gym: db.collection('academias').doc(body.gymId)
  }
  const response = await plansReference.add(planObject);
  return response;
}

export async function setPlansAcess(body: PlanType, id: string) {
  const planObject: PlanAddType = {
    text: body.text,
    value: body.value,
    type: body.type,
    gym: db.collection('academias').doc(body.gymId)
  }
  const response = await plansReference.doc(id).set(planObject);
  return response;
}

export async function updatePlansAcess(body: PlanType, id: string) {
  const planObject: PlanAddType = {
    text: body.text,
    value: body.value,
    type: body.type,
    gym: db.collection('academias').doc(body.gymId)
  }
  const response = await plansReference.doc(id).update(planObject);
  return response;
}

export async function getPlansAcess() {
  const response = await plansReference.get();
  return response;
}

export async function deletePlansAcess(id: string) {
  const response = await plansReference.doc(id).delete();
  return response;
}