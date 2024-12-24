import { notFound } from "next/navigation"
import { RecipeView } from "@/components/recipe-view"
import { CommentSection } from "@/components/comment-section"
import { Recipes } from "@/static/Recipe"

// This is a placeholder for your actual data fetching logic
const getRecipe = (id: string) => {
  const recipes = Recipes
  return recipes.find(recipe => recipe.id === id)
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = getRecipe(params.id)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="container py-8">
      <RecipeView recipe={recipe} />
      <CommentSection recipeId={recipe.id} />
    </div>
  )
}

