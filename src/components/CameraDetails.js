import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function CameraDetails({cameraName}) {
    return (
        <div className="flex justify-around items-center h-20 col-span-4 row-span-2 rounded-full bg-blue shadow-sm">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <p className="text-xl text-white">{cameraName.name}</p>
        <p className="text-xl text-white">{cameraName.health}% Health</p>
        <p className="text-xl text-white">{cameraName.location}</p>
        <div className="flex justify-around gap-x-1">
        <PencilSquareIcon className="cursor-pointer text-white bg-button-blue box-content p-4 h-5 w-5 rounded-full" />
        <TrashIcon className="cursor-pointer text-white bg-pink box-content p-4 h-5 w-5 rounded-full"/>
        </div>
        </div>
    );
}