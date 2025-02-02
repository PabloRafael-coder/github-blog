import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CardBody, CardContainer, CardHeader } from './styles'

interface CardProps {
  title: string
  body: string
  created_at: string
  number: number
}

export function Card({ title, body, created_at: createAt, number }: CardProps) {
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
      <CardBody>{body}</CardBody>
    </CardContainer>
  )
}
