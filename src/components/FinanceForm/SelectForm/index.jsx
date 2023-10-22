import styles from "./style.module.scss"

export const SelectForm = ({label, selectOptions, value, setValue, id, required}) => {
     
  return (
    <div className={styles.selectBox}>
      
       <select className="selectBox"
        name={id}
        id={id} 
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}>
         
        <option value="-">-</option>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
        
      </select>
      
      <p className="paragraph two color">Tipo de valor {selectOptions}</p>
    </div>
  );
};