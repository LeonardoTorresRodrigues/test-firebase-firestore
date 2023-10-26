import firebase from "firebase";

export interface PlanType {
  text: string;
  type: string;
  value: number;
  gymId: string;
}

export interface PlanAddType {
  gym?: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
  text: string;
  type: string;
  value: number;
}