"use client"

import { useState } from "react"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RecipeRating } from "@/components/recipe-rating"
import { useToast } from "@/hooks/use-toast"

type Recipe = {
  id: string
  title: string
  description: string
  image: string
  ingredients: string[]
  instructions: string[]
  prepTime: string
  cookTime: string
  servings: number
  rating: number
}

export function RecipeView({ recipe }: { recipe: Recipe }) {
  const [liked, setLiked] = useState(false)
  const { toast } = useToast()

  const handleLike = () => {
    // Here you would typically send a request to your backend to update the like status
    setLiked(!liked)
    toast({
      title: liked ? "Recipe unliked" : "Recipe liked",
      description: liked ? "This recipe has been removed from your favorites." : "This recipe has been added to your favorites.",
    })
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <p className="text-xl text-muted-foreground">{recipe.description}</p>
      </header>
      <img src={recipe.image} alt={recipe.title} className="w-full h-[400px] object-cover rounded-lg" />
      <div className="flex items-center justify-between">
        <div className="space-x-4">
          <span>Prep time: {recipe.prepTime}</span>
          <span>Cook time: {recipe.cookTime}</span>
          <span>Servings: {recipe.servings}</span>
        </div>
        <Button variant={liked ? "default" : "outline"} onClick={handleLike}>
          <Heart className={`mr-2 h-4 w-4 ${liked ? "fill-current" : ""}`} />
          {liked ? "Liked" : "Like"}
        </Button>
      </div>
      <RecipeRating recipeId={recipe.id} initialRating={recipe.rating} />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  )
}

