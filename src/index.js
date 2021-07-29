import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#4049ff",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "#21268a",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/messages"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#21268a",
        }}
      >
        Messages
      </NavLink>


      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#21268a",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#21268a",
        }}
      >
        Login
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home, yo!</h1>
    </div>
  );
}


function Messages() {
  return (
    <div>
      <h1>Messages</h1>
      <p><b>Message from Claire: </b>Never understimate yourself</p>
      <p><b>Message from Joe: </b>Gonna be a while until you stop</p>
      <p><b>Message from Josh: </b>Give it your best shot</p>
      <p><b>Message from John: </b>You got it</p>
      <p><b>Message from Trevor: </b>Up until now, you've done great</p>
    </div>
  );
}


function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login Form</h2>      
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}


ReactDOM.render(
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route exact path = "/login">
        <Login/>
      </Route>  
      <Route exact path = "/messages">
        <Messages/>
      </Route>  
      <Route exact path = "/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
