import video from "../video/Jordan.mp4";

export default function Video() {
  return (
    <video 
      className="video"
      width="320"
      height="240"
      controls={true}
      loop={true}
      muted={true}
      autoplay={true}
      playsInline={true}
        preload={"auto"}
      >
        <source 
          src={video} 
          type="video/mp4" />
    </video>
  );
}