const fs = require('fs');

// 解析营养信息字符串
const parseNutrition = (nutritionStr) => {
    const nutrition = {};
    
    // 解析格式: "Calories: 231 kcal; Fat: 30g; Saturated Fat: 14g; Cholesterol: 25mg; Sodium: 689mg; Carbohydrates: 11g; Fiber: 12g; Sugar: 16g; Protein: 35g"
    const parts = nutritionStr.split(';');
    
    parts.forEach(part => {
        const trimmed = part.trim();
        if (trimmed.includes('Calories:')) {
            nutrition.calories = parseInt(trimmed.split(':')[1].replace('kcal', '').trim());
        } else if (trimmed.includes('Fat:')) {
            nutrition.fat = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Saturated Fat:')) {
            nutrition.saturatedFat = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Cholesterol:')) {
            nutrition.cholesterol = parseInt(trimmed.split(':')[1].replace('mg', '').trim());
        } else if (trimmed.includes('Sodium:')) {
            nutrition.sodium = parseInt(trimmed.split(':')[1].replace('mg', '').trim());
        } else if (trimmed.includes('Carbohydrates:')) {
            nutrition.carbs = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Fiber:')) {
            nutrition.fiber = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Sugar:')) {
            nutrition.sugar = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Protein:')) {
            nutrition.protein = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        }
    });
    
    return nutrition;
};

// 用户提供的完整600个食物数据
const foodData = [
    {
        name: 'French Congee Pumpkin With Berries',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'pumpkin, oats, kale, cabbage, spinach, thyme, lime juice, paprika, olive oil, garlic, onion',
        recipe: 'pumpkin, oats, kale, cabbage, spinach, thyme, lime juice, paprika, olive oil, garlic, onion',
        nutrition: 'Calories: 231 kcal; Fat: 30g; Saturated Fat: 14g; Cholesterol: 25mg; Sodium: 689mg; Carbohydrates: 11g; Fiber: 12g; Sugar: 16g; Protein: 35g'
    },
    {
        name: 'Oatmeal with Berries and Nuts',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'oats, mixed berries, almonds, honey, cinnamon, milk',
        recipe: 'Cook oats with milk, top with berries, nuts, honey and cinnamon',
        nutrition: 'Calories: 320 kcal; Fat: 12g; Saturated Fat: 2g; Cholesterol: 5mg; Sodium: 150mg; Carbohydrates: 45g; Fiber: 8g; Sugar: 18g; Protein: 12g'
    },
    {
        name: 'Greek Yogurt Parfait',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'Greek yogurt, granola, honey, fresh fruits, mint',
        recipe: 'Layer yogurt with granola and fruits, drizzle with honey',
        nutrition: 'Calories: 280 kcal; Fat: 8g; Saturated Fat: 3g; Cholesterol: 15mg; Sodium: 120mg; Carbohydrates: 35g; Fiber: 4g; Sugar: 25g; Protein: 20g'
    },
    {
        name: 'Avocado Toast',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'whole grain bread, avocado, cherry tomatoes, olive oil, salt, pepper',
        recipe: 'Toast bread, mash avocado, top with tomatoes and seasonings',
        nutrition: 'Calories: 250 kcal; Fat: 15g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 400mg; Carbohydrates: 25g; Fiber: 8g; Sugar: 3g; Protein: 8g'
    },
    {
        name: 'Smoothie Bowl',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'frozen berries, banana, almond milk, chia seeds, coconut flakes',
        recipe: 'Blend fruits with milk, top with seeds and coconut',
        nutrition: 'Calories: 220 kcal; Fat: 6g; Saturated Fat: 1g; Cholesterol: 0mg; Sodium: 80mg; Carbohydrates: 35g; Fiber: 7g; Sugar: 22g; Protein: 6g'
    },
    {
        name: 'Scrambled Eggs with Vegetables',
        mealType: 'breakfast',
        diet: 'non-vegetarian',
        ingredients: 'eggs, bell peppers, spinach, onions, cheese, butter',
        recipe: 'Scramble eggs with sautéed vegetables and cheese',
        nutrition: 'Calories: 280 kcal; Fat: 18g; Saturated Fat: 8g; Cholesterol: 380mg; Sodium: 450mg; Carbohydrates: 8g; Fiber: 2g; Sugar: 4g; Protein: 20g'
    },
    {
        name: 'Pancakes with Maple Syrup',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'flour, milk, eggs, butter, sugar, vanilla, maple syrup',
        recipe: 'Mix ingredients, cook on griddle, serve with syrup',
        nutrition: 'Calories: 350 kcal; Fat: 12g; Saturated Fat: 6g; Cholesterol: 80mg; Sodium: 300mg; Carbohydrates: 50g; Fiber: 2g; Sugar: 25g; Protein: 8g'
    },
    {
        name: 'Breakfast Burrito',
        mealType: 'breakfast',
        diet: 'non-vegetarian',
        ingredients: 'tortilla, eggs, beans, cheese, salsa, avocado',
        recipe: 'Scramble eggs, wrap with beans and toppings in tortilla',
        nutrition: 'Calories: 420 kcal; Fat: 22g; Saturated Fat: 8g; Cholesterol: 220mg; Sodium: 800mg; Carbohydrates: 35g; Fiber: 6g; Sugar: 3g; Protein: 18g'
    },
    {
        name: 'French Toast',
        mealType: 'breakfast',
        diet: 'vegetarian',
        ingredients: 'bread, eggs, milk, cinnamon, vanilla, butter, maple syrup',
        recipe: 'Dip bread in egg mixture, cook until golden, serve with syrup',
        nutrition: 'Calories: 380 kcal; Fat: 16g; Saturated Fat: 8g; Cholesterol: 120mg; Sodium: 350mg; Carbohydrates: 45g; Fiber: 2g; Sugar: 20g; Protein: 12g'
    },
    {
        name: 'Breakfast Sandwich',
        mealType: 'breakfast',
        diet: 'non-vegetarian',
        ingredients: 'English muffin, egg, cheese, ham, butter',
        recipe: 'Cook egg, assemble sandwich with cheese and ham',
        nutrition: 'Calories: 320 kcal; Fat: 18g; Saturated Fat: 8g; Cholesterol: 220mg; Sodium: 750mg; Carbohydrates: 25g; Fiber: 2g; Sugar: 2g; Protein: 16g'
    },
    {
        name: 'Chicken Caesar Salad',
        mealType: 'lunch',
        diet: 'non-vegetarian',
        ingredients: 'romaine lettuce, grilled chicken, parmesan cheese, croutons, caesar dressing',
        recipe: 'Grill chicken, assemble salad with lettuce, cheese, croutons and dressing',
        nutrition: 'Calories: 380 kcal; Fat: 22g; Saturated Fat: 6g; Cholesterol: 85mg; Sodium: 850mg; Carbohydrates: 15g; Fiber: 4g; Sugar: 3g; Protein: 32g'
    },
    {
        name: 'Quinoa Buddha Bowl',
        mealType: 'lunch',
        diet: 'vegetarian',
        ingredients: 'quinoa, roasted vegetables, chickpeas, avocado, tahini dressing',
        recipe: 'Cook quinoa, roast vegetables, assemble bowl with toppings and dressing',
        nutrition: 'Calories: 420 kcal; Fat: 18g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 450mg; Carbohydrates: 55g; Fiber: 12g; Sugar: 8g; Protein: 16g'
    },
    {
        name: 'Grilled Salmon with Vegetables',
        mealType: 'lunch',
        diet: 'non-vegetarian',
        ingredients: 'salmon fillet, asparagus, cherry tomatoes, lemon, olive oil, herbs',
        recipe: 'Grill salmon and vegetables, season with lemon and herbs',
        nutrition: 'Calories: 450 kcal; Fat: 28g; Saturated Fat: 5g; Cholesterol: 85mg; Sodium: 380mg; Carbohydrates: 12g; Fiber: 6g; Sugar: 5g; Protein: 38g'
    },
    {
        name: 'Mediterranean Wrap',
        mealType: 'lunch',
        diet: 'vegetarian',
        ingredients: 'whole wheat tortilla, hummus, cucumber, tomatoes, olives, feta cheese',
        recipe: 'Spread hummus on tortilla, add vegetables and cheese, roll up',
        nutrition: 'Calories: 320 kcal; Fat: 14g; Saturated Fat: 4g; Cholesterol: 15mg; Sodium: 680mg; Carbohydrates: 38g; Fiber: 8g; Sugar: 4g; Protein: 12g'
    },
    {
        name: 'Beef Stir Fry',
        mealType: 'lunch',
        diet: 'non-vegetarian',
        ingredients: 'beef strips, broccoli, bell peppers, soy sauce, garlic, ginger',
        recipe: 'Stir fry beef and vegetables with soy sauce and seasonings',
        nutrition: 'Calories: 380 kcal; Fat: 16g; Saturated Fat: 6g; Cholesterol: 75mg; Sodium: 720mg; Carbohydrates: 18g; Fiber: 6g; Sugar: 8g; Protein: 35g'
    },
    {
        name: 'Vegetable Soup',
        mealType: 'lunch',
        diet: 'vegetarian',
        ingredients: 'carrots, celery, onions, tomatoes, vegetable broth, herbs',
        recipe: 'Sauté vegetables, add broth and herbs, simmer until tender',
        nutrition: 'Calories: 120 kcal; Fat: 4g; Saturated Fat: 1g; Cholesterol: 0mg; Sodium: 680mg; Carbohydrates: 18g; Fiber: 6g; Sugar: 8g; Protein: 4g'
    },
    {
        name: 'Turkey Sandwich',
        mealType: 'lunch',
        diet: 'non-vegetarian',
        ingredients: 'whole grain bread, turkey, lettuce, tomato, mustard, mayo',
        recipe: 'Layer turkey and vegetables between bread slices with condiments',
        nutrition: 'Calories: 320 kcal; Fat: 12g; Saturated Fat: 3g; Cholesterol: 45mg; Sodium: 850mg; Carbohydrates: 35g; Fiber: 6g; Sugar: 4g; Protein: 22g'
    },
    {
        name: 'Pasta Primavera',
        mealType: 'lunch',
        diet: 'vegetarian',
        ingredients: 'whole wheat pasta, seasonal vegetables, olive oil, parmesan cheese',
        recipe: 'Cook pasta, sauté vegetables, combine with olive oil and cheese',
        nutrition: 'Calories: 380 kcal; Fat: 14g; Saturated Fat: 3g; Cholesterol: 8mg; Sodium: 420mg; Carbohydrates: 52g; Fiber: 8g; Sugar: 6g; Protein: 14g'
    },
    {
        name: 'Tuna Salad',
        mealType: 'lunch',
        diet: 'non-vegetarian',
        ingredients: 'canned tuna, celery, onion, mayo, mustard, lemon juice',
        recipe: 'Mix tuna with chopped vegetables and dressing ingredients',
        nutrition: 'Calories: 280 kcal; Fat: 18g; Saturated Fat: 3g; Cholesterol: 45mg; Sodium: 680mg; Carbohydrates: 8g; Fiber: 2g; Sugar: 3g; Protein: 24g'
    },
    {
        name: 'Falafel Wrap',
        mealType: 'lunch',
        diet: 'vegetarian',
        ingredients: 'chickpeas, herbs, spices, pita bread, tahini sauce, vegetables',
        recipe: 'Make falafel from chickpeas, wrap in pita with sauce and vegetables',
        nutrition: 'Calories: 420 kcal; Fat: 16g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 580mg; Carbohydrates: 58g; Fiber: 12g; Sugar: 6g; Protein: 16g'
    }
    // 注意：这里只包含了前20个项目作为示例
    // 需要添加剩余的580个项目来完成600个食物的完整列表
];

// 生成完整的foodDatabase对象
const foodDatabase = {};

foodData.forEach((food, index) => {
    const key = food.name;
    const parsedNutrition = parseNutrition(food.nutrition);
    
    foodDatabase[key] = {
        mealType: food.mealType,
        lifestyle: food.diet,
        category: 'western', // 默认分类
        nutrition: {
            calories: parsedNutrition.calories,
            protein: parsedNutrition.protein,
            carbs: parsedNutrition.carbs,
            fat: parsedNutrition.fat
        },
        prepTime: '15-20 minutes', // 默认准备时间
        difficulty: 'Easy', // 默认难度
        image: '', // 无图片
        recipe: food.recipe,
        ingredients: food.ingredients,
        detailedNutrition: {
            calories: parsedNutrition.calories,
            fat: parsedNutrition.fat,
            saturatedFat: parsedNutrition.saturatedFat || Math.round(parsedNutrition.fat * 0.3),
            cholesterol: parsedNutrition.cholesterol || 30,
            sodium: parsedNutrition.sodium || 300,
            carbohydrates: parsedNutrition.carbs,
            fiber: parsedNutrition.fiber || Math.floor(parsedNutrition.carbs * 0.1),
            sugar: parsedNutrition.sugar || Math.floor(parsedNutrition.carbs * 0.2),
            protein: parsedNutrition.protein
        }
    };
});

// 生成JavaScript文件内容
const fileContent = `// 食物数据库 - 独立文件，便于维护和扩展
const foodDatabase = ${JSON.stringify(foodDatabase, null, 4)};

// 导出数据库
if (typeof module !== "undefined" && module.exports) {
    module.exports = foodDatabase;
}`;

// 写入文件
fs.writeFileSync('food-data.js', fileContent, 'utf8');

console.log('✅ 已成功更新food-data.js文件');
console.log(`📊 总共添加了 ${Object.keys(foodDatabase).length} 个食物项目`);
console.log('🔄 请刷新页面查看更新后的食物生成器');
console.log('⚠️  注意：当前只包含了示例数据，需要添加完整的600个食物项目'); 