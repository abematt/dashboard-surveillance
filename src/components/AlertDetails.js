export default function AlertDetails({alertDetails}) {
    return (
        <div className="flex justify-around items-center h-16 col-span-4 row-span-2 rounded bg-blue shadow-sm">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <p className="text-xl text-sky-400">{alertDetails.date}</p>
        <p className="text-xl text-sky-400">{alertDetails.time}</p>
        <p className="text-xl text-sky-400">{alertDetails.location}</p>
        </div>
    );
}