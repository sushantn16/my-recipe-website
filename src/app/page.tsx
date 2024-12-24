import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This is a placeholder for your actual data fetching logic
const getFeaturedRecipes = () => [
  { id: 1, title: "Creamy Garlic Pasta", description: "A quick and delicious weeknight dinner", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Chocolate Chip Cookies", description: "Classic cookies with a twist", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Spicy Chicken Stir-Fry", description: "A healthy and flavorful meal", image: "/placeholder.svg?height=200&width=300" },
]

export default function Home() {
  const featuredRecipes = getFeaturedRecipes()

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Recipe Collection</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
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

