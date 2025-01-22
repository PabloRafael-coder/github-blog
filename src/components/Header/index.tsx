import headerImage from '../../assets/headerImage.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return(
    <HeaderContainer>
      <img src={headerImage} alt="" />
    </HeaderContainer>
  )
}