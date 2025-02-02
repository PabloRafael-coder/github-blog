import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { Link } from 'react-router'
import Markdown from 'react-markdown'

export const CardContainer = styled(Link)`
  max-width: 26rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-decoration: none;

  p {
    ${mixins.textM}
    color: ${(props) => props.theme['base-text']};
    line-height: 165%;
  }

  &:hover {
    transition: border 1s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h2 {
    ${mixins.titleM}
    color: ${(props) => props.theme['base-title']};
    max-width: 17.17rem;
  }

  span {
    ${mixins.textS}
    color: ${(props) => props.theme['base-span']};
  }
`
export const CardBody = styled(Markdown)`
  height: 7rem;
  overflow-y: hidden;

  h3 {
    ${mixins.titleS}
    color: ${(props) => props.theme['base-subtitle']};
  }

  a {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`
