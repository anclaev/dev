import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"

import { social } from "../../config/data.json"
import Logo from "../../assets/images/logo.svg"

import { ReactComponent as Github } from "../../assets/images/github.svg"
import { ReactComponent as Telegram } from "../../assets/images/telegram.svg"
import { ReactComponent as Phone } from "../../assets/images/phone.svg"
import { ReactComponent as Message } from "../../assets/images/message.svg"

import { Image } from "../../components/Image"
import { LinkButton } from "../../components/LinkButton"

export const Header: React.FC = () => {
  const dispatch = useDispatch()

  const logoClickHandler = useCallback(() => {
    dispatch(push("/"))
  }, [dispatch])

  return (
    <header className="header">
      <Image
        className="header__logo"
        src={Logo}
        alt="Logo: Anclaev Development"
        onClick={logoClickHandler}
      />
      <div className="header-social">
        <LinkButton href={social.github}>
          <Github width="20px" height="20px" />
        </LinkButton>
        <LinkButton href={social.phone}>
          <Phone width="20px" height="20px" />
        </LinkButton>
        <LinkButton href={social.telegram}>
          <Telegram width="20px" height="20px" />
        </LinkButton>
        <LinkButton href={social.email}>
          <Message width="20px" height="20px" />
        </LinkButton>
        <LinkButton className="header-social__lang">EN</LinkButton>
      </div>
    </header>
  )
}
