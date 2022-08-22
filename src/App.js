import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BioDataPage from "./pages/BioDataPage";

function App() {
  return (
    <div>
      <BioDataPage />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
