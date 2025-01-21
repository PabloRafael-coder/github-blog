import { ThemeProvider } from "styled-components"
import { Blog } from "./page/Blog"
import { Post } from "./page/Post"
import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <ThemeProvider>
      <Blog/>
      <Post/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

