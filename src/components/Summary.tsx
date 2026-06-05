import { ArrowCircleDownIcon, ArrowCircleUpIcon, CurrencyDollarIcon } from "@phosphor-icons/react";

export function Summary() {
    return (
        <div className="MainContainer grid grid-cols-3 gap-4 mt-[-5rem]">
            <div className="SummaryCard">
                <header className="HeaderSummaryCard">
                    <span>Entradas</span>
                    <ArrowCircleUpIcon size={32} className="text-green-light" />
                </header>
                <strong className="StrongSummaryCard">R$ 17.400,00</strong>
            </div>

            <div className="SummaryCard">
                <header className="HeaderSummaryCard">
                    <span>Saidas</span>
                    <ArrowCircleDownIcon size={32} className="text-red-400" />
                </header>
                <strong className="StrongSummaryCard">R$ 17.400,00</strong>
            </div>

            <div className="SummaryCard bg-green-dark">
                <header className="HeaderSummaryCard">
                    <span>Total</span>
                    <CurrencyDollarIcon size={32} className="text-green-light" />
                </header>
                <strong className="StrongSummaryCard">R$ 17.400,00</strong>
            </div>
            
        </div>
    )
}