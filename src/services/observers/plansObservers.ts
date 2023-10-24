import { db } from "../../firebaseConfig";

const plansReference = db.collection('planos');

export function getPlansObserver(callback: React.Dispatch<React.SetStateAction<any[]>>, plansType: string[], gymId: string) {
  const gymReference = db.collection('academias').doc(gymId);
  plansReference.where('type', 'in', plansType).where('gym', '==', gymReference).onSnapshot((snapshot) => {
    const plans: any[] = [];
    snapshot.forEach((doc) => {
      plans.push(doc.data());
    });
    callback(plans);
  });
};