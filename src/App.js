import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import ShoppingCart from "./component/ShoppingCart";
import ToDoList from "./component/ToDoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {/* Render the ToDoList and ShoppingCart components on the home page */}
                <ToDoList /> <ShoppingCart />
              </>
            }
          />
          {/* Route for the home page */}
          <Route path="home" element={<Home />} />

          {/* Route for the about page */}
          <Route path="about" element={<About />} />

          {/* Route for the contact page */}
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
