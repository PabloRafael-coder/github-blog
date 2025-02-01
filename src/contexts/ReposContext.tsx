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
}

interface ReposContextType {
  user: User
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
    const issuesData = await api.get(
      `search/issues?q=${query}%20repo:PabloRafael-coder/github-blog`,
    )

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
        fetchIssuesData,
      }}
    >
      {children}
    </ReposContext.Provider>
  )
}
