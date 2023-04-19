import {CameraIcon} from "@heroicons/react/24/solid"

export default function Home() {
  return (
    <>
      <p className="text-white-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-4 gap-3 mb-16">
        <div className="col-span-2 row-span-2 rounded bg-white shadow-sm">
          <iframe src="https://www.youtube.com/embed/1-iS7LArMPA?autoplay=1&controls=0" class="h-full w-full"/>
        </div>
        <div className="col-start-3 col-end-4 rounded bg-white shadow-sm">
          <iframe src="https://www.youtube.com/embed/9k_sg8rhsgk?autoplay=1&controls=0" class="object-cover h-full w-full"/>
        </div>
        <div className="col-start-4 col-end-4rounded bg-white shadow-sm">
        <iframe src="https://www.youtube.com/embed/pNSnXqZTrnM?autoplay=1&controls=0" class="object-cover h-full w-full"/>
        </div>
        <div className="col-start-3 col-end-4 rounded bg-white shadow-sm">
        <iframe src="https://www.youtube.com/embed/lim5hCR59kw?autoplay=1&controls=0" class="object-cover h-full w-full"/>
        </div>
        <div className="col-start-4 col-end-4 r ounded bg-white shadow-sm">
        <iframe src="https://www.youtube.com/embed/NmrVzhJ6HnU?autoplay=1&controls=0" class="object-cover h-full w-full"/>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 mb-16">
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-2 col-end-3 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Parking 11th St</p>
          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300">Live</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-3 col-end-4 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Parking 7th St</p>
          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300">Live</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-2 col-end-3 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Eng. Front</p>
          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300">Live</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-3 col-end-4 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Eng. Back</p>
          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300">Live</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-2 col-end-3 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Dean Office</p>
          <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow dark:text-yellow-300">Errors</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-3 col-end-4 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Bursar Office</p>
          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300">Live</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-2 col-end-3 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Dining Hall</p>
          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green dark:text-green-300">Live</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer gap-5 col-start-3 col-end-4 rounded bg-blue shadow-sm h-12 transition ease-in-out hover:bg-light-blue duration-200">
          <CameraIcon className="text-black h-6"/>
          <p className="flex items-center text-black flex-2 h-6 w-32">Dining Hall 2</p>
          <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red dark:text-red-300">Off</span>
        </div>
      </div>
    </>
  );
}