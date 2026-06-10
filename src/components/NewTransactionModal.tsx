import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  XIcon,
} from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-full h-full inset-0 bg-[rgba(0,0,0,0.75)]" />

      <Dialog.Content className="min-w-[32rem] rounded-md py-3 px-3.5 bg-base-shape-secundaria fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close className="absolute bg-transparent border-0 top-2 right-2 leading-0 cursor-pointer text-base-text">
          <XIcon size={24} />
        </Dialog.Close>

        <form
          action=""
          className="mt-4 flex flex-col gap-2"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            className="rounded-md border-0 bg-base-background text-base-text p-3 placeholder:text-base-placeholder"
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            className="rounded-md border-0 bg-base-background text-base-text p-3 placeholder:text-base-placeholder"
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            className="rounded-md border-0 bg-base-background text-base-text p-3 placeholder:text-base-placeholder"
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  className="grid grid-cols-2 gap-2 mt-1.5"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <RadioGroup.Item
                    className="group bg-base-shape-principal p-4 flex items-center justify-center gap-1.5 rounded-md cursor-pointer border-0 text-base-text data-[state=checked]:bg-green data-[state=checked]:text-white data-[state=unchecked]:hover:bg-white/10 transition-all"
                    value="income"
                  >
                    <ArrowCircleUpIcon
                      size={24}
                      className="text-green group-data-[state=checked]:text-white"
                    />{" "}
                    Entrada
                  </RadioGroup.Item>

                  <RadioGroup.Item
                    className="group bg-base-shape-principal p-4 flex items-center justify-center gap-1.5 rounded-md cursor-pointer border-0 text-base-text data-[state=checked]:bg-red data-[state=checked]:text-white data-[state=unchecked]:hover:bg-white/10 transition-all"
                    value="outcome"
                  >
                    <ArrowCircleDownIcon
                      className="text-red group-data-[state=checked]:text-white"
                      size={24}
                    />{" "}
                    Saida
                  </RadioGroup.Item>
                </RadioGroup.Root>
              );
            }}
          />

          <button
            className="h-[58px] border-0 bg-green text-white font-bold py-0 px-3 rounded-md mt-3 cursor-pointer hover:bg-green-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
