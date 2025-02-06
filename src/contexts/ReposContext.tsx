import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  avatar_url: string
  bio: string
  followers: number
}

interface Issues {
  title: string
  body: string
  number: number
  created_at: string
}

interface PostIssues {
  created_at: string
  comments: number
  body: string
  title: string
}

interface ReposContextType {
  user: User
  issues: Issues[]
  postIssues: PostIssues
  fetchIssuesData: (query?: string) => Promise<void>
  searchForIssueByNumber: (issueNumber?: string) => Promise<void>
}

export const ReposContext = createContext({} as ReposContextType)

interface ReposContextProviderProps {
  children: ReactNode
}

export function ReposContextProvider({ children }: ReposContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issues[]>([])
  const [postIssues, setPostIssues] = useState<PostIssues>({} as PostIssues)

  async function fetchUserData() {
    const userName = 'PabloRafael-coder'
    const userData = await api.get(`users/${userName}`)

    setUser(userData.data)
  }

  async function fetchIssuesData(query?: string) {
    const userName = 'PabloRafael-coder'
    const repo = 'github-blog'

    const issuesData = await api.get(`search/issues`, {
      params: {
        q: `${query} repo:${userName}/${repo}`,
      },
    })

    setIssues(issuesData.data.items)
  }

  const searchForIssueByNumber = useCallback(async (issueNumber?: string) => {
    const { data } = await api.get(
      `repos/PabloRafael-coder/github-blog/issues/${issueNumber}`,
    )

    setPostIssues(data)
  }, [])

  useEffect(() => {
    fetchIssuesData()
    fetchUserData()
  }, [])

  return (
    <ReposContext.Provider
      value={{
        user,
        issues,
        postIssues,
        fetchIssuesData,
        searchForIssueByNumber,
      }}
    >
      {children}
    </ReposContext.Provider>
  )
}
