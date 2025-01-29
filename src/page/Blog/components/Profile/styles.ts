import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'
import { NavLink } from 'react-router'

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  margin-top: -6rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 10px;
  }
`
export const ProfileContent = styled.div`
  p {
    ${mixins.textM}
    color: ${(props) => props.theme['base-text']};
    margin-top: 0.5rem;
  }
`
export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    ${mixins.titleL}
    color: ${(props) => props.theme['base-title']};
  }
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: baseline;
  gap: 0.5rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`

export const NavGit = styled(NavLink)`
  ${mixins.componentsLink}
  color: ${(props) => props.theme.blue};
`

export const ProfileInfo = styled.div`
  max-width: max-content;

  ul {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    ${mixins.textM}
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme['base-label']};
  }
`
