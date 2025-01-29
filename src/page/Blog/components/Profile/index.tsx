import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  NavContainer,
  NavGit,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './styles'
import { useContext } from 'react'
import { ReposContext } from '../../../../contexts/ReposContext'

export function Profile() {
  const { user } = useContext(ReposContext)

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="foto do perfil" />
      <ProfileContent>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <NavContainer>
            <NavGit to="https://github.com/">github</NavGit>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: '#3294f8' }}
            />
          </NavContainer>
        </ProfileHeader>
        <p>{user.bio}</p>
        <ProfileInfo>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>{user.name}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} seguidores</span>
            </li>
          </ul>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
