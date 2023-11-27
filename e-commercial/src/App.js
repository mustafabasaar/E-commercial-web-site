import HomePage from "./Pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./Pages/Contact";
import Product from "./Pages/Contact";
import About from "./Pages/Contact";
import ProductList from "./Pages/Contact";
import Pricing from "./Pages/Contact";
import Team from "./Pages/Contact";
import Blog from "./Pages/Contact";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
