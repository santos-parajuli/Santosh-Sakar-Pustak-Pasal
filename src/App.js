import Notice from "./components/carousal/Carousal";
import Map from "./components/Map";
import NavBar from "./components/shared/navBar/NavBar";
import Footer from "./components/shared/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BookList from "./components/BookList";
import Buy from "./components/Buy";
import WhyUs from "./components/whyUs/WhyUs";


function App() {
  return (
    <div>
      <Router> 
      <NavBar/>       
        <Switch>
          <Route path="/" exact >
            <Notice/>
            <br/>
            <WhyUs/>
            <Map/>
          </Route>
          <Route path="/books" exact>
            <BookList/>
          </Route>
          <Route path="/buy/:id" exact>
            <Buy/>
          </Route>
         
        </Switch>
        <Footer/>
      </Router>

      {/* <BookList/> */}
      
    </div>
  );
}

export default App;
