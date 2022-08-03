import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';
import publicService from '../../Service/PublicService';
import { Alert, Stack } from '@mui/material';
import { ErrorForm } from '../../Shared/FormValidate/ErrorForm';
import Form from '../../Shared/FormValidate/Form';

export class Login extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        username: "",
        password: "",
      }),
      message: {
        type: "",
        content: "",
        isDisplay: false,
      }
    }
  }




  onLogin = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { username, password } = this.state.form;
      const params = new URLSearchParams();
      params.append("grant_type", "password");
      params.append("username", username.value);
      params.append("password", password.value);
      await publicService.accessAuthToken(params)
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token);
          window.location.replace('/account-register');
        })
        .catch((err) => {
          let { message } = this.state;
          message.isDisplay = true;
          message.type = "error";
          message.content = "Vui lòng kiểm tra lại tải khoản hoặc mật khẩu";
          this.setState({
            message
          });
        });
    } else {

    }
  };


  render() {
    const { message } = this.state;
    const { username, password } = this.state.form;
    return (
      <>
        <div id="login">
          <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
              <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                  <div className="col-lg-4 mx-auto">
                    {
                      message.isDisplay ? (<Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity={message.type}> {message.content}
                        </Alert>
                      </Stack>
                      ) : (
                        ""
                      )}
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">

                      <div className="brand-logo">
                        Oder<FastfoodIcon /> Food


                      </div>
                      <h4>Hello! let's get started</h4>
                      <h6 className="font-weight-light">Sign in to continue.</h6>
                      <form className="pt-3">

                        <div className="form-group">
                          <input
                            type="username"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            required
                            placeholder="Username"
                            value={username.value}
                            onChange={(ev) => this._setValue(ev, "username")}
                          />
                          {username.err !== "" ? (
                            username.err === "*" ? (
                              <ErrorForm message="User Name cannot be empty" />
                            ) : (
                              <ErrorForm message={username.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            required
                            placeholder="Password"
                            value={password.value}
                            onChange={(ev) => this._setValue(ev, "password")}
                          />
                          {password.err !== "" ? (
                            password.err === "*" ? (
                              <ErrorForm message="Password cannot be empty" />
                            ) : (
                              <ErrorForm message={password.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mt-3">
                          <div
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.onLogin}>
                            SIGN IN
                          </div>
                        </div>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                          <div className="text-center mt-4 font-weight-light">
                            Don't have an account?{" "}
                            <Link to="/account-register" className="text-primary">
                              Create
                            </Link>
                          </div>
                          <Link to="/account-register">
                            Forgot password?
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}





