export const TextareaForm = ({label,type, id, placeholder, value, setValue}) => {
    return (
        <div>
            <label htmlFor="id">{label}</label>
            <textarea 
            name={id} 
            id={id} 
            type={type}
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            ></textarea>
            <p>Ex: Compra de roupas</p>
        </div>
    );
};