import { useState } from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Alert from "./reusable/Alert";
import { authRef } from "../firebase";
import { login } from "../store/userSlice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    profilePic: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    is: false,
    errorMessage: "",
  });
  const [registering, setRegistering] = useState(true);

  function captureValues(e) {
    setValues({ ...values, [e.target.id]: e.target.value });
    err.is && setErr({ ...err, is: false });
  }
  function handleEmptyFields() {
    let errs = [];
    let isError = false;

    for (const value in values) {
      if (
        values[value] === "" &&
        value !== "profilePic" &&
        !registering &&
        value !== "name"
      ) {
        errs.push(value);
      }
    }
    if (errs.length > 0) {
      setErr({
        is: true,
        errorMessage: `The following are empty ${errs.join(", ")}.`,
      });
      isError = true;
    } else {
      setErr({
        is: false,
        errorMessage: "",
      });
      isError = false;
    }
    return isError;
  }

  function submitLoginHandler(e) {
    e.preventDefault();
    const errCheck = handleEmptyFields();
    if (errCheck) return;
    const { email, password, name, profilePic } = values;
    signInWithEmailAndPassword(authRef, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            photoURL: user.photoURL,
            id: user.uid,
            name: user.displayName,
          })
        );

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function submitRegisterHandler(e) {
    e.preventDefault();
    const errCheck = handleEmptyFields();
    if (errCheck) return;
    const { email, password, name, profilePic } = values;
    createUserWithEmailAndPassword(authRef, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        });

        dispatch(
          login({
            email: user.email,
            photoURL: user.photoURL,
            id: user.uid,
            name: user.displayName,
          })
        );
        console.log(user);

        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className="h-screen">
      <div className="flex min-h-full">
        <div className="flex flex-col justify-center flex-1 w-full px-4 py-12 sm:px-6 lg:flex-none md:w-1/3">
          <div className="w-full ">
            <div>
              <RiLinkedinBoxFill className="text-gray-100 w-14 h-14" />
              <h2 className="mt-2 text-2xl font-bold text-gray-200">
                {registering
                  ? " Create an account"
                  : " Sign in to your account"}
              </h2>
              <div className="flex mt-2 space-x-2 text-sm text-gray-300">
                <span>Or</span>
                <p
                  onClick={() => setRegistering(!registering)}
                  className="cursor-pointer text-cyan-200"
                >
                  {registering
                    ? " Login with your account."
                    : " Create a new account."}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <form
                className="space-y-4"
                onSubmit={
                  registering ? submitRegisterHandler : submitLoginHandler
                }
              >
                {registering && (
                  <>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-gray-300"
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={captureValues}
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Full Name (Required)"
                          className="block w-full p-3 text-gray-200 placeholder-gray-400 bg-transparent border rounded-md outline-none sm:text-sm border-avatarBG"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="profilePic"
                        className="block text-xs font-medium text-gray-300"
                      >
                        Profile URL
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={captureValues}
                          id="profilePic"
                          name="profilePic"
                          type="text"
                          placeholder="Profile Picture URL (Optional)"
                          className="block w-full p-3 text-gray-200 placeholder-gray-400 bg-transparent border rounded-md outline-none sm:text-sm border-avatarBG"
                        />
                      </div>
                    </div>
                  </>
                )}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={captureValues}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email..."
                      className="block w-full p-3 text-gray-200 placeholder-gray-400 bg-transparent border rounded-md outline-none sm:text-sm border-avatarBG"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={captureValues}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Your password..."
                      className="block w-full p-3 text-gray-200 placeholder-gray-400 bg-transparent border rounded-md outline-none sm:text-sm border-avatarBG"
                    />
                  </div>
                </div>
                {err.is && <Alert mssg={err.errorMessage} title="Error" />}

                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-3 mt-2 text-sm font-medium text-white rounded-md bg-secondary hover:opacity-90"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
