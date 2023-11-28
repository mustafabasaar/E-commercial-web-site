import HomePage from "./Pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
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
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/productList">
          <ProductList />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
