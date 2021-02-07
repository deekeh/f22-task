import { Link } from "react-router-dom";

// bootstrap
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const Bg = () => {
  return (
    <div id="bg">
      <div className="half one"></div>
      <div className="half two"></div>
    </div>
  );
};

const LoginBox = (props) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e);
    // props.history.push("/dashboard");
    window.location.href = "/#/dashboard";
  };
  return (
    <div id="loginbox">
      <div id="box" className="card">
        {/* login headers */}
        <img
          id="login-img"
          src="https://loremflickr.com/g/240/240/girl"
          className="rounded-circle mx-3 mt-3"
          alt="login user image"
          width="100px"
        />
        <hr style={{ width: "80%" }} />
        <h3 className="text-secondary mx-3">Admin Login</h3>
        <div className="small text-secondary mx-3">Sign in to your account</div>

        {/* login form */}

        {/* user input form */}
        <Form onSubmit={handleLogin} className="px-3" style={{ width: "100%" }}>
          <InputGroup className="my-2 px-3">
            <FormControl
              placeholder="yourname@email.com"
              aria-label="User's email"
              aria-describedby="user-email"
              type="email"
              required
              name="email"
            />
            <InputGroup.Append>
              <InputGroup.Text
                id="user-email"
                style={{ backgroundColor: "#ffffff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                  color="#3c3c3c"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          {/* password box */}
          <InputGroup className="my-2 px-3">
            <FormControl
              placeholder="password"
              aria-label="Password"
              aria-describedby="user-password"
              type="password"
              required
              name="password"
              // pattern="/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/"
              // title="The password should contain an Upper Case letter, a lowercase letter, a digit and a special character"
              minLength="8"
            />
            <InputGroup.Append>
              <InputGroup.Text
                // id="user-email"
                style={{ backgroundColor: "#ffffff" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                  color="#3c3c3c"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <div id="remember-login">
            <Form.Group>
              <Form.Check variant="success" label="Remember me" />
            </Form.Group>
            <Button
              className="btn text-white text-uppercase"
              style={{ backgroundColor: "#189724" }}
              // to="/dashboard"
              type="submit"
              as="button"
            >
              Login
            </Button>
          </div>
        </Form>

        {/* social media links */}
        <div
          className=" w-100 p-3 text-center"
          style={{ backgroundColor: "#c3c3c3" }}
        >
          <span>
            <span className="mr-3">Connect with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#000000"
              className="bi bi-twitter mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#000000"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <>
      <Bg />
      <LoginBox />
    </>
  );
};

export default Login;
