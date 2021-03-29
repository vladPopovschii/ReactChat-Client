import KEYS from "../KEYS";

export default function (history) {
    localStorage.removeItem(KEYS.LOCAL_STORAGE_KEY);
    history.push("/login");
}
