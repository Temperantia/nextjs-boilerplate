import { getAuth } from "firebase/auth";
import { Ad } from "./ads";
import { getApps, initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

if (getApps().length === 0) {
  const firebaseConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;
  if (firebaseConfig) {
    initializeApp(JSON.parse(firebaseConfig));
  }
}

export const auth = getAuth();

const db = getFirestore();

export const adCollection = collection(db, "ads").withConverter<Ad>({
  toFirestore: (ad) => ad,
  fromFirestore: (snapshot) => {
    const { contact, description, language, pictures, price } = snapshot.data();
    return {
      id: snapshot.id,
      contact,
      description,
      language,
      pictures,
      price,
    };
  },
});
