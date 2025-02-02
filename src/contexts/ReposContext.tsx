import { createContext, useEffect, useState, type ReactNode } from 'react'
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

interface ReposContextType {
  user: User
  issues: Issues[]
  fetchIssuesData: (query?: string) => Promise<void>
}

export const ReposContext = createContext({} as ReposContextType)

interface ReposContextProviderProps {
  children: ReactNode
}

export function ReposContextProvider({ children }: ReposContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issues[]>([])

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

  useEffect(() => {
    fetchIssuesData()
    fetchUserData()
  }, [])

  return (
    <ReposContext.Provider
      value={{
        user,
        issues,
        fetchIssuesData,
      }}
    >
      {children}
    </ReposContext.Provider>
  )
}
