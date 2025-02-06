import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import Markdown from 'react-markdown'

export const PostContainer = styled.main`
  margin: 0 auto;
  max-width: 54rem;
`
export const PostInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: rem;

  li {
    display: flex;
    gap: 0.5rem;
    list-style-type: none;
    align-items: center;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      ${mixins.componentsLink}
    }

    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`

export const PostInfo = styled.div`
  margin-top: -6rem;
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-profile']};

  h1 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.25rem;
    ${mixins.titleL}
  }
`
export const PostInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style-type: none;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }

    span {
      ${mixins.textM}
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const PostContent = styled(Markdown)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;

  p {
    color: ${(props) => props.theme['base-text']};
    ${mixins.textM}
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  h3 {
    ${mixins.titleS}
    color: ${(props) => props.theme['base-subtitle']}
  }
`
export const TextColorSpan = styled.span`
  color: ${(props) => props.theme.blue};
  text-decoration: underline;
`
export const CodeContent = styled.div`
  border-radius: 2px;
  padding: 1rem;
  background: ${(props) => props.theme['base-post']};

  p {
    ${mixins.textCode}
  }
`
