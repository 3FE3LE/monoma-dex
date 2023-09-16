'use client'
import { useSession } from 'next-auth/react'
import { Layout } from '@/components/UI'

export default function Profile() {
  const { data: session } = useSession()
  return (
    <Layout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Layout>
  )
}
