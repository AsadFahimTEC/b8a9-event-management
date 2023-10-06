import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <h1 className="text-2xl text-[#403F3F] text-center font-semibold">
                  Register your account
                </h1>
                <hr className="mt-4" />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#403F3F] text-sm font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#403F3F] text-sm font-semibold">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your photo url"
                    name="photo"
                    className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                    required
                  />
                </div>

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
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>
              <div className="flex gap-2 mt-3">
                <input type="checkbox" name="checkbox" id="" />
                <p className="text-[#706F6F] font-normal text-xs">
                  Accept <span className="font-bold">Term & Conditions</span>
                </p>
              </div>
              <div className="form-control mt-4">
                <button className="p-2 rounded bg-green-600 text-white">
                  Register
                </button>
              </div>
              <p className="text-center font-semibold text-xs mt-4">
                Already Have An Account ?
                <Link className="text-[#F75B5F]" to="/login"> Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
