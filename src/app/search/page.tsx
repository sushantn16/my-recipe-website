import { SearchFilters } from "@/components/search-filters"
import RecipeCard from "@/components/recipe-card"

async function searchRecipes(searchParams: { [key: string]: string | string[] | undefined }) {
  const params = new URLSearchParams()
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) params.append(key, value.toString())
  })

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?${params.toString()}`)
  if (!res.ok) {
    throw new Error('Failed to fetch recipes')
  }
  return res.json()
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const recipes = await searchRecipes(searchParams)
  const query = typeof searchParams.q === 'string' ? searchParams.q : ''

return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Search Results for "{query}"</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <SearchFilters />
        </aside>
        <main className="w-full md:w-3/4">
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe: any) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p className="text-xl text-muted-foreground">No recipes found for "{query}". Try a different search term or adjust your filters.</p>
          )}
        </main>
      </div>
    </div>
  )
}

