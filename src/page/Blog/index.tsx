import { useForm, SubmitHandler } from 'react-hook-form'
import { Card } from '../../components/Card'
import { Profile } from './components/Profile'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  BlogContainer,
  BlogContent,
  CardsContainer,
  SearchFormContainer,
} from './styles'
import { useContext } from 'react'
import { ReposContext } from '../../contexts/ReposContext'

const searchPostSchema = z.object({
  query: z.string(),
})

type SearchPostFormData = z.infer<typeof searchPostSchema>

export function Blog() {
  const { issues, fetchIssuesData } = useContext(ReposContext)

  const { register, handleSubmit } = useForm<SearchPostFormData>({
    resolver: zodResolver(searchPostSchema),
  })

  const onSubmit: SubmitHandler<SearchPostFormData> = async (data) => {
    await fetchIssuesData(data.query)
  }

  return (
    <BlogContainer>
      <Profile />
      <BlogContent>
        <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h2>Publicações</h2>
            <span>
              {issues.length > 1
                ? issues.length + ' publicações'
                : issues.length + ' publicação'}
            </span>
          </header>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            required
            {...register('query')}
          />
        </SearchFormContainer>
        <CardsContainer>
          {issues.map((item) => {
            return <Card key={item.number} {...item} />
          })}
        </CardsContainer>
      </BlogContent>
    </BlogContainer>
  )
}
