export const Recipes = [
    { 
      id: '1', 
      title: 'Spaghetti Carbonara', 
      description: 'Classic Italian pasta dish', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '1', // Italian
      ingredients: [
        '400g spaghetti', 
        '150g pancetta', 
        '2 large eggs', 
        '1/2 cup grated Parmesan cheese', 
        '1/2 cup grated Pecorino Romano cheese', 
        'Freshly ground black pepper',
        'Salt to taste',
        'Fresh parsley for garnish'
      ],
      instructions: [
        'Cook spaghetti in salted water according to package instructions. Reserve 1 cup of pasta water before draining.',
        'While pasta is cooking, fry pancetta in a large pan over medium heat until crispy.',
        'In a bowl, whisk eggs, Parmesan, Pecorino, and black pepper together.',
        'Once pasta is done, add it to the pan with pancetta, toss to combine, and remove from heat.',
        'Quickly stir in the egg mixture, adding reserved pasta water to achieve a creamy consistency.',
        'Serve immediately with extra grated cheese and fresh parsley.'
      ],
      prepTime: '10 minutes',
      cookTime: '20 minutes',
      servings: 4,
      rating: 4.5
    },
    { 
      id: '2', 
      title: 'Chicken Tikka Masala', 
      description: 'Creamy and spicy Indian curry', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '2', // Asian
      ingredients: [
        '500g chicken breast, cut into chunks',
        '1 large onion, finely chopped',
        '2 cloves garlic, minced',
        '1 tbsp ginger, minced',
        '2 tbsp garam masala',
        '1 tbsp turmeric',
        '1 tbsp cumin',
        '1 can (400g) crushed tomatoes',
        '1/2 cup heavy cream',
        '2 tbsp vegetable oil',
        'Salt to taste',
        'Fresh cilantro for garnish'
      ],
      instructions: [
        'Heat oil in a large pan over medium heat. Add onion, garlic, and ginger. Cook until the onion softens.',
        'Add chicken chunks and cook until browned.',
        'Stir in garam masala, turmeric, and cumin. Cook for another 1-2 minutes.',
        'Add crushed tomatoes and bring to a simmer. Cook for 10-15 minutes until the chicken is cooked through.',
        'Stir in heavy cream and cook for another 5 minutes.',
        'Season with salt to taste and serve with fresh cilantro.'
      ],
      prepTime: '15 minutes',
      cookTime: '30 minutes',
      servings: 4,
      rating: 4.7
    },
    { 
      id: '3', 
      title: 'Caesar Salad', 
      description: 'Fresh and crispy salad with homemade dressing', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '5', // Vegetarian
      ingredients: [
        '2 heads of romaine lettuce, chopped',
        '1 cup croutons',
        '1/4 cup grated Parmesan cheese',
        '1/4 cup Caesar dressing',
        'Salt and pepper to taste',
        '1 tbsp olive oil (for the dressing)',
        '1 clove garlic (for the dressing)',
        '1 tbsp Dijon mustard (for the dressing)',
        '1 tbsp lemon juice (for the dressing)'
      ],
      instructions: [
        'In a large bowl, toss the chopped lettuce with croutons and Parmesan.',
        'To make the dressing, whisk together olive oil, garlic, Dijon mustard, lemon juice, and Caesar dressing.',
        'Toss the salad with the dressing and season with salt and pepper to taste.',
        'Serve immediately.'
      ],
      prepTime: '10 minutes',
      cookTime: '0 minutes',
      servings: 4,
      rating: 4.3
    },
    { 
      id: '4', 
      title: 'Beef Stroganoff', 
      description: 'Hearty Russian dish with tender beef', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '6', // Quick & Easy
      ingredients: [
        '500g beef (sirloin or tenderloin), cut into strips',
        '1 onion, finely chopped',
        '2 cloves garlic, minced',
        '1/2 cup mushrooms, sliced',
        '1 cup beef broth',
        '1/2 cup sour cream',
        '2 tbsp butter',
        '1 tbsp flour',
        '1 tsp Dijon mustard',
        'Salt and pepper to taste'
      ],
      instructions: [
        'Melt butter in a pan over medium heat and sauté onions and garlic until softened.',
        'Add beef strips and cook until browned on all sides.',
        'Stir in mushrooms and cook for another 3-4 minutes.',
        'Add flour and cook for 1-2 minutes before adding beef broth.',
        'Bring to a simmer and cook for 5 minutes.',
        'Stir in sour cream and mustard, and cook until the sauce thickens.',
        'Season with salt and pepper and serve over egg noodles or rice.'
      ],
      prepTime: '10 minutes',
      cookTime: '25 minutes',
      servings: 4,
      rating: 4.6
    },
    { 
      id: '5', 
      title: 'Vegetable Stir Fry', 
      description: 'Quick and healthy Asian-inspired dish', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '2', // Asian
      ingredients: [
        '2 tbsp vegetable oil',
        '1 bell pepper, sliced',
        '1 zucchini, sliced',
        '1 carrot, julienned',
        '1/2 cup broccoli florets',
        '1/2 cup snap peas',
        '2 cloves garlic, minced',
        '2 tbsp soy sauce',
        '1 tbsp oyster sauce',
        '1 tbsp sesame oil',
        'Salt and pepper to taste',
        'Sesame seeds for garnish'
      ],
      instructions: [
        'Heat vegetable oil in a large pan or wok over medium-high heat.',
        'Add garlic and sauté for 1 minute.',
        'Add the vegetables and stir-fry for 5-7 minutes until tender-crisp.',
        'Stir in soy sauce, oyster sauce, and sesame oil.',
        'Season with salt and pepper to taste.',
        'Serve immediately, garnished with sesame seeds.'
      ],
      prepTime: '10 minutes',
      cookTime: '10 minutes',
      servings: 4,
      rating: 4.4
    },
    { 
      id: '6', 
      title: 'Chocolate Chip Cookies', 
      description: 'Classic sweet treat', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '4', // Desserts
      ingredients: [
        '1 cup butter, softened',
        '3/4 cup brown sugar',
        '3/4 cup white sugar',
        '2 large eggs',
        '2 tsp vanilla extract',
        '2 1/4 cups all-purpose flour',
        '1 tsp baking soda',
        '1/2 tsp salt',
        '2 cups semi-sweet chocolate chips'
      ],
      instructions: [
        'Preheat oven to 350°F (175°C).',
        'In a large bowl, cream together butter, brown sugar, and white sugar.',
        'Beat in eggs and vanilla extract.',
        'In a separate bowl, whisk together flour, baking soda, and salt.',
        'Gradually add the dry ingredients to the wet ingredients, mixing well.',
        'Stir in chocolate chips.',
        'Drop spoonfuls of dough onto a baking sheet.',
        'Bake for 10-12 minutes or until golden brown.',
        'Let cool on a wire rack.'
      ],
      prepTime: '10 minutes',
      cookTime: '10-12 minutes',
      servings: 24,
      rating: 4.8
    },
    { 
      id: '7', 
      title: 'Margherita Pizza', 
      description: 'Simple and delicious Italian pizza', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '1', // Italian
      ingredients: [
        '1 pizza dough',
        '1/2 cup tomato sauce',
        '1 cup fresh mozzarella, torn into pieces',
        'Fresh basil leaves',
        '1 tbsp olive oil',
        'Salt to taste'
      ],
      instructions: [
        'Preheat your oven to 475°F (245°C).',
        'Roll out pizza dough on a floured surface.',
        'Spread tomato sauce evenly over the dough.',
        'Top with mozzarella and basil leaves.',
        'Drizzle with olive oil and sprinkle with salt.',
        'Bake in the oven for 10-12 minutes until the crust is golden and cheese is melted.',
        'Serve immediately.'
      ],
      prepTime: '10 minutes',
      cookTime: '10-12 minutes',
      servings: 2,
      rating: 4.6
    },
    { 
      id: '8', 
      title: 'Beef Tacos', 
      description: 'Flavorful Mexican street food', 
      image: '/placeholder.svg?height=200&width=300',
      categoryId: '3', // Mexican
      ingredients: [
        '500g ground beef',
        '1 onion, diced',
        '2 cloves garlic, minced',
        '1 tsp chili powder',
        '1 tsp cumin',
        '1/2 tsp paprika',
        'Salt to taste',
        '8 taco shells',
        'Toppings: lettuce, diced tomatoes, cheese, sour cream, salsa'
      ],
      instructions: [
        'In a skillet, cook ground beef with onion and garlic over medium heat.',
        'Add chili powder, cumin, paprika, and salt. Stir to combine.',
        'Simmer for 5-7 minutes, until the beef is fully cooked.',
        'Warm taco shells in the oven for 5 minutes.',
        'Fill each shell with beef mixture and top with your favorite toppings.'
      ],
      prepTime: '10 minutes',
      cookTime: '15 minutes',
      servings: 4,
      rating: 4.7
    }
  ];
  