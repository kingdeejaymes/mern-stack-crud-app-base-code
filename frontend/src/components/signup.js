import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const Signup = props => {

    const initialUserState = {
        username: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(initialUserState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    //   const login = () => {
    //     props.login(user)
    //     props.history.push('/');
    //   }

    const register = async () => {

        
        AuthService.register(user)
        .then(response => {
                console.log('USER REG ===>', response.data);
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                props.history.push('/todopage');
            })
            .catch(e => {
                console.log('SIGNUP ERROR ===> ', e);
            });
    }

    return (
        <div className="card">
            <div className="card-body">
                {/* <div className="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                <h4 className="card-title">SIGN UP</h4>
                <div className="submit-form">
                    <div className="form-group">
                        <div class="form-floating mb-3">
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
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                required
                                value={user.email}
                                onChange={handleInputChange}
                                name="email"
                                placeholder="E-Mail"
                            />
                            {/* </div></div><input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"> */}
                            <label for="floatingInput">E-mail</label>
                        </div>
                        <div class="form-floating">
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
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="container" style={{ marginTop: '20px' }}>
                            <div className="row justify-content-md-center">
                                <div className="col-1"></div>
                                <div className="col-10 col-md-auto">
                                    <button onClick={register} className="btn btn-success">
                                        Sign Up
                                    </button>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;