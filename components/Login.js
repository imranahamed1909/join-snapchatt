import { useState } from "react";
import LoginForm from "./LoginForm";
import SecurityModal from "./SecurityModal";

function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && <LoginForm setShowModal={setShowModal} />}
      {showModal && <SecurityModal setShowModal={setShowModal} />}
    </>
  );
}

export default Login;

// import LoginForm from "./LoginForm";

// function Login() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// export default Login;
