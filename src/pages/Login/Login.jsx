import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <h1 className="text-3xl text-[#403F3F] text-center font-semibold">
                  Login your account
                </h1>
                <hr className="mt-4" />
                <label className="label">
                  <span className="label-text text-[#403F3F] text-sm font-semibold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] text-sm font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>
              <div className="form-control mt-1">
                <button className="p-2 rounded bg-green-600 text-white">
                  Login
                </button>
              </div>
              <div className="form-control mt-1">
                <button className="p-2 rounded bg-red-600 text-white">
                  Login With Google
                </button>
              </div>
              <p className="text-center font-semibold text-xs mt-4">
                Don't Have An Account ?
                <Link className="text-[#F75B5F]" to="/register"> Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
