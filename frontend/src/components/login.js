import React, { useState } from "react";

const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="card">
        <div className="card-body">
        <h4 className="card-title">LOGIN</h4>
        <div className="submit-form">
          <div className="form-group">
            <div class="form-floating mb-3">
              <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  required
                  value={user.name}
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Username"
                />
              {/* </div></div><input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"> */}
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                required
                value={user.id}
                onChange={handleInputChange}
                name="id"
                placeholder="Password"
              />
              {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"> */}
              <label for="floatingPassword">Password</label>
            </div>
            <div className="container" style={{ marginTop: '20px'}}>
              <div className="row justify-content-md-center">
                <div class="col"></div>
                <div class="col col-md-auto">
                  <button onClick={login} className="btn btn-success">
                    Login
                  </button>
                </div>
                <div class="col"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    
  );
};

export default Login;