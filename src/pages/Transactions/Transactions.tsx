import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";



export function Transactions() {

    return (
        <div>
            <Header/>
            <Summary/>
            
            <div className="MainContainer mt-12">
                <SearchForm/>
                <table className="w-full [border-collapse:separate] [border-spacing:0_0.5rem] mt-5">
                    <tbody>
                        <tr>
                            <td className="TdTableTransactions rounded-tl-md rounded-bl-md">Desenvolvimento de site</td>
                            <td className={`TdTableTransactions`}>R$ 12.000,00</td>
                            <td className="TdTableTransactions">Vendas</td>
                            <td className="TdTableTransactions rounded-tr-md rounded-br-md">13/04/2022</td>
                        </tr>
                        <tr>
                            <td className="TdTableTransactions rounded-tl-md rounded-bl-md">Hamburguer</td>
                            <td className={`TdTableTransactions`}>- R$ 59,00</td>
                            <td className="TdTableTransactions">Alimentação</td>
                            <td className="TdTableTransactions rounded-tr-md rounded-br-md">10/04/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}