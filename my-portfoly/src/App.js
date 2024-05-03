import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
