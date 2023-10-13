import { DefaultTemplate } from "../../components/DefaultTemplate/index.jsx";
import { FinanceForm } from "../../components/FinanceForm/index.jsx"
import { FinanceList } from "../../components/FinanceList/index.jsx";
import { Total } from "../../components/FinanceForm/Total/index.jsx";


export const LandingPages = ({financeInfo, addFinanceInfo, deleteCard}) => {
    return (
        <>
            <DefaultTemplate>
                <FinanceForm  addFinanceInfo={addFinanceInfo}/>
                <FinanceList financeInfo={financeInfo} deleteCard={deleteCard}/>
                <Total financeInfo={financeInfo} />
            </DefaultTemplate>
        </>
    
    );
};