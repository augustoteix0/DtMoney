import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
      async function fetchTransactions(query?: string) {
        const url = new URL('http://localhost:3333/transactions')

        if(query) {
          url.searchParams.append('q', query)
        }

        const response = await fetch(url.toString())
        const data = await response.json()
    
        setTransactions(data)
      }
    
      useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchTransactions()
      }, [])
    

    return (
        <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}