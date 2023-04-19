import AlertDetails from "@/components/AlertDetails";

export default function alerts() {
    return (
        <>
             <p className="text-white-700 text-3xl mb-16 font-bold">Alert List</p>
             <div className="grid lg:grid-cols-4 gap-3 mb-16">
             <AlertDetails alertDetails={{date:"12 Dec.2021",location:"Engineering Building",time:"12:45 AM"}}/>
             <AlertDetails alertDetails={{date:"12 Dec.2021",location:"Engineering Building",time:"12:45 AM"}}/>
             <AlertDetails alertDetails={{date:"12 Dec.2021",location:"Engineering Building",time:"12:45 AM"}}/>
             <AlertDetails alertDetails={{date:"12 Dec.2021",location:"Engineering Building",time:"12:45 AM"}}/>
            </div>
        </>
    );
}