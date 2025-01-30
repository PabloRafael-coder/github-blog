import { createContext, useEffect, useState, type ReactNode } from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  avatar_url: string
  bio: string
  followers: number
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

  async function fetchUserData() {
    const userData = await api.get('users/PabloRafael-coder')

    setUser(userData.data)
  }

  async function fetchIssuesData(query?: string) {
    const issuesData = await api.get('search/issues', {
      params: {
        q: query,
      },
    })
    console.log(issuesData)
  }

  useEffect(() => {
    fetchIssuesData()
    fetchUserData()
  }, [])

  return (
    <ReposContext.Provider value={{ user, fetchIssuesData }}>
      {children}
    </ReposContext.Provider>
  )
}
