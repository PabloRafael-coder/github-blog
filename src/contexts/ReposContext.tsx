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
}

export const ReposContext = createContext({} as ReposContextType)

interface ReposContextProviderProps {
  children: ReactNode
}

export function ReposContextProvider({ children }: ReposContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  async function handleRespoFetch() {
    const response = await api.get('PabloRafael-coder')

    setUser(response.data)
  }

  useEffect(() => {
    handleRespoFetch()
  }, [])

  return (
    <ReposContext.Provider value={{ user }}>{children}</ReposContext.Provider>
  )
}
