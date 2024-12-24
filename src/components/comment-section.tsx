"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Comment = {
  id: string
  user: {
    name: string
    image: string
  }
  content: string
  createdAt: string
}

export function CommentSection({ recipeId }: { recipeId: string }) {
  const { user } = useAuth()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = () => {
    if (newComment.trim() === "") return

    const comment: Comment = {
      id: Date.now().toString(),
      user: {
        name: user?.name || "Anonymous",
        image: user?.image || "",
      },
      content: newComment,
      createdAt: new Date().toISOString(),
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {user ? (
        <div className="space-y-4">
          <Textarea
            placeholder="Leave a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button onClick={handleSubmitComment}>Post Comment</Button>
        </div>
      ) : (
        <p className="text-muted-foreground">Please sign in to leave a comment.</p>
      )}
      <div className="mt-8 space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.user.image} alt={comment.user.name} />
              <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{comment.user.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

