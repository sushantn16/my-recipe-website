import Link from "next/link"
import { Button } from "@/components/ui/button"
import RecipeCard from "@/components/recipe-card"
import { Recipes } from "@/static/Recipe"

export default function Home() {
  const featuredRecipes = Recipes

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Recipe Collection</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/recipes">All Recipes</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/categories">Browse Categories</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

