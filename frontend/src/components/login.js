import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";


const Login = props => {

  const initialUserState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // const login = () => {
  //   props.login(user)
  //   props.history.push('/');
  // }

  const login = async () => {

    AuthService.login(user)
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          props.setUser(AuthService.getCurrentUser());
        }
        props.history.push('/todopage');
      })
      .catch(e => {
        console.log('LOGIN ERROR ===> ', e);
      });
  }

  return (
    <div className="card">
        <div className="card-body">
        <h4 className="card-title">LOGIN</h4>
        <div className="submit-form">
          <div className="form-group">
            <div className="form-floating mb-3">
              <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  required
                  value={user.username}
                  onChange={handleInputChange}
                  name="username"
                  placeholder="Username"
                />
              {/* </div></div><input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"> */}
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                required
                value={user.password}
                onChange={handleInputChange}
                name="password"
                placeholder="Password"
              />
              {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"> */}
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="container" style={{ marginTop: '20px'}}>
              <div className="row">
                <div className="col"></div>
                <div className="col col-md-auto">
                  <button onClick={login} className="btn btn-success">
                    Login
                  </button>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col col-md-auto">
                  <small>No Account Yet? 
                    <Link to={"/signup"} className="nav-link me-auto">
                      <span style={{color:'blue'}}>Register here</span>
                    </Link>
                  </small>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    
  );
};

export default Login;