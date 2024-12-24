import { useState } from "react"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { updateRecipeRating } from '../services/api';

interface RecipeRatingProps {
  recipeId: string
  initialRating: number
}

export function RecipeRating({ recipeId, initialRating }: RecipeRatingProps) {
  const [rating, setRating] = useState(initialRating)
  const { toast } = useToast()

  const handleRating = async (newRating: number) => {
    try {
      const response = await updateRecipeRating(recipeId, newRating);
  
      setRating(newRating);
      toast({
        title: "Rating updated",
        description: `You've rated this recipe ${newRating} stars.`,
      });
    } catch (error) {
      toast({
        title: "Failed to update rating",
        description: "An error occurred while updating the rating. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Button
          key={star}
          variant="ghost"
          size="sm"
          onClick={() => handleRating(star)}
        >
          <Star
            className={`h-6 w-6 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        </Button>
      ))}
      <span className="ml-2">{rating.toFixed(1)}</span>
    </div>
  )
}

