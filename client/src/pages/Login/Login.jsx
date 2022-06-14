import "./login.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Login = () => {
  return (
    <>
      <div className="container">
        <a href="/" className="title">
          HotelFinder.com
        </a>
        <div className="wrapper">
          <div className="heading">Login In</div>
          <div className="inputFields">
            <label>Email</label>
            <input type="text" placeholder="Your email" className="input" />
            <label>Password</label>
            <input type="text" placeholder="Password" className="input" />
            <button>Login</button>
            <a href="/" className="forgotPassow">
              Forgot password?
            </a>
          </div>
          <div className="line">
            <div className="or">OR</div>
          </div>

          <div className="socialMedia">
            <GoogleIcon style={{ color: "red" }} />
            <FacebookIcon style={{ color: "blue" }} />
            <InstagramIcon style={{ color: "crimson" }} />
          </div>

          <h4 className="registerText">
            Don't have an account?
            <a href="/register" style={{ marginLeft: "5px" }}>
              Register
            </a>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Login;
