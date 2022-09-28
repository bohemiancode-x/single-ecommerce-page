//components
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div className="App h-[100vh] md:max-w-[80%] m-auto font-body">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
