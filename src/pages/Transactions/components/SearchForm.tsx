import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function SearchForm() {
    return (
        <div >
            <form action="" className="flex gap-2">
                <input type="text" placeholder="Busque por transações" className="flex-1 rounded-md border-0 bg-base-background text-base-placeholder p-2"/>
                <button type="submit" className="flex items-center gap-0.5 p-2 bg-transparent border-2 border-green text-green font-bold rounded-md hover:bg-green hover:text-white transition-all"><MagnifyingGlassIcon size={20} /> Buscar</button>
            </form>
        </div>
    )
}