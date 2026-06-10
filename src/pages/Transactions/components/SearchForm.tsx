import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionContext } from "../../../contexts/TransactionsContext";
import { useContext } from "react";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionContext)


  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <div>
      <form
        action=""
        className="flex gap-2"
        onSubmit={handleSubmit(handleSearchTransactions)}
      >
        <input
          type="text"
          placeholder="Busque por transações"
          className="flex-1 rounded-md border-0 bg-base-background text-base-placeholder p-2"
          {...register("query")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-0.5 p-2 bg-transparent border-2 border-green text-green font-bold rounded-md hover:bg-green hover:text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <MagnifyingGlassIcon size={20} /> Buscar
        </button>
      </form>
    </div>
  );
}
