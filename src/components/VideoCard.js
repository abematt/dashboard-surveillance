
export default function VideoCard ({videoDetails}) {
    return (
    <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src={videoDetails.img}/>
    <div class="px-6 py-4">
    </div>
    <div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{videoDetails.title}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{videoDetails.size} mb</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{videoDetails.date}</span>
    </div>
    </div>
    );
}