import CameraDetails from "@/components/CameraDetails";

export default function manage() {
    return (
        <>
            <p className="text-white-700 text-3xl mb-16 font-bold">Manage Cameras</p>
            <div className="grid lg:grid-cols-4 gap-3 mb-16">
                <h2 class="text-4xl font-extrabold dark:text-white">Engineering Building</h2>
                <CameraDetails cameraName={{name:"Engineering Front",location:"Engineering Building",health:80}}/>
                <CameraDetails cameraName={{name:"Engineering Lobby",location:"Engineering Building",health:50}}/>
                <CameraDetails cameraName={{name:"Engineering South",location:"Engineering Building",health:75}}/>
                <CameraDetails cameraName={{name:"Engineering North",location:"Engineering Building",health:90}}/>
            </div>
            <div className="grid lg:grid-cols-4 gap-3 mb-16">
                <h2 class="text-4xl font-extrabold dark:text-white">Main Campus</h2>
                <CameraDetails cameraName={{name:"Dean's Office Front",location:"Dean's Office",health:90}}/>
                <CameraDetails cameraName={{name:"Bursar's office Front",location:"Dean's Office",health:70}}/>
            </div>
            <div className="grid lg:grid-cols-4 gap-3 mb-16">
                <h2 class="text-4xl font-extrabold dark:text-white">Parking Lot</h2>
                <CameraDetails cameraName={{name:"Parking Lot 14th St",location:"Campus North",health:90}}/>
                <CameraDetails cameraName={{name:"Parking Lot 11th St",location:"Campus North East",health:70}}/>
            </div>
        </>
    );
}