import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function CameraDetails({cameraName}) {
    return (
        <div className="flex justify-around items-center h-16 col-span-4 row-span-2 rounded bg-blue shadow-sm">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <p className="text-xl text-sky-400">{cameraName.name}</p>
        <p className="text-xl text-sky-400">{cameraName.health}% Health</p>
        <p className="text-xl text-sky-400">{cameraName.location}</p>
        <div className="flex justify-around gap-x-10     ">
        <PencilSquareIcon className="text-black h-5 w-5" />
        <TrashIcon className="text-black h-5 w-5"/>
        </div>
        </div>
    );
}