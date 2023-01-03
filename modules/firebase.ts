import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirelord, MetaTypeCreator } from "firelordjs";
import { User } from "./authentication";

export type UserMeta = MetaTypeCreator<User, "users">;

const firebaseConfig = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_CONFIG ?? ""
);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const usersRef = getFirelord<UserMeta>(db, "users");
