import toast from "react-hot-toast";
import loginImg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
      .then(() => {
        toast.success("Logged in successfully");
        const user = { email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            if (res.data.success) {
              navigate(location.state?.path ? location.state.path : "/")
             
              e.target.reset();
            }
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen ">
        <div className="hero-content gap-20 flex-col lg:flex-row">
          <div className="">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="my-8 text-center font-bold text-4xl">Login</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#FF3811] text-white hover:text-black"
                >
                  Login
                </button>
              </div>
              <div className="flex items-center">
                <p className="font-medium">Don&apos;t have an account?</p>
                <Link to="/register" className="btn btn-link text-[#FF3811]">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
