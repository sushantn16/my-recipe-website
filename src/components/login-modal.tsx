"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icons } from "@/components/icons"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { loginWithGoogle } = useAuth()

  const handleGoogleLogin = async () => {
    await loginWithGoogle()
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Log in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log in to your account</DialogTitle>
          <DialogDescription>
            Sign in with your Google account to access your recipes
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
          <Icons.google className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
      </DialogContent>
    </Dialog>
  )
}

