import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CardContainer, CardHeader } from './styles'
import Markdown from 'react-markdown'

interface Issues {
  title: string
  body: string
  created_at: string
  number: number
}

export function Card({ title, body, created_at: createAt, number }: Issues) {
  return (
    <CardContainer to={`post/${number}`}>
      <CardHeader>
        <h2>{title}</h2>
        <span>
          Há{' '}
          {formatDistanceToNow(createAt, {
            locale: ptBR,
          })}
        </span>
      </CardHeader>
      <div>
        <Markdown>{body}</Markdown>
      </div>
    </CardContainer>
  )
}
