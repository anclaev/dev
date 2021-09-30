import { IVideo } from "./types"

export const Video: React.FC<IVideo> = ({ src, className }) => {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      poster={`/media/${src}.png`}
    >
      <source src={`/media/${src}.mp4`} type="video/mp4" />
      <source src={`/media/${src}.webm`} type="video/webm" />
    </video>
  )
}
