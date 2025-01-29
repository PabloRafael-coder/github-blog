import { Card } from '../../components/Card'
import { Profile } from './components/Profile'
import {
  BlogContainer,
  BlogContent,
  CardsContainer,
  SearchFormContainer,
} from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <BlogContent>
        <SearchFormContainer>
          <header>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </header>
          <input type="text" placeholder="Buscar conteúdo" required />
        </SearchFormContainer>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </BlogContent>
    </BlogContainer>
  )
}
