import styles from "./style.module.scss"

export const TextareaForm = ({label,type, id, placeholder, value, setValue, required}) => {
    return (
        <div className={styles.textareaBox  }>
            <label className="paragraph two color" htmlFor="id">{label}</label>
            <textarea 
            name={id} 
            id={id} 
            type={type}
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            required={required}
            ></textarea>
            <p className="paragraph two colorTwo">Ex: Compra de roupas</p>
        </div>
    );
};