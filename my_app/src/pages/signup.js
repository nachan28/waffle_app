import { useAuthContext } from "components/context/state";
import { auth } from "components/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const { setIsAuth, email, setEmail, password, setPassword } = useAuthContext();
  const postUserInfo = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        router.push("/profileTA");
      }
    );
  };

  return (
    <>
      <h1>アカウント新規作成</h1>
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
