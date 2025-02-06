import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  NavigationList,
  PostContainer,
  PostContent,
  PostInfo,
  PostInfoContainer,
  PostInfoList,
} from './styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { useContext, useEffect } from 'react'
import { ReposContext } from '../../contexts/ReposContext'
import { useParams } from 'react-router'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function Post() {
  const { user, postIssues, searchForIssueByNumber } = useContext(ReposContext)

  const { issueNumber } = useParams()

  useEffect(() => {
    if (issueNumber) {
      searchForIssueByNumber(issueNumber)
    }
  }, [issueNumber, searchForIssueByNumber])

  return (
    <PostContainer>
      <PostInfoContainer>
        <PostInfo>
          <nav>
            <NavigationList>
              <li>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ color: '#3294f8' }}
                />
                <a href="">Voltar</a>
              </li>
              <li>
                <a href="">Ver no github</a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: '#3294f8' }}
                />
              </li>
            </NavigationList>
          </nav>
          <h1>{postIssues.title}</h1>
          <PostInfoList>
            <li>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>{user.name}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>
                Há{' '}
                {postIssues.created_at
                  ? formatDistanceToNow(postIssues.created_at, {
                      locale: ptBR,
                    })
                  : null}
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              <span>{postIssues.comments} comentários</span>
            </li>
          </PostInfoList>
        </PostInfo>
        <PostContent>{postIssues.body}</PostContent>
      </PostInfoContainer>
    </PostContainer>
  )
}
