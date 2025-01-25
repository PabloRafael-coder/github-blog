import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  CodeContent, ColorValueSpan, CommentColorSpan, NavigationList, PostContainer, PostContent, PostInfo, PostInfoContainer, PostInfoList, TextColorSpan, VariableColor } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

export function Post() {
  return(
    <PostContainer>
      <PostInfoContainer>
        <PostInfo>
          <nav>
            <NavigationList>
              <li>
                <FontAwesomeIcon icon={faChevronLeft} style={{color: '#3294f8'}}/>
                <a href="">Voltar</a>
              </li>
              <li>
                <a href="">Ver no github</a>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: '#3294f8'}}/>
              </li>
            </NavigationList>
          </nav>
          <h1>JavaScript data types and data structures</h1>
          <PostInfoList>
            <li>
              <FontAwesomeIcon icon={faGithub} size='lg'/>
              <span>camerowwll</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </li>
          </PostInfoList>
        </PostInfo>
        <PostContent>
          <p>
            <strong>Programming languages all have built-in data structures, but these
            often differ from one language to another.</strong> This article attempts 
            to list the built-in data structures available in JavaScript and 
            what properties they have. These can be used to build other data 
            structures. Wherever possible, comparisons with other languages 
            are drawn.<br/>

            <br/><TextColorSpan>Dynamic typing</TextColorSpan><br/>
            JavaScript is a loosely typed and dynamic language. Variables in 
            JavaScript are not directly associated with any particular value 
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
          <CodeContent>
            <p>
              <VariableColor>let</VariableColor> 
              foo = <ColorValueSpan>42</ColorValueSpan>;   
              <CommentColorSpan>// foo is now a number</CommentColorSpan><br/>

              foo = <ColorValueSpan>‘bar’</ColorValueSpan>;    
              <CommentColorSpan>// foo is now a number</CommentColorSpan><br/>

              foo = <ColorValueSpan>true</ColorValueSpan>;     
              <CommentColorSpan>// foo is now a number</CommentColorSpan><br/>
            </p>
          </CodeContent>
        </PostContent>
      </PostInfoContainer>
    </PostContainer>
  )
}