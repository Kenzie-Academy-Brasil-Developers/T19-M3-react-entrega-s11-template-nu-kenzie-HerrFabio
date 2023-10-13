import {FinanceCard} from "./FinanceCard/index.jsx"

export const FinanceList = ({financeInfo, deleteCard}) => {
    

    return (
        <section>
            {financeInfo.length > 0 ?(

            <ul>
                {financeInfo.map ((balance) => {
                    
                    const {description, amount, selectedOption, id} = balance;

                    return (<FinanceCard key={id} id={id}
                        description={description} 
                        amount={amount} 
                        selectedOption={selectedOption} 
                        deleteCard={deleteCard}/>);
                    
                } )}
                
            </ul>
            ) :
            <h2>Você não possui nenhum lançamento</h2>
        }
        </section>
    );
}