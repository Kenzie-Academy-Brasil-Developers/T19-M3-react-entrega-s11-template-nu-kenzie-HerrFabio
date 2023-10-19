import { useState } from "react";
import { TextareaForm } from "../FinanceForm/TextareaForm/index.jsx";
import { InputForm } from "../FinanceForm/InputForm/index.jsx";
import { SelectForm } from "../FinanceForm/SelectForm/index.jsx";
import styles from "./style.module.scss"

export const FinanceForm = ({addFinanceInfo}) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const submit = (e) => {
        e.preventDefault();
        addFinanceInfo(description, amount, selectedOption);
        setDescription("");
        setAmount("");
        setSelectedOption("");

    };
    

    return (

        <form className={styles.formBox} onSubmit={submit}>
            <TextareaForm 
                label="Descrição"
                placeholder="Digite sua descrição"
                id="description"
                value={description}
                setValue={setDescription} 
                required/>


            <InputForm
                label="Valor (R$)"
                type="number"
                placeholder="1"
                id="number"
                value={amount}
                setValue={setAmount} 
                required/>

            <SelectForm
                label="option"
                name="option"
                id="option"
                value={selectedOption}
                setValue={setSelectedOption} 
                required

            />
            
            <button className="btn large" type="submit">Inserir Valor</button>
            
        </form>
    );
};
