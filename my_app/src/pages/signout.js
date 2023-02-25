import { useAuthContext } from "components/context/state";
import { auth } from "components/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function Signout() {
    const {setIsAuth} = useAuthContext();
    const router = useRouter();
    const logOut = () => {
        signOut(auth).then(() => {
            setIsAuth(false)
            localStorage.clear();
            router.push("/signin");
        })
    }
    return (
        <div>
            <button onClick={logOut}>ログアウト</button>
        </div>
    );
}

export default Signout;