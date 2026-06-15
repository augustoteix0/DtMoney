import { ArrowCircleDownIcon, ArrowCircleUpIcon, CurrencyDollarIcon } from "@phosphor-icons/react";
import { priceFormatter } from "../utils/formatter";
import { useSummary } from "../hooks/useSummary";

export function Summary() {
    const summary = useSummary()

    return (
        <div className="MainContainer grid grid-cols-1 md:grid-cols-3 gap-4 mt-[-5rem]"> 
            <div className="SummaryCard">
                <header className="HeaderSummaryCard">
                    <span>Entradas</span>
                    <ArrowCircleUpIcon size={32} className="text-green-light" />
                </header>
                <strong className="StrongSummaryCard">{priceFormatter.format(summary.income)}</strong>
            </div>

            <div className="SummaryCard">
                <header className="HeaderSummaryCard">
                    <span>Saidas</span>
                    <ArrowCircleDownIcon size={32} className="text-red-400" />
                </header>
                <strong className="StrongSummaryCard">{priceFormatter.format(summary.outcome)}</strong>
            </div>

            <div className="SummaryCard bg-green-dark">
                <header className="HeaderSummaryCard">
                    <span>Total</span>
                    <CurrencyDollarIcon size={32} className="text-green-light" />
                </header>
                <strong className="StrongSummaryCard">{priceFormatter.format(summary.total)}</strong>
            </div>
            
        </div>
    )
}