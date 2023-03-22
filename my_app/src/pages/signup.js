import { useAuthContext } from "components/context/state";
import { auth } from "components/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import {postData} from "../lib/utils";

function Signup() {
  const router = useRouter();
  const { setIsAuth, user, setUser, email, setEmail, password, setPassword } = useAuthContext();
  const postUserInfo = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        router.push("/profileTA");
      }
    );
    const data = {username: user, email: email};
    postData("/api/signup", data);
  };

  return (
    <>
      <h1>アカウント新規作成</h1>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        placeholder="ニックネーム"
      />
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="メールアドレス"
      />
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="パスワード"
      />
      <button onClick={postUserInfo}>作成</button>
    </>
  );
}

export default Signup;
