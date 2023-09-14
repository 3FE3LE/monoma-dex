'use client'
import { Layout } from '@/components/UI'
import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  console.log(session, status)

  return <Layout>Dashboard</Layout>
}
