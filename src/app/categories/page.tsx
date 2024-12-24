import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This is a mock function to simulate fetching categories from a database
async function getCategories() {
  return [
    { id: '1', name: 'Italian', description: 'Pasta, pizza, and more', image: '/placeholder.svg?height=200&width=300' },
    { id: '2', name: 'Asian', description: 'Stir-fries, sushi, and curries', image: '/placeholder.svg?height=200&width=300' },
    { id: '3', name: 'Mexican', description: 'Tacos, burritos, and quesadillas', image: '/placeholder.svg?height=200&width=300' },
    { id: '4', name: 'Desserts', description: 'Sweet treats and baked goods', image: '/placeholder.svg?height=200&width=300' },
    { id: '5', name: 'Vegetarian', description: 'Meat-free dishes', image: '/placeholder.svg?height=200&width=300' },
    { id: '6', name: 'Quick & Easy', description: '30-minute meals', image: '/placeholder.svg?height=200&width=300' },
  ]
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Recipe Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-md" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/categories/${category.id}`}>View Recipes</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

