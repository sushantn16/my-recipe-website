export const updateRecipeRating = async (recipeId: string, newRating: number) => {
    const response = await fetch(`/api/recipes/${recipeId}/rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: newRating }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update rating');
    }
  
    return response;
  };