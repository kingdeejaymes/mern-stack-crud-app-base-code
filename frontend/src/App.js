import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle'

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";
import Signup from "./components/signup";
import ToDoPage from "./components/todoPage";
import authService from "./services/auth.service";

function App() {
  const [user, setUser] = React.useState(authService.getCurrentUser());

  useEffect(() => {

    
  }, []);

  let logout = async () => {
    setUser(null);
    authService.logout();
    window.location.href='/login';
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/todopage">MERN STACK</a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={"/restaurants"} className="nav-link">
                  Restaurant Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/todopage"} className="nav-link">
                  To Do's
                </Link>
              </li>
            </ul>
            <div className="d-flex">
                { user ? (
                  <a onClick={logout} className="nav-link me-auto">
                    LOGOUT {user.name}
                  </a>
                ) : (            
                <Link to={"/login"} className="nav-link me-auto">
                  LOGIN
                </Link>
                )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: "120px"}}>
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route 
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route 
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route 
            path="/todopage"
            render={(props) => (
              <ToDoPage {...props}/>
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} setUser={setUser} />
            )}
          />
          <Route 
            path="/signup"
            render={(props) => (
              <Signup {...props} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
