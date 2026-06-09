import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions/Transactions";

export function App() {
  return (
    <>
    <TransactionsProvider>
      <Transactions/>
    </TransactionsProvider>
    </>
  )
}

