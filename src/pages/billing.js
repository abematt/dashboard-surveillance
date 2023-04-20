export default function billing() {

    return (
        <>
            <div className="flex justify-between items-center gap-3">
                <h1 className="font-extrabold text-6xl dark:text-white h-20">Billing</h1>
                <button className="flex justify-center cursor-pointer text-white bg-button-blue box-content p-2 mr-2 rounded-lg">Generate Invoice</button>
            </div>
            <div className="flex justify-center     flex-wrap gap-3">
                <div className="w-1/2 h-1/2">
                    <iframe className="rounded-lg" width="600" height="400" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmhJcbflGgGrzuMgwwRCXDprqcymprg_GtJTLGGmxiez-Rz-JgFJR5bE5BDNhxWcUlMQo3N2bPC5Qt/pubchart?oid=19293348&amp;format=interactive"></iframe>
                </div>
            <iframe className="rounded-lg" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmhJcbflGgGrzuMgwwRCXDprqcymprg_GtJTLGGmxiez-Rz-JgFJR5bE5BDNhxWcUlMQo3N2bPC5Qt/pubchart?oid=575545420&amp;format=interactive"></iframe>
            <iframe className="rounded-lg" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmhJcbflGgGrzuMgwwRCXDprqcymprg_GtJTLGGmxiez-Rz-JgFJR5bE5BDNhxWcUlMQo3N2bPC5Qt/pubchart?oid=519287949&amp;format=interactive"></iframe>
            <iframe className="rounded-lg" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmhJcbflGgGrzuMgwwRCXDprqcymprg_GtJTLGGmxiez-Rz-JgFJR5bE5BDNhxWcUlMQo3N2bPC5Qt/pubchart?oid=452459723&amp;format=interactive"></iframe>
            {/* <iframe className="rounded-lg" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmhJcbflGgGrzuMgwwRCXDprqcymprg_GtJTLGGmxiez-Rz-JgFJR5bE5BDNhxWcUlMQo3N2bPC5Qt/pubchart?oid=1373287771&amp;format=interactive"></iframe> */}
            </div>
            
            
        </>

    );
}