import "./register.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="heading">Register your account</div>
          <div className="inputFields">
            <label>Email</label>
            <input type="text" placeholder="Your email" className="input" />
            <label>Password</label>
            <input type="text" placeholder="Password" className="input" />
            <button>Register</button>
          </div>
          <div className="line">
            <div className="or">OR</div>
          </div>

          <div className="socialMedia">
            <GoogleIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
