import styles from "./style.module.scss"
import NuKenzie from "../../assets/nu-kenzie.jpg";

export const Header = () => {
    return (
        <div className={styles.headerBox}>
            <img src={NuKenzie} alt="Logo NuKenzie" />
        </div>
    );
};