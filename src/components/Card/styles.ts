import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const CardContainer = styled.div`
  max-width: 26rem;
  padding: 2rem;
  background: ${props => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    ${mixins.textM}
    color: ${props => props.theme['base-text']};
    line-height: 165%;
  }

  div{
    height: 7rem;
    overflow-y: hidden;
  }

  &:hover {
    border: 2px solid ${props => props.theme['base-label']};
  }
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h2 {
    ${mixins.titleM}
    color: ${props => props.theme['base-title']};
    max-width: 17.17rem;
  }

  span {
    ${mixins.textS}
    color: ${props => props.theme['base-span']};
  }
`
