import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  // Here you would typically validate the email and password against your database
  // For this example, we'll just check if the email is not empty
  if (!email) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 })
  }

  // Create a mock user object (in a real app, this would come from your database)
  const user = {
    id: '1',
    name: 'John Doe',
    email: email,
    image: '/placeholder.svg?height=32&width=32'
  }

  // Create a JWT token
  const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

  // Set the token in an HTTP-only cookie
  ;(await
    // Set the token in an HTTP-only cookie
    cookies()).set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600, // 1 hour
    path: '/',
  })

  return NextResponse.json({ user })
}

