import { Link } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'

type Recipes = {
    id: string;
    title: string;
    description: string;
    image: string;
}

export default function RecipeCard(recipe:Recipes) {
  return (
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
  )
}
