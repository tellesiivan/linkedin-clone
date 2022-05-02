import BodyContainer from "./components/layout/body/BodyContainer";
import Login from "./components/Login";
import Header from "./components/layout/Header";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./store/userSlice";
import { authRef } from "./firebase";
import { selectUser } from "./store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(authRef, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            photoURL: user.photoURL,
            id: user.uid,
            name: user.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return !user ? (
    <Login />
  ) : (
    <>
      <Header />
      <BodyContainer />
    </>
  );
}

export default App;
