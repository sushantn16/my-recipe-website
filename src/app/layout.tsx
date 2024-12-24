import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { AuthProvider } from "@/lib/auth"
import { MainNav } from "@/components/main-nav"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import "./globals.css";

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'My Recipe Collection',
  description: 'Delicious recipes shared with love',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <header className="border-b">
                <div className="container flex h-16 items-center m-auto">
                  <MainNav />
                </div>
              </header>
              <main className="w-9/12 flex m-auto">{children}</main>
            </div>
          </AuthProvider>
          <Toaster />
        </NextThemesProvider>
      </body>
    </html>
  )
}

