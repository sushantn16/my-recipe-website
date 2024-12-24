import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PaginationControls } from "@/components/pagination-controls"
import { Recipes } from "@/static/Recipe"

// This is a mock function to simulate fetching recipes from a database
async function getRecipes(page: number = 1, limit: number = 6) {
  const recipes = Recipes

  const start = (page - 1) * limit
  const end = start + limit
  return {
    recipes: recipes.slice(start, end),
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
  const { recipes, totalRecipes } = await getRecipes(page, limit)

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardHeader>
              <CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
              </Button>
            </CardFooter>
          </Card>
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

