import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <section className="is-flex is-align-items-center section py-20 h-fullscreen">
      <div className="container w-full">
        <div className="columns is-justify-content-space-between is-8 is-vcentered">
          <div className="column is-full-tablet is-two-fifths-desktop">
            <div className="has-mw-md mx-auto mx-0-desktop">
              <form action="#">
                <p className="has-text-info has-text-weight-semibold has-text-centered">
                  Sign In
                </p>
                <h3 className="has-text-centered mt-4 mb-5 title is-3">
                  Join Seekers
                </h3>

                <div className="is-flex is-gap-4 is-flex-direction-column">
                  <div className="is-relative">
                    <FloatLabel>
                      <InputText
                        unstyled
                        className="input w-full is-medium"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="email">Email</label>
                    </FloatLabel>
                  </div>
                  <div className="is-relative">
                    <FloatLabel>
                      <InputText
                        unstyled
                        className="input w-full is-medium"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label for="password">Password</label>
                    </FloatLabel>
                  </div>
                </div>

                <Button onClick={() => {navigate("/", {replace: true})}} unstyled className="button is-primary is-fullwidth my-5">
                  Sign in
                </Button>
                <small>
                  <a href="/#">Forgot password?</a>
                </small>

                <Divider
                  layout="horizontal"
                  className="flex md:hidden"
                  align="center"
                >
                  <b>OR</b>
                </Divider>

                <div>
                  <a className="button is-dark is-fullwidth mb-4" href="/#">
                    <span className="is-inline-block mr-2">
                      <svg
                        width="7"
                        height="12"
                        viewbox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.0898 11.8182V6.51074H5.90537L6.17776 4.4417H4.0898V3.12092C4.0898 2.52207 4.25864 2.11397 5.13515 2.11397L6.25125 2.11352V0.262891C6.05824 0.238289 5.39569 0.181885 4.62456 0.181885C3.01431 0.181885 1.9119 1.14594 1.9119 2.91601V4.4417H0.0908203V6.51074H1.9119V11.8182H4.0898Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-white">Sign in with Facebook</span>
                  </a>
                  <a className="button is-info is-fullwidth" href="/#">
                    <span className="is-inline-block mr-2">
                      <svg
                        width="13"
                        height="11"
                        viewbox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5455 2.0974C12.0904 2.29904 11.6022 2.43579 11.0892 2.49684C11.613 2.18316 12.014 1.68562 12.204 1.09459C11.7127 1.38508 11.1703 1.59601 10.5924 1.71035C10.1296 1.21667 9.47138 0.90918 8.74128 0.90918C7.34059 0.90918 6.20489 2.04488 6.20489 3.4448C6.20489 3.64334 6.2273 3.83726 6.27057 4.0227C4.16298 3.91684 2.29411 2.90708 1.0433 1.37272C0.824652 1.74665 0.700269 2.18237 0.700269 2.64748C0.700269 3.52746 1.14837 4.30391 1.82825 4.75817C1.41259 4.74427 1.02166 4.62993 0.67942 4.43987V4.47154C0.67942 5.69995 1.55399 6.72516 2.71362 6.95849C2.50116 7.01567 2.27712 7.04734 2.04534 7.04734C1.88156 7.04734 1.72318 7.03112 1.56788 7.00021C1.89081 8.00843 2.8272 8.74161 3.93663 8.76171C3.06902 9.44159 1.97504 9.84565 0.786814 9.84565C0.582087 9.84565 0.38043 9.83328 0.181885 9.81088C1.30445 10.5317 2.63716 10.952 4.06952 10.952C8.73514 10.952 11.2854 7.08752 11.2854 3.73607L11.2769 3.40773C11.7752 3.05231 12.2063 2.60577 12.5455 2.0974Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-white">Sign in with Twitter</span>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="column is-flex is-justify-content-center is-half-desktop is-hidden-mobile">
            {/* <img
              className="image is-fullwidth mx-auto"
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
              alt=""
            /> */}
            <img
              className="is-hidden-mobile"
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
