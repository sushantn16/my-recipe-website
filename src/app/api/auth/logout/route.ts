import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  (await cookies()).set('user', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  })

  return NextResponse.json({ success: true })
}

