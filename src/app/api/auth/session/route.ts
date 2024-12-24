import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const userCookie = (await cookies()).get('user')

  if (!userCookie) {
    return NextResponse.json({ user: null })
  }

  try {
    const user = JSON.parse(userCookie.value)
    return NextResponse.json({ user })
  } catch (error) {
    console.error('Session verification failed:', error)
    return NextResponse.json({ user: null })
  }
}

