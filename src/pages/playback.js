import VideoCard from "@/components/VideoCard";
export default function playback() {
    return (
        <>
            <h1 className="font-extrabold text-6xl dark:text-white h-20">Playback</h1>
            <div className="flex justify-center gap-3">
                <VideoCard videoDetails={{date:"3 April 2022",size:45,title:"engineering_bldg_alert213",img:"https://www.lumenera.com/media/wysiwyg/images/products/security/samples/Le275_streetscene_2.jpg"}}/>
                <VideoCard videoDetails={{date:"25 March 2022",size:123,title:"deans_office_12",img:"https://media.cnn.com/api/v1/images/stellar/prod/220919153457-coffee-county-surveillance-video.jpg"}}/>
                <VideoCard videoDetails={{date:"3 February 2022",size:45,title:"parking_lot_234",img:"https://news4sanantonio.com/resources/media2/16x9/full/1015/center/80/0d841854-1de0-4784-bbe3-0e5bd1f13729-large16x9_suspect.JPG"}}/>
            </div>
            
        </>
    );
}