import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";



export function Transactions() {
    const transactions  = useContextSelector(TransactionContext, (context) => {
      return context.transactions
    })

  return (
    <div className="MainContainer mt-12 px-4 md:px-0 max-w-full overflow-x-hidden">
      <Header />
      <Summary />

      <div className="w-full max-w-full overflow-x-auto mt-5">
        <SearchForm />
        <table className="w-full min-w-[600px] [border-collapse:separate] [border-spacing:0_0.5rem] mt-5">
          <tbody className="w-full">
            {transactions.map((item) => (
              <tr key={item.id}>
                <td className="TdTableTransactions rounded-tl-md rounded-bl-md">
                  {item.description}
                </td>
                <td
                  className={`TdTableTransactions ${
                    item.type === "income"
                      ? "text-green"
                      : "text-red"
                  }`}
                >
                  {item.type === "outcome" && "- "}
                  {priceFormatter.format(item.price)}
                </td>
                <td className="TdTableTransactions">{item.category}</td>
                <td className="TdTableTransactions rounded-tr-md rounded-br-md">
                  {dateFormatter.format(new Date(item.createdAt))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
