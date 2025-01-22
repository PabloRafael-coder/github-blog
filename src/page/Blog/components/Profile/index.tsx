import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavContainer, NavGit, ProfileContainer, ProfileContent, ProfileHeader, ProfileInfo } from "./styles";
import  profileImage  from '../../../../assets/profileImage.jpg'

export function Profile( ) {
  return(
  <ProfileContainer>
    <div>
      <img src={profileImage} alt="" width={148} height={148}/>
    </div>

    <ProfileContent>
      <ProfileHeader>
        <h1>Cameron Williamson</h1>
        <NavContainer>
          <NavGit to="https://github.com/">github</NavGit>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: '#3294f8'}}/>
        </NavContainer>
      </ProfileHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
          massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar 
          vel mass.
        </p>
      <ProfileInfo>
        <div>
          <FontAwesomeIcon icon={faGithub} size="lg"/>
          <span>camerowwll</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBuilding} />
          <span>Rocketseat</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faUserGroup} />
          <span>32 seguidores</span>
        </div>
      </ProfileInfo>
    </ProfileContent>
  </ProfileContainer>
  )
}