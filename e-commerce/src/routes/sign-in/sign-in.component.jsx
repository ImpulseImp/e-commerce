import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>SignIn page</h1>
      <div>
        <button onClick={logGoogleUser}>sign in</button>
      </div>
    </div>
  );
};
export default SignIn;
