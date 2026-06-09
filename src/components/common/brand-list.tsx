import Image from "next/image";

const BrandItems = () => {
    return ( 
        <div className="space-y-6">
            <h3 className="px-5 font-semibold">Marcas Parceiras</h3>
             <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/Nike.svg" alt="Logo Nike" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">Nike</p>
                </div>
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/Adidas.svg" alt="Logo Adidas" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">Adidas</p>
                </div>
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/Puma.svg" alt="Logo Puma" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">Puma</p>
                </div>
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/NewBalance.svg" alt="Logo New Balance" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">New Balance</p>
                </div>
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/Converse.svg" alt="Logo Converse" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">Converse</p>
                </div>
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/PoloRalphLauren.svg" alt="Logo Polo" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">Polo</p>
                </div>
                <div className="flex flex-col items-center gap-1 justify-center align-middle">
                    <div className="flex border border-solid p-2 rounded-md h-20 w-20 justify-center align-center">
                        <Image src="/Zara.svg" alt="Logo Zara" height={75} width={75} />
                    </div>
                    <p className="truncate text-sm font-medium">Zara</p>
                </div>
             </div>
        </div>
     );
}
 
export default BrandItems;