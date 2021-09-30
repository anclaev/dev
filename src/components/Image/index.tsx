import { IImage } from "./types"

export const Image: React.FC<IImage> = ({ className, alt, onClick, src }) => (
  <img src={src} alt={alt} onClick={onClick} className={className} />
)
