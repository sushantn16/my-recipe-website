import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { categories } from "@/static/Categories"

export default async function CategoriesPage() {

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

