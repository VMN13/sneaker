import video from "../video/Jordan.mp4";

export default function Video() {
  return (
    <video 
      className="video"
      width="320"
      height="240"
      controls={false}
      loop={true}
      muted={true}
      autoPlay={true}
      playsInline={true}
      webkit-playsInline={false}
       webkit-autoPlay={true}
       
      >
        <source 
          src={video} 
          type="video/mp4" />
    </video>
  );
}