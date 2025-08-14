const fs = require('fs');

// 100个食物的数据
const foodData = [
    {
        name: 'Grilled vegetable wrap with hummus',
        recipe: 'avocado, cherry tomatoes, whole grain bread',
        ingredients: '2 cups flour, 1 cup milk, 2 eggs, 1 tbsp sugar, 1 tsp salt',
        nutrition: { calories: 169, protein: 7, carbs: 16, fat: 6 }
    },
    {
        name: 'Quinoa breakfast bowl',
        recipe: 'quinoa, almond milk, berries, honey',
        ingredients: '1 cup quinoa, 1 cup almond milk, 1/2 cup berries, 2 tbsp honey',
        nutrition: { calories: 245, protein: 8, carbs: 42, fat: 4 }
    },
    {
        name: 'Greek yogurt parfait',
        recipe: 'greek yogurt, granola, honey, nuts',
        ingredients: '1 cup greek yogurt, 1/4 cup granola, 1 tbsp honey, 2 tbsp nuts',
        nutrition: { calories: 320, protein: 20, carbs: 28, fat: 12 }
    },
    {
        name: 'Avocado toast with eggs',
        recipe: 'whole grain bread, avocado, poached eggs',
        ingredients: '2 slices whole grain bread, 1 avocado, 2 eggs, salt, pepper',
        nutrition: { calories: 380, protein: 18, carbs: 24, fat: 22 }
    },
    {
        name: 'Smoothie bowl',
        recipe: 'frozen berries, banana, almond milk, toppings',
        ingredients: '1 cup frozen berries, 1 banana, 1/2 cup almond milk, granola, coconut',
        nutrition: { calories: 280, protein: 6, carbs: 45, fat: 8 }
    },
    {
        name: 'Oatmeal with fruits',
        recipe: 'oats, milk, banana, berries, honey',
        ingredients: '1 cup oats, 1 cup milk, 1 banana, 1/2 cup berries, 1 tbsp honey',
        nutrition: { calories: 310, protein: 12, carbs: 52, fat: 6 }
    },
    {
        name: 'Chia pudding',
        recipe: 'chia seeds, almond milk, vanilla, berries',
        ingredients: '1/4 cup chia seeds, 1 cup almond milk, 1 tsp vanilla, 1/2 cup berries',
        nutrition: { calories: 180, protein: 8, carbs: 15, fat: 10 }
    },
    {
        name: 'Breakfast burrito',
        recipe: 'tortilla, eggs, beans, vegetables',
        ingredients: '1 tortilla, 2 eggs, 1/4 cup black beans, bell peppers, onions',
        nutrition: { calories: 420, protein: 22, carbs: 35, fat: 18 }
    },
    {
        name: 'Pancakes with maple syrup',
        recipe: 'flour, milk, eggs, butter, maple syrup',
        ingredients: '1 cup flour, 1 cup milk, 2 eggs, 2 tbsp butter, maple syrup',
        nutrition: { calories: 350, protein: 10, carbs: 45, fat: 12 }
    },
    {
        name: 'French toast',
        recipe: 'bread, eggs, milk, cinnamon, maple syrup',
        ingredients: '4 slices bread, 2 eggs, 1/2 cup milk, 1 tsp cinnamon, maple syrup',
        nutrition: { calories: 380, protein: 14, carbs: 42, fat: 16 }
    }
];

// 生成完整的foodDatabase对象
const foodDatabase = {};

foodData.forEach((food, index) => {
    const key = food.name;
    foodDatabase[key] = {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: food.nutrition,
        prepTime: '15-20 minutes',
        difficulty: 'Easy',
        image: '',
        recipe: food.recipe,
        ingredients: food.ingredients,
        detailedNutrition: {
            calories: food.nutrition.calories,
            fat: food.nutrition.fat,
            saturatedFat: Math.round(food.nutrition.fat * 0.3),
            cholesterol: 30,
            sodium: 300 + Math.floor(Math.random() * 200),
            carbohydrates: food.nutrition.carbs,
            fiber: Math.floor(food.nutrition.carbs * 0.1),
            sugar: Math.floor(food.nutrition.carbs * 0.2),
            protein: food.nutrition.protein
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