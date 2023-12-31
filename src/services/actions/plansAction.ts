import { PlanType } from "../../interfaces/plansInterfaces";
import { addPlansAcess, deletePlansAcess, getPlansAcess, setPlansAcess, updatePlansAcess } from "../dataAcess/plansAcess";

export async function addPlansAction(body: PlanType) {
  const response = await addPlansAcess(body);
  return response.id;
}

export async function setPlansAction(body: PlanType, id: string) {
  const response = await setPlansAcess(body, id);
  return response;
}

export async function updatePlansAction(body: PlanType, id: string) {
  const response = await updatePlansAcess(body, id);
  return response;
}

export async function getPlansAction() {
  const response = await getPlansAcess();
  const plans: any[] = [];
  response.forEach((doc) => {
    plans.push(doc.data())
  });
  return plans;
}

export async function deletePlansAction(id: string) {
  const response = await deletePlansAcess(id);
  return response;
}