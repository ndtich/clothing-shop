// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

import {
  // auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const SignIn = () => {
  // useEffect(() => {
  //   const asyncFunc = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   };
  //   asyncFunc();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
