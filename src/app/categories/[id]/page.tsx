import { notFound } from "next/navigation"
import { Recipes } from "@/static/Recipe"
import { categories } from "@/static/Categories"
import RecipeCard from "@/components/recipe-card"

// This is a mock function to simulate fetching categories from a database
async function getCategory(id: string) {
  return categories.find(category => category.id === id)
}

// This is a mock function to simulate fetching recipes for a category from a database
async function getCategoryRecipes(categoryId: string) {
  const recipes = Recipes
  return recipes.filter(recipe => recipe.categoryId === categoryId)
}

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const category = await getCategory(params.id)
  
  if (!category) {
    notFound()
  }

  const recipes = await getCategoryRecipes(params.id)

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-2">{category.name} Recipes</h1>
      <p className="text-xl text-muted-foreground mb-8">{category.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

