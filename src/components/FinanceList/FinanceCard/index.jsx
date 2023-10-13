export const FinanceCard = ({ description, amount, selectedOption, id, deleteCard }) => {

    return (

        <div>
            <h2>{description}</h2>
            {amount}
            {selectedOption}
            <button onClick={() => deleteCard(id)}>Excluir</button>

        </div>

    );
};