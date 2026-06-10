import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";

interface CreateTransactionInput {
  description: string,
  price:number,
  category: string,
  type: 'income' | 'outcome'
}

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
    createTransactions: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
      async function fetchTransactions(query?: string) {
    
        const response = await api.get('/transactions', {
          params: {
            _sort: 'createdAt',
            _order: 'desc',
            q: query
          }
        })
        setTransactions(response.data)
      }

      async function createTransactions(data: CreateTransactionInput){
        const { description, price, category, type } = data

        const response = await api.post('/transactions', {
              description,
              price,
              category,
              type,
              createdAt: new Date()
            })

            setTransactions(state =>[response.data, ...state])
      }
    
      useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchTransactions()
      }, [])
    

    return (
        <TransactionContext.Provider value={{ transactions, fetchTransactions, createTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}