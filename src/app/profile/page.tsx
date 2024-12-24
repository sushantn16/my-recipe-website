import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {  useAuth } from "@/lib/auth"
import { redirect } from "next/navigation"
import RecipeCard from "@/components/recipe-card"
import { Recipes } from "@/static/Recipe"


// This is a mock function to simulate fetching user data from a database
async function getUserData(userId: string) {
  return {
    savedRecipes: Recipes,
    mealPlans: [
      { id: '1', name: 'Week 1', recipes: ['Spaghetti Carbonara', 'Chicken Tikka Masala', 'Vegan Buddha Bowl'] },
      { id: '2', name: 'Week 2', recipes: ['Beef Stroganoff', 'Quinoa Salad', 'Chocolate Chip Cookies'] },
    ]
  }
}

export default async function ProfilePage() {
  const { user} = useAuth()

  if (!user) {
    redirect('/api/auth/signin')
  }

  const userData = await getUserData(user.id)

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Your Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Saved Recipes</h2>
          <div className="grid grid-cols-1 gap-4">
            {userData.savedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Meal Plans</h2>
          <div className="grid grid-cols-1 gap-4">
            {userData.mealPlans.map((mealPlan) => (
              <Card key={mealPlan.id}>
                <CardHeader>
                  <CardTitle>{mealPlan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {mealPlan.recipes.map((recipe, index) => (
                      <li key={index}>{recipe}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/meal-plans/${mealPlan.id}`}>View Meal Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

