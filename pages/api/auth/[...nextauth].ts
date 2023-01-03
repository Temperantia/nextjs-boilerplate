import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  adapter: FirestoreAdapter(
    JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG ?? "")
  ),
};

export default NextAuth(authOptions);
