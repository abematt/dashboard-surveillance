import CameraDetails from "@/components/CameraDetails";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function manage() {
    return (
        <>
            <div className="flex justify-start items-center gap-3">
                <h1 className="font-extrabold text-6xl dark:text-white h-20">Manage Cameras </h1>
        
                <PencilSquareIcon className="cursor-pointer text-white bg-button-blue box-content p-4 h-5 w-5 rounded-full" />
                <TrashIcon className="cursor-pointer text-white bg-pink box-content p-4 h-5 w-5 rounded-full"/>
                
            </div>
            <div className="grid lg:grid-cols-4 gap-3 mb-16">
                <h2 class="text-2xl font-extrabold dark:text-white">Engineering Building</h2>
                <CameraDetails cameraName={{name:"Engineering Front",location:"Engineering Building",health:80}}/>
                <CameraDetails cameraName={{name:"Engineering Lobby",location:"Engineering Building",health:50}}/>
                <CameraDetails cameraName={{name:"Engineering South",location:"Engineering Building",health:75}}/>
                <CameraDetails cameraName={{name:"Engineering North",location:"Engineering Building",health:90}}/>
            </div>
            <div className="grid lg:grid-cols-4 gap-3 mb-16">
                <h2 class="text-2xl font-extrabold dark:text-white">Main Campus</h2>
                <CameraDetails cameraName={{name:"Dean's Office Front",location:"Dean's Office",health:90}}/>
                <CameraDetails cameraName={{name:"Bursar's office Front",location:"Dean's Office",health:70}}/>
            </div>
            <div className="grid lg:grid-cols-4 gap-3 mb-16">
                <h2 class="text-2xl font-extrabold dark:text-white">Parking Lot</h2>
                <CameraDetails cameraName={{name:"Parking Lot 14th St",location:"Campus North",health:90}}/>
                <CameraDetails cameraName={{name:"Parking Lot 11th St",location:"Campus North East",health:70}}/>
            </div>
        </>
    );
}