import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const Bg = () => {
  return (
    <div id="bg">
      <div className="half one"></div>
      <div className="half two"></div>
    </div>
  );
};

const LoginBox = () => {
  return (
    <div id="loginbox">
      <div id="box" className="card p-3">
        {/* login headers */}
        <img
          id="login-img"
          src="https://loremflickr.com/g/240/240/girl"
          className="rounded-circle"
          alt="login user image"
          width="100px"
        />
        <hr style={{ width: "90%" }} />
        <h3 className="text-secondary">Admin Login</h3>
        <div className="small text-secondary">Sign in to your account</div>

        {/* login form */}
        <InputGroup className="my-2">
          <FormControl
            placeholder="yourname@email.com"
            aria-label="User's email"
            aria-describedby="user-email"
            type="email"
            required
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
                class="bi bi-check2"
                viewBox="0 0 16 16"
                color="#3c3c3c"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        {/* password box */}
        <InputGroup className="my-2">
          <FormControl
            placeholder="password"
            aria-label="User's email"
            aria-describedby="user-email"
            type="password"
            required
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
                class="bi bi-check2"
                viewBox="0 0 16 16"
                color="#3c3c3c"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
              </svg>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        {/* user input form */}
        <Form style={{ width: "100%" }}>
          <div id="remember-login">
            <Form.Group>
              <Form.Check variant="success" label="Remember me" />
            </Form.Group>
            <Button variant="success" style={{ backgroundColor: "#189724" }}>
              <span className="text-uppercase">Login</span>
            </Button>
          </div>
        </Form>

        {/* social media links */}
        <div>{/* under construction */}</div>
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
