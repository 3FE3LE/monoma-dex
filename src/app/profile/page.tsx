'use client'
import { Layout } from '@/components/UI'
import { useSession } from 'next-auth/react'

export default function page() {
  const { data: session } = useSession()
  return <Layout><pre>{JSON.stringify(session, null, 2)}</pre></Layout>
}
