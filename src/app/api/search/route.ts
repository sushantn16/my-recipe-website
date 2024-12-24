import { NextResponse } from 'next/server'

// This is a mock database. In a real application, you'd use a proper database.
const recipes = [
  { id: '1', title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish', image: '/placeholder.svg?height=200&width=300', cookingTime: 30, difficulty: 'Medium', dietaryRestrictions: ['contains-gluten', 'contains-dairy'] },
  { id: '2', title: 'Chicken Tikka Masala', description: 'Creamy and spicy Indian curry', image: '/placeholder.svg?height=200&width=300', cookingTime: 45, difficulty: 'Medium', dietaryRestrictions: ['gluten-free'] },
  { id: '3', title: 'Vegan Buddha Bowl', description: 'Nutritious and colorful plant-based meal', image: '/placeholder.svg?height=200&width=300', cookingTime: 20, difficulty: 'Easy', dietaryRestrictions: ['vegan', 'gluten-free'] },
  { id: '4', title: 'Beef Stroganoff', description: 'Hearty Russian dish with tender beef', image: '/placeholder.svg?height=200&width=300', cookingTime: 60, difficulty: 'Hard', dietaryRestrictions: ['contains-gluten', 'contains-dairy'] },
  { id: '5', title: 'Quinoa Salad', description: 'Light and refreshing salad with protein-rich quinoa', image: '/placeholder.svg?height=200&width=300', cookingTime: 15, difficulty: 'Easy', dietaryRestrictions: ['vegan', 'gluten-free'] },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const cookingTime = searchParams.get('cookingTime')
  const difficulty = searchParams.get('difficulty')
  const dietaryRestriction = searchParams.get('dietaryRestriction')

  let filteredRecipes = recipes

  if (query) {
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase())
    )
  }

  if (cookingTime) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.cookingTime <= parseInt(cookingTime))
  }

  if (difficulty) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty.toLowerCase() === difficulty.toLowerCase())
  }

  if (dietaryRestriction) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.dietaryRestrictions.includes(dietaryRestriction))
  }

  return NextResponse.json(filteredRecipes)
}

