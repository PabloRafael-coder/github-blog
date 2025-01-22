import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";
import { NavLink } from "react-router";


export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${props => props.theme["base-profile"]};
  margin-top: -6rem;

  img {
    border-radius: 10px;
  }

`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    ${mixins.textM}
    color: ${props => props.theme["base-text"]};
  }
`
export const ProfileHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
    ${mixins.titleL}
    color: ${props => props.theme["base-title"]};
  }
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: baseline;
    gap: 0.5rem;

`

export const NavGit = styled(NavLink)`
  ${mixins.componentsLink}
  color: ${props => props.theme.blue};
`

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: max-content;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    color: ${props => props.theme["base-subtitle"]};
    ${mixins.textM}
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme["base-label"]};
  }
`