import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
}

export default App;
