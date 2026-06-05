export function Header() {
    return (
        <div className="bg-base-background w-full pt-10 pb-30">
            <div className="MainContainer flex justify-between items-center">
                <h1>DT Money</h1>

                <button className="h-[50px] border-0 bg-green text-white font-bold px-4 transition-all rounded-sm cursor-pointer hover:bg-green-dark">Nova Transação</button>
            </div>
        </div>  
    )
}