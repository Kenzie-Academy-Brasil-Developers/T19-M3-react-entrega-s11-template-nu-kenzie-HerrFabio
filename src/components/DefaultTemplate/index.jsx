import {Header} from "../Header/index.jsx";

export const DefaultTemplate = ({children}) => {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        </>
    );
};