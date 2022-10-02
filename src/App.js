import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className={nav ? "App h-[100vh] md:max-w-[80%] m-auto font-body overflow-y-hidden" : "App h-[100vh] md:max-w-[80%] m-auto font-body"}>
      <Navbar nav={nav} toggleNav={toggleNav} />
      <Product />
    </div>
  );
}

export default App;
