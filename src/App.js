import BodyContainer from "./components/layout/body/BodyContainer";
import Login from "./components/Login";
import Header from "./components/layout/Header";
import { selectUser } from "./store/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

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
