import { Route, Routes } from "react-router";
import { DefaultLayout } from "./Layout/defaultLayout";
import { Blog } from "./page/Blog";
import { Post } from "./page/Post";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Blog/>}/>
        <Route path="post" element={<Post/>}/>
      </Route>
    </Routes>
  )
}