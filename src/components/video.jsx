import video from "../video/Jordan.mp4";

export default function Video() {
  return (
    <video 
      className="video"
      width="320"
      height="240"
      controls={true}
      loop={true}
      autoPlay muted>
        <source 
          src={video} 
          type="video/mp4" />
    </video>
  );
}