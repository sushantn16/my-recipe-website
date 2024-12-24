import { NextResponse } from 'next/server'
import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/api/auth/google/callback' // Update this URL for production
)

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (!code) {
    const authUrl = client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
    })
    return NextResponse.redirect(authUrl)
  }

  try {
    const { tokens } = await client.getToken(code)
    client.setCredentials(tokens)

    const userInfo = await client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })

    // Here you would typically save the user info to your database
    // For this example, we'll just set it in a cookie
    const user = {
      id: (userInfo.data as any).sub,
      name: (userInfo.data as any).name,
      email: (userInfo.data as any).email,
      image: (userInfo.data as any).picture
    }

    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set('user', JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Google authentication error:', error)
    return NextResponse.redirect(new URL('/login?error=google_auth_failed', request.url))
  }
}

