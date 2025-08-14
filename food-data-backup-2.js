// 食物数据库 - 独立文件，便于维护和扩展
const foodDatabase = {
    'Grilled Vegetable Avocado': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 6, carbs: 12, fat: 14 },
        prepTime: '15 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Lentil Curry Broccoli': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'indian',
        nutrition: { calories: 220, protein: 12, carbs: 35, fat: 4 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Arborio Rice': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'italian',
        nutrition: { calories: 280, protein: 8, carbs: 52, fat: 6 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Avocado with Lentils': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 240, protein: 10, carbs: 28, fat: 12 },
        prepTime: '15 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Quinoa Arborio Rice': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'fusion',
        nutrition: { calories: 260, protein: 14, carbs: 45, fat: 5 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Mushroom Arborio Rice': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'italian',
        nutrition: { calories: 220, protein: 9, carbs: 38, fat: 6 },
        prepTime: '18 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Caprese with Tomatoes': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'italian',
        nutrition: { calories: 160, protein: 8, carbs: 12, fat: 10 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Spinach with Sweet Potato': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 7, carbs: 32, fat: 6 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Sweet Potato Lentils': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'fusion',
        nutrition: { calories: 240, protein: 11, carbs: 40, fat: 4 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Oatmeal with Tomatoes': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 8, carbs: 28, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Grilled Zucchini Bowl': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 140, protein: 6, carbs: 18, fat: 7 },
        prepTime: '15 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Broccoli Quinoa Mix': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'fusion',
        nutrition: { calories: 200, protein: 12, carbs: 32, fat: 5 },
        prepTime: '18 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Avocado Spinach Toast': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 220, protein: 8, carbs: 25, fat: 12 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Lentil Mushroom Stew': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'fusion',
        nutrition: { calories: 260, protein: 15, carbs: 38, fat: 6 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Tomato Basil Rice': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'italian',
        nutrition: { calories: 240, protein: 7, carbs: 45, fat: 5 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Sweet Potato Quinoa': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'fusion',
        nutrition: { calories: 280, protein: 10, carbs: 48, fat: 6 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Broccoli Avocado Salad': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 160, protein: 6, carbs: 15, fat: 10 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Mushroom Spinach Omelette': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 14, carbs: 8, fat: 12 },
        prepTime: '15 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Lentil Tomato Curry': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'indian',
        nutrition: { calories: 240, protein: 13, carbs: 35, fat: 6 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Zucchini Quinoa Bowl': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'fusion',
        nutrition: { calories: 180, protein: 9, carbs: 28, fat: 5 },
        prepTime: '18 minutes',
        difficulty: 'Easy',
        image: ''
    }
};

// 导出数据库
if (typeof module !== "undefined" && module.exports) {
    module.exports = foodDatabase;
}
