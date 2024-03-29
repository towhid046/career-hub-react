const googleLogo = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png`;

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../../Config/firebaseAuth";
import { useState, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [loading, setLoading] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  const logIn = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return toast.error("Please right a valid email and password");
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("You are logged in sucessfully");
      setIsSignIn(true);
    } catch (err) {
      console.error(err);
      setEmail("");
      setPassword("");
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  const logOut = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signOut(auth);
      toast.success("You are sign out sucessfully");
      setIsSignIn(false);
    } catch (err) {
      console.error(err);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
      toast.success("You are sing in sucessfully");
      setIsSignIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(auth?.currentUser?.photoURL);
  console.log(auth?.currentUser?.email);

  return (
    <section className="container mx-auto px-4">
      {loading ? (
        <div className="sweet-loading h-[90vh] flex justify-center items-center">
          <ClipLoader
            color={"#2c3e50"}
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="h-[90vh] flex justify-center items-center">
          <form className="space-y-2 text-center pt-10 px-10 pb-6 bg-white border rounded-lg">
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 rounded-lg input-md outline-none"
              placeholder="Email address"
            />{" "}
            <br />
            <input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border-2 rounded-lg input-md outline-none"
              placeholder="Password"
            />{" "}
            <br />
            <input
              type="submit"
              onClick={isSignIn ? logOut : logIn}
              value={`${isSignIn ? "Log Out" : "Log in"}`}
              className="btn  bg-black text-white input-md hover:bg-gray-900"
            />{" "}
            <br />
            <p className="text-2xl font-semibold">Or</p>
            <p className="border-b-2 pb-2">Sign up with</p>
            <figure className="flex gap-8 pt-2 justify-center text-center">
              <img
                onClick={signInWithGoogle}
                className="w-8 cursor-pointer rounded-full"
                src={googleLogo}
                alt=""
              />
            </figure>{" "}
            <br />
          </form>
        </div>
      )}
    </section>
  );
};

export default Login;
