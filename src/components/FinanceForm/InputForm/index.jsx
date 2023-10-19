import styles from "./style.module.scss";

export const InputForm = ({label, id, type, placeholder, value, setValue, required}) => {
    return (
        <div className={styles.inputBox}>
            <label className="paragraph two color">{label}</label>
            <input
            name={id}
            id={id} 
            type={type}
            placeholder={placeholder}
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            required={required}/>
        </div>
    );
};