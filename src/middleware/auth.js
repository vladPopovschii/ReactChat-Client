import KEYS from "../KEYS";

export default function auth(props) {
    const token = localStorage.getItem(KEYS.LOCAL_STORAGE_KEY);
    console.log(token);
    if (!token) {
        props.history.push("/login");
        return false;
    }
    return true;
}
