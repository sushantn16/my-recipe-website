import { PaginationControls } from "@/components/pagination-controls"
import { Recipes } from "@/static/Recipe"
import RecipeCard from "@/components/recipe-card"

// This is a mock function to simulate fetching recipes from a database
async function getRecipes() {
  const recipes = Recipes

  return {
    recipes: recipes,
    totalRecipes: recipes.length
  }
}

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit = 6
  const { recipes, totalRecipes } = await getRecipes()

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className="mt-8">
        <PaginationControls
          totalItems={totalRecipes}
          itemsPerPage={limit}
          currentPage={page}
          route="/recipes"
        />
      </div>
    </div>
  )
}

