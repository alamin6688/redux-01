import "./App.css";
import Navbar from "./components/layout/Navbar";
// import ResponsiveNavbar from "./components/layout/Navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex max-w-screen-xl p-4">
        <Navbar/>
        <Button variant="destructive" className="mb-4">
          ShadCN Button
        </Button>
        <Button variant="secondary" className="mb-4">
          Secondary Button
        </Button>
      </div>
    </>
  );
}

export default App;
