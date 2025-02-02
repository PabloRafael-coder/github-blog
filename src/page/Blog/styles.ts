import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const BlogContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 54rem;
  margin: 0 auto;
`

export const BlogContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export const SearchFormContainer = styled.form`
  margin-top: 4rem;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      ${mixins.titleS}
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      ${mixins.textS}
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    margin-top: 0.75rem;
    ${mixins.textM}
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 15rem;
`
