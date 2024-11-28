import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* navbar */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
}

export default App;
