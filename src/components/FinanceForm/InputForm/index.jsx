export const InputForm = ({label, id, type, placeholder, value, setValue}) => {
    return (
        <div>
            <label>{label}</label>
            <input
            name={id}
            id={id} 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    );
};