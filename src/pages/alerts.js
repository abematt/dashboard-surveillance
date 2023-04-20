import AlertDetails from "@/components/AlertDetails";

export default function alerts() {
    return (
        <>
            <div className="flex justify-between items-center gap-3">
            <h1 className="font-extrabold text-6xl dark:text-white h-20">Alert List</h1>
             <button className="flex justify-center cursor-pointer text-white bg-button-blue box-content p-2 mr-2 rounded-lg">Configure Alert</button>
            </div>
         
             <div className="grid lg:grid-cols-4 gap-3 mb-16">
             <AlertDetails alertDetails={{date:"12 Dec 2021",location:"Engineering Building",time:"12:45 AM"}}/>
             <AlertDetails alertDetails={{date:"1 Oct 2021",location:"Engineering Building",time:"11:30 PM"}}/>
             <AlertDetails alertDetails={{date:"9 Sept 2021",location:"Engineering Building",time:"10:30 PM"}}/>
             <AlertDetails alertDetails={{date:"10 Aug 2021",location:"Engineering Building",time:"9:12 PM"}}/>
            </div>
        </>
    );
}