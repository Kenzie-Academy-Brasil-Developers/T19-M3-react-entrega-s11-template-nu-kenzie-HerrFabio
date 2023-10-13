

export const SelectForm = ({label, selectOptions, value, setValue, id}) => {
     
  return (
    <div>
      <h3>Resumo Financeiro</h3>
       <select
        name={id}
        id={id} 
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}>
        
        <option value="-">-</option>
        <option value="entrada">Entrada</option>
        <option value="despesa">Despesa</option>
        
      </select>
      
      <p>Tipo de valor {selectOptions}</p>
    </div>
  );
};