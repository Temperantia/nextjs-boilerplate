import { doc } from "firebase/firestore";
import { Ad } from "modules/ads";
import { adCollection, auth } from "modules/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { Button, Spinner } from "flowbite-react";
import { format } from "utils/money";

const provider = new GoogleAuthProvider();

const Home = () => {
  const [user, loadingUser] = useAuthState(auth);
  const [ad, loading] = useDocumentData<Ad>(
    doc(adCollection, "40DgDf70e50gG6w8A1Gu")
  );

  if (loadingUser || loading) {
    return <Spinner />;
  } else if (user) {
    return (
      <>
        {user.displayName}
        <Button onClick={() => signOut(auth)}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      {format(ad?.price ?? 0)}
      <br />
      <Button onClick={() => signInWithRedirect(auth, provider)}>
        Sign in
      </Button>
    </>
  );
};

export default Home;
