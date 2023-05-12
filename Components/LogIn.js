import React from "react";

import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./CSS/login.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="section-wrap">
        <div className="login-wrap">
          <h1 class="">Log in to your account</h1>
          <p class="">
            To access and manage tickets in jira, please log into your account.
          </p>
          <div className="login-form">
            <div class="fv-form-row">
              <label class="fv-form-label" for="fname">
                Username
              </label>
              <input
                class="fv-input-field"
                type="text"
                id="fname"
                name="fname"
                required="required"
              ></input>
              <span id="for_fname" class="required-error">
                First name is required.
              </span>
            </div>
            <div class="fv-form-row mt-2">
              <label class="fv-form-label" for="password">
                Password
              </label>
              <input
                class="fv-input-field"
                type="password"
                id="password"
                name="password"
                required="required"
              ></input>
              <span id="for_fname" class="required-error">
                First name is required.
              </span>
            </div>
            <div class="fv-flex-action mt-3">
              <Link to="/Support">
                <a href="#" class="fv-button fv-primary-button fv-resp-w100">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
