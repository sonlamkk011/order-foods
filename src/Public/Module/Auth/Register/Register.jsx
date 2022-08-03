import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import Form from '../../Shared/FormValidate/Form';
import publicService from '../../Service/PublicService';
import { ErrorForm } from '../../Shared/FormValidate/ErrorForm';
import { Alert, Stack } from '@mui/material';

export class Register extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
      }),

      message: {
        type: "",
        content: "",
        isDisplay: false,
      }
    }
  }



  onRegister = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { userName, email, phoneNumber, password } = this.state.form;
      const data = {
        userName: userName.value,
        Email: email.value,
        PhoneNumber: phoneNumber.value,
        Password: password.value,
      }
      await publicService.registerAccount(data)
        .then((res) => {
          let { message } = this.state;
          message.isDisplay = true;
          message.type = "success";
          message.content = "Create new account successful";
          this.setState({
            message
          });
        })
        .catch((err) => {
          let { message } = this.state;
          message.isDisplay = true;
          message.type = "error";
          message.content = "Vui lòng kiểm tra lại thông tin đăng ký";
          this.setState({
            message
          });
        })
    }
  }
  render() {
    const { message } = this.state
    const { userName, password, email, phoneNumber } = this.state.form;
    return (
      <>
        <div id="register">
          <div className="container-scroll">

            <div className="container-fluid page-body-wrapper full-page-wrapper">
              <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                      {
                        message.isDisplay ? (<Stack sx={{ width: '100%' }} spacing={2}>
                          <Alert severity={message.type}> {message.content}
                          </Alert>
                        </Stack>
                        ) : (
                          ""
                        )}
                      <div className="brand-logo">
                        Oder<FastfoodIcon /> Food

                      </div>
                      <h4>New here?</h4>
                      <h6 className="font-weight-light">
                        Signing up is easy. It only takes a few steps
                      </h6>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="exampleInputUsername1"
                            placeholder="Username"
                            required
                            value={userName.value}
                            onChange={(ev) => this._setValue(ev, "userName")}
                          />
                          {
                            userName.err !== '' ? userName.err === "*" ? <ErrorForm message="User name cannot be empty" /> : '' : ""
                          }
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            placeholder="Email"
                            required
                            value={email.value}
                            onChange={(ev) => this._setValue(ev, "email")}
                          />
                          {
                            email.err !== '' ? email.err === "*" ? <ErrorForm message="email cannot be empty" /> : <ErrorForm message={email.err} /> : ""
                          }
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Phone Number"
                            required
                            value={phoneNumber.value}
                            onChange={(ev) => this._setValue(ev, "phoneNumber")}
                          />
                          {
                            phoneNumber.err !== '' ? phoneNumber.err === "*" ? <ErrorForm message="Phone Number cannot be empty" /> : <ErrorForm message={phoneNumber.err} /> : ""
                          }
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                            value={password.value}
                            onChange={(ev) => this._setValue(ev, "password")}
                          />
                          {
                            password.err !== '' ? password.err === "*" ? <ErrorForm message="Password cannot be empty" /> : <ErrorForm message={password.err} /> : ""
                          }

                        </div>
                        <div className="mt-3">
                          <div className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.onRegister}>
                            SIGN UP
                          </div>
                        </div>
                        <div className="text-center mt-4 font-weight-light">
                          Already have an account?{" "}
                          <Link to="/account-login" className="text-primary">
                            Login
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

