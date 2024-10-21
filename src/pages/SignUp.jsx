import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="wrapper login">
      <div className="inner">
        <h1>
          <a className="logo" href="/"></a>
        </h1>

        <div className="loginWrap">
          <form action="">
            <div className="input">
              <label htmlFor="email-input">이메일</label>
              <input
                id="email-input"
                type="text"
                placeholder="이메일을 입력해주세요."
              />

              <span className="emailMessage">이메일을 입력해 주세요.</span>
              <span className="emailErrorMessage">
                잘못된 이메일 형식입니다.
              </span>
            </div>

            <div className="input">
              <label htmlFor="nickname-input">닉네임</label>
              <input
                id="nickname-input"
                type="text"
                placeholder="닉네임을 입력해주세요."
                autoComplete="username"
              />

              <span className="nickNameMessage">닉네임을 입력해 주세요.</span>
            </div>

            <div className="input">
              <label htmlFor="password-input">비밀번호</label>

              <div className="password">
                <input
                  id="password-input"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="new-password"
                />
                <button className="passwordToggleBtn" type="button"></button>
              </div>

              <span className="passwordMessage">비밀번호를 입력해 주세요.</span>
              <span className="passwordLengthError">
                비밀번호를 8자 이상 입력해 주세요.
              </span>
            </div>

            <div className="input">
              <label htmlFor="passwordCheck-input">비밀번호 확인</label>

              <div className="password">
                <input
                  id="passwordCheck-input"
                  type="password"
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  autoComplete="new-password"
                />
                <button
                  className="passwordCheckToggleBtn"
                  type="button"
                ></button>
              </div>

              <span className="passwordMismatchError">
                비밀번호가 일치하지 않습니다.
              </span>
            </div>

            <button
              className="signupBtn"
              type="button"
              // onclick="location.href='signin.html'"
              disabled
            >
              회원가입
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
          이미 회원이신가요? <Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
