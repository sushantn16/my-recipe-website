import Link from "next/link"
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'

type Recipes = {
    id: string;
    title: string;
    description: string;
    image: string;
    categoryId: string;
    ingredients: string[];
    instructions: string[];
    prepTime: string;
    cookTime: string;
    servings: number;
    rating: number;
}

type Props = {
    recipe: Recipes;
}
export default function RecipeCard({recipe}: Props) {
  return (
    <Card key={recipe.id}>
    <CardHeader>
      <CardTitle>{recipe.title}</CardTitle>
      <CardDescription className="truncate">{recipe.description}</CardDescription>
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
