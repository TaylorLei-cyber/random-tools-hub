// 食物数据库 - 独立文件，便于维护和扩展
const foodDatabase = {
    "Chinese Yogurt Bowl Tempeh With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 156,
            "protein": 11,
            "carbs": 42,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 0.6 cup tempeh, 80 g oats, 1.9 cup broccoli with liquid until smooth. Top with 1.5 cup carrot, 170 g cucumber, 1.5 cup dill and garnish with 3 tbsps olive oil, 2 cloves garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "0.6 cup tempeh, 80 g oats, 1.9 cup broccoli, 1.5 cup carrot, 170 g cucumber, 1.5 cup dill, 1 tsp lemon juice, 1 tsp paprika, 3 tbsps olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 156,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 106,
            "sodium": 372,
            "carbohydrates": 42,
            "fiber": 13,
            "sugar": 10,
            "protein": 11
        }
    },
    "Thai Scramble Sweet Potato With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 296,
            "protein": 40,
            "carbs": 6,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.1 cup oats, 1.6 cup kale, 1.7 cup carrot until softened. Add beaten eggs and 190 g sweet potato if applicable, scramble until cooked. Season with 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "190 g sweet potato, 1.1 cup oats, 1.6 cup kale, 1.7 cup carrot, 1.6 cup broccoli, 1.7 cup mint, 1 tsp lemon juice, 1 tsp turmeric, 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 296,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 42,
            "sodium": 856,
            "carbohydrates": 6,
            "fiber": 3,
            "sugar": 17,
            "protein": 40
        }
    },
    "Mexican Yogurt Bowl Tempeh With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 334,
            "protein": 14,
            "carbs": 56,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 110 g tempeh, 3 tbsps yogurt, 0.9 cup mushroom with liquid until smooth. Top with 80 g lettuce, 2 tsps bell pepper, 80 g cilantro and garnish with 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "110 g tempeh, 3 tbsps yogurt, 0.9 cup mushroom, 80 g lettuce, 2 tsps bell pepper, 80 g cilantro, 2 tbsps lemon juice, 2 tsps paprika, 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 334,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 29,
            "sodium": 582,
            "carbohydrates": 56,
            "fiber": 13,
            "sugar": 11,
            "protein": 14
        }
    },
    "Turkish Scramble Paneer With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 311,
            "protein": 11,
            "carbs": 71,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tsps yogurt, 1.5 cup carrot, 1.1 cup mushroom until softened. Add beaten eggs and 60 g paneer if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 tsp garlic, 2 cup onion and serve immediately.",
        "ingredients": "60 g paneer, 2 tsps yogurt, 1.5 cup carrot, 1.1 cup mushroom, 1.9 cup tomato, 0.9 cup dill, 2 cloves ginger, 3 tbsps soy sauce, 3 tbsps olive oil, 1 tsp garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 311,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 65,
            "sodium": 712,
            "carbohydrates": 71,
            "fiber": 11,
            "sugar": 3,
            "protein": 11
        }
    },
    "Mexican Yogurt Bowl Eggplant With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 502,
            "protein": 41,
            "carbs": 37,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1 cup eggplant, 1 piece wrap, 160 g carrot with liquid until smooth. Top with 0.6 cup broccoli, 240 g cabbage, 1.9 cup dill and garnish with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "1 cup eggplant, 1 piece wrap, 160 g carrot, 0.6 cup broccoli, 240 g cabbage, 1.9 cup dill, 3 tbsps lemon juice, 2 tsps turmeric, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 502,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 76,
            "sodium": 509,
            "carbohydrates": 37,
            "fiber": 11,
            "sugar": 18,
            "protein": 41
        }
    },
    "Thai Omelette Sweet Potato With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 294,
            "protein": 4,
            "carbs": 60,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 120 g congee, 1.5 cup cucumber, 210 g zucchini until softened. Add beaten eggs and 110 g sweet potato if applicable, scramble until cooked. Season with 3 tbsps olive oil, 3 cloves garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "110 g sweet potato, 120 g congee, 1.5 cup cucumber, 210 g zucchini, 140 g mushroom, 2 cup mint, 2 tsps chili flakes, 1 tbsp sesame oil, 3 tbsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 294,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 57,
            "sodium": 254,
            "carbohydrates": 60,
            "fiber": 11,
            "sugar": 17,
            "protein": 4
        }
    },
    "Thai Porridge Quinoa With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 649,
            "protein": 21,
            "carbs": 84,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.9 cup quinoa with water or broth until soft and creamy. Add 1 tsp yogurt, 1.8 cup zucchini, 0.9 cup cucumber and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 tsp garlic, 1.6 cup onion and serve hot.",
        "ingredients": "0.9 cup quinoa, 1 tsp yogurt, 1.8 cup zucchini, 0.9 cup cucumber, 0.8 cup cabbage, 1.4 cup parsley, 1 tsp turmeric, 1 tsp lime juice, 1 tbsp olive oil, 1 tsp garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 649,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 120,
            "sodium": 780,
            "carbohydrates": 84,
            "fiber": 1,
            "sugar": 3,
            "protein": 21
        }
    },
    "Mexican Toast Black Beans With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 616,
            "protein": 29,
            "carbs": 55,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 220 g black beans, 1.1 cup toast, 1.8 cup zucchini and top with 70 g lettuce, 2 tsps bell pepper, 0.9 cup thyme. Season with 3 tbsps olive oil, 3 cloves garlic, 1 tbsp onion and serve.",
        "ingredients": "220 g black beans, 1.1 cup toast, 1.8 cup zucchini, 70 g lettuce, 2 tsps bell pepper, 0.9 cup thyme, 2 tsps lime juice, 2 tsps paprika, 3 tbsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 616,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 75,
            "sodium": 443,
            "carbohydrates": 55,
            "fiber": 14,
            "sugar": 15,
            "protein": 29
        }
    },
    "Vietnamese Congee Halloumi With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 318,
            "protein": 42,
            "carbs": 84,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.2 cup halloumi with water or broth until soft and creamy. Add 1 tbsp yogurt, 120 g zucchini, 220 g mushroom and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion and serve hot.",
        "ingredients": "1.2 cup halloumi, 1 tbsp yogurt, 120 g zucchini, 220 g mushroom, 90 g cabbage, 1.2 cup basil, 1 tsp lime juice, 2 tsps sesame oil, 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 318,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 2,
            "sodium": 68,
            "carbohydrates": 84,
            "fiber": 13,
            "sugar": 2,
            "protein": 42
        }
    },
    "Middle Eastern Oats Quinoa With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 541,
            "protein": 20,
            "carbs": 61,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.9 cup quinoa as base. Add 0.7 cup rice, 1.2 cup mushroom, 90 g corn and cook until tender. Incorporate 1.6 cup zucchini, 190 g parsley, 1.3 cup curry paste and season with 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "0.9 cup quinoa, 0.7 cup rice, 1.2 cup mushroom, 90 g corn, 1.6 cup zucchini, 190 g parsley, 1.3 cup curry paste, 2 tsps chili flakes, 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 541,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 60,
            "sodium": 807,
            "carbohydrates": 61,
            "fiber": 1,
            "sugar": 16,
            "protein": 20
        }
    },
    "Italian Toast Lentils With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 527,
            "protein": 10,
            "carbs": 16,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 60 g lentils, 2 pieces tortilla, 1 tsp bell pepper and top with 1.3 cup kale, 2 cup tomato, 230 g cilantro. Season with 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion and serve.",
        "ingredients": "60 g lentils, 2 pieces tortilla, 1 tsp bell pepper, 1.3 cup kale, 2 cup tomato, 230 g cilantro, 3 tbsps vinegar, 3 tbsps curry paste, 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 527,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 1,
            "sodium": 506,
            "carbohydrates": 16,
            "fiber": 4,
            "sugar": 13,
            "protein": 10
        }
    },
    "Greek Toast Zucchini With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 544,
            "protein": 30,
            "carbs": 23,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.8 cup zucchini, 1 piece tortilla, 1.7 cup broccoli and top with 1.9 cup tomato, 1.5 cup spinach, 220 g rosemary. Season with 1 tbsp olive oil, 2 cloves garlic, 2 tbsps onion and serve.",
        "ingredients": "1.8 cup zucchini, 1 piece tortilla, 1.7 cup broccoli, 1.9 cup tomato, 1.5 cup spinach, 220 g rosemary, 2 pieces curry paste, 1 tsp paprika, 1 tbsp olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 544,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 111,
            "sodium": 883,
            "carbohydrates": 23,
            "fiber": 7,
            "sugar": 3,
            "protein": 30
        }
    },
    "Indian Yogurt Bowl Seitan With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 290,
            "protein": 36,
            "carbs": 31,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 150 g seitan, 1 piece toast, 120 g spinach with liquid until smooth. Top with 0.7 cup carrot, 1.1 cup cabbage, 0.6 cup cilantro and garnish with 1 tbsp olive oil, 3 cloves garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "150 g seitan, 1 piece toast, 120 g spinach, 0.7 cup carrot, 1.1 cup cabbage, 0.6 cup cilantro, 3 tbsps vinegar, 2 tsps ginger, 1 tbsp olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 290,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 17,
            "sodium": 458,
            "carbohydrates": 31,
            "fiber": 4,
            "sugar": 17,
            "protein": 36
        }
    },
    "Italian Toast Pumpkin With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 430,
            "protein": 42,
            "carbs": 32,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 2 tsps pumpkin, 1 piece wrap, 2 tsps bell pepper and top with 140 g spinach, 1.5 cup lettuce, 1.6 cup dill. Season with 3 tbsps olive oil, 1 tsp garlic, 1.6 cup onion and serve.",
        "ingredients": "2 tsps pumpkin, 1 piece wrap, 2 tsps bell pepper, 140 g spinach, 1.5 cup lettuce, 1.6 cup dill, 2 tsps chili flakes, 1 tsp turmeric, 3 tbsps olive oil, 1 tsp garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 430,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 54,
            "sodium": 530,
            "carbohydrates": 32,
            "fiber": 12,
            "sugar": 7,
            "protein": 42
        }
    },
    "Vietnamese Congee Tempeh With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 367,
            "protein": 40,
            "carbs": 30,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 100 g tempeh with water or broth until soft and creamy. Add 1 piece tortilla, 90 g cabbage, 1.7 cup corn and simmer until vegetables are tender. Season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion and serve hot.",
        "ingredients": "100 g tempeh, 1 piece tortilla, 90 g cabbage, 1.7 cup corn, 1.3 cup broccoli, 230 g mint, 1 tsp curry paste, 1 tsp ginger, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 367,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 104,
            "sodium": 481,
            "carbohydrates": 30,
            "fiber": 5,
            "sugar": 1,
            "protein": 40
        }
    },
    "Greek Yogurt Bowl Seitan With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 410,
            "protein": 9,
            "carbs": 31,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 210 g seitan, 0.7 cup oats, 1.8 cup kale with liquid until smooth. Top with 60 g carrot, 1.6 cup cabbage, 230 g mint and garnish with 2 tsps olive oil, 1 clove garlic, 1.3 cup onion. Serve chilled.",
        "ingredients": "210 g seitan, 0.7 cup oats, 1.8 cup kale, 60 g carrot, 1.6 cup cabbage, 230 g mint, 1 tbsp soy sauce, 3 tbsps lime juice, 2 tsps olive oil, 1 clove garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 410,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 104,
            "sodium": 367,
            "carbohydrates": 31,
            "fiber": 5,
            "sugar": 20,
            "protein": 9
        }
    },
    "Chinese Porridge Tofu With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 532,
            "protein": 30,
            "carbs": 77,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 2 cup tofu with water or broth until soft and creamy. Add 1 tbsp yogurt, 0.7 cup spinach, 60 g broccoli and simmer until vegetables are tender. Season with 2 tbsps olive oil, 3 cloves garlic, 2 tbsps onion and serve hot.",
        "ingredients": "2 cup tofu, 1 tbsp yogurt, 0.7 cup spinach, 60 g broccoli, 1.5 cup carrot, 1.5 cup parsley, 1 tsp turmeric, 3 tbsps lemon juice, 2 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 532,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 119,
            "sodium": 442,
            "carbohydrates": 77,
            "fiber": 10,
            "sugar": 2,
            "protein": 30
        }
    },
    "Mexican Scramble Paneer With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 152,
            "protein": 34,
            "carbs": 24,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 cup rice, 1 cup tomato, 0.9 cup cucumber until softened. Add beaten eggs and 100 g paneer if applicable, scramble until cooked. Season with 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "100 g paneer, 1 cup rice, 1 cup tomato, 0.9 cup cucumber, 180 g mushroom, 1.3 cup parsley, 2 tsps cumin, 2 tsps lime juice, 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 152,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 74,
            "sodium": 131,
            "carbohydrates": 24,
            "fiber": 8,
            "sugar": 8,
            "protein": 34
        }
    },
    "Mexican Frittata Broccoli With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 521,
            "protein": 43,
            "carbs": 11,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces wrap, 120 g carrot, 1.4 cup spinach in oil. Pour beaten eggs over vegetables, add 210 g broccoli if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 clove garlic, 0.5 cup onion.",
        "ingredients": "210 g broccoli, 2 pieces wrap, 120 g carrot, 1.4 cup spinach, 70 g cabbage, 150 g thyme, 1 tsp chili flakes, 1 tsp sesame oil, 1 tsp olive oil, 1 clove garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 521,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 59,
            "sodium": 145,
            "carbohydrates": 11,
            "fiber": 1,
            "sugar": 18,
            "protein": 43
        }
    },
    "Middle Eastern Oats Eggplant With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 377,
            "protein": 33,
            "carbs": 67,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g eggplant as base. Add 1 tsp yogurt, 110 g cucumber, 0.5 cup spinach and cook until tender. Incorporate 2 cup broccoli, 100 g basil, 2 tsps paprika and season with 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "170 g eggplant, 1 tsp yogurt, 110 g cucumber, 0.5 cup spinach, 2 cup broccoli, 100 g basil, 2 tsps paprika, 2 tsps sesame oil, 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 377,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 21,
            "sodium": 881,
            "carbohydrates": 67,
            "fiber": 7,
            "sugar": 20,
            "protein": 33
        }
    },
    "French Omelette Halloumi With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 423,
            "protein": 11,
            "carbs": 48,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.2 cup toast, 220 g cucumber, 90 g kale until softened. Add beaten eggs and 1.2 cup halloumi if applicable, scramble until cooked. Season with 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "1.2 cup halloumi, 1.2 cup toast, 220 g cucumber, 90 g kale, 90 g broccoli, 1.9 cup dill, 1 tsp paprika, 1 tsp chili flakes, 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 423,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 88,
            "sodium": 859,
            "carbohydrates": 48,
            "fiber": 9,
            "sugar": 5,
            "protein": 11
        }
    },
    "French Pancakes Cauliflower With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 219,
            "protein": 42,
            "carbs": 43,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 2 tbsps cauliflower, 170 g congee, 1.4 cup lettuce with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 150 g pea, 1.7 cup kale, 0.6 cup cilantro and 1 tsp olive oil, 1 clove garlic, 0.6 cup onion.",
        "ingredients": "2 tbsps cauliflower, 170 g congee, 1.4 cup lettuce, 150 g pea, 1.7 cup kale, 0.6 cup cilantro, 1 tsp paprika, 2 tsps cumin, 1 tsp olive oil, 1 clove garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 219,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 2,
            "sodium": 96,
            "carbohydrates": 43,
            "fiber": 15,
            "sugar": 20,
            "protein": 42
        }
    },
    "Chinese Waffles Broccoli With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 288,
            "protein": 36,
            "carbs": 13,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 90 g broccoli, 1 piece wrap, 210 g kale with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 240 g pea, 90 g mushroom, 0.9 cup parsley and 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion.",
        "ingredients": "90 g broccoli, 1 piece wrap, 210 g kale, 240 g pea, 90 g mushroom, 0.9 cup parsley, 2 tsps cumin, 2 tsps chili flakes, 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 288,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 59,
            "sodium": 90,
            "carbohydrates": 13,
            "fiber": 1,
            "sugar": 4,
            "protein": 36
        }
    },
    "Chinese Porridge Cauliflower With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 308,
            "protein": 40,
            "carbs": 66,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 3 tbsps cauliflower with water or broth until soft and creamy. Add 2 pieces tortilla, 140 g kale, 0.9 cup cucumber and simmer until vegetables are tender. Season with 3 tbsps olive oil, 2 cloves garlic, 0.6 cup onion and serve hot.",
        "ingredients": "3 tbsps cauliflower, 2 pieces tortilla, 140 g kale, 0.9 cup cucumber, 240 g cabbage, 90 g mint, 2 tsps turmeric, 1 tsp ginger, 3 tbsps olive oil, 2 cloves garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 308,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 29,
            "sodium": 505,
            "carbohydrates": 66,
            "fiber": 5,
            "sugar": 8,
            "protein": 40
        }
    },
    "Turkish Yogurt Bowl Halloumi With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 212,
            "protein": 17,
            "carbs": 44,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 90 g halloumi, 1.7 cup congee, 80 g corn with liquid until smooth. Top with 160 g carrot, 180 g cabbage, 1.7 cup basil and garnish with 1 tbsp olive oil, 2 tsps garlic, 0.6 cup onion. Serve chilled.",
        "ingredients": "90 g halloumi, 1.7 cup congee, 80 g corn, 160 g carrot, 180 g cabbage, 1.7 cup basil, 1 tbsp curry paste, 1 tsp vinegar, 1 tbsp olive oil, 2 tsps garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 212,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 101,
            "sodium": 251,
            "carbohydrates": 44,
            "fiber": 3,
            "sugar": 19,
            "protein": 17
        }
    },
    "Middle Eastern Yogurt Bowl Black Beans With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 579,
            "protein": 27,
            "carbs": 17,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 200 g black beans, 240 g oats, 170 g cabbage with liquid until smooth. Top with 0.8 cup pea, 140 g lettuce, 180 g mint and garnish with 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "200 g black beans, 240 g oats, 170 g cabbage, 0.8 cup pea, 140 g lettuce, 180 g mint, 2 tsps curry paste, 1 tsp lime juice, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 579,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 55,
            "sodium": 501,
            "carbohydrates": 17,
            "fiber": 6,
            "sugar": 8,
            "protein": 27
        }
    },
    "Spanish Toast Tofu With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 230,
            "protein": 9,
            "carbs": 8,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.1 cup tofu, 220 g toast, 230 g mushroom and top with 130 g zucchini, 1.3 cup corn, 0.9 cup cilantro. Season with 3 tbsps olive oil, 1 tsp garlic, 0.6 cup onion and serve.",
        "ingredients": "1.1 cup tofu, 220 g toast, 230 g mushroom, 130 g zucchini, 1.3 cup corn, 0.9 cup cilantro, 2 tsps turmeric, 1 tsp ginger, 3 tbsps olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 230,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 118,
            "sodium": 550,
            "carbohydrates": 8,
            "fiber": 13,
            "sugar": 17,
            "protein": 9
        }
    },
    "Middle Eastern Toast Paneer With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 244,
            "protein": 3,
            "carbs": 50,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 170 g paneer, 60 g oats, 2 tsps bell pepper and top with 1.9 cup pea, 1.1 cup corn, 130 g basil. Season with 2 tsps olive oil, 1 tsp garlic, 1 tbsp onion and serve.",
        "ingredients": "170 g paneer, 60 g oats, 2 tsps bell pepper, 1.9 cup pea, 1.1 cup corn, 130 g basil, 1 tsp paprika, 1 tsp soy sauce, 2 tsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 244,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 62,
            "sodium": 229,
            "carbohydrates": 50,
            "fiber": 12,
            "sugar": 4,
            "protein": 3
        }
    },
    "Greek Oats Pumpkin With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 196,
            "protein": 6,
            "carbs": 28,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g pumpkin as base. Add 1.9 cup toast, 230 g tomato, 100 g broccoli and cook until tender. Incorporate 1.7 cup kale, 1.5 cup rosemary, 1 tsp turmeric and season with 1 tsp olive oil, 2 tsps garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "160 g pumpkin, 1.9 cup toast, 230 g tomato, 100 g broccoli, 1.7 cup kale, 1.5 cup rosemary, 1 tsp turmeric, 1 tsp chili flakes, 1 tsp olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 196,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 105,
            "sodium": 408,
            "carbohydrates": 28,
            "fiber": 1,
            "sugar": 8,
            "protein": 6
        }
    },
    "Indian Toast Tempeh With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 622,
            "protein": 23,
            "carbs": 27,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.4 cup tempeh, 100 g rice, 1.5 cup cucumber and top with 140 g zucchini, 160 g corn, 0.9 cup dill. Season with 2 tbsps olive oil, 3 cloves garlic, 1.3 cup onion and serve.",
        "ingredients": "1.4 cup tempeh, 100 g rice, 1.5 cup cucumber, 140 g zucchini, 160 g corn, 0.9 cup dill, 2 tsps paprika, 1.4 cup curry paste, 2 tbsps olive oil, 3 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 622,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 101,
            "sodium": 186,
            "carbohydrates": 27,
            "fiber": 8,
            "sugar": 4,
            "protein": 23
        }
    },
    "Turkish Omelette Paneer With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 337,
            "protein": 18,
            "carbs": 51,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tsps yogurt, 1.9 cup broccoli, 2 tsps bell pepper until softened. Add beaten eggs and 1.2 cup paneer if applicable, scramble until cooked. Season with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "1.2 cup paneer, 2 tsps yogurt, 1.9 cup broccoli, 2 tsps bell pepper, 1.4 cup zucchini, 1 cup rosemary, 1 tsp soy sauce, 1 tsp turmeric, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 337,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 104,
            "sodium": 529,
            "carbohydrates": 51,
            "fiber": 12,
            "sugar": 10,
            "protein": 18
        }
    },
    "Italian Toast Broccoli With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 425,
            "protein": 20,
            "carbs": 62,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.4 cup broccoli, 2 tbsps yogurt, 150 g pea and top with 0.6 cup carrot, 1.3 cup basil, 1 tsp chili flakes. Season with 1 tbsp olive oil, 1 clove garlic, 3 tbsps onion and serve.",
        "ingredients": "1.4 cup broccoli, 2 tbsps yogurt, 150 g pea, 0.6 cup carrot, 1.3 cup basil, 1 tsp chili flakes, 1 tsp paprika, 1 tbsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 425,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 118,
            "sodium": 392,
            "carbohydrates": 62,
            "fiber": 6,
            "sugar": 20,
            "protein": 20
        }
    },
    "Korean Porridge Tempeh With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 498,
            "protein": 31,
            "carbs": 8,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 240 g tempeh with water or broth until soft and creamy. Add 2 tsps toast, 170 g kale, 110 g tomato and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion and serve hot.",
        "ingredients": "240 g tempeh, 2 tsps toast, 170 g kale, 110 g tomato, 2 tsps bell pepper, 1.6 cup rosemary, 1 tsp lime juice, 2 tsps paprika, 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 498,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 86,
            "sodium": 211,
            "carbohydrates": 8,
            "fiber": 12,
            "sugar": 13,
            "protein": 31
        }
    },
    "Middle Eastern Porridge Zucchini With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 193,
            "protein": 25,
            "carbs": 55,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 110 g zucchini with water or broth until soft and creamy. Add 1 piece wrap, 210 g mushroom, 1.6 cup broccoli and simmer until vegetables are tender. Season with 1 tbsp olive oil, 2 tsps garlic, 0.8 cup onion and serve hot.",
        "ingredients": "110 g zucchini, 1 piece wrap, 210 g mushroom, 1.6 cup broccoli, 180 g cabbage, 1 cup dill, 3 tbsps vinegar, 3 tbsps sesame oil, 1 tbsp olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 193,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 46,
            "sodium": 792,
            "carbohydrates": 55,
            "fiber": 5,
            "sugar": 6,
            "protein": 25
        }
    },
    "Middle Eastern Frittata Cauliflower With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 164,
            "protein": 44,
            "carbs": 5,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.1 cup rice, 240 g broccoli, 130 g tomato in oil. Pour beaten eggs over vegetables, add 1.4 cup cauliflower if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 clove garlic, 1.9 cup onion.",
        "ingredients": "1.4 cup cauliflower, 1.1 cup rice, 240 g broccoli, 130 g tomato, 1 cup cabbage, 0.6 cup cilantro, 2 tsps cumin, 1 tbsp soy sauce, 1 tsp olive oil, 1 clove garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 164,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 77,
            "sodium": 314,
            "carbohydrates": 5,
            "fiber": 6,
            "sugar": 16,
            "protein": 44
        }
    },
    "Greek Frittata Black Beans With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 153,
            "protein": 10,
            "carbs": 25,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.4 cup oats, 140 g corn, 60 g kale in oil. Pour beaten eggs over vegetables, add 1.6 cup black beans if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 2 cloves garlic, 1.7 cup onion.",
        "ingredients": "1.6 cup black beans, 1.4 cup oats, 140 g corn, 60 g kale, 1.8 cup lettuce, 1.3 cup basil, 1 tsp vinegar, 1 tsp sesame oil, 1 tsp olive oil, 2 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 153,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 72,
            "sodium": 553,
            "carbohydrates": 25,
            "fiber": 1,
            "sugar": 1,
            "protein": 10
        }
    },
    "American Congee Halloumi With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 490,
            "protein": 12,
            "carbs": 66,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 220 g halloumi with water or broth until soft and creamy. Add 2 tsps toast, 200 g tomato, 130 g spinach and simmer until vegetables are tender. Season with 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion and serve hot.",
        "ingredients": "220 g halloumi, 2 tsps toast, 200 g tomato, 130 g spinach, 100 g zucchini, 110 g cilantro, 2 tbsps lime juice, 140 g curry paste, 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 490,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 69,
            "sodium": 829,
            "carbohydrates": 66,
            "fiber": 4,
            "sugar": 1,
            "protein": 12
        }
    },
    "Moroccan Yogurt Bowl Cauliflower With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 335,
            "protein": 37,
            "carbs": 40,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 3 tbsps cauliflower, 3 tbsps toast, 1.4 cup pea with liquid until smooth. Top with 1.5 cup lettuce, 230 g broccoli, 220 g mint and garnish with 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "3 tbsps cauliflower, 3 tbsps toast, 1.4 cup pea, 1.5 cup lettuce, 230 g broccoli, 220 g mint, 1 tsp chili flakes, 1 piece curry paste, 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 335,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 113,
            "sodium": 611,
            "carbohydrates": 40,
            "fiber": 10,
            "sugar": 5,
            "protein": 37
        }
    },
    "Thai Porridge Halloumi With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 569,
            "protein": 7,
            "carbs": 17,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.5 cup halloumi with water or broth until soft and creamy. Add 1.6 cup oats, 100 g cucumber, 220 g broccoli and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "0.5 cup halloumi, 1.6 cup oats, 100 g cucumber, 220 g broccoli, 0.5 cup zucchini, 200 g mint, 2 tsps lemon juice, 3 tbsps curry paste, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 569,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 52,
            "sodium": 97,
            "carbohydrates": 17,
            "fiber": 15,
            "sugar": 17,
            "protein": 7
        }
    },
    "Chinese Waffles Chickpeas With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 151,
            "protein": 19,
            "carbs": 42,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.8 cup chickpeas, 1 cup oats, 110 g cabbage with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.2 cup kale, 1 cup carrot, 1 cup basil and 1 tbsp olive oil, 2 tsps garlic, 2 tbsps onion.",
        "ingredients": "1.8 cup chickpeas, 1 cup oats, 110 g cabbage, 1.2 cup kale, 1 cup carrot, 1 cup basil, 2 tbsps sesame oil, 2 tsps ginger, 1 tbsp olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 151,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 86,
            "sodium": 294,
            "carbohydrates": 42,
            "fiber": 12,
            "sugar": 9,
            "protein": 19
        }
    },
    "Italian Toast Sweet Potato With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 329,
            "protein": 22,
            "carbs": 22,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.8 cup sweet potato, 120 g congee, 0.8 cup corn and top with 190 g tomato, 0.5 cup lettuce, 1.1 cup cilantro. Season with 3 tbsps olive oil, 2 tsps garlic, 2 tbsps onion and serve.",
        "ingredients": "0.8 cup sweet potato, 120 g congee, 0.8 cup corn, 190 g tomato, 0.5 cup lettuce, 1.1 cup cilantro, 2 tsps paprika, 1 clove ginger, 3 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 329,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 76,
            "sodium": 94,
            "carbohydrates": 22,
            "fiber": 15,
            "sugar": 6,
            "protein": 22
        }
    },
    "Vietnamese Porridge Pumpkin With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 583,
            "protein": 30,
            "carbs": 9,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 2 tsps pumpkin with water or broth until soft and creamy. Add 130 g oats, 0.6 cup cabbage, 1.6 cup pea and simmer until vegetables are tender. Season with 1 tsp olive oil, 2 cloves garlic, 0.9 cup onion and serve hot.",
        "ingredients": "2 tsps pumpkin, 130 g oats, 0.6 cup cabbage, 1.6 cup pea, 1.3 cup spinach, 1.6 cup mint, 1 tsp lime juice, 2 tbsps sesame oil, 1 tsp olive oil, 2 cloves garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 583,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 85,
            "sodium": 449,
            "carbohydrates": 9,
            "fiber": 2,
            "sugar": 8,
            "protein": 30
        }
    },
    "Italian Waffles Chickpeas With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 406,
            "protein": 33,
            "carbs": 12,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.1 cup chickpeas, 1 tsp yogurt, 80 g kale with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 0.9 cup carrot, 1.7 cup tomato, 240 g rosemary and 1 tsp olive oil, 3 cloves garlic, 1.5 cup onion.",
        "ingredients": "1.1 cup chickpeas, 1 tsp yogurt, 80 g kale, 0.9 cup carrot, 1.7 cup tomato, 240 g rosemary, 1 tbsp lime juice, 1 tsp cumin, 1 tsp olive oil, 3 cloves garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 406,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 49,
            "sodium": 364,
            "carbohydrates": 12,
            "fiber": 2,
            "sugar": 11,
            "protein": 33
        }
    },
    "Italian Scramble Pumpkin With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 545,
            "protein": 15,
            "carbs": 49,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 tsp yogurt, 240 g spinach, 2 tsps bell pepper until softened. Add beaten eggs and 3 tbsps pumpkin if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "3 tbsps pumpkin, 1 tsp yogurt, 240 g spinach, 2 tsps bell pepper, 240 g broccoli, 1.7 cup thyme, 2 tsps vinegar, 2 tsps lime juice, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 545,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 10,
            "sodium": 382,
            "carbohydrates": 49,
            "fiber": 10,
            "sugar": 2,
            "protein": 15
        }
    },
    "Japanese Toast Eggplant With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 377,
            "protein": 40,
            "carbs": 18,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 2 tbsps eggplant, 1 piece wrap, 1.5 cup corn and top with 1.7 cup tomato, 1.3 cup broccoli, 1.4 cup rosemary. Season with 2 tbsps olive oil, 2 cloves garlic, 2 tbsps onion and serve.",
        "ingredients": "2 tbsps eggplant, 1 piece wrap, 1.5 cup corn, 1.7 cup tomato, 1.3 cup broccoli, 1.4 cup rosemary, 2 tbsps vinegar, 2 tsps sesame oil, 2 tbsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 377,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 29,
            "sodium": 611,
            "carbohydrates": 18,
            "fiber": 7,
            "sugar": 12,
            "protein": 40
        }
    },
    "Middle Eastern Toast Pumpkin With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 373,
            "protein": 40,
            "carbs": 76,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 100 g pumpkin, 2 pieces wrap, 100 g cabbage and top with 1 tsp bell pepper, 1.5 cup tomato, 200 g basil. Season with 2 tsps olive oil, 1 clove garlic, 1 tbsp onion and serve.",
        "ingredients": "100 g pumpkin, 2 pieces wrap, 100 g cabbage, 1 tsp bell pepper, 1.5 cup tomato, 200 g basil, 3 tbsps lemon juice, 2 cloves ginger, 2 tsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 373,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 106,
            "sodium": 437,
            "carbohydrates": 76,
            "fiber": 8,
            "sugar": 5,
            "protein": 40
        }
    },
    "Spanish Pancakes Broccoli With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 307,
            "protein": 45,
            "carbs": 33,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1 cup broccoli, 230 g toast, 150 g zucchini with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 200 g carrot, 150 g corn, 1 cup rosemary and 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion.",
        "ingredients": "1 cup broccoli, 230 g toast, 150 g zucchini, 200 g carrot, 150 g corn, 1 cup rosemary, 2 cloves ginger, 1 tsp curry paste, 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 307,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 105,
            "sodium": 239,
            "carbohydrates": 33,
            "fiber": 9,
            "sugar": 22,
            "protein": 45
        }
    },
    "French Scramble Quinoa With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 505,
            "protein": 25,
            "carbs": 83,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.7 cup rice, 170 g kale, 1.2 cup cabbage until softened. Add beaten eggs and 70 g quinoa if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "70 g quinoa, 1.7 cup rice, 170 g kale, 1.2 cup cabbage, 230 g cucumber, 1.8 cup cilantro, 1 tsp ginger, 3 tbsps soy sauce, 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 505,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 104,
            "sodium": 153,
            "carbohydrates": 83,
            "fiber": 11,
            "sugar": 19,
            "protein": 25
        }
    },
    "Greek Toast Tofu With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 252,
            "protein": 37,
            "carbs": 12,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 80 g tofu, 240 g oats, 70 g corn and top with 1.7 cup pea, 1.6 cup tomato, 100 g mint. Season with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion and serve.",
        "ingredients": "80 g tofu, 240 g oats, 70 g corn, 1.7 cup pea, 1.6 cup tomato, 100 g mint, 2 tbsps soy sauce, 2 tsps lemon juice, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 252,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 28,
            "sodium": 270,
            "carbohydrates": 12,
            "fiber": 1,
            "sugar": 6,
            "protein": 37
        }
    },
    "Mexican Omelette Quinoa With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 256,
            "protein": 5,
            "carbs": 11,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 3 tbsps yogurt, 220 g kale, 200 g pea until softened. Add beaten eggs and 190 g quinoa if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 1.7 cup onion and serve immediately.",
        "ingredients": "190 g quinoa, 3 tbsps yogurt, 220 g kale, 200 g pea, 180 g tomato, 0.7 cup basil, 2 tsps cumin, 1 tbsp soy sauce, 2 tsps olive oil, 3 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 256,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 98,
            "sodium": 797,
            "carbohydrates": 11,
            "fiber": 9,
            "sugar": 5,
            "protein": 5
        }
    },
    "Japanese Oats Pumpkin With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 602,
            "protein": 39,
            "carbs": 66,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 tsps pumpkin as base. Add 1 piece wrap, 1.2 cup cucumber, 0.9 cup broccoli and cook until tender. Incorporate 110 g cabbage, 0.8 cup cilantro, 3 tbsps lemon juice and season with 1 tsp olive oil, 2 cloves garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "2 tsps pumpkin, 1 piece wrap, 1.2 cup cucumber, 0.9 cup broccoli, 110 g cabbage, 0.8 cup cilantro, 3 tbsps lemon juice, 1 tsp sesame oil, 1 tsp olive oil, 2 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 602,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 6,
            "sodium": 867,
            "carbohydrates": 66,
            "fiber": 4,
            "sugar": 21,
            "protein": 39
        }
    },
    "Thai Oats Black Beans With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 187,
            "protein": 17,
            "carbs": 84,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g black beans as base. Add 2 pieces tortilla, 90 g carrot, 190 g zucchini and cook until tender. Incorporate 0.6 cup tomato, 160 g dill, 2 tsps ginger and season with 1 tsp olive oil, 2 tsps garlic, 1 cup onion. Serve hot.",
        "ingredients": "170 g black beans, 2 pieces tortilla, 90 g carrot, 190 g zucchini, 0.6 cup tomato, 160 g dill, 2 tsps ginger, 1 tbsp vinegar, 1 tsp olive oil, 2 tsps garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 187,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 105,
            "sodium": 641,
            "carbohydrates": 84,
            "fiber": 4,
            "sugar": 16,
            "protein": 17
        }
    },
    "Thai Porridge Pumpkin With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 199,
            "protein": 39,
            "carbs": 26,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.7 cup pumpkin with water or broth until soft and creamy. Add 240 g congee, 60 g carrot, 1.3 cup spinach and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 tsps garlic, 1.2 cup onion and serve hot.",
        "ingredients": "0.7 cup pumpkin, 240 g congee, 60 g carrot, 1.3 cup spinach, 2 cup lettuce, 1 cup dill, 3 tbsps lemon juice, 0.7 cup curry paste, 2 tbsps olive oil, 2 tsps garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 199,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 59,
            "sodium": 604,
            "carbohydrates": 26,
            "fiber": 15,
            "sugar": 20,
            "protein": 39
        }
    },
    "Italian Yogurt Bowl Cauliflower With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 393,
            "protein": 19,
            "carbs": 78,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1 tsp cauliflower, 0.9 cup oats, 1.3 cup mushroom with liquid until smooth. Top with 1.3 cup broccoli, 60 g spinach, 1.5 cup thyme and garnish with 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion. Serve chilled.",
        "ingredients": "1 tsp cauliflower, 0.9 cup oats, 1.3 cup mushroom, 1.3 cup broccoli, 60 g spinach, 1.5 cup thyme, 2 tsps turmeric, 3 tbsps curry paste, 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 393,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 50,
            "sodium": 93,
            "carbohydrates": 78,
            "fiber": 1,
            "sugar": 21,
            "protein": 19
        }
    },
    "American Toast Quinoa With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 563,
            "protein": 28,
            "carbs": 49,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 190 g quinoa, 1.8 cup rice, 0.7 cup mushroom and top with 0.6 cup corn, 1.1 cup spinach, 0.7 cup basil. Season with 1 tsp olive oil, 1 tsp garlic, 0.8 cup onion and serve.",
        "ingredients": "190 g quinoa, 1.8 cup rice, 0.7 cup mushroom, 0.6 cup corn, 1.1 cup spinach, 0.7 cup basil, 2 tsps paprika, 2 pieces curry paste, 1 tsp olive oil, 1 tsp garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 563,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 107,
            "sodium": 155,
            "carbohydrates": 49,
            "fiber": 2,
            "sugar": 5,
            "protein": 28
        }
    },
    "Spanish Omelette Tofu With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 603,
            "protein": 21,
            "carbs": 18,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.6 cup congee, 0.5 cup corn, 170 g mushroom until softened. Add beaten eggs and 230 g tofu if applicable, scramble until cooked. Season with 3 tbsps olive oil, 2 cloves garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "230 g tofu, 1.6 cup congee, 0.5 cup corn, 170 g mushroom, 1.7 cup cabbage, 1 cup thyme, 1 tsp ginger, 1 tsp vinegar, 3 tbsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 603,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 107,
            "sodium": 385,
            "carbohydrates": 18,
            "fiber": 12,
            "sugar": 6,
            "protein": 21
        }
    },
    "Mexican Toast Halloumi With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 586,
            "protein": 45,
            "carbs": 46,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.7 cup halloumi, 120 g oats, 1.4 cup lettuce and top with 170 g zucchini, 1.6 cup broccoli, 1.2 cup basil. Season with 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion and serve.",
        "ingredients": "0.7 cup halloumi, 120 g oats, 1.4 cup lettuce, 170 g zucchini, 1.6 cup broccoli, 1.2 cup basil, 2 tsps ginger, 1 tsp lemon juice, 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 586,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 61,
            "sodium": 72,
            "carbohydrates": 46,
            "fiber": 14,
            "sugar": 10,
            "protein": 45
        }
    },
    "French Pancakes Broccoli With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 362,
            "protein": 35,
            "carbs": 50,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.6 cup broccoli, 1 piece wrap, 2 tsps bell pepper with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.1 cup zucchini, 0.7 cup carrot, 170 g thyme and 1 tbsp olive oil, 2 tsps garlic, 2 tbsps onion.",
        "ingredients": "1.6 cup broccoli, 1 piece wrap, 2 tsps bell pepper, 1.1 cup zucchini, 0.7 cup carrot, 170 g thyme, 1 tsp paprika, 1 clove ginger, 1 tbsp olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 362,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 104,
            "sodium": 124,
            "carbohydrates": 50,
            "fiber": 1,
            "sugar": 12,
            "protein": 35
        }
    },
    "Mexican Porridge Broccoli With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 315,
            "protein": 19,
            "carbs": 57,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 100 g broccoli with water or broth until soft and creamy. Add 2 pieces wrap, 190 g cabbage, 60 g carrot and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 cloves garlic, 3 tbsps onion and serve hot.",
        "ingredients": "100 g broccoli, 2 pieces wrap, 190 g cabbage, 60 g carrot, 2 cup tomato, 120 g cilantro, 2 tsps vinegar, 2 tsps ginger, 2 tsps olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 315,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 107,
            "sodium": 519,
            "carbohydrates": 57,
            "fiber": 12,
            "sugar": 15,
            "protein": 19
        }
    },
    "Spanish Frittata Seitan With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 255,
            "protein": 39,
            "carbs": 5,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 170 g oats, 1 cup zucchini, 120 g corn in oil. Pour beaten eggs over vegetables, add 190 g seitan if applicable. Cook until set, then finish under broiler. Season with 2 tbsps olive oil, 2 cloves garlic, 1.9 cup onion.",
        "ingredients": "190 g seitan, 170 g oats, 1 cup zucchini, 120 g corn, 170 g tomato, 0.6 cup rosemary, 1 tsp lemon juice, 1 tsp turmeric, 2 tbsps olive oil, 2 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 255,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 30,
            "sodium": 162,
            "carbohydrates": 5,
            "fiber": 3,
            "sugar": 20,
            "protein": 39
        }
    },
    "French Porridge Paneer With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 419,
            "protein": 30,
            "carbs": 10,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.5 cup paneer with water or broth until soft and creamy. Add 2 pieces wrap, 90 g tomato, 1.2 cup corn and simmer until vegetables are tender. Season with 3 tbsps olive oil, 1 tsp garlic, 0.9 cup onion and serve hot.",
        "ingredients": "1.5 cup paneer, 2 pieces wrap, 90 g tomato, 1.2 cup corn, 140 g cabbage, 220 g dill, 2 tsps turmeric, 1 tbsp soy sauce, 3 tbsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 419,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 106,
            "sodium": 705,
            "carbohydrates": 10,
            "fiber": 13,
            "sugar": 2,
            "protein": 30
        }
    },
    "Italian Frittata Pumpkin With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 346,
            "protein": 5,
            "carbs": 21,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 220 g rice, 60 g carrot, 0.6 cup pea in oil. Pour beaten eggs over vegetables, add 200 g pumpkin if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 2 cloves garlic, 1.6 cup onion.",
        "ingredients": "200 g pumpkin, 220 g rice, 60 g carrot, 0.6 cup pea, 1.4 cup kale, 1.8 cup thyme, 1 tsp cumin, 1 tsp sesame oil, 2 tsps olive oil, 2 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 346,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 101,
            "sodium": 870,
            "carbohydrates": 21,
            "fiber": 5,
            "sugar": 6,
            "protein": 5
        }
    },
    "Spanish Frittata Zucchini With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 319,
            "protein": 4,
            "carbs": 26,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces tortilla, 0.8 cup cabbage, 110 g carrot in oil. Pour beaten eggs over vegetables, add 110 g zucchini if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 tsp garlic, 1.7 cup onion.",
        "ingredients": "110 g zucchini, 2 pieces tortilla, 0.8 cup cabbage, 110 g carrot, 110 g broccoli, 1 cup cilantro, 2 tsps sesame oil, 3 tbsps lime juice, 1 tsp olive oil, 1 tsp garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 319,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 92,
            "sodium": 742,
            "carbohydrates": 26,
            "fiber": 6,
            "sugar": 14,
            "protein": 4
        }
    },
    "Moroccan Waffles Zucchini With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 255,
            "protein": 16,
            "carbs": 83,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 0.5 cup zucchini, 0.6 cup oats, 130 g broccoli with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.6 cup tomato, 170 g mint, 2 tsps vinegar and 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion.",
        "ingredients": "0.5 cup zucchini, 0.6 cup oats, 130 g broccoli, 1.6 cup tomato, 170 g mint, 2 tsps vinegar, 2 tsps ginger, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 255,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 118,
            "sodium": 457,
            "carbohydrates": 83,
            "fiber": 8,
            "sugar": 10,
            "protein": 16
        }
    },
    "Mexican Toast Pumpkin With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 481,
            "protein": 4,
            "carbs": 45,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 2 tbsps pumpkin, 2 pieces wrap, 1.7 cup spinach and top with 1.4 cup mushroom, 0.6 cup corn, 180 g dill. Season with 2 tbsps olive oil, 3 cloves garlic, 3 tbsps onion and serve.",
        "ingredients": "2 tbsps pumpkin, 2 pieces wrap, 1.7 cup spinach, 1.4 cup mushroom, 0.6 cup corn, 180 g dill, 2 tsps sesame oil, 1 tbsp lime juice, 2 tbsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 481,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 108,
            "sodium": 274,
            "carbohydrates": 45,
            "fiber": 3,
            "sugar": 8,
            "protein": 4
        }
    },
    "Spanish Frittata Broccoli With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 206,
            "protein": 12,
            "carbs": 34,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces tortilla, 2 tsps bell pepper, 0.9 cup spinach in oil. Pour beaten eggs over vegetables, add 1.5 cup broccoli if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 3 cloves garlic, 1.1 cup onion.",
        "ingredients": "1.5 cup broccoli, 2 pieces tortilla, 2 tsps bell pepper, 0.9 cup spinach, 230 g cabbage, 0.6 cup mint, 1 tsp ginger, 2 tsps cumin, 2 tsps olive oil, 3 cloves garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 206,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 29,
            "sodium": 262,
            "carbohydrates": 34,
            "fiber": 4,
            "sugar": 21,
            "protein": 12
        }
    },
    "Greek Scramble Halloumi With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 174,
            "protein": 43,
            "carbs": 77,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 piece tortilla, 220 g cucumber, 210 g carrot until softened. Add beaten eggs and 1.8 cup halloumi if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 tsp garlic, 1.2 cup onion and serve immediately.",
        "ingredients": "1.8 cup halloumi, 1 piece tortilla, 220 g cucumber, 210 g carrot, 1.6 cup cabbage, 240 g basil, 1 tsp chili flakes, 1 tsp ginger, 1 tsp olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 174,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 36,
            "sodium": 722,
            "carbohydrates": 77,
            "fiber": 6,
            "sugar": 10,
            "protein": 43
        }
    },
    "Turkish Pancakes Tofu With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 286,
            "protein": 40,
            "carbs": 28,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.9 cup tofu, 230 g rice, 100 g tomato with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.7 cup cabbage, 1.2 cup cucumber, 150 g basil and 2 tsps olive oil, 2 tsps garlic, 1.7 cup onion.",
        "ingredients": "1.9 cup tofu, 230 g rice, 100 g tomato, 1.7 cup cabbage, 1.2 cup cucumber, 150 g basil, 3 tbsps curry paste, 1 clove ginger, 2 tsps olive oil, 2 tsps garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 286,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 34,
            "sodium": 172,
            "carbohydrates": 28,
            "fiber": 8,
            "sugar": 7,
            "protein": 40
        }
    },
    "Turkish Burrito Sweet Potato With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 463,
            "protein": 10,
            "carbs": 68,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 120 g sweet potato, 150 g congee, 0.7 cup tomato, 1 tsp bell pepper. Add 190 g cabbage, 1.8 cup basil, 1 tbsp lemon juice and roll tightly. Serve with 1 tsp olive oil, 3 cloves garlic, 2 cup onion on the side.",
        "ingredients": "120 g sweet potato, 150 g congee, 0.7 cup tomato, 1 tsp bell pepper, 190 g cabbage, 1.8 cup basil, 1 tbsp lemon juice, 2 tsps sesame oil, 1 tsp olive oil, 3 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 463,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 77,
            "sodium": 775,
            "carbohydrates": 68,
            "fiber": 2,
            "sugar": 19,
            "protein": 10
        }
    },
    "French Waffles Sweet Potato With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 569,
            "protein": 25,
            "carbs": 55,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.9 cup sweet potato, 2 tsps yogurt, 60 g cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 70 g kale, 170 g cabbage, 0.8 cup rosemary and 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion.",
        "ingredients": "1.9 cup sweet potato, 2 tsps yogurt, 60 g cucumber, 70 g kale, 170 g cabbage, 0.8 cup rosemary, 0.6 cup curry paste, 2 tsps lemon juice, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 569,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 23,
            "sodium": 661,
            "carbohydrates": 55,
            "fiber": 8,
            "sugar": 6,
            "protein": 25
        }
    },
    "American Omelette Eggplant With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 562,
            "protein": 11,
            "carbs": 53,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 60 g rice, 1 cup carrot, 2 tsps bell pepper until softened. Add beaten eggs and 1 tsp eggplant if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "1 tsp eggplant, 60 g rice, 1 cup carrot, 2 tsps bell pepper, 1.8 cup lettuce, 1.5 cup mint, 2 tsps turmeric, 2 tsps soy sauce, 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 562,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 86,
            "sodium": 233,
            "carbohydrates": 53,
            "fiber": 3,
            "sugar": 3,
            "protein": 11
        }
    },
    "French Oats Paneer With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 204,
            "protein": 5,
            "carbs": 42,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 190 g paneer as base. Add 2 pieces toast, 1.7 cup zucchini, 0.9 cup lettuce and cook until tender. Incorporate 130 g cucumber, 130 g parsley, 3 tbsps sesame oil and season with 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "190 g paneer, 2 pieces toast, 1.7 cup zucchini, 0.9 cup lettuce, 130 g cucumber, 130 g parsley, 3 tbsps sesame oil, 1 tsp ginger, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 204,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 40,
            "sodium": 854,
            "carbohydrates": 42,
            "fiber": 2,
            "sugar": 4,
            "protein": 5
        }
    },
    "Spanish Scramble Cauliflower With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 361,
            "protein": 24,
            "carbs": 37,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 piece wrap, 150 g zucchini, 240 g broccoli until softened. Add beaten eggs and 2 pieces cauliflower if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 clove garlic, 1.5 cup onion and serve immediately.",
        "ingredients": "2 pieces cauliflower, 1 piece wrap, 150 g zucchini, 240 g broccoli, 1.9 cup corn, 0.5 cup mint, 1 tsp lime juice, 1 tbsp soy sauce, 1 tsp olive oil, 1 clove garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 361,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 44,
            "sodium": 780,
            "carbohydrates": 37,
            "fiber": 6,
            "sugar": 14,
            "protein": 24
        }
    },
    "French Pancakes Broccoli With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 179,
            "protein": 34,
            "carbs": 48,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 230 g broccoli, 3 tbsps yogurt, 1.4 cup kale with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 60 g zucchini, 1.8 cup cucumber, 150 g rosemary and 3 tbsps olive oil, 1 tsp garlic, 1.5 cup onion.",
        "ingredients": "230 g broccoli, 3 tbsps yogurt, 1.4 cup kale, 60 g zucchini, 1.8 cup cucumber, 150 g rosemary, 2 tsps cumin, 2 pieces curry paste, 3 tbsps olive oil, 1 tsp garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 179,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 91,
            "sodium": 571,
            "carbohydrates": 48,
            "fiber": 15,
            "sugar": 15,
            "protein": 34
        }
    },
    "Japanese Pancakes Chickpeas With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 466,
            "protein": 36,
            "carbs": 23,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 110 g chickpeas, 1.2 cup toast, 150 g cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 60 g broccoli, 1 cup carrot, 130 g parsley and 3 tbsps olive oil, 1 tsp garlic, 1.9 cup onion.",
        "ingredients": "110 g chickpeas, 1.2 cup toast, 150 g cucumber, 60 g broccoli, 1 cup carrot, 130 g parsley, 2 tsps vinegar, 1 tsp chili flakes, 3 tbsps olive oil, 1 tsp garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 466,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 66,
            "sodium": 847,
            "carbohydrates": 23,
            "fiber": 13,
            "sugar": 7,
            "protein": 36
        }
    },
    "Indian Oats Sweet Potato With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 157,
            "protein": 42,
            "carbs": 5,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.6 cup sweet potato as base. Add 2 pieces tortilla, 150 g lettuce, 1.6 cup pea and cook until tender. Incorporate 170 g broccoli, 150 g cilantro, 1 tbsp curry paste and season with 2 tsps olive oil, 1 clove garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "0.6 cup sweet potato, 2 pieces tortilla, 150 g lettuce, 1.6 cup pea, 170 g broccoli, 150 g cilantro, 1 tbsp curry paste, 2 tsps sesame oil, 2 tsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 157,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 46,
            "sodium": 469,
            "carbohydrates": 5,
            "fiber": 8,
            "sugar": 7,
            "protein": 42
        }
    },
    "Chinese Waffles Halloumi With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 552,
            "protein": 3,
            "carbs": 60,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 170 g halloumi, 2 tbsps toast, 1.8 cup corn with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 180 g broccoli, 180 g pea, 0.6 cup thyme and 1 tsp olive oil, 2 cloves garlic, 0.8 cup onion.",
        "ingredients": "170 g halloumi, 2 tbsps toast, 1.8 cup corn, 180 g broccoli, 180 g pea, 0.6 cup thyme, 3 tbsps vinegar, 1 tbsp lime juice, 1 tsp olive oil, 2 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 552,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 105,
            "sodium": 453,
            "carbohydrates": 60,
            "fiber": 4,
            "sugar": 10,
            "protein": 3
        }
    },
    "Indian Scramble Zucchini With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 628,
            "protein": 35,
            "carbs": 43,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 piece tortilla, 140 g tomato, 1 tsp bell pepper until softened. Add beaten eggs and 1.8 cup zucchini if applicable, scramble until cooked. Season with 1 tbsp olive oil, 1 clove garlic, 1.3 cup onion and serve immediately.",
        "ingredients": "1.8 cup zucchini, 1 piece tortilla, 140 g tomato, 1 tsp bell pepper, 2 cup spinach, 1.5 cup basil, 1 tsp curry paste, 2 tsps cumin, 1 tbsp olive oil, 1 clove garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 628,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 17,
            "sodium": 420,
            "carbohydrates": 43,
            "fiber": 2,
            "sugar": 20,
            "protein": 35
        }
    },
    "Vietnamese Porridge Seitan With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 254,
            "protein": 36,
            "carbs": 6,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.5 cup seitan with water or broth until soft and creamy. Add 180 g congee, 90 g broccoli, 210 g zucchini and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 clove garlic, 1 tbsp onion and serve hot.",
        "ingredients": "1.5 cup seitan, 180 g congee, 90 g broccoli, 210 g zucchini, 1.9 cup pea, 190 g cilantro, 2 tsps lime juice, 1 tbsp vinegar, 1 tbsp olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 254,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 73,
            "sodium": 121,
            "carbohydrates": 6,
            "fiber": 7,
            "sugar": 14,
            "protein": 36
        }
    },
    "Japanese Yogurt Bowl Lentils With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 259,
            "protein": 29,
            "carbs": 67,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 160 g lentils, 1.5 cup congee, 1.2 cup pea with liquid until smooth. Top with 80 g cabbage, 80 g corn, 100 g rosemary and garnish with 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "160 g lentils, 1.5 cup congee, 1.2 cup pea, 80 g cabbage, 80 g corn, 100 g rosemary, 1 tsp cumin, 2 tbsps lime juice, 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 259,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 29,
            "sodium": 176,
            "carbohydrates": 67,
            "fiber": 12,
            "sugar": 6,
            "protein": 29
        }
    },
    "Korean Toast Cauliflower With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 250,
            "protein": 35,
            "carbs": 33,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 2 pieces cauliflower, 1 tsp yogurt, 2 tsps bell pepper and top with 1.8 cup corn, 1.6 cup tomato, 1 cup cilantro. Season with 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion and serve.",
        "ingredients": "2 pieces cauliflower, 1 tsp yogurt, 2 tsps bell pepper, 1.8 cup corn, 1.6 cup tomato, 1 cup cilantro, 2 tsps ginger, 2 tbsps sesame oil, 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 250,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 110,
            "sodium": 201,
            "carbohydrates": 33,
            "fiber": 7,
            "sugar": 11,
            "protein": 35
        }
    },
    "Korean Congee Lentils With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 447,
            "protein": 41,
            "carbs": 73,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 120 g lentils with water or broth until soft and creamy. Add 140 g oats, 160 g carrot, 170 g tomato and simmer until vegetables are tender. Season with 2 tsps olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "120 g lentils, 140 g oats, 160 g carrot, 170 g tomato, 1.1 cup broccoli, 140 g dill, 2 tsps vinegar, 2 tsps curry paste, 2 tsps olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 447,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 47,
            "sodium": 164,
            "carbohydrates": 73,
            "fiber": 9,
            "sugar": 13,
            "protein": 41
        }
    },
    "Indian Oats Tofu With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 353,
            "protein": 42,
            "carbs": 66,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.8 cup tofu as base. Add 1 tbsp yogurt, 1.9 cup tomato, 80 g zucchini and cook until tender. Incorporate 140 g cabbage, 1.2 cup parsley, 1 clove ginger and season with 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1.8 cup tofu, 1 tbsp yogurt, 1.9 cup tomato, 80 g zucchini, 140 g cabbage, 1.2 cup parsley, 1 clove ginger, 2 tsps vinegar, 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 353,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 62,
            "sodium": 78,
            "carbohydrates": 66,
            "fiber": 6,
            "sugar": 1,
            "protein": 42
        }
    },
    "Middle Eastern Omelette Cauliflower With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 352,
            "protein": 10,
            "carbs": 49,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.9 cup oats, 140 g lettuce, 90 g pea until softened. Add beaten eggs and 2 cup cauliflower if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 clove garlic, 0.6 cup onion and serve immediately.",
        "ingredients": "2 cup cauliflower, 1.9 cup oats, 140 g lettuce, 90 g pea, 0.6 cup corn, 0.8 cup parsley, 1 tbsp lemon juice, 2 tsps ginger, 1 tsp olive oil, 1 clove garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 352,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 46,
            "sodium": 715,
            "carbohydrates": 49,
            "fiber": 15,
            "sugar": 12,
            "protein": 10
        }
    },
    "Thai Yogurt Bowl Sweet Potato With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 593,
            "protein": 12,
            "carbs": 27,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.6 cup sweet potato, 2 cup oats, 1 cup tomato with liquid until smooth. Top with 110 g kale, 1.4 cup corn, 170 g mint and garnish with 2 tbsps olive oil, 2 tsps garlic, 0.9 cup onion. Serve chilled.",
        "ingredients": "1.6 cup sweet potato, 2 cup oats, 1 cup tomato, 110 g kale, 1.4 cup corn, 170 g mint, 1 tsp chili flakes, 1 tbsp vinegar, 2 tbsps olive oil, 2 tsps garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 593,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 79,
            "sodium": 363,
            "carbohydrates": 27,
            "fiber": 8,
            "sugar": 15,
            "protein": 12
        }
    },
    "Middle Eastern Congee Sweet Potato With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 556,
            "protein": 20,
            "carbs": 79,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.6 cup sweet potato with water or broth until soft and creamy. Add 2 pieces wrap, 1.3 cup corn, 90 g lettuce and simmer until vegetables are tender. Season with 2 tsps olive oil, 1 tsp garlic, 1 tbsp onion and serve hot.",
        "ingredients": "1.6 cup sweet potato, 2 pieces wrap, 1.3 cup corn, 90 g lettuce, 70 g kale, 1.3 cup basil, 3 tbsps sesame oil, 1 tsp paprika, 2 tsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 556,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 73,
            "sodium": 261,
            "carbohydrates": 79,
            "fiber": 6,
            "sugar": 2,
            "protein": 20
        }
    },
    "Mexican Pancakes Quinoa With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 502,
            "protein": 32,
            "carbs": 76,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 0.7 cup quinoa, 100 g congee, 170 g kale with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 160 g cabbage, 240 g zucchini, 170 g cilantro and 3 tbsps olive oil, 2 tsps garlic, 0.6 cup onion.",
        "ingredients": "0.7 cup quinoa, 100 g congee, 170 g kale, 160 g cabbage, 240 g zucchini, 170 g cilantro, 3 tbsps sesame oil, 1 tsp ginger, 3 tbsps olive oil, 2 tsps garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 502,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 99,
            "sodium": 872,
            "carbohydrates": 76,
            "fiber": 12,
            "sugar": 8,
            "protein": 32
        }
    },
    "Mexican Smoothie Bowl Mushrooms With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 438,
            "protein": 28,
            "carbs": 48,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.4 cup mushrooms, 2 pieces toast, 1.1 cup zucchini with liquid until smooth. Top with 0.6 cup lettuce, 0.8 cup corn, 1.7 cup basil and garnish with 2 tsps olive oil, 1 tsp garlic, 0.7 cup onion. Serve chilled.",
        "ingredients": "1.4 cup mushrooms, 2 pieces toast, 1.1 cup zucchini, 0.6 cup lettuce, 0.8 cup corn, 1.7 cup basil, 1 tsp turmeric, 1 tsp soy sauce, 2 tsps olive oil, 1 tsp garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 438,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 6,
            "sodium": 281,
            "carbohydrates": 48,
            "fiber": 11,
            "sugar": 22,
            "protein": 28
        }
    },
    "Moroccan Pancakes Tofu With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 263,
            "protein": 9,
            "carbs": 40,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 200 g tofu, 1 tbsp yogurt, 60 g spinach with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 240 g lettuce, 1 tsp bell pepper, 0.6 cup thyme and 1 tbsp olive oil, 1 clove garlic, 3 tbsps onion.",
        "ingredients": "200 g tofu, 1 tbsp yogurt, 60 g spinach, 240 g lettuce, 1 tsp bell pepper, 0.6 cup thyme, 2 tsps lemon juice, 2 tsps soy sauce, 1 tbsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 263,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 63,
            "sodium": 633,
            "carbohydrates": 40,
            "fiber": 5,
            "sugar": 10,
            "protein": 9
        }
    },
    "Greek Congee Lentils With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 555,
            "protein": 20,
            "carbs": 69,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.9 cup lentils with water or broth until soft and creamy. Add 1.4 cup oats, 1 cup spinach, 80 g cucumber and simmer until vegetables are tender. Season with 2 tsps olive oil, 3 cloves garlic, 1.7 cup onion and serve hot.",
        "ingredients": "1.9 cup lentils, 1.4 cup oats, 1 cup spinach, 80 g cucumber, 230 g kale, 0.7 cup cilantro, 1 tsp ginger, 1 tsp paprika, 2 tsps olive oil, 3 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 555,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 45,
            "sodium": 632,
            "carbohydrates": 69,
            "fiber": 1,
            "sugar": 14,
            "protein": 20
        }
    },
    "Spanish Waffles Seitan With Berries": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 617,
            "protein": 25,
            "carbs": 76,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 120 g seitan, 110 g congee, 150 g cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 90 g cabbage, 100 g zucchini, 120 g cilantro and 1 tbsp olive oil, 2 cloves garlic, 1.7 cup onion.",
        "ingredients": "120 g seitan, 110 g congee, 150 g cucumber, 90 g cabbage, 100 g zucchini, 120 g cilantro, 2 tsps lime juice, 1 tsp lemon juice, 1 tbsp olive oil, 2 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 617,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 118,
            "sodium": 650,
            "carbohydrates": 76,
            "fiber": 2,
            "sugar": 5,
            "protein": 25
        }
    },
    "Mexican Burrito Sweet Potato With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 421,
            "protein": 23,
            "carbs": 25,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.6 cup sweet potato, 1.7 cup oats, 230 g broccoli, 1 cup kale. Add 0.7 cup lettuce, 1.5 cup parsley, 2 tsps sesame oil and roll tightly. Serve with 1 tbsp olive oil, 1 tsp garlic, 1 cup onion on the side.",
        "ingredients": "1.6 cup sweet potato, 1.7 cup oats, 230 g broccoli, 1 cup kale, 0.7 cup lettuce, 1.5 cup parsley, 2 tsps sesame oil, 2 tsps curry paste, 1 tbsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 421,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 11,
            "sodium": 872,
            "carbohydrates": 25,
            "fiber": 6,
            "sugar": 22,
            "protein": 23
        }
    },
    "Mexican Pancakes Halloumi With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 626,
            "protein": 7,
            "carbs": 32,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 220 g halloumi, 3 tbsps yogurt, 90 g zucchini with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.6 cup kale, 130 g cucumber, 160 g parsley and 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion.",
        "ingredients": "220 g halloumi, 3 tbsps yogurt, 90 g zucchini, 1.6 cup kale, 130 g cucumber, 160 g parsley, 2 tsps cumin, 1 tsp lemon juice, 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 626,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 117,
            "sodium": 99,
            "carbohydrates": 32,
            "fiber": 10,
            "sugar": 20,
            "protein": 7
        }
    },
    "French Yogurt Bowl Seitan With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 460,
            "protein": 37,
            "carbs": 31,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 0.9 cup seitan, 1.3 cup oats, 210 g lettuce with liquid until smooth. Top with 1 tsp bell pepper, 80 g zucchini, 240 g basil and garnish with 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "0.9 cup seitan, 1.3 cup oats, 210 g lettuce, 1 tsp bell pepper, 80 g zucchini, 240 g basil, 1 tsp lemon juice, 2 tsps sesame oil, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 460,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 86,
            "sodium": 434,
            "carbohydrates": 31,
            "fiber": 12,
            "sugar": 6,
            "protein": 37
        }
    },
    "Thai Burrito Halloumi With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 550,
            "protein": 33,
            "carbs": 31,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.7 cup halloumi, 2 pieces wrap, 1.8 cup cucumber, 130 g mushroom. Add 1 tsp bell pepper, 200 g parsley, 1 tsp chili flakes and roll tightly. Serve with 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion on the side.",
        "ingredients": "1.7 cup halloumi, 2 pieces wrap, 1.8 cup cucumber, 130 g mushroom, 1 tsp bell pepper, 200 g parsley, 1 tsp chili flakes, 2 tbsps sesame oil, 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 550,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 116,
            "sodium": 472,
            "carbohydrates": 31,
            "fiber": 14,
            "sugar": 8,
            "protein": 33
        }
    },
    "Indian Yogurt Bowl Chickpeas With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 439,
            "protein": 14,
            "carbs": 30,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1 cup chickpeas, 200 g oats, 1.3 cup kale with liquid until smooth. Top with 90 g carrot, 1.9 cup zucchini, 70 g thyme and garnish with 2 tsps olive oil, 1 tsp garlic, 0.9 cup onion. Serve chilled.",
        "ingredients": "1 cup chickpeas, 200 g oats, 1.3 cup kale, 90 g carrot, 1.9 cup zucchini, 70 g thyme, 2 tsps cumin, 2 pieces curry paste, 2 tsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 439,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 85,
            "sodium": 317,
            "carbohydrates": 30,
            "fiber": 11,
            "sugar": 14,
            "protein": 14
        }
    },
    "American Frittata Paneer With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 634,
            "protein": 10,
            "carbs": 73,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece tortilla, 1.5 cup spinach, 1 tsp bell pepper in oil. Pour beaten eggs over vegetables, add 80 g paneer if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion.",
        "ingredients": "80 g paneer, 1 piece tortilla, 1.5 cup spinach, 1 tsp bell pepper, 90 g tomato, 0.7 cup rosemary, 1 tsp soy sauce, 1 tsp turmeric, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 634,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 43,
            "sodium": 276,
            "carbohydrates": 73,
            "fiber": 8,
            "sugar": 8,
            "protein": 10
        }
    },
    "Thai Frittata Halloumi With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 204,
            "protein": 40,
            "carbs": 70,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.8 cup congee, 180 g cabbage, 1 cup mushroom in oil. Pour beaten eggs over vegetables, add 1.5 cup halloumi if applicable. Cook until set, then finish under broiler. Season with 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion.",
        "ingredients": "1.5 cup halloumi, 1.8 cup congee, 180 g cabbage, 1 cup mushroom, 1 cup carrot, 1.6 cup dill, 3 tbsps vinegar, 1 piece curry paste, 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 204,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 117,
            "sodium": 298,
            "carbohydrates": 70,
            "fiber": 13,
            "sugar": 17,
            "protein": 40
        }
    },
    "American Scramble Chickpeas With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 269,
            "protein": 35,
            "carbs": 35,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.6 cup rice, 1 tsp bell pepper, 220 g zucchini until softened. Add beaten eggs and 0.9 cup chickpeas if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "0.9 cup chickpeas, 1.6 cup rice, 1 tsp bell pepper, 220 g zucchini, 0.9 cup broccoli, 100 g dill, 2 tsps chili flakes, 1 tsp soy sauce, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 269,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 21,
            "sodium": 760,
            "carbohydrates": 35,
            "fiber": 9,
            "sugar": 22,
            "protein": 35
        }
    },
    "Greek Waffles Chickpeas With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 498,
            "protein": 25,
            "carbs": 22,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.9 cup chickpeas, 1 piece toast, 0.6 cup carrot with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 150 g lettuce, 200 g zucchini, 1.7 cup thyme and 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion.",
        "ingredients": "1.9 cup chickpeas, 1 piece toast, 0.6 cup carrot, 150 g lettuce, 200 g zucchini, 1.7 cup thyme, 2 tsps cumin, 2 tbsps soy sauce, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 498,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 3,
            "sodium": 124,
            "carbohydrates": 22,
            "fiber": 6,
            "sugar": 22,
            "protein": 25
        }
    },
    "Thai Frittata Crab With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 556,
            "protein": 45,
            "carbs": 34,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 120 g rice, 0.6 cup kale, 140 g pea in oil. Pour beaten eggs over vegetables, add 110 g crab if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 clove garlic, 3 tbsps onion.",
        "ingredients": "110 g crab, 120 g rice, 0.6 cup kale, 140 g pea, 1.4 cup broccoli, 1.8 cup rosemary, 3 cloves ginger, 1 tbsp lime juice, 1 tsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 556,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 85,
            "sodium": 451,
            "carbohydrates": 34,
            "fiber": 5,
            "sugar": 6,
            "protein": 45
        }
    },
    "American Waffles Crab With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 650,
            "protein": 41,
            "carbs": 38,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 2 cup crab, 2 pieces wrap, 0.6 cup cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 120 g tomato, 190 g pea, 0.5 cup cilantro and 1 tbsp olive oil, 1 clove garlic, 1.7 cup onion.",
        "ingredients": "2 cup crab, 2 pieces wrap, 0.6 cup cucumber, 120 g tomato, 190 g pea, 0.5 cup cilantro, 2 tsps cumin, 1 tbsp vinegar, 1 tbsp olive oil, 1 clove garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 650,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 69,
            "sodium": 290,
            "carbohydrates": 38,
            "fiber": 3,
            "sugar": 2,
            "protein": 41
        }
    },
    "Japanese Toast Shrimp With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 179,
            "protein": 29,
            "carbs": 12,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.7 cup shrimp, 1 tbsp yogurt, 1.2 cup kale and top with 1.8 cup cucumber, 160 g carrot, 1.3 cup mint. Season with 1 tsp olive oil, 1 clove garlic, 0.5 cup onion and serve.",
        "ingredients": "0.7 cup shrimp, 1 tbsp yogurt, 1.2 cup kale, 1.8 cup cucumber, 160 g carrot, 1.3 cup mint, 1 tsp sesame oil, 1 tsp vinegar, 1 tsp olive oil, 1 clove garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 179,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 12,
            "sodium": 469,
            "carbohydrates": 12,
            "fiber": 2,
            "sugar": 7,
            "protein": 29
        }
    },
    "Korean Yogurt Bowl Beef With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 507,
            "protein": 21,
            "carbs": 27,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 120 g beef, 80 g rice, 90 g zucchini with liquid until smooth. Top with 1 tsp bell pepper, 60 g carrot, 180 g basil and garnish with 2 tsps olive oil, 3 cloves garlic, 1.8 cup onion. Serve chilled.",
        "ingredients": "120 g beef, 80 g rice, 90 g zucchini, 1 tsp bell pepper, 60 g carrot, 180 g basil, 1 tsp cumin, 2 tbsps vinegar, 2 tsps olive oil, 3 cloves garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 507,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 19,
            "sodium": 399,
            "carbohydrates": 27,
            "fiber": 11,
            "sugar": 11,
            "protein": 21
        }
    },
    "Turkish Oats Shrimp With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 578,
            "protein": 30,
            "carbs": 25,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.8 cup shrimp as base. Add 120 g toast, 0.9 cup carrot, 2 tsps bell pepper and cook until tender. Incorporate 1.2 cup kale, 0.7 cup dill, 1 tsp turmeric and season with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.8 cup shrimp, 120 g toast, 0.9 cup carrot, 2 tsps bell pepper, 1.2 cup kale, 0.7 cup dill, 1 tsp turmeric, 3 tbsps vinegar, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 578,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 85,
            "sodium": 828,
            "carbohydrates": 25,
            "fiber": 9,
            "sugar": 14,
            "protein": 30
        }
    },
    "Moroccan Omelette Pork With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 443,
            "protein": 31,
            "carbs": 68,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 pieces tortilla, 100 g mushroom, 170 g tomato until softened. Add beaten eggs and 1 cup pork if applicable, scramble until cooked. Season with 1 tsp olive oil, 2 cloves garlic, 1.4 cup onion and serve immediately.",
        "ingredients": "1 cup pork, 2 pieces tortilla, 100 g mushroom, 170 g tomato, 0.7 cup corn, 1.8 cup basil, 3 tbsps lime juice, 1 tsp turmeric, 1 tsp olive oil, 2 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 443,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 71,
            "sodium": 421,
            "carbohydrates": 68,
            "fiber": 8,
            "sugar": 4,
            "protein": 31
        }
    },
    "Spanish Pancakes Chicken With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 534,
            "protein": 18,
            "carbs": 24,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.5 cup chicken, 1 piece wrap, 190 g cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 2 cup spinach, 1 tsp bell pepper, 1.7 cup cilantro and 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion.",
        "ingredients": "1.5 cup chicken, 1 piece wrap, 190 g cucumber, 2 cup spinach, 1 tsp bell pepper, 1.7 cup cilantro, 2 tbsps sesame oil, 2 tbsps lemon juice, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 534,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 45,
            "sodium": 66,
            "carbohydrates": 24,
            "fiber": 5,
            "sugar": 4,
            "protein": 18
        }
    },
    "Vietnamese Oats Salmon With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 309,
            "protein": 32,
            "carbs": 63,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g salmon as base. Add 1 piece tortilla, 70 g corn, 210 g cucumber and cook until tender. Incorporate 140 g spinach, 0.8 cup dill, 1 tbsp sesame oil and season with 2 tbsps olive oil, 1 clove garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "100 g salmon, 1 piece tortilla, 70 g corn, 210 g cucumber, 140 g spinach, 0.8 cup dill, 1 tbsp sesame oil, 2 tbsps lime juice, 2 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 309,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 65,
            "sodium": 879,
            "carbohydrates": 63,
            "fiber": 11,
            "sugar": 5,
            "protein": 32
        }
    },
    "Thai Omelette Turkey With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 431,
            "protein": 23,
            "carbs": 30,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.6 cup oats, 120 g lettuce, 230 g carrot until softened. Add beaten eggs and 1.1 cup turkey if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "1.1 cup turkey, 1.6 cup oats, 120 g lettuce, 230 g carrot, 140 g cabbage, 90 g thyme, 2 tsps paprika, 1 tbsp soy sauce, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 431,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 56,
            "sodium": 244,
            "carbohydrates": 30,
            "fiber": 10,
            "sugar": 6,
            "protein": 23
        }
    },
    "French Yogurt Bowl Pork With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 344,
            "protein": 31,
            "carbs": 11,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.4 cup pork, 1 piece tortilla, 0.9 cup pea with liquid until smooth. Top with 210 g tomato, 180 g lettuce, 100 g parsley and garnish with 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "1.4 cup pork, 1 piece tortilla, 0.9 cup pea, 210 g tomato, 180 g lettuce, 100 g parsley, 1 tsp ginger, 2 tsps sesame oil, 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 344,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 7,
            "sodium": 425,
            "carbohydrates": 11,
            "fiber": 15,
            "sugar": 21,
            "protein": 31
        }
    },
    "Greek Congee Crab With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 327,
            "protein": 35,
            "carbs": 80,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.5 cup crab with water or broth until soft and creamy. Add 2 pieces wrap, 1.6 cup lettuce, 180 g cabbage and simmer until vegetables are tender. Season with 1 tbsp olive oil, 2 cloves garlic, 3 tbsps onion and serve hot.",
        "ingredients": "1.5 cup crab, 2 pieces wrap, 1.6 cup lettuce, 180 g cabbage, 2 tsps bell pepper, 100 g rosemary, 1 tsp chili flakes, 1 tbsp vinegar, 1 tbsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 327,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 100,
            "sodium": 140,
            "carbohydrates": 80,
            "fiber": 11,
            "sugar": 13,
            "protein": 35
        }
    },
    "Greek Oats Tuna With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 593,
            "protein": 5,
            "carbs": 61,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.5 cup tuna as base. Add 2 pieces toast, 0.5 cup lettuce, 100 g carrot and cook until tender. Incorporate 1.9 cup pea, 240 g mint, 1 tsp turmeric and season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.5 cup tuna, 2 pieces toast, 0.5 cup lettuce, 100 g carrot, 1.9 cup pea, 240 g mint, 1 tsp turmeric, 2 tsps chili flakes, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 593,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 15,
            "sodium": 69,
            "carbohydrates": 61,
            "fiber": 15,
            "sugar": 14,
            "protein": 5
        }
    },
    "Middle Eastern Oats Chicken With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 181,
            "protein": 34,
            "carbs": 77,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.6 cup chicken as base. Add 2 tbsps yogurt, 1.5 cup spinach, 0.9 cup corn and cook until tender. Incorporate 1.1 cup lettuce, 1.4 cup basil, 1 tsp turmeric and season with 2 tsps olive oil, 1 tsp garlic, 2 cup onion. Serve hot.",
        "ingredients": "0.6 cup chicken, 2 tbsps yogurt, 1.5 cup spinach, 0.9 cup corn, 1.1 cup lettuce, 1.4 cup basil, 1 tsp turmeric, 2 tsps ginger, 2 tsps olive oil, 1 tsp garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 181,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 82,
            "sodium": 801,
            "carbohydrates": 77,
            "fiber": 9,
            "sugar": 13,
            "protein": 34
        }
    },
    "Moroccan Toast Pork With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 173,
            "protein": 44,
            "carbs": 70,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.1 cup pork, 1 piece wrap, 70 g tomato and top with 80 g spinach, 1.8 cup broccoli, 1.6 cup cilantro. Season with 2 tsps olive oil, 1 tsp garlic, 1.8 cup onion and serve.",
        "ingredients": "1.1 cup pork, 1 piece wrap, 70 g tomato, 80 g spinach, 1.8 cup broccoli, 1.6 cup cilantro, 2 tsps lime juice, 2 tsps ginger, 2 tsps olive oil, 1 tsp garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 173,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 12,
            "sodium": 68,
            "carbohydrates": 70,
            "fiber": 8,
            "sugar": 14,
            "protein": 44
        }
    },
    "Greek Waffles Pork With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 165,
            "protein": 41,
            "carbs": 33,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.2 cup pork, 70 g congee, 2 tsps bell pepper with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.6 cup zucchini, 230 g cucumber, 70 g basil and 2 tbsps olive oil, 2 tsps garlic, 1.4 cup onion.",
        "ingredients": "1.2 cup pork, 70 g congee, 2 tsps bell pepper, 1.6 cup zucchini, 230 g cucumber, 70 g basil, 1 tsp turmeric, 2 tsps curry paste, 2 tbsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 165,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 27,
            "sodium": 792,
            "carbohydrates": 33,
            "fiber": 2,
            "sugar": 15,
            "protein": 41
        }
    },
    "Mexican Yogurt Bowl Lamb With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 305,
            "protein": 32,
            "carbs": 70,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 120 g lamb, 2 tbsps yogurt, 2 cup lettuce with liquid until smooth. Top with 1 cup mushroom, 1.4 cup kale, 2 cup rosemary and garnish with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "120 g lamb, 2 tbsps yogurt, 2 cup lettuce, 1 cup mushroom, 1.4 cup kale, 2 cup rosemary, 1 tsp cumin, 2 tbsps soy sauce, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 305,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 21,
            "sodium": 449,
            "carbohydrates": 70,
            "fiber": 2,
            "sugar": 8,
            "protein": 32
        }
    },
    "Vietnamese Scramble Duck With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 288,
            "protein": 13,
            "carbs": 39,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tbsps toast, 120 g lettuce, 200 g cucumber until softened. Add beaten eggs and 1.3 cup duck if applicable, scramble until cooked. Season with 2 tsps olive oil, 1 clove garlic, 1.6 cup onion and serve immediately.",
        "ingredients": "1.3 cup duck, 2 tbsps toast, 120 g lettuce, 200 g cucumber, 0.9 cup carrot, 2 cup cilantro, 2 tsps vinegar, 1 clove ginger, 2 tsps olive oil, 1 clove garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 288,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 98,
            "sodium": 594,
            "carbohydrates": 39,
            "fiber": 15,
            "sugar": 7,
            "protein": 13
        }
    },
    "Italian Oats Cod With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 640,
            "protein": 20,
            "carbs": 8,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g cod as base. Add 80 g congee, 210 g cucumber, 0.9 cup carrot and cook until tender. Incorporate 1.8 cup lettuce, 100 g dill, 1 tsp cumin and season with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "110 g cod, 80 g congee, 210 g cucumber, 0.9 cup carrot, 1.8 cup lettuce, 100 g dill, 1 tsp cumin, 2 tsps paprika, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 640,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 50,
            "sodium": 583,
            "carbohydrates": 8,
            "fiber": 5,
            "sugar": 3,
            "protein": 20
        }
    },
    "Turkish Yogurt Bowl Tuna With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 518,
            "protein": 39,
            "carbs": 25,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1 cup tuna, 2 pieces wrap, 1.1 cup mushroom with liquid until smooth. Top with 150 g kale, 110 g lettuce, 70 g mint and garnish with 1 tbsp olive oil, 3 cloves garlic, 1.3 cup onion. Serve chilled.",
        "ingredients": "1 cup tuna, 2 pieces wrap, 1.1 cup mushroom, 150 g kale, 110 g lettuce, 70 g mint, 1 tsp ginger, 2 tsps chili flakes, 1 tbsp olive oil, 3 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 518,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 45,
            "sodium": 709,
            "carbohydrates": 25,
            "fiber": 8,
            "sugar": 22,
            "protein": 39
        }
    },
    "Middle Eastern Toast Chicken With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 423,
            "protein": 29,
            "carbs": 17,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 230 g chicken, 1.5 cup oats, 180 g mushroom and top with 210 g zucchini, 1.9 cup pea, 160 g cilantro. Season with 1 tbsp olive oil, 2 tsps garlic, 0.7 cup onion and serve.",
        "ingredients": "230 g chicken, 1.5 cup oats, 180 g mushroom, 210 g zucchini, 1.9 cup pea, 160 g cilantro, 1 tsp cumin, 2 tsps turmeric, 1 tbsp olive oil, 2 tsps garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 423,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 12,
            "sodium": 571,
            "carbohydrates": 17,
            "fiber": 14,
            "sugar": 3,
            "protein": 29
        }
    },
    "American Frittata Tuna With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 427,
            "protein": 43,
            "carbs": 16,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.5 cup oats, 80 g carrot, 70 g spinach in oil. Pour beaten eggs over vegetables, add 210 g tuna if applicable. Cook until set, then finish under broiler. Season with 3 tbsps olive oil, 2 tsps garlic, 1.2 cup onion.",
        "ingredients": "210 g tuna, 0.5 cup oats, 80 g carrot, 70 g spinach, 0.9 cup cucumber, 200 g mint, 2 tsps chili flakes, 1 tsp lime juice, 3 tbsps olive oil, 2 tsps garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 427,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 55,
            "sodium": 546,
            "carbohydrates": 16,
            "fiber": 9,
            "sugar": 20,
            "protein": 43
        }
    },
    "American Omelette Cod With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 264,
            "protein": 20,
            "carbs": 64,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 120 g oats, 1 tsp bell pepper, 0.7 cup corn until softened. Add beaten eggs and 0.8 cup cod if applicable, scramble until cooked. Season with 1 tbsp olive oil, 1 tsp garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "0.8 cup cod, 120 g oats, 1 tsp bell pepper, 0.7 cup corn, 180 g spinach, 1.1 cup basil, 2 tsps chili flakes, 1 tsp paprika, 1 tbsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 264,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 78,
            "sodium": 439,
            "carbohydrates": 64,
            "fiber": 10,
            "sugar": 13,
            "protein": 20
        }
    },
    "Mexican Scramble Cod With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 505,
            "protein": 8,
            "carbs": 16,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.6 cup congee, 200 g spinach, 2 tsps bell pepper until softened. Add beaten eggs and 160 g cod if applicable, scramble until cooked. Season with 3 tbsps olive oil, 3 cloves garlic, 1.3 cup onion and serve immediately.",
        "ingredients": "160 g cod, 1.6 cup congee, 200 g spinach, 2 tsps bell pepper, 160 g carrot, 1.8 cup dill, 2 tbsps lime juice, 2 tsps vinegar, 3 tbsps olive oil, 3 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 505,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 25,
            "sodium": 646,
            "carbohydrates": 16,
            "fiber": 9,
            "sugar": 3,
            "protein": 8
        }
    },
    "Japanese Toast Cod With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 537,
            "protein": 37,
            "carbs": 82,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 90 g cod, 140 g congee, 170 g pea and top with 1.3 cup kale, 230 g carrot, 240 g rosemary. Season with 2 tsps olive oil, 1 tsp garlic, 1.2 cup onion and serve.",
        "ingredients": "90 g cod, 140 g congee, 170 g pea, 1.3 cup kale, 230 g carrot, 240 g rosemary, 2 tsps chili flakes, 1 tsp turmeric, 2 tsps olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 537,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 25,
            "sodium": 717,
            "carbohydrates": 82,
            "fiber": 4,
            "sugar": 11,
            "protein": 37
        }
    },
    "American Burrito Crab With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 181,
            "protein": 41,
            "carbs": 60,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 90 g crab, 2 pieces wrap, 240 g zucchini, 140 g spinach. Add 200 g tomato, 0.9 cup dill, 2 tsps cumin and roll tightly. Serve with 2 tbsps olive oil, 1 clove garlic, 2 tbsps onion on the side.",
        "ingredients": "90 g crab, 2 pieces wrap, 240 g zucchini, 140 g spinach, 200 g tomato, 0.9 cup dill, 2 tsps cumin, 1 tbsp vinegar, 2 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 181,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 60,
            "sodium": 145,
            "carbohydrates": 60,
            "fiber": 5,
            "sugar": 16,
            "protein": 41
        }
    },
    "Vietnamese Omelette Lamb With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 428,
            "protein": 15,
            "carbs": 5,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 pieces wrap, 140 g cucumber, 1 tsp bell pepper until softened. Add beaten eggs and 200 g lamb if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 tsp garlic, 1.6 cup onion and serve immediately.",
        "ingredients": "200 g lamb, 2 pieces wrap, 140 g cucumber, 1 tsp bell pepper, 70 g kale, 0.5 cup cilantro, 1.1 cup curry paste, 2 tbsps soy sauce, 3 tbsps olive oil, 1 tsp garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 428,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 90,
            "sodium": 638,
            "carbohydrates": 5,
            "fiber": 13,
            "sugar": 18,
            "protein": 15
        }
    },
    "French Burrito Tuna With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 371,
            "protein": 41,
            "carbs": 6,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1 cup tuna, 2 tbsps toast, 200 g cabbage, 170 g tomato. Add 1.8 cup carrot, 1.5 cup rosemary, 2 tsps paprika and roll tightly. Serve with 1 tbsp olive oil, 2 cloves garlic, 0.6 cup onion on the side.",
        "ingredients": "1 cup tuna, 2 tbsps toast, 200 g cabbage, 170 g tomato, 1.8 cup carrot, 1.5 cup rosemary, 2 tsps paprika, 1 tsp lemon juice, 1 tbsp olive oil, 2 cloves garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 371,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 63,
            "sodium": 333,
            "carbohydrates": 6,
            "fiber": 6,
            "sugar": 1,
            "protein": 41
        }
    },
    "French Omelette Duck With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 588,
            "protein": 8,
            "carbs": 62,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 tbsp yogurt, 1.6 cup pea, 80 g carrot until softened. Add beaten eggs and 1.6 cup duck if applicable, scramble until cooked. Season with 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "1.6 cup duck, 1 tbsp yogurt, 1.6 cup pea, 80 g carrot, 60 g tomato, 1 cup dill, 1 tsp ginger, 140 g curry paste, 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 588,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 55,
            "sodium": 310,
            "carbohydrates": 62,
            "fiber": 1,
            "sugar": 5,
            "protein": 8
        }
    },
    "Spanish Scramble Salmon With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 460,
            "protein": 10,
            "carbs": 9,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tbsps yogurt, 1 cup spinach, 1.9 cup cucumber until softened. Add beaten eggs and 0.9 cup salmon if applicable, scramble until cooked. Season with 3 tbsps olive oil, 2 tsps garlic, 0.8 cup onion and serve immediately.",
        "ingredients": "0.9 cup salmon, 2 tbsps yogurt, 1 cup spinach, 1.9 cup cucumber, 180 g pea, 80 g rosemary, 1 tsp lime juice, 2 tsps cumin, 3 tbsps olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 460,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 80,
            "sodium": 364,
            "carbohydrates": 9,
            "fiber": 9,
            "sugar": 2,
            "protein": 10
        }
    },
    "Thai Congee Chicken With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 453,
            "protein": 5,
            "carbs": 16,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 190 g chicken with water or broth until soft and creamy. Add 1 piece wrap, 150 g broccoli, 130 g tomato and simmer until vegetables are tender. Season with 2 tsps olive oil, 3 cloves garlic, 2 cup onion and serve hot.",
        "ingredients": "190 g chicken, 1 piece wrap, 150 g broccoli, 130 g tomato, 0.5 cup pea, 200 g thyme, 1 tsp turmeric, 1 tsp chili flakes, 2 tsps olive oil, 3 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 453,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 71,
            "sodium": 545,
            "carbohydrates": 16,
            "fiber": 10,
            "sugar": 16,
            "protein": 5
        }
    },
    "Spanish Pancakes Pork With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 335,
            "protein": 24,
            "carbs": 80,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 140 g pork, 2 pieces wrap, 1 cup mushroom with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 0.9 cup corn, 1.1 cup lettuce, 1.9 cup mint and 3 tbsps olive oil, 1 tsp garlic, 0.7 cup onion.",
        "ingredients": "140 g pork, 2 pieces wrap, 1 cup mushroom, 0.9 cup corn, 1.1 cup lettuce, 1.9 cup mint, 2 tsps paprika, 2 tsps chili flakes, 3 tbsps olive oil, 1 tsp garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 335,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 73,
            "sodium": 222,
            "carbohydrates": 80,
            "fiber": 2,
            "sugar": 20,
            "protein": 24
        }
    },
    "Moroccan Frittata Lamb With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 553,
            "protein": 22,
            "carbs": 10,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 tsp yogurt, 1.1 cup corn, 1 tsp bell pepper in oil. Pour beaten eggs over vegetables, add 1.2 cup lamb if applicable. Cook until set, then finish under broiler. Season with 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion.",
        "ingredients": "1.2 cup lamb, 1 tsp yogurt, 1.1 cup corn, 1 tsp bell pepper, 230 g pea, 190 g basil, 1 tsp lemon juice, 2 tsps turmeric, 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 553,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 10,
            "sodium": 409,
            "carbohydrates": 10,
            "fiber": 4,
            "sugar": 10,
            "protein": 22
        }
    },
    "Chinese Omelette Salmon With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 463,
            "protein": 17,
            "carbs": 69,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 tbsp yogurt, 2 cup kale, 120 g lettuce until softened. Add beaten eggs and 1.8 cup salmon if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 clove garlic, 1 cup onion and serve immediately.",
        "ingredients": "1.8 cup salmon, 1 tbsp yogurt, 2 cup kale, 120 g lettuce, 0.7 cup mushroom, 0.9 cup parsley, 1 tsp turmeric, 1 tsp soy sauce, 3 tbsps olive oil, 1 clove garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 463,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 117,
            "sodium": 346,
            "carbohydrates": 69,
            "fiber": 4,
            "sugar": 22,
            "protein": 17
        }
    },
    "Thai Frittata Pork With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 446,
            "protein": 39,
            "carbs": 58,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece toast, 1 tsp bell pepper, 220 g kale in oil. Pour beaten eggs over vegetables, add 130 g pork if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion.",
        "ingredients": "130 g pork, 1 piece toast, 1 tsp bell pepper, 220 g kale, 1.4 cup spinach, 110 g mint, 3 tbsps lime juice, 1 tsp ginger, 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 446,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 97,
            "sodium": 493,
            "carbohydrates": 58,
            "fiber": 6,
            "sugar": 10,
            "protein": 39
        }
    },
    "French Waffles Tuna With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 339,
            "protein": 38,
            "carbs": 18,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 0.7 cup tuna, 210 g congee, 1.6 cup tomato with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 2 tsps bell pepper, 1.5 cup pea, 90 g thyme and 2 tbsps olive oil, 1 clove garlic, 1 tbsp onion.",
        "ingredients": "0.7 cup tuna, 210 g congee, 1.6 cup tomato, 2 tsps bell pepper, 1.5 cup pea, 90 g thyme, 1 tsp paprika, 2 tsps chili flakes, 2 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 339,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 48,
            "sodium": 366,
            "carbohydrates": 18,
            "fiber": 5,
            "sugar": 3,
            "protein": 38
        }
    },
    "Vietnamese Frittata Crab With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 231,
            "protein": 22,
            "carbs": 14,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 tbsp yogurt, 240 g pea, 0.5 cup zucchini in oil. Pour beaten eggs over vegetables, add 120 g crab if applicable. Cook until set, then finish under broiler. Season with 2 tbsps olive oil, 1 tsp garlic, 0.8 cup onion.",
        "ingredients": "120 g crab, 1 tbsp yogurt, 240 g pea, 0.5 cup zucchini, 240 g kale, 1.1 cup cilantro, 2 tsps lemon juice, 1 tsp ginger, 2 tbsps olive oil, 1 tsp garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 231,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 53,
            "sodium": 686,
            "carbohydrates": 14,
            "fiber": 7,
            "sugar": 21,
            "protein": 22
        }
    },
    "Italian Scramble Pork With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 511,
            "protein": 18,
            "carbs": 58,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 tbsp toast, 120 g spinach, 1 tsp bell pepper until softened. Add beaten eggs and 1.6 cup pork if applicable, scramble until cooked. Season with 1 tsp olive oil, 2 tsps garlic, 1.5 cup onion and serve immediately.",
        "ingredients": "1.6 cup pork, 1 tbsp toast, 120 g spinach, 1 tsp bell pepper, 1.4 cup carrot, 180 g basil, 2 tsps turmeric, 2 tsps paprika, 1 tsp olive oil, 2 tsps garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 511,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 57,
            "sodium": 331,
            "carbohydrates": 58,
            "fiber": 14,
            "sugar": 12,
            "protein": 18
        }
    },
    "French Scramble Lamb With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 163,
            "protein": 25,
            "carbs": 29,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tsps yogurt, 0.5 cup mushroom, 0.5 cup corn until softened. Add beaten eggs and 170 g lamb if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "170 g lamb, 2 tsps yogurt, 0.5 cup mushroom, 0.5 cup corn, 1.1 cup broccoli, 1.2 cup thyme, 2 tsps ginger, 2 tsps curry paste, 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 163,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 18,
            "sodium": 213,
            "carbohydrates": 29,
            "fiber": 10,
            "sugar": 17,
            "protein": 25
        }
    },
    "Turkish Omelette Shrimp With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 583,
            "protein": 12,
            "carbs": 25,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 140 g oats, 1.4 cup tomato, 170 g corn until softened. Add beaten eggs and 1.6 cup shrimp if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 clove garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "1.6 cup shrimp, 140 g oats, 1.4 cup tomato, 170 g corn, 2 tsps bell pepper, 120 g thyme, 2 tsps cumin, 2 tsps paprika, 1 tsp olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 583,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 101,
            "sodium": 452,
            "carbohydrates": 25,
            "fiber": 4,
            "sugar": 19,
            "protein": 12
        }
    },
    "Italian Congee Turkey With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 506,
            "protein": 29,
            "carbs": 50,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.1 cup turkey with water or broth until soft and creamy. Add 1.3 cup oats, 90 g pea, 170 g corn and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 cloves garlic, 1.9 cup onion and serve hot.",
        "ingredients": "1.1 cup turkey, 1.3 cup oats, 90 g pea, 170 g corn, 120 g zucchini, 1.2 cup cilantro, 3 tbsps vinegar, 3 tbsps lime juice, 2 tsps olive oil, 2 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 506,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 14,
            "sodium": 650,
            "carbohydrates": 50,
            "fiber": 8,
            "sugar": 14,
            "protein": 29
        }
    },
    "Indian Oats Beef With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 526,
            "protein": 8,
            "carbs": 39,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 140 g beef as base. Add 2 pieces wrap, 1 cup pea, 60 g cabbage and cook until tender. Incorporate 230 g tomato, 0.9 cup thyme, 2 tsps lemon juice and season with 1 tsp olive oil, 2 tsps garlic, 1.2 cup onion. Serve hot.",
        "ingredients": "140 g beef, 2 pieces wrap, 1 cup pea, 60 g cabbage, 230 g tomato, 0.9 cup thyme, 2 tsps lemon juice, 2 tbsps sesame oil, 1 tsp olive oil, 2 tsps garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 526,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 46,
            "sodium": 210,
            "carbohydrates": 39,
            "fiber": 10,
            "sugar": 19,
            "protein": 8
        }
    },
    "French Scramble Cod With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 204,
            "protein": 29,
            "carbs": 38,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 0.5 cup congee, 1.4 cup broccoli, 1.3 cup tomato until softened. Add beaten eggs and 1.3 cup cod if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "1.3 cup cod, 0.5 cup congee, 1.4 cup broccoli, 1.3 cup tomato, 240 g pea, 120 g thyme, 2 tsps vinegar, 2 tsps lime juice, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 204,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 79,
            "sodium": 164,
            "carbohydrates": 38,
            "fiber": 1,
            "sugar": 16,
            "protein": 29
        }
    },
    "Moroccan Toast Shrimp With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 180,
            "protein": 37,
            "carbs": 53,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 230 g shrimp, 2 tbsps toast, 0.9 cup pea and top with 130 g kale, 0.5 cup spinach, 1.3 cup thyme. Season with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion and serve.",
        "ingredients": "230 g shrimp, 2 tbsps toast, 0.9 cup pea, 130 g kale, 0.5 cup spinach, 1.3 cup thyme, 2 tsps chili flakes, 3 tbsps vinegar, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 180,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 26,
            "sodium": 536,
            "carbohydrates": 53,
            "fiber": 5,
            "sugar": 10,
            "protein": 37
        }
    },
    "Moroccan Smoothie Bowl Lamb With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 387,
            "protein": 40,
            "carbs": 70,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.3 cup lamb, 1 piece tortilla, 1.1 cup corn with liquid until smooth. Top with 130 g pea, 160 g cabbage, 1.4 cup rosemary and garnish with 3 tbsps olive oil, 3 cloves garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "1.3 cup lamb, 1 piece tortilla, 1.1 cup corn, 130 g pea, 160 g cabbage, 1.4 cup rosemary, 2 tsps paprika, 1 tsp cumin, 3 tbsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 387,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 92,
            "sodium": 204,
            "carbohydrates": 70,
            "fiber": 12,
            "sugar": 19,
            "protein": 40
        }
    },
    "Middle Eastern Oats Tuna With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 178,
            "protein": 25,
            "carbs": 31,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.9 cup tuna as base. Add 1.3 cup rice, 90 g kale, 1.6 cup mushroom and cook until tender. Incorporate 0.5 cup tomato, 150 g rosemary, 1 tsp vinegar and season with 1 tbsp olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.9 cup tuna, 1.3 cup rice, 90 g kale, 1.6 cup mushroom, 0.5 cup tomato, 150 g rosemary, 1 tsp vinegar, 1.6 cup curry paste, 1 tbsp olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 178,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 35,
            "sodium": 369,
            "carbohydrates": 31,
            "fiber": 11,
            "sugar": 5,
            "protein": 25
        }
    },
    "Vietnamese Smoothie Bowl Pork With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 627,
            "protein": 24,
            "carbs": 82,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.7 cup pork, 1 piece toast, 2 tsps bell pepper with liquid until smooth. Top with 150 g cabbage, 90 g carrot, 0.7 cup basil and garnish with 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "1.7 cup pork, 1 piece toast, 2 tsps bell pepper, 150 g cabbage, 90 g carrot, 0.7 cup basil, 1 tsp turmeric, 1 tbsp soy sauce, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 627,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 101,
            "sodium": 677,
            "carbohydrates": 82,
            "fiber": 12,
            "sugar": 8,
            "protein": 24
        }
    },
    "Chinese Oats Chicken With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 350,
            "protein": 9,
            "carbs": 63,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.2 cup chicken as base. Add 160 g toast, 200 g pea, 110 g corn and cook until tender. Incorporate 1.3 cup cabbage, 160 g basil, 1 tbsp lime juice and season with 3 tbsps olive oil, 1 clove garlic, 1.8 cup onion. Serve hot.",
        "ingredients": "1.2 cup chicken, 160 g toast, 200 g pea, 110 g corn, 1.3 cup cabbage, 160 g basil, 1 tbsp lime juice, 3 tbsps lemon juice, 3 tbsps olive oil, 1 clove garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 350,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 10,
            "sodium": 660,
            "carbohydrates": 63,
            "fiber": 10,
            "sugar": 18,
            "protein": 9
        }
    },
    "Mexican Pancakes Duck With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 307,
            "protein": 40,
            "carbs": 54,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 150 g duck, 160 g rice, 0.8 cup carrot with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 140 g pea, 100 g lettuce, 150 g basil and 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion.",
        "ingredients": "150 g duck, 160 g rice, 0.8 cup carrot, 140 g pea, 100 g lettuce, 150 g basil, 2 tsps vinegar, 3 cloves ginger, 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 307,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 93,
            "sodium": 674,
            "carbohydrates": 54,
            "fiber": 1,
            "sugar": 20,
            "protein": 40
        }
    },
    "Thai Oats Cod With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 159,
            "protein": 36,
            "carbs": 65,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 230 g cod as base. Add 1.5 cup oats, 1.9 cup cabbage, 190 g corn and cook until tender. Incorporate 190 g pea, 80 g parsley, 1 tsp cumin and season with 1 tsp olive oil, 2 tsps garlic, 1.9 cup onion. Serve hot.",
        "ingredients": "230 g cod, 1.5 cup oats, 1.9 cup cabbage, 190 g corn, 190 g pea, 80 g parsley, 1 tsp cumin, 2 tsps lime juice, 1 tsp olive oil, 2 tsps garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 159,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 12,
            "sodium": 472,
            "carbohydrates": 65,
            "fiber": 13,
            "sugar": 21,
            "protein": 36
        }
    },
    "Japanese Pancakes Shrimp With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 357,
            "protein": 40,
            "carbs": 37,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1 cup shrimp, 1 piece wrap, 150 g cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.8 cup lettuce, 1 cup tomato, 1.5 cup basil and 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion.",
        "ingredients": "1 cup shrimp, 1 piece wrap, 150 g cucumber, 1.8 cup lettuce, 1 cup tomato, 1.5 cup basil, 2 tsps chili flakes, 1 tsp sesame oil, 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 357,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 88,
            "sodium": 72,
            "carbohydrates": 37,
            "fiber": 4,
            "sugar": 22,
            "protein": 40
        }
    },
    "Moroccan Congee Salmon With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 259,
            "protein": 18,
            "carbs": 9,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 80 g salmon with water or broth until soft and creamy. Add 2 pieces wrap, 2 cup cabbage, 1.4 cup mushroom and simmer until vegetables are tender. Season with 1 tsp olive oil, 2 tsps garlic, 0.6 cup onion and serve hot.",
        "ingredients": "80 g salmon, 2 pieces wrap, 2 cup cabbage, 1.4 cup mushroom, 160 g broccoli, 180 g mint, 1 tsp sesame oil, 2 tsps turmeric, 1 tsp olive oil, 2 tsps garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 259,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 60,
            "sodium": 120,
            "carbohydrates": 9,
            "fiber": 10,
            "sugar": 22,
            "protein": 18
        }
    },
    "Spanish Oats Tuna With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 355,
            "protein": 3,
            "carbs": 57,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 60 g tuna as base. Add 2 tsps yogurt, 1.9 cup cabbage, 180 g carrot and cook until tender. Incorporate 80 g cucumber, 1.5 cup mint, 1 tbsp lemon juice and season with 2 tbsps olive oil, 3 cloves garlic, 1.8 cup onion. Serve hot.",
        "ingredients": "60 g tuna, 2 tsps yogurt, 1.9 cup cabbage, 180 g carrot, 80 g cucumber, 1.5 cup mint, 1 tbsp lemon juice, 1 tsp paprika, 2 tbsps olive oil, 3 cloves garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 355,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 93,
            "sodium": 102,
            "carbohydrates": 57,
            "fiber": 8,
            "sugar": 21,
            "protein": 3
        }
    },
    "Vietnamese Smoothie Bowl Shrimp With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 495,
            "protein": 7,
            "carbs": 49,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 70 g shrimp, 2 tbsps toast, 1.5 cup lettuce with liquid until smooth. Top with 2 tsps bell pepper, 60 g broccoli, 210 g cilantro and garnish with 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "70 g shrimp, 2 tbsps toast, 1.5 cup lettuce, 2 tsps bell pepper, 60 g broccoli, 210 g cilantro, 2 tsps sesame oil, 1 tbsp lemon juice, 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 495,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 79,
            "sodium": 657,
            "carbohydrates": 49,
            "fiber": 7,
            "sugar": 2,
            "protein": 7
        }
    },
    "Italian Porridge Turkey With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 271,
            "protein": 25,
            "carbs": 65,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.4 cup turkey with water or broth until soft and creamy. Add 0.8 cup rice, 1.5 cup cabbage, 80 g spinach and simmer until vegetables are tender. Season with 3 tbsps olive oil, 2 cloves garlic, 1.4 cup onion and serve hot.",
        "ingredients": "1.4 cup turkey, 0.8 cup rice, 1.5 cup cabbage, 80 g spinach, 0.6 cup zucchini, 110 g dill, 2 tsps chili flakes, 2 tsps paprika, 3 tbsps olive oil, 2 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 271,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 50,
            "sodium": 75,
            "carbohydrates": 65,
            "fiber": 3,
            "sugar": 9,
            "protein": 25
        }
    },
    "Indian Waffles Lamb With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 637,
            "protein": 44,
            "carbs": 13,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.1 cup lamb, 230 g rice, 1.6 cup kale with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1.9 cup zucchini, 1.9 cup spinach, 240 g basil and 3 tbsps olive oil, 1 clove garlic, 1.4 cup onion.",
        "ingredients": "1.1 cup lamb, 230 g rice, 1.6 cup kale, 1.9 cup zucchini, 1.9 cup spinach, 240 g basil, 3 cloves ginger, 1 tsp lime juice, 3 tbsps olive oil, 1 clove garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 637,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 55,
            "sodium": 877,
            "carbohydrates": 13,
            "fiber": 7,
            "sugar": 7,
            "protein": 44
        }
    },
    "Middle Eastern Yogurt Bowl Salmon With Maple Drizzle": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 603,
            "protein": 11,
            "carbs": 83,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.5 cup salmon, 2 pieces wrap, 90 g carrot with liquid until smooth. Top with 150 g lettuce, 1.2 cup pea, 120 g thyme and garnish with 1 tbsp olive oil, 1 clove garlic, 1.9 cup onion. Serve chilled.",
        "ingredients": "1.5 cup salmon, 2 pieces wrap, 90 g carrot, 150 g lettuce, 1.2 cup pea, 120 g thyme, 2 tsps lime juice, 2 tsps curry paste, 1 tbsp olive oil, 1 clove garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 603,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 105,
            "sodium": 759,
            "carbohydrates": 83,
            "fiber": 7,
            "sugar": 16,
            "protein": 11
        }
    },
    "Moroccan Burrito Lamb With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 631,
            "protein": 20,
            "carbs": 5,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 190 g lamb, 1 piece wrap, 190 g tomato, 1 cup lettuce. Add 0.8 cup broccoli, 110 g dill, 3 tbsps soy sauce and roll tightly. Serve with 1 tsp olive oil, 2 cloves garlic, 2 tbsps onion on the side.",
        "ingredients": "190 g lamb, 1 piece wrap, 190 g tomato, 1 cup lettuce, 0.8 cup broccoli, 110 g dill, 3 tbsps soy sauce, 2 pieces curry paste, 1 tsp olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 631,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 60,
            "sodium": 804,
            "carbohydrates": 5,
            "fiber": 2,
            "sugar": 7,
            "protein": 20
        }
    },
    "Moroccan Frittata Pork With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 430,
            "protein": 23,
            "carbs": 33,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 tbsps yogurt, 1.4 cup mushroom, 100 g pea in oil. Pour beaten eggs over vegetables, add 1.9 cup pork if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 2 cloves garlic, 0.9 cup onion.",
        "ingredients": "1.9 cup pork, 2 tbsps yogurt, 1.4 cup mushroom, 100 g pea, 0.6 cup cabbage, 1.8 cup thyme, 2 tbsps lemon juice, 2 tsps chili flakes, 1 tsp olive oil, 2 cloves garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 430,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 15,
            "sodium": 442,
            "carbohydrates": 33,
            "fiber": 8,
            "sugar": 13,
            "protein": 23
        }
    },
    "Vietnamese Toast Turkey With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 615,
            "protein": 6,
            "carbs": 78,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.9 cup turkey, 70 g rice, 0.9 cup broccoli and top with 140 g pea, 80 g cucumber, 120 g cilantro. Season with 1 tsp olive oil, 3 cloves garlic, 1 tbsp onion and serve.",
        "ingredients": "0.9 cup turkey, 70 g rice, 0.9 cup broccoli, 140 g pea, 80 g cucumber, 120 g cilantro, 1 tsp cumin, 3 cloves ginger, 1 tsp olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 615,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 5,
            "sodium": 811,
            "carbohydrates": 78,
            "fiber": 5,
            "sugar": 5,
            "protein": 6
        }
    },
    "Spanish Pancakes Pork With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 351,
            "protein": 29,
            "carbs": 28,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1 cup pork, 1 piece wrap, 200 g zucchini with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 0.8 cup corn, 1.5 cup kale, 140 g dill and 2 tsps olive oil, 2 tsps garlic, 1.1 cup onion.",
        "ingredients": "1 cup pork, 1 piece wrap, 200 g zucchini, 0.8 cup corn, 1.5 cup kale, 140 g dill, 1 tbsp vinegar, 1 tbsp sesame oil, 2 tsps olive oil, 2 tsps garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 351,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 50,
            "sodium": 366,
            "carbohydrates": 28,
            "fiber": 8,
            "sugar": 5,
            "protein": 29
        }
    },
    "Indian Congee Pork With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 412,
            "protein": 27,
            "carbs": 76,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 100 g pork with water or broth until soft and creamy. Add 2 tsps toast, 150 g pea, 140 g cucumber and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion and serve hot.",
        "ingredients": "100 g pork, 2 tsps toast, 150 g pea, 140 g cucumber, 0.9 cup mushroom, 1.8 cup dill, 1 tsp chili flakes, 1 tbsp soy sauce, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 412,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 87,
            "sodium": 402,
            "carbohydrates": 76,
            "fiber": 10,
            "sugar": 2,
            "protein": 27
        }
    },
    "Thai Waffles Sardines With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 453,
            "protein": 36,
            "carbs": 20,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 80 g sardines, 1.2 cup oats, 1.7 cup spinach with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 120 g corn, 100 g carrot, 0.8 cup cilantro and 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion.",
        "ingredients": "80 g sardines, 1.2 cup oats, 1.7 cup spinach, 120 g corn, 100 g carrot, 0.8 cup cilantro, 1 tsp curry paste, 1 tbsp soy sauce, 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 453,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 43,
            "sodium": 880,
            "carbohydrates": 20,
            "fiber": 3,
            "sugar": 15,
            "protein": 36
        }
    },
    "Japanese Scramble Shrimp With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 435,
            "protein": 5,
            "carbs": 56,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 70 g toast, 1.7 cup carrot, 2 cup corn until softened. Add beaten eggs and 0.9 cup shrimp if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 clove garlic, 2 cup onion and serve immediately.",
        "ingredients": "0.9 cup shrimp, 70 g toast, 1.7 cup carrot, 2 cup corn, 1.4 cup cabbage, 1.3 cup parsley, 2 tbsps vinegar, 1 piece curry paste, 3 tbsps olive oil, 1 clove garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 435,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 90,
            "sodium": 540,
            "carbohydrates": 56,
            "fiber": 6,
            "sugar": 10,
            "protein": 5
        }
    },
    "Middle Eastern Scramble Tuna With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 394,
            "protein": 17,
            "carbs": 28,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.8 cup rice, 0.8 cup kale, 210 g broccoli until softened. Add beaten eggs and 1.6 cup tuna if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "1.6 cup tuna, 1.8 cup rice, 0.8 cup kale, 210 g broccoli, 1.7 cup corn, 1.2 cup parsley, 2 tsps cumin, 1 tsp lemon juice, 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 394,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 108,
            "sodium": 239,
            "carbohydrates": 28,
            "fiber": 4,
            "sugar": 15,
            "protein": 17
        }
    },
    "Japanese Congee Tuna With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 319,
            "protein": 22,
            "carbs": 24,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 80 g tuna with water or broth until soft and creamy. Add 80 g oats, 160 g pea, 0.7 cup kale and simmer until vegetables are tender. Season with 2 tbsps olive oil, 1 clove garlic, 1 tbsp onion and serve hot.",
        "ingredients": "80 g tuna, 80 g oats, 160 g pea, 0.7 cup kale, 2 cup lettuce, 220 g thyme, 1 tsp turmeric, 2 tsps ginger, 2 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 319,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 59,
            "sodium": 393,
            "carbohydrates": 24,
            "fiber": 6,
            "sugar": 16,
            "protein": 22
        }
    },
    "Spanish Pancakes Cod With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 443,
            "protein": 21,
            "carbs": 68,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.6 cup cod, 1.2 cup rice, 230 g corn with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 220 g cabbage, 0.6 cup mushroom, 1.3 cup rosemary and 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion.",
        "ingredients": "1.6 cup cod, 1.2 cup rice, 230 g corn, 220 g cabbage, 0.6 cup mushroom, 1.3 cup rosemary, 3 tbsps vinegar, 2 tbsps soy sauce, 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 443,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 9,
            "sodium": 727,
            "carbohydrates": 68,
            "fiber": 3,
            "sugar": 12,
            "protein": 21
        }
    },
    "French Scramble Salmon With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 480,
            "protein": 24,
            "carbs": 6,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 piece wrap, 0.5 cup corn, 200 g pea until softened. Add beaten eggs and 0.7 cup salmon if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "0.7 cup salmon, 1 piece wrap, 0.5 cup corn, 200 g pea, 160 g carrot, 1.3 cup mint, 1 tsp vinegar, 1 piece curry paste, 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 480,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 20,
            "sodium": 661,
            "carbohydrates": 6,
            "fiber": 7,
            "sugar": 2,
            "protein": 24
        }
    },
    "Spanish Waffles Tuna With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 530,
            "protein": 4,
            "carbs": 21,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 1.2 cup tuna, 2 pieces tortilla, 180 g zucchini with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1 tsp bell pepper, 1.5 cup mushroom, 0.7 cup rosemary and 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion.",
        "ingredients": "1.2 cup tuna, 2 pieces tortilla, 180 g zucchini, 1 tsp bell pepper, 1.5 cup mushroom, 0.7 cup rosemary, 220 g curry paste, 1 tsp paprika, 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 530,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 38,
            "sodium": 869,
            "carbohydrates": 21,
            "fiber": 5,
            "sugar": 6,
            "protein": 4
        }
    },
    "French Yogurt Bowl Salmon With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 434,
            "protein": 44,
            "carbs": 54,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 220 g salmon, 160 g congee, 1 tsp bell pepper with liquid until smooth. Top with 200 g lettuce, 150 g zucchini, 110 g basil and garnish with 3 tbsps olive oil, 3 cloves garlic, 2 cup onion. Serve chilled.",
        "ingredients": "220 g salmon, 160 g congee, 1 tsp bell pepper, 200 g lettuce, 150 g zucchini, 110 g basil, 2 tsps lemon juice, 3 tbsps sesame oil, 3 tbsps olive oil, 3 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 434,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 14,
            "sodium": 417,
            "carbohydrates": 54,
            "fiber": 1,
            "sugar": 1,
            "protein": 44
        }
    },
    "Korean Congee Lamb With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 608,
            "protein": 19,
            "carbs": 27,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.4 cup lamb with water or broth until soft and creamy. Add 1 tbsp yogurt, 1.8 cup cucumber, 100 g carrot and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 tsp garlic, 0.6 cup onion and serve hot.",
        "ingredients": "1.4 cup lamb, 1 tbsp yogurt, 1.8 cup cucumber, 100 g carrot, 1.6 cup mushroom, 100 g mint, 1 tsp paprika, 3 tbsps vinegar, 1 tbsp olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 608,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 15,
            "sodium": 841,
            "carbohydrates": 27,
            "fiber": 14,
            "sugar": 20,
            "protein": 19
        }
    },
    "Spanish Oats Cod With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 486,
            "protein": 30,
            "carbs": 79,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g cod as base. Add 1 cup congee, 90 g cucumber, 1.1 cup broccoli and cook until tender. Incorporate 1.4 cup cabbage, 110 g mint, 2 tsps cumin and season with 1 tbsp olive oil, 3 cloves garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "110 g cod, 1 cup congee, 90 g cucumber, 1.1 cup broccoli, 1.4 cup cabbage, 110 g mint, 2 tsps cumin, 2 tsps vinegar, 1 tbsp olive oil, 3 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 486,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 92,
            "sodium": 769,
            "carbohydrates": 79,
            "fiber": 11,
            "sugar": 12,
            "protein": 30
        }
    },
    "French Omelette Beef With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 491,
            "protein": 34,
            "carbs": 9,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.4 cup rice, 0.9 cup mushroom, 1 cup cucumber until softened. Add beaten eggs and 150 g beef if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "150 g beef, 1.4 cup rice, 0.9 cup mushroom, 1 cup cucumber, 0.6 cup corn, 90 g basil, 2 tsps sesame oil, 2 cloves ginger, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 491,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 44,
            "sodium": 443,
            "carbohydrates": 9,
            "fiber": 12,
            "sugar": 18,
            "protein": 34
        }
    },
    "Greek Oats Beef With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 645,
            "protein": 9,
            "carbs": 47,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g beef as base. Add 2 pieces tortilla, 210 g lettuce, 2 cup corn and cook until tender. Incorporate 1.9 cup pea, 210 g parsley, 2 tsps turmeric and season with 2 tsps olive oil, 2 cloves garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "80 g beef, 2 pieces tortilla, 210 g lettuce, 2 cup corn, 1.9 cup pea, 210 g parsley, 2 tsps turmeric, 2 tbsps sesame oil, 2 tsps olive oil, 2 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 645,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 68,
            "sodium": 168,
            "carbohydrates": 47,
            "fiber": 3,
            "sugar": 18,
            "protein": 9
        }
    },
    "Mexican Congee Tuna With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 503,
            "protein": 44,
            "carbs": 49,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.8 cup tuna with water or broth until soft and creamy. Add 3 tbsps yogurt, 0.5 cup kale, 60 g lettuce and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 cloves garlic, 1.5 cup onion and serve hot.",
        "ingredients": "1.8 cup tuna, 3 tbsps yogurt, 0.5 cup kale, 60 g lettuce, 190 g zucchini, 1.7 cup cilantro, 2 tbsps soy sauce, 2 cloves ginger, 2 tbsps olive oil, 2 cloves garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 503,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 105,
            "sodium": 207,
            "carbohydrates": 49,
            "fiber": 15,
            "sugar": 14,
            "protein": 44
        }
    },
    "Moroccan Pancakes Turkey With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 320,
            "protein": 6,
            "carbs": 63,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 120 g turkey, 1.4 cup rice, 200 g broccoli with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 90 g pea, 60 g kale, 230 g rosemary and 1 tsp olive oil, 2 cloves garlic, 0.7 cup onion.",
        "ingredients": "120 g turkey, 1.4 cup rice, 200 g broccoli, 90 g pea, 60 g kale, 230 g rosemary, 1 tsp soy sauce, 1 tsp chili flakes, 1 tsp olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 320,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 90,
            "sodium": 163,
            "carbohydrates": 63,
            "fiber": 9,
            "sugar": 20,
            "protein": 6
        }
    },
    "French Frittata Shrimp With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 571,
            "protein": 9,
            "carbs": 76,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.8 cup congee, 80 g broccoli, 130 g corn in oil. Pour beaten eggs over vegetables, add 150 g shrimp if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 2 tsps garlic, 1.3 cup onion.",
        "ingredients": "150 g shrimp, 0.8 cup congee, 80 g broccoli, 130 g corn, 1.5 cup spinach, 230 g rosemary, 1 tsp cumin, 1 tsp chili flakes, 1 tbsp olive oil, 2 tsps garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 571,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 69,
            "sodium": 203,
            "carbohydrates": 76,
            "fiber": 9,
            "sugar": 14,
            "protein": 9
        }
    },
    "American Congee Tuna With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 444,
            "protein": 20,
            "carbs": 36,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.6 cup tuna with water or broth until soft and creamy. Add 140 g rice, 1.9 cup tomato, 220 g lettuce and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "1.6 cup tuna, 140 g rice, 1.9 cup tomato, 220 g lettuce, 1.4 cup corn, 110 g cilantro, 2 tsps cumin, 1 tbsp lemon juice, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 444,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 117,
            "sodium": 242,
            "carbohydrates": 36,
            "fiber": 14,
            "sugar": 3,
            "protein": 20
        }
    },
    "American Pancakes Cod With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 240,
            "protein": 26,
            "carbs": 43,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 130 g cod, 2 pieces wrap, 1.9 cup cucumber with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 1 cup zucchini, 180 g pea, 0.7 cup mint and 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion.",
        "ingredients": "130 g cod, 2 pieces wrap, 1.9 cup cucumber, 1 cup zucchini, 180 g pea, 0.7 cup mint, 2 tsps turmeric, 1 tbsp lime juice, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 240,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 47,
            "sodium": 145,
            "carbohydrates": 43,
            "fiber": 5,
            "sugar": 10,
            "protein": 26
        }
    },
    "French Waffles Tuna With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 510,
            "protein": 40,
            "carbs": 46,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Mix 0.8 cup tuna, 130 g oats, 110 g carrot with flour and liquid to form batter. Cook on hot griddle until golden. Serve with 170 g mushroom, 1.1 cup cucumber, 170 g rosemary and 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion.",
        "ingredients": "0.8 cup tuna, 130 g oats, 110 g carrot, 170 g mushroom, 1.1 cup cucumber, 170 g rosemary, 3 tbsps soy sauce, 1 tsp paprika, 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 510,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 22,
            "sodium": 714,
            "carbohydrates": 46,
            "fiber": 3,
            "sugar": 9,
            "protein": 40
        }
    },
    "Turkish Smoothie Bowl Chicken With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 294,
            "protein": 19,
            "carbs": 75,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 210 g chicken, 160 g rice, 1 tsp bell pepper with liquid until smooth. Top with 0.9 cup kale, 1.4 cup carrot, 160 g thyme and garnish with 1 tbsp olive oil, 2 tsps garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "210 g chicken, 160 g rice, 1 tsp bell pepper, 0.9 cup kale, 1.4 cup carrot, 160 g thyme, 2 tsps sesame oil, 1 clove ginger, 1 tbsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 294,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 107,
            "sodium": 165,
            "carbohydrates": 75,
            "fiber": 12,
            "sugar": 1,
            "protein": 19
        }
    },
    "Vietnamese Toast Lamb With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 396,
            "protein": 7,
            "carbs": 82,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.7 cup lamb, 1.7 cup toast, 150 g cabbage and top with 60 g zucchini, 180 g cucumber, 1 cup rosemary. Season with 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion and serve.",
        "ingredients": "1.7 cup lamb, 1.7 cup toast, 150 g cabbage, 60 g zucchini, 180 g cucumber, 1 cup rosemary, 2 tbsps soy sauce, 2 tbsps vinegar, 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 396,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 37,
            "sodium": 246,
            "carbohydrates": 82,
            "fiber": 13,
            "sugar": 18,
            "protein": 7
        }
    },
    "Moroccan Toast Crab With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 157,
            "protein": 30,
            "carbs": 23,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 170 g crab, 1.2 cup rice, 1.8 cup mushroom and top with 230 g carrot, 150 g corn, 1.5 cup dill. Season with 2 tbsps olive oil, 3 cloves garlic, 1.9 cup onion and serve.",
        "ingredients": "170 g crab, 1.2 cup rice, 1.8 cup mushroom, 230 g carrot, 150 g corn, 1.5 cup dill, 3 cloves ginger, 1 tsp sesame oil, 2 tbsps olive oil, 3 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 157,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 9,
            "sodium": 159,
            "carbohydrates": 23,
            "fiber": 9,
            "sugar": 15,
            "protein": 30
        }
    },
    "Thai Omelette Beef With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 302,
            "protein": 11,
            "carbs": 17,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 170 g rice, 120 g zucchini, 1 cup corn until softened. Add beaten eggs and 1 cup beef if applicable, scramble until cooked. Season with 1 tbsp olive oil, 2 tsps garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "1 cup beef, 170 g rice, 120 g zucchini, 1 cup corn, 1.9 cup carrot, 90 g dill, 2 tbsps lime juice, 1 tsp sesame oil, 1 tbsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 302,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 111,
            "sodium": 511,
            "carbohydrates": 17,
            "fiber": 11,
            "sugar": 18,
            "protein": 11
        }
    },
    "Greek Frittata Turkey With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 399,
            "protein": 21,
            "carbs": 66,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 3 tbsps yogurt, 1 tsp bell pepper, 210 g zucchini in oil. Pour beaten eggs over vegetables, add 0.5 cup turkey if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 3 cloves garlic, 0.8 cup onion.",
        "ingredients": "0.5 cup turkey, 3 tbsps yogurt, 1 tsp bell pepper, 210 g zucchini, 120 g pea, 1.4 cup cilantro, 2 tsps cumin, 2 tsps vinegar, 1 tsp olive oil, 3 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 399,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 50,
            "sodium": 353,
            "carbohydrates": 66,
            "fiber": 9,
            "sugar": 1,
            "protein": 21
        }
    },
    "Middle Eastern Smoothie Bowl Sardines With Herbed Mushrooms": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 359,
            "protein": 37,
            "carbs": 57,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 70 g sardines, 160 g oats, 1.1 cup spinach with liquid until smooth. Top with 80 g cucumber, 130 g zucchini, 1.7 cup thyme and garnish with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "70 g sardines, 160 g oats, 1.1 cup spinach, 80 g cucumber, 130 g zucchini, 1.7 cup thyme, 2 tsps turmeric, 2 tsps cumin, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 359,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 85,
            "sodium": 629,
            "carbohydrates": 57,
            "fiber": 5,
            "sugar": 10,
            "protein": 37
        }
    },
    "French Burrito Tuna With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 586,
            "protein": 21,
            "carbs": 19,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 80 g tuna, 1 piece tortilla, 150 g corn, 110 g carrot. Add 170 g spinach, 230 g thyme, 2 tsps chili flakes and roll tightly. Serve with 2 tsps olive oil, 1 clove garlic, 2 tbsps onion on the side.",
        "ingredients": "80 g tuna, 1 piece tortilla, 150 g corn, 110 g carrot, 170 g spinach, 230 g thyme, 2 tsps chili flakes, 2 tsps lemon juice, 2 tsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 586,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 22,
            "sodium": 782,
            "carbohydrates": 19,
            "fiber": 9,
            "sugar": 2,
            "protein": 21
        }
    },
    "Italian Yogurt Bowl Sardines With Berries": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 508,
            "protein": 23,
            "carbs": 73,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.4 cup sardines, 2 pieces wrap, 1.9 cup cabbage with liquid until smooth. Top with 60 g carrot, 70 g broccoli, 70 g mint and garnish with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "1.4 cup sardines, 2 pieces wrap, 1.9 cup cabbage, 60 g carrot, 70 g broccoli, 70 g mint, 2 tsps cumin, 1 tsp soy sauce, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 508,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 102,
            "sodium": 113,
            "carbohydrates": 73,
            "fiber": 5,
            "sugar": 16,
            "protein": 23
        }
    },
    "Italian Yogurt Bowl Pork With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 649,
            "protein": 26,
            "carbs": 46,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 220 g pork, 2 pieces wrap, 120 g carrot with liquid until smooth. Top with 1.2 cup corn, 0.7 cup cucumber, 1.4 cup parsley and garnish with 2 tsps olive oil, 1 clove garlic, 1.3 cup onion. Serve chilled.",
        "ingredients": "220 g pork, 2 pieces wrap, 120 g carrot, 1.2 cup corn, 0.7 cup cucumber, 1.4 cup parsley, 1 tsp cumin, 2 tsps paprika, 2 tsps olive oil, 1 clove garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 649,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 63,
            "sodium": 109,
            "carbohydrates": 46,
            "fiber": 12,
            "sugar": 6,
            "protein": 26
        }
    },
    "Korean Scramble Salmon With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 320,
            "protein": 24,
            "carbs": 55,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 pieces tortilla, 0.5 cup tomato, 0.5 cup broccoli until softened. Add beaten eggs and 1.8 cup salmon if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "1.8 cup salmon, 2 pieces tortilla, 0.5 cup tomato, 0.5 cup broccoli, 1 tsp bell pepper, 1.2 cup rosemary, 2 tsps sesame oil, 3 cloves ginger, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 320,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 47,
            "sodium": 882,
            "carbohydrates": 55,
            "fiber": 2,
            "sugar": 20,
            "protein": 24
        }
    },
    "Chinese Burrito Duck With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 465,
            "protein": 42,
            "carbs": 7,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 110 g duck, 2 pieces wrap, 1.6 cup broccoli, 230 g cucumber. Add 230 g kale, 120 g thyme, 2 tsps cumin and roll tightly. Serve with 1 tbsp olive oil, 2 tsps garlic, 3 tbsps onion on the side.",
        "ingredients": "110 g duck, 2 pieces wrap, 1.6 cup broccoli, 230 g cucumber, 230 g kale, 120 g thyme, 2 tsps cumin, 2 tsps lime juice, 1 tbsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 465,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 97,
            "sodium": 300,
            "carbohydrates": 7,
            "fiber": 8,
            "sugar": 19,
            "protein": 42
        }
    },
    "Chinese Congee Shrimp With Cinnamon Apples": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 249,
            "protein": 20,
            "carbs": 14,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.7 cup shrimp with water or broth until soft and creamy. Add 2 tsps toast, 190 g mushroom, 1.9 cup corn and simmer until vegetables are tender. Season with 1 tbsp olive oil, 2 cloves garlic, 2 tbsps onion and serve hot.",
        "ingredients": "0.7 cup shrimp, 2 tsps toast, 190 g mushroom, 1.9 cup corn, 1.3 cup carrot, 1.2 cup rosemary, 2 tbsps lemon juice, 1 piece curry paste, 1 tbsp olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 249,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 13,
            "sodium": 395,
            "carbohydrates": 14,
            "fiber": 2,
            "sugar": 8,
            "protein": 20
        }
    },
    "Spanish Omelette Crab With Spinach & Feta": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 432,
            "protein": 30,
            "carbs": 15,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 210 g oats, 0.6 cup lettuce, 1.3 cup tomato until softened. Add beaten eggs and 210 g crab if applicable, scramble until cooked. Season with 1 tsp olive oil, 2 tsps garlic, 1 cup onion and serve immediately.",
        "ingredients": "210 g crab, 210 g oats, 0.6 cup lettuce, 1.3 cup tomato, 190 g carrot, 110 g basil, 2 tbsps lemon juice, 3 tbsps vinegar, 1 tsp olive oil, 2 tsps garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 432,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 38,
            "sodium": 455,
            "carbohydrates": 15,
            "fiber": 3,
            "sugar": 13,
            "protein": 30
        }
    },
    "Turkish Yogurt Bowl Chicken With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 612,
            "protein": 23,
            "carbs": 21,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 200 g chicken, 140 g congee, 210 g broccoli with liquid until smooth. Top with 1.1 cup cabbage, 0.9 cup mushroom, 170 g mint and garnish with 2 tsps olive oil, 3 cloves garlic, 1.8 cup onion. Serve chilled.",
        "ingredients": "200 g chicken, 140 g congee, 210 g broccoli, 1.1 cup cabbage, 0.9 cup mushroom, 170 g mint, 2 tsps turmeric, 2 tsps soy sauce, 2 tsps olive oil, 3 cloves garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 612,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 112,
            "sodium": 211,
            "carbohydrates": 21,
            "fiber": 4,
            "sugar": 19,
            "protein": 23
        }
    },
    "French Yogurt Bowl Beef With Avocado": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 579,
            "protein": 19,
            "carbs": 51,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 0.5 cup beef, 1 piece toast, 2 tsps bell pepper with liquid until smooth. Top with 240 g corn, 0.8 cup pea, 0.8 cup mint and garnish with 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "0.5 cup beef, 1 piece toast, 2 tsps bell pepper, 240 g corn, 0.8 cup pea, 0.8 cup mint, 2 cloves ginger, 1 tbsp soy sauce, 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 579,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 37,
            "sodium": 181,
            "carbohydrates": 51,
            "fiber": 15,
            "sugar": 8,
            "protein": 19
        }
    },
    "Mexican Oats Tuna With Peanut Butter": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 568,
            "protein": 10,
            "carbs": 85,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.1 cup tuna as base. Add 0.5 cup congee, 70 g carrot, 0.6 cup corn and cook until tender. Incorporate 2 tsps bell pepper, 100 g parsley, 1 tsp soy sauce and season with 1 tsp olive oil, 3 cloves garlic, 1.9 cup onion. Serve hot.",
        "ingredients": "1.1 cup tuna, 0.5 cup congee, 70 g carrot, 0.6 cup corn, 2 tsps bell pepper, 100 g parsley, 1 tsp soy sauce, 2 tbsps sesame oil, 1 tsp olive oil, 3 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 568,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 70,
            "sodium": 121,
            "carbohydrates": 85,
            "fiber": 3,
            "sugar": 22,
            "protein": 10
        }
    },
    "Korean Toast Tuna With Honey Yogurt": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 487,
            "protein": 22,
            "carbs": 79,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 170 g tuna, 1.8 cup oats, 1.7 cup cucumber and top with 1 tsp bell pepper, 160 g lettuce, 220 g dill. Season with 2 tbsps olive oil, 3 cloves garlic, 1.2 cup onion and serve.",
        "ingredients": "170 g tuna, 1.8 cup oats, 1.7 cup cucumber, 1 tsp bell pepper, 160 g lettuce, 220 g dill, 1 tsp ginger, 2 tsps turmeric, 2 tbsps olive oil, 3 cloves garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 487,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 1,
            "sodium": 270,
            "carbohydrates": 79,
            "fiber": 12,
            "sugar": 19,
            "protein": 22
        }
    },
    "Moroccan Smoothie Bowl Duck With Tomato Salsa": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 567,
            "protein": 36,
            "carbs": 5,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 140 g duck, 1.6 cup oats, 2 cup carrot with liquid until smooth. Top with 240 g lettuce, 1.5 cup mushroom, 0.9 cup thyme and garnish with 1 tsp olive oil, 3 cloves garlic, 0.7 cup onion. Serve chilled.",
        "ingredients": "140 g duck, 1.6 cup oats, 2 cup carrot, 240 g lettuce, 1.5 cup mushroom, 0.9 cup thyme, 1 tbsp curry paste, 1 tsp cumin, 1 tsp olive oil, 3 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 567,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 53,
            "sodium": 284,
            "carbohydrates": 5,
            "fiber": 6,
            "sugar": 21,
            "protein": 36
        }
    },
    "Mexican Scramble Crab With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 302,
            "protein": 38,
            "carbs": 28,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tbsps yogurt, 80 g corn, 1.7 cup spinach until softened. Add beaten eggs and 1.7 cup crab if applicable, scramble until cooked. Season with 2 tsps olive oil, 2 tsps garlic, 0.6 cup onion and serve immediately.",
        "ingredients": "1.7 cup crab, 2 tbsps yogurt, 80 g corn, 1.7 cup spinach, 230 g zucchini, 1.7 cup rosemary, 2 pieces curry paste, 2 tsps paprika, 2 tsps olive oil, 2 tsps garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 302,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 19,
            "sodium": 410,
            "carbohydrates": 28,
            "fiber": 2,
            "sugar": 13,
            "protein": 38
        }
    },
    "Mexican Frittata Lamb With Seeds & Nuts": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 251,
            "protein": 3,
            "carbs": 30,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces toast, 140 g corn, 2 tsps bell pepper in oil. Pour beaten eggs over vegetables, add 0.7 cup lamb if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 3 cloves garlic, 1.9 cup onion.",
        "ingredients": "0.7 cup lamb, 2 pieces toast, 140 g corn, 2 tsps bell pepper, 210 g lettuce, 200 g basil, 3 tbsps lemon juice, 2 tsps lime juice, 1 tsp olive oil, 3 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 251,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 63,
            "sodium": 407,
            "carbohydrates": 30,
            "fiber": 2,
            "sugar": 7,
            "protein": 3
        }
    },
    "Turkish Porridge Pork With Banana & Chia": {
        "mealType": "breakfast",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 344,
            "protein": 3,
            "carbs": 72,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 240 g pork with water or broth until soft and creamy. Add 2 pieces tortilla, 2 tsps bell pepper, 230 g tomato and simmer until vegetables are tender. Season with 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion and serve hot.",
        "ingredients": "240 g pork, 2 pieces tortilla, 2 tsps bell pepper, 230 g tomato, 0.6 cup mushroom, 2 cup cilantro, 2 tsps cumin, 1 tsp soy sauce, 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 344,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 89,
            "sodium": 845,
            "carbohydrates": 72,
            "fiber": 1,
            "sugar": 18,
            "protein": 3
        }
    },
    "Moroccan Grilled Chickpeas Curry With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 246,
            "protein": 24,
            "carbs": 20,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.4 cup udon, 1.5 cup corn, 170 g broccoli until crisp-tender. Add 1.7 cup chickpeas and 0.8 cup zucchini, 150 g mint, 2 cloves ginger. Season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion and serve over rice.",
        "ingredients": "1.7 cup chickpeas, 1.4 cup udon, 1.5 cup corn, 170 g broccoli, 0.8 cup zucchini, 150 g mint, 2 cloves ginger, 2 tsps sesame oil, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 246,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 15,
            "sodium": 831,
            "carbohydrates": 20,
            "fiber": 11,
            "sugar": 5,
            "protein": 24
        }
    },
    "Moroccan Grilled Tempeh Bowl With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 297,
            "protein": 19,
            "carbs": 45,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 90 g tempeh, 0.5 cup rice, 70 g corn with liquid until smooth. Top with 240 g cabbage, 230 g mushroom, 1.6 cup basil and garnish with 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "90 g tempeh, 0.5 cup rice, 70 g corn, 240 g cabbage, 230 g mushroom, 1.6 cup basil, 3 tbsps curry paste, 2 tbsps sesame oil, 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 297,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 95,
            "sodium": 792,
            "carbohydrates": 45,
            "fiber": 6,
            "sugar": 13,
            "protein": 19
        }
    },
    "Indian Glazed Tempeh Omelette With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 386,
            "protein": 43,
            "carbs": 65,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 cup soba, 0.7 cup cucumber, 160 g mushroom until softened. Add beaten eggs and 1.6 cup tempeh if applicable, scramble until cooked. Season with 1 tbsp olive oil, 2 cloves garlic, 1.7 cup onion and serve immediately.",
        "ingredients": "1.6 cup tempeh, 2 cup soba, 0.7 cup cucumber, 160 g mushroom, 190 g zucchini, 1.8 cup mint, 2 tsps ginger, 1 tsp soy sauce, 1 tbsp olive oil, 2 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 386,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 119,
            "sodium": 665,
            "carbohydrates": 65,
            "fiber": 1,
            "sugar": 13,
            "protein": 43
        }
    },
    "Japanese Roasted Sweet Potato Stew With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 611,
            "protein": 14,
            "carbs": 33,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 70 g sweet potato as base. Add 1 piece bread, 230 g lettuce, 110 g zucchini and cook until tender. Incorporate 0.6 cup tomato, 1.1 cup rosemary, 1 tsp turmeric and season with 2 tbsps olive oil, 2 cloves garlic, 2 cup onion. Serve hot.",
        "ingredients": "70 g sweet potato, 1 piece bread, 230 g lettuce, 110 g zucchini, 0.6 cup tomato, 1.1 cup rosemary, 1 tsp turmeric, 1 tsp chili flakes, 2 tbsps olive oil, 2 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 611,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 60,
            "sodium": 475,
            "carbohydrates": 33,
            "fiber": 4,
            "sugar": 19,
            "protein": 14
        }
    },
    "Indian Stir-fried Tofu Skewers With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 490,
            "protein": 11,
            "carbs": 77,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 150 g tofu as base. Add 1 tsp yogurt, 1.3 cup spinach, 1.9 cup mushroom and cook until tender. Incorporate 0.7 cup tomato, 1.9 cup dill, 2 pieces curry paste and season with 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "150 g tofu, 1 tsp yogurt, 1.3 cup spinach, 1.9 cup mushroom, 0.7 cup tomato, 1.9 cup dill, 2 pieces curry paste, 2 tsps vinegar, 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 490,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 46,
            "sodium": 368,
            "carbohydrates": 77,
            "fiber": 15,
            "sugar": 3,
            "protein": 11
        }
    },
    "Greek Poached Zucchini Pasta With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 328,
            "protein": 17,
            "carbs": 84,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g zucchini as base. Add 210 g udon, 0.7 cup pea, 2 tsps bell pepper and cook until tender. Incorporate 160 g cucumber, 0.9 cup parsley, 1 tbsp sesame oil and season with 2 tbsps olive oil, 2 cloves garlic, 1 cup onion. Serve hot.",
        "ingredients": "160 g zucchini, 210 g udon, 0.7 cup pea, 2 tsps bell pepper, 160 g cucumber, 0.9 cup parsley, 1 tbsp sesame oil, 3 tbsps curry paste, 2 tbsps olive oil, 2 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 328,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 37,
            "sodium": 285,
            "carbohydrates": 84,
            "fiber": 3,
            "sugar": 12,
            "protein": 17
        }
    },
    "Japanese Glazed Paneer Sandwich With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 624,
            "protein": 45,
            "carbs": 8,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 180 g paneer, 0.5 cup oats, 220 g mushroom and top with 180 g spinach, 170 g tomato, 0.5 cup rosemary. Season with 2 tsps olive oil, 1 clove garlic, 2 tbsps onion and serve.",
        "ingredients": "180 g paneer, 0.5 cup oats, 220 g mushroom, 180 g spinach, 170 g tomato, 0.5 cup rosemary, 2 tsps paprika, 2 tsps cumin, 2 tsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 624,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 75,
            "sodium": 792,
            "carbohydrates": 8,
            "fiber": 2,
            "sugar": 8,
            "protein": 45
        }
    },
    "Chinese Crispy Broccoli Congee With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 301,
            "protein": 43,
            "carbs": 73,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.8 cup broccoli with water or broth until soft and creamy. Add 1.3 cup oats, 130 g lettuce, 0.7 cup kale and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion and serve hot.",
        "ingredients": "1.8 cup broccoli, 1.3 cup oats, 130 g lettuce, 0.7 cup kale, 0.7 cup pea, 140 g parsley, 1 tsp turmeric, 1 tbsp lemon juice, 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 301,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 34,
            "sodium": 425,
            "carbohydrates": 73,
            "fiber": 12,
            "sugar": 21,
            "protein": 43
        }
    },
    "French Poached Pumpkin Tacos With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 150,
            "protein": 5,
            "carbs": 14,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 3 tbsps pumpkin as base. Add 1 piece tortilla, 200 g cabbage, 2 tsps bell pepper and cook until tender. Incorporate 150 g lettuce, 70 g mint, 2 tsps paprika and season with 2 tbsps olive oil, 3 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "3 tbsps pumpkin, 1 piece tortilla, 200 g cabbage, 2 tsps bell pepper, 150 g lettuce, 70 g mint, 2 tsps paprika, 2 tbsps lime juice, 2 tbsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 150,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 77,
            "sodium": 739,
            "carbohydrates": 14,
            "fiber": 4,
            "sugar": 5,
            "protein": 5
        }
    },
    "Korean Baked Seitan Pasta With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 465,
            "protein": 7,
            "carbs": 15,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.7 cup seitan as base. Add 2 pieces tortilla, 1.7 cup broccoli, 1.5 cup tomato and cook until tender. Incorporate 1.4 cup cabbage, 90 g parsley, 2 tsps cumin and season with 1 tbsp olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.7 cup seitan, 2 pieces tortilla, 1.7 cup broccoli, 1.5 cup tomato, 1.4 cup cabbage, 90 g parsley, 2 tsps cumin, 1 tsp paprika, 1 tbsp olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 465,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 51,
            "sodium": 530,
            "carbohydrates": 15,
            "fiber": 10,
            "sugar": 13,
            "protein": 7
        }
    },
    "Vietnamese Pan-seared Eggplant Tacos With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 470,
            "protein": 38,
            "carbs": 28,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 piece eggplant as base. Add 160 g quinoa, 0.6 cup spinach, 1.5 cup pea and cook until tender. Incorporate 100 g tomato, 1.6 cup parsley, 2 tsps turmeric and season with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1 piece eggplant, 160 g quinoa, 0.6 cup spinach, 1.5 cup pea, 100 g tomato, 1.6 cup parsley, 2 tsps turmeric, 2 tsps ginger, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 470,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 46,
            "sodium": 625,
            "carbohydrates": 28,
            "fiber": 14,
            "sugar": 15,
            "protein": 38
        }
    },
    "Chinese Poached Cauliflower Curry With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 419,
            "protein": 23,
            "carbs": 25,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 80 g rice, 1.5 cup zucchini, 0.9 cup cucumber until crisp-tender. Add 1 piece cauliflower and 1.7 cup carrot, 170 g parsley, 1 tsp ginger. Season with 2 tsps olive oil, 1 tsp garlic, 1.3 cup onion and serve over rice.",
        "ingredients": "1 piece cauliflower, 80 g rice, 1.5 cup zucchini, 0.9 cup cucumber, 1.7 cup carrot, 170 g parsley, 1 tsp ginger, 2 tsps cumin, 2 tsps olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 419,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 28,
            "sodium": 380,
            "carbohydrates": 25,
            "fiber": 12,
            "sugar": 10,
            "protein": 23
        }
    },
    "American Roasted Tofu Skewers With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 237,
            "protein": 44,
            "carbs": 51,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g tofu as base. Add 140 g soba, 170 g tomato, 1.9 cup broccoli and cook until tender. Incorporate 230 g mushroom, 0.6 cup basil, 2 tbsps lime juice and season with 3 tbsps olive oil, 1 clove garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "100 g tofu, 140 g soba, 170 g tomato, 1.9 cup broccoli, 230 g mushroom, 0.6 cup basil, 2 tbsps lime juice, 3 tbsps lemon juice, 3 tbsps olive oil, 1 clove garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 237,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 63,
            "sodium": 735,
            "carbohydrates": 51,
            "fiber": 15,
            "sugar": 21,
            "protein": 44
        }
    },
    "Thai Glazed Eggplant Porridge With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 365,
            "protein": 43,
            "carbs": 15,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 2 pieces eggplant with water or broth until soft and creamy. Add 1.9 cup udon, 1.7 cup cabbage, 1.4 cup tomato and simmer until vegetables are tender. Season with 3 tbsps olive oil, 2 cloves garlic, 3 tbsps onion and serve hot.",
        "ingredients": "2 pieces eggplant, 1.9 cup udon, 1.7 cup cabbage, 1.4 cup tomato, 140 g lettuce, 1.5 cup basil, 2 tsps cumin, 1 tsp turmeric, 3 tbsps olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 365,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 53,
            "sodium": 193,
            "carbohydrates": 15,
            "fiber": 1,
            "sugar": 21,
            "protein": 43
        }
    },
    "Turkish Glazed Tempeh Soup With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 586,
            "protein": 37,
            "carbs": 5,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 cup soba, 0.8 cup kale, 220 g spinach in oil until softened. Add broth and 120 g tempeh, simmer until tender. Season with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion and serve hot.",
        "ingredients": "120 g tempeh, 1 cup soba, 0.8 cup kale, 220 g spinach, 1.9 cup lettuce, 110 g basil, 3 tbsps lemon juice, 2 tsps ginger, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 586,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 16,
            "sodium": 397,
            "carbohydrates": 5,
            "fiber": 6,
            "sugar": 14,
            "protein": 37
        }
    },
    "Italian Crispy Broccoli Frittata With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 359,
            "protein": 41,
            "carbs": 8,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 tsp yogurt, 0.7 cup carrot, 1.6 cup mushroom in oil. Pour beaten eggs over vegetables, add 0.9 cup broccoli if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 1 tsp garlic, 1.2 cup onion.",
        "ingredients": "0.9 cup broccoli, 1 tsp yogurt, 0.7 cup carrot, 1.6 cup mushroom, 1.5 cup corn, 220 g mint, 2 tsps lime juice, 1 tsp ginger, 1 tbsp olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 359,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 17,
            "sodium": 374,
            "carbohydrates": 8,
            "fiber": 13,
            "sugar": 1,
            "protein": 41
        }
    },
    "Indian Baked Chickpeas Pasta With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 530,
            "protein": 31,
            "carbs": 16,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.7 cup chickpeas as base. Add 1.1 cup noodles, 1.9 cup broccoli, 80 g lettuce and cook until tender. Incorporate 1.5 cup spinach, 0.6 cup mint, 1 tsp soy sauce and season with 2 tbsps olive oil, 1 clove garlic, 1.8 cup onion. Serve hot.",
        "ingredients": "0.7 cup chickpeas, 1.1 cup noodles, 1.9 cup broccoli, 80 g lettuce, 1.5 cup spinach, 0.6 cup mint, 1 tsp soy sauce, 1 tsp chili flakes, 2 tbsps olive oil, 1 clove garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 530,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 62,
            "sodium": 485,
            "carbohydrates": 16,
            "fiber": 15,
            "sugar": 7,
            "protein": 31
        }
    },
    "Thai Pan-seared Pumpkin Salad With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 398,
            "protein": 16,
            "carbs": 6,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 2 tsps pumpkin, 1.1 cup soba, 2 tsps bell pepper, 190 g broccoli in a bowl. Add 170 g cabbage, 120 g rosemary, 3 tbsps lemon juice and toss gently. Dress with 3 tbsps olive oil, 2 tsps garlic, 1.4 cup onion and serve fresh.",
        "ingredients": "2 tsps pumpkin, 1.1 cup soba, 2 tsps bell pepper, 190 g broccoli, 170 g cabbage, 120 g rosemary, 3 tbsps lemon juice, 3 tbsps sesame oil, 3 tbsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 398,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 79,
            "sodium": 589,
            "carbohydrates": 6,
            "fiber": 6,
            "sugar": 8,
            "protein": 16
        }
    },
    "American Crispy Lentils Salad With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 457,
            "protein": 4,
            "carbs": 76,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 120 g lentils, 240 g bulgur, 240 g cucumber, 1 tsp bell pepper in a bowl. Add 1.7 cup kale, 80 g thyme, 2 tsps sesame oil and toss gently. Dress with 1 tbsp olive oil, 1 clove garlic, 1.2 cup onion and serve fresh.",
        "ingredients": "120 g lentils, 240 g bulgur, 240 g cucumber, 1 tsp bell pepper, 1.7 cup kale, 80 g thyme, 2 tsps sesame oil, 2 tsps turmeric, 1 tbsp olive oil, 1 clove garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 457,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 40,
            "sodium": 231,
            "carbohydrates": 76,
            "fiber": 11,
            "sugar": 12,
            "protein": 4
        }
    },
    "Vietnamese Smoky Black Beans Omelette With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 319,
            "protein": 7,
            "carbs": 51,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.5 cup soba, 0.5 cup tomato, 1.9 cup lettuce until softened. Add beaten eggs and 0.6 cup black beans if applicable, scramble until cooked. Season with 1 tbsp olive oil, 2 tsps garlic, 1.8 cup onion and serve immediately.",
        "ingredients": "0.6 cup black beans, 1.5 cup soba, 0.5 cup tomato, 1.9 cup lettuce, 130 g carrot, 80 g parsley, 1 tsp cumin, 1 tsp curry paste, 1 tbsp olive oil, 2 tsps garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 319,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 102,
            "sodium": 301,
            "carbohydrates": 51,
            "fiber": 4,
            "sugar": 15,
            "protein": 7
        }
    },
    "Japanese Smoky Tofu Curry With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 333,
            "protein": 26,
            "carbs": 67,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1 piece bread, 1 cup pea, 1.7 cup kale until crisp-tender. Add 240 g tofu and 2 tsps bell pepper, 230 g cilantro, 2 tsps vinegar. Season with 1 tbsp olive oil, 1 tsp garlic, 0.6 cup onion and serve over rice.",
        "ingredients": "240 g tofu, 1 piece bread, 1 cup pea, 1.7 cup kale, 2 tsps bell pepper, 230 g cilantro, 2 tsps vinegar, 3 tbsps lime juice, 1 tbsp olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 333,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 6,
            "sodium": 457,
            "carbohydrates": 67,
            "fiber": 14,
            "sugar": 5,
            "protein": 26
        }
    },
    "Moroccan Glazed Zucchini Curry With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 415,
            "protein": 6,
            "carbs": 78,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.9 cup quinoa, 1.1 cup lettuce, 2 tsps bell pepper until crisp-tender. Add 130 g zucchini and 0.9 cup corn, 80 g basil, 2 tsps cumin. Season with 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion and serve over rice.",
        "ingredients": "130 g zucchini, 1.9 cup quinoa, 1.1 cup lettuce, 2 tsps bell pepper, 0.9 cup corn, 80 g basil, 2 tsps cumin, 2 tsps chili flakes, 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 415,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 49,
            "sodium": 189,
            "carbohydrates": 78,
            "fiber": 7,
            "sugar": 17,
            "protein": 6
        }
    },
    "Chinese Pan-seared Halloumi Stir-fry With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 457,
            "protein": 24,
            "carbs": 33,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup halloumi as base. Add 0.6 cup bulgur, 1.3 cup cucumber, 60 g kale and cook until tender. Incorporate 2 tsps bell pepper, 2 cup cilantro, 1 tsp cumin and season with 2 tbsps olive oil, 1 tsp garlic, 1 cup onion. Serve hot.",
        "ingredients": "0.8 cup halloumi, 0.6 cup bulgur, 1.3 cup cucumber, 60 g kale, 2 tsps bell pepper, 2 cup cilantro, 1 tsp cumin, 2 tsps paprika, 2 tbsps olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 457,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 107,
            "sodium": 384,
            "carbohydrates": 33,
            "fiber": 7,
            "sugar": 22,
            "protein": 24
        }
    },
    "Moroccan Braised Pumpkin Curry With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 207,
            "protein": 39,
            "carbs": 60,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 210 g spaghetti, 160 g lettuce, 1.4 cup kale until crisp-tender. Add 3 tbsps pumpkin and 160 g spinach, 1.4 cup basil, 1 tsp sesame oil. Season with 3 tbsps olive oil, 1 clove garlic, 0.5 cup onion and serve over rice.",
        "ingredients": "3 tbsps pumpkin, 210 g spaghetti, 160 g lettuce, 1.4 cup kale, 160 g spinach, 1.4 cup basil, 1 tsp sesame oil, 2 tsps turmeric, 3 tbsps olive oil, 1 clove garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 207,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 82,
            "sodium": 185,
            "carbohydrates": 60,
            "fiber": 5,
            "sugar": 13,
            "protein": 39
        }
    },
    "Turkish Stir-fried Pumpkin Stew With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 229,
            "protein": 27,
            "carbs": 31,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 piece pumpkin as base. Add 2 pieces bread, 0.8 cup carrot, 220 g cucumber and cook until tender. Incorporate 1.8 cup zucchini, 90 g mint, 3 tbsps lime juice and season with 2 tsps olive oil, 2 cloves garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "1 piece pumpkin, 2 pieces bread, 0.8 cup carrot, 220 g cucumber, 1.8 cup zucchini, 90 g mint, 3 tbsps lime juice, 1 tsp soy sauce, 2 tsps olive oil, 2 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 229,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 80,
            "sodium": 717,
            "carbohydrates": 31,
            "fiber": 11,
            "sugar": 19,
            "protein": 27
        }
    },
    "Korean Grilled Broccoli Congee With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 477,
            "protein": 16,
            "carbs": 71,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 60 g broccoli with water or broth until soft and creamy. Add 2 tsps yogurt, 120 g tomato, 1.1 cup carrot and simmer until vegetables are tender. Season with 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion and serve hot.",
        "ingredients": "60 g broccoli, 2 tsps yogurt, 120 g tomato, 1.1 cup carrot, 140 g cabbage, 120 g rosemary, 2 tbsps vinegar, 1 tsp chili flakes, 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 477,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 96,
            "sodium": 463,
            "carbohydrates": 71,
            "fiber": 5,
            "sugar": 10,
            "protein": 16
        }
    },
    "Greek Stir-fried Lentils Pasta With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 337,
            "protein": 37,
            "carbs": 33,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 60 g lentils as base. Add 1.7 cup spaghetti, 130 g tomato, 1.7 cup lettuce and cook until tender. Incorporate 1.9 cup spinach, 130 g basil, 2 tbsps sesame oil and season with 1 tsp olive oil, 2 cloves garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "60 g lentils, 1.7 cup spaghetti, 130 g tomato, 1.7 cup lettuce, 1.9 cup spinach, 130 g basil, 2 tbsps sesame oil, 3 tbsps soy sauce, 1 tsp olive oil, 2 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 337,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 23,
            "sodium": 802,
            "carbohydrates": 33,
            "fiber": 3,
            "sugar": 21,
            "protein": 37
        }
    },
    "French Grilled Black Beans Toast With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 390,
            "protein": 8,
            "carbs": 80,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1 cup black beans, 2 pieces wrap, 80 g spinach and top with 1.8 cup zucchini, 1 tsp bell pepper, 0.6 cup rosemary. Season with 1 tsp olive oil, 1 clove garlic, 1.4 cup onion and serve.",
        "ingredients": "1 cup black beans, 2 pieces wrap, 80 g spinach, 1.8 cup zucchini, 1 tsp bell pepper, 0.6 cup rosemary, 2 tsps paprika, 2 tsps sesame oil, 1 tsp olive oil, 1 clove garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 390,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 112,
            "sodium": 140,
            "carbohydrates": 80,
            "fiber": 7,
            "sugar": 21,
            "protein": 8
        }
    },
    "Japanese Baked Sweet Potato Salad With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 338,
            "protein": 33,
            "carbs": 29,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.5 cup sweet potato, 110 g couscous, 0.6 cup tomato, 1 cup mushroom in a bowl. Add 1.1 cup spinach, 70 g cilantro, 1 tbsp soy sauce and toss gently. Dress with 1 tsp olive oil, 2 tsps garlic, 1.7 cup onion and serve fresh.",
        "ingredients": "1.5 cup sweet potato, 110 g couscous, 0.6 cup tomato, 1 cup mushroom, 1.1 cup spinach, 70 g cilantro, 1 tbsp soy sauce, 1 tsp paprika, 1 tsp olive oil, 2 tsps garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 338,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 29,
            "sodium": 676,
            "carbohydrates": 29,
            "fiber": 10,
            "sugar": 1,
            "protein": 33
        }
    },
    "American Pan-seared Chickpeas Tacos With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 333,
            "protein": 29,
            "carbs": 32,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g chickpeas as base. Add 1 tsp yogurt, 210 g carrot, 60 g mushroom and cook until tender. Incorporate 60 g zucchini, 1.1 cup rosemary, 2 tbsps sesame oil and season with 2 tsps olive oil, 1 clove garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "110 g chickpeas, 1 tsp yogurt, 210 g carrot, 60 g mushroom, 60 g zucchini, 1.1 cup rosemary, 2 tbsps sesame oil, 2 tsps soy sauce, 2 tsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 333,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 25,
            "sodium": 851,
            "carbohydrates": 32,
            "fiber": 13,
            "sugar": 13,
            "protein": 29
        }
    },
    "Thai Braised Quinoa Tacos With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 386,
            "protein": 4,
            "carbs": 28,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 210 g quinoa as base. Add 0.8 cup couscous, 2 tsps bell pepper, 220 g carrot and cook until tender. Incorporate 60 g broccoli, 100 g mint, 1 tbsp lemon juice and season with 2 tsps olive oil, 3 cloves garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "210 g quinoa, 0.8 cup couscous, 2 tsps bell pepper, 220 g carrot, 60 g broccoli, 100 g mint, 1 tbsp lemon juice, 1 tsp paprika, 2 tsps olive oil, 3 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 386,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 74,
            "sodium": 280,
            "carbohydrates": 28,
            "fiber": 10,
            "sugar": 21,
            "protein": 4
        }
    },
    "American Baked Broccoli Sandwich With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 515,
            "protein": 42,
            "carbs": 40,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 230 g broccoli, 1.9 cup quinoa, 2 tsps bell pepper and top with 0.7 cup lettuce, 1.3 cup zucchini, 0.9 cup cilantro. Season with 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion and serve.",
        "ingredients": "230 g broccoli, 1.9 cup quinoa, 2 tsps bell pepper, 0.7 cup lettuce, 1.3 cup zucchini, 0.9 cup cilantro, 2 tsps ginger, 1 tsp sesame oil, 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 515,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 90,
            "sodium": 247,
            "carbohydrates": 40,
            "fiber": 13,
            "sugar": 15,
            "protein": 42
        }
    },
    "Thai Braised Tempeh Risotto With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 524,
            "protein": 27,
            "carbs": 37,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 180 g tempeh as base. Add 1.7 cup bulgur, 100 g pea, 1 cup cucumber and cook until tender. Incorporate 1.3 cup mushroom, 210 g dill, 3 tbsps lemon juice and season with 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "180 g tempeh, 1.7 cup bulgur, 100 g pea, 1 cup cucumber, 1.3 cup mushroom, 210 g dill, 3 tbsps lemon juice, 2 tsps chili flakes, 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 524,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 46,
            "sodium": 651,
            "carbohydrates": 37,
            "fiber": 13,
            "sugar": 2,
            "protein": 27
        }
    },
    "Korean Smoky Lentils Wrap With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 224,
            "protein": 17,
            "carbs": 61,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.3 cup lentils, 120 g soba, 80 g pea, 0.8 cup kale. Add 80 g cucumber, 1.7 cup rosemary, 1.3 cup curry paste and roll tightly. Serve with 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion on the side.",
        "ingredients": "1.3 cup lentils, 120 g soba, 80 g pea, 0.8 cup kale, 80 g cucumber, 1.7 cup rosemary, 1.3 cup curry paste, 2 tsps turmeric, 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 224,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 81,
            "sodium": 587,
            "carbohydrates": 61,
            "fiber": 7,
            "sugar": 14,
            "protein": 17
        }
    },
    "American Grilled Broccoli Stir-fry With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 314,
            "protein": 9,
            "carbs": 9,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.6 cup broccoli as base. Add 1 piece bread, 1 tsp bell pepper, 90 g cabbage and cook until tender. Incorporate 190 g rosemary, 2 tsps paprika, 3 tbsps soy sauce and season with 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1.6 cup broccoli, 1 piece bread, 1 tsp bell pepper, 90 g cabbage, 190 g rosemary, 2 tsps paprika, 3 tbsps soy sauce, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 314,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 26,
            "sodium": 727,
            "carbohydrates": 9,
            "fiber": 15,
            "sugar": 15,
            "protein": 9
        }
    },
    "Italian Pan-seared Mushrooms Pasta With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 259,
            "protein": 27,
            "carbs": 71,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 200 g mushrooms as base. Add 0.6 cup bulgur, 1.1 cup carrot, 0.5 cup tomato and cook until tender. Incorporate 2 cup pea, 0.7 cup dill, 2 tsps lemon juice and season with 2 tsps olive oil, 2 tsps garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "200 g mushrooms, 0.6 cup bulgur, 1.1 cup carrot, 0.5 cup tomato, 2 cup pea, 0.7 cup dill, 2 tsps lemon juice, 1 clove ginger, 2 tsps olive oil, 2 tsps garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 259,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 112,
            "sodium": 282,
            "carbohydrates": 71,
            "fiber": 12,
            "sugar": 18,
            "protein": 27
        }
    },
    "Mexican Pan-seared Zucchini Bowl With Coconut-lime Rice": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 523,
            "protein": 42,
            "carbs": 49,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.4 cup zucchini, 2 pieces wrap, 0.7 cup kale with liquid until smooth. Top with 70 g pea, 1.9 cup basil, 2 tsps chili flakes and garnish with 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "1.4 cup zucchini, 2 pieces wrap, 0.7 cup kale, 70 g pea, 1.9 cup basil, 2 tsps chili flakes, 1 tsp lime juice, 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 523,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 52,
            "sodium": 432,
            "carbohydrates": 49,
            "fiber": 5,
            "sugar": 20,
            "protein": 42
        }
    },
    "Spanish Braised Lentils Soup With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 642,
            "protein": 28,
            "carbs": 82,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece bread, 1.7 cup zucchini, 1.7 cup mushroom in oil until softened. Add broth and 140 g lentils, simmer until tender. Season with 3 tbsps olive oil, 1 tsp garlic, 0.6 cup onion and serve hot.",
        "ingredients": "140 g lentils, 1 piece bread, 1.7 cup zucchini, 1.7 cup mushroom, 1 cup broccoli, 1.8 cup rosemary, 1 tsp sesame oil, 3 tbsps lime juice, 3 tbsps olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 642,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 93,
            "sodium": 781,
            "carbohydrates": 82,
            "fiber": 4,
            "sugar": 5,
            "protein": 28
        }
    },
    "Mexican Roasted Cauliflower Curry With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 562,
            "protein": 10,
            "carbs": 32,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 3 tbsps yogurt, 1.6 cup kale, 1.9 cup spinach until crisp-tender. Add 2 tbsps cauliflower and 1.3 cup corn, 240 g dill, 2 tsps cumin. Season with 3 tbsps olive oil, 2 tsps garlic, 0.8 cup onion and serve over rice.",
        "ingredients": "2 tbsps cauliflower, 3 tbsps yogurt, 1.6 cup kale, 1.9 cup spinach, 1.3 cup corn, 240 g dill, 2 tsps cumin, 2 tbsps curry paste, 3 tbsps olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 562,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 15,
            "sodium": 374,
            "carbohydrates": 32,
            "fiber": 1,
            "sugar": 2,
            "protein": 10
        }
    },
    "Japanese Grilled Tempeh Rice With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 269,
            "protein": 17,
            "carbs": 70,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup tempeh as base. Add 0.5 cup spaghetti, 1 tsp bell pepper, 190 g cucumber and cook until tender. Incorporate 100 g pea, 0.8 cup mint, 1 tsp vinegar and season with 1 tbsp olive oil, 2 tsps garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "0.8 cup tempeh, 0.5 cup spaghetti, 1 tsp bell pepper, 190 g cucumber, 100 g pea, 0.8 cup mint, 1 tsp vinegar, 2 tsps chili flakes, 1 tbsp olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 269,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 1,
            "sodium": 327,
            "carbohydrates": 70,
            "fiber": 8,
            "sugar": 10,
            "protein": 17
        }
    },
    "Spanish Poached Seitan Skewers With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 306,
            "protein": 12,
            "carbs": 41,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.9 cup seitan as base. Add 1 tsp yogurt, 210 g broccoli, 1 tsp bell pepper and cook until tender. Incorporate 180 g cucumber, 1.4 cup dill, 2 tsps soy sauce and season with 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "0.9 cup seitan, 1 tsp yogurt, 210 g broccoli, 1 tsp bell pepper, 180 g cucumber, 1.4 cup dill, 2 tsps soy sauce, 2 tsps chili flakes, 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 306,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 66,
            "sodium": 702,
            "carbohydrates": 41,
            "fiber": 11,
            "sugar": 6,
            "protein": 12
        }
    },
    "Thai Poached Lentils Risotto With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 439,
            "protein": 37,
            "carbs": 48,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.8 cup lentils as base. Add 1 piece wrap, 240 g spinach, 1.4 cup carrot and cook until tender. Incorporate 80 g cucumber, 70 g mint, 2 tsps vinegar and season with 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.8 cup lentils, 1 piece wrap, 240 g spinach, 1.4 cup carrot, 80 g cucumber, 70 g mint, 2 tsps vinegar, 2 tsps paprika, 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 439,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 18,
            "sodium": 353,
            "carbohydrates": 48,
            "fiber": 1,
            "sugar": 2,
            "protein": 37
        }
    },
    "French Grilled Sweet Potato Curry With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 440,
            "protein": 13,
            "carbs": 35,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 230 g spaghetti, 220 g cabbage, 200 g zucchini until crisp-tender. Add 170 g sweet potato and 230 g corn, 1.7 cup basil, 2 tbsps lemon juice. Season with 2 tsps olive oil, 3 cloves garlic, 1.2 cup onion and serve over rice.",
        "ingredients": "170 g sweet potato, 230 g spaghetti, 220 g cabbage, 200 g zucchini, 230 g corn, 1.7 cup basil, 2 tbsps lemon juice, 1 tsp ginger, 2 tsps olive oil, 3 cloves garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 440,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 71,
            "sodium": 118,
            "carbohydrates": 35,
            "fiber": 3,
            "sugar": 20,
            "protein": 13
        }
    },
    "Turkish Marinated Pumpkin Soup With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 507,
            "protein": 35,
            "carbs": 69,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.8 cup noodles, 1.9 cup broccoli, 2 tsps bell pepper in oil until softened. Add broth and 1 piece pumpkin, simmer until tender. Season with 2 tbsps olive oil, 2 tsps garlic, 1.1 cup onion and serve hot.",
        "ingredients": "1 piece pumpkin, 1.8 cup noodles, 1.9 cup broccoli, 2 tsps bell pepper, 130 g mushroom, 1.3 cup basil, 1 tbsp sesame oil, 3 tbsps lime juice, 2 tbsps olive oil, 2 tsps garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 507,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 39,
            "sodium": 682,
            "carbohydrates": 69,
            "fiber": 7,
            "sugar": 16,
            "protein": 35
        }
    },
    "Korean Grilled Tempeh Pasta With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 266,
            "protein": 32,
            "carbs": 37,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 90 g tempeh as base. Add 60 g udon, 220 g carrot, 1.1 cup tomato and cook until tender. Incorporate 80 g cucumber, 1 cup thyme, 2 tbsps soy sauce and season with 2 tsps olive oil, 2 tsps garlic, 1 cup onion. Serve hot.",
        "ingredients": "90 g tempeh, 60 g udon, 220 g carrot, 1.1 cup tomato, 80 g cucumber, 1 cup thyme, 2 tbsps soy sauce, 1 tbsp lime juice, 2 tsps olive oil, 2 tsps garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 266,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 10,
            "sodium": 619,
            "carbohydrates": 37,
            "fiber": 9,
            "sugar": 22,
            "protein": 32
        }
    },
    "Italian Glazed Chickpeas Soup With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 408,
            "protein": 13,
            "carbs": 8,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces bread, 0.9 cup mushroom, 240 g broccoli in oil until softened. Add broth and 140 g chickpeas, simmer until tender. Season with 1 tbsp olive oil, 1 clove garlic, 0.9 cup onion and serve hot.",
        "ingredients": "140 g chickpeas, 2 pieces bread, 0.9 cup mushroom, 240 g broccoli, 100 g spinach, 1.1 cup mint, 2 tsps lime juice, 1 tsp paprika, 1 tbsp olive oil, 1 clove garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 408,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 61,
            "sodium": 618,
            "carbohydrates": 8,
            "fiber": 3,
            "sugar": 12,
            "protein": 13
        }
    },
    "Japanese Stir-fried Quinoa Porridge With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 604,
            "protein": 19,
            "carbs": 57,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 230 g quinoa with water or broth until soft and creamy. Add 0.9 cup udon, 1.8 cup kale, 1 cup pea and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion and serve hot.",
        "ingredients": "230 g quinoa, 0.9 cup udon, 1.8 cup kale, 1 cup pea, 150 g carrot, 220 g thyme, 1 tsp paprika, 2 tsps sesame oil, 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 604,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 110,
            "sodium": 406,
            "carbohydrates": 57,
            "fiber": 9,
            "sugar": 1,
            "protein": 19
        }
    },
    "Turkish Smoky Cauliflower Porridge With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 340,
            "protein": 33,
            "carbs": 76,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.6 cup cauliflower with water or broth until soft and creamy. Add 0.9 cup noodles, 1.4 cup lettuce, 0.6 cup kale and simmer until vegetables are tender. Season with 1 tsp olive oil, 3 cloves garlic, 1.4 cup onion and serve hot.",
        "ingredients": "0.6 cup cauliflower, 0.9 cup noodles, 1.4 cup lettuce, 0.6 cup kale, 230 g broccoli, 210 g thyme, 2 tsps chili flakes, 1 tsp cumin, 1 tsp olive oil, 3 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 340,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 97,
            "sodium": 782,
            "carbohydrates": 76,
            "fiber": 14,
            "sugar": 10,
            "protein": 33
        }
    },
    "Moroccan Crispy Broccoli Omelette With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 502,
            "protein": 36,
            "carbs": 50,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tsps yogurt, 0.9 cup tomato, 1 tsp bell pepper until softened. Add beaten eggs and 0.5 cup broccoli if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "0.5 cup broccoli, 2 tsps yogurt, 0.9 cup tomato, 1 tsp bell pepper, 1.4 cup kale, 200 g parsley, 1 tsp vinegar, 1 tsp ginger, 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 502,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 116,
            "sodium": 758,
            "carbohydrates": 50,
            "fiber": 14,
            "sugar": 21,
            "protein": 36
        }
    },
    "Korean Crispy Seitan Porridge With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 154,
            "protein": 38,
            "carbs": 42,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 90 g seitan with water or broth until soft and creamy. Add 1.2 cup rice, 1.1 cup cucumber, 1.9 cup spinach and simmer until vegetables are tender. Season with 3 tbsps olive oil, 2 cloves garlic, 3 tbsps onion and serve hot.",
        "ingredients": "90 g seitan, 1.2 cup rice, 1.1 cup cucumber, 1.9 cup spinach, 170 g kale, 170 g parsley, 1 tsp paprika, 1 tsp chili flakes, 3 tbsps olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 154,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 25,
            "sodium": 453,
            "carbohydrates": 42,
            "fiber": 9,
            "sugar": 21,
            "protein": 38
        }
    },
    "Middle Eastern Stir-fried Quinoa Tacos With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 369,
            "protein": 13,
            "carbs": 65,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g quinoa as base. Add 220 g rice, 120 g cabbage, 2 tsps bell pepper and cook until tender. Incorporate 1 cup spinach, 60 g dill, 2 tbsps lime juice and season with 2 tbsps olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "220 g quinoa, 220 g rice, 120 g cabbage, 2 tsps bell pepper, 1 cup spinach, 60 g dill, 2 tbsps lime juice, 2 tsps turmeric, 2 tbsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 369,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 48,
            "sodium": 817,
            "carbohydrates": 65,
            "fiber": 7,
            "sugar": 22,
            "protein": 13
        }
    },
    "Turkish Baked Seitan Salad With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 163,
            "protein": 26,
            "carbs": 44,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 210 g seitan, 2 tbsps yogurt, 200 g zucchini, 220 g cucumber in a bowl. Add 70 g carrot, 1.7 cup dill, 3 tbsps vinegar and toss gently. Dress with 2 tsps olive oil, 2 tsps garlic, 1.9 cup onion and serve fresh.",
        "ingredients": "210 g seitan, 2 tbsps yogurt, 200 g zucchini, 220 g cucumber, 70 g carrot, 1.7 cup dill, 3 tbsps vinegar, 2 tbsps soy sauce, 2 tsps olive oil, 2 tsps garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 163,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 107,
            "sodium": 616,
            "carbohydrates": 44,
            "fiber": 12,
            "sugar": 13,
            "protein": 26
        }
    },
    "Greek Baked Eggplant Curry With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 519,
            "protein": 39,
            "carbs": 54,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1 piece tortilla, 1.4 cup mushroom, 90 g tomato until crisp-tender. Add 1.7 cup eggplant and 1.9 cup broccoli, 240 g basil, 2 tsps cumin. Season with 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion and serve over rice.",
        "ingredients": "1.7 cup eggplant, 1 piece tortilla, 1.4 cup mushroom, 90 g tomato, 1.9 cup broccoli, 240 g basil, 2 tsps cumin, 1 tbsp sesame oil, 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 519,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 79,
            "sodium": 404,
            "carbohydrates": 54,
            "fiber": 3,
            "sugar": 21,
            "protein": 39
        }
    },
    "American Marinated Lentils Rice With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 519,
            "protein": 19,
            "carbs": 46,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g lentils as base. Add 80 g rice, 0.9 cup lettuce, 220 g broccoli and cook until tender. Incorporate 140 g mushroom, 1.2 cup basil, 2 tsps cumin and season with 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "110 g lentils, 80 g rice, 0.9 cup lettuce, 220 g broccoli, 140 g mushroom, 1.2 cup basil, 2 tsps cumin, 2 tsps curry paste, 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 519,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 48,
            "sodium": 482,
            "carbohydrates": 46,
            "fiber": 12,
            "sugar": 8,
            "protein": 19
        }
    },
    "Vietnamese Braised Lentils Soup With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 590,
            "protein": 29,
            "carbs": 30,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 110 g spaghetti, 1 cup zucchini, 110 g pea in oil until softened. Add broth and 1.6 cup lentils, simmer until tender. Season with 1 tsp olive oil, 1 tsp garlic, 1.3 cup onion and serve hot.",
        "ingredients": "1.6 cup lentils, 110 g spaghetti, 1 cup zucchini, 110 g pea, 1.6 cup cabbage, 180 g parsley, 1 tsp chili flakes, 2 tbsps sesame oil, 1 tsp olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 590,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 85,
            "sodium": 377,
            "carbohydrates": 30,
            "fiber": 12,
            "sugar": 17,
            "protein": 29
        }
    },
    "Chinese Poached Seitan Congee With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 414,
            "protein": 14,
            "carbs": 84,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 130 g seitan with water or broth until soft and creamy. Add 1.3 cup noodles, 90 g cucumber, 2 tsps bell pepper and simmer until vegetables are tender. Season with 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion and serve hot.",
        "ingredients": "130 g seitan, 1.3 cup noodles, 90 g cucumber, 2 tsps bell pepper, 0.9 cup zucchini, 220 g mint, 2 tsps cumin, 1 tbsp sesame oil, 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 414,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 14,
            "sodium": 701,
            "carbohydrates": 84,
            "fiber": 14,
            "sugar": 20,
            "protein": 14
        }
    },
    "Japanese Crispy Sweet Potato Curry With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 326,
            "protein": 26,
            "carbs": 21,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 2 pieces tortilla, 220 g lettuce, 80 g mushroom until crisp-tender. Add 60 g sweet potato and 0.7 cup kale, 0.6 cup basil, 2 tsps chili flakes. Season with 2 tsps olive oil, 2 cloves garlic, 1.2 cup onion and serve over rice.",
        "ingredients": "60 g sweet potato, 2 pieces tortilla, 220 g lettuce, 80 g mushroom, 0.7 cup kale, 0.6 cup basil, 2 tsps chili flakes, 3 cloves ginger, 2 tsps olive oil, 2 cloves garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 326,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 16,
            "sodium": 835,
            "carbohydrates": 21,
            "fiber": 6,
            "sugar": 22,
            "protein": 26
        }
    },
    "Turkish Glazed Eggplant Skewers With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 201,
            "protein": 44,
            "carbs": 9,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 3 tbsps eggplant as base. Add 1 cup spaghetti, 2 tsps bell pepper, 140 g cabbage and cook until tender. Incorporate 1.5 cup pea, 230 g parsley, 1 tsp turmeric and season with 1 tsp olive oil, 3 cloves garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "3 tbsps eggplant, 1 cup spaghetti, 2 tsps bell pepper, 140 g cabbage, 1.5 cup pea, 230 g parsley, 1 tsp turmeric, 1 tsp cumin, 1 tsp olive oil, 3 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 201,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 30,
            "sodium": 381,
            "carbohydrates": 9,
            "fiber": 3,
            "sugar": 6,
            "protein": 44
        }
    },
    "Indian Crispy Sweet Potato Congee With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 468,
            "protein": 42,
            "carbs": 48,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 150 g sweet potato with water or broth until soft and creamy. Add 1 piece wrap, 0.9 cup broccoli, 200 g pea and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion and serve hot.",
        "ingredients": "150 g sweet potato, 1 piece wrap, 0.9 cup broccoli, 200 g pea, 1.1 cup corn, 230 g mint, 2 tbsps curry paste, 1 tsp cumin, 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 468,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 106,
            "sodium": 68,
            "carbohydrates": 48,
            "fiber": 10,
            "sugar": 6,
            "protein": 42
        }
    },
    "Chinese Grilled Zucchini Risotto With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 562,
            "protein": 9,
            "carbs": 47,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 240 g zucchini as base. Add 140 g rice, 80 g corn, 110 g carrot and cook until tender. Incorporate 140 g broccoli, 160 g cilantro, 1 tsp lime juice and season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "240 g zucchini, 140 g rice, 80 g corn, 110 g carrot, 140 g broccoli, 160 g cilantro, 1 tsp lime juice, 0.5 cup curry paste, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 562,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 60,
            "sodium": 720,
            "carbohydrates": 47,
            "fiber": 2,
            "sugar": 12,
            "protein": 9
        }
    },
    "Chinese Crispy Paneer Congee With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 201,
            "protein": 3,
            "carbs": 49,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 180 g paneer with water or broth until soft and creamy. Add 230 g couscous, 140 g lettuce, 1.3 cup zucchini and simmer until vegetables are tender. Season with 1 tsp olive oil, 2 cloves garlic, 1.3 cup onion and serve hot.",
        "ingredients": "180 g paneer, 230 g couscous, 140 g lettuce, 1.3 cup zucchini, 1.8 cup cabbage, 0.7 cup mint, 2 tsps turmeric, 1 tsp ginger, 1 tsp olive oil, 2 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 201,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 80,
            "sodium": 536,
            "carbohydrates": 49,
            "fiber": 11,
            "sugar": 20,
            "protein": 3
        }
    },
    "Chinese Crispy Halloumi Stew With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 486,
            "protein": 45,
            "carbs": 11,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g halloumi as base. Add 190 g soba, 1.2 cup cucumber, 70 g carrot and cook until tender. Incorporate 1.8 cup tomato, 210 g dill, 1 tsp soy sauce and season with 1 tbsp olive oil, 1 clove garlic, 1.3 cup onion. Serve hot.",
        "ingredients": "110 g halloumi, 190 g soba, 1.2 cup cucumber, 70 g carrot, 1.8 cup tomato, 210 g dill, 1 tsp soy sauce, 3 tbsps lime juice, 1 tbsp olive oil, 1 clove garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 486,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 113,
            "sodium": 293,
            "carbohydrates": 11,
            "fiber": 3,
            "sugar": 11,
            "protein": 45
        }
    },
    "French Stir-fried Sweet Potato Toast With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 514,
            "protein": 6,
            "carbs": 9,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 180 g sweet potato, 0.6 cup noodles, 0.5 cup spinach and top with 0.6 cup broccoli, 170 g tomato, 220 g rosemary. Season with 2 tbsps olive oil, 1 tsp garlic, 1.7 cup onion and serve.",
        "ingredients": "180 g sweet potato, 0.6 cup noodles, 0.5 cup spinach, 0.6 cup broccoli, 170 g tomato, 220 g rosemary, 2 tsps paprika, 2 tsps vinegar, 2 tbsps olive oil, 1 tsp garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 514,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 109,
            "sodium": 604,
            "carbohydrates": 9,
            "fiber": 14,
            "sugar": 19,
            "protein": 6
        }
    },
    "Korean Pan-seared Tempeh Stew With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 405,
            "protein": 18,
            "carbs": 32,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g tempeh as base. Add 1.2 cup noodles, 190 g mushroom, 220 g cabbage and cook until tender. Incorporate 190 g carrot, 100 g parsley, 2 tsps turmeric and season with 1 tsp olive oil, 3 cloves garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "100 g tempeh, 1.2 cup noodles, 190 g mushroom, 220 g cabbage, 190 g carrot, 100 g parsley, 2 tsps turmeric, 2 tsps lemon juice, 1 tsp olive oil, 3 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 405,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 86,
            "sodium": 688,
            "carbohydrates": 32,
            "fiber": 4,
            "sugar": 13,
            "protein": 18
        }
    },
    "Spanish Poached Quinoa Bowl With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 151,
            "protein": 41,
            "carbs": 76,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 240 g quinoa, 0.6 cup potato, 0.6 cup pea with liquid until smooth. Top with 90 g broccoli, 1 tsp bell pepper, 1.2 cup parsley and garnish with 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "240 g quinoa, 0.6 cup potato, 0.6 cup pea, 90 g broccoli, 1 tsp bell pepper, 1.2 cup parsley, 2 pieces curry paste, 2 tsps lime juice, 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 151,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 76,
            "sodium": 82,
            "carbohydrates": 76,
            "fiber": 3,
            "sugar": 3,
            "protein": 41
        }
    },
    "Vietnamese Grilled Mushrooms Tacos With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 325,
            "protein": 34,
            "carbs": 45,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 tsps mushrooms as base. Add 1 piece bread, 80 g cabbage, 230 g broccoli and cook until tender. Incorporate 210 g mushroom, 90 g parsley, 2 cloves ginger and season with 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "2 tsps mushrooms, 1 piece bread, 80 g cabbage, 230 g broccoli, 210 g mushroom, 90 g parsley, 2 cloves ginger, 2 tsps paprika, 2 tsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 325,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 115,
            "sodium": 746,
            "carbohydrates": 45,
            "fiber": 1,
            "sugar": 20,
            "protein": 34
        }
    },
    "Korean Braised Sweet Potato Tacos With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 171,
            "protein": 32,
            "carbs": 61,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 70 g sweet potato as base. Add 2 pieces tortilla, 90 g carrot, 200 g spinach and cook until tender. Incorporate 1.3 cup pea, 110 g dill, 1 tsp paprika and season with 3 tbsps olive oil, 2 cloves garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "70 g sweet potato, 2 pieces tortilla, 90 g carrot, 200 g spinach, 1.3 cup pea, 110 g dill, 1 tsp paprika, 2 tsps lime juice, 3 tbsps olive oil, 2 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 171,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 91,
            "sodium": 736,
            "carbohydrates": 61,
            "fiber": 13,
            "sugar": 10,
            "protein": 32
        }
    },
    "Italian Roasted Broccoli Stew With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 180,
            "protein": 18,
            "carbs": 79,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g broccoli as base. Add 1 tbsp yogurt, 200 g zucchini, 160 g mushroom and cook until tender. Incorporate 1.2 cup lettuce, 190 g rosemary, 3 tbsps lemon juice and season with 1 tbsp olive oil, 1 clove garlic, 0.5 cup onion. Serve hot.",
        "ingredients": "160 g broccoli, 1 tbsp yogurt, 200 g zucchini, 160 g mushroom, 1.2 cup lettuce, 190 g rosemary, 3 tbsps lemon juice, 1 tsp ginger, 1 tbsp olive oil, 1 clove garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 180,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 48,
            "sodium": 594,
            "carbohydrates": 79,
            "fiber": 13,
            "sugar": 15,
            "protein": 18
        }
    },
    "French Glazed Cauliflower Curry With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 619,
            "protein": 37,
            "carbs": 15,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 180 g soba, 1.6 cup tomato, 160 g spinach until crisp-tender. Add 1.3 cup cauliflower and 2 tsps bell pepper, 1.8 cup parsley, 1 tsp ginger. Season with 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion and serve over rice.",
        "ingredients": "1.3 cup cauliflower, 180 g soba, 1.6 cup tomato, 160 g spinach, 2 tsps bell pepper, 1.8 cup parsley, 1 tsp ginger, 1 tsp lime juice, 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 619,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 101,
            "sodium": 325,
            "carbohydrates": 15,
            "fiber": 2,
            "sugar": 9,
            "protein": 37
        }
    },
    "Turkish Glazed Eggplant Risotto With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 515,
            "protein": 24,
            "carbs": 29,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tsp eggplant as base. Add 1 piece bread, 70 g mushroom, 1.8 cup lettuce and cook until tender. Incorporate 1 tsp bell pepper, 230 g basil, 2 tbsps vinegar and season with 2 tbsps olive oil, 3 cloves garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "1 tsp eggplant, 1 piece bread, 70 g mushroom, 1.8 cup lettuce, 1 tsp bell pepper, 230 g basil, 2 tbsps vinegar, 1 piece curry paste, 2 tbsps olive oil, 3 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 515,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 66,
            "sodium": 549,
            "carbohydrates": 29,
            "fiber": 5,
            "sugar": 5,
            "protein": 24
        }
    },
    "Vietnamese Grilled Cauliflower Salad With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 295,
            "protein": 30,
            "carbs": 54,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 2 tsps cauliflower, 240 g couscous, 1.4 cup kale, 2 tsps bell pepper in a bowl. Add 1.5 cup spinach, 120 g dill, 2 tsps soy sauce and toss gently. Dress with 3 tbsps olive oil, 2 tsps garlic, 1.8 cup onion and serve fresh.",
        "ingredients": "2 tsps cauliflower, 240 g couscous, 1.4 cup kale, 2 tsps bell pepper, 1.5 cup spinach, 120 g dill, 2 tsps soy sauce, 1 tsp chili flakes, 3 tbsps olive oil, 2 tsps garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 295,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 84,
            "sodium": 412,
            "carbohydrates": 54,
            "fiber": 15,
            "sugar": 18,
            "protein": 30
        }
    },
    "Italian Smoky Pumpkin Rice With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 577,
            "protein": 26,
            "carbs": 73,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.6 cup pumpkin as base. Add 1 piece bread, 1.8 cup carrot, 1.1 cup kale and cook until tender. Incorporate 1.8 cup corn, 100 g mint, 1 tsp ginger and season with 1 tbsp olive oil, 3 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1.6 cup pumpkin, 1 piece bread, 1.8 cup carrot, 1.1 cup kale, 1.8 cup corn, 100 g mint, 1 tsp ginger, 2 tsps turmeric, 1 tbsp olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 577,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 35,
            "sodium": 173,
            "carbohydrates": 73,
            "fiber": 13,
            "sugar": 11,
            "protein": 26
        }
    },
    "Thai Poached Broccoli Noodles With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 219,
            "protein": 31,
            "carbs": 78,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 cup broccoli as base. Add 110 g rice, 120 g cabbage, 200 g kale and cook until tender. Incorporate 170 g carrot, 80 g cilantro, 1 tsp soy sauce and season with 2 tsps olive oil, 2 tsps garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "1 cup broccoli, 110 g rice, 120 g cabbage, 200 g kale, 170 g carrot, 80 g cilantro, 1 tsp soy sauce, 1 tsp chili flakes, 2 tsps olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 219,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 43,
            "sodium": 874,
            "carbohydrates": 78,
            "fiber": 2,
            "sugar": 1,
            "protein": 31
        }
    },
    "Greek Braised Seitan Sandwich With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 410,
            "protein": 12,
            "carbs": 41,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 180 g seitan, 2 pieces wrap, 230 g cucumber and top with 210 g carrot, 240 g cabbage, 110 g dill. Season with 2 tsps olive oil, 3 cloves garlic, 1.8 cup onion and serve.",
        "ingredients": "180 g seitan, 2 pieces wrap, 230 g cucumber, 210 g carrot, 240 g cabbage, 110 g dill, 0.7 cup curry paste, 1 tsp chili flakes, 2 tsps olive oil, 3 cloves garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 410,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 75,
            "sodium": 280,
            "carbohydrates": 41,
            "fiber": 6,
            "sugar": 15,
            "protein": 12
        }
    },
    "Greek Marinated Sweet Potato Stir-fry With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 625,
            "protein": 24,
            "carbs": 22,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.8 cup sweet potato as base. Add 1 tsp yogurt, 2 cup cucumber, 160 g broccoli and cook until tender. Incorporate 1.2 cup kale, 190 g mint, 1 tsp vinegar and season with 2 tsps olive oil, 1 clove garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.8 cup sweet potato, 1 tsp yogurt, 2 cup cucumber, 160 g broccoli, 1.2 cup kale, 190 g mint, 1 tsp vinegar, 2 tsps cumin, 2 tsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 625,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 98,
            "sodium": 372,
            "carbohydrates": 22,
            "fiber": 8,
            "sugar": 15,
            "protein": 24
        }
    },
    "Indian Baked Tempeh Rice With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 234,
            "protein": 5,
            "carbs": 22,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g tempeh as base. Add 1.3 cup udon, 1.4 cup corn, 2 tsps bell pepper and cook until tender. Incorporate 60 g cucumber, 210 g rosemary, 2 tsps soy sauce and season with 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "170 g tempeh, 1.3 cup udon, 1.4 cup corn, 2 tsps bell pepper, 60 g cucumber, 210 g rosemary, 2 tsps soy sauce, 2 tbsps vinegar, 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 234,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 74,
            "sodium": 201,
            "carbohydrates": 22,
            "fiber": 5,
            "sugar": 11,
            "protein": 5
        }
    },
    "Spanish Braised Pumpkin Tacos With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 625,
            "protein": 10,
            "carbs": 30,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tsp pumpkin as base. Add 2 pieces wrap, 190 g cabbage, 80 g spinach and cook until tender. Incorporate 1.8 cup broccoli, 60 g mint, 2 tsps cumin and season with 1 tsp olive oil, 3 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1 tsp pumpkin, 2 pieces wrap, 190 g cabbage, 80 g spinach, 1.8 cup broccoli, 60 g mint, 2 tsps cumin, 2 tbsps vinegar, 1 tsp olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 625,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 13,
            "sodium": 586,
            "carbohydrates": 30,
            "fiber": 12,
            "sugar": 20,
            "protein": 10
        }
    },
    "Japanese Baked Seitan Tacos With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 425,
            "protein": 28,
            "carbs": 74,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g seitan as base. Add 1.5 cup spaghetti, 0.7 cup corn, 140 g mushroom and cook until tender. Incorporate 0.6 cup kale, 1.7 cup parsley, 2 tsps cumin and season with 3 tbsps olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "220 g seitan, 1.5 cup spaghetti, 0.7 cup corn, 140 g mushroom, 0.6 cup kale, 1.7 cup parsley, 2 tsps cumin, 2 tsps paprika, 3 tbsps olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 425,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 98,
            "sodium": 603,
            "carbohydrates": 74,
            "fiber": 11,
            "sugar": 18,
            "protein": 28
        }
    },
    "Thai Pan-seared Pumpkin Curry With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 569,
            "protein": 8,
            "carbs": 54,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1 piece tortilla, 0.6 cup zucchini, 0.6 cup mushroom until crisp-tender. Add 2 tsps pumpkin and 180 g cucumber, 1.3 cup dill, 2 tsps vinegar. Season with 3 tbsps olive oil, 1 clove garlic, 1.9 cup onion and serve over rice.",
        "ingredients": "2 tsps pumpkin, 1 piece tortilla, 0.6 cup zucchini, 0.6 cup mushroom, 180 g cucumber, 1.3 cup dill, 2 tsps vinegar, 1.3 cup curry paste, 3 tbsps olive oil, 1 clove garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 569,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 15,
            "sodium": 123,
            "carbohydrates": 54,
            "fiber": 10,
            "sugar": 15,
            "protein": 8
        }
    },
    "Vietnamese Crispy Lentils Curry With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 549,
            "protein": 27,
            "carbs": 25,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.6 cup noodles, 170 g broccoli, 1.3 cup carrot until crisp-tender. Add 130 g lentils and 170 g cabbage, 210 g rosemary, 1 tsp sesame oil. Season with 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion and serve over rice.",
        "ingredients": "130 g lentils, 1.6 cup noodles, 170 g broccoli, 1.3 cup carrot, 170 g cabbage, 210 g rosemary, 1 tsp sesame oil, 1 tsp curry paste, 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 549,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 24,
            "sodium": 82,
            "carbohydrates": 25,
            "fiber": 4,
            "sugar": 16,
            "protein": 27
        }
    },
    "Italian Marinated Quinoa Curry With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 537,
            "protein": 27,
            "carbs": 58,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 100 g rice, 1.4 cup lettuce, 180 g pea until crisp-tender. Add 60 g quinoa and 130 g carrot, 1.9 cup thyme, 1 tsp soy sauce. Season with 1 tbsp olive oil, 3 cloves garlic, 1.2 cup onion and serve over rice.",
        "ingredients": "60 g quinoa, 100 g rice, 1.4 cup lettuce, 180 g pea, 130 g carrot, 1.9 cup thyme, 1 tsp soy sauce, 2 tsps vinegar, 1 tbsp olive oil, 3 cloves garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 537,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 10,
            "sodium": 626,
            "carbohydrates": 58,
            "fiber": 9,
            "sugar": 13,
            "protein": 27
        }
    },
    "Chinese Pan-seared Halloumi Wrap With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 397,
            "protein": 40,
            "carbs": 72,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.3 cup halloumi, 220 g oats, 160 g broccoli, 120 g tomato. Add 1.9 cup kale, 0.7 cup basil, 2 tsps sesame oil and roll tightly. Serve with 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion on the side.",
        "ingredients": "1.3 cup halloumi, 220 g oats, 160 g broccoli, 120 g tomato, 1.9 cup kale, 0.7 cup basil, 2 tsps sesame oil, 2 tsps lime juice, 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 397,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 15,
            "sodium": 244,
            "carbohydrates": 72,
            "fiber": 10,
            "sugar": 9,
            "protein": 40
        }
    },
    "Thai Stir-fried Quinoa Noodles With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 322,
            "protein": 24,
            "carbs": 79,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.6 cup quinoa as base. Add 0.6 cup soba, 1.3 cup lettuce, 1.7 cup zucchini and cook until tender. Incorporate 0.9 cup corn, 100 g thyme, 2 tbsps soy sauce and season with 1 tbsp olive oil, 3 cloves garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "0.6 cup quinoa, 0.6 cup soba, 1.3 cup lettuce, 1.7 cup zucchini, 0.9 cup corn, 100 g thyme, 2 tbsps soy sauce, 1 tsp sesame oil, 1 tbsp olive oil, 3 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 322,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 60,
            "sodium": 306,
            "carbohydrates": 79,
            "fiber": 5,
            "sugar": 9,
            "protein": 24
        }
    },
    "Japanese Grilled Sweet Potato Risotto With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 388,
            "protein": 7,
            "carbs": 62,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 140 g sweet potato as base. Add 1 cup rice, 180 g corn, 1.5 cup pea and cook until tender. Incorporate 1.4 cup zucchini, 190 g cilantro, 0.8 cup curry paste and season with 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "140 g sweet potato, 1 cup rice, 180 g corn, 1.5 cup pea, 1.4 cup zucchini, 190 g cilantro, 0.8 cup curry paste, 1 tsp chili flakes, 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 388,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 31,
            "sodium": 770,
            "carbohydrates": 62,
            "fiber": 4,
            "sugar": 1,
            "protein": 7
        }
    },
    "Moroccan Marinated Quinoa Stew With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 377,
            "protein": 44,
            "carbs": 46,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.3 cup quinoa as base. Add 1 cup tomato, 170 g mushroom, 110 g kale and cook until tender. Incorporate 1.3 cup thyme, 1 tsp ginger, 1 tsp lemon juice and season with 2 tbsps olive oil, 1 clove garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1.3 cup quinoa, 1 cup tomato, 170 g mushroom, 110 g kale, 1.3 cup thyme, 1 tsp ginger, 1 tsp lemon juice, 2 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 377,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 58,
            "sodium": 884,
            "carbohydrates": 46,
            "fiber": 14,
            "sugar": 17,
            "protein": 44
        }
    },
    "Greek Grilled Sweet Potato Stew With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 417,
            "protein": 37,
            "carbs": 78,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 240 g sweet potato as base. Add 1.7 cup couscous, 190 g cabbage, 220 g tomato and cook until tender. Incorporate 230 g spinach, 230 g mint, 1 tbsp lemon juice and season with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "240 g sweet potato, 1.7 cup couscous, 190 g cabbage, 220 g tomato, 230 g spinach, 230 g mint, 1 tbsp lemon juice, 2 tsps paprika, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 417,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 87,
            "sodium": 643,
            "carbohydrates": 78,
            "fiber": 12,
            "sugar": 14,
            "protein": 37
        }
    },
    "Indian Marinated Cauliflower Porridge With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 311,
            "protein": 38,
            "carbs": 68,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1 tsp cauliflower with water or broth until soft and creamy. Add 1 piece tortilla, 170 g zucchini, 190 g pea and simmer until vegetables are tender. Season with 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion and serve hot.",
        "ingredients": "1 tsp cauliflower, 1 piece tortilla, 170 g zucchini, 190 g pea, 170 g broccoli, 1.6 cup parsley, 80 g curry paste, 2 tsps turmeric, 2 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 311,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 106,
            "sodium": 737,
            "carbohydrates": 68,
            "fiber": 9,
            "sugar": 19,
            "protein": 38
        }
    },
    "Chinese Grilled Tempeh Sandwich With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 411,
            "protein": 29,
            "carbs": 53,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 160 g tempeh, 1 tsp yogurt, 1.8 cup mushroom and top with 1.3 cup cabbage, 2 tsps bell pepper, 1.2 cup cilantro. Season with 2 tsps olive oil, 1 tsp garlic, 1.4 cup onion and serve.",
        "ingredients": "160 g tempeh, 1 tsp yogurt, 1.8 cup mushroom, 1.3 cup cabbage, 2 tsps bell pepper, 1.2 cup cilantro, 3 cloves ginger, 2 tsps lime juice, 2 tsps olive oil, 1 tsp garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 411,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 39,
            "sodium": 609,
            "carbohydrates": 53,
            "fiber": 3,
            "sugar": 20,
            "protein": 29
        }
    },
    "Italian Baked Chickpeas Risotto With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 346,
            "protein": 41,
            "carbs": 42,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g chickpeas as base. Add 60 g spaghetti, 1.6 cup pea, 180 g cabbage and cook until tender. Incorporate 1.4 cup lettuce, 1.5 cup thyme, 2 tsps turmeric and season with 2 tsps olive oil, 1 tsp garlic, 1 cup onion. Serve hot.",
        "ingredients": "100 g chickpeas, 60 g spaghetti, 1.6 cup pea, 180 g cabbage, 1.4 cup lettuce, 1.5 cup thyme, 2 tsps turmeric, 1 tsp vinegar, 2 tsps olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 346,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 41,
            "sodium": 335,
            "carbohydrates": 42,
            "fiber": 13,
            "sugar": 1,
            "protein": 41
        }
    },
    "Indian Crispy Sweet Potato Risotto With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 440,
            "protein": 14,
            "carbs": 62,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.6 cup sweet potato as base. Add 1 piece bread, 180 g cucumber, 0.8 cup pea and cook until tender. Incorporate 1.4 cup broccoli, 1.3 cup thyme, 2 cloves ginger and season with 1 tsp olive oil, 1 tsp garlic, 1.3 cup onion. Serve hot.",
        "ingredients": "0.6 cup sweet potato, 1 piece bread, 180 g cucumber, 0.8 cup pea, 1.4 cup broccoli, 1.3 cup thyme, 2 cloves ginger, 1 tsp cumin, 1 tsp olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 440,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 66,
            "sodium": 312,
            "carbohydrates": 62,
            "fiber": 14,
            "sugar": 18,
            "protein": 14
        }
    },
    "Korean Grilled Paneer Rice With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 176,
            "protein": 30,
            "carbs": 37,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 70 g paneer as base. Add 2 pieces bread, 1.2 cup cabbage, 190 g kale and cook until tender. Incorporate 2 tsps bell pepper, 90 g thyme, 2 tsps paprika and season with 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "70 g paneer, 2 pieces bread, 1.2 cup cabbage, 190 g kale, 2 tsps bell pepper, 90 g thyme, 2 tsps paprika, 1 tsp sesame oil, 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 176,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 10,
            "sodium": 590,
            "carbohydrates": 37,
            "fiber": 8,
            "sugar": 17,
            "protein": 30
        }
    },
    "Japanese Crispy Pumpkin Pasta With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 260,
            "protein": 29,
            "carbs": 41,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.3 cup pumpkin as base. Add 160 g couscous, 2 tsps bell pepper, 2 cup spinach and cook until tender. Incorporate 0.8 cup cucumber, 0.8 cup parsley, 0.8 cup curry paste and season with 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1.3 cup pumpkin, 160 g couscous, 2 tsps bell pepper, 2 cup spinach, 0.8 cup cucumber, 0.8 cup parsley, 0.8 cup curry paste, 1 tsp lime juice, 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 260,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 21,
            "sodium": 487,
            "carbohydrates": 41,
            "fiber": 10,
            "sugar": 14,
            "protein": 29
        }
    },
    "Thai Marinated Paneer Curry With Harissa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 503,
            "protein": 26,
            "carbs": 65,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.2 cup noodles, 1.5 cup pea, 0.9 cup zucchini until crisp-tender. Add 1.6 cup paneer and 110 g corn, 160 g mint, 2 tsps vinegar. Season with 1 tsp olive oil, 1 tsp garlic, 1 cup onion and serve over rice.",
        "ingredients": "1.6 cup paneer, 1.2 cup noodles, 1.5 cup pea, 0.9 cup zucchini, 110 g corn, 160 g mint, 2 tsps vinegar, 2 tsps ginger, 1 tsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 503,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 78,
            "sodium": 746,
            "carbohydrates": 65,
            "fiber": 7,
            "sugar": 13,
            "protein": 26
        }
    },
    "Italian Crispy Halloumi Curry With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 242,
            "protein": 29,
            "carbs": 73,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 60 g potato, 1.6 cup tomato, 1 cup spinach until crisp-tender. Add 70 g halloumi and 180 g pea, 1.5 cup dill, 2 tsps turmeric. Season with 2 tsps olive oil, 1 clove garlic, 1.4 cup onion and serve over rice.",
        "ingredients": "70 g halloumi, 60 g potato, 1.6 cup tomato, 1 cup spinach, 180 g pea, 1.5 cup dill, 2 tsps turmeric, 2 tsps vinegar, 2 tsps olive oil, 1 clove garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 242,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 55,
            "sodium": 539,
            "carbohydrates": 73,
            "fiber": 13,
            "sugar": 10,
            "protein": 29
        }
    },
    "Chinese Marinated Sweet Potato Congee With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 262,
            "protein": 11,
            "carbs": 63,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1 cup sweet potato with water or broth until soft and creamy. Add 0.8 cup oats, 0.5 cup spinach, 230 g corn and simmer until vegetables are tender. Season with 3 tbsps olive oil, 3 cloves garlic, 1.6 cup onion and serve hot.",
        "ingredients": "1 cup sweet potato, 0.8 cup oats, 0.5 cup spinach, 230 g corn, 2 cup pea, 190 g cilantro, 1 tsp turmeric, 2 tsps cumin, 3 tbsps olive oil, 3 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 262,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 15,
            "sodium": 751,
            "carbohydrates": 63,
            "fiber": 1,
            "sugar": 11,
            "protein": 11
        }
    },
    "Turkish Poached Quinoa Stir-fry With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 563,
            "protein": 45,
            "carbs": 81,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g quinoa as base. Add 210 g rice, 2 cup cucumber, 100 g zucchini and cook until tender. Incorporate 210 g kale, 1.7 cup basil, 1 tsp lemon juice and season with 1 tsp olive oil, 2 cloves garlic, 1 cup onion. Serve hot.",
        "ingredients": "100 g quinoa, 210 g rice, 2 cup cucumber, 100 g zucchini, 210 g kale, 1.7 cup basil, 1 tsp lemon juice, 2 tbsps sesame oil, 1 tsp olive oil, 2 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 563,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 65,
            "sodium": 595,
            "carbohydrates": 81,
            "fiber": 5,
            "sugar": 7,
            "protein": 45
        }
    },
    "Indian Pan-seared Zucchini Sandwich With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 530,
            "protein": 42,
            "carbs": 38,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.6 cup zucchini, 230 g quinoa, 0.8 cup spinach and top with 170 g cucumber, 190 g mint, 2 tsps turmeric. Season with 2 tbsps olive oil, 2 tsps garlic, 0.6 cup onion and serve.",
        "ingredients": "1.6 cup zucchini, 230 g quinoa, 0.8 cup spinach, 170 g cucumber, 190 g mint, 2 tsps turmeric, 1 tsp chili flakes, 2 tbsps olive oil, 2 tsps garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 530,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 6,
            "sodium": 468,
            "carbohydrates": 38,
            "fiber": 11,
            "sugar": 13,
            "protein": 42
        }
    },
    "Indian Braised Tempeh Wrap With Herbed Couscous": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 617,
            "protein": 36,
            "carbs": 78,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 220 g tempeh, 1 cup rice, 1.8 cup zucchini, 80 g cabbage. Add 200 g carrot, 1.5 cup thyme, 2 tsps chili flakes and roll tightly. Serve with 2 tsps olive oil, 1 clove garlic, 1.2 cup onion on the side.",
        "ingredients": "220 g tempeh, 1 cup rice, 1.8 cup zucchini, 80 g cabbage, 200 g carrot, 1.5 cup thyme, 2 tsps chili flakes, 2 tsps turmeric, 2 tsps olive oil, 1 clove garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 617,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 43,
            "sodium": 244,
            "carbohydrates": 78,
            "fiber": 4,
            "sugar": 14,
            "protein": 36
        }
    },
    "Indian Roasted Broccoli Rice With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 479,
            "protein": 9,
            "carbs": 80,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 180 g broccoli as base. Add 110 g couscous, 230 g cabbage, 0.9 cup cucumber and cook until tender. Incorporate 0.6 cup basil, 2 tsps chili flakes, 1 tsp lime juice and season with 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "180 g broccoli, 110 g couscous, 230 g cabbage, 0.9 cup cucumber, 0.6 cup basil, 2 tsps chili flakes, 1 tsp lime juice, 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 479,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 26,
            "sodium": 469,
            "carbohydrates": 80,
            "fiber": 6,
            "sugar": 20,
            "protein": 9
        }
    },
    "French Stir-fried Cauliflower Soup With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 189,
            "protein": 43,
            "carbs": 9,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.4 cup quinoa, 1.2 cup spinach, 220 g pea in oil until softened. Add broth and 1 tsp cauliflower, simmer until tender. Season with 2 tbsps olive oil, 1 tsp garlic, 0.6 cup onion and serve hot.",
        "ingredients": "1 tsp cauliflower, 1.4 cup quinoa, 1.2 cup spinach, 220 g pea, 2 tsps bell pepper, 1.7 cup basil, 2 pieces curry paste, 2 tsps soy sauce, 2 tbsps olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 189,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 45,
            "sodium": 568,
            "carbohydrates": 9,
            "fiber": 11,
            "sugar": 2,
            "protein": 43
        }
    },
    "Indian Baked Cod Toast With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 542,
            "protein": 27,
            "carbs": 66,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 180 g cod, 210 g bulgur, 200 g carrot and top with 1.3 cup pea, 140 g tomato, 170 g thyme. Season with 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion and serve.",
        "ingredients": "180 g cod, 210 g bulgur, 200 g carrot, 1.3 cup pea, 140 g tomato, 170 g thyme, 2 tsps turmeric, 1 tsp chili flakes, 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 542,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 66,
            "sodium": 860,
            "carbohydrates": 66,
            "fiber": 13,
            "sugar": 19,
            "protein": 27
        }
    },
    "Greek Braised Lamb Skewers With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 266,
            "protein": 38,
            "carbs": 11,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 210 g lamb as base. Add 210 g soba, 70 g spinach, 180 g broccoli and cook until tender. Incorporate 0.8 cup cucumber, 100 g rosemary, 1 tbsp sesame oil and season with 1 tsp olive oil, 2 tsps garlic, 0.5 cup onion. Serve hot.",
        "ingredients": "210 g lamb, 210 g soba, 70 g spinach, 180 g broccoli, 0.8 cup cucumber, 100 g rosemary, 1 tbsp sesame oil, 2 tsps vinegar, 1 tsp olive oil, 2 tsps garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 266,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 69,
            "sodium": 871,
            "carbohydrates": 11,
            "fiber": 3,
            "sugar": 12,
            "protein": 38
        }
    },
    "Italian Grilled Cod Porridge With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 525,
            "protein": 10,
            "carbs": 33,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.2 cup cod with water or broth until soft and creamy. Add 1 tsp yogurt, 1.2 cup pea, 210 g lettuce and simmer until vegetables are tender. Season with 2 tbsps olive oil, 1 tsp garlic, 1.9 cup onion and serve hot.",
        "ingredients": "1.2 cup cod, 1 tsp yogurt, 1.2 cup pea, 210 g lettuce, 2 tsps bell pepper, 1.7 cup cilantro, 1 tsp cumin, 1 piece curry paste, 2 tbsps olive oil, 1 tsp garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 525,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 42,
            "sodium": 357,
            "carbohydrates": 33,
            "fiber": 12,
            "sugar": 6,
            "protein": 10
        }
    },
    "Middle Eastern Braised Cod Porridge With Harissa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 338,
            "protein": 41,
            "carbs": 28,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.4 cup cod with water or broth until soft and creamy. Add 2 cup quinoa, 1.4 cup spinach, 1.7 cup pea and simmer until vegetables are tender. Season with 2 tsps olive oil, 1 clove garlic, 1 tbsp onion and serve hot.",
        "ingredients": "1.4 cup cod, 2 cup quinoa, 1.4 cup spinach, 1.7 cup pea, 1.1 cup kale, 120 g cilantro, 3 tbsps soy sauce, 2 tsps cumin, 2 tsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 338,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 36,
            "sodium": 543,
            "carbohydrates": 28,
            "fiber": 10,
            "sugar": 11,
            "protein": 41
        }
    },
    "French Poached Turkey Salad With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 561,
            "protein": 42,
            "carbs": 26,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.1 cup turkey, 2 pieces bread, 1.9 cup kale, 1.6 cup cabbage in a bowl. Add 1.8 cup cucumber, 160 g basil, 2 tsps lemon juice and toss gently. Dress with 3 tbsps olive oil, 2 tsps garlic, 2 tbsps onion and serve fresh.",
        "ingredients": "1.1 cup turkey, 2 pieces bread, 1.9 cup kale, 1.6 cup cabbage, 1.8 cup cucumber, 160 g basil, 2 tsps lemon juice, 1 tsp turmeric, 3 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 561,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 30,
            "sodium": 681,
            "carbohydrates": 26,
            "fiber": 12,
            "sugar": 21,
            "protein": 42
        }
    },
    "Turkish Crispy Shrimp Curry With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 535,
            "protein": 35,
            "carbs": 18,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.6 cup quinoa, 0.7 cup corn, 2 tsps bell pepper until crisp-tender. Add 80 g shrimp and 1.8 cup broccoli, 1 cup thyme, 2 pieces curry paste. Season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion and serve over rice.",
        "ingredients": "80 g shrimp, 1.6 cup quinoa, 0.7 cup corn, 2 tsps bell pepper, 1.8 cup broccoli, 1 cup thyme, 2 pieces curry paste, 1 tsp chili flakes, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 535,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 8,
            "sodium": 177,
            "carbohydrates": 18,
            "fiber": 3,
            "sugar": 13,
            "protein": 35
        }
    },
    "Mexican Smoky Sardines Stew With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 199,
            "protein": 40,
            "carbs": 14,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.7 cup sardines as base. Add 1.7 cup bulgur, 180 g lettuce, 170 g tomato and cook until tender. Incorporate 1 tsp bell pepper, 150 g mint, 2 tsps turmeric and season with 1 tbsp olive oil, 2 tsps garlic, 2 cup onion. Serve hot.",
        "ingredients": "1.7 cup sardines, 1.7 cup bulgur, 180 g lettuce, 170 g tomato, 1 tsp bell pepper, 150 g mint, 2 tsps turmeric, 1 tsp chili flakes, 1 tbsp olive oil, 2 tsps garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 199,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 113,
            "sodium": 668,
            "carbohydrates": 14,
            "fiber": 7,
            "sugar": 2,
            "protein": 40
        }
    },
    "Vietnamese Pan-seared Duck Wrap With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 267,
            "protein": 8,
            "carbs": 79,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 150 g duck, 1.7 cup soba, 0.9 cup broccoli, 240 g zucchini. Add 130 g lettuce, 160 g dill, 3 cloves ginger and roll tightly. Serve with 1 tbsp olive oil, 1 tsp garlic, 1.9 cup onion on the side.",
        "ingredients": "150 g duck, 1.7 cup soba, 0.9 cup broccoli, 240 g zucchini, 130 g lettuce, 160 g dill, 3 cloves ginger, 2 tsps soy sauce, 1 tbsp olive oil, 1 tsp garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 267,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 55,
            "sodium": 241,
            "carbohydrates": 79,
            "fiber": 2,
            "sugar": 2,
            "protein": 8
        }
    },
    "Greek Glazed Chicken Wrap With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 611,
            "protein": 18,
            "carbs": 9,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.5 cup chicken, 90 g potato, 1.9 cup corn, 190 g cucumber. Add 200 g mushroom, 200 g thyme, 1 tbsp sesame oil and roll tightly. Serve with 1 tsp olive oil, 1 clove garlic, 1 tbsp onion on the side.",
        "ingredients": "1.5 cup chicken, 90 g potato, 1.9 cup corn, 190 g cucumber, 200 g mushroom, 200 g thyme, 1 tbsp sesame oil, 2 tsps turmeric, 1 tsp olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 611,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 85,
            "sodium": 508,
            "carbohydrates": 9,
            "fiber": 12,
            "sugar": 14,
            "protein": 18
        }
    },
    "Vietnamese Poached Cod Omelette With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 551,
            "protein": 39,
            "carbs": 80,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 240 g noodles, 0.9 cup spinach, 220 g tomato until softened. Add beaten eggs and 220 g cod if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 clove garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "220 g cod, 240 g noodles, 0.9 cup spinach, 220 g tomato, 190 g cucumber, 170 g dill, 1 tsp ginger, 1 tsp lemon juice, 1 tsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 551,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 37,
            "sodium": 91,
            "carbohydrates": 80,
            "fiber": 11,
            "sugar": 12,
            "protein": 39
        }
    },
    "Turkish Pan-seared Sardines Frittata With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 567,
            "protein": 13,
            "carbs": 73,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 220 g quinoa, 0.7 cup spinach, 1.9 cup corn in oil. Pour beaten eggs over vegetables, add 1.6 cup sardines if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 1 clove garlic, 0.8 cup onion.",
        "ingredients": "1.6 cup sardines, 220 g quinoa, 0.7 cup spinach, 1.9 cup corn, 70 g mushroom, 1.1 cup parsley, 1 tsp paprika, 1 tsp turmeric, 2 tsps olive oil, 1 clove garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 567,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 89,
            "sodium": 133,
            "carbohydrates": 73,
            "fiber": 5,
            "sugar": 16,
            "protein": 13
        }
    },
    "Greek Baked Crab Pasta With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 437,
            "protein": 18,
            "carbs": 80,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g crab as base. Add 1 piece bread, 1.5 cup lettuce, 140 g tomato and cook until tender. Incorporate 1.7 cup carrot, 210 g cilantro, 1 tsp soy sauce and season with 1 tbsp olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "110 g crab, 1 piece bread, 1.5 cup lettuce, 140 g tomato, 1.7 cup carrot, 210 g cilantro, 1 tsp soy sauce, 1 tsp vinegar, 1 tbsp olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 437,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 59,
            "sodium": 571,
            "carbohydrates": 80,
            "fiber": 3,
            "sugar": 10,
            "protein": 18
        }
    },
    "Korean Roasted Cod Soup With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 579,
            "protein": 39,
            "carbs": 6,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.4 cup quinoa, 170 g kale, 1.3 cup broccoli in oil until softened. Add broth and 80 g cod, simmer until tender. Season with 1 tbsp olive oil, 1 clove garlic, 0.6 cup onion and serve hot.",
        "ingredients": "80 g cod, 1.4 cup quinoa, 170 g kale, 1.3 cup broccoli, 170 g corn, 130 g parsley, 2 tsps cumin, 1 tbsp vinegar, 1 tbsp olive oil, 1 clove garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 579,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 102,
            "sodium": 454,
            "carbohydrates": 6,
            "fiber": 11,
            "sugar": 17,
            "protein": 39
        }
    },
    "Korean Smoky Crab Congee With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 346,
            "protein": 17,
            "carbs": 39,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 220 g crab with water or broth until soft and creamy. Add 0.9 cup potato, 230 g carrot, 1.2 cup pea and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "220 g crab, 0.9 cup potato, 230 g carrot, 1.2 cup pea, 150 g broccoli, 200 g dill, 2 tsps turmeric, 1 tsp lime juice, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 346,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 30,
            "sodium": 255,
            "carbohydrates": 39,
            "fiber": 2,
            "sugar": 6,
            "protein": 17
        }
    },
    "Turkish Poached Pork Frittata With Chimichurri": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 321,
            "protein": 9,
            "carbs": 77,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 tsp yogurt, 1.8 cup broccoli, 0.7 cup cabbage in oil. Pour beaten eggs over vegetables, add 1 cup pork if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion.",
        "ingredients": "1 cup pork, 1 tsp yogurt, 1.8 cup broccoli, 0.7 cup cabbage, 90 g pea, 70 g thyme, 2 tsps lime juice, 1 tsp paprika, 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 321,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 115,
            "sodium": 843,
            "carbohydrates": 77,
            "fiber": 12,
            "sugar": 15,
            "protein": 9
        }
    },
    "Mexican Smoky Pork Congee With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 291,
            "protein": 33,
            "carbs": 73,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.8 cup pork with water or broth until soft and creamy. Add 100 g couscous, 240 g mushroom, 130 g zucchini and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 cloves garlic, 0.7 cup onion and serve hot.",
        "ingredients": "1.8 cup pork, 100 g couscous, 240 g mushroom, 130 g zucchini, 130 g carrot, 1.5 cup cilantro, 1 tsp chili flakes, 1 tsp turmeric, 2 tbsps olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 291,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 75,
            "sodium": 248,
            "carbohydrates": 73,
            "fiber": 2,
            "sugar": 20,
            "protein": 33
        }
    },
    "Italian Poached Salmon Salad With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 502,
            "protein": 25,
            "carbs": 80,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 0.9 cup salmon, 150 g rice, 2 tsps bell pepper, 180 g pea in a bowl. Add 220 g mushroom, 0.6 cup cilantro, 2 tsps cumin and toss gently. Dress with 1 tbsp olive oil, 1 tsp garlic, 1.5 cup onion and serve fresh.",
        "ingredients": "0.9 cup salmon, 150 g rice, 2 tsps bell pepper, 180 g pea, 220 g mushroom, 0.6 cup cilantro, 2 tsps cumin, 1 tsp sesame oil, 1 tbsp olive oil, 1 tsp garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 502,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 46,
            "sodium": 305,
            "carbohydrates": 80,
            "fiber": 10,
            "sugar": 6,
            "protein": 25
        }
    },
    "Mexican Braised Crab Wrap With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 631,
            "protein": 23,
            "carbs": 53,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1 cup crab, 3 tbsps yogurt, 170 g kale, 170 g mushroom. Add 160 g carrot, 90 g thyme, 2 tsps chili flakes and roll tightly. Serve with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion on the side.",
        "ingredients": "1 cup crab, 3 tbsps yogurt, 170 g kale, 170 g mushroom, 160 g carrot, 90 g thyme, 2 tsps chili flakes, 3 tbsps soy sauce, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 631,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 23,
            "sodium": 161,
            "carbohydrates": 53,
            "fiber": 11,
            "sugar": 3,
            "protein": 23
        }
    },
    "Chinese Baked Beef Soup With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 345,
            "protein": 23,
            "carbs": 76,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 160 g couscous, 190 g cucumber, 1 cup broccoli in oil until softened. Add broth and 180 g beef, simmer until tender. Season with 1 tsp olive oil, 1 clove garlic, 2 cup onion and serve hot.",
        "ingredients": "180 g beef, 160 g couscous, 190 g cucumber, 1 cup broccoli, 70 g pea, 240 g parsley, 2 tsps cumin, 3 tbsps lemon juice, 1 tsp olive oil, 1 clove garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 345,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 2,
            "sodium": 615,
            "carbohydrates": 76,
            "fiber": 4,
            "sugar": 7,
            "protein": 23
        }
    },
    "Turkish Glazed Salmon Stir-fry With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 187,
            "protein": 33,
            "carbs": 43,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g salmon as base. Add 2 pieces wrap, 190 g cucumber, 1.9 cup mushroom and cook until tender. Incorporate 1.2 cup carrot, 90 g basil, 2 tsps ginger and season with 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "160 g salmon, 2 pieces wrap, 190 g cucumber, 1.9 cup mushroom, 1.2 cup carrot, 90 g basil, 2 tsps ginger, 2 tsps vinegar, 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 187,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 99,
            "sodium": 696,
            "carbohydrates": 43,
            "fiber": 6,
            "sugar": 4,
            "protein": 33
        }
    },
    "Indian Baked Chicken Frittata With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 295,
            "protein": 33,
            "carbs": 71,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 tsp yogurt, 1.3 cup mushroom, 1.6 cup zucchini in oil. Pour beaten eggs over vegetables, add 190 g chicken if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion.",
        "ingredients": "190 g chicken, 1 tsp yogurt, 1.3 cup mushroom, 1.6 cup zucchini, 210 g carrot, 240 g rosemary, 1 tsp lemon juice, 1 tsp cumin, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 295,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 9,
            "sodium": 694,
            "carbohydrates": 71,
            "fiber": 15,
            "sugar": 1,
            "protein": 33
        }
    },
    "Mexican Roasted Pork Stew With Coconut-lime Rice": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 552,
            "protein": 27,
            "carbs": 48,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g pork as base. Add 1 piece wrap, 0.7 cup tomato, 0.8 cup corn and cook until tender. Incorporate 1.9 cup pea, 1.1 cup mint, 2 tsps soy sauce and season with 2 tsps olive oil, 3 cloves garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "170 g pork, 1 piece wrap, 0.7 cup tomato, 0.8 cup corn, 1.9 cup pea, 1.1 cup mint, 2 tsps soy sauce, 2 tsps turmeric, 2 tsps olive oil, 3 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 552,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 108,
            "sodium": 496,
            "carbohydrates": 48,
            "fiber": 11,
            "sugar": 8,
            "protein": 27
        }
    },
    "Moroccan Stir-fried Turkey Soup With Herbed Couscous": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 235,
            "protein": 21,
            "carbs": 54,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 cup rice, 2 tsps bell pepper, 1.6 cup cucumber in oil until softened. Add broth and 120 g turkey, simmer until tender. Season with 1 tsp olive oil, 1 tsp garlic, 1.7 cup onion and serve hot.",
        "ingredients": "120 g turkey, 1 cup rice, 2 tsps bell pepper, 1.6 cup cucumber, 0.9 cup spinach, 80 g mint, 2 tsps paprika, 2 tsps cumin, 1 tsp olive oil, 1 tsp garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 235,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 61,
            "sodium": 415,
            "carbohydrates": 54,
            "fiber": 11,
            "sugar": 1,
            "protein": 21
        }
    },
    "Turkish Grilled Pork Wrap With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 577,
            "protein": 7,
            "carbs": 63,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 70 g pork, 1 piece tortilla, 0.8 cup corn, 1.9 cup cabbage. Add 1.5 cup mushroom, 80 g mint, 1 tsp cumin and roll tightly. Serve with 1 tsp olive oil, 1 clove garlic, 3 tbsps onion on the side.",
        "ingredients": "70 g pork, 1 piece tortilla, 0.8 cup corn, 1.9 cup cabbage, 1.5 cup mushroom, 80 g mint, 1 tsp cumin, 2 tsps soy sauce, 1 tsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 577,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 104,
            "sodium": 223,
            "carbohydrates": 63,
            "fiber": 2,
            "sugar": 8,
            "protein": 7
        }
    },
    "Spanish Smoky Crab Pasta With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 374,
            "protein": 41,
            "carbs": 16,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 140 g crab as base. Add 1 piece wrap, 150 g carrot, 1.1 cup cucumber and cook until tender. Incorporate 1.7 cup pea, 1.8 cup dill, 3 tbsps vinegar and season with 2 tbsps olive oil, 2 tsps garlic, 1.3 cup onion. Serve hot.",
        "ingredients": "140 g crab, 1 piece wrap, 150 g carrot, 1.1 cup cucumber, 1.7 cup pea, 1.8 cup dill, 3 tbsps vinegar, 1 tsp sesame oil, 2 tbsps olive oil, 2 tsps garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 374,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 78,
            "sodium": 99,
            "carbohydrates": 16,
            "fiber": 7,
            "sugar": 13,
            "protein": 41
        }
    },
    "Moroccan Braised Lamb Salad With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 319,
            "protein": 16,
            "carbs": 68,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 140 g lamb, 1.7 cup bulgur, 100 g cucumber, 1.8 cup pea in a bowl. Add 180 g zucchini, 150 g parsley, 2 tsps turmeric and toss gently. Dress with 2 tsps olive oil, 1 tsp garlic, 1.3 cup onion and serve fresh.",
        "ingredients": "140 g lamb, 1.7 cup bulgur, 100 g cucumber, 1.8 cup pea, 180 g zucchini, 150 g parsley, 2 tsps turmeric, 1 tsp cumin, 2 tsps olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 319,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 42,
            "sodium": 572,
            "carbohydrates": 68,
            "fiber": 12,
            "sugar": 20,
            "protein": 16
        }
    },
    "Greek Baked Salmon Bowl With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 456,
            "protein": 8,
            "carbs": 40,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 210 g salmon, 2 pieces tortilla, 230 g zucchini with liquid until smooth. Top with 0.8 cup cucumber, 1.4 cup kale, 230 g basil and garnish with 1 tsp olive oil, 2 cloves garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "210 g salmon, 2 pieces tortilla, 230 g zucchini, 0.8 cup cucumber, 1.4 cup kale, 230 g basil, 1 tsp vinegar, 1 tsp cumin, 1 tsp olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 456,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 20,
            "sodium": 192,
            "carbohydrates": 40,
            "fiber": 3,
            "sugar": 17,
            "protein": 8
        }
    },
    "Moroccan Glazed Sardines Curry With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 279,
            "protein": 35,
            "carbs": 46,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.3 cup noodles, 190 g spinach, 160 g tomato until crisp-tender. Add 150 g sardines and 1.8 cup lettuce, 180 g parsley, 2 tsps lime juice. Season with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion and serve over rice.",
        "ingredients": "150 g sardines, 1.3 cup noodles, 190 g spinach, 160 g tomato, 1.8 cup lettuce, 180 g parsley, 2 tsps lime juice, 2 tsps paprika, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 279,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 66,
            "sodium": 830,
            "carbohydrates": 46,
            "fiber": 11,
            "sugar": 2,
            "protein": 35
        }
    },
    "Indian Baked Duck Porridge With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 564,
            "protein": 33,
            "carbs": 85,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1 cup duck with water or broth until soft and creamy. Add 1 piece tortilla, 1.6 cup spinach, 1.1 cup pea and simmer until vegetables are tender. Season with 3 tbsps olive oil, 1 tsp garlic, 1 cup onion and serve hot.",
        "ingredients": "1 cup duck, 1 piece tortilla, 1.6 cup spinach, 1.1 cup pea, 2 tsps bell pepper, 1.5 cup dill, 2 tsps lime juice, 1 tsp vinegar, 3 tbsps olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 564,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 26,
            "sodium": 584,
            "carbohydrates": 85,
            "fiber": 2,
            "sugar": 9,
            "protein": 33
        }
    },
    "American Poached Salmon Stir-fry With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 283,
            "protein": 31,
            "carbs": 83,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.7 cup salmon as base. Add 210 g oats, 0.9 cup tomato, 180 g kale and cook until tender. Incorporate 1.6 cup spinach, 1.7 cup thyme, 2 tbsps lime juice and season with 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1.7 cup salmon, 210 g oats, 0.9 cup tomato, 180 g kale, 1.6 cup spinach, 1.7 cup thyme, 2 tbsps lime juice, 2 tsps sesame oil, 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 283,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 1,
            "sodium": 692,
            "carbohydrates": 83,
            "fiber": 5,
            "sugar": 9,
            "protein": 31
        }
    },
    "American Baked Cod Toast With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 475,
            "protein": 39,
            "carbs": 70,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 100 g cod, 0.8 cup couscous, 190 g cucumber and top with 1.5 cup broccoli, 0.7 cup lettuce, 1.1 cup parsley. Season with 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion and serve.",
        "ingredients": "100 g cod, 0.8 cup couscous, 190 g cucumber, 1.5 cup broccoli, 0.7 cup lettuce, 1.1 cup parsley, 2 tsps lemon juice, 1 tsp chili flakes, 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 475,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 20,
            "sodium": 140,
            "carbohydrates": 70,
            "fiber": 13,
            "sugar": 15,
            "protein": 39
        }
    },
    "French Baked Salmon Toast With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 305,
            "protein": 3,
            "carbs": 10,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.9 cup salmon, 180 g couscous, 0.6 cup cabbage and top with 0.5 cup kale, 170 g cucumber, 0.8 cup cilantro. Season with 2 tsps olive oil, 2 cloves garlic, 1 tbsp onion and serve.",
        "ingredients": "1.9 cup salmon, 180 g couscous, 0.6 cup cabbage, 0.5 cup kale, 170 g cucumber, 0.8 cup cilantro, 2 tsps soy sauce, 1 tsp vinegar, 2 tsps olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 305,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 1,
            "sodium": 533,
            "carbohydrates": 10,
            "fiber": 2,
            "sugar": 4,
            "protein": 3
        }
    },
    "Italian Marinated Turkey Noodles With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 276,
            "protein": 24,
            "carbs": 76,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.6 cup turkey as base. Add 240 g spaghetti, 1.4 cup mushroom, 1.4 cup tomato and cook until tender. Incorporate 1.7 cup spinach, 1.9 cup dill, 2 tsps lime juice and season with 2 tsps olive oil, 2 cloves garlic, 1.2 cup onion. Serve hot.",
        "ingredients": "1.6 cup turkey, 240 g spaghetti, 1.4 cup mushroom, 1.4 cup tomato, 1.7 cup spinach, 1.9 cup dill, 2 tsps lime juice, 3 tbsps soy sauce, 2 tsps olive oil, 2 cloves garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 276,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 51,
            "sodium": 463,
            "carbohydrates": 76,
            "fiber": 6,
            "sugar": 11,
            "protein": 24
        }
    },
    "Indian Stir-fried Duck Porridge With Coconut-lime Rice": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 357,
            "protein": 22,
            "carbs": 9,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.8 cup duck with water or broth until soft and creamy. Add 0.8 cup noodles, 0.9 cup cucumber, 1.5 cup carrot and simmer until vegetables are tender. Season with 2 tsps olive oil, 1 tsp garlic, 1.7 cup onion and serve hot.",
        "ingredients": "1.8 cup duck, 0.8 cup noodles, 0.9 cup cucumber, 1.5 cup carrot, 1.3 cup kale, 1.4 cup dill, 2 tbsps lime juice, 2 tsps turmeric, 2 tsps olive oil, 1 tsp garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 357,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 67,
            "sodium": 748,
            "carbohydrates": 9,
            "fiber": 10,
            "sugar": 12,
            "protein": 22
        }
    },
    "Japanese Stir-fried Turkey Risotto With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 333,
            "protein": 30,
            "carbs": 42,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g turkey as base. Add 100 g soba, 220 g cabbage, 130 g pea and cook until tender. Incorporate 190 g lettuce, 100 g thyme, 1 tsp lime juice and season with 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "220 g turkey, 100 g soba, 220 g cabbage, 130 g pea, 190 g lettuce, 100 g thyme, 1 tsp lime juice, 1 tsp cumin, 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 333,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 20,
            "sodium": 684,
            "carbohydrates": 42,
            "fiber": 14,
            "sugar": 3,
            "protein": 30
        }
    },
    "Chinese Braised Duck Soup With Coconut-lime Rice": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 253,
            "protein": 35,
            "carbs": 78,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 80 g rice, 130 g cabbage, 140 g spinach in oil until softened. Add broth and 190 g duck, simmer until tender. Season with 1 tsp olive oil, 3 cloves garlic, 2 tbsps onion and serve hot.",
        "ingredients": "190 g duck, 80 g rice, 130 g cabbage, 140 g spinach, 0.9 cup corn, 70 g parsley, 2 tsps vinegar, 1 tsp lemon juice, 1 tsp olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 253,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 83,
            "sodium": 181,
            "carbohydrates": 78,
            "fiber": 13,
            "sugar": 15,
            "protein": 35
        }
    },
    "Thai Grilled Lamb Frittata With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 618,
            "protein": 13,
            "carbs": 60,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces tortilla, 110 g tomato, 190 g broccoli in oil. Pour beaten eggs over vegetables, add 60 g lamb if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 1 clove garlic, 1.3 cup onion.",
        "ingredients": "60 g lamb, 2 pieces tortilla, 110 g tomato, 190 g broccoli, 1.9 cup corn, 1.2 cup basil, 2 tsps vinegar, 1 clove ginger, 1 tbsp olive oil, 1 clove garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 618,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 13,
            "sodium": 848,
            "carbohydrates": 60,
            "fiber": 6,
            "sugar": 12,
            "protein": 13
        }
    },
    "Spanish Grilled Beef Salad With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 427,
            "protein": 40,
            "carbs": 25,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 60 g beef, 1.6 cup quinoa, 0.7 cup cabbage, 220 g mushroom in a bowl. Add 140 g cucumber, 1.9 cup thyme, 1 tsp soy sauce and toss gently. Dress with 2 tsps olive oil, 2 tsps garlic, 0.5 cup onion and serve fresh.",
        "ingredients": "60 g beef, 1.6 cup quinoa, 0.7 cup cabbage, 220 g mushroom, 140 g cucumber, 1.9 cup thyme, 1 tsp soy sauce, 1 tsp lemon juice, 2 tsps olive oil, 2 tsps garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 427,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 82,
            "sodium": 195,
            "carbohydrates": 25,
            "fiber": 15,
            "sugar": 5,
            "protein": 40
        }
    },
    "Thai Stir-fried Cod Bowl With Herbed Couscous": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 634,
            "protein": 25,
            "carbs": 15,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 150 g cod, 170 g soba, 2 tsps bell pepper with liquid until smooth. Top with 230 g kale, 0.7 cup cucumber, 90 g parsley and garnish with 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "150 g cod, 170 g soba, 2 tsps bell pepper, 230 g kale, 0.7 cup cucumber, 90 g parsley, 2 tbsps lemon juice, 2 tsps cumin, 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 634,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 119,
            "sodium": 854,
            "carbohydrates": 15,
            "fiber": 13,
            "sugar": 22,
            "protein": 25
        }
    },
    "Greek Glazed Chicken Stew With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 297,
            "protein": 40,
            "carbs": 51,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 200 g chicken as base. Add 2 tbsps yogurt, 1.7 cup lettuce, 1 tsp bell pepper and cook until tender. Incorporate 180 g carrot, 110 g thyme, 1 tsp turmeric and season with 2 tsps olive oil, 2 cloves garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "200 g chicken, 2 tbsps yogurt, 1.7 cup lettuce, 1 tsp bell pepper, 180 g carrot, 110 g thyme, 1 tsp turmeric, 1 tsp chili flakes, 2 tsps olive oil, 2 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 297,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 79,
            "sodium": 500,
            "carbohydrates": 51,
            "fiber": 5,
            "sugar": 13,
            "protein": 40
        }
    },
    "American Smoky Shrimp Noodles With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 266,
            "protein": 18,
            "carbs": 27,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 120 g shrimp as base. Add 2 pieces bread, 2 tsps bell pepper, 160 g cabbage and cook until tender. Incorporate 100 g cucumber, 210 g dill, 1 clove ginger and season with 2 tbsps olive oil, 1 clove garlic, 1.5 cup onion. Serve hot.",
        "ingredients": "120 g shrimp, 2 pieces bread, 2 tsps bell pepper, 160 g cabbage, 100 g cucumber, 210 g dill, 1 clove ginger, 2 tsps chili flakes, 2 tbsps olive oil, 1 clove garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 266,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 61,
            "sodium": 237,
            "carbohydrates": 27,
            "fiber": 5,
            "sugar": 11,
            "protein": 18
        }
    },
    "Italian Poached Pork Skewers With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 440,
            "protein": 38,
            "carbs": 57,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 180 g pork as base. Add 140 g quinoa, 2 tsps bell pepper, 160 g spinach and cook until tender. Incorporate 160 g kale, 1 cup cilantro, 1 tsp paprika and season with 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "180 g pork, 140 g quinoa, 2 tsps bell pepper, 160 g spinach, 160 g kale, 1 cup cilantro, 1 tsp paprika, 1 tsp lime juice, 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 440,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 49,
            "sodium": 66,
            "carbohydrates": 57,
            "fiber": 9,
            "sugar": 5,
            "protein": 38
        }
    },
    "Chinese Baked Duck Risotto With Pickled Veggies": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 151,
            "protein": 13,
            "carbs": 65,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g duck as base. Add 160 g noodles, 0.9 cup mushroom, 90 g broccoli and cook until tender. Incorporate 120 g spinach, 1.1 cup thyme, 1 tsp turmeric and season with 1 tsp olive oil, 1 clove garlic, 1.3 cup onion. Serve hot.",
        "ingredients": "100 g duck, 160 g noodles, 0.9 cup mushroom, 90 g broccoli, 120 g spinach, 1.1 cup thyme, 1 tsp turmeric, 3 cloves ginger, 1 tsp olive oil, 1 clove garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 151,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 52,
            "sodium": 108,
            "carbohydrates": 65,
            "fiber": 4,
            "sugar": 15,
            "protein": 13
        }
    },
    "Chinese Pan-seared Sardines Soup With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 481,
            "protein": 33,
            "carbs": 32,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece bread, 80 g cabbage, 2 tsps bell pepper in oil until softened. Add broth and 90 g sardines, simmer until tender. Season with 2 tbsps olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "90 g sardines, 1 piece bread, 80 g cabbage, 2 tsps bell pepper, 60 g corn, 0.9 cup parsley, 1 tsp ginger, 2 tsps paprika, 2 tbsps olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 481,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 114,
            "sodium": 314,
            "carbohydrates": 32,
            "fiber": 2,
            "sugar": 6,
            "protein": 33
        }
    },
    "Spanish Smoky Salmon Soup With Herbed Couscous": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 169,
            "protein": 41,
            "carbs": 55,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece wrap, 1.1 cup broccoli, 230 g tomato in oil until softened. Add broth and 1.2 cup salmon, simmer until tender. Season with 1 tbsp olive oil, 3 cloves garlic, 2 tbsps onion and serve hot.",
        "ingredients": "1.2 cup salmon, 1 piece wrap, 1.1 cup broccoli, 230 g tomato, 180 g spinach, 150 g parsley, 2 tbsps lemon juice, 2 tsps paprika, 1 tbsp olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 169,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 22,
            "sodium": 391,
            "carbohydrates": 55,
            "fiber": 3,
            "sugar": 7,
            "protein": 41
        }
    },
    "Middle Eastern Roasted Cod Curry With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 420,
            "protein": 6,
            "carbs": 58,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 2 cup couscous, 100 g lettuce, 90 g carrot until crisp-tender. Add 0.7 cup cod and 1 tsp bell pepper, 1.3 cup dill, 2 tsps soy sauce. Season with 1 tsp olive oil, 2 cloves garlic, 1.9 cup onion and serve over rice.",
        "ingredients": "0.7 cup cod, 2 cup couscous, 100 g lettuce, 90 g carrot, 1 tsp bell pepper, 1.3 cup dill, 2 tsps soy sauce, 1 tbsp lime juice, 1 tsp olive oil, 2 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 420,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 49,
            "sodium": 223,
            "carbohydrates": 58,
            "fiber": 9,
            "sugar": 4,
            "protein": 6
        }
    },
    "Italian Crispy Duck Tacos With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 217,
            "protein": 4,
            "carbs": 45,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g duck as base. Add 190 g oats, 130 g spinach, 110 g tomato and cook until tender. Incorporate 1.4 cup mushroom, 1.4 cup parsley, 1 tbsp soy sauce and season with 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "80 g duck, 190 g oats, 130 g spinach, 110 g tomato, 1.4 cup mushroom, 1.4 cup parsley, 1 tbsp soy sauce, 1 tsp ginger, 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 217,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 63,
            "sodium": 203,
            "carbohydrates": 45,
            "fiber": 9,
            "sugar": 20,
            "protein": 4
        }
    },
    "Turkish Braised Salmon Bowl With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 315,
            "protein": 18,
            "carbs": 74,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 240 g salmon, 0.8 cup oats, 100 g pea with liquid until smooth. Top with 200 g kale, 0.8 cup zucchini, 1.4 cup rosemary and garnish with 2 tbsps olive oil, 1 tsp garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "240 g salmon, 0.8 cup oats, 100 g pea, 200 g kale, 0.8 cup zucchini, 1.4 cup rosemary, 2 tsps cumin, 1 tsp vinegar, 2 tbsps olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 315,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 111,
            "sodium": 194,
            "carbohydrates": 74,
            "fiber": 9,
            "sugar": 2,
            "protein": 18
        }
    },
    "French Baked Lamb Frittata With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 530,
            "protein": 4,
            "carbs": 78,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.8 cup soba, 150 g cabbage, 2 tsps bell pepper in oil. Pour beaten eggs over vegetables, add 160 g lamb if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 3 cloves garlic, 1.3 cup onion.",
        "ingredients": "160 g lamb, 1.8 cup soba, 150 g cabbage, 2 tsps bell pepper, 140 g carrot, 1.1 cup thyme, 1 tsp lemon juice, 2 tbsps lime juice, 1 tsp olive oil, 3 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 530,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 78,
            "sodium": 819,
            "carbohydrates": 78,
            "fiber": 11,
            "sugar": 5,
            "protein": 4
        }
    },
    "American Marinated Chicken Risotto With Avocado Crema": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 230,
            "protein": 25,
            "carbs": 57,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g chicken as base. Add 1.7 cup couscous, 140 g mushroom, 0.9 cup lettuce and cook until tender. Incorporate 170 g pea, 1.9 cup mint, 1 tsp ginger and season with 2 tsps olive oil, 3 cloves garlic, 0.6 cup onion. Serve hot.",
        "ingredients": "100 g chicken, 1.7 cup couscous, 140 g mushroom, 0.9 cup lettuce, 170 g pea, 1.9 cup mint, 1 tsp ginger, 2 tbsps vinegar, 2 tsps olive oil, 3 cloves garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 230,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 59,
            "sodium": 506,
            "carbohydrates": 57,
            "fiber": 1,
            "sugar": 17,
            "protein": 25
        }
    },
    "Italian Stir-fried Sardines Soup With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 469,
            "protein": 17,
            "carbs": 66,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.8 cup spaghetti, 160 g kale, 1.5 cup cabbage in oil until softened. Add broth and 80 g sardines, simmer until tender. Season with 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion and serve hot.",
        "ingredients": "80 g sardines, 0.8 cup spaghetti, 160 g kale, 1.5 cup cabbage, 1.3 cup cucumber, 1.3 cup cilantro, 1 tsp chili flakes, 1.2 cup curry paste, 2 tsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 469,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 86,
            "sodium": 95,
            "carbohydrates": 66,
            "fiber": 12,
            "sugar": 6,
            "protein": 17
        }
    },
    "French Stir-fried Lamb Omelette With Harissa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 216,
            "protein": 6,
            "carbs": 74,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 pieces tortilla, 160 g cabbage, 1.7 cup spinach until softened. Add beaten eggs and 0.6 cup lamb if applicable, scramble until cooked. Season with 1 tsp olive oil, 1 clove garlic, 0.6 cup onion and serve immediately.",
        "ingredients": "0.6 cup lamb, 2 pieces tortilla, 160 g cabbage, 1.7 cup spinach, 240 g zucchini, 100 g rosemary, 2 tsps sesame oil, 2 tsps soy sauce, 1 tsp olive oil, 1 clove garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 216,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 33,
            "sodium": 708,
            "carbohydrates": 74,
            "fiber": 11,
            "sugar": 17,
            "protein": 6
        }
    },
    "Turkish Stir-fried Salmon Wrap With Harissa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 376,
            "protein": 30,
            "carbs": 67,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 70 g salmon, 0.6 cup rice, 1.2 cup zucchini, 220 g kale. Add 240 g spinach, 170 g parsley, 1 clove ginger and roll tightly. Serve with 1 tsp olive oil, 2 tsps garlic, 1.7 cup onion on the side.",
        "ingredients": "70 g salmon, 0.6 cup rice, 1.2 cup zucchini, 220 g kale, 240 g spinach, 170 g parsley, 1 clove ginger, 1 tsp turmeric, 1 tsp olive oil, 2 tsps garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 376,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 23,
            "sodium": 755,
            "carbohydrates": 67,
            "fiber": 10,
            "sugar": 16,
            "protein": 30
        }
    },
    "Vietnamese Smoky Chicken Porridge With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 258,
            "protein": 38,
            "carbs": 80,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.8 cup chicken with water or broth until soft and creamy. Add 180 g oats, 220 g kale, 150 g pea and simmer until vegetables are tender. Season with 2 tbsps olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "0.8 cup chicken, 180 g oats, 220 g kale, 150 g pea, 180 g cucumber, 70 g basil, 1 tsp cumin, 1 tsp soy sauce, 2 tbsps olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 258,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 92,
            "sodium": 380,
            "carbohydrates": 80,
            "fiber": 14,
            "sugar": 18,
            "protein": 38
        }
    },
    "Greek Braised Beef Bowl With Harissa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 168,
            "protein": 33,
            "carbs": 47,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 0.8 cup beef, 170 g bulgur, 2 tsps bell pepper with liquid until smooth. Top with 0.8 cup spinach, 1.9 cup tomato, 1.1 cup cilantro and garnish with 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "0.8 cup beef, 170 g bulgur, 2 tsps bell pepper, 0.8 cup spinach, 1.9 cup tomato, 1.1 cup cilantro, 1 tsp paprika, 1 tsp chili flakes, 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 168,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 4,
            "sodium": 214,
            "carbohydrates": 47,
            "fiber": 12,
            "sugar": 8,
            "protein": 33
        }
    },
    "Mexican Braised Beef Noodles With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 174,
            "protein": 4,
            "carbs": 36,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup beef as base. Add 1.1 cup spaghetti, 190 g cucumber, 0.5 cup corn and cook until tender. Incorporate 210 g pea, 70 g thyme, 2 tsps curry paste and season with 3 tbsps olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "0.8 cup beef, 1.1 cup spaghetti, 190 g cucumber, 0.5 cup corn, 210 g pea, 70 g thyme, 2 tsps curry paste, 1 tsp chili flakes, 3 tbsps olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 174,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 114,
            "sodium": 498,
            "carbohydrates": 36,
            "fiber": 5,
            "sugar": 5,
            "protein": 4
        }
    },
    "Moroccan Grilled Lamb Pasta With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 518,
            "protein": 3,
            "carbs": 42,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g lamb as base. Add 100 g oats, 200 g corn, 0.8 cup pea and cook until tender. Incorporate 1 tsp bell pepper, 1.5 cup basil, 2 tsps soy sauce and season with 2 tbsps olive oil, 1 clove garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "80 g lamb, 100 g oats, 200 g corn, 0.8 cup pea, 1 tsp bell pepper, 1.5 cup basil, 2 tsps soy sauce, 2 tsps paprika, 2 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 518,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 69,
            "sodium": 579,
            "carbohydrates": 42,
            "fiber": 7,
            "sugar": 2,
            "protein": 3
        }
    },
    "Vietnamese Pan-seared Sardines Rice With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 644,
            "protein": 26,
            "carbs": 7,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.7 cup sardines as base. Add 1.1 cup quinoa, 110 g pea, 1 tsp bell pepper and cook until tender. Incorporate 170 g cabbage, 1.5 cup parsley, 1 tbsp lime juice and season with 2 tsps olive oil, 2 cloves garlic, 0.6 cup onion. Serve hot.",
        "ingredients": "0.7 cup sardines, 1.1 cup quinoa, 110 g pea, 1 tsp bell pepper, 170 g cabbage, 1.5 cup parsley, 1 tbsp lime juice, 2 tsps ginger, 2 tsps olive oil, 2 cloves garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 644,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 60,
            "sodium": 375,
            "carbohydrates": 7,
            "fiber": 13,
            "sugar": 12,
            "protein": 26
        }
    },
    "Mexican Smoky Tuna Toast With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 239,
            "protein": 45,
            "carbs": 67,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 230 g tuna, 0.9 cup rice, 1 cup spinach and top with 60 g kale, 240 g corn, 230 g dill. Season with 1 tsp olive oil, 1 clove garlic, 2 cup onion and serve.",
        "ingredients": "230 g tuna, 0.9 cup rice, 1 cup spinach, 60 g kale, 240 g corn, 230 g dill, 1 tbsp soy sauce, 2 tsps paprika, 1 tsp olive oil, 1 clove garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 239,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 8,
            "sodium": 656,
            "carbohydrates": 67,
            "fiber": 6,
            "sugar": 20,
            "protein": 45
        }
    },
    "Korean Roasted Turkey Risotto With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 412,
            "protein": 5,
            "carbs": 16,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 190 g turkey as base. Add 180 g quinoa, 200 g cucumber, 190 g kale and cook until tender. Incorporate 170 g pea, 1.7 cup thyme, 3 tbsps lime juice and season with 1 tbsp olive oil, 1 tsp garlic, 0.6 cup onion. Serve hot.",
        "ingredients": "190 g turkey, 180 g quinoa, 200 g cucumber, 190 g kale, 170 g pea, 1.7 cup thyme, 3 tbsps lime juice, 1 tsp sesame oil, 1 tbsp olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 412,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 29,
            "sodium": 536,
            "carbohydrates": 16,
            "fiber": 12,
            "sugar": 3,
            "protein": 5
        }
    },
    "Spanish Braised Shrimp Soup With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 335,
            "protein": 14,
            "carbs": 38,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 180 g quinoa, 2 tsps bell pepper, 180 g kale in oil until softened. Add broth and 0.9 cup shrimp, simmer until tender. Season with 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion and serve hot.",
        "ingredients": "0.9 cup shrimp, 180 g quinoa, 2 tsps bell pepper, 180 g kale, 1.4 cup broccoli, 190 g basil, 60 g curry paste, 1 tsp paprika, 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 335,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 74,
            "sodium": 848,
            "carbohydrates": 38,
            "fiber": 15,
            "sugar": 21,
            "protein": 14
        }
    },
    "Chinese Stir-fried Sardines Skewers With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 485,
            "protein": 42,
            "carbs": 5,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.5 cup sardines as base. Add 210 g rice, 1.9 cup corn, 230 g zucchini and cook until tender. Incorporate 1.7 cup broccoli, 230 g parsley, 2 tsps paprika and season with 1 tsp olive oil, 2 cloves garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "0.5 cup sardines, 210 g rice, 1.9 cup corn, 230 g zucchini, 1.7 cup broccoli, 230 g parsley, 2 tsps paprika, 1 tsp chili flakes, 1 tsp olive oil, 2 cloves garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 485,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 119,
            "sodium": 413,
            "carbohydrates": 5,
            "fiber": 10,
            "sugar": 20,
            "protein": 42
        }
    },
    "Spanish Poached Tuna Noodles With Coconut-lime Rice": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 157,
            "protein": 24,
            "carbs": 73,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 200 g tuna as base. Add 0.6 cup soba, 0.9 cup broccoli, 230 g lettuce and cook until tender. Incorporate 1.7 cup pea, 80 g cilantro, 2 pieces curry paste and season with 3 tbsps olive oil, 2 cloves garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "200 g tuna, 0.6 cup soba, 0.9 cup broccoli, 230 g lettuce, 1.7 cup pea, 80 g cilantro, 2 pieces curry paste, 2 tsps ginger, 3 tbsps olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 157,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 53,
            "sodium": 479,
            "carbohydrates": 73,
            "fiber": 9,
            "sugar": 17,
            "protein": 24
        }
    },
    "Moroccan Poached Lamb Bowl With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 509,
            "protein": 8,
            "carbs": 27,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 220 g lamb, 1 piece tortilla, 100 g broccoli with liquid until smooth. Top with 180 g tomato, 70 g mushroom, 90 g thyme and garnish with 3 tbsps olive oil, 1 clove garlic, 2 cup onion. Serve chilled.",
        "ingredients": "220 g lamb, 1 piece tortilla, 100 g broccoli, 180 g tomato, 70 g mushroom, 90 g thyme, 1.9 cup curry paste, 1 tsp vinegar, 3 tbsps olive oil, 1 clove garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 509,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 15,
            "sodium": 120,
            "carbohydrates": 27,
            "fiber": 9,
            "sugar": 11,
            "protein": 8
        }
    },
    "Turkish Pan-seared Crab Wrap With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 516,
            "protein": 7,
            "carbs": 82,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 160 g crab, 160 g oats, 1 tsp bell pepper, 180 g pea. Add 240 g cabbage, 0.5 cup mint, 2 tsps paprika and roll tightly. Serve with 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion on the side.",
        "ingredients": "160 g crab, 160 g oats, 1 tsp bell pepper, 180 g pea, 240 g cabbage, 0.5 cup mint, 2 tsps paprika, 2 tsps chili flakes, 1 tsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 516,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 43,
            "sodium": 189,
            "carbohydrates": 82,
            "fiber": 9,
            "sugar": 2,
            "protein": 7
        }
    },
    "French Marinated Cod Congee With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 154,
            "protein": 41,
            "carbs": 29,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.6 cup cod with water or broth until soft and creamy. Add 220 g soba, 200 g zucchini, 230 g mushroom and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 clove garlic, 1.5 cup onion and serve hot.",
        "ingredients": "0.6 cup cod, 220 g soba, 200 g zucchini, 230 g mushroom, 1 tsp bell pepper, 190 g mint, 3 cloves ginger, 1 tsp cumin, 1 tbsp olive oil, 1 clove garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 154,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 42,
            "sodium": 70,
            "carbohydrates": 29,
            "fiber": 11,
            "sugar": 14,
            "protein": 41
        }
    },
    "Korean Baked Tuna Congee With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 604,
            "protein": 20,
            "carbs": 31,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 70 g tuna with water or broth until soft and creamy. Add 140 g couscous, 1.7 cup corn, 160 g pea and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 clove garlic, 1 tbsp onion and serve hot.",
        "ingredients": "70 g tuna, 140 g couscous, 1.7 cup corn, 160 g pea, 1.6 cup lettuce, 230 g parsley, 3 tbsps lime juice, 1 piece curry paste, 1 tsp olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 604,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 8,
            "sodium": 662,
            "carbohydrates": 31,
            "fiber": 12,
            "sugar": 11,
            "protein": 20
        }
    },
    "Korean Stir-fried Beef Skewers With Roasted Peppers": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 395,
            "protein": 17,
            "carbs": 82,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g beef as base. Add 180 g noodles, 110 g cabbage, 210 g broccoli and cook until tender. Incorporate 1.2 cup corn, 1.7 cup cilantro, 2 tsps turmeric and season with 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "100 g beef, 180 g noodles, 110 g cabbage, 210 g broccoli, 1.2 cup corn, 1.7 cup cilantro, 2 tsps turmeric, 1 tsp sesame oil, 2 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 395,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 72,
            "sodium": 96,
            "carbohydrates": 82,
            "fiber": 13,
            "sugar": 14,
            "protein": 17
        }
    },
    "Indian Smoky Crab Toast With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 265,
            "protein": 13,
            "carbs": 11,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.1 cup crab, 1 piece bread, 90 g mushroom and top with 1.3 cup kale, 1.4 cup spinach, 110 g basil. Season with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion and serve.",
        "ingredients": "1.1 cup crab, 1 piece bread, 90 g mushroom, 1.3 cup kale, 1.4 cup spinach, 110 g basil, 2 tsps paprika, 2 tsps chili flakes, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 265,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 5,
            "sodium": 810,
            "carbohydrates": 11,
            "fiber": 7,
            "sugar": 11,
            "protein": 13
        }
    },
    "Korean Pan-seared Salmon Stew With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 598,
            "protein": 14,
            "carbs": 58,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 cup salmon as base. Add 1.7 cup couscous, 1.7 cup corn, 230 g spinach and cook until tender. Incorporate 230 g pea, 180 g rosemary, 3 cloves ginger and season with 1 tsp olive oil, 1 tsp garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "2 cup salmon, 1.7 cup couscous, 1.7 cup corn, 230 g spinach, 230 g pea, 180 g rosemary, 3 cloves ginger, 1 tsp cumin, 1 tsp olive oil, 1 tsp garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 598,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 16,
            "sodium": 326,
            "carbohydrates": 58,
            "fiber": 1,
            "sugar": 14,
            "protein": 14
        }
    },
    "Japanese Marinated Tuna Skewers With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 330,
            "protein": 12,
            "carbs": 12,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.3 cup tuna as base. Add 0.9 cup soba, 230 g lettuce, 90 g carrot and cook until tender. Incorporate 1.9 cup cabbage, 1.6 cup cilantro, 1 tbsp sesame oil and season with 1 tbsp olive oil, 1 tsp garlic, 1.3 cup onion. Serve hot.",
        "ingredients": "1.3 cup tuna, 0.9 cup soba, 230 g lettuce, 90 g carrot, 1.9 cup cabbage, 1.6 cup cilantro, 1 tbsp sesame oil, 1 piece curry paste, 1 tbsp olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 330,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 76,
            "sodium": 373,
            "carbohydrates": 12,
            "fiber": 6,
            "sugar": 12,
            "protein": 12
        }
    },
    "Mexican Baked Duck Toast With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 637,
            "protein": 19,
            "carbs": 55,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 170 g duck, 180 g udon, 0.7 cup zucchini and top with 1.4 cup corn, 120 g carrot, 80 g parsley. Season with 3 tbsps olive oil, 3 cloves garlic, 1.6 cup onion and serve.",
        "ingredients": "170 g duck, 180 g udon, 0.7 cup zucchini, 1.4 cup corn, 120 g carrot, 80 g parsley, 2 tsps curry paste, 2 tbsps sesame oil, 3 tbsps olive oil, 3 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 637,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 107,
            "sodium": 447,
            "carbohydrates": 55,
            "fiber": 9,
            "sugar": 3,
            "protein": 19
        }
    },
    "Middle Eastern Roasted Sardines Omelette With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 354,
            "protein": 24,
            "carbs": 37,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 0.6 cup oats, 210 g spinach, 60 g broccoli until softened. Add beaten eggs and 140 g sardines if applicable, scramble until cooked. Season with 3 tbsps olive oil, 2 tsps garlic, 1.8 cup onion and serve immediately.",
        "ingredients": "140 g sardines, 0.6 cup oats, 210 g spinach, 60 g broccoli, 190 g cabbage, 1.1 cup basil, 3 cloves ginger, 2 tsps soy sauce, 3 tbsps olive oil, 2 tsps garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 354,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 47,
            "sodium": 221,
            "carbohydrates": 37,
            "fiber": 15,
            "sugar": 5,
            "protein": 24
        }
    },
    "Chinese Smoky Crab Pasta With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 250,
            "protein": 19,
            "carbs": 55,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g crab as base. Add 70 g soba, 1.1 cup broccoli, 120 g cucumber and cook until tender. Incorporate 130 g lettuce, 0.7 cup parsley, 1 tsp lemon juice and season with 2 tsps olive oil, 1 tsp garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "160 g crab, 70 g soba, 1.1 cup broccoli, 120 g cucumber, 130 g lettuce, 0.7 cup parsley, 1 tsp lemon juice, 1 tsp paprika, 2 tsps olive oil, 1 tsp garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 250,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 63,
            "sodium": 516,
            "carbohydrates": 55,
            "fiber": 11,
            "sugar": 8,
            "protein": 19
        }
    },
    "Thai Grilled Chicken Soup With Black Pepper and Lime": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 568,
            "protein": 13,
            "carbs": 15,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces tortilla, 230 g spinach, 160 g tomato in oil until softened. Add broth and 0.7 cup chicken, simmer until tender. Season with 2 tsps olive oil, 1 clove garlic, 1.5 cup onion and serve hot.",
        "ingredients": "0.7 cup chicken, 2 pieces tortilla, 230 g spinach, 160 g tomato, 70 g broccoli, 1.2 cup parsley, 1 tsp chili flakes, 2 tbsps sesame oil, 2 tsps olive oil, 1 clove garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 568,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 33,
            "sodium": 647,
            "carbohydrates": 15,
            "fiber": 7,
            "sugar": 18,
            "protein": 13
        }
    },
    "Thai Stir-fried Duck Wrap With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 337,
            "protein": 8,
            "carbs": 28,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 0.8 cup duck, 200 g noodles, 0.9 cup zucchini, 110 g carrot. Add 1.5 cup kale, 1 cup cilantro, 1 tbsp curry paste and roll tightly. Serve with 2 tsps olive oil, 2 tsps garlic, 1.3 cup onion on the side.",
        "ingredients": "0.8 cup duck, 200 g noodles, 0.9 cup zucchini, 110 g carrot, 1.5 cup kale, 1 cup cilantro, 1 tbsp curry paste, 3 tbsps sesame oil, 2 tsps olive oil, 2 tsps garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 337,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 75,
            "sodium": 875,
            "carbohydrates": 28,
            "fiber": 8,
            "sugar": 14,
            "protein": 8
        }
    },
    "Vietnamese Baked Tuna Frittata With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 320,
            "protein": 39,
            "carbs": 36,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.4 cup soba, 1 tsp bell pepper, 0.8 cup pea in oil. Pour beaten eggs over vegetables, add 90 g tuna if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 2 tsps garlic, 1.5 cup onion.",
        "ingredients": "90 g tuna, 1.4 cup soba, 1 tsp bell pepper, 0.8 cup pea, 170 g tomato, 220 g mint, 2 pieces curry paste, 2 tsps turmeric, 1 tbsp olive oil, 2 tsps garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 320,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 65,
            "sodium": 148,
            "carbohydrates": 36,
            "fiber": 4,
            "sugar": 14,
            "protein": 39
        }
    },
    "American Stir-fried Tuna Pasta With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 351,
            "protein": 22,
            "carbs": 6,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.2 cup tuna as base. Add 2 tsps yogurt, 1 cup mushroom, 2 cup spinach and cook until tender. Incorporate 1.7 cup cabbage, 210 g cilantro, 2 tsps turmeric and season with 2 tsps olive oil, 1 tsp garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "1.2 cup tuna, 2 tsps yogurt, 1 cup mushroom, 2 cup spinach, 1.7 cup cabbage, 210 g cilantro, 2 tsps turmeric, 2 tsps chili flakes, 2 tsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 351,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 118,
            "sodium": 807,
            "carbohydrates": 6,
            "fiber": 8,
            "sugar": 14,
            "protein": 22
        }
    },
    "Mexican Marinated Beef Skewers With Tahini Drizzle": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 523,
            "protein": 5,
            "carbs": 34,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 60 g beef as base. Add 230 g quinoa, 1.3 cup cabbage, 1.1 cup zucchini and cook until tender. Incorporate 70 g lettuce, 1.6 cup mint, 1 tsp paprika and season with 3 tbsps olive oil, 2 tsps garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "60 g beef, 230 g quinoa, 1.3 cup cabbage, 1.1 cup zucchini, 70 g lettuce, 1.6 cup mint, 1 tsp paprika, 140 g curry paste, 3 tbsps olive oil, 2 tsps garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 523,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 28,
            "sodium": 138,
            "carbohydrates": 34,
            "fiber": 13,
            "sugar": 20,
            "protein": 5
        }
    },
    "Middle Eastern Marinated Crab Stir-fry With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 197,
            "protein": 18,
            "carbs": 37,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.1 cup crab as base. Add 1 piece tortilla, 0.7 cup zucchini, 140 g cabbage and cook until tender. Incorporate 60 g lettuce, 170 g mint, 1 tsp cumin and season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.1 cup crab, 1 piece tortilla, 0.7 cup zucchini, 140 g cabbage, 60 g lettuce, 170 g mint, 1 tsp cumin, 3 tbsps soy sauce, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 197,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 6,
            "sodium": 565,
            "carbohydrates": 37,
            "fiber": 15,
            "sugar": 7,
            "protein": 18
        }
    },
    "Moroccan Roasted Turkey Noodles With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 642,
            "protein": 38,
            "carbs": 56,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 240 g turkey as base. Add 1.2 cup bulgur, 1.5 cup broccoli, 2 tsps bell pepper and cook until tender. Incorporate 1.2 cup corn, 100 g cilantro, 2 tbsps vinegar and season with 3 tbsps olive oil, 1 clove garlic, 1.8 cup onion. Serve hot.",
        "ingredients": "240 g turkey, 1.2 cup bulgur, 1.5 cup broccoli, 2 tsps bell pepper, 1.2 cup corn, 100 g cilantro, 2 tbsps vinegar, 180 g curry paste, 3 tbsps olive oil, 1 clove garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 642,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 18,
            "sodium": 190,
            "carbohydrates": 56,
            "fiber": 11,
            "sugar": 10,
            "protein": 38
        }
    },
    "Korean Grilled Salmon Congee With Harissa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 509,
            "protein": 3,
            "carbs": 82,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 150 g salmon with water or broth until soft and creamy. Add 2 cup oats, 80 g lettuce, 130 g zucchini and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion and serve hot.",
        "ingredients": "150 g salmon, 2 cup oats, 80 g lettuce, 130 g zucchini, 0.9 cup carrot, 1.5 cup basil, 2 tsps vinegar, 1 tbsp lime juice, 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 509,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 40,
            "sodium": 62,
            "carbohydrates": 82,
            "fiber": 15,
            "sugar": 22,
            "protein": 3
        }
    },
    "Vietnamese Grilled Beef Omelette With Mango Salsa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 230,
            "protein": 22,
            "carbs": 85,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 2 tsps yogurt, 1.7 cup cabbage, 1.3 cup kale until softened. Add beaten eggs and 0.9 cup beef if applicable, scramble until cooked. Season with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "0.9 cup beef, 2 tsps yogurt, 1.7 cup cabbage, 1.3 cup kale, 210 g mushroom, 160 g mint, 1 tsp lemon juice, 1 tbsp vinegar, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 230,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 44,
            "sodium": 560,
            "carbohydrates": 85,
            "fiber": 15,
            "sugar": 16,
            "protein": 22
        }
    },
    "Spanish Baked Duck Salad With Tomato Relish": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 484,
            "protein": 33,
            "carbs": 84,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 0.7 cup duck, 1.1 cup potato, 0.8 cup pea, 1.3 cup lettuce in a bowl. Add 60 g mushroom, 0.8 cup cilantro, 2 tsps curry paste and toss gently. Dress with 1 tbsp olive oil, 2 cloves garlic, 0.6 cup onion and serve fresh.",
        "ingredients": "0.7 cup duck, 1.1 cup potato, 0.8 cup pea, 1.3 cup lettuce, 60 g mushroom, 0.8 cup cilantro, 2 tsps curry paste, 1 tsp lemon juice, 1 tbsp olive oil, 2 cloves garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 484,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 66,
            "sodium": 340,
            "carbohydrates": 84,
            "fiber": 6,
            "sugar": 1,
            "protein": 33
        }
    },
    "Turkish Marinated Salmon Skewers With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 560,
            "protein": 24,
            "carbs": 5,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 230 g salmon as base. Add 1.2 cup couscous, 1.4 cup broccoli, 2 tsps bell pepper and cook until tender. Incorporate 150 g spinach, 210 g dill, 2 tsps sesame oil and season with 1 tbsp olive oil, 1 clove garlic, 1.1 cup onion. Serve hot.",
        "ingredients": "230 g salmon, 1.2 cup couscous, 1.4 cup broccoli, 2 tsps bell pepper, 150 g spinach, 210 g dill, 2 tsps sesame oil, 2 tsps paprika, 1 tbsp olive oil, 1 clove garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 560,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 17,
            "sodium": 502,
            "carbohydrates": 5,
            "fiber": 11,
            "sugar": 21,
            "protein": 24
        }
    },
    "Indian Roasted Shrimp Noodles With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 303,
            "protein": 37,
            "carbs": 30,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 90 g shrimp as base. Add 80 g noodles, 210 g tomato, 0.7 cup broccoli and cook until tender. Incorporate 150 g lettuce, 0.7 cup dill, 1 tsp curry paste and season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "90 g shrimp, 80 g noodles, 210 g tomato, 0.7 cup broccoli, 150 g lettuce, 0.7 cup dill, 1 tsp curry paste, 3 tbsps lemon juice, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 303,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 57,
            "sodium": 430,
            "carbohydrates": 30,
            "fiber": 3,
            "sugar": 20,
            "protein": 37
        }
    },
    "Indian Stir-fried Tuna Noodles With Peanut Sauce": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 454,
            "protein": 9,
            "carbs": 70,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.2 cup tuna as base. Add 2 tbsps yogurt, 1.5 cup broccoli, 70 g tomato and cook until tender. Incorporate 1.7 cup pea, 1.4 cup cilantro, 2 tsps soy sauce and season with 3 tbsps olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.2 cup tuna, 2 tbsps yogurt, 1.5 cup broccoli, 70 g tomato, 1.7 cup pea, 1.4 cup cilantro, 2 tsps soy sauce, 2 tbsps lemon juice, 3 tbsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 454,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 77,
            "sodium": 763,
            "carbohydrates": 70,
            "fiber": 10,
            "sugar": 3,
            "protein": 9
        }
    },
    "Thai Crispy Cod Frittata With Miso Glaze": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 243,
            "protein": 27,
            "carbs": 54,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece bread, 160 g pea, 220 g mushroom in oil. Pour beaten eggs over vegetables, add 2 cup cod if applicable. Cook until set, then finish under broiler. Season with 3 tbsps olive oil, 1 tsp garlic, 1.6 cup onion.",
        "ingredients": "2 cup cod, 1 piece bread, 160 g pea, 220 g mushroom, 130 g spinach, 180 g parsley, 2 tsps chili flakes, 1 tbsp vinegar, 3 tbsps olive oil, 1 tsp garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 243,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 70,
            "sodium": 601,
            "carbohydrates": 54,
            "fiber": 6,
            "sugar": 17,
            "protein": 27
        }
    },
    "Middle Eastern Crispy Chicken Skewers With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 621,
            "protein": 21,
            "carbs": 12,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.9 cup chicken as base. Add 1 piece wrap, 1.6 cup carrot, 1.3 cup lettuce and cook until tender. Incorporate 120 g mushroom, 1.2 cup rosemary, 1 tsp chili flakes and season with 3 tbsps olive oil, 3 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "0.9 cup chicken, 1 piece wrap, 1.6 cup carrot, 1.3 cup lettuce, 120 g mushroom, 1.2 cup rosemary, 1 tsp chili flakes, 2 tsps lemon juice, 3 tbsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 621,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 105,
            "sodium": 292,
            "carbohydrates": 12,
            "fiber": 8,
            "sugar": 12,
            "protein": 21
        }
    },
    "Indian Pan-seared Lamb Sandwich With Feta & Olives": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 548,
            "protein": 14,
            "carbs": 84,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 60 g lamb, 230 g potato, 1.1 cup kale and top with 1.1 cup mushroom, 1.4 cup pea, 140 g mint. Season with 2 tbsps olive oil, 1 tsp garlic, 0.5 cup onion and serve.",
        "ingredients": "60 g lamb, 230 g potato, 1.1 cup kale, 1.1 cup mushroom, 1.4 cup pea, 140 g mint, 80 g curry paste, 2 tsps cumin, 2 tbsps olive oil, 1 tsp garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 548,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 108,
            "sodium": 305,
            "carbohydrates": 84,
            "fiber": 12,
            "sugar": 3,
            "protein": 14
        }
    },
    "Thai Pan-seared Tuna Stew With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 492,
            "protein": 8,
            "carbs": 15,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.4 cup tuna as base. Add 1 tsp yogurt, 210 g corn, 210 g carrot and cook until tender. Incorporate 1 tsp bell pepper, 110 g cilantro, 1 tsp lime juice and season with 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.4 cup tuna, 1 tsp yogurt, 210 g corn, 210 g carrot, 1 tsp bell pepper, 110 g cilantro, 1 tsp lime juice, 1 tsp turmeric, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 492,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 88,
            "sodium": 208,
            "carbohydrates": 15,
            "fiber": 13,
            "sugar": 17,
            "protein": 8
        }
    },
    "Middle Eastern Braised Sardines Congee With Lemon Herb Quinoa": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 381,
            "protein": 45,
            "carbs": 34,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 2 cup sardines with water or broth until soft and creamy. Add 180 g oats, 130 g spinach, 110 g zucchini and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "2 cup sardines, 180 g oats, 130 g spinach, 110 g zucchini, 200 g kale, 110 g thyme, 1 clove ginger, 2 tsps sesame oil, 1 tbsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 381,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 62,
            "sodium": 777,
            "carbohydrates": 34,
            "fiber": 1,
            "sugar": 11,
            "protein": 45
        }
    },
    "American Pan-seared Pork Stew With Herbed Couscous": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 443,
            "protein": 26,
            "carbs": 48,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 190 g pork as base. Add 0.7 cup oats, 0.5 cup pea, 90 g kale and cook until tender. Incorporate 230 g broccoli, 90 g basil, 1 tsp cumin and season with 1 tsp olive oil, 2 cloves garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "190 g pork, 0.7 cup oats, 0.5 cup pea, 90 g kale, 230 g broccoli, 90 g basil, 1 tsp cumin, 3 tbsps lime juice, 1 tsp olive oil, 2 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 443,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 106,
            "sodium": 854,
            "carbohydrates": 48,
            "fiber": 11,
            "sugar": 3,
            "protein": 26
        }
    },
    "Thai Roasted Lamb Rice With Garlic Yogurt": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 337,
            "protein": 15,
            "carbs": 42,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 210 g lamb as base. Add 190 g noodles, 170 g tomato, 1.6 cup pea and cook until tender. Incorporate 1.4 cup zucchini, 1.7 cup thyme, 70 g curry paste and season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "210 g lamb, 190 g noodles, 170 g tomato, 1.6 cup pea, 1.4 cup zucchini, 1.7 cup thyme, 70 g curry paste, 2 tbsps soy sauce, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 337,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 74,
            "sodium": 473,
            "carbohydrates": 42,
            "fiber": 13,
            "sugar": 5,
            "protein": 15
        }
    },
    "Turkish Grilled Pork Salad With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 409,
            "protein": 39,
            "carbs": 35,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 110 g pork, 2 tsps yogurt, 1 cup zucchini, 0.5 cup tomato in a bowl. Add 160 g kale, 1.8 cup rosemary, 1 tsp turmeric and toss gently. Dress with 1 tsp olive oil, 3 cloves garlic, 2 tbsps onion and serve fresh.",
        "ingredients": "110 g pork, 2 tsps yogurt, 1 cup zucchini, 0.5 cup tomato, 160 g kale, 1.8 cup rosemary, 1 tsp turmeric, 1 tsp chili flakes, 1 tsp olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 409,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 90,
            "sodium": 562,
            "carbohydrates": 35,
            "fiber": 13,
            "sugar": 13,
            "protein": 39
        }
    },
    "Spanish Crispy Shrimp Sandwich With Sesame Ginger Dressing": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 275,
            "protein": 21,
            "carbs": 81,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 70 g shrimp, 70 g soba, 140 g broccoli and top with 240 g kale, 130 g spinach, 0.7 cup rosemary. Season with 2 tsps olive oil, 1 clove garlic, 1 tbsp onion and serve.",
        "ingredients": "70 g shrimp, 70 g soba, 140 g broccoli, 240 g kale, 130 g spinach, 0.7 cup rosemary, 1 tsp ginger, 2 tbsps vinegar, 2 tsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 275,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 99,
            "sodium": 697,
            "carbohydrates": 81,
            "fiber": 15,
            "sugar": 4,
            "protein": 21
        }
    },
    "Greek Grilled Pork Noodles With Rosemary Potatoes": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 163,
            "protein": 30,
            "carbs": 85,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g pork as base. Add 210 g noodles, 0.5 cup tomato, 240 g kale and cook until tender. Incorporate 0.6 cup corn, 0.9 cup dill, 2 tbsps lime juice and season with 2 tsps olive oil, 3 cloves garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "160 g pork, 210 g noodles, 0.5 cup tomato, 240 g kale, 0.6 cup corn, 0.9 cup dill, 2 tbsps lime juice, 1 tsp vinegar, 2 tsps olive oil, 3 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 163,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 30,
            "sodium": 351,
            "carbohydrates": 85,
            "fiber": 3,
            "sugar": 17,
            "protein": 30
        }
    },
    "Middle Eastern Braised Salmon Rice With Basil Pesto": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 446,
            "protein": 13,
            "carbs": 34,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g salmon as base. Add 1.5 cup noodles, 100 g lettuce, 60 g carrot and cook until tender. Incorporate 1 tsp bell pepper, 130 g rosemary, 1 tsp chili flakes and season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "220 g salmon, 1.5 cup noodles, 100 g lettuce, 60 g carrot, 1 tsp bell pepper, 130 g rosemary, 1 tsp chili flakes, 1 tbsp lime juice, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 446,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 44,
            "sodium": 152,
            "carbohydrates": 34,
            "fiber": 11,
            "sugar": 3,
            "protein": 13
        }
    },
    "French Pan-seared Beef Toast With Crunchy Slaw": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 570,
            "protein": 37,
            "carbs": 53,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 90 g beef, 130 g udon, 1 cup zucchini and top with 1.8 cup cucumber, 1 tsp bell pepper, 60 g rosemary. Season with 2 tsps olive oil, 3 cloves garlic, 2 cup onion and serve.",
        "ingredients": "90 g beef, 130 g udon, 1 cup zucchini, 1.8 cup cucumber, 1 tsp bell pepper, 60 g rosemary, 2 tsps cumin, 3 tbsps lime juice, 2 tsps olive oil, 3 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 570,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 5,
            "sodium": 630,
            "carbohydrates": 53,
            "fiber": 11,
            "sugar": 18,
            "protein": 37
        }
    },
    "Thai Smoky Crab Sandwich With Coconut-lime Rice": {
        "mealType": "lunch",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 458,
            "protein": 18,
            "carbs": 26,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 230 g crab, 1 piece tortilla, 130 g broccoli and top with 160 g carrot, 0.8 cup kale, 110 g cilantro. Season with 2 tbsps olive oil, 3 cloves garlic, 1 tbsp onion and serve.",
        "ingredients": "230 g crab, 1 piece tortilla, 130 g broccoli, 160 g carrot, 0.8 cup kale, 110 g cilantro, 2 tsps cumin, 2 tsps sesame oil, 2 tbsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 458,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 81,
            "sodium": 483,
            "carbohydrates": 26,
            "fiber": 3,
            "sugar": 15,
            "protein": 18
        }
    },
    "American Pan-seared Tempeh Sandwich With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 609,
            "protein": 35,
            "carbs": 5,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 240 g tempeh, 2 pieces tortilla, 70 g mushroom and top with 110 g carrot, 2 tsps bell pepper, 130 g parsley. Season with 1 tbsp olive oil, 2 cloves garlic, 0.7 cup onion and serve.",
        "ingredients": "240 g tempeh, 2 pieces tortilla, 70 g mushroom, 110 g carrot, 2 tsps bell pepper, 130 g parsley, 2 tbsps vinegar, 2 tsps soy sauce, 1 tbsp olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 609,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 7,
            "sodium": 429,
            "carbohydrates": 5,
            "fiber": 2,
            "sugar": 15,
            "protein": 35
        }
    },
    "French Stir-fried Black Beans Stew With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 206,
            "protein": 24,
            "carbs": 33,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 120 g black beans as base. Add 100 g soba, 1.1 cup zucchini, 1.3 cup cabbage and cook until tender. Incorporate 1 cup kale, 200 g parsley, 1 tsp chili flakes and season with 1 tsp olive oil, 2 tsps garlic, 2 cup onion. Serve hot.",
        "ingredients": "120 g black beans, 100 g soba, 1.1 cup zucchini, 1.3 cup cabbage, 1 cup kale, 200 g parsley, 1 tsp chili flakes, 2 tbsps soy sauce, 1 tsp olive oil, 2 tsps garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 206,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 19,
            "sodium": 697,
            "carbohydrates": 33,
            "fiber": 14,
            "sugar": 7,
            "protein": 24
        }
    },
    "Mexican Stir-fried Zucchini Congee With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 520,
            "protein": 35,
            "carbs": 57,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 80 g zucchini with water or broth until soft and creamy. Add 0.9 cup quinoa, 80 g pea, 1.4 cup broccoli and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 cloves garlic, 0.8 cup onion and serve hot.",
        "ingredients": "80 g zucchini, 0.9 cup quinoa, 80 g pea, 1.4 cup broccoli, 1.7 cup carrot, 110 g rosemary, 3 tbsps soy sauce, 1 tsp turmeric, 2 tsps olive oil, 2 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 520,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 83,
            "sodium": 728,
            "carbohydrates": 57,
            "fiber": 2,
            "sugar": 7,
            "protein": 35
        }
    },
    "Greek Smoky Tempeh Salad With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 367,
            "protein": 36,
            "carbs": 12,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 170 g tempeh, 2 pieces wrap, 140 g mushroom, 1 cup carrot in a bowl. Add 2 cup lettuce, 230 g thyme, 2 tsps soy sauce and toss gently. Dress with 2 tbsps olive oil, 2 tsps garlic, 1.2 cup onion and serve fresh.",
        "ingredients": "170 g tempeh, 2 pieces wrap, 140 g mushroom, 1 cup carrot, 2 cup lettuce, 230 g thyme, 2 tsps soy sauce, 1.9 cup curry paste, 2 tbsps olive oil, 2 tsps garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 367,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 10,
            "sodium": 569,
            "carbohydrates": 12,
            "fiber": 10,
            "sugar": 1,
            "protein": 36
        }
    },
    "Vietnamese Baked Mushrooms Risotto With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 426,
            "protein": 4,
            "carbs": 52,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tsp mushrooms as base. Add 80 g soba, 1.3 cup spinach, 190 g corn and cook until tender. Incorporate 220 g carrot, 60 g parsley, 1 tsp lemon juice and season with 1 tsp olive oil, 3 cloves garlic, 1.1 cup onion. Serve hot.",
        "ingredients": "1 tsp mushrooms, 80 g soba, 1.3 cup spinach, 190 g corn, 220 g carrot, 60 g parsley, 1 tsp lemon juice, 1 tsp cumin, 1 tsp olive oil, 3 cloves garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 426,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 64,
            "sodium": 99,
            "carbohydrates": 52,
            "fiber": 9,
            "sugar": 6,
            "protein": 4
        }
    },
    "Indian Braised Lentils Stir-fry With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 312,
            "protein": 38,
            "carbs": 19,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g lentils as base. Add 1.6 cup couscous, 160 g carrot, 1 cup spinach and cook until tender. Incorporate 120 g zucchini, 1.6 cup parsley, 1 tsp paprika and season with 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "80 g lentils, 1.6 cup couscous, 160 g carrot, 1 cup spinach, 120 g zucchini, 1.6 cup parsley, 1 tsp paprika, 1 clove ginger, 3 tbsps olive oil, 1 clove garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 312,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 106,
            "sodium": 822,
            "carbohydrates": 19,
            "fiber": 15,
            "sugar": 1,
            "protein": 38
        }
    },
    "Mexican Baked Mushrooms Pasta With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 432,
            "protein": 11,
            "carbs": 23,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 piece mushrooms as base. Add 1 piece tortilla, 0.7 cup broccoli, 1 tsp bell pepper and cook until tender. Incorporate 1.2 cup cabbage, 90 g parsley, 1 tsp chili flakes and season with 2 tsps olive oil, 1 tsp garlic, 0.6 cup onion. Serve hot.",
        "ingredients": "1 piece mushrooms, 1 piece tortilla, 0.7 cup broccoli, 1 tsp bell pepper, 1.2 cup cabbage, 90 g parsley, 1 tsp chili flakes, 2 tsps vinegar, 2 tsps olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 432,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 89,
            "sodium": 353,
            "carbohydrates": 23,
            "fiber": 7,
            "sugar": 4,
            "protein": 11
        }
    },
    "Indian Poached Paneer Tacos With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 192,
            "protein": 14,
            "carbs": 18,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.6 cup paneer as base. Add 1.8 cup couscous, 60 g pea, 90 g broccoli and cook until tender. Incorporate 0.6 cup cabbage, 110 g cilantro, 1 tsp lime juice and season with 1 tbsp olive oil, 2 cloves garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "1.6 cup paneer, 1.8 cup couscous, 60 g pea, 90 g broccoli, 0.6 cup cabbage, 110 g cilantro, 1 tsp lime juice, 1 tsp lemon juice, 1 tbsp olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 192,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 15,
            "sodium": 286,
            "carbohydrates": 18,
            "fiber": 2,
            "sugar": 21,
            "protein": 14
        }
    },
    "Mexican Grilled Eggplant Porridge With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 642,
            "protein": 44,
            "carbs": 13,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 2 pieces eggplant with water or broth until soft and creamy. Add 1.8 cup potato, 120 g pea, 0.6 cup kale and simmer until vegetables are tender. Season with 1 tsp olive oil, 3 cloves garlic, 1.5 cup onion and serve hot.",
        "ingredients": "2 pieces eggplant, 1.8 cup potato, 120 g pea, 0.6 cup kale, 0.7 cup carrot, 80 g rosemary, 2 tsps soy sauce, 2 cloves ginger, 1 tsp olive oil, 3 cloves garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 642,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 63,
            "sodium": 836,
            "carbohydrates": 13,
            "fiber": 5,
            "sugar": 19,
            "protein": 44
        }
    },
    "Turkish Stir-fried Seitan Rice With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 640,
            "protein": 17,
            "carbs": 23,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 240 g seitan as base. Add 1 piece tortilla, 150 g broccoli, 1.4 cup carrot and cook until tender. Incorporate 230 g tomato, 200 g dill, 2 tsps lime juice and season with 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "240 g seitan, 1 piece tortilla, 150 g broccoli, 1.4 cup carrot, 230 g tomato, 200 g dill, 2 tsps lime juice, 1 tsp ginger, 1 tbsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 640,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 112,
            "sodium": 195,
            "carbohydrates": 23,
            "fiber": 13,
            "sugar": 17,
            "protein": 17
        }
    },
    "French Glazed Cauliflower Pasta With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 642,
            "protein": 3,
            "carbs": 52,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 pieces cauliflower as base. Add 2 pieces tortilla, 150 g cabbage, 150 g broccoli and cook until tender. Incorporate 1 tsp bell pepper, 170 g rosemary, 2 tsps vinegar and season with 2 tsps olive oil, 2 tsps garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "2 pieces cauliflower, 2 pieces tortilla, 150 g cabbage, 150 g broccoli, 1 tsp bell pepper, 170 g rosemary, 2 tsps vinegar, 1 tbsp lime juice, 2 tsps olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 642,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 87,
            "sodium": 881,
            "carbohydrates": 52,
            "fiber": 1,
            "sugar": 16,
            "protein": 3
        }
    },
    "Vietnamese Baked Eggplant Salad With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 639,
            "protein": 23,
            "carbs": 34,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 70 g eggplant, 2 pieces tortilla, 1.9 cup cabbage, 1.4 cup pea in a bowl. Add 80 g spinach, 60 g rosemary, 1 tbsp sesame oil and toss gently. Dress with 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion and serve fresh.",
        "ingredients": "70 g eggplant, 2 pieces tortilla, 1.9 cup cabbage, 1.4 cup pea, 80 g spinach, 60 g rosemary, 1 tbsp sesame oil, 2 tsps chili flakes, 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 639,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 20,
            "sodium": 110,
            "carbohydrates": 34,
            "fiber": 9,
            "sugar": 9,
            "protein": 23
        }
    },
    "Mexican Smoky Tofu Stew With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 294,
            "protein": 23,
            "carbs": 47,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.3 cup tofu as base. Add 1.7 cup soba, 70 g lettuce, 1.9 cup cabbage and cook until tender. Incorporate 2 tsps bell pepper, 130 g basil, 1 tbsp vinegar and season with 2 tbsps olive oil, 3 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1.3 cup tofu, 1.7 cup soba, 70 g lettuce, 1.9 cup cabbage, 2 tsps bell pepper, 130 g basil, 1 tbsp vinegar, 2 tsps soy sauce, 2 tbsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 294,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 110,
            "sodium": 517,
            "carbohydrates": 47,
            "fiber": 12,
            "sugar": 10,
            "protein": 23
        }
    },
    "Spanish Crispy Halloumi Curry With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 581,
            "protein": 16,
            "carbs": 15,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.8 cup oats, 180 g spinach, 180 g kale until crisp-tender. Add 1.9 cup halloumi and 230 g pea, 70 g cilantro, 2 cloves ginger. Season with 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion and serve over rice.",
        "ingredients": "1.9 cup halloumi, 1.8 cup oats, 180 g spinach, 180 g kale, 230 g pea, 70 g cilantro, 2 cloves ginger, 1 tsp chili flakes, 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 581,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 116,
            "sodium": 220,
            "carbohydrates": 15,
            "fiber": 2,
            "sugar": 7,
            "protein": 16
        }
    },
    "Spanish Roasted Tempeh Omelette With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 572,
            "protein": 31,
            "carbs": 55,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 piece bread, 1 cup broccoli, 210 g cucumber until softened. Add beaten eggs and 80 g tempeh if applicable, scramble until cooked. Season with 2 tbsps olive oil, 1 tsp garlic, 1.1 cup onion and serve immediately.",
        "ingredients": "80 g tempeh, 1 piece bread, 1 cup broccoli, 210 g cucumber, 190 g carrot, 1 cup rosemary, 1 tsp turmeric, 2 tbsps lime juice, 2 tbsps olive oil, 1 tsp garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 572,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 37,
            "sodium": 432,
            "carbohydrates": 55,
            "fiber": 4,
            "sugar": 11,
            "protein": 31
        }
    },
    "Thai Marinated Sweet Potato Risotto With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 236,
            "protein": 6,
            "carbs": 5,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g sweet potato as base. Add 1.4 cup quinoa, 1.1 cup corn, 1.7 cup pea and cook until tender. Incorporate 1.9 cup cucumber, 1.7 cup dill, 2 tbsps soy sauce and season with 1 tsp olive oil, 1 tsp garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "220 g sweet potato, 1.4 cup quinoa, 1.1 cup corn, 1.7 cup pea, 1.9 cup cucumber, 1.7 cup dill, 2 tbsps soy sauce, 1 tsp cumin, 1 tsp olive oil, 1 tsp garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 236,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 48,
            "sodium": 401,
            "carbohydrates": 5,
            "fiber": 11,
            "sugar": 9,
            "protein": 6
        }
    },
    "French Smoky Quinoa Soup With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 248,
            "protein": 10,
            "carbs": 30,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 160 g rice, 210 g pea, 110 g zucchini in oil until softened. Add broth and 80 g quinoa, simmer until tender. Season with 1 tsp olive oil, 3 cloves garlic, 2 tbsps onion and serve hot.",
        "ingredients": "80 g quinoa, 160 g rice, 210 g pea, 110 g zucchini, 0.6 cup corn, 1.5 cup dill, 1 tsp soy sauce, 2 tsps curry paste, 1 tsp olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 248,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 9,
            "sodium": 596,
            "carbohydrates": 30,
            "fiber": 3,
            "sugar": 10,
            "protein": 10
        }
    },
    "Greek Marinated Lentils Sandwich With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 258,
            "protein": 11,
            "carbs": 74,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.7 cup lentils, 1.9 cup quinoa, 1.6 cup cabbage and top with 230 g tomato, 240 g kale, 1.6 cup cilantro. Season with 1 tsp olive oil, 3 cloves garlic, 1 cup onion and serve.",
        "ingredients": "1.7 cup lentils, 1.9 cup quinoa, 1.6 cup cabbage, 230 g tomato, 240 g kale, 1.6 cup cilantro, 2 tbsps vinegar, 2 tsps turmeric, 1 tsp olive oil, 3 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 258,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 4,
            "sodium": 452,
            "carbohydrates": 74,
            "fiber": 2,
            "sugar": 10,
            "protein": 11
        }
    },
    "Middle Eastern Crispy Tempeh Omelette With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 569,
            "protein": 20,
            "carbs": 67,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 0.9 cup spaghetti, 1.5 cup corn, 100 g lettuce until softened. Add beaten eggs and 200 g tempeh if applicable, scramble until cooked. Season with 2 tsps olive oil, 1 tsp garlic, 0.6 cup onion and serve immediately.",
        "ingredients": "200 g tempeh, 0.9 cup spaghetti, 1.5 cup corn, 100 g lettuce, 100 g cabbage, 80 g thyme, 1 tsp chili flakes, 2 pieces curry paste, 2 tsps olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 569,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 91,
            "sodium": 655,
            "carbohydrates": 67,
            "fiber": 13,
            "sugar": 19,
            "protein": 20
        }
    },
    "Greek Roasted Sweet Potato Skewers With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 435,
            "protein": 37,
            "carbs": 15,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 90 g sweet potato as base. Add 120 g oats, 160 g tomato, 1 tsp bell pepper and cook until tender. Incorporate 220 g cabbage, 1.6 cup mint, 2 tsps turmeric and season with 1 tsp olive oil, 1 tsp garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "90 g sweet potato, 120 g oats, 160 g tomato, 1 tsp bell pepper, 220 g cabbage, 1.6 cup mint, 2 tsps turmeric, 2 tsps lemon juice, 1 tsp olive oil, 1 tsp garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 435,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 50,
            "sodium": 439,
            "carbohydrates": 15,
            "fiber": 7,
            "sugar": 10,
            "protein": 37
        }
    },
    "Mexican Smoky Quinoa Rice With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 463,
            "protein": 5,
            "carbs": 35,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g quinoa as base. Add 1 piece bread, 80 g spinach, 0.8 cup cucumber and cook until tender. Incorporate 1.7 cup broccoli, 1.1 cup cilantro, 3 tbsps lime juice and season with 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "170 g quinoa, 1 piece bread, 80 g spinach, 0.8 cup cucumber, 1.7 cup broccoli, 1.1 cup cilantro, 3 tbsps lime juice, 2 tsps chili flakes, 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 463,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 1,
            "sodium": 414,
            "carbohydrates": 35,
            "fiber": 3,
            "sugar": 13,
            "protein": 5
        }
    },
    "Greek Smoky Quinoa Salad With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 266,
            "protein": 35,
            "carbs": 61,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 110 g quinoa, 1.3 cup soba, 1.8 cup carrot, 1.9 cup tomato in a bowl. Add 1.9 cup spinach, 240 g thyme, 2 tsps cumin and toss gently. Dress with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion and serve fresh.",
        "ingredients": "110 g quinoa, 1.3 cup soba, 1.8 cup carrot, 1.9 cup tomato, 1.9 cup spinach, 240 g thyme, 2 tsps cumin, 1 piece curry paste, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 266,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 1,
            "sodium": 98,
            "carbohydrates": 61,
            "fiber": 7,
            "sugar": 4,
            "protein": 35
        }
    },
    "French Crispy Eggplant Stir-fry With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 435,
            "protein": 44,
            "carbs": 80,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 pieces eggplant as base. Add 220 g noodles, 2 cup corn, 1 tsp bell pepper and cook until tender. Incorporate 90 g lettuce, 150 g rosemary, 2 tsps soy sauce and season with 1 tsp olive oil, 2 tsps garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "2 pieces eggplant, 220 g noodles, 2 cup corn, 1 tsp bell pepper, 90 g lettuce, 150 g rosemary, 2 tsps soy sauce, 2 tsps curry paste, 1 tsp olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 435,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 96,
            "sodium": 73,
            "carbohydrates": 80,
            "fiber": 9,
            "sugar": 3,
            "protein": 44
        }
    },
    "Indian Baked Mushrooms Risotto With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 644,
            "protein": 34,
            "carbs": 8,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 tsps mushrooms as base. Add 1 cup couscous, 100 g cucumber, 80 g mushroom and cook until tender. Incorporate 0.7 cup lettuce, 1.1 cup parsley, 1 tsp cumin and season with 1 tsp olive oil, 2 cloves garlic, 0.5 cup onion. Serve hot.",
        "ingredients": "2 tsps mushrooms, 1 cup couscous, 100 g cucumber, 80 g mushroom, 0.7 cup lettuce, 1.1 cup parsley, 1 tsp cumin, 1 tsp chili flakes, 1 tsp olive oil, 2 cloves garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 644,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 87,
            "sodium": 388,
            "carbohydrates": 8,
            "fiber": 9,
            "sugar": 18,
            "protein": 34
        }
    },
    "Moroccan Crispy Mushrooms Tacos With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 602,
            "protein": 32,
            "carbs": 9,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tsp mushrooms as base. Add 1.9 cup spaghetti, 60 g broccoli, 1 tsp bell pepper and cook until tender. Incorporate 1.5 cup pea, 1.5 cup rosemary, 2 tsps soy sauce and season with 1 tsp olive oil, 3 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1 tsp mushrooms, 1.9 cup spaghetti, 60 g broccoli, 1 tsp bell pepper, 1.5 cup pea, 1.5 cup rosemary, 2 tsps soy sauce, 2 tbsps lime juice, 1 tsp olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 602,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 80,
            "sodium": 627,
            "carbohydrates": 9,
            "fiber": 5,
            "sugar": 18,
            "protein": 32
        }
    },
    "Thai Smoky Halloumi Soup With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 240,
            "protein": 19,
            "carbs": 42,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.3 cup noodles, 120 g carrot, 1.4 cup broccoli in oil until softened. Add broth and 1.6 cup halloumi, simmer until tender. Season with 1 tbsp olive oil, 1 tsp garlic, 1.7 cup onion and serve hot.",
        "ingredients": "1.6 cup halloumi, 1.3 cup noodles, 120 g carrot, 1.4 cup broccoli, 60 g pea, 1.1 cup thyme, 1.4 cup curry paste, 2 tbsps soy sauce, 1 tbsp olive oil, 1 tsp garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 240,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 22,
            "sodium": 134,
            "carbohydrates": 42,
            "fiber": 2,
            "sugar": 15,
            "protein": 19
        }
    },
    "Moroccan Stir-fried Black Beans Wrap With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 320,
            "protein": 38,
            "carbs": 75,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 160 g black beans, 1 piece bread, 1.5 cup tomato, 150 g cabbage. Add 60 g cucumber, 70 g parsley, 2 tsps ginger and roll tightly. Serve with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion on the side.",
        "ingredients": "160 g black beans, 1 piece bread, 1.5 cup tomato, 150 g cabbage, 60 g cucumber, 70 g parsley, 2 tsps ginger, 1.6 cup curry paste, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 320,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 110,
            "sodium": 490,
            "carbohydrates": 75,
            "fiber": 7,
            "sugar": 20,
            "protein": 38
        }
    },
    "Korean Marinated Broccoli Omelette With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 631,
            "protein": 7,
            "carbs": 19,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 120 g soba, 0.6 cup pea, 1 tsp bell pepper until softened. Add beaten eggs and 240 g broccoli if applicable, scramble until cooked. Season with 2 tbsps olive oil, 3 cloves garlic, 1 cup onion and serve immediately.",
        "ingredients": "240 g broccoli, 120 g soba, 0.6 cup pea, 1 tsp bell pepper, 190 g cabbage, 70 g rosemary, 2 tsps ginger, 3 tbsps lime juice, 2 tbsps olive oil, 3 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 631,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 114,
            "sodium": 432,
            "carbohydrates": 19,
            "fiber": 1,
            "sugar": 21,
            "protein": 7
        }
    },
    "Korean Poached Paneer Sandwich With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 593,
            "protein": 29,
            "carbs": 80,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 190 g paneer, 70 g potato, 130 g mushroom and top with 140 g pea, 160 g zucchini, 210 g basil. Season with 1 tsp olive oil, 1 tsp garlic, 2 cup onion and serve.",
        "ingredients": "190 g paneer, 70 g potato, 130 g mushroom, 140 g pea, 160 g zucchini, 210 g basil, 1 tsp chili flakes, 2 tsps cumin, 1 tsp olive oil, 1 tsp garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 593,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 4,
            "sodium": 835,
            "carbohydrates": 80,
            "fiber": 10,
            "sugar": 3,
            "protein": 29
        }
    },
    "Japanese Grilled Eggplant Curry With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 160,
            "protein": 24,
            "carbs": 22,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1 piece tortilla, 160 g mushroom, 180 g broccoli until crisp-tender. Add 1 tbsp eggplant and 2 tsps bell pepper, 1.6 cup mint, 2 tsps soy sauce. Season with 2 tsps olive oil, 2 cloves garlic, 1.6 cup onion and serve over rice.",
        "ingredients": "1 tbsp eggplant, 1 piece tortilla, 160 g mushroom, 180 g broccoli, 2 tsps bell pepper, 1.6 cup mint, 2 tsps soy sauce, 2 tsps turmeric, 2 tsps olive oil, 2 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 160,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 51,
            "sodium": 161,
            "carbohydrates": 22,
            "fiber": 11,
            "sugar": 9,
            "protein": 24
        }
    },
    "French Stir-fried Tofu Sandwich With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 550,
            "protein": 6,
            "carbs": 42,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.8 cup tofu, 210 g spaghetti, 90 g broccoli and top with 180 g lettuce, 0.9 cup corn, 210 g basil. Season with 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion and serve.",
        "ingredients": "1.8 cup tofu, 210 g spaghetti, 90 g broccoli, 180 g lettuce, 0.9 cup corn, 210 g basil, 1 clove ginger, 1.9 cup curry paste, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 550,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 33,
            "sodium": 760,
            "carbohydrates": 42,
            "fiber": 8,
            "sugar": 2,
            "protein": 6
        }
    },
    "Middle Eastern Baked Mushrooms Skewers With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 356,
            "protein": 22,
            "carbs": 38,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup mushrooms as base. Add 2 tbsps yogurt, 1.8 cup mushroom, 120 g zucchini and cook until tender. Incorporate 2 tsps bell pepper, 90 g rosemary, 2 tsps paprika and season with 1 tsp olive oil, 2 tsps garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "0.8 cup mushrooms, 2 tbsps yogurt, 1.8 cup mushroom, 120 g zucchini, 2 tsps bell pepper, 90 g rosemary, 2 tsps paprika, 1 tsp chili flakes, 1 tsp olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 356,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 22,
            "sodium": 377,
            "carbohydrates": 38,
            "fiber": 13,
            "sugar": 14,
            "protein": 22
        }
    },
    "Moroccan Braised Tempeh Toast With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 615,
            "protein": 8,
            "carbs": 71,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 130 g tempeh, 190 g bulgur, 220 g tomato and top with 1.6 cup pea, 100 g broccoli, 130 g cilantro. Season with 1 tbsp olive oil, 1 clove garlic, 1.7 cup onion and serve.",
        "ingredients": "130 g tempeh, 190 g bulgur, 220 g tomato, 1.6 cup pea, 100 g broccoli, 130 g cilantro, 3 cloves ginger, 2 tsps sesame oil, 1 tbsp olive oil, 1 clove garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 615,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 110,
            "sodium": 680,
            "carbohydrates": 71,
            "fiber": 11,
            "sugar": 10,
            "protein": 8
        }
    },
    "Moroccan Grilled Seitan Sandwich With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 229,
            "protein": 39,
            "carbs": 61,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.3 cup seitan, 220 g oats, 1.6 cup cucumber and top with 1.3 cup pea, 1.6 cup spinach, 0.6 cup parsley. Season with 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion and serve.",
        "ingredients": "1.3 cup seitan, 220 g oats, 1.6 cup cucumber, 1.3 cup pea, 1.6 cup spinach, 0.6 cup parsley, 2 tsps sesame oil, 1 tsp cumin, 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 229,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 114,
            "sodium": 537,
            "carbohydrates": 61,
            "fiber": 7,
            "sugar": 2,
            "protein": 39
        }
    },
    "Thai Glazed Seitan Frittata With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 280,
            "protein": 9,
            "carbs": 70,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 210 g quinoa, 140 g corn, 210 g tomato in oil. Pour beaten eggs over vegetables, add 0.9 cup seitan if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion.",
        "ingredients": "0.9 cup seitan, 210 g quinoa, 140 g corn, 210 g tomato, 120 g cucumber, 180 g mint, 1 tsp chili flakes, 1 piece curry paste, 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 280,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 58,
            "sodium": 445,
            "carbohydrates": 70,
            "fiber": 3,
            "sugar": 13,
            "protein": 9
        }
    },
    "American Smoky Eggplant Stir-fry With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 220,
            "protein": 3,
            "carbs": 85,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tsp eggplant as base. Add 1 piece tortilla, 240 g zucchini, 1.5 cup broccoli and cook until tender. Incorporate 150 g lettuce, 190 g thyme, 2 tbsps soy sauce and season with 2 tsps olive oil, 2 tsps garlic, 2 cup onion. Serve hot.",
        "ingredients": "1 tsp eggplant, 1 piece tortilla, 240 g zucchini, 1.5 cup broccoli, 150 g lettuce, 190 g thyme, 2 tbsps soy sauce, 1 tsp chili flakes, 2 tsps olive oil, 2 tsps garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 220,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 16,
            "sodium": 222,
            "carbohydrates": 85,
            "fiber": 7,
            "sugar": 4,
            "protein": 3
        }
    },
    "Italian Braised Broccoli Congee With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 637,
            "protein": 40,
            "carbs": 37,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1 cup broccoli with water or broth until soft and creamy. Add 1.2 cup noodles, 0.9 cup corn, 0.9 cup lettuce and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 cloves garlic, 1.8 cup onion and serve hot.",
        "ingredients": "1 cup broccoli, 1.2 cup noodles, 0.9 cup corn, 0.9 cup lettuce, 230 g rosemary, 1 tsp lime juice, 1 tsp sesame oil, 2 tsps olive oil, 2 cloves garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 637,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 68,
            "sodium": 880,
            "carbohydrates": 37,
            "fiber": 1,
            "sugar": 15,
            "protein": 40
        }
    },
    "Greek Baked Quinoa Toast With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 255,
            "protein": 10,
            "carbs": 60,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 120 g quinoa, 1 tsp yogurt, 220 g corn and top with 210 g carrot, 1.1 cup tomato, 0.7 cup mint. Season with 2 tsps olive oil, 2 tsps garlic, 2 cup onion and serve.",
        "ingredients": "120 g quinoa, 1 tsp yogurt, 220 g corn, 210 g carrot, 1.1 cup tomato, 0.7 cup mint, 2 tbsps lemon juice, 1 tsp ginger, 2 tsps olive oil, 2 tsps garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 255,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 86,
            "sodium": 281,
            "carbohydrates": 60,
            "fiber": 7,
            "sugar": 15,
            "protein": 10
        }
    },
    "Korean Glazed Halloumi Risotto With Harissa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 465,
            "protein": 24,
            "carbs": 10,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.5 cup halloumi as base. Add 1.6 cup udon, 190 g kale, 1.5 cup carrot and cook until tender. Incorporate 150 g broccoli, 110 g basil, 1 tsp turmeric and season with 2 tsps olive oil, 2 tsps garlic, 1.9 cup onion. Serve hot.",
        "ingredients": "0.5 cup halloumi, 1.6 cup udon, 190 g kale, 1.5 cup carrot, 150 g broccoli, 110 g basil, 1 tsp turmeric, 190 g curry paste, 2 tsps olive oil, 2 tsps garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 465,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 69,
            "sodium": 354,
            "carbohydrates": 10,
            "fiber": 3,
            "sugar": 18,
            "protein": 24
        }
    },
    "Turkish Roasted Mushrooms Stew With Harissa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 210,
            "protein": 34,
            "carbs": 46,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 3 tbsps mushrooms as base. Add 80 g potato, 130 g corn, 220 g pea and cook until tender. Incorporate 130 g carrot, 120 g rosemary, 0.7 cup curry paste and season with 2 tsps olive oil, 3 cloves garlic, 2 cup onion. Serve hot.",
        "ingredients": "3 tbsps mushrooms, 80 g potato, 130 g corn, 220 g pea, 130 g carrot, 120 g rosemary, 0.7 cup curry paste, 1 clove ginger, 2 tsps olive oil, 3 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 210,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 88,
            "sodium": 480,
            "carbohydrates": 46,
            "fiber": 14,
            "sugar": 5,
            "protein": 34
        }
    },
    "Turkish Baked Broccoli Noodles With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 471,
            "protein": 40,
            "carbs": 29,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g broccoli as base. Add 60 g oats, 230 g cucumber, 240 g cabbage and cook until tender. Incorporate 0.6 cup spinach, 2 cup thyme, 1 tsp soy sauce and season with 1 tsp olive oil, 2 tsps garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "170 g broccoli, 60 g oats, 230 g cucumber, 240 g cabbage, 0.6 cup spinach, 2 cup thyme, 1 tsp soy sauce, 1 tsp paprika, 1 tsp olive oil, 2 tsps garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 471,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 8,
            "sodium": 323,
            "carbohydrates": 29,
            "fiber": 14,
            "sugar": 17,
            "protein": 40
        }
    },
    "Spanish Crispy Paneer Sandwich With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 483,
            "protein": 12,
            "carbs": 76,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.6 cup paneer, 1.6 cup couscous, 0.7 cup cucumber and top with 190 g corn, 1.1 cup carrot, 60 g mint. Season with 2 tsps olive oil, 1 tsp garlic, 0.8 cup onion and serve.",
        "ingredients": "1.6 cup paneer, 1.6 cup couscous, 0.7 cup cucumber, 190 g corn, 1.1 cup carrot, 60 g mint, 2 tsps lime juice, 1 tsp paprika, 2 tsps olive oil, 1 tsp garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 483,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 81,
            "sodium": 287,
            "carbohydrates": 76,
            "fiber": 13,
            "sugar": 21,
            "protein": 12
        }
    },
    "Italian Glazed Sweet Potato Porridge With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 202,
            "protein": 23,
            "carbs": 50,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.5 cup sweet potato with water or broth until soft and creamy. Add 1.4 cup spaghetti, 1.7 cup kale, 100 g mushroom and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 tsp garlic, 1.4 cup onion and serve hot.",
        "ingredients": "1.5 cup sweet potato, 1.4 cup spaghetti, 1.7 cup kale, 100 g mushroom, 90 g tomato, 130 g rosemary, 3 cloves ginger, 2 tsps soy sauce, 1 tsp olive oil, 1 tsp garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 202,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 38,
            "sodium": 191,
            "carbohydrates": 50,
            "fiber": 12,
            "sugar": 17,
            "protein": 23
        }
    },
    "Japanese Pan-seared Lentils Toast With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 236,
            "protein": 17,
            "carbs": 53,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 200 g lentils, 0.9 cup udon, 2 tsps bell pepper and top with 80 g pea, 140 g corn, 160 g mint. Season with 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion and serve.",
        "ingredients": "200 g lentils, 0.9 cup udon, 2 tsps bell pepper, 80 g pea, 140 g corn, 160 g mint, 1 tbsp sesame oil, 2 tsps soy sauce, 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 236,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 16,
            "sodium": 92,
            "carbohydrates": 53,
            "fiber": 7,
            "sugar": 10,
            "protein": 17
        }
    },
    "French Poached Chickpeas Soup With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 289,
            "protein": 15,
            "carbs": 49,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.8 cup oats, 190 g mushroom, 220 g cabbage in oil until softened. Add broth and 100 g chickpeas, simmer until tender. Season with 2 tbsps olive oil, 2 cloves garlic, 1 tbsp onion and serve hot.",
        "ingredients": "100 g chickpeas, 0.8 cup oats, 190 g mushroom, 220 g cabbage, 140 g broccoli, 0.7 cup parsley, 1 tsp turmeric, 1 tbsp vinegar, 2 tbsps olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 289,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 81,
            "sodium": 386,
            "carbohydrates": 49,
            "fiber": 11,
            "sugar": 9,
            "protein": 15
        }
    },
    "Moroccan Pan-seared Halloumi Stir-fry With Harissa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 392,
            "protein": 19,
            "carbs": 55,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 230 g halloumi as base. Add 1.8 cup noodles, 0.9 cup mushroom, 60 g carrot and cook until tender. Incorporate 1 cup cucumber, 1.4 cup basil, 2 tsps paprika and season with 2 tbsps olive oil, 3 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "230 g halloumi, 1.8 cup noodles, 0.9 cup mushroom, 60 g carrot, 1 cup cucumber, 1.4 cup basil, 2 tsps paprika, 1 tsp lime juice, 2 tbsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 392,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 2,
            "sodium": 187,
            "carbohydrates": 55,
            "fiber": 2,
            "sugar": 1,
            "protein": 19
        }
    },
    "Mexican Baked Zucchini Bowl With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 625,
            "protein": 3,
            "carbs": 8,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 2 cup zucchini, 190 g noodles, 200 g cabbage with liquid until smooth. Top with 0.7 cup spinach, 110 g parsley, 1 tsp paprika and garnish with 1 tbsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve chilled.",
        "ingredients": "2 cup zucchini, 190 g noodles, 200 g cabbage, 0.7 cup spinach, 110 g parsley, 1 tsp paprika, 1 tsp lemon juice, 1 tbsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 625,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 49,
            "sodium": 857,
            "carbohydrates": 8,
            "fiber": 13,
            "sugar": 18,
            "protein": 3
        }
    },
    "Middle Eastern Glazed Tempeh Salad With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 370,
            "protein": 7,
            "carbs": 34,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 80 g tempeh, 1 piece wrap, 2 cup zucchini, 230 g carrot in a bowl. Add 1.4 cup cabbage, 0.7 cup cilantro, 3 tbsps sesame oil and toss gently. Dress with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion and serve fresh.",
        "ingredients": "80 g tempeh, 1 piece wrap, 2 cup zucchini, 230 g carrot, 1.4 cup cabbage, 0.7 cup cilantro, 3 tbsps sesame oil, 1 tsp chili flakes, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 370,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 48,
            "sodium": 214,
            "carbohydrates": 34,
            "fiber": 12,
            "sugar": 9,
            "protein": 7
        }
    },
    "Chinese Crispy Eggplant Pasta With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 501,
            "protein": 5,
            "carbs": 23,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 130 g eggplant as base. Add 2 pieces wrap, 1 cup cabbage, 1.4 cup kale and cook until tender. Incorporate 1.9 cup tomato, 130 g rosemary, 2 tsps turmeric and season with 1 tbsp olive oil, 3 cloves garlic, 1 cup onion. Serve hot.",
        "ingredients": "130 g eggplant, 2 pieces wrap, 1 cup cabbage, 1.4 cup kale, 1.9 cup tomato, 130 g rosemary, 2 tsps turmeric, 2 tsps paprika, 1 tbsp olive oil, 3 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 501,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 69,
            "sodium": 193,
            "carbohydrates": 23,
            "fiber": 11,
            "sugar": 1,
            "protein": 5
        }
    },
    "Spanish Grilled Tofu Stew With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 567,
            "protein": 41,
            "carbs": 19,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 240 g tofu as base. Add 200 g oats, 0.8 cup broccoli, 150 g tomato and cook until tender. Incorporate 80 g lettuce, 160 g parsley, 2 tsps lime juice and season with 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "240 g tofu, 200 g oats, 0.8 cup broccoli, 150 g tomato, 80 g lettuce, 160 g parsley, 2 tsps lime juice, 1 tsp sesame oil, 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 567,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 9,
            "sodium": 520,
            "carbohydrates": 19,
            "fiber": 2,
            "sugar": 8,
            "protein": 41
        }
    },
    "Spanish Roasted Seitan Stir-fry With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 613,
            "protein": 44,
            "carbs": 57,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.8 cup seitan as base. Add 0.8 cup spaghetti, 160 g broccoli, 90 g mushroom and cook until tender. Incorporate 110 g lettuce, 100 g cilantro, 1 tsp ginger and season with 1 tsp olive oil, 1 tsp garlic, 1 cup onion. Serve hot.",
        "ingredients": "1.8 cup seitan, 0.8 cup spaghetti, 160 g broccoli, 90 g mushroom, 110 g lettuce, 100 g cilantro, 1 tsp ginger, 2 tsps lemon juice, 1 tsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 613,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 81,
            "sodium": 392,
            "carbohydrates": 57,
            "fiber": 7,
            "sugar": 2,
            "protein": 44
        }
    },
    "American Baked Pumpkin Skewers With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 647,
            "protein": 38,
            "carbs": 19,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 120 g pumpkin as base. Add 240 g quinoa, 230 g corn, 60 g zucchini and cook until tender. Incorporate 110 g mushroom, 110 g cilantro, 180 g curry paste and season with 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "120 g pumpkin, 240 g quinoa, 230 g corn, 60 g zucchini, 110 g mushroom, 110 g cilantro, 180 g curry paste, 2 tsps cumin, 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 647,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 88,
            "sodium": 390,
            "carbohydrates": 19,
            "fiber": 10,
            "sugar": 17,
            "protein": 38
        }
    },
    "French Glazed Black Beans Tacos With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 213,
            "protein": 27,
            "carbs": 59,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.9 cup black beans as base. Add 1 piece tortilla, 240 g kale, 1.3 cup carrot and cook until tender. Incorporate 190 g lettuce, 170 g cilantro, 1 tsp sesame oil and season with 1 tbsp olive oil, 2 tsps garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "1.9 cup black beans, 1 piece tortilla, 240 g kale, 1.3 cup carrot, 190 g lettuce, 170 g cilantro, 1 tsp sesame oil, 1 tsp vinegar, 1 tbsp olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 213,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 118,
            "sodium": 233,
            "carbohydrates": 59,
            "fiber": 14,
            "sugar": 14,
            "protein": 27
        }
    },
    "Mexican Crispy Eggplant Frittata With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 566,
            "protein": 15,
            "carbs": 63,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.7 cup oats, 240 g pea, 1.4 cup cabbage in oil. Pour beaten eggs over vegetables, add 3 tbsps eggplant if applicable. Cook until set, then finish under broiler. Season with 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion.",
        "ingredients": "3 tbsps eggplant, 1.7 cup oats, 240 g pea, 1.4 cup cabbage, 220 g kale, 60 g rosemary, 2 tsps sesame oil, 2 tsps vinegar, 3 tbsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 566,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 63,
            "sodium": 159,
            "carbohydrates": 63,
            "fiber": 10,
            "sugar": 11,
            "protein": 15
        }
    },
    "Korean Stir-fried Chickpeas Bowl With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 439,
            "protein": 13,
            "carbs": 56,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.9 cup chickpeas, 220 g soba, 1.2 cup kale with liquid until smooth. Top with 160 g lettuce, 2 tsps bell pepper, 240 g rosemary and garnish with 2 tbsps olive oil, 2 tsps garlic, 1 cup onion. Serve chilled.",
        "ingredients": "1.9 cup chickpeas, 220 g soba, 1.2 cup kale, 160 g lettuce, 2 tsps bell pepper, 240 g rosemary, 1 clove ginger, 1 tsp paprika, 2 tbsps olive oil, 2 tsps garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 439,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 31,
            "sodium": 708,
            "carbohydrates": 56,
            "fiber": 4,
            "sugar": 13,
            "protein": 13
        }
    },
    "Indian Crispy Black Beans Stew With Miso Glaze": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 387,
            "protein": 30,
            "carbs": 67,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.5 cup black beans as base. Add 1.9 cup soba, 1.7 cup tomato, 200 g carrot and cook until tender. Incorporate 2 tsps bell pepper, 200 g thyme, 3 tbsps soy sauce and season with 1 tbsp olive oil, 1 tsp garlic, 1.1 cup onion. Serve hot.",
        "ingredients": "1.5 cup black beans, 1.9 cup soba, 1.7 cup tomato, 200 g carrot, 2 tsps bell pepper, 200 g thyme, 3 tbsps soy sauce, 1 tsp chili flakes, 1 tbsp olive oil, 1 tsp garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 387,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 22,
            "sodium": 900,
            "carbohydrates": 67,
            "fiber": 14,
            "sugar": 22,
            "protein": 30
        }
    },
    "Greek Grilled Black Beans Stir-fry With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 211,
            "protein": 23,
            "carbs": 33,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 130 g black beans as base. Add 1.3 cup quinoa, 0.5 cup spinach, 1.6 cup cucumber and cook until tender. Incorporate 1.5 cup zucchini, 100 g mint, 3 tbsps lime juice and season with 2 tsps olive oil, 1 tsp garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "130 g black beans, 1.3 cup quinoa, 0.5 cup spinach, 1.6 cup cucumber, 1.5 cup zucchini, 100 g mint, 3 tbsps lime juice, 1 tsp chili flakes, 2 tsps olive oil, 1 tsp garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 211,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 59,
            "sodium": 539,
            "carbohydrates": 33,
            "fiber": 15,
            "sugar": 17,
            "protein": 23
        }
    },
    "American Baked Lentils Curry With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 295,
            "protein": 24,
            "carbs": 5,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1 piece wrap, 140 g mushroom, 1 cup tomato until crisp-tender. Add 1.7 cup lentils and 100 g broccoli, 1.4 cup mint, 3 tbsps vinegar. Season with 3 tbsps olive oil, 3 cloves garlic, 0.7 cup onion and serve over rice.",
        "ingredients": "1.7 cup lentils, 1 piece wrap, 140 g mushroom, 1 cup tomato, 100 g broccoli, 1.4 cup mint, 3 tbsps vinegar, 1 tsp chili flakes, 3 tbsps olive oil, 3 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 295,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 37,
            "sodium": 229,
            "carbohydrates": 5,
            "fiber": 14,
            "sugar": 19,
            "protein": 24
        }
    },
    "Indian Marinated Pumpkin Tacos With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 612,
            "protein": 24,
            "carbs": 17,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 tsps pumpkin as base. Add 2 tsps yogurt, 0.5 cup broccoli, 1 cup lettuce and cook until tender. Incorporate 190 g pea, 240 g cilantro, 2 tbsps curry paste and season with 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "2 tsps pumpkin, 2 tsps yogurt, 0.5 cup broccoli, 1 cup lettuce, 190 g pea, 240 g cilantro, 2 tbsps curry paste, 1 tsp soy sauce, 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 612,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 4,
            "sodium": 328,
            "carbohydrates": 17,
            "fiber": 2,
            "sugar": 21,
            "protein": 24
        }
    },
    "Japanese Grilled Seitan Tacos With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 171,
            "protein": 16,
            "carbs": 20,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.7 cup seitan as base. Add 130 g rice, 2 tsps bell pepper, 1.4 cup carrot and cook until tender. Incorporate 190 g zucchini, 0.7 cup rosemary, 2 tsps lemon juice and season with 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "0.7 cup seitan, 130 g rice, 2 tsps bell pepper, 1.4 cup carrot, 190 g zucchini, 0.7 cup rosemary, 2 tsps lemon juice, 2 tsps vinegar, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 171,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 57,
            "sodium": 407,
            "carbohydrates": 20,
            "fiber": 3,
            "sugar": 19,
            "protein": 16
        }
    },
    "Moroccan Glazed Black Beans Wrap With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 540,
            "protein": 41,
            "carbs": 85,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.4 cup black beans, 130 g soba, 1.4 cup mushroom, 1.9 cup broccoli. Add 190 g zucchini, 1.5 cup mint, 2 tsps ginger and roll tightly. Serve with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion on the side.",
        "ingredients": "1.4 cup black beans, 130 g soba, 1.4 cup mushroom, 1.9 cup broccoli, 190 g zucchini, 1.5 cup mint, 2 tsps ginger, 2 tsps vinegar, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 540,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 64,
            "sodium": 116,
            "carbohydrates": 85,
            "fiber": 1,
            "sugar": 12,
            "protein": 41
        }
    },
    "Italian Pan-seared Seitan Risotto With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 457,
            "protein": 24,
            "carbs": 51,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 130 g seitan as base. Add 120 g quinoa, 1.2 cup carrot, 1.6 cup mushroom and cook until tender. Incorporate 1 cup spinach, 60 g cilantro, 2 tsps cumin and season with 1 tbsp olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "130 g seitan, 120 g quinoa, 1.2 cup carrot, 1.6 cup mushroom, 1 cup spinach, 60 g cilantro, 2 tsps cumin, 2 cloves ginger, 1 tbsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 457,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 64,
            "sodium": 248,
            "carbohydrates": 51,
            "fiber": 3,
            "sugar": 15,
            "protein": 24
        }
    },
    "Vietnamese Glazed Tempeh Wrap With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 466,
            "protein": 27,
            "carbs": 42,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 100 g tempeh, 1 tbsp yogurt, 130 g zucchini, 1.5 cup spinach. Add 1.4 cup lettuce, 0.7 cup thyme, 1 tsp ginger and roll tightly. Serve with 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion on the side.",
        "ingredients": "100 g tempeh, 1 tbsp yogurt, 130 g zucchini, 1.5 cup spinach, 1.4 cup lettuce, 0.7 cup thyme, 1 tsp ginger, 1 tbsp vinegar, 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 466,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 55,
            "sodium": 606,
            "carbohydrates": 42,
            "fiber": 1,
            "sugar": 9,
            "protein": 27
        }
    },
    "Spanish Marinated Paneer Omelette With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 625,
            "protein": 23,
            "carbs": 60,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.8 cup quinoa, 160 g zucchini, 1.3 cup mushroom until softened. Add beaten eggs and 130 g paneer if applicable, scramble until cooked. Season with 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "130 g paneer, 1.8 cup quinoa, 160 g zucchini, 1.3 cup mushroom, 130 g lettuce, 160 g basil, 1 tbsp vinegar, 1 tsp ginger, 3 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 625,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 71,
            "sodium": 210,
            "carbohydrates": 60,
            "fiber": 1,
            "sugar": 9,
            "protein": 23
        }
    },
    "Italian Poached Tempeh Pasta With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 453,
            "protein": 7,
            "carbs": 61,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 150 g tempeh as base. Add 1.1 cup couscous, 1.7 cup carrot, 120 g kale and cook until tender. Incorporate 2 tsps bell pepper, 230 g basil, 2 tsps cumin and season with 1 tbsp olive oil, 2 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "150 g tempeh, 1.1 cup couscous, 1.7 cup carrot, 120 g kale, 2 tsps bell pepper, 230 g basil, 2 tsps cumin, 2 tbsps lemon juice, 1 tbsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 453,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 95,
            "sodium": 899,
            "carbohydrates": 61,
            "fiber": 5,
            "sugar": 6,
            "protein": 7
        }
    },
    "Greek Pan-seared Sweet Potato Salad With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 255,
            "protein": 39,
            "carbs": 78,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.5 cup sweet potato, 200 g udon, 1 tsp bell pepper, 210 g spinach in a bowl. Add 1.4 cup zucchini, 0.9 cup basil, 1 tsp cumin and toss gently. Dress with 1 tsp olive oil, 1 tsp garlic, 1 cup onion and serve fresh.",
        "ingredients": "1.5 cup sweet potato, 200 g udon, 1 tsp bell pepper, 210 g spinach, 1.4 cup zucchini, 0.9 cup basil, 1 tsp cumin, 2 tsps lime juice, 1 tsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 255,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 7,
            "sodium": 463,
            "carbohydrates": 78,
            "fiber": 13,
            "sugar": 16,
            "protein": 39
        }
    },
    "American Roasted Mushrooms Curry With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 446,
            "protein": 7,
            "carbs": 5,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1 piece tortilla, 1.6 cup broccoli, 200 g cucumber until crisp-tender. Add 230 g mushrooms and 90 g carrot, 0.8 cup dill, 120 g curry paste. Season with 2 tsps olive oil, 2 cloves garlic, 1.3 cup onion and serve over rice.",
        "ingredients": "230 g mushrooms, 1 piece tortilla, 1.6 cup broccoli, 200 g cucumber, 90 g carrot, 0.8 cup dill, 120 g curry paste, 1 tsp lemon juice, 2 tsps olive oil, 2 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 446,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 24,
            "sodium": 405,
            "carbohydrates": 5,
            "fiber": 8,
            "sugar": 2,
            "protein": 7
        }
    },
    "Mexican Grilled Chickpeas Wrap With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 549,
            "protein": 43,
            "carbs": 69,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 0.8 cup chickpeas, 1.6 cup potato, 1 tsp bell pepper, 0.6 cup corn. Add 150 g broccoli, 120 g dill, 3 tbsps sesame oil and roll tightly. Serve with 1 tsp olive oil, 1 tsp garlic, 0.6 cup onion on the side.",
        "ingredients": "0.8 cup chickpeas, 1.6 cup potato, 1 tsp bell pepper, 0.6 cup corn, 150 g broccoli, 120 g dill, 3 tbsps sesame oil, 2 tsps cumin, 1 tsp olive oil, 1 tsp garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 549,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 13,
            "sodium": 145,
            "carbohydrates": 69,
            "fiber": 7,
            "sugar": 9,
            "protein": 43
        }
    },
    "Greek Marinated Eggplant Congee With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 483,
            "protein": 15,
            "carbs": 49,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 2 tsps eggplant with water or broth until soft and creamy. Add 1.1 cup rice, 0.9 cup spinach, 100 g broccoli and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 clove garlic, 3 tbsps onion and serve hot.",
        "ingredients": "2 tsps eggplant, 1.1 cup rice, 0.9 cup spinach, 100 g broccoli, 180 g zucchini, 0.7 cup cilantro, 1 tsp lime juice, 2 tsps vinegar, 1 tbsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 483,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 25,
            "sodium": 811,
            "carbohydrates": 49,
            "fiber": 6,
            "sugar": 21,
            "protein": 15
        }
    },
    "French Poached Halloumi Wrap With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 475,
            "protein": 17,
            "carbs": 31,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 150 g halloumi, 220 g noodles, 1.1 cup carrot, 1.8 cup cabbage. Add 1.6 cup kale, 180 g rosemary, 1 tbsp lime juice and roll tightly. Serve with 2 tbsps olive oil, 3 cloves garlic, 3 tbsps onion on the side.",
        "ingredients": "150 g halloumi, 220 g noodles, 1.1 cup carrot, 1.8 cup cabbage, 1.6 cup kale, 180 g rosemary, 1 tbsp lime juice, 1 tsp ginger, 2 tbsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 475,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 51,
            "sodium": 425,
            "carbohydrates": 31,
            "fiber": 13,
            "sugar": 16,
            "protein": 17
        }
    },
    "Chinese Stir-fried Quinoa Sandwich With Harissa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 487,
            "protein": 3,
            "carbs": 8,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 120 g quinoa, 1.4 cup bulgur, 210 g zucchini and top with 110 g mushroom, 0.9 cup pea, 1 cup parsley. Season with 1 tbsp olive oil, 2 tsps garlic, 1 tbsp onion and serve.",
        "ingredients": "120 g quinoa, 1.4 cup bulgur, 210 g zucchini, 110 g mushroom, 0.9 cup pea, 1 cup parsley, 3 tbsps vinegar, 2 tsps lemon juice, 1 tbsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 487,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 40,
            "sodium": 106,
            "carbohydrates": 8,
            "fiber": 8,
            "sugar": 1,
            "protein": 3
        }
    },
    "Mexican Roasted Eggplant Stir-fry With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 520,
            "protein": 33,
            "carbs": 68,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 piece eggplant as base. Add 2 pieces wrap, 1.4 cup lettuce, 0.7 cup zucchini and cook until tender. Incorporate 230 g cabbage, 190 g dill, 1 tsp turmeric and season with 2 tsps olive oil, 1 tsp garlic, 2 cup onion. Serve hot.",
        "ingredients": "1 piece eggplant, 2 pieces wrap, 1.4 cup lettuce, 0.7 cup zucchini, 230 g cabbage, 190 g dill, 1 tsp turmeric, 2 tsps vinegar, 2 tsps olive oil, 1 tsp garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 520,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 75,
            "sodium": 167,
            "carbohydrates": 68,
            "fiber": 1,
            "sugar": 4,
            "protein": 33
        }
    },
    "Moroccan Roasted Tofu Salad With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 609,
            "protein": 24,
            "carbs": 85,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.8 cup tofu, 1.4 cup noodles, 110 g corn, 130 g spinach in a bowl. Add 1.5 cup lettuce, 1.6 cup rosemary, 1 tbsp lemon juice and toss gently. Dress with 1 tbsp olive oil, 2 cloves garlic, 1.3 cup onion and serve fresh.",
        "ingredients": "1.8 cup tofu, 1.4 cup noodles, 110 g corn, 130 g spinach, 1.5 cup lettuce, 1.6 cup rosemary, 1 tbsp lemon juice, 3 tbsps soy sauce, 1 tbsp olive oil, 2 cloves garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 609,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 4,
            "sodium": 88,
            "carbohydrates": 85,
            "fiber": 1,
            "sugar": 7,
            "protein": 24
        }
    },
    "Vietnamese Stir-fried Paneer Soup With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 355,
            "protein": 23,
            "carbs": 81,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 150 g udon, 1.4 cup cabbage, 230 g tomato in oil until softened. Add broth and 100 g paneer, simmer until tender. Season with 2 tsps olive oil, 1 clove garlic, 1.8 cup onion and serve hot.",
        "ingredients": "100 g paneer, 150 g udon, 1.4 cup cabbage, 230 g tomato, 1.9 cup cucumber, 230 g basil, 2 tsps chili flakes, 2 pieces curry paste, 2 tsps olive oil, 1 clove garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 355,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 40,
            "sodium": 302,
            "carbohydrates": 81,
            "fiber": 11,
            "sugar": 18,
            "protein": 23
        }
    },
    "Mexican Braised Broccoli Stew With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 244,
            "protein": 14,
            "carbs": 33,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 60 g broccoli as base. Add 1.5 cup oats, 220 g mushroom, 230 g cucumber and cook until tender. Incorporate 140 g tomato, 180 g rosemary, 1 tsp vinegar and season with 1 tbsp olive oil, 1 tsp garlic, 1.2 cup onion. Serve hot.",
        "ingredients": "60 g broccoli, 1.5 cup oats, 220 g mushroom, 230 g cucumber, 140 g tomato, 180 g rosemary, 1 tsp vinegar, 2 tsps lemon juice, 1 tbsp olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 244,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 76,
            "sodium": 299,
            "carbohydrates": 33,
            "fiber": 15,
            "sugar": 14,
            "protein": 14
        }
    },
    "Greek Crispy Cauliflower Skewers With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 483,
            "protein": 37,
            "carbs": 51,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tsp cauliflower as base. Add 1 piece wrap, 100 g cucumber, 1.6 cup cabbage and cook until tender. Incorporate 2 tsps bell pepper, 70 g rosemary, 1 tbsp vinegar and season with 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1 tsp cauliflower, 1 piece wrap, 100 g cucumber, 1.6 cup cabbage, 2 tsps bell pepper, 70 g rosemary, 1 tbsp vinegar, 1 tsp chili flakes, 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 483,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 21,
            "sodium": 101,
            "carbohydrates": 51,
            "fiber": 14,
            "sugar": 10,
            "protein": 37
        }
    },
    "American Roasted Lentils Stew With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 353,
            "protein": 40,
            "carbs": 77,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 170 g lentils as base. Add 90 g rice, 1.6 cup cucumber, 1 cup lettuce and cook until tender. Incorporate 240 g corn, 0.9 cup parsley, 2 tsps chili flakes and season with 3 tbsps olive oil, 3 cloves garlic, 1.9 cup onion. Serve hot.",
        "ingredients": "170 g lentils, 90 g rice, 1.6 cup cucumber, 1 cup lettuce, 240 g corn, 0.9 cup parsley, 2 tsps chili flakes, 1 tsp lime juice, 3 tbsps olive oil, 3 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 353,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 14,
            "sodium": 509,
            "carbohydrates": 77,
            "fiber": 15,
            "sugar": 21,
            "protein": 40
        }
    },
    "Korean Roasted Eggplant Stew With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 194,
            "protein": 28,
            "carbs": 49,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 90 g eggplant as base. Add 2 pieces wrap, 1 tsp bell pepper, 0.8 cup corn and cook until tender. Incorporate 1.9 cup pea, 1.5 cup dill, 1 tbsp vinegar and season with 2 tbsps olive oil, 1 tsp garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "90 g eggplant, 2 pieces wrap, 1 tsp bell pepper, 0.8 cup corn, 1.9 cup pea, 1.5 cup dill, 1 tbsp vinegar, 2 pieces curry paste, 2 tbsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 194,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 54,
            "sodium": 573,
            "carbohydrates": 49,
            "fiber": 4,
            "sugar": 13,
            "protein": 28
        }
    },
    "Moroccan Crispy Eggplant Tacos With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 247,
            "protein": 43,
            "carbs": 68,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 2 tbsps eggplant as base. Add 110 g udon, 210 g cabbage, 2 tsps bell pepper and cook until tender. Incorporate 190 g tomato, 220 g mint, 1 tbsp lime juice and season with 1 tsp olive oil, 2 cloves garlic, 1 cup onion. Serve hot.",
        "ingredients": "2 tbsps eggplant, 110 g udon, 210 g cabbage, 2 tsps bell pepper, 190 g tomato, 220 g mint, 1 tbsp lime juice, 1 tbsp soy sauce, 1 tsp olive oil, 2 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 247,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 110,
            "sodium": 571,
            "carbohydrates": 68,
            "fiber": 12,
            "sugar": 17,
            "protein": 43
        }
    },
    "Vietnamese Smoky Quinoa Stew With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 602,
            "protein": 28,
            "carbs": 73,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup quinoa as base. Add 140 g oats, 1.4 cup lettuce, 1.5 cup kale and cook until tender. Incorporate 90 g cucumber, 1.7 cup parsley, 1 tsp lemon juice and season with 2 tsps olive oil, 1 tsp garlic, 1.3 cup onion. Serve hot.",
        "ingredients": "0.8 cup quinoa, 140 g oats, 1.4 cup lettuce, 1.5 cup kale, 90 g cucumber, 1.7 cup parsley, 1 tsp lemon juice, 2 tsps lime juice, 2 tsps olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 602,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 118,
            "sodium": 703,
            "carbohydrates": 73,
            "fiber": 11,
            "sugar": 13,
            "protein": 28
        }
    },
    "Spanish Pan-seared Paneer Porridge With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 569,
            "protein": 12,
            "carbs": 23,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 100 g paneer with water or broth until soft and creamy. Add 1.6 cup noodles, 110 g carrot, 140 g mushroom and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 cloves garlic, 0.7 cup onion and serve hot.",
        "ingredients": "100 g paneer, 1.6 cup noodles, 110 g carrot, 140 g mushroom, 0.6 cup cabbage, 190 g thyme, 1 tsp curry paste, 1 tsp sesame oil, 2 tsps olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 569,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 14,
            "sodium": 772,
            "carbohydrates": 23,
            "fiber": 1,
            "sugar": 2,
            "protein": 12
        }
    },
    "Mexican Roasted Tofu Congee With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 260,
            "protein": 30,
            "carbs": 77,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.8 cup tofu with water or broth until soft and creamy. Add 220 g quinoa, 1.9 cup cucumber, 0.7 cup carrot and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 tsp garlic, 1 cup onion and serve hot.",
        "ingredients": "1.8 cup tofu, 220 g quinoa, 1.9 cup cucumber, 0.7 cup carrot, 170 g spinach, 1.5 cup dill, 1 tsp lime juice, 1 tsp cumin, 1 tbsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 260,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 26,
            "sodium": 509,
            "carbohydrates": 77,
            "fiber": 12,
            "sugar": 10,
            "protein": 30
        }
    },
    "French Crispy Mushrooms Frittata With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 312,
            "protein": 12,
            "carbs": 84,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 210 g quinoa, 110 g tomato, 1.3 cup cabbage in oil. Pour beaten eggs over vegetables, add 3 tbsps mushrooms if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 3 cloves garlic, 1.1 cup onion.",
        "ingredients": "3 tbsps mushrooms, 210 g quinoa, 110 g tomato, 1.3 cup cabbage, 170 g lettuce, 170 g mint, 1 tbsp soy sauce, 2 tsps cumin, 1 tsp olive oil, 3 cloves garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 312,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 38,
            "sodium": 726,
            "carbohydrates": 84,
            "fiber": 6,
            "sugar": 7,
            "protein": 12
        }
    },
    "Spanish Roasted Black Beans Skewers With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 399,
            "protein": 11,
            "carbs": 8,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.4 cup black beans as base. Add 1 tbsp yogurt, 1.2 cup kale, 2 tsps bell pepper and cook until tender. Incorporate 160 g lettuce, 90 g rosemary, 1 tsp vinegar and season with 3 tbsps olive oil, 1 tsp garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "1.4 cup black beans, 1 tbsp yogurt, 1.2 cup kale, 2 tsps bell pepper, 160 g lettuce, 90 g rosemary, 1 tsp vinegar, 1 tbsp lime juice, 3 tbsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 399,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 51,
            "sodium": 99,
            "carbohydrates": 8,
            "fiber": 1,
            "sugar": 14,
            "protein": 11
        }
    },
    "Turkish Pan-seared Pumpkin Skewers With Miso Glaze": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 286,
            "protein": 40,
            "carbs": 22,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tbsp pumpkin as base. Add 2 pieces tortilla, 2 tsps bell pepper, 70 g kale and cook until tender. Incorporate 1.2 cup carrot, 1.7 cup basil, 1 tbsp soy sauce and season with 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1 tbsp pumpkin, 2 pieces tortilla, 2 tsps bell pepper, 70 g kale, 1.2 cup carrot, 1.7 cup basil, 1 tbsp soy sauce, 2 tsps turmeric, 3 tbsps olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 286,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 6,
            "sodium": 622,
            "carbohydrates": 22,
            "fiber": 15,
            "sugar": 1,
            "protein": 40
        }
    },
    "Indian Marinated Tempeh Stew With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 287,
            "protein": 17,
            "carbs": 25,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.2 cup tempeh as base. Add 1.6 cup bulgur, 1.8 cup zucchini, 1.4 cup carrot and cook until tender. Incorporate 2 tsps bell pepper, 170 g mint, 1 tsp sesame oil and season with 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1.2 cup tempeh, 1.6 cup bulgur, 1.8 cup zucchini, 1.4 cup carrot, 2 tsps bell pepper, 170 g mint, 1 tsp sesame oil, 2 tsps lime juice, 3 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 287,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 40,
            "sodium": 275,
            "carbohydrates": 25,
            "fiber": 10,
            "sugar": 5,
            "protein": 17
        }
    },
    "Vietnamese Glazed Chickpeas Salad With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 387,
            "protein": 7,
            "carbs": 30,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.1 cup chickpeas, 1.8 cup udon, 1 tsp bell pepper, 110 g tomato in a bowl. Add 0.9 cup spinach, 0.6 cup parsley, 1 tsp chili flakes and toss gently. Dress with 2 tsps olive oil, 2 cloves garlic, 1.1 cup onion and serve fresh.",
        "ingredients": "1.1 cup chickpeas, 1.8 cup udon, 1 tsp bell pepper, 110 g tomato, 0.9 cup spinach, 0.6 cup parsley, 1 tsp chili flakes, 2 tsps paprika, 2 tsps olive oil, 2 cloves garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 387,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 68,
            "sodium": 339,
            "carbohydrates": 30,
            "fiber": 13,
            "sugar": 12,
            "protein": 7
        }
    },
    "Spanish Braised Pumpkin Risotto With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 626,
            "protein": 10,
            "carbs": 74,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.7 cup pumpkin as base. Add 1.1 cup soba, 1.5 cup cucumber, 160 g spinach and cook until tender. Incorporate 170 g broccoli, 2 cup thyme, 1 tbsp lime juice and season with 2 tsps olive oil, 1 tsp garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1.7 cup pumpkin, 1.1 cup soba, 1.5 cup cucumber, 160 g spinach, 170 g broccoli, 2 cup thyme, 1 tbsp lime juice, 1 tbsp vinegar, 2 tsps olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 626,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 13,
            "sodium": 808,
            "carbohydrates": 74,
            "fiber": 1,
            "sugar": 22,
            "protein": 10
        }
    },
    "Moroccan Braised Tofu Noodles With Harissa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 436,
            "protein": 12,
            "carbs": 71,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g tofu as base. Add 220 g couscous, 220 g corn, 210 g kale and cook until tender. Incorporate 1.4 cup pea, 220 g rosemary, 3 tbsps curry paste and season with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "80 g tofu, 220 g couscous, 220 g corn, 210 g kale, 1.4 cup pea, 220 g rosemary, 3 tbsps curry paste, 2 tsps chili flakes, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 436,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 95,
            "sodium": 72,
            "carbohydrates": 71,
            "fiber": 3,
            "sugar": 12,
            "protein": 12
        }
    },
    "Thai Marinated Tofu Soup With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 571,
            "protein": 33,
            "carbs": 14,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.6 cup rice, 100 g carrot, 110 g corn in oil until softened. Add broth and 1.8 cup tofu, simmer until tender. Season with 2 tsps olive oil, 1 clove garlic, 1.1 cup onion and serve hot.",
        "ingredients": "1.8 cup tofu, 0.6 cup rice, 100 g carrot, 110 g corn, 130 g lettuce, 0.8 cup rosemary, 1 tsp chili flakes, 1 tsp vinegar, 2 tsps olive oil, 1 clove garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 571,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 81,
            "sodium": 815,
            "carbohydrates": 14,
            "fiber": 8,
            "sugar": 2,
            "protein": 33
        }
    },
    "Indian Grilled Broccoli Frittata With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 577,
            "protein": 26,
            "carbs": 58,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 130 g quinoa, 100 g carrot, 0.9 cup zucchini in oil. Pour beaten eggs over vegetables, add 190 g broccoli if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 2 cloves garlic, 1.9 cup onion.",
        "ingredients": "190 g broccoli, 130 g quinoa, 100 g carrot, 0.9 cup zucchini, 210 g thyme, 1 tsp cumin, 2 tbsps lime juice, 1 tbsp olive oil, 2 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 577,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 108,
            "sodium": 692,
            "carbohydrates": 58,
            "fiber": 11,
            "sugar": 18,
            "protein": 26
        }
    },
    "Greek Roasted Mushrooms Omelette With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 385,
            "protein": 26,
            "carbs": 79,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 240 g couscous, 1.5 cup lettuce, 1 cup zucchini until softened. Add beaten eggs and 2 pieces mushrooms if applicable, scramble until cooked. Season with 1 tbsp olive oil, 3 cloves garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "2 pieces mushrooms, 240 g couscous, 1.5 cup lettuce, 1 cup zucchini, 1 tsp bell pepper, 1.5 cup basil, 1 tsp vinegar, 1 tsp lime juice, 1 tbsp olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 385,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 55,
            "sodium": 458,
            "carbohydrates": 79,
            "fiber": 15,
            "sugar": 3,
            "protein": 26
        }
    },
    "Indian Baked Cauliflower Omelette With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 635,
            "protein": 42,
            "carbs": 33,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 210 g soba, 0.8 cup broccoli, 2 tsps bell pepper until softened. Add beaten eggs and 1 piece cauliflower if applicable, scramble until cooked. Season with 3 tbsps olive oil, 2 tsps garlic, 2 tbsps onion and serve immediately.",
        "ingredients": "1 piece cauliflower, 210 g soba, 0.8 cup broccoli, 2 tsps bell pepper, 0.9 cup carrot, 120 g dill, 1 tbsp vinegar, 2 tsps cumin, 3 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 635,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 64,
            "sodium": 108,
            "carbohydrates": 33,
            "fiber": 2,
            "sugar": 5,
            "protein": 42
        }
    },
    "Spanish Pan-seared Lentils Noodles With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 594,
            "protein": 25,
            "carbs": 25,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 cup lentils as base. Add 0.5 cup rice, 110 g lettuce, 230 g broccoli and cook until tender. Incorporate 1 tsp bell pepper, 70 g cilantro, 1 tsp paprika and season with 1 tsp olive oil, 2 tsps garlic, 0.7 cup onion. Serve hot.",
        "ingredients": "1 cup lentils, 0.5 cup rice, 110 g lettuce, 230 g broccoli, 1 tsp bell pepper, 70 g cilantro, 1 tsp paprika, 2 tbsps soy sauce, 1 tsp olive oil, 2 tsps garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 594,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 81,
            "sodium": 502,
            "carbohydrates": 25,
            "fiber": 4,
            "sugar": 16,
            "protein": 25
        }
    },
    "Korean Baked Chickpeas Stir-fry With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 600,
            "protein": 43,
            "carbs": 25,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 60 g chickpeas as base. Add 1 piece bread, 200 g tomato, 110 g zucchini and cook until tender. Incorporate 80 g pea, 0.7 cup rosemary, 1 tbsp soy sauce and season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "60 g chickpeas, 1 piece bread, 200 g tomato, 110 g zucchini, 80 g pea, 0.7 cup rosemary, 1 tbsp soy sauce, 2 tbsps lime juice, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 600,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 63,
            "sodium": 480,
            "carbohydrates": 25,
            "fiber": 9,
            "sugar": 7,
            "protein": 43
        }
    },
    "American Smoky Eggplant Stir-fry With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 479,
            "protein": 29,
            "carbs": 45,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1 tbsp eggplant as base. Add 0.9 cup udon, 110 g corn, 0.7 cup cucumber and cook until tender. Incorporate 1.7 cup carrot, 0.9 cup basil, 1 tsp cumin and season with 1 tbsp olive oil, 2 tsps garlic, 0.6 cup onion. Serve hot.",
        "ingredients": "1 tbsp eggplant, 0.9 cup udon, 110 g corn, 0.7 cup cucumber, 1.7 cup carrot, 0.9 cup basil, 1 tsp cumin, 2 tsps ginger, 1 tbsp olive oil, 2 tsps garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 479,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 85,
            "sodium": 798,
            "carbohydrates": 45,
            "fiber": 2,
            "sugar": 15,
            "protein": 29
        }
    },
    "Indian Braised Tofu Bowl With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 561,
            "protein": 37,
            "carbs": 30,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 60 g tofu, 1.1 cup noodles, 1.8 cup zucchini with liquid until smooth. Top with 1.7 cup corn, 2 tsps bell pepper, 1.3 cup dill and garnish with 1 tsp olive oil, 1 tsp garlic, 1 cup onion. Serve chilled.",
        "ingredients": "60 g tofu, 1.1 cup noodles, 1.8 cup zucchini, 1.7 cup corn, 2 tsps bell pepper, 1.3 cup dill, 1 tsp ginger, 1 tbsp vinegar, 1 tsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 561,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 118,
            "sodium": 278,
            "carbohydrates": 30,
            "fiber": 3,
            "sugar": 20,
            "protein": 37
        }
    },
    "American Smoky Halloumi Curry With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 427,
            "protein": 33,
            "carbs": 9,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 120 g bulgur, 1.9 cup lettuce, 230 g cucumber until crisp-tender. Add 0.7 cup halloumi and 2 tsps bell pepper, 110 g rosemary, 1 tsp chili flakes. Season with 1 tbsp olive oil, 2 tsps garlic, 0.8 cup onion and serve over rice.",
        "ingredients": "0.7 cup halloumi, 120 g bulgur, 1.9 cup lettuce, 230 g cucumber, 2 tsps bell pepper, 110 g rosemary, 1 tsp chili flakes, 2 tsps soy sauce, 1 tbsp olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 427,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 110,
            "sodium": 508,
            "carbohydrates": 9,
            "fiber": 4,
            "sugar": 7,
            "protein": 33
        }
    },
    "Spanish Pan-seared Chickpeas Frittata With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 240,
            "protein": 12,
            "carbs": 66,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 pieces bread, 130 g kale, 2 tsps bell pepper in oil. Pour beaten eggs over vegetables, add 1.3 cup chickpeas if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 tsp garlic, 1.1 cup onion.",
        "ingredients": "1.3 cup chickpeas, 2 pieces bread, 130 g kale, 2 tsps bell pepper, 140 g tomato, 0.7 cup mint, 2 tbsps soy sauce, 1 tbsp vinegar, 1 tsp olive oil, 1 tsp garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 240,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 112,
            "sodium": 710,
            "carbohydrates": 66,
            "fiber": 11,
            "sugar": 2,
            "protein": 12
        }
    },
    "Indian Baked Chickpeas Tacos With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 421,
            "protein": 11,
            "carbs": 15,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 180 g chickpeas as base. Add 190 g spaghetti, 2 tsps bell pepper, 110 g corn and cook until tender. Incorporate 100 g spinach, 1.9 cup basil, 1 tsp chili flakes and season with 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "180 g chickpeas, 190 g spaghetti, 2 tsps bell pepper, 110 g corn, 100 g spinach, 1.9 cup basil, 1 tsp chili flakes, 2 tsps cumin, 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 421,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 115,
            "sodium": 181,
            "carbohydrates": 15,
            "fiber": 2,
            "sugar": 20,
            "protein": 11
        }
    },
    "Thai Roasted Duck Risotto With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 354,
            "protein": 29,
            "carbs": 76,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 150 g duck as base. Add 2 tbsps yogurt, 0.9 cup pea, 210 g zucchini and cook until tender. Incorporate 1 cup corn, 1.5 cup cilantro, 2 tsps turmeric and season with 1 tsp olive oil, 2 tsps garlic, 1.6 cup onion. Serve hot.",
        "ingredients": "150 g duck, 2 tbsps yogurt, 0.9 cup pea, 210 g zucchini, 1 cup corn, 1.5 cup cilantro, 2 tsps turmeric, 1 tsp vinegar, 1 tsp olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 354,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 44,
            "sodium": 142,
            "carbohydrates": 76,
            "fiber": 3,
            "sugar": 16,
            "protein": 29
        }
    },
    "Thai Smoky Turkey Sandwich With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 356,
            "protein": 22,
            "carbs": 24,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.9 cup turkey, 160 g udon, 1.1 cup kale and top with 230 g cucumber, 1 tsp bell pepper, 1.1 cup mint. Season with 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion and serve.",
        "ingredients": "1.9 cup turkey, 160 g udon, 1.1 cup kale, 230 g cucumber, 1 tsp bell pepper, 1.1 cup mint, 1 tbsp soy sauce, 2 tsps chili flakes, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 356,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 84,
            "sodium": 164,
            "carbohydrates": 24,
            "fiber": 12,
            "sugar": 9,
            "protein": 22
        }
    },
    "Greek Marinated Salmon Porridge With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 200,
            "protein": 12,
            "carbs": 83,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 0.7 cup salmon with water or broth until soft and creamy. Add 1.6 cup oats, 200 g spinach, 230 g kale and simmer until vegetables are tender. Season with 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion and serve hot.",
        "ingredients": "0.7 cup salmon, 1.6 cup oats, 200 g spinach, 230 g kale, 1 tsp bell pepper, 0.9 cup cilantro, 1 tsp turmeric, 1 tsp sesame oil, 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 200,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 97,
            "sodium": 263,
            "carbohydrates": 83,
            "fiber": 5,
            "sugar": 10,
            "protein": 12
        }
    },
    "Vietnamese Smoky Duck Congee With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 454,
            "protein": 25,
            "carbs": 65,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.7 cup duck with water or broth until soft and creamy. Add 100 g potato, 80 g lettuce, 150 g spinach and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion and serve hot.",
        "ingredients": "1.7 cup duck, 100 g potato, 80 g lettuce, 150 g spinach, 90 g tomato, 1.8 cup cilantro, 1 tsp paprika, 2 tsps lime juice, 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 454,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 69,
            "sodium": 646,
            "carbohydrates": 65,
            "fiber": 5,
            "sugar": 12,
            "protein": 25
        }
    },
    "Indian Poached Duck Curry With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 246,
            "protein": 42,
            "carbs": 85,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.7 cup bulgur, 1.8 cup mushroom, 1.7 cup cucumber until crisp-tender. Add 210 g duck and 1 tsp bell pepper, 1.6 cup cilantro, 2 tbsps vinegar. Season with 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion and serve over rice.",
        "ingredients": "210 g duck, 1.7 cup bulgur, 1.8 cup mushroom, 1.7 cup cucumber, 1 tsp bell pepper, 1.6 cup cilantro, 2 tbsps vinegar, 1 piece curry paste, 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 246,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 3,
            "sodium": 479,
            "carbohydrates": 85,
            "fiber": 1,
            "sugar": 17,
            "protein": 42
        }
    },
    "Japanese Roasted Tuna Frittata With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 451,
            "protein": 11,
            "carbs": 47,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 170 g udon, 210 g mushroom, 180 g corn in oil. Pour beaten eggs over vegetables, add 200 g tuna if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 3 cloves garlic, 1.2 cup onion.",
        "ingredients": "200 g tuna, 170 g udon, 210 g mushroom, 180 g corn, 140 g kale, 1.5 cup rosemary, 1 tsp soy sauce, 2 tsps sesame oil, 2 tsps olive oil, 3 cloves garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 451,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 19,
            "sodium": 325,
            "carbohydrates": 47,
            "fiber": 10,
            "sugar": 17,
            "protein": 11
        }
    },
    "Spanish Poached Tuna Salad With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 355,
            "protein": 33,
            "carbs": 8,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.4 cup tuna, 2 tsps yogurt, 240 g carrot, 2 tsps bell pepper in a bowl. Add 60 g tomato, 160 g basil, 1 tbsp sesame oil and toss gently. Dress with 2 tsps olive oil, 2 tsps garlic, 0.9 cup onion and serve fresh.",
        "ingredients": "1.4 cup tuna, 2 tsps yogurt, 240 g carrot, 2 tsps bell pepper, 60 g tomato, 160 g basil, 1 tbsp sesame oil, 3 tbsps soy sauce, 2 tsps olive oil, 2 tsps garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 355,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 24,
            "sodium": 534,
            "carbohydrates": 8,
            "fiber": 14,
            "sugar": 13,
            "protein": 33
        }
    },
    "Turkish Braised Duck Wrap With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 242,
            "protein": 19,
            "carbs": 8,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 2 cup duck, 1.8 cup spaghetti, 1 cup tomato, 170 g corn. Add 1.5 cup pea, 1.9 cup thyme, 2 tsps paprika and roll tightly. Serve with 2 tbsps olive oil, 1 clove garlic, 1.6 cup onion on the side.",
        "ingredients": "2 cup duck, 1.8 cup spaghetti, 1 cup tomato, 170 g corn, 1.5 cup pea, 1.9 cup thyme, 2 tsps paprika, 2 tsps turmeric, 2 tbsps olive oil, 1 clove garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 242,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 4,
            "sodium": 891,
            "carbohydrates": 8,
            "fiber": 1,
            "sugar": 4,
            "protein": 19
        }
    },
    "Mexican Smoky Cod Omelette With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 485,
            "protein": 33,
            "carbs": 20,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 piece wrap, 90 g mushroom, 1.1 cup corn until softened. Add beaten eggs and 1.8 cup cod if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion and serve immediately.",
        "ingredients": "1.8 cup cod, 1 piece wrap, 90 g mushroom, 1.1 cup corn, 210 g cucumber, 1 cup dill, 1 tsp paprika, 1 tbsp vinegar, 2 tsps olive oil, 3 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 485,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 23,
            "sodium": 81,
            "carbohydrates": 20,
            "fiber": 10,
            "sugar": 12,
            "protein": 33
        }
    },
    "Greek Roasted Crab Soup With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 197,
            "protein": 38,
            "carbs": 73,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 cup spaghetti, 1 cup spinach, 1.5 cup pea in oil until softened. Add broth and 0.6 cup crab, simmer until tender. Season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion and serve hot.",
        "ingredients": "0.6 cup crab, 1 cup spaghetti, 1 cup spinach, 1.5 cup pea, 1.4 cup tomato, 100 g thyme, 2 tsps vinegar, 1.5 cup curry paste, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 197,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 42,
            "sodium": 695,
            "carbohydrates": 73,
            "fiber": 11,
            "sugar": 1,
            "protein": 38
        }
    },
    "Chinese Crispy Sardines Wrap With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 437,
            "protein": 29,
            "carbs": 49,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 240 g sardines, 120 g potato, 2 tsps bell pepper, 90 g mushroom. Add 0.5 cup corn, 210 g mint, 1 tsp vinegar and roll tightly. Serve with 1 tsp olive oil, 2 tsps garlic, 0.9 cup onion on the side.",
        "ingredients": "240 g sardines, 120 g potato, 2 tsps bell pepper, 90 g mushroom, 0.5 cup corn, 210 g mint, 1 tsp vinegar, 2 tsps chili flakes, 1 tsp olive oil, 2 tsps garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 437,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 75,
            "sodium": 395,
            "carbohydrates": 49,
            "fiber": 6,
            "sugar": 1,
            "protein": 29
        }
    },
    "American Grilled Salmon Omelette With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 606,
            "protein": 37,
            "carbs": 73,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.4 cup noodles, 170 g cabbage, 170 g pea until softened. Add beaten eggs and 1.5 cup salmon if applicable, scramble until cooked. Season with 1 tsp olive oil, 3 cloves garlic, 0.8 cup onion and serve immediately.",
        "ingredients": "1.5 cup salmon, 1.4 cup noodles, 170 g cabbage, 170 g pea, 1.6 cup corn, 1.8 cup cilantro, 2 tsps cumin, 2 tsps chili flakes, 1 tsp olive oil, 3 cloves garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 606,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 31,
            "sodium": 674,
            "carbohydrates": 73,
            "fiber": 14,
            "sugar": 10,
            "protein": 37
        }
    },
    "American Pan-seared Lamb Wrap With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 582,
            "protein": 31,
            "carbs": 60,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1.1 cup lamb, 1 piece wrap, 180 g lettuce, 190 g cabbage. Add 180 g spinach, 230 g thyme, 3 tbsps vinegar and roll tightly. Serve with 1 tsp olive oil, 2 cloves garlic, 1.6 cup onion on the side.",
        "ingredients": "1.1 cup lamb, 1 piece wrap, 180 g lettuce, 190 g cabbage, 180 g spinach, 230 g thyme, 3 tbsps vinegar, 1 tsp chili flakes, 1 tsp olive oil, 2 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 582,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 21,
            "sodium": 878,
            "carbohydrates": 60,
            "fiber": 5,
            "sugar": 13,
            "protein": 31
        }
    },
    "Spanish Baked Salmon Omelette With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 482,
            "protein": 13,
            "carbs": 49,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 80 g bulgur, 80 g kale, 190 g corn until softened. Add beaten eggs and 1.5 cup salmon if applicable, scramble until cooked. Season with 1 tbsp olive oil, 2 tsps garlic, 1.1 cup onion and serve immediately.",
        "ingredients": "1.5 cup salmon, 80 g bulgur, 80 g kale, 190 g corn, 170 g cabbage, 0.6 cup parsley, 3 tbsps lime juice, 2 tsps lemon juice, 1 tbsp olive oil, 2 tsps garlic, 1.1 cup onion",
        "detailedNutrition": {
            "calories": 482,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 24,
            "sodium": 231,
            "carbohydrates": 49,
            "fiber": 13,
            "sugar": 5,
            "protein": 13
        }
    },
    "Korean Braised Cod Rice With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 327,
            "protein": 40,
            "carbs": 7,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g cod as base. Add 0.8 cup quinoa, 180 g zucchini, 60 g mushroom and cook until tender. Incorporate 220 g cabbage, 1.3 cup parsley, 2 tsps turmeric and season with 1 tsp olive oil, 2 tsps garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "80 g cod, 0.8 cup quinoa, 180 g zucchini, 60 g mushroom, 220 g cabbage, 1.3 cup parsley, 2 tsps turmeric, 1 tsp paprika, 1 tsp olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 327,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 5,
            "sodium": 409,
            "carbohydrates": 7,
            "fiber": 10,
            "sugar": 1,
            "protein": 40
        }
    },
    "Chinese Baked Pork Skewers With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 509,
            "protein": 3,
            "carbs": 82,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g pork as base. Add 180 g oats, 1.4 cup zucchini, 90 g pea and cook until tender. Incorporate 2 tsps bell pepper, 130 g thyme, 1 tsp ginger and season with 2 tsps olive oil, 2 cloves garlic, 1.8 cup onion. Serve hot.",
        "ingredients": "100 g pork, 180 g oats, 1.4 cup zucchini, 90 g pea, 2 tsps bell pepper, 130 g thyme, 1 tsp ginger, 1 tsp soy sauce, 2 tsps olive oil, 2 cloves garlic, 1.8 cup onion",
        "detailedNutrition": {
            "calories": 509,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 60,
            "sodium": 382,
            "carbohydrates": 82,
            "fiber": 9,
            "sugar": 5,
            "protein": 3
        }
    },
    "Greek Baked Duck Sandwich With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 282,
            "protein": 22,
            "carbs": 44,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.2 cup duck, 1.9 cup noodles, 1.3 cup kale and top with 1.2 cup corn, 210 g cabbage, 1.1 cup thyme. Season with 2 tsps olive oil, 2 cloves garlic, 1.7 cup onion and serve.",
        "ingredients": "1.2 cup duck, 1.9 cup noodles, 1.3 cup kale, 1.2 cup corn, 210 g cabbage, 1.1 cup thyme, 1 tsp turmeric, 1 tsp vinegar, 2 tsps olive oil, 2 cloves garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 282,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 107,
            "sodium": 611,
            "carbohydrates": 44,
            "fiber": 12,
            "sugar": 21,
            "protein": 22
        }
    },
    "Chinese Stir-fried Beef Stew With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 404,
            "protein": 22,
            "carbs": 64,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 100 g beef as base. Add 1 piece tortilla, 0.5 cup zucchini, 80 g corn and cook until tender. Incorporate 60 g mushroom, 190 g basil, 1 tsp vinegar and season with 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "100 g beef, 1 piece tortilla, 0.5 cup zucchini, 80 g corn, 60 g mushroom, 190 g basil, 1 tsp vinegar, 2 tbsps lemon juice, 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 404,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 43,
            "sodium": 561,
            "carbohydrates": 64,
            "fiber": 12,
            "sugar": 12,
            "protein": 22
        }
    },
    "Vietnamese Crispy Shrimp Congee With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 542,
            "protein": 31,
            "carbs": 37,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1 cup shrimp with water or broth until soft and creamy. Add 1.7 cup rice, 0.5 cup carrot, 1 tsp bell pepper and simmer until vegetables are tender. Season with 1 tbsp olive oil, 1 tsp garlic, 1 cup onion and serve hot.",
        "ingredients": "1 cup shrimp, 1.7 cup rice, 0.5 cup carrot, 1 tsp bell pepper, 80 g spinach, 190 g basil, 3 tbsps vinegar, 1 tbsp lemon juice, 1 tbsp olive oil, 1 tsp garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 542,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 15,
            "sodium": 575,
            "carbohydrates": 37,
            "fiber": 8,
            "sugar": 20,
            "protein": 31
        }
    },
    "Japanese Pan-seared Sardines Soup With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 560,
            "protein": 40,
            "carbs": 52,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 190 g oats, 1.9 cup kale, 2 tsps bell pepper in oil until softened. Add broth and 1.9 cup sardines, simmer until tender. Season with 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion and serve hot.",
        "ingredients": "1.9 cup sardines, 190 g oats, 1.9 cup kale, 2 tsps bell pepper, 1 cup pea, 190 g basil, 2 tbsps lime juice, 1 clove ginger, 1 tsp olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 560,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 113,
            "sodium": 327,
            "carbohydrates": 52,
            "fiber": 11,
            "sugar": 12,
            "protein": 40
        }
    },
    "Thai Braised Beef Skewers With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 576,
            "protein": 19,
            "carbs": 51,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 90 g beef as base. Add 1 piece wrap, 230 g cucumber, 1.1 cup cabbage and cook until tender. Incorporate 170 g tomato, 230 g mint, 1 tsp cumin and season with 3 tbsps olive oil, 3 cloves garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "90 g beef, 1 piece wrap, 230 g cucumber, 1.1 cup cabbage, 170 g tomato, 230 g mint, 1 tsp cumin, 2 tsps sesame oil, 3 tbsps olive oil, 3 cloves garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 576,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 118,
            "sodium": 514,
            "carbohydrates": 51,
            "fiber": 15,
            "sugar": 3,
            "protein": 19
        }
    },
    "Chinese Grilled Pork Soup With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 628,
            "protein": 6,
            "carbs": 77,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 70 g udon, 80 g carrot, 130 g cabbage in oil until softened. Add broth and 170 g pork, simmer until tender. Season with 1 tbsp olive oil, 2 tsps garlic, 1.3 cup onion and serve hot.",
        "ingredients": "170 g pork, 70 g udon, 80 g carrot, 130 g cabbage, 70 g mushroom, 110 g basil, 2 tbsps sesame oil, 1 tbsp soy sauce, 1 tbsp olive oil, 2 tsps garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 628,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 62,
            "sodium": 785,
            "carbohydrates": 77,
            "fiber": 6,
            "sugar": 18,
            "protein": 6
        }
    },
    "American Baked Turkey Toast With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 196,
            "protein": 25,
            "carbs": 75,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.7 cup turkey, 1.9 cup bulgur, 1.8 cup kale and top with 220 g mushroom, 150 g broccoli, 180 g rosemary. Season with 1 tbsp olive oil, 2 tsps garlic, 1.5 cup onion and serve.",
        "ingredients": "1.7 cup turkey, 1.9 cup bulgur, 1.8 cup kale, 220 g mushroom, 150 g broccoli, 180 g rosemary, 2 tsps lemon juice, 1 tsp soy sauce, 1 tbsp olive oil, 2 tsps garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 196,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 69,
            "sodium": 562,
            "carbohydrates": 75,
            "fiber": 3,
            "sugar": 17,
            "protein": 25
        }
    },
    "Turkish Poached Sardines Sandwich With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 248,
            "protein": 21,
            "carbs": 6,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 90 g sardines, 1.9 cup rice, 1.6 cup kale and top with 200 g tomato, 120 g carrot, 130 g rosemary. Season with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion and serve.",
        "ingredients": "90 g sardines, 1.9 cup rice, 1.6 cup kale, 200 g tomato, 120 g carrot, 130 g rosemary, 2 tsps cumin, 3 tbsps lime juice, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 248,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 82,
            "sodium": 697,
            "carbohydrates": 6,
            "fiber": 6,
            "sugar": 20,
            "protein": 21
        }
    },
    "Mexican Glazed Sardines Tacos With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 289,
            "protein": 37,
            "carbs": 27,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.1 cup sardines as base. Add 2 pieces bread, 120 g cabbage, 120 g zucchini and cook until tender. Incorporate 140 g kale, 120 g dill, 1 tsp lime juice and season with 3 tbsps olive oil, 1 tsp garlic, 1.2 cup onion. Serve hot.",
        "ingredients": "1.1 cup sardines, 2 pieces bread, 120 g cabbage, 120 g zucchini, 140 g kale, 120 g dill, 1 tsp lime juice, 1 tsp cumin, 3 tbsps olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 289,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 40,
            "sodium": 223,
            "carbohydrates": 27,
            "fiber": 10,
            "sugar": 20,
            "protein": 37
        }
    },
    "Vietnamese Poached Lamb Bowl With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 532,
            "protein": 37,
            "carbs": 65,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.2 cup lamb, 1 piece tortilla, 0.9 cup kale with liquid until smooth. Top with 140 g carrot, 1.4 cup corn, 0.8 cup mint and garnish with 2 tbsps olive oil, 2 cloves garlic, 3 tbsps onion. Serve chilled.",
        "ingredients": "1.2 cup lamb, 1 piece tortilla, 0.9 cup kale, 140 g carrot, 1.4 cup corn, 0.8 cup mint, 1 tsp vinegar, 1 tbsp sesame oil, 2 tbsps olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 532,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 92,
            "sodium": 526,
            "carbohydrates": 65,
            "fiber": 4,
            "sugar": 16,
            "protein": 37
        }
    },
    "Korean Poached Salmon Congee With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 582,
            "protein": 26,
            "carbs": 36,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 100 g salmon with water or broth until soft and creamy. Add 140 g potato, 2 tsps bell pepper, 170 g cabbage and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 tsps garlic, 1.2 cup onion and serve hot.",
        "ingredients": "100 g salmon, 140 g potato, 2 tsps bell pepper, 170 g cabbage, 0.7 cup kale, 0.6 cup thyme, 1 tsp lemon juice, 1 tbsp vinegar, 2 tsps olive oil, 2 tsps garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 582,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 93,
            "sodium": 101,
            "carbohydrates": 36,
            "fiber": 14,
            "sugar": 20,
            "protein": 26
        }
    },
    "Korean Stir-fried Crab Frittata With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 501,
            "protein": 25,
            "carbs": 41,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 100 g couscous, 90 g spinach, 220 g kale in oil. Pour beaten eggs over vegetables, add 120 g crab if applicable. Cook until set, then finish under broiler. Season with 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion.",
        "ingredients": "120 g crab, 100 g couscous, 90 g spinach, 220 g kale, 60 g tomato, 1.8 cup thyme, 1 tbsp sesame oil, 3 tbsps soy sauce, 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 501,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 79,
            "sodium": 337,
            "carbohydrates": 41,
            "fiber": 3,
            "sugar": 2,
            "protein": 25
        }
    },
    "Japanese Grilled Salmon Frittata With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 611,
            "protein": 42,
            "carbs": 55,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 2 tbsps yogurt, 1.2 cup pea, 1.6 cup cabbage in oil. Pour beaten eggs over vegetables, add 2 cup salmon if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 2 cloves garlic, 1 cup onion.",
        "ingredients": "2 cup salmon, 2 tbsps yogurt, 1.2 cup pea, 1.6 cup cabbage, 1.8 cup corn, 180 g thyme, 1 tsp sesame oil, 2 pieces curry paste, 1 tsp olive oil, 2 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 611,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 21,
            "sodium": 301,
            "carbohydrates": 55,
            "fiber": 13,
            "sugar": 9,
            "protein": 42
        }
    },
    "Chinese Crispy Crab Salad With Harissa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 156,
            "protein": 44,
            "carbs": 58,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 0.5 cup crab, 80 g soba, 1.9 cup carrot, 1.9 cup tomato in a bowl. Add 2 tsps bell pepper, 1.4 cup parsley, 2 tsps paprika and toss gently. Dress with 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion and serve fresh.",
        "ingredients": "0.5 cup crab, 80 g soba, 1.9 cup carrot, 1.9 cup tomato, 2 tsps bell pepper, 1.4 cup parsley, 2 tsps paprika, 1 tbsp vinegar, 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 156,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 19,
            "sodium": 541,
            "carbohydrates": 58,
            "fiber": 5,
            "sugar": 3,
            "protein": 44
        }
    },
    "Japanese Braised Chicken Frittata With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 532,
            "protein": 29,
            "carbs": 77,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.7 cup couscous, 1.9 cup cucumber, 210 g carrot in oil. Pour beaten eggs over vegetables, add 240 g chicken if applicable. Cook until set, then finish under broiler. Season with 1 tsp olive oil, 1 tsp garlic, 1.3 cup onion.",
        "ingredients": "240 g chicken, 0.7 cup couscous, 1.9 cup cucumber, 210 g carrot, 1.5 cup broccoli, 70 g thyme, 1 tsp paprika, 1 tsp chili flakes, 1 tsp olive oil, 1 tsp garlic, 1.3 cup onion",
        "detailedNutrition": {
            "calories": 532,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 109,
            "sodium": 62,
            "carbohydrates": 77,
            "fiber": 5,
            "sugar": 1,
            "protein": 29
        }
    },
    "French Smoky Beef Sandwich With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 406,
            "protein": 19,
            "carbs": 56,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.3 cup beef, 210 g quinoa, 150 g corn and top with 70 g carrot, 1 cup mushroom, 1.3 cup mint. Season with 2 tsps olive oil, 2 cloves garlic, 3 tbsps onion and serve.",
        "ingredients": "1.3 cup beef, 210 g quinoa, 150 g corn, 70 g carrot, 1 cup mushroom, 1.3 cup mint, 3 tbsps curry paste, 1 tsp cumin, 2 tsps olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 406,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 12,
            "sodium": 790,
            "carbohydrates": 56,
            "fiber": 7,
            "sugar": 22,
            "protein": 19
        }
    },
    "Mexican Stir-fried Turkey Pasta With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 549,
            "protein": 5,
            "carbs": 49,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.5 cup turkey as base. Add 1.9 cup soba, 2 cup zucchini, 1.5 cup pea and cook until tender. Incorporate 2 cup lettuce, 1.8 cup rosemary, 2 tsps chili flakes and season with 3 tbsps olive oil, 1 tsp garlic, 0.5 cup onion. Serve hot.",
        "ingredients": "0.5 cup turkey, 1.9 cup soba, 2 cup zucchini, 1.5 cup pea, 2 cup lettuce, 1.8 cup rosemary, 2 tsps chili flakes, 2 tsps paprika, 3 tbsps olive oil, 1 tsp garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 549,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 64,
            "sodium": 580,
            "carbohydrates": 49,
            "fiber": 9,
            "sugar": 11,
            "protein": 5
        }
    },
    "Middle Eastern Baked Beef Salad With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 317,
            "protein": 9,
            "carbs": 28,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 0.7 cup beef, 1.8 cup oats, 170 g zucchini, 1.7 cup carrot in a bowl. Add 1.3 cup corn, 0.8 cup parsley, 3 tbsps soy sauce and toss gently. Dress with 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion and serve fresh.",
        "ingredients": "0.7 cup beef, 1.8 cup oats, 170 g zucchini, 1.7 cup carrot, 1.3 cup corn, 0.8 cup parsley, 3 tbsps soy sauce, 1 tbsp lemon juice, 1 tsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 317,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 19,
            "sodium": 846,
            "carbohydrates": 28,
            "fiber": 15,
            "sugar": 10,
            "protein": 9
        }
    },
    "Turkish Crispy Turkey Wrap With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 397,
            "protein": 21,
            "carbs": 5,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 1 cup turkey, 1.5 cup noodles, 1.8 cup mushroom, 2 tsps bell pepper. Add 180 g tomato, 150 g thyme, 3 tbsps lime juice and roll tightly. Serve with 3 tbsps olive oil, 2 cloves garlic, 0.6 cup onion on the side.",
        "ingredients": "1 cup turkey, 1.5 cup noodles, 1.8 cup mushroom, 2 tsps bell pepper, 180 g tomato, 150 g thyme, 3 tbsps lime juice, 2 tsps chili flakes, 3 tbsps olive oil, 2 cloves garlic, 0.6 cup onion",
        "detailedNutrition": {
            "calories": 397,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 84,
            "sodium": 634,
            "carbohydrates": 5,
            "fiber": 12,
            "sugar": 12,
            "protein": 21
        }
    },
    "Greek Crispy Tuna Curry With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 648,
            "protein": 16,
            "carbs": 73,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 0.5 cup potato, 90 g carrot, 220 g pea until crisp-tender. Add 1.3 cup tuna and 2 tsps bell pepper, 240 g basil, 2 tbsps sesame oil. Season with 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion and serve over rice.",
        "ingredients": "1.3 cup tuna, 0.5 cup potato, 90 g carrot, 220 g pea, 2 tsps bell pepper, 240 g basil, 2 tbsps sesame oil, 1 tsp soy sauce, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 648,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 51,
            "sodium": 844,
            "carbohydrates": 73,
            "fiber": 5,
            "sugar": 22,
            "protein": 16
        }
    },
    "Korean Roasted Pork Skewers With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 264,
            "protein": 45,
            "carbs": 64,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g pork as base. Add 1 tsp yogurt, 1.9 cup broccoli, 190 g mushroom and cook until tender. Incorporate 1.2 cup lettuce, 1.5 cup cilantro, 2 tsps vinegar and season with 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "220 g pork, 1 tsp yogurt, 1.9 cup broccoli, 190 g mushroom, 1.2 cup lettuce, 1.5 cup cilantro, 2 tsps vinegar, 3 tbsps soy sauce, 2 tbsps olive oil, 2 tsps garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 264,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 96,
            "sodium": 439,
            "carbohydrates": 64,
            "fiber": 2,
            "sugar": 14,
            "protein": 45
        }
    },
    "Greek Poached Beef Risotto With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 631,
            "protein": 14,
            "carbs": 29,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 240 g beef as base. Add 130 g couscous, 1.5 cup zucchini, 1.7 cup broccoli and cook until tender. Incorporate 220 g carrot, 0.6 cup basil, 2 tsps sesame oil and season with 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "240 g beef, 130 g couscous, 1.5 cup zucchini, 1.7 cup broccoli, 220 g carrot, 0.6 cup basil, 2 tsps sesame oil, 1.3 cup curry paste, 2 tsps olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 631,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 55,
            "sodium": 367,
            "carbohydrates": 29,
            "fiber": 10,
            "sugar": 16,
            "protein": 14
        }
    },
    "Middle Eastern Pan-seared Turkey Sandwich With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 404,
            "protein": 37,
            "carbs": 42,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1 cup turkey, 170 g spaghetti, 0.6 cup pea and top with 0.5 cup kale, 190 g spinach, 160 g thyme. Season with 1 tsp olive oil, 2 cloves garlic, 0.7 cup onion and serve.",
        "ingredients": "1 cup turkey, 170 g spaghetti, 0.6 cup pea, 0.5 cup kale, 190 g spinach, 160 g thyme, 1 tsp vinegar, 1 tsp cumin, 1 tsp olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 404,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 58,
            "sodium": 792,
            "carbohydrates": 42,
            "fiber": 3,
            "sugar": 1,
            "protein": 37
        }
    },
    "Mexican Crispy Chicken Pasta With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 534,
            "protein": 7,
            "carbs": 7,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.9 cup chicken as base. Add 1.1 cup udon, 100 g broccoli, 1.3 cup zucchini and cook until tender. Incorporate 190 g spinach, 170 g rosemary, 2 tsps turmeric and season with 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "1.9 cup chicken, 1.1 cup udon, 100 g broccoli, 1.3 cup zucchini, 190 g spinach, 170 g rosemary, 2 tsps turmeric, 2 tsps chili flakes, 1 tbsp olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 534,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 17,
            "sodium": 416,
            "carbohydrates": 7,
            "fiber": 8,
            "sugar": 20,
            "protein": 7
        }
    },
    "Chinese Braised Cod Tacos With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 547,
            "protein": 44,
            "carbs": 47,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.6 cup cod as base. Add 140 g spaghetti, 1 tsp bell pepper, 0.9 cup cabbage and cook until tender. Incorporate 0.8 cup kale, 120 g dill, 1 tsp chili flakes and season with 1 tsp olive oil, 1 tsp garlic, 1.5 cup onion. Serve hot.",
        "ingredients": "0.6 cup cod, 140 g spaghetti, 1 tsp bell pepper, 0.9 cup cabbage, 0.8 cup kale, 120 g dill, 1 tsp chili flakes, 1 tsp lemon juice, 1 tsp olive oil, 1 tsp garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 547,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 25,
            "sodium": 439,
            "carbohydrates": 47,
            "fiber": 15,
            "sugar": 11,
            "protein": 44
        }
    },
    "American Stir-fried Chicken Salad With Roasted Peppers": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 294,
            "protein": 33,
            "carbs": 79,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 0.6 cup chicken, 1.1 cup soba, 170 g kale, 0.7 cup cucumber in a bowl. Add 1.4 cup tomato, 1 cup parsley, 3 tbsps sesame oil and toss gently. Dress with 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion and serve fresh.",
        "ingredients": "0.6 cup chicken, 1.1 cup soba, 170 g kale, 0.7 cup cucumber, 1.4 cup tomato, 1 cup parsley, 3 tbsps sesame oil, 1 tsp chili flakes, 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 294,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 73,
            "sodium": 423,
            "carbohydrates": 79,
            "fiber": 4,
            "sugar": 7,
            "protein": 33
        }
    },
    "Vietnamese Baked Shrimp Noodles With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 467,
            "protein": 32,
            "carbs": 83,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 190 g shrimp as base. Add 200 g quinoa, 1 cup kale, 2 tsps bell pepper and cook until tender. Incorporate 210 g corn, 1.2 cup mint, 1 tsp ginger and season with 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion. Serve hot.",
        "ingredients": "190 g shrimp, 200 g quinoa, 1 cup kale, 2 tsps bell pepper, 210 g corn, 1.2 cup mint, 1 tsp ginger, 2 tsps turmeric, 2 tsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 467,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 93,
            "sodium": 485,
            "carbohydrates": 83,
            "fiber": 8,
            "sugar": 20,
            "protein": 32
        }
    },
    "American Pan-seared Pork Stew With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 401,
            "protein": 19,
            "carbs": 7,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.7 cup pork as base. Add 1 tsp yogurt, 1.9 cup tomato, 1.5 cup cabbage and cook until tender. Incorporate 1.9 cup broccoli, 1.8 cup thyme, 2 tsps chili flakes and season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.7 cup pork, 1 tsp yogurt, 1.9 cup tomato, 1.5 cup cabbage, 1.9 cup broccoli, 1.8 cup thyme, 2 tsps chili flakes, 1 piece curry paste, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 401,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 10,
            "sodium": 749,
            "carbohydrates": 7,
            "fiber": 12,
            "sugar": 20,
            "protein": 19
        }
    },
    "Greek Stir-fried Duck Pasta With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 583,
            "protein": 22,
            "carbs": 70,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 210 g duck as base. Add 70 g potato, 120 g cucumber, 0.8 cup corn and cook until tender. Incorporate 2 tsps bell pepper, 60 g parsley, 2 tsps soy sauce and season with 2 tbsps olive oil, 1 tsp garlic, 1.2 cup onion. Serve hot.",
        "ingredients": "210 g duck, 70 g potato, 120 g cucumber, 0.8 cup corn, 2 tsps bell pepper, 60 g parsley, 2 tsps soy sauce, 2 tsps chili flakes, 2 tbsps olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 583,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 113,
            "sodium": 109,
            "carbohydrates": 70,
            "fiber": 9,
            "sugar": 7,
            "protein": 22
        }
    },
    "Moroccan Braised Duck Salad With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 317,
            "protein": 27,
            "carbs": 84,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 0.5 cup duck, 1 piece bread, 0.8 cup cucumber, 1.4 cup zucchini in a bowl. Add 100 g pea, 1 cup rosemary, 3 tbsps vinegar and toss gently. Dress with 1 tbsp olive oil, 2 tsps garlic, 1.5 cup onion and serve fresh.",
        "ingredients": "0.5 cup duck, 1 piece bread, 0.8 cup cucumber, 1.4 cup zucchini, 100 g pea, 1 cup rosemary, 3 tbsps vinegar, 1 tsp chili flakes, 1 tbsp olive oil, 2 tsps garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 317,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 10,
            "sodium": 693,
            "carbohydrates": 84,
            "fiber": 3,
            "sugar": 16,
            "protein": 27
        }
    },
    "Chinese Pan-seared Beef Stir-fry With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 192,
            "protein": 25,
            "carbs": 32,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 90 g beef as base. Add 140 g soba, 2 tsps bell pepper, 0.7 cup cabbage and cook until tender. Incorporate 80 g kale, 60 g parsley, 1 tsp lime juice and season with 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "90 g beef, 140 g soba, 2 tsps bell pepper, 0.7 cup cabbage, 80 g kale, 60 g parsley, 1 tsp lime juice, 1 tsp turmeric, 2 tbsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 192,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 14,
            "sodium": 605,
            "carbohydrates": 32,
            "fiber": 10,
            "sugar": 20,
            "protein": 25
        }
    },
    "Mexican Smoky Turkey Tacos With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 453,
            "protein": 30,
            "carbs": 73,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 150 g turkey as base. Add 0.6 cup noodles, 100 g lettuce, 1.2 cup tomato and cook until tender. Incorporate 220 g zucchini, 210 g mint, 1 tsp sesame oil and season with 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "150 g turkey, 0.6 cup noodles, 100 g lettuce, 1.2 cup tomato, 220 g zucchini, 210 g mint, 1 tsp sesame oil, 1 tsp turmeric, 1 tsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 453,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 16,
            "sodium": 274,
            "carbohydrates": 73,
            "fiber": 15,
            "sugar": 11,
            "protein": 30
        }
    },
    "Middle Eastern Baked Sardines Sandwich With Miso Glaze": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 608,
            "protein": 40,
            "carbs": 12,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.1 cup sardines, 2 tbsps yogurt, 140 g cucumber and top with 1.6 cup mushroom, 180 g carrot, 1.7 cup dill. Season with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion and serve.",
        "ingredients": "1.1 cup sardines, 2 tbsps yogurt, 140 g cucumber, 1.6 cup mushroom, 180 g carrot, 1.7 cup dill, 2 tsps turmeric, 1 tsp paprika, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 608,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 41,
            "sodium": 527,
            "carbohydrates": 12,
            "fiber": 12,
            "sugar": 1,
            "protein": 40
        }
    },
    "Mexican Smoky Chicken Rice With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 418,
            "protein": 10,
            "carbs": 10,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.3 cup chicken as base. Add 230 g noodles, 240 g kale, 0.9 cup cabbage and cook until tender. Incorporate 70 g pea, 80 g parsley, 2 tsps paprika and season with 2 tsps olive oil, 1 tsp garlic, 0.9 cup onion. Serve hot.",
        "ingredients": "1.3 cup chicken, 230 g noodles, 240 g kale, 0.9 cup cabbage, 70 g pea, 80 g parsley, 2 tsps paprika, 1 tsp chili flakes, 2 tsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 418,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 74,
            "sodium": 523,
            "carbohydrates": 10,
            "fiber": 12,
            "sugar": 21,
            "protein": 10
        }
    },
    "Moroccan Marinated Chicken Porridge With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 159,
            "protein": 39,
            "carbs": 18,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 150 g chicken with water or broth until soft and creamy. Add 2 pieces bread, 1.3 cup mushroom, 1 cup cabbage and simmer until vegetables are tender. Season with 1 tbsp olive oil, 2 cloves garlic, 0.5 cup onion and serve hot.",
        "ingredients": "150 g chicken, 2 pieces bread, 1.3 cup mushroom, 1 cup cabbage, 0.6 cup lettuce, 0.8 cup basil, 1 tbsp soy sauce, 2 pieces curry paste, 1 tbsp olive oil, 2 cloves garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 159,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 78,
            "sodium": 861,
            "carbohydrates": 18,
            "fiber": 14,
            "sugar": 13,
            "protein": 39
        }
    },
    "Mexican Braised Duck Sandwich With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 550,
            "protein": 42,
            "carbs": 40,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.5 cup duck, 0.7 cup oats, 1.9 cup pea and top with 1.6 cup cucumber, 1.7 cup carrot, 1.5 cup cilantro. Season with 1 tsp olive oil, 2 tsps garlic, 2 tbsps onion and serve.",
        "ingredients": "0.5 cup duck, 0.7 cup oats, 1.9 cup pea, 1.6 cup cucumber, 1.7 cup carrot, 1.5 cup cilantro, 1 tsp turmeric, 2 tsps lemon juice, 1 tsp olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 550,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 119,
            "sodium": 833,
            "carbohydrates": 40,
            "fiber": 8,
            "sugar": 3,
            "protein": 42
        }
    },
    "Thai Baked Tuna Stew With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 533,
            "protein": 34,
            "carbs": 13,
            "fat": 2
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.6 cup tuna as base. Add 0.6 cup noodles, 1.6 cup pea, 0.6 cup carrot and cook until tender. Incorporate 150 g lettuce, 240 g cilantro, 2 tsps chili flakes and season with 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.6 cup tuna, 0.6 cup noodles, 1.6 cup pea, 0.6 cup carrot, 150 g lettuce, 240 g cilantro, 2 tsps chili flakes, 3 tbsps sesame oil, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 533,
            "fat": 2,
            "saturatedFat": 1,
            "cholesterol": 36,
            "sodium": 569,
            "carbohydrates": 13,
            "fiber": 6,
            "sugar": 16,
            "protein": 34
        }
    },
    "Chinese Crispy Duck Omelette With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 209,
            "protein": 9,
            "carbs": 49,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 230 g oats, 150 g broccoli, 1 tsp bell pepper until softened. Add beaten eggs and 220 g duck if applicable, scramble until cooked. Season with 2 tsps olive oil, 3 cloves garlic, 0.5 cup onion and serve immediately.",
        "ingredients": "220 g duck, 230 g oats, 150 g broccoli, 1 tsp bell pepper, 1.8 cup corn, 1.3 cup rosemary, 2 tsps soy sauce, 2 tsps turmeric, 2 tsps olive oil, 3 cloves garlic, 0.5 cup onion",
        "detailedNutrition": {
            "calories": 209,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 12,
            "sodium": 367,
            "carbohydrates": 49,
            "fiber": 15,
            "sugar": 5,
            "protein": 9
        }
    },
    "Greek Crispy Chicken Stew With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 629,
            "protein": 4,
            "carbs": 73,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.7 cup chicken as base. Add 0.9 cup noodles, 1.6 cup broccoli, 1.1 cup carrot and cook until tender. Incorporate 130 g mushroom, 200 g parsley, 2 tbsps lemon juice and season with 2 tsps olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "0.7 cup chicken, 0.9 cup noodles, 1.6 cup broccoli, 1.1 cup carrot, 130 g mushroom, 200 g parsley, 2 tbsps lemon juice, 3 cloves ginger, 2 tsps olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 629,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 97,
            "sodium": 128,
            "carbohydrates": 73,
            "fiber": 9,
            "sugar": 16,
            "protein": 4
        }
    },
    "Thai Crispy Sardines Toast With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 433,
            "protein": 10,
            "carbs": 37,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 150 g sardines, 70 g potato, 1.9 cup kale and top with 1.9 cup broccoli, 0.9 cup zucchini, 1 cup cilantro. Season with 2 tsps olive oil, 2 cloves garlic, 0.7 cup onion and serve.",
        "ingredients": "150 g sardines, 70 g potato, 1.9 cup kale, 1.9 cup broccoli, 0.9 cup zucchini, 1 cup cilantro, 2 tsps paprika, 2 tbsps vinegar, 2 tsps olive oil, 2 cloves garlic, 0.7 cup onion",
        "detailedNutrition": {
            "calories": 433,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 37,
            "sodium": 366,
            "carbohydrates": 37,
            "fiber": 13,
            "sugar": 7,
            "protein": 10
        }
    },
    "Japanese Braised Tuna Bowl With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 171,
            "protein": 23,
            "carbs": 45,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 140 g tuna, 180 g bulgur, 140 g mushroom with liquid until smooth. Top with 1.1 cup pea, 0.5 cup tomato, 1.9 cup dill and garnish with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion. Serve chilled.",
        "ingredients": "140 g tuna, 180 g bulgur, 140 g mushroom, 1.1 cup pea, 0.5 cup tomato, 1.9 cup dill, 1 tsp sesame oil, 3 tbsps vinegar, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 171,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 107,
            "sodium": 766,
            "carbohydrates": 45,
            "fiber": 8,
            "sugar": 13,
            "protein": 23
        }
    },
    "Greek Pan-seared Chicken Frittata With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 537,
            "protein": 27,
            "carbs": 56,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 110 g quinoa, 1.7 cup cabbage, 1 tsp bell pepper in oil. Pour beaten eggs over vegetables, add 1.8 cup chicken if applicable. Cook until set, then finish under broiler. Season with 3 tbsps olive oil, 3 cloves garlic, 2 cup onion.",
        "ingredients": "1.8 cup chicken, 110 g quinoa, 1.7 cup cabbage, 1 tsp bell pepper, 70 g cucumber, 1.5 cup thyme, 1 tbsp soy sauce, 2 tsps vinegar, 3 tbsps olive oil, 3 cloves garlic, 2 cup onion",
        "detailedNutrition": {
            "calories": 537,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 25,
            "sodium": 383,
            "carbohydrates": 56,
            "fiber": 14,
            "sugar": 9,
            "protein": 27
        }
    },
    "Korean Stir-fried Pork Toast With Peanut Sauce": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 293,
            "protein": 3,
            "carbs": 51,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.5 cup pork, 0.5 cup couscous, 0.8 cup mushroom and top with 80 g spinach, 60 g kale, 1.6 cup dill. Season with 2 tsps olive oil, 1 clove garlic, 3 tbsps onion and serve.",
        "ingredients": "0.5 cup pork, 0.5 cup couscous, 0.8 cup mushroom, 80 g spinach, 60 g kale, 1.6 cup dill, 2 tsps lime juice, 2 tsps cumin, 2 tsps olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 293,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 47,
            "sodium": 113,
            "carbohydrates": 51,
            "fiber": 1,
            "sugar": 8,
            "protein": 3
        }
    },
    "Spanish Glazed Tuna Soup With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 534,
            "protein": 22,
            "carbs": 43,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece wrap, 1 tsp bell pepper, 190 g zucchini in oil until softened. Add broth and 1.2 cup tuna, simmer until tender. Season with 1 tbsp olive oil, 3 cloves garlic, 1.5 cup onion and serve hot.",
        "ingredients": "1.2 cup tuna, 1 piece wrap, 1 tsp bell pepper, 190 g zucchini, 180 g cabbage, 180 g mint, 1 tsp lime juice, 2 cloves ginger, 1 tbsp olive oil, 3 cloves garlic, 1.5 cup onion",
        "detailedNutrition": {
            "calories": 534,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 117,
            "sodium": 444,
            "carbohydrates": 43,
            "fiber": 9,
            "sugar": 7,
            "protein": 22
        }
    },
    "Moroccan Crispy Salmon Curry With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 340,
            "protein": 26,
            "carbs": 70,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 2 pieces bread, 1.9 cup spinach, 1.3 cup corn until crisp-tender. Add 140 g salmon and 0.8 cup kale, 110 g dill, 2 tsps chili flakes. Season with 2 tsps olive oil, 1 tsp garlic, 1.2 cup onion and serve over rice.",
        "ingredients": "140 g salmon, 2 pieces bread, 1.9 cup spinach, 1.3 cup corn, 0.8 cup kale, 110 g dill, 2 tsps chili flakes, 1 tbsp curry paste, 2 tsps olive oil, 1 tsp garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 340,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 22,
            "sodium": 243,
            "carbohydrates": 70,
            "fiber": 8,
            "sugar": 9,
            "protein": 26
        }
    },
    "American Pan-seared Pork Pasta With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 158,
            "protein": 39,
            "carbs": 80,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 130 g pork as base. Add 1 tsp yogurt, 0.6 cup lettuce, 170 g cucumber and cook until tender. Incorporate 150 g mushroom, 1.8 cup mint, 1 tbsp sesame oil and season with 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "130 g pork, 1 tsp yogurt, 0.6 cup lettuce, 170 g cucumber, 150 g mushroom, 1.8 cup mint, 1 tbsp sesame oil, 2 tsps ginger, 1 tsp olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 158,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 116,
            "sodium": 554,
            "carbohydrates": 80,
            "fiber": 4,
            "sugar": 4,
            "protein": 39
        }
    },
    "Japanese Marinated Beef Frittata With Tahini Drizzle": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 253,
            "protein": 32,
            "carbs": 8,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1.5 cup bulgur, 0.8 cup kale, 160 g mushroom in oil. Pour beaten eggs over vegetables, add 0.8 cup beef if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 2 tsps garlic, 1 cup onion.",
        "ingredients": "0.8 cup beef, 1.5 cup bulgur, 0.8 cup kale, 160 g mushroom, 220 g cucumber, 1.5 cup basil, 2 tsps paprika, 1 tbsp sesame oil, 2 tsps olive oil, 2 tsps garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 253,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 30,
            "sodium": 194,
            "carbohydrates": 8,
            "fiber": 3,
            "sugar": 20,
            "protein": 32
        }
    },
    "Japanese Poached Crab Frittata With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 222,
            "protein": 10,
            "carbs": 49,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 1 piece bread, 0.9 cup zucchini, 70 g tomato in oil. Pour beaten eggs over vegetables, add 240 g crab if applicable. Cook until set, then finish under broiler. Season with 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion.",
        "ingredients": "240 g crab, 1 piece bread, 0.9 cup zucchini, 70 g tomato, 1.4 cup cabbage, 1.8 cup dill, 2 tbsps vinegar, 1 tsp cumin, 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 222,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 14,
            "sodium": 400,
            "carbohydrates": 49,
            "fiber": 8,
            "sugar": 10,
            "protein": 10
        }
    },
    "Vietnamese Crispy Pork Toast With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 302,
            "protein": 20,
            "carbs": 60,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 150 g pork, 1.6 cup couscous, 110 g carrot and top with 1.3 cup cucumber, 90 g lettuce, 170 g basil. Season with 3 tbsps olive oil, 1 tsp garlic, 2 tbsps onion and serve.",
        "ingredients": "150 g pork, 1.6 cup couscous, 110 g carrot, 1.3 cup cucumber, 90 g lettuce, 170 g basil, 2 tbsps curry paste, 1 tsp lime juice, 3 tbsps olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 302,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 55,
            "sodium": 544,
            "carbohydrates": 60,
            "fiber": 3,
            "sugar": 2,
            "protein": 20
        }
    },
    "Chinese Poached Sardines Risotto With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 643,
            "protein": 35,
            "carbs": 66,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 160 g sardines as base. Add 110 g potato, 1.6 cup lettuce, 1.8 cup corn and cook until tender. Incorporate 60 g spinach, 1.4 cup mint, 1 tsp turmeric and season with 2 tsps olive oil, 2 tsps garlic, 0.8 cup onion. Serve hot.",
        "ingredients": "160 g sardines, 110 g potato, 1.6 cup lettuce, 1.8 cup corn, 60 g spinach, 1.4 cup mint, 1 tsp turmeric, 2 tsps paprika, 2 tsps olive oil, 2 tsps garlic, 0.8 cup onion",
        "detailedNutrition": {
            "calories": 643,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 86,
            "sodium": 484,
            "carbohydrates": 66,
            "fiber": 7,
            "sugar": 12,
            "protein": 35
        }
    },
    "Italian Grilled Duck Risotto With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 601,
            "protein": 4,
            "carbs": 81,
            "fat": 10
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.9 cup duck as base. Add 1.4 cup noodles, 60 g pea, 240 g corn and cook until tender. Incorporate 230 g lettuce, 1.9 cup mint, 1 tsp turmeric and season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "0.9 cup duck, 1.4 cup noodles, 60 g pea, 240 g corn, 230 g lettuce, 1.9 cup mint, 1 tsp turmeric, 2 tsps sesame oil, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 601,
            "fat": 10,
            "saturatedFat": 3,
            "cholesterol": 68,
            "sodium": 834,
            "carbohydrates": 81,
            "fiber": 12,
            "sugar": 9,
            "protein": 4
        }
    },
    "Japanese Crispy Cod Curry With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 335,
            "protein": 8,
            "carbs": 14,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in wok, stir-fry 1.7 cup soba, 1.6 cup corn, 1.7 cup lettuce until crisp-tender. Add 1.2 cup cod and 110 g cucumber, 150 g dill, 1 tsp turmeric. Season with 1 tsp olive oil, 1 clove garlic, 3 tbsps onion and serve over rice.",
        "ingredients": "1.2 cup cod, 1.7 cup soba, 1.6 cup corn, 1.7 cup lettuce, 110 g cucumber, 150 g dill, 1 tsp turmeric, 1 tsp vinegar, 1 tsp olive oil, 1 clove garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 335,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 46,
            "sodium": 672,
            "carbohydrates": 14,
            "fiber": 8,
            "sugar": 20,
            "protein": 8
        }
    },
    "Chinese Braised Tuna Congee With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 597,
            "protein": 25,
            "carbs": 61,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.4 cup tuna with water or broth until soft and creamy. Add 2 cup noodles, 0.9 cup spinach, 1 cup tomato and simmer until vegetables are tender. Season with 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion and serve hot.",
        "ingredients": "1.4 cup tuna, 2 cup noodles, 0.9 cup spinach, 1 cup tomato, 190 g carrot, 70 g cilantro, 1 tsp lemon juice, 2 tsps turmeric, 2 tsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 597,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 49,
            "sodium": 228,
            "carbohydrates": 61,
            "fiber": 7,
            "sugar": 13,
            "protein": 25
        }
    },
    "Chinese Smoky Shrimp Omelette With Feta & Olives": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 576,
            "protein": 24,
            "carbs": 80,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.2 cup soba, 1.1 cup broccoli, 2 tsps bell pepper until softened. Add beaten eggs and 1.7 cup shrimp if applicable, scramble until cooked. Season with 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion and serve immediately.",
        "ingredients": "1.7 cup shrimp, 1.2 cup soba, 1.1 cup broccoli, 2 tsps bell pepper, 60 g cucumber, 1.7 cup dill, 1 tsp paprika, 2 tsps chili flakes, 1 tsp olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 576,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 39,
            "sodium": 644,
            "carbohydrates": 80,
            "fiber": 3,
            "sugar": 6,
            "protein": 24
        }
    },
    "French Smoky Shrimp Skewers With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 273,
            "protein": 31,
            "carbs": 5,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.6 cup shrimp as base. Add 0.9 cup spaghetti, 210 g mushroom, 210 g cabbage and cook until tender. Incorporate 60 g pea, 1.6 cup rosemary, 1 tbsp sesame oil and season with 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "0.6 cup shrimp, 0.9 cup spaghetti, 210 g mushroom, 210 g cabbage, 60 g pea, 1.6 cup rosemary, 1 tbsp sesame oil, 3 tbsps lemon juice, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 273,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 10,
            "sodium": 431,
            "carbohydrates": 5,
            "fiber": 5,
            "sugar": 3,
            "protein": 31
        }
    },
    "Chinese Poached Cod Risotto With Chimichurri": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 615,
            "protein": 14,
            "carbs": 10,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.9 cup cod as base. Add 1 piece wrap, 2 tsps bell pepper, 1.7 cup tomato and cook until tender. Incorporate 0.6 cup cucumber, 0.9 cup parsley, 1 tsp cumin and season with 1 tsp olive oil, 2 tsps garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "0.9 cup cod, 1 piece wrap, 2 tsps bell pepper, 1.7 cup tomato, 0.6 cup cucumber, 0.9 cup parsley, 1 tsp cumin, 2 tbsps soy sauce, 1 tsp olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 615,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 83,
            "sodium": 358,
            "carbohydrates": 10,
            "fiber": 10,
            "sugar": 2,
            "protein": 14
        }
    },
    "Spanish Poached Lamb Wrap With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 165,
            "protein": 36,
            "carbs": 46,
            "fat": 4
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 200 g lamb, 1 cup couscous, 2 tsps bell pepper, 190 g pea. Add 90 g spinach, 160 g cilantro, 2 tbsps sesame oil and roll tightly. Serve with 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion on the side.",
        "ingredients": "200 g lamb, 1 cup couscous, 2 tsps bell pepper, 190 g pea, 90 g spinach, 160 g cilantro, 2 tbsps sesame oil, 1 tbsp vinegar, 2 tsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 165,
            "fat": 4,
            "saturatedFat": 1,
            "cholesterol": 101,
            "sodium": 267,
            "carbohydrates": 46,
            "fiber": 1,
            "sugar": 8,
            "protein": 36
        }
    },
    "Thai Grilled Beef Soup With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 505,
            "protein": 19,
            "carbs": 62,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Sauté 0.8 cup potato, 190 g pea, 1.9 cup carrot in oil until softened. Add broth and 1.1 cup beef, simmer until tender. Season with 2 tbsps olive oil, 2 cloves garlic, 3 tbsps onion and serve hot.",
        "ingredients": "1.1 cup beef, 0.8 cup potato, 190 g pea, 1.9 cup carrot, 1.9 cup spinach, 1.6 cup dill, 1 tsp paprika, 1 tsp lime juice, 2 tbsps olive oil, 2 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 505,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 11,
            "sodium": 786,
            "carbohydrates": 62,
            "fiber": 15,
            "sugar": 17,
            "protein": 19
        }
    },
    "American Braised Chicken Tacos With Pickled Veggies": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 229,
            "protein": 39,
            "carbs": 31,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 200 g chicken as base. Add 1.6 cup potato, 0.9 cup zucchini, 230 g pea and cook until tender. Incorporate 240 g lettuce, 1.8 cup mint, 1 tsp lime juice and season with 2 tbsps olive oil, 3 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "200 g chicken, 1.6 cup potato, 0.9 cup zucchini, 230 g pea, 240 g lettuce, 1.8 cup mint, 1 tsp lime juice, 1 tsp soy sauce, 2 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 229,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 46,
            "sodium": 848,
            "carbohydrates": 31,
            "fiber": 14,
            "sugar": 22,
            "protein": 39
        }
    },
    "Vietnamese Braised Beef Salad With Harissa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 210,
            "protein": 24,
            "carbs": 58,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 1.2 cup beef, 1 cup rice, 0.7 cup spinach, 1.1 cup carrot in a bowl. Add 1 tsp bell pepper, 1.9 cup basil, 1 tsp chili flakes and toss gently. Dress with 2 tsps olive oil, 2 tsps garlic, 1.6 cup onion and serve fresh.",
        "ingredients": "1.2 cup beef, 1 cup rice, 0.7 cup spinach, 1.1 cup carrot, 1 tsp bell pepper, 1.9 cup basil, 1 tsp chili flakes, 3 tbsps soy sauce, 2 tsps olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 210,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 103,
            "sodium": 894,
            "carbohydrates": 58,
            "fiber": 10,
            "sugar": 12,
            "protein": 24
        }
    },
    "Mexican Smoky Pork Stir-fry With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 406,
            "protein": 31,
            "carbs": 30,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.5 cup pork as base. Add 100 g couscous, 0.6 cup mushroom, 170 g cucumber and cook until tender. Incorporate 1.5 cup corn, 1.5 cup cilantro, 1 tsp chili flakes and season with 2 tbsps olive oil, 2 tsps garlic, 1.7 cup onion. Serve hot.",
        "ingredients": "1.5 cup pork, 100 g couscous, 0.6 cup mushroom, 170 g cucumber, 1.5 cup corn, 1.5 cup cilantro, 1 tsp chili flakes, 2 tsps lime juice, 2 tbsps olive oil, 2 tsps garlic, 1.7 cup onion",
        "detailedNutrition": {
            "calories": 406,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 56,
            "sodium": 357,
            "carbohydrates": 30,
            "fiber": 8,
            "sugar": 5,
            "protein": 31
        }
    },
    "Turkish Poached Tuna Noodles With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 167,
            "protein": 24,
            "carbs": 16,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup tuna as base. Add 100 g udon, 140 g zucchini, 1.2 cup kale and cook until tender. Incorporate 110 g cabbage, 100 g basil, 2 cloves ginger and season with 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "0.8 cup tuna, 100 g udon, 140 g zucchini, 1.2 cup kale, 110 g cabbage, 100 g basil, 2 cloves ginger, 1 tbsp soy sauce, 1 tsp olive oil, 2 cloves garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 167,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 14,
            "sodium": 552,
            "carbohydrates": 16,
            "fiber": 2,
            "sugar": 2,
            "protein": 24
        }
    },
    "Japanese Braised Cod Risotto With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 388,
            "protein": 25,
            "carbs": 37,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.7 cup cod as base. Add 90 g potato, 70 g corn, 1 tsp bell pepper and cook until tender. Incorporate 1.6 cup zucchini, 1.9 cup dill, 2 tsps turmeric and season with 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "1.7 cup cod, 90 g potato, 70 g corn, 1 tsp bell pepper, 1.6 cup zucchini, 1.9 cup dill, 2 tsps turmeric, 3 tbsps lemon juice, 1 tbsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 388,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 31,
            "sodium": 354,
            "carbohydrates": 37,
            "fiber": 2,
            "sugar": 20,
            "protein": 25
        }
    },
    "American Smoky Chicken Porridge With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 484,
            "protein": 24,
            "carbs": 36,
            "fat": 14
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1 cup chicken with water or broth until soft and creamy. Add 1 piece bread, 170 g zucchini, 1 tsp bell pepper and simmer until vegetables are tender. Season with 3 tbsps olive oil, 1 clove garlic, 0.9 cup onion and serve hot.",
        "ingredients": "1 cup chicken, 1 piece bread, 170 g zucchini, 1 tsp bell pepper, 140 g mushroom, 170 g thyme, 2 tsps chili flakes, 1 tbsp curry paste, 3 tbsps olive oil, 1 clove garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 484,
            "fat": 14,
            "saturatedFat": 4,
            "cholesterol": 79,
            "sodium": 404,
            "carbohydrates": 36,
            "fiber": 12,
            "sugar": 5,
            "protein": 24
        }
    },
    "Korean Braised Duck Congee With Garlic Yogurt": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 638,
            "protein": 44,
            "carbs": 49,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 120 g duck with water or broth until soft and creamy. Add 110 g bulgur, 1.4 cup zucchini, 0.7 cup spinach and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 clove garlic, 1.2 cup onion and serve hot.",
        "ingredients": "120 g duck, 110 g bulgur, 1.4 cup zucchini, 0.7 cup spinach, 1.1 cup lettuce, 1.2 cup cilantro, 3 cloves ginger, 1 tsp lemon juice, 1 tsp olive oil, 1 clove garlic, 1.2 cup onion",
        "detailedNutrition": {
            "calories": 638,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 26,
            "sodium": 448,
            "carbohydrates": 49,
            "fiber": 11,
            "sugar": 18,
            "protein": 44
        }
    },
    "Korean Crispy Tuna Risotto With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 640,
            "protein": 33,
            "carbs": 43,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g tuna as base. Add 240 g potato, 0.8 cup corn, 1.3 cup kale and cook until tender. Incorporate 2 cup mushroom, 240 g mint, 1 tsp ginger and season with 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "220 g tuna, 240 g potato, 0.8 cup corn, 1.3 cup kale, 2 cup mushroom, 240 g mint, 1 tsp ginger, 140 g curry paste, 2 tbsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 640,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 46,
            "sodium": 757,
            "carbohydrates": 43,
            "fiber": 15,
            "sugar": 14,
            "protein": 33
        }
    },
    "Chinese Smoky Salmon Stew With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 170,
            "protein": 13,
            "carbs": 72,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 220 g salmon as base. Add 220 g spaghetti, 160 g kale, 0.9 cup tomato and cook until tender. Incorporate 1.7 cup cabbage, 240 g rosemary, 2 tsps ginger and season with 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "220 g salmon, 220 g spaghetti, 160 g kale, 0.9 cup tomato, 1.7 cup cabbage, 240 g rosemary, 2 tsps ginger, 2 tsps turmeric, 2 tsps olive oil, 3 cloves garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 170,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 33,
            "sodium": 236,
            "carbohydrates": 72,
            "fiber": 10,
            "sugar": 11,
            "protein": 13
        }
    },
    "Turkish Grilled Salmon Skewers With Black Pepper and Lime": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 262,
            "protein": 35,
            "carbs": 42,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 1.3 cup salmon as base. Add 1.8 cup noodles, 1.2 cup cabbage, 170 g broccoli and cook until tender. Incorporate 180 g tomato, 1.4 cup rosemary, 2 tsps turmeric and season with 1 tbsp olive oil, 2 tsps garlic, 1 tbsp onion. Serve hot.",
        "ingredients": "1.3 cup salmon, 1.8 cup noodles, 1.2 cup cabbage, 170 g broccoli, 180 g tomato, 1.4 cup rosemary, 2 tsps turmeric, 1 tsp chili flakes, 1 tbsp olive oil, 2 tsps garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 262,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 108,
            "sodium": 77,
            "carbohydrates": 42,
            "fiber": 2,
            "sugar": 11,
            "protein": 35
        }
    },
    "Japanese Glazed Shrimp Omelette With Herbed Couscous": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 313,
            "protein": 17,
            "carbs": 53,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1 tbsp yogurt, 110 g carrot, 60 g zucchini until softened. Add beaten eggs and 0.5 cup shrimp if applicable, scramble until cooked. Season with 3 tbsps olive oil, 2 tsps garlic, 1.6 cup onion and serve immediately.",
        "ingredients": "0.5 cup shrimp, 1 tbsp yogurt, 110 g carrot, 60 g zucchini, 1 tsp bell pepper, 160 g cilantro, 60 g curry paste, 1 tsp lime juice, 3 tbsps olive oil, 2 tsps garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 313,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 115,
            "sodium": 382,
            "carbohydrates": 53,
            "fiber": 5,
            "sugar": 22,
            "protein": 17
        }
    },
    "Vietnamese Poached Duck Porridge With Harissa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 452,
            "protein": 25,
            "carbs": 10,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 230 g duck with water or broth until soft and creamy. Add 1.3 cup spaghetti, 1.3 cup pea, 1 tsp bell pepper and simmer until vegetables are tender. Season with 2 tbsps olive oil, 2 cloves garlic, 1 cup onion and serve hot.",
        "ingredients": "230 g duck, 1.3 cup spaghetti, 1.3 cup pea, 1 tsp bell pepper, 1.6 cup carrot, 0.5 cup dill, 3 tbsps soy sauce, 3 tbsps lime juice, 2 tbsps olive oil, 2 cloves garlic, 1 cup onion",
        "detailedNutrition": {
            "calories": 452,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 12,
            "sodium": 756,
            "carbohydrates": 10,
            "fiber": 10,
            "sugar": 4,
            "protein": 25
        }
    },
    "Greek Stir-fried Turkey Rice With Mango Salsa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 545,
            "protein": 34,
            "carbs": 9,
            "fat": 11
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 0.8 cup turkey as base. Add 130 g potato, 1.2 cup cabbage, 1.9 cup tomato and cook until tender. Incorporate 1.4 cup carrot, 170 g thyme, 1 tsp cumin and season with 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "0.8 cup turkey, 130 g potato, 1.2 cup cabbage, 1.9 cup tomato, 1.4 cup carrot, 170 g thyme, 1 tsp cumin, 2 tsps chili flakes, 1 tbsp olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 545,
            "fat": 11,
            "saturatedFat": 3,
            "cholesterol": 33,
            "sodium": 384,
            "carbohydrates": 9,
            "fiber": 3,
            "sugar": 1,
            "protein": 34
        }
    },
    "Mexican Grilled Lamb Sandwich With Tomato Relish": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 415,
            "protein": 17,
            "carbs": 12,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 0.6 cup lamb, 90 g quinoa, 150 g corn and top with 1.5 cup tomato, 1.4 cup pea, 1.1 cup rosemary. Season with 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion and serve.",
        "ingredients": "0.6 cup lamb, 90 g quinoa, 150 g corn, 1.5 cup tomato, 1.4 cup pea, 1.1 cup rosemary, 1 tsp chili flakes, 1 tbsp vinegar, 3 tbsps olive oil, 3 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 415,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 31,
            "sodium": 525,
            "carbohydrates": 12,
            "fiber": 15,
            "sugar": 3,
            "protein": 17
        }
    },
    "Moroccan Crispy Tuna Toast With Crunchy Slaw": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 336,
            "protein": 5,
            "carbs": 65,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 1.7 cup tuna, 1 cup oats, 1.3 cup mushroom and top with 170 g pea, 170 g corn, 220 g rosemary. Season with 1 tbsp olive oil, 3 cloves garlic, 1.9 cup onion and serve.",
        "ingredients": "1.7 cup tuna, 1 cup oats, 1.3 cup mushroom, 170 g pea, 170 g corn, 220 g rosemary, 3 tbsps sesame oil, 1 tsp cumin, 1 tbsp olive oil, 3 cloves garlic, 1.9 cup onion",
        "detailedNutrition": {
            "calories": 336,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 94,
            "sodium": 84,
            "carbohydrates": 65,
            "fiber": 3,
            "sugar": 2,
            "protein": 5
        }
    },
    "French Baked Beef Omelette With Avocado Crema": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 424,
            "protein": 29,
            "carbs": 48,
            "fat": 5
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Heat oil in a pan, sauté 1.8 cup rice, 1 cup pea, 1.1 cup spinach until softened. Add beaten eggs and 150 g beef if applicable, scramble until cooked. Season with 3 tbsps olive oil, 1 tsp garlic, 0.9 cup onion and serve immediately.",
        "ingredients": "150 g beef, 1.8 cup rice, 1 cup pea, 1.1 cup spinach, 1.9 cup corn, 220 g parsley, 3 tbsps lemon juice, 1 tsp turmeric, 3 tbsps olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 424,
            "fat": 5,
            "saturatedFat": 2,
            "cholesterol": 45,
            "sodium": 166,
            "carbohydrates": 48,
            "fiber": 6,
            "sugar": 7,
            "protein": 29
        }
    },
    "Turkish Crispy Cod Risotto With Sesame Ginger Dressing": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 306,
            "protein": 35,
            "carbs": 15,
            "fat": 1
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 120 g cod as base. Add 2 tbsps yogurt, 160 g lettuce, 0.9 cup kale and cook until tender. Incorporate 1.5 cup tomato, 130 g rosemary, 1 tsp paprika and season with 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "120 g cod, 2 tbsps yogurt, 160 g lettuce, 0.9 cup kale, 1.5 cup tomato, 130 g rosemary, 1 tsp paprika, 2 tbsps lemon juice, 2 tbsps olive oil, 2 tsps garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 306,
            "fat": 1,
            "saturatedFat": 0,
            "cholesterol": 58,
            "sodium": 669,
            "carbohydrates": 15,
            "fiber": 13,
            "sugar": 9,
            "protein": 35
        }
    },
    "Middle Eastern Smoky Beef Wrap With Lemon Herb Quinoa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 200,
            "protein": 39,
            "carbs": 58,
            "fat": 12
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 120 g beef, 1 tbsp yogurt, 110 g cabbage, 2 tsps bell pepper. Add 1.1 cup kale, 210 g mint, 1 tsp turmeric and roll tightly. Serve with 1 tsp olive oil, 1 clove garlic, 2 tbsps onion on the side.",
        "ingredients": "120 g beef, 1 tbsp yogurt, 110 g cabbage, 2 tsps bell pepper, 1.1 cup kale, 210 g mint, 1 tsp turmeric, 1 tsp cumin, 1 tsp olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 200,
            "fat": 12,
            "saturatedFat": 4,
            "cholesterol": 111,
            "sodium": 838,
            "carbohydrates": 58,
            "fiber": 15,
            "sugar": 17,
            "protein": 39
        }
    },
    "Moroccan Roasted Crab Skewers With Harissa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 295,
            "protein": 34,
            "carbs": 66,
            "fat": 7
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 60 g crab as base. Add 200 g bulgur, 120 g spinach, 160 g corn and cook until tender. Incorporate 190 g carrot, 60 g thyme, 3 tbsps soy sauce and season with 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion. Serve hot.",
        "ingredients": "60 g crab, 200 g bulgur, 120 g spinach, 160 g corn, 190 g carrot, 60 g thyme, 3 tbsps soy sauce, 2 tsps paprika, 2 tsps olive oil, 1 tsp garlic, 3 tbsps onion",
        "detailedNutrition": {
            "calories": 295,
            "fat": 7,
            "saturatedFat": 2,
            "cholesterol": 12,
            "sodium": 254,
            "carbohydrates": 66,
            "fiber": 11,
            "sugar": 17,
            "protein": 34
        }
    },
    "Indian Baked Lamb Stew With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 231,
            "protein": 33,
            "carbs": 16,
            "fat": 0
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 110 g lamb as base. Add 1 piece bread, 1.5 cup cabbage, 1.8 cup kale and cook until tender. Incorporate 70 g tomato, 1.9 cup parsley, 3 tbsps lemon juice and season with 2 tsps olive oil, 1 tsp garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "110 g lamb, 1 piece bread, 1.5 cup cabbage, 1.8 cup kale, 70 g tomato, 1.9 cup parsley, 3 tbsps lemon juice, 2 tsps vinegar, 2 tsps olive oil, 1 tsp garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 231,
            "fat": 0,
            "saturatedFat": 0,
            "cholesterol": 37,
            "sodium": 297,
            "carbohydrates": 16,
            "fiber": 11,
            "sugar": 3,
            "protein": 33
        }
    },
    "Japanese Glazed Cod Wrap With Harissa": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 427,
            "protein": 33,
            "carbs": 48,
            "fat": 13
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Warm tortilla, fill with 0.8 cup cod, 230 g spaghetti, 1.4 cup broccoli, 1.6 cup mushroom. Add 1.2 cup zucchini, 70 g cilantro, 1 tsp lime juice and roll tightly. Serve with 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion on the side.",
        "ingredients": "0.8 cup cod, 230 g spaghetti, 1.4 cup broccoli, 1.6 cup mushroom, 1.2 cup zucchini, 70 g cilantro, 1 tsp lime juice, 140 g curry paste, 1 tbsp olive oil, 1 tsp garlic, 1 tbsp onion",
        "detailedNutrition": {
            "calories": 427,
            "fat": 13,
            "saturatedFat": 4,
            "cholesterol": 89,
            "sodium": 232,
            "carbohydrates": 48,
            "fiber": 5,
            "sugar": 9,
            "protein": 33
        }
    },
    "Moroccan Smoky Sardines Salad With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 357,
            "protein": 27,
            "carbs": 41,
            "fat": 9
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Combine 70 g sardines, 1.9 cup spaghetti, 1.2 cup kale, 1.2 cup corn in a bowl. Add 1.5 cup zucchini, 1.1 cup mint, 2 tsps paprika and toss gently. Dress with 1 tsp olive oil, 3 cloves garlic, 1.6 cup onion and serve fresh.",
        "ingredients": "70 g sardines, 1.9 cup spaghetti, 1.2 cup kale, 1.2 cup corn, 1.5 cup zucchini, 1.1 cup mint, 2 tsps paprika, 1 tsp vinegar, 1 tsp olive oil, 3 cloves garlic, 1.6 cup onion",
        "detailedNutrition": {
            "calories": 357,
            "fat": 9,
            "saturatedFat": 3,
            "cholesterol": 3,
            "sodium": 420,
            "carbohydrates": 41,
            "fiber": 13,
            "sugar": 9,
            "protein": 27
        }
    },
    "Moroccan Stir-fried Cod Toast With Basil Pesto": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 556,
            "protein": 35,
            "carbs": 71,
            "fat": 3
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Toast bread until golden. Layer with 180 g cod, 1.1 cup quinoa, 140 g broccoli and top with 1.6 cup cucumber, 0.7 cup lettuce, 110 g cilantro. Season with 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion and serve.",
        "ingredients": "180 g cod, 1.1 cup quinoa, 140 g broccoli, 1.6 cup cucumber, 0.7 cup lettuce, 110 g cilantro, 3 tbsps soy sauce, 1 tsp cumin, 3 tbsps olive oil, 1 clove garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 556,
            "fat": 3,
            "saturatedFat": 1,
            "cholesterol": 92,
            "sodium": 395,
            "carbohydrates": 71,
            "fiber": 5,
            "sugar": 9,
            "protein": 35
        }
    },
    "Middle Eastern Smoky Salmon Porridge With Coconut-lime Rice": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 424,
            "protein": 9,
            "carbs": 23,
            "fat": 6
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Cook 1.1 cup salmon with water or broth until soft and creamy. Add 1.5 cup quinoa, 160 g broccoli, 1.8 cup zucchini and simmer until vegetables are tender. Season with 1 tsp olive oil, 1 tsp garlic, 0.9 cup onion and serve hot.",
        "ingredients": "1.1 cup salmon, 1.5 cup quinoa, 160 g broccoli, 1.8 cup zucchini, 170 g mushroom, 1.1 cup parsley, 2 tsps soy sauce, 2 tsps chili flakes, 1 tsp olive oil, 1 tsp garlic, 0.9 cup onion",
        "detailedNutrition": {
            "calories": 424,
            "fat": 6,
            "saturatedFat": 2,
            "cholesterol": 14,
            "sodium": 492,
            "carbohydrates": 23,
            "fiber": 9,
            "sugar": 12,
            "protein": 9
        }
    },
    "Moroccan Roasted Beef Noodles With Miso Glaze": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 306,
            "protein": 39,
            "carbs": 45,
            "fat": 15
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Prepare 80 g beef as base. Add 150 g bulgur, 110 g zucchini, 190 g mushroom and cook until tender. Incorporate 170 g tomato, 1.6 cup parsley, 1 tbsp curry paste and season with 1 tsp olive oil, 2 cloves garlic, 2 tbsps onion. Serve hot.",
        "ingredients": "80 g beef, 150 g bulgur, 110 g zucchini, 190 g mushroom, 170 g tomato, 1.6 cup parsley, 1 tbsp curry paste, 2 tsps turmeric, 1 tsp olive oil, 2 cloves garlic, 2 tbsps onion",
        "detailedNutrition": {
            "calories": 306,
            "fat": 15,
            "saturatedFat": 5,
            "cholesterol": 17,
            "sodium": 290,
            "carbohydrates": 45,
            "fiber": 13,
            "sugar": 2,
            "protein": 39
        }
    },
    "Korean Braised Salmon Bowl With Rosemary Potatoes": {
        "mealType": "dinner",
        "lifestyle": "non-vegetarian",
        "category": "western",
        "nutrition": {
            "calories": 511,
            "protein": 37,
            "carbs": 29,
            "fat": 8
        },
        "prepTime": "15-20 minutes",
        "difficulty": "Easy",
        "image": "",
        "recipe": "Blend 1.4 cup salmon, 80 g couscous, 170 g zucchini with liquid until smooth. Top with 0.7 cup carrot, 1.9 cup tomato, 1.6 cup mint and garnish with 2 tbsps olive oil, 2 tsps garlic, 1.4 cup onion. Serve chilled.",
        "ingredients": "1.4 cup salmon, 80 g couscous, 170 g zucchini, 0.7 cup carrot, 1.9 cup tomato, 1.6 cup mint, 1 clove ginger, 1 tsp chili flakes, 2 tbsps olive oil, 2 tsps garlic, 1.4 cup onion",
        "detailedNutrition": {
            "calories": 511,
            "fat": 8,
            "saturatedFat": 2,
            "cholesterol": 63,
            "sodium": 704,
            "carbohydrates": 29,
            "fiber": 12,
            "sugar": 19,
            "protein": 37
        }
    }
};

// 导出数据库
if (typeof module !== "undefined" && module.exports) {
    module.exports = foodDatabase;
}