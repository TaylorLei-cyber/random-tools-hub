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

// 用户提供的完整600个食物数据 - 从表格解析
const rawTableData = `Meal Type	Diet	Dish	Ingredients List	Recipe	Nutrition (per serving)
Breakfast	Vegetarian	French Congee Pumpkin With Berries	pumpkin, oats, kale, cabbage, spinach, thyme, lime juice, paprika, olive oil, garlic, onion	pumpkin, oats, kale, cabbage, spinach, thyme, lime juice, paprika, olive oil, garlic, onion	Calories: 231 kcal; Fat: 30g; Saturated Fat: 14g; Cholesterol: 25mg; Sodium: 689mg; Carbohydrates: 11g; Fiber: 12g; Sugar: 16g; Protein: 35g
Breakfast	Vegetarian	Vietnamese Oats Chickpeas With Berries	chickpeas, toast, kale, cabbage, broccoli, dill, lemon juice, paprika, olive oil, garlic, onion	chickpeas, toast, kale, cabbage, broccoli, dill, lemon juice, paprika, olive oil, garlic, onion	Calories: 580 kcal; Fat: 30g; Saturated Fat: 0g; Cholesterol: 47mg; Sodium: 531mg; Carbohydrates: 30g; Fiber: 13g; Sugar: 22g; Protein: 38g
Breakfast	Vegetarian	Oatmeal with Berries and Nuts	oats, mixed berries, almonds, honey, cinnamon, milk	Cook oats with milk, top with berries, nuts, honey and cinnamon	Calories: 320 kcal; Fat: 12g; Saturated Fat: 2g; Cholesterol: 5mg; Sodium: 150mg; Carbohydrates: 45g; Fiber: 8g; Sugar: 18g; Protein: 12g
Breakfast	Vegetarian	Greek Yogurt Parfait	Greek yogurt, granola, honey, fresh fruits, mint	Layer yogurt with granola and fruits, drizzle with honey	Calories: 280 kcal; Fat: 8g; Saturated Fat: 3g; Cholesterol: 15mg; Sodium: 120mg; Carbohydrates: 35g; Fiber: 4g; Sugar: 25g; Protein: 20g
Breakfast	Vegetarian	Avocado Toast	whole grain bread, avocado, cherry tomatoes, olive oil, salt, pepper	Toast bread, mash avocado, top with tomatoes and seasonings	Calories: 250 kcal; Fat: 15g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 400mg; Carbohydrates: 25g; Fiber: 8g; Sugar: 3g; Protein: 8g
Breakfast	Vegetarian	Smoothie Bowl	frozen berries, banana, almond milk, chia seeds, coconut flakes	Blend fruits with milk, top with seeds and coconut	Calories: 220 kcal; Fat: 6g; Saturated Fat: 1g; Cholesterol: 0mg; Sodium: 80mg; Carbohydrates: 35g; Fiber: 7g; Sugar: 22g; Protein: 6g
Breakfast	Non-vegetarian	Scrambled Eggs with Vegetables	eggs, bell peppers, spinach, onions, cheese, butter	Scramble eggs with sautéed vegetables and cheese	Calories: 280 kcal; Fat: 18g; Saturated Fat: 8g; Cholesterol: 380mg; Sodium: 450mg; Carbohydrates: 8g; Fiber: 2g; Sugar: 4g; Protein: 20g
Breakfast	Vegetarian	Pancakes with Maple Syrup	flour, milk, eggs, butter, sugar, vanilla, maple syrup	Mix ingredients, cook on griddle, serve with syrup	Calories: 350 kcal; Fat: 12g; Saturated Fat: 6g; Cholesterol: 80mg; Sodium: 300mg; Carbohydrates: 50g; Fiber: 2g; Sugar: 25g; Protein: 8g
Breakfast	Non-vegetarian	Breakfast Burrito	tortilla, eggs, beans, cheese, salsa, avocado	Scramble eggs, wrap with beans and toppings in tortilla	Calories: 420 kcal; Fat: 22g; Saturated Fat: 8g; Cholesterol: 220mg; Sodium: 800mg; Carbohydrates: 35g; Fiber: 6g; Sugar: 3g; Protein: 18g
Breakfast	Vegetarian	French Toast	bread, eggs, milk, cinnamon, vanilla, butter, maple syrup	Dip bread in egg mixture, cook until golden, serve with syrup	Calories: 380 kcal; Fat: 16g; Saturated Fat: 8g; Cholesterol: 120mg; Sodium: 350mg; Carbohydrates: 45g; Fiber: 2g; Sugar: 20g; Protein: 12g
Breakfast	Non-vegetarian	Breakfast Sandwich	English muffin, egg, cheese, ham, butter	Cook egg, assemble sandwich with cheese and ham	Calories: 320 kcal; Fat: 18g; Saturated Fat: 8g; Cholesterol: 220mg; Sodium: 750mg; Carbohydrates: 25g; Fiber: 2g; Sugar: 2g; Protein: 16g
Lunch	Non-vegetarian	Chicken Caesar Salad	romaine lettuce, grilled chicken, parmesan cheese, croutons, caesar dressing	Grill chicken, assemble salad with lettuce, cheese, croutons and dressing	Calories: 380 kcal; Fat: 22g; Saturated Fat: 6g; Cholesterol: 85mg; Sodium: 850mg; Carbohydrates: 15g; Fiber: 4g; Sugar: 3g; Protein: 32g
Lunch	Vegetarian	Quinoa Buddha Bowl	quinoa, roasted vegetables, chickpeas, avocado, tahini dressing	Cook quinoa, roast vegetables, assemble bowl with toppings and dressing	Calories: 420 kcal; Fat: 18g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 450mg; Carbohydrates: 55g; Fiber: 12g; Sugar: 8g; Protein: 16g
Lunch	Non-vegetarian	Grilled Salmon with Vegetables	salmon fillet, asparagus, cherry tomatoes, lemon, olive oil, herbs	Grill salmon and vegetables, season with lemon and herbs	Calories: 450 kcal; Fat: 28g; Saturated Fat: 5g; Cholesterol: 85mg; Sodium: 380mg; Carbohydrates: 12g; Fiber: 6g; Sugar: 5g; Protein: 38g
Lunch	Vegetarian	Mediterranean Wrap	whole wheat tortilla, hummus, cucumber, tomatoes, olives, feta cheese	Spread hummus on tortilla, add vegetables and cheese, roll up	Calories: 320 kcal; Fat: 14g; Saturated Fat: 4g; Cholesterol: 15mg; Sodium: 680mg; Carbohydrates: 38g; Fiber: 8g; Sugar: 4g; Protein: 12g
Lunch	Non-vegetarian	Beef Stir Fry	beef strips, broccoli, bell peppers, soy sauce, garlic, ginger	Stir fry beef and vegetables with soy sauce and seasonings	Calories: 380 kcal; Fat: 16g; Saturated Fat: 6g; Cholesterol: 75mg; Sodium: 720mg; Carbohydrates: 18g; Fiber: 6g; Sugar: 8g; Protein: 35g
Lunch	Vegetarian	Vegetable Soup	carrots, celery, onions, tomatoes, vegetable broth, herbs	Saut vegetables, add broth and herbs, simmer until tender	Calories: 120 kcal; Fat: 4g; Saturated Fat: 1g; Cholesterol: 0mg; Sodium: 680mg; Carbohydrates: 18g; Fiber: 6g; Sugar: 8g; Protein: 4g
Lunch	Non-vegetarian	Turkey Sandwich	whole grain bread, turkey, lettuce, tomato, mustard, mayo	Layer turkey and vegetables between bread slices with condiments	Calories: 320 kcal; Fat: 12g; Saturated Fat: 3g; Cholesterol: 45mg; Sodium: 850mg; Carbohydrates: 35g; Fiber: 6g; Sugar: 4g; Protein: 22g
Lunch	Vegetarian	Pasta Primavera	whole wheat pasta, seasonal vegetables, olive oil, parmesan cheese	Cook pasta, saut vegetables, combine with olive oil and cheese	Calories: 380 kcal; Fat: 14g; Saturated Fat: 3g; Cholesterol: 8mg; Sodium: 420mg; Carbohydrates: 52g; Fiber: 8g; Sugar: 6g; Protein: 14g
Lunch	Non-vegetarian	Tuna Salad	canned tuna, celery, onion, mayo, mustard, lemon juice	Mix tuna with chopped vegetables and dressing ingredients	Calories: 280 kcal; Fat: 18g; Saturated Fat: 3g; Cholesterol: 45mg; Sodium: 680mg; Carbohydrates: 8g; Fiber: 2g; Sugar: 3g; Protein: 24g
Lunch	Vegetarian	Falafel Wrap	chickpeas, herbs, spices, pita bread, tahini sauce, vegetables	Make falafel from chickpeas, wrap in pita with sauce and vegetables	Calories: 420 kcal; Fat: 16g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 580mg; Carbohydrates: 58g; Fiber: 12g; Sugar: 6g; Protein: 16g
Dinner	Non-vegetarian	Grilled Chicken Breast	chicken breast, olive oil, herbs, lemon, garlic, salt, pepper	Marinate chicken with herbs and lemon, grill until cooked through	Calories: 280 kcal; Fat: 12g; Saturated Fat: 3g; Cholesterol: 85mg; Sodium: 380mg; Carbohydrates: 2g; Fiber: 0g; Sugar: 1g; Protein: 42g
Dinner	Vegetarian	Vegetable Curry	mixed vegetables, coconut milk, curry spices, rice, naan bread	Cook vegetables in coconut milk with spices, serve with rice and naan	Calories: 380 kcal; Fat: 18g; Saturated Fat: 12g; Cholesterol: 0mg; Sodium: 450mg; Carbohydrates: 45g; Fiber: 8g; Sugar: 6g; Protein: 8g
Dinner	Non-vegetarian	Baked Salmon	salmon fillet, lemon, herbs, olive oil, garlic, asparagus	Bake salmon with lemon and herbs, serve with roasted asparagus	Calories: 420 kcal; Fat: 28g; Saturated Fat: 5g; Cholesterol: 85mg; Sodium: 380mg; Carbohydrates: 8g; Fiber: 4g; Sugar: 2g; Protein: 38g
Dinner	Vegetarian	Mushroom Risotto	arborio rice, mushrooms, vegetable broth, parmesan cheese, white wine	Cook rice with broth and wine, add mushrooms and cheese	Calories: 380 kcal; Fat: 14g; Saturated Fat: 6g; Cholesterol: 15mg; Sodium: 680mg; Carbohydrates: 52g; Fiber: 4g; Sugar: 3g; Protein: 12g
Dinner	Non-vegetarian	Beef Tacos	ground beef, tortillas, lettuce, tomatoes, cheese, salsa, sour cream	Cook beef with spices, assemble tacos with toppings	Calories: 450 kcal; Fat: 22g; Saturated Fat: 8g; Cholesterol: 75mg; Sodium: 850mg; Carbohydrates: 35g; Fiber: 6g; Sugar: 4g; Protein: 28g
Dinner	Vegetarian	Lentil Soup	red lentils, carrots, onions, garlic, vegetable broth, spices	Cook lentils with vegetables and broth, season with spices	Calories: 220 kcal; Fat: 4g; Saturated Fat: 1g; Cholesterol: 0mg; Sodium: 580mg; Carbohydrates: 35g; Fiber: 12g; Sugar: 4g; Protein: 16g
Dinner	Non-vegetarian	Pork Chops	pork chops, apples, onions, herbs, butter, apple cider	Sear pork chops, cook with apples and onions in cider	Calories: 380 kcal; Fat: 18g; Saturated Fat: 8g; Cholesterol: 95mg; Sodium: 450mg; Carbohydrates: 12g; Fiber: 2g; Sugar: 8g; Protein: 35g
Dinner	Vegetarian	Stuffed Bell Peppers	bell peppers, quinoa, black beans, corn, cheese, spices	Stuff peppers with quinoa mixture, bake until tender	Calories: 280 kcal; Fat: 8g; Saturated Fat: 3g; Cholesterol: 8mg; Sodium: 420mg; Carbohydrates: 42g; Fiber: 8g; Sugar: 6g; Protein: 12g
Dinner	Non-vegetarian	Shrimp Scampi	shrimp, linguine, garlic, butter, white wine, lemon, parsley	Cook shrimp with garlic and wine, toss with pasta	Calories: 420 kcal; Fat: 18g; Saturated Fat: 8g; Cholesterol: 180mg; Sodium: 680mg; Carbohydrates: 35g; Fiber: 2g; Sugar: 2g; Protein: 28g
Dinner	Vegetarian	Ratatouille	eggplant, zucchini, tomatoes, bell peppers, onions, herbs, olive oil	Layer vegetables with herbs and oil, bake until tender	Calories: 180 kcal; Fat: 12g; Saturated Fat: 2g; Cholesterol: 0mg; Sodium: 380mg; Carbohydrates: 18g; Fiber: 8g; Sugar: 8g; Protein: 4g
Dessert	Vegetarian	Chocolate Chip Cookies	flour, butter, sugar, eggs, chocolate chips, vanilla, baking soda	Cream butter and sugar, add eggs and flour, fold in chocolate chips, bake	Calories: 150 kcal; Fat: 8g; Saturated Fat: 5g; Cholesterol: 25mg; Sodium: 120mg; Carbohydrates: 18g; Fiber: 1g; Sugar: 12g; Protein: 2g
Dessert	Vegetarian	Apple Pie	pie crust, apples, sugar, cinnamon, butter, flour	Make pie crust, fill with spiced apples, bake until golden	Calories: 320 kcal; Fat: 14g; Saturated Fat: 6g; Cholesterol: 25mg; Sodium: 280mg; Carbohydrates: 45g; Fiber: 3g; Sugar: 25g; Protein: 4g
Dessert	Vegetarian	Tiramisu	ladyfingers, mascarpone cheese, eggs, sugar, coffee, cocoa powder	Layer coffee-dipped ladyfingers with mascarpone mixture, dust with cocoa	Calories: 280 kcal; Fat: 18g; Saturated Fat: 10g; Cholesterol: 120mg; Sodium: 80mg; Carbohydrates: 22g; Fiber: 1g; Sugar: 18g; Protein: 6g
Dessert	Vegetarian	Cheesecake	graham crackers, cream cheese, sugar, eggs, vanilla, sour cream	Make crust, mix filling, bake in water bath until set	Calories: 350 kcal; Fat: 22g; Saturated Fat: 12g; Cholesterol: 95mg; Sodium: 280mg; Carbohydrates: 28g; Fiber: 1g; Sugar: 22g; Protein: 6g
Dessert	Vegetarian	Ice Cream Sundae	vanilla ice cream, chocolate sauce, whipped cream, nuts, cherry	Scoop ice cream, top with sauce, cream, nuts and cherry	Calories: 380 kcal; Fat: 22g; Saturated Fat: 12g; Cholesterol: 45mg; Sodium: 120mg; Carbohydrates: 38g; Fiber: 2g; Sugar: 32g; Protein: 6g
Dessert	Vegetarian	Brownies	chocolate, butter, sugar, eggs, flour, cocoa powder, vanilla	Melt chocolate with butter, mix with other ingredients, bake	Calories: 220 kcal; Fat: 12g; Saturated Fat: 6g; Cholesterol: 45mg; Sodium: 120mg; Carbohydrates: 28g; Fiber: 2g; Sugar: 20g; Protein: 4g
Dessert	Vegetarian	Fruit Salad	mixed fresh fruits, honey, mint, lime juice	Chop fruits, drizzle with honey and lime juice, garnish with mint	Calories: 120 kcal; Fat: 0g; Saturated Fat: 0g; Cholesterol: 0mg; Sodium: 5mg; Carbohydrates: 28g; Fiber: 4g; Sugar: 22g; Protein: 2g
Dessert	Vegetarian	Panna Cotta	heavy cream, sugar, gelatin, vanilla, berries	Heat cream with sugar and gelatin, chill until set, serve with berries	Calories: 280 kcal; Fat: 22g; Saturated Fat: 14g; Cholesterol: 80mg; Sodium: 40mg; Carbohydrates: 18g; Fiber: 1g; Sugar: 16g; Protein: 4g
Dessert	Vegetarian	Chocolate Mousse	dark chocolate, heavy cream, eggs, sugar, vanilla	Melt chocolate, fold in whipped cream and egg yolks, chill	Calories: 320 kcal; Fat: 28g; Saturated Fat: 16g; Cholesterol: 120mg; Sodium: 40mg; Carbohydrates: 18g; Fiber: 2g; Sugar: 14g; Protein: 6g`;

// 解析表格数据
const parseTableData = (tableData) => {
    const lines = tableData.trim().split('\n');
    const headers = lines[0].split('\t');
    const foodData = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('\t');
        if (values.length >= 6) {
            foodData.push({
                mealType: values[0].toLowerCase(),
                diet: values[1].toLowerCase() === 'vegetarian' ? 'vegetarian' : 'non-vegetarian',
                name: values[2],
                ingredients: values[3],
                recipe: values[4],
                nutrition: values[5]
            });
        }
    }
    
    return foodData;
};

// 解析表格数据
const foodData = parseTableData(rawTableData);

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
console.log('⚠️  注意：当前只包含了表格中的示例数据，需要添加完整的600个食物项目'); 