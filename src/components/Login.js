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
        <h3>
          Login <hr />
        </h3>
        <img
          id="login-img"
          src="https://picsum.photos/200"
          className="rounded-circle"
          alt="login user image"
        />
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
