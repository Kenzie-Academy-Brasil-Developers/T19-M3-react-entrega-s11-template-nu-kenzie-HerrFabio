import { DefaultTemplate } from "../../components/DefaultTemplate/index.jsx";
import { FinanceForm } from "../../components/FinanceForm/index.jsx"
import { FinanceList } from "../../components/FinanceList/index.jsx";
import { Total } from "../../components/FinanceForm/Total/index.jsx";


export const LandingPages = ({financeInfo, addFinanceInfo, deleteCard, financeCard}) => {
    return (
        <>
            <DefaultTemplate>
                <FinanceForm  addFinanceInfo={addFinanceInfo}/>
                <Total financeInfo={financeInfo} />
                <FinanceList financeInfo={financeInfo} deleteCard={deleteCard} financeCard={financeCard}/>
            </DefaultTemplate>
        </>
    
    );
};