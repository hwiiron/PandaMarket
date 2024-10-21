import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper login">
      <div className="inner">
        <h1>
          <Link className="logo" to={"/"}></Link>
        </h1>

        <div className="loginWrap">
          <form action="">
            <div className="input">
              <label htmlFor="email-input">이메일</label>
              <input
                id="email-input"
                type="text"
                placeholder="이메일을 입력해주세요."
                autoComplete="username"
              />

              <span className="emailMessage">이메일을 입력해 주세요.</span>
              <span className="emailErrorMessage">
                잘못된 이메일 형식입니다.
              </span>
            </div>

            <div className="input">
              <label htmlFor="password-input">비밀번호</label>

              <div className="password">
                <input
                  id="password-input"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="current-password"
                />
                <button className="passwordToggleBtn" type="button"></button>
              </div>

              <span className="passwordMessage">비밀번호를 입력해 주세요.</span>
              <span className="passwordLengthError">
                비밀번호를 8자 이상 입력해 주세요.
              </span>
            </div>

            <button
              className="loginBtn"
              type="button"
              // onclick="location.href='items.html'"
              disabled
            >
              로그인
            </button>
          </form>
        </div>

        <div className="easyLogin">
          <p>간편 로그인하기</p>

          <ul>
            <li>
              <a
                className="google"
                href="https://google.com"
                target="_blank"
              ></a>
            </li>

            <li>
              <a className="kakao" target="_blank"></a>
            </li>
          </ul>
        </div>

        <p className="signup">
          판다마켓이 처음이신가요? <Link to={"/signup"}>회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
