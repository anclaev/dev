import { ILinkButton } from "./types"

export const LinkButton: React.FC<ILinkButton> = ({
  className,
  children,
  href,
  onClick,
}) => (
  <button
    className={`button--link${className ? ` ${className}` : ""}`}
    onClick={onClick}
  >
    {href ? (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      children
    )}
  </button>
)
