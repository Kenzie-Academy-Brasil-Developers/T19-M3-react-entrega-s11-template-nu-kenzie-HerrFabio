import { useState } from "react";
import { TextareaForm } from "../FinanceForm/TextareaForm/index.jsx";
import { InputForm } from "../FinanceForm/InputForm/index.jsx";
import { SelectForm } from "../FinanceForm/SelectForm/index.jsx";

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

        <form onSubmit={submit}>
            <TextareaForm
                label="Descrição"
                placeholder="Digite sua descrição"
                id="description"
                value={description}
                setValue={setDescription} />


            <InputForm
                label="number"
                type="number"
                placeholder="1"
                id="number"
                value={amount}
                setValue={setAmount} />

            <SelectForm
                label="option"
                name="option"
                id="option"
                value={selectedOption}
                setValue={setSelectedOption} 

            />



            <button type="submit">Inserir Valor</button>
        </form>
    );
};
