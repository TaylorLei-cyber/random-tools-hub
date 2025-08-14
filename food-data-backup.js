// 食物数据库 - 独立文件，便于维护和扩展
const foodDatabase = {
    // 早餐素食选择
    'Oatmeal with Berries': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 250, protein: 8, carbs: 45, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Greek Yogurt Parfait': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 220, protein: 15, carbs: 25, fat: 8 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Avocado Toast': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 280, protein: 10, carbs: 30, fat: 15 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Smoothie Bowl': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 6, carbs: 35, fat: 4 },
        prepTime: '15 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chia Pudding': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 8, carbs: 20, fat: 10 },
        prepTime: '5 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Fruit Salad': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 2, carbs: 25, fat: 1 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Granola with Milk': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 300, protein: 10, carbs: 45, fat: 12 },
        prepTime: '3 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pancakes with Maple Syrup': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 350, protein: 8, carbs: 55, fat: 12 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'French Toast': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 320, protein: 12, carbs: 40, fat: 14 },
        prepTime: '15 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Waffles': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 380, protein: 10, carbs: 50, fat: 16 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Bagel with Cream Cheese': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 320, protein: 12, carbs: 45, fat: 10 },
        prepTime: '5 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Muesli': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 280, protein: 8, carbs: 40, fat: 8 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Quinoa Breakfast Bowl': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 250, protein: 12, carbs: 35, fat: 6 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Tofu Scramble': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 15, carbs: 8, fat: 12 },
        prepTime: '15 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Burrito (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'mexican',
        nutrition: { calories: 350, protein: 18, carbs: 40, fat: 14 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Sandwich (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 300, protein: 14, carbs: 35, fat: 12 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Wrap (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 280, protein: 12, carbs: 30, fat: 10 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Bowl (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 320, protein: 16, carbs: 35, fat: 12 },
        prepTime: '18 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Tacos (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'mexican',
        nutrition: { calories: 250, protein: 10, carbs: 30, fat: 8 },
        prepTime: '15 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Pizza (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'italian',
        nutrition: { calories: 400, protein: 18, carbs: 45, fat: 16 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Casserole (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 350, protein: 20, carbs: 25, fat: 18 },
        prepTime: '45 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Muffins (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 280, protein: 8, carbs: 40, fat: 10 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Cookies (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 6, carbs: 30, fat: 8 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Bars (Veg)': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 220, protein: 8, carbs: 35, fat: 6 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Smoothie': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 6, carbs: 30, fat: 4 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Juice': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 2, carbs: 25, fat: 1 },
        prepTime: '5 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Tea': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
        prepTime: '3 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
        prepTime: '5 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Hot Chocolate': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 150, protein: 4, carbs: 25, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Latte': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 6, carbs: 12, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Cappuccino': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 80, protein: 4, carbs: 8, fat: 4 },
        prepTime: '6 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Espresso': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
        prepTime: '3 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Americano': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
        prepTime: '4 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Mocha': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 6, carbs: 30, fat: 8 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Macchiato': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 40, protein: 2, carbs: 4, fat: 2 },
        prepTime: '5 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Flat White': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 100, protein: 5, carbs: 10, fat: 5 },
        prepTime: '7 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Cortado': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 60, protein: 3, carbs: 6, fat: 3 },
        prepTime: '5 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Piccolo': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 30, protein: 2, carbs: 3, fat: 1 },
        prepTime: '4 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Ristretto': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 3, protein: 0, carbs: 0, fat: 0 },
        prepTime: '2 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Lungo': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 8, protein: 0, carbs: 2, fat: 0 },
        prepTime: '4 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Doppio': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 10, protein: 0, carbs: 2, fat: 0 },
        prepTime: '3 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Affogato': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 150, protein: 4, carbs: 20, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Con Panna': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 8, fat: 10 },
        prepTime: '6 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Breve': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 6, carbs: 10, fat: 14 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Vienna': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 140, protein: 4, carbs: 15, fat: 7 },
        prepTime: '7 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Irish Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 4, carbs: 20, fat: 8 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Turkish Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 15, protein: 0, carbs: 3, fat: 0 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Greek Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 12, protein: 0, carbs: 2, fat: 0 },
        prepTime: '7 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Vietnamese Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 4, carbs: 25, fat: 8 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Thai Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 160, protein: 3, carbs: 22, fat: 7 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Indian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 140, protein: 3, carbs: 18, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Mexican Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 150, protein: 3, carbs: 20, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Brazilian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 130, protein: 3, carbs: 17, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Colombian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 125, protein: 3, carbs: 16, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Ethiopian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kenyan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Guatemalan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 122, protein: 3, carbs: 16, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Costa Rican Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Nicaraguan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 121, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Honduran Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Salvadoran Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Panamanian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Peruvian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Bolivian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Ecuadorian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 121, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Venezuelan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Guyanese Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Surinamese Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast French Guianan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Uruguayan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Paraguayan Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Argentine Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Chilean Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Falkland Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast South Georgian Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast South Sandwich Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Bouvet Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Heard Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast McDonald Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Crozet Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Marion Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Saint Paul Coffee': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee 2': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Crozet Coffee 2': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee 2': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Marion Coffee 2': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee 2': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Saint Paul Coffee 2': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee 3': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Crozet Coffee 3': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee 3': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Marion Coffee 3': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee 3': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Saint Paul Coffee 3': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee 4': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Crozet Coffee 4': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee 4': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Marion Coffee 4': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 119, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee 4': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Saint Paul Coffee 4': {
        mealType: 'breakfast',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 118, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },

    // 保留原有的Steamed Buns
    'Scrambled Eggs with Bacon': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 120, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Eggs Benedict': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 121, protein: 4, carbs: 16, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Sausage': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 122, protein: 5, carbs: 17, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Ham and Cheese Omelette': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 123, protein: 6, carbs: 15, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Bacon and Eggs': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 124, protein: 7, carbs: 16, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Burrito with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 125, protein: 3, carbs: 17, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Sandwich with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 126, protein: 4, carbs: 15, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Wrap with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 127, protein: 5, carbs: 16, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Bowl with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 128, protein: 6, carbs: 17, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Tacos with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 129, protein: 7, carbs: 15, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Pizza with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 130, protein: 3, carbs: 16, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Casserole with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 131, protein: 4, carbs: 17, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Muffins with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 132, protein: 5, carbs: 15, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Cookies with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 133, protein: 6, carbs: 16, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Bars with Meat': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 134, protein: 7, carbs: 17, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Smoothie with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 135, protein: 3, carbs: 15, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Juice with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 136, protein: 4, carbs: 16, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Tea with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 137, protein: 5, carbs: 17, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 138, protein: 6, carbs: 15, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Hot Chocolate with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 139, protein: 7, carbs: 16, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Latte with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 140, protein: 3, carbs: 17, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Cappuccino with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 141, protein: 4, carbs: 15, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Espresso with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 142, protein: 5, carbs: 16, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Americano with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 143, protein: 6, carbs: 17, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Mocha with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 144, protein: 7, carbs: 15, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Macchiato with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 145, protein: 3, carbs: 16, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Flat White with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 146, protein: 4, carbs: 17, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Cortado with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 147, protein: 5, carbs: 15, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Piccolo with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 148, protein: 6, carbs: 16, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Ristretto with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 149, protein: 7, carbs: 17, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Lungo with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 150, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Doppio with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 151, protein: 4, carbs: 16, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Affogato with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 152, protein: 5, carbs: 17, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Con Panna with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 153, protein: 6, carbs: 15, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Breve with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 154, protein: 7, carbs: 16, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Vienna with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 155, protein: 3, carbs: 17, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Irish Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 156, protein: 4, carbs: 15, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Turkish Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 157, protein: 5, carbs: 16, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Greek Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 158, protein: 6, carbs: 17, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Vietnamese Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 159, protein: 7, carbs: 15, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Thai Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 160, protein: 3, carbs: 16, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Indian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 161, protein: 4, carbs: 17, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Mexican Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 162, protein: 5, carbs: 15, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Brazilian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 163, protein: 6, carbs: 16, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Colombian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 164, protein: 7, carbs: 17, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Ethiopian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 165, protein: 3, carbs: 15, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kenyan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 166, protein: 4, carbs: 16, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Guatemalan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 167, protein: 5, carbs: 17, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Costa Rican Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 168, protein: 6, carbs: 15, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Nicaraguan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 169, protein: 7, carbs: 16, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Honduran Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 170, protein: 3, carbs: 17, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Salvadoran Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 171, protein: 4, carbs: 15, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Panamanian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 172, protein: 5, carbs: 16, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Peruvian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 173, protein: 6, carbs: 17, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Bolivian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 174, protein: 7, carbs: 15, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Ecuadorian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 175, protein: 3, carbs: 16, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Venezuelan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 176, protein: 4, carbs: 17, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Guyanese Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 177, protein: 5, carbs: 15, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Surinamese Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 178, protein: 6, carbs: 16, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast French Guianan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 179, protein: 7, carbs: 17, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Uruguayan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 180, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Paraguayan Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 181, protein: 4, carbs: 16, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Argentine Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 182, protein: 5, carbs: 17, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Chilean Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 183, protein: 6, carbs: 15, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Falkland Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 184, protein: 7, carbs: 16, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast South Georgian Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 185, protein: 3, carbs: 17, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast South Sandwich Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 186, protein: 4, carbs: 15, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Bouvet Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 187, protein: 5, carbs: 16, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Heard Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 188, protein: 6, carbs: 17, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast McDonald Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 189, protein: 7, carbs: 15, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 190, protein: 3, carbs: 16, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Crozet Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 191, protein: 4, carbs: 17, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 192, protein: 5, carbs: 15, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Marion Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 193, protein: 6, carbs: 16, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 194, protein: 7, carbs: 17, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Saint Paul Coffee with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 195, protein: 3, carbs: 15, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee 2 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 196, protein: 4, carbs: 16, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Crozet Coffee 2 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 197, protein: 5, carbs: 17, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee 2 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 198, protein: 6, carbs: 15, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Marion Coffee 2 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 199, protein: 7, carbs: 16, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee 2 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 200, protein: 3, carbs: 17, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Saint Paul Coffee 2 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 201, protein: 4, carbs: 15, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee 3 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 202, protein: 5, carbs: 16, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Crozet Coffee 3 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 203, protein: 6, carbs: 17, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee 3 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 204, protein: 7, carbs: 15, fat: 5 },
        prepTime: '12 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Marion Coffee 3 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 205, protein: 3, carbs: 16, fat: 6 },
        prepTime: '8 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee 3 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 206, protein: 4, carbs: 17, fat: 5 },
        prepTime: '9 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Saint Paul Coffee 3 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 207, protein: 5, carbs: 15, fat: 6 },
        prepTime: '10 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Kerguelen Coffee 4 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 208, protein: 6, carbs: 16, fat: 5 },
        prepTime: '11 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Crozet Coffee 4 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 209, protein: 7, carbs: 17, fat: 6 },
        prepTime: '12 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Prince Edward Coffee 4 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 210, protein: 3, carbs: 15, fat: 5 },
        prepTime: '8 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Marion Coffee 4 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 211, protein: 4, carbs: 16, fat: 6 },
        prepTime: '9 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Breakfast Amsterdam Coffee 4 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 212, protein: 5, carbs: 17, fat: 5 },
        prepTime: '10 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Breakfast Saint Paul Coffee 4 with Protein': {
        mealType: 'breakfast',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 213, protein: 6, carbs: 15, fat: 6 },
        prepTime: '11 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetarian Salad': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 300, protein: 15, carbs: 40, fat: 12 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Soup': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 310, protein: 16, carbs: 41, fat: 13 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pasta Primavera': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 320, protein: 17, carbs: 42, fat: 14 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Quinoa Bowl': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 330, protein: 18, carbs: 43, fat: 15 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Falafel Wrap': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 340, protein: 19, carbs: 44, fat: 16 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Hummus Plate': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 350, protein: 20, carbs: 45, fat: 17 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Curry': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 360, protein: 21, carbs: 46, fat: 18 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Stir-Fried Vegetables': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 370, protein: 22, carbs: 47, fat: 19 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Sandwich': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 380, protein: 23, carbs: 48, fat: 12 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Bean Burrito': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 390, protein: 24, carbs: 49, fat: 13 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pizza': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 400, protein: 15, carbs: 50, fat: 14 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Lasagna': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 410, protein: 16, carbs: 51, fat: 15 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Stir Fry': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 420, protein: 17, carbs: 52, fat: 16 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Noodles': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 430, protein: 18, carbs: 53, fat: 17 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Rice': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 440, protein: 19, carbs: 54, fat: 18 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Tacos': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 450, protein: 20, carbs: 40, fat: 19 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Quesadilla': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 460, protein: 21, carbs: 41, fat: 12 },
        prepTime: '21 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Enchiladas': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 470, protein: 22, carbs: 42, fat: 13 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Fajitas': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 480, protein: 23, carbs: 43, fat: 14 },
        prepTime: '23 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Nachos': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 490, protein: 24, carbs: 44, fat: 15 },
        prepTime: '24 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Sushi': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 500, protein: 15, carbs: 45, fat: 16 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Tempura': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 510, protein: 16, carbs: 46, fat: 17 },
        prepTime: '26 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Dumplings': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 520, protein: 17, carbs: 47, fat: 18 },
        prepTime: '27 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Spring Rolls': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 530, protein: 18, carbs: 48, fat: 19 },
        prepTime: '28 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pad Thai': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 540, protein: 19, carbs: 49, fat: 12 },
        prepTime: '29 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Fried Rice': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 550, protein: 20, carbs: 50, fat: 13 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lo Mein': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 560, protein: 21, carbs: 51, fat: 14 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Chow Mein': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 570, protein: 22, carbs: 52, fat: 15 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Kung Pao': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 580, protein: 23, carbs: 53, fat: 16 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Mapo Tofu': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 590, protein: 24, carbs: 54, fat: 17 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Sweet and Sour': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 600, protein: 15, carbs: 40, fat: 18 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable General Tso': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 610, protein: 16, carbs: 41, fat: 19 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Orange Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 620, protein: 17, carbs: 42, fat: 12 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Lemon Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 630, protein: 18, carbs: 43, fat: 13 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Honey Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 640, protein: 19, carbs: 44, fat: 14 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sesame Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 650, protein: 20, carbs: 45, fat: 15 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Cashew Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 660, protein: 21, carbs: 46, fat: 16 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Almond Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 670, protein: 22, carbs: 47, fat: 17 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Walnut Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 680, protein: 23, carbs: 48, fat: 18 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Pecan Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 690, protein: 24, carbs: 49, fat: 19 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Macadamia Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 700, protein: 15, carbs: 50, fat: 12 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Pistachio Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 710, protein: 16, carbs: 51, fat: 13 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Hazelnut Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 720, protein: 17, carbs: 52, fat: 14 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Brazil Nut Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 730, protein: 18, carbs: 53, fat: 15 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pine Nut Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 740, protein: 19, carbs: 54, fat: 16 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sunflower Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 750, protein: 20, carbs: 40, fat: 17 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pumpkin Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 760, protein: 21, carbs: 41, fat: 18 },
        prepTime: '21 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Chia Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 770, protein: 22, carbs: 42, fat: 19 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Flax Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 780, protein: 23, carbs: 43, fat: 12 },
        prepTime: '23 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Hemp Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 790, protein: 24, carbs: 44, fat: 13 },
        prepTime: '24 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Poppy Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 800, protein: 15, carbs: 45, fat: 14 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sesame Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 810, protein: 16, carbs: 46, fat: 15 },
        prepTime: '26 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Mustard Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 820, protein: 17, carbs: 47, fat: 16 },
        prepTime: '27 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Cumin Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 830, protein: 18, carbs: 48, fat: 17 },
        prepTime: '28 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Coriander Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 840, protein: 19, carbs: 49, fat: 18 },
        prepTime: '29 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Fennel Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 850, protein: 20, carbs: 50, fat: 19 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Caraway Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 860, protein: 21, carbs: 51, fat: 12 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Dill Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 870, protein: 22, carbs: 52, fat: 13 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Celery Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 880, protein: 23, carbs: 53, fat: 14 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Lovage Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 890, protein: 24, carbs: 54, fat: 15 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Parsley Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 900, protein: 15, carbs: 40, fat: 16 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Basil Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 910, protein: 16, carbs: 41, fat: 17 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Oregano Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 920, protein: 17, carbs: 42, fat: 18 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Thyme Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 930, protein: 18, carbs: 43, fat: 19 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Rosemary Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 940, protein: 19, carbs: 44, fat: 12 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sage Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 950, protein: 20, carbs: 45, fat: 13 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Marjoram Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 960, protein: 21, carbs: 46, fat: 14 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Tarragon Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 970, protein: 22, carbs: 47, fat: 15 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Bay Leaf Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 980, protein: 23, carbs: 48, fat: 16 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Mint Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 990, protein: 24, carbs: 49, fat: 17 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lemon Balm Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1000, protein: 15, carbs: 50, fat: 18 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Catnip Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1010, protein: 16, carbs: 51, fat: 19 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Horehound Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1020, protein: 17, carbs: 52, fat: 12 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Hyssop Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1030, protein: 18, carbs: 53, fat: 13 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lavender Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1040, protein: 19, carbs: 54, fat: 14 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Chamomile Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1050, protein: 20, carbs: 40, fat: 15 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Calendula Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1060, protein: 21, carbs: 41, fat: 16 },
        prepTime: '21 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Echinacea Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1070, protein: 22, carbs: 42, fat: 17 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Ginseng Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1080, protein: 23, carbs: 43, fat: 18 },
        prepTime: '23 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Licorice Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1090, protein: 24, carbs: 44, fat: 19 },
        prepTime: '24 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Marshmallow Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1100, protein: 15, carbs: 45, fat: 12 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Slippery Elm Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1110, protein: 16, carbs: 46, fat: 13 },
        prepTime: '26 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Comfrey Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1120, protein: 17, carbs: 47, fat: 14 },
        prepTime: '27 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Plantain Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1130, protein: 18, carbs: 48, fat: 15 },
        prepTime: '28 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Dandelion Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1140, protein: 19, carbs: 49, fat: 16 },
        prepTime: '29 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Burdock Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1150, protein: 20, carbs: 50, fat: 17 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Yellow Dock Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1160, protein: 21, carbs: 51, fat: 18 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Red Clover Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1170, protein: 22, carbs: 52, fat: 19 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Alfalfa Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1180, protein: 23, carbs: 53, fat: 12 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Nettle Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1190, protein: 24, carbs: 54, fat: 13 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Chickweed Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1200, protein: 15, carbs: 40, fat: 14 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Purslane Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1210, protein: 16, carbs: 41, fat: 15 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lambsquarters Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1220, protein: 17, carbs: 42, fat: 16 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Amaranth Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1230, protein: 18, carbs: 43, fat: 17 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Quinoa Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1240, protein: 19, carbs: 44, fat: 18 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Buckwheat Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1250, protein: 20, carbs: 45, fat: 19 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Millet Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1260, protein: 21, carbs: 46, fat: 12 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sorghum Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1270, protein: 22, carbs: 47, fat: 13 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Teff Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1280, protein: 23, carbs: 48, fat: 14 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Amaranth Chicken': {
        mealType: 'lunch',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1290, protein: 24, carbs: 49, fat: 15 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Salad': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 300, protein: 25, carbs: 40, fat: 12 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Soup': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 310, protein: 26, carbs: 41, fat: 13 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Pasta': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 320, protein: 27, carbs: 42, fat: 14 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Fish Bowl': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 330, protein: 28, carbs: 43, fat: 15 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Meat Wrap': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 340, protein: 29, carbs: 44, fat: 16 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Plate': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 350, protein: 30, carbs: 45, fat: 17 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Curry': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 360, protein: 31, carbs: 46, fat: 18 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Stir Fry': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 370, protein: 32, carbs: 47, fat: 19 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Meat Sandwich': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 380, protein: 33, carbs: 48, fat: 12 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Burrito': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 390, protein: 34, carbs: 49, fat: 13 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pepperoni Pizza': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 400, protein: 25, carbs: 50, fat: 14 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Lasagna': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 410, protein: 26, carbs: 51, fat: 15 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Stir Fry': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 420, protein: 27, carbs: 52, fat: 16 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Noodles': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 430, protein: 28, carbs: 53, fat: 17 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Rice': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 440, protein: 29, carbs: 54, fat: 18 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Tacos': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 450, protein: 30, carbs: 40, fat: 19 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Quesadilla': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 460, protein: 31, carbs: 41, fat: 12 },
        prepTime: '21 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Enchiladas': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 470, protein: 32, carbs: 42, fat: 13 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Fajitas': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 480, protein: 33, carbs: 43, fat: 14 },
        prepTime: '23 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Nachos': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 490, protein: 34, carbs: 44, fat: 15 },
        prepTime: '24 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Salmon Sushi': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 500, protein: 25, carbs: 45, fat: 16 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Shrimp Tempura': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 510, protein: 26, carbs: 46, fat: 17 },
        prepTime: '26 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Dumplings': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 520, protein: 27, carbs: 47, fat: 18 },
        prepTime: '27 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Spring Rolls': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 530, protein: 28, carbs: 48, fat: 19 },
        prepTime: '28 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Pad Thai': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 540, protein: 29, carbs: 49, fat: 12 },
        prepTime: '29 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Fried Rice': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 550, protein: 30, carbs: 50, fat: 13 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Lo Mein': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 560, protein: 31, carbs: 51, fat: 14 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Chow Mein': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 570, protein: 32, carbs: 52, fat: 15 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Kung Pao': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 580, protein: 33, carbs: 53, fat: 16 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Mapo Tofu': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 590, protein: 34, carbs: 54, fat: 17 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Sweet and Sour': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 600, protein: 25, carbs: 40, fat: 18 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken General Tso': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 610, protein: 26, carbs: 41, fat: 19 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Orange Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 620, protein: 27, carbs: 42, fat: 12 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Lemon Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 630, protein: 28, carbs: 43, fat: 13 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Honey Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 640, protein: 29, carbs: 44, fat: 14 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Sesame Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 650, protein: 30, carbs: 45, fat: 15 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Cashew Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 660, protein: 31, carbs: 46, fat: 16 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Almond Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 670, protein: 32, carbs: 47, fat: 17 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Walnut Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 680, protein: 33, carbs: 48, fat: 18 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Pecan Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 690, protein: 34, carbs: 49, fat: 19 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Macadamia Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 700, protein: 25, carbs: 50, fat: 12 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Pistachio Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 710, protein: 26, carbs: 51, fat: 13 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Hazelnut Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 720, protein: 27, carbs: 52, fat: 14 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Brazil Nut Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 730, protein: 28, carbs: 53, fat: 15 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Pine Nut Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 740, protein: 29, carbs: 54, fat: 16 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Sunflower Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 750, protein: 30, carbs: 40, fat: 17 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Pumpkin Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 760, protein: 31, carbs: 41, fat: 18 },
        prepTime: '21 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Chia Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 770, protein: 32, carbs: 42, fat: 19 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Flax Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 780, protein: 33, carbs: 43, fat: 12 },
        prepTime: '23 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Hemp Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 790, protein: 34, carbs: 44, fat: 13 },
        prepTime: '24 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Poppy Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 800, protein: 25, carbs: 45, fat: 14 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Sesame Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 810, protein: 26, carbs: 46, fat: 15 },
        prepTime: '26 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Mustard Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 820, protein: 27, carbs: 47, fat: 16 },
        prepTime: '27 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Cumin Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 830, protein: 28, carbs: 48, fat: 17 },
        prepTime: '28 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Coriander Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 840, protein: 29, carbs: 49, fat: 18 },
        prepTime: '29 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Fennel Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 850, protein: 30, carbs: 50, fat: 19 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Caraway Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 860, protein: 31, carbs: 51, fat: 12 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Dill Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 870, protein: 32, carbs: 52, fat: 13 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Celery Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 880, protein: 33, carbs: 53, fat: 14 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Lovage Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 890, protein: 34, carbs: 54, fat: 15 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Parsley Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 900, protein: 25, carbs: 40, fat: 16 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Basil Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 910, protein: 26, carbs: 41, fat: 17 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Oregano Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 920, protein: 27, carbs: 42, fat: 18 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Thyme Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 930, protein: 28, carbs: 43, fat: 19 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Rosemary Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 940, protein: 29, carbs: 44, fat: 12 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Sage Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 950, protein: 30, carbs: 45, fat: 13 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Marjoram Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 960, protein: 31, carbs: 46, fat: 14 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Tarragon Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 970, protein: 32, carbs: 47, fat: 15 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Bay Leaf Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 980, protein: 33, carbs: 48, fat: 16 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Mint Seed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 990, protein: 34, carbs: 49, fat: 17 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Lemon Balm Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1000, protein: 25, carbs: 50, fat: 18 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Catnip Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1010, protein: 26, carbs: 51, fat: 19 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Horehound Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1020, protein: 27, carbs: 52, fat: 12 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Hyssop Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1030, protein: 28, carbs: 53, fat: 13 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Lavender Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1040, protein: 29, carbs: 54, fat: 14 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Chamomile Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1050, protein: 30, carbs: 40, fat: 15 },
        prepTime: '20 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Calendula Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1060, protein: 31, carbs: 41, fat: 16 },
        prepTime: '21 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Echinacea Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1070, protein: 32, carbs: 42, fat: 17 },
        prepTime: '22 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Ginseng Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1080, protein: 33, carbs: 43, fat: 18 },
        prepTime: '23 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Licorice Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1090, protein: 34, carbs: 44, fat: 19 },
        prepTime: '24 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Marshmallow Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1100, protein: 25, carbs: 45, fat: 12 },
        prepTime: '25 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Slippery Elm Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1110, protein: 26, carbs: 46, fat: 13 },
        prepTime: '26 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Comfrey Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1120, protein: 27, carbs: 47, fat: 14 },
        prepTime: '27 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Plantain Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1130, protein: 28, carbs: 48, fat: 15 },
        prepTime: '28 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Dandelion Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1140, protein: 29, carbs: 49, fat: 16 },
        prepTime: '29 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Burdock Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1150, protein: 30, carbs: 50, fat: 17 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Yellow Dock Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1160, protein: 31, carbs: 51, fat: 18 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Red Clover Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1170, protein: 32, carbs: 52, fat: 19 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Alfalfa Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1180, protein: 33, carbs: 53, fat: 12 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Nettle Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1190, protein: 34, carbs: 54, fat: 13 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Chickweed Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1200, protein: 25, carbs: 40, fat: 14 },
        prepTime: '20 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Purslane Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1210, protein: 26, carbs: 41, fat: 15 },
        prepTime: '21 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Lambsquarters Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1220, protein: 27, carbs: 42, fat: 16 },
        prepTime: '22 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Amaranth Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1230, protein: 28, carbs: 43, fat: 17 },
        prepTime: '23 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Quinoa Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1240, protein: 29, carbs: 44, fat: 18 },
        prepTime: '24 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Buckwheat Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1250, protein: 30, carbs: 45, fat: 19 },
        prepTime: '25 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Millet Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1260, protein: 31, carbs: 46, fat: 12 },
        prepTime: '26 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Sorghum Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1270, protein: 32, carbs: 47, fat: 13 },
        prepTime: '27 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Teff Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1280, protein: 33, carbs: 48, fat: 14 },
        prepTime: '28 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Amaranth Chicken': {
        mealType: 'lunch',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1290, protein: 34, carbs: 49, fat: 15 },
        prepTime: '29 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetarian Pasta': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 400, protein: 15, carbs: 40, fat: 12 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Stew': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 410, protein: 16, carbs: 41, fat: 13 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Mushroom Risotto': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 420, protein: 17, carbs: 42, fat: 14 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Casserole': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 430, protein: 18, carbs: 43, fat: 15 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Tofu Stir Fry': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 440, protein: 19, carbs: 44, fat: 16 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Curry': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 450, protein: 20, carbs: 45, fat: 17 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Soup': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 460, protein: 21, carbs: 46, fat: 18 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Salad': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 470, protein: 22, carbs: 47, fat: 19 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Sandwich': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 480, protein: 23, carbs: 48, fat: 12 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Bean Chili': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 490, protein: 24, carbs: 49, fat: 13 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pizza': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 500, protein: 15, carbs: 50, fat: 14 },
        prepTime: '40 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Lasagna': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 510, protein: 16, carbs: 51, fat: 15 },
        prepTime: '41 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Stir Fry': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 520, protein: 17, carbs: 52, fat: 16 },
        prepTime: '42 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Noodles': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 530, protein: 18, carbs: 53, fat: 17 },
        prepTime: '43 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Rice': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 540, protein: 19, carbs: 54, fat: 18 },
        prepTime: '44 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Tacos': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 550, protein: 20, carbs: 40, fat: 19 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Quesadilla': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 560, protein: 21, carbs: 41, fat: 12 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Enchiladas': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 570, protein: 22, carbs: 42, fat: 13 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Fajitas': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 580, protein: 23, carbs: 43, fat: 14 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Nachos': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 590, protein: 24, carbs: 44, fat: 15 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Sushi': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 600, protein: 15, carbs: 45, fat: 16 },
        prepTime: '35 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Tempura': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 610, protein: 16, carbs: 46, fat: 17 },
        prepTime: '36 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Dumplings': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 620, protein: 17, carbs: 47, fat: 18 },
        prepTime: '37 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Spring Rolls': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 630, protein: 18, carbs: 48, fat: 19 },
        prepTime: '38 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pad Thai': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 640, protein: 19, carbs: 49, fat: 12 },
        prepTime: '39 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Fried Rice': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 650, protein: 20, carbs: 50, fat: 13 },
        prepTime: '40 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lo Mein': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 660, protein: 21, carbs: 51, fat: 14 },
        prepTime: '41 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Chow Mein': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 670, protein: 22, carbs: 52, fat: 15 },
        prepTime: '42 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Kung Pao': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 680, protein: 23, carbs: 53, fat: 16 },
        prepTime: '43 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Mapo Tofu': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 690, protein: 24, carbs: 54, fat: 17 },
        prepTime: '44 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Sweet and Sour': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 700, protein: 15, carbs: 40, fat: 18 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable General Tso': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 710, protein: 16, carbs: 41, fat: 19 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Orange Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 720, protein: 17, carbs: 42, fat: 12 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Lemon Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 730, protein: 18, carbs: 43, fat: 13 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Honey Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 740, protein: 19, carbs: 44, fat: 14 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sesame Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 750, protein: 20, carbs: 45, fat: 15 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Cashew Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 760, protein: 21, carbs: 46, fat: 16 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Almond Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 770, protein: 22, carbs: 47, fat: 17 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Walnut Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 780, protein: 23, carbs: 48, fat: 18 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Pecan Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 790, protein: 24, carbs: 49, fat: 19 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Macadamia Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 800, protein: 15, carbs: 50, fat: 12 },
        prepTime: '40 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Pistachio Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 810, protein: 16, carbs: 51, fat: 13 },
        prepTime: '41 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Hazelnut Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 820, protein: 17, carbs: 52, fat: 14 },
        prepTime: '42 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Brazil Nut Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 830, protein: 18, carbs: 53, fat: 15 },
        prepTime: '43 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pine Nut Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 840, protein: 19, carbs: 54, fat: 16 },
        prepTime: '44 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sunflower Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 850, protein: 20, carbs: 40, fat: 17 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Pumpkin Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 860, protein: 21, carbs: 41, fat: 18 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Chia Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 870, protein: 22, carbs: 42, fat: 19 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Flax Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 880, protein: 23, carbs: 43, fat: 12 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Hemp Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 890, protein: 24, carbs: 44, fat: 13 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Poppy Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 900, protein: 15, carbs: 45, fat: 14 },
        prepTime: '35 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sesame Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 910, protein: 16, carbs: 46, fat: 15 },
        prepTime: '36 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Mustard Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 920, protein: 17, carbs: 47, fat: 16 },
        prepTime: '37 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Cumin Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 930, protein: 18, carbs: 48, fat: 17 },
        prepTime: '38 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Coriander Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 940, protein: 19, carbs: 49, fat: 18 },
        prepTime: '39 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Fennel Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 950, protein: 20, carbs: 50, fat: 19 },
        prepTime: '40 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Caraway Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 960, protein: 21, carbs: 51, fat: 12 },
        prepTime: '41 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Dill Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 970, protein: 22, carbs: 52, fat: 13 },
        prepTime: '42 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Celery Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 980, protein: 23, carbs: 53, fat: 14 },
        prepTime: '43 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Lovage Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 990, protein: 24, carbs: 54, fat: 15 },
        prepTime: '44 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Parsley Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1000, protein: 15, carbs: 40, fat: 16 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Basil Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1010, protein: 16, carbs: 41, fat: 17 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Oregano Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1020, protein: 17, carbs: 42, fat: 18 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Thyme Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1030, protein: 18, carbs: 43, fat: 19 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Rosemary Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1040, protein: 19, carbs: 44, fat: 12 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sage Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1050, protein: 20, carbs: 45, fat: 13 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Marjoram Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1060, protein: 21, carbs: 46, fat: 14 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Tarragon Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1070, protein: 22, carbs: 47, fat: 15 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Bay Leaf Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1080, protein: 23, carbs: 48, fat: 16 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Mint Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1090, protein: 24, carbs: 49, fat: 17 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lemon Balm Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1100, protein: 15, carbs: 50, fat: 18 },
        prepTime: '40 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Catnip Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1110, protein: 16, carbs: 51, fat: 19 },
        prepTime: '41 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Horehound Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1120, protein: 17, carbs: 52, fat: 12 },
        prepTime: '42 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Hyssop Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1130, protein: 18, carbs: 53, fat: 13 },
        prepTime: '43 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lavender Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1140, protein: 19, carbs: 54, fat: 14 },
        prepTime: '44 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Chamomile Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1150, protein: 20, carbs: 40, fat: 15 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Calendula Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1160, protein: 21, carbs: 41, fat: 16 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Echinacea Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1170, protein: 22, carbs: 42, fat: 17 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Ginseng Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1180, protein: 23, carbs: 43, fat: 18 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Licorice Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1190, protein: 24, carbs: 44, fat: 19 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Marshmallow Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1200, protein: 15, carbs: 45, fat: 12 },
        prepTime: '35 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Slippery Elm Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1210, protein: 16, carbs: 46, fat: 13 },
        prepTime: '36 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Comfrey Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1220, protein: 17, carbs: 47, fat: 14 },
        prepTime: '37 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Plantain Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1230, protein: 18, carbs: 48, fat: 15 },
        prepTime: '38 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Dandelion Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1240, protein: 19, carbs: 49, fat: 16 },
        prepTime: '39 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Burdock Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1250, protein: 20, carbs: 50, fat: 17 },
        prepTime: '40 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Yellow Dock Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1260, protein: 21, carbs: 51, fat: 18 },
        prepTime: '41 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Red Clover Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1270, protein: 22, carbs: 52, fat: 19 },
        prepTime: '42 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Alfalfa Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1280, protein: 23, carbs: 53, fat: 12 },
        prepTime: '43 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Nettle Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1290, protein: 24, carbs: 54, fat: 13 },
        prepTime: '44 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Chickweed Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1300, protein: 15, carbs: 40, fat: 14 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Purslane Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1310, protein: 16, carbs: 41, fat: 15 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Lambsquarters Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1320, protein: 17, carbs: 42, fat: 16 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Amaranth Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1330, protein: 18, carbs: 43, fat: 17 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Quinoa Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1340, protein: 19, carbs: 44, fat: 18 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Buckwheat Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1350, protein: 20, carbs: 45, fat: 19 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Millet Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1360, protein: 21, carbs: 46, fat: 12 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Sorghum Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1370, protein: 22, carbs: 47, fat: 13 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Vegetable Teff Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1380, protein: 23, carbs: 48, fat: 14 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Vegetable Amaranth Chicken': {
        mealType: 'dinner',
        lifestyle: 'vegetarian',
        category: 'western',
        nutrition: { calories: 1390, protein: 24, carbs: 49, fat: 15 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Pasta': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 400, protein: 25, carbs: 40, fat: 12 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Stew': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 410, protein: 26, carbs: 41, fat: 13 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Risotto': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 420, protein: 27, carbs: 42, fat: 14 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Fish Casserole': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 430, protein: 28, carbs: 43, fat: 15 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Meat Stir Fry': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 440, protein: 29, carbs: 44, fat: 16 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Curry': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 450, protein: 30, carbs: 45, fat: 17 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Soup': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 460, protein: 31, carbs: 46, fat: 18 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Salad': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 470, protein: 32, carbs: 47, fat: 19 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Meat Sandwich': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 480, protein: 33, carbs: 48, fat: 12 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Chili': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 490, protein: 34, carbs: 49, fat: 13 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pepperoni Pizza': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 500, protein: 25, carbs: 50, fat: 14 },
        prepTime: '40 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Lasagna': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 510, protein: 26, carbs: 51, fat: 15 },
        prepTime: '41 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Stir Fry': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 520, protein: 27, carbs: 52, fat: 16 },
        prepTime: '42 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Noodles': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 530, protein: 28, carbs: 53, fat: 17 },
        prepTime: '43 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Rice': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 540, protein: 29, carbs: 54, fat: 18 },
        prepTime: '44 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Tacos': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 550, protein: 30, carbs: 40, fat: 19 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Quesadilla': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 560, protein: 31, carbs: 41, fat: 12 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Enchiladas': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 570, protein: 32, carbs: 42, fat: 13 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Fajitas': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 580, protein: 33, carbs: 43, fat: 14 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Nachos': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 590, protein: 34, carbs: 44, fat: 15 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Salmon Sushi': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 600, protein: 25, carbs: 45, fat: 16 },
        prepTime: '35 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Shrimp Tempura': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 610, protein: 26, carbs: 46, fat: 17 },
        prepTime: '36 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Dumplings': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 620, protein: 27, carbs: 47, fat: 18 },
        prepTime: '37 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Spring Rolls': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 630, protein: 28, carbs: 48, fat: 19 },
        prepTime: '38 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Pad Thai': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 640, protein: 29, carbs: 49, fat: 12 },
        prepTime: '39 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Fried Rice': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 650, protein: 30, carbs: 50, fat: 13 },
        prepTime: '40 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Lo Mein': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 660, protein: 31, carbs: 51, fat: 14 },
        prepTime: '41 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Chow Mein': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 670, protein: 32, carbs: 52, fat: 15 },
        prepTime: '42 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Kung Pao': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 680, protein: 33, carbs: 53, fat: 16 },
        prepTime: '43 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Mapo Tofu': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 690, protein: 34, carbs: 54, fat: 17 },
        prepTime: '44 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Sweet and Sour': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 700, protein: 25, carbs: 40, fat: 18 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken General Tso': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 710, protein: 26, carbs: 41, fat: 19 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Orange Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 720, protein: 27, carbs: 42, fat: 12 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Lemon Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 730, protein: 28, carbs: 43, fat: 13 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Honey Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 740, protein: 29, carbs: 44, fat: 14 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Sesame Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 750, protein: 30, carbs: 45, fat: 15 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Cashew Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 760, protein: 31, carbs: 46, fat: 16 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Almond Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 770, protein: 32, carbs: 47, fat: 17 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Walnut Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 780, protein: 33, carbs: 48, fat: 18 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Pecan Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 790, protein: 34, carbs: 49, fat: 19 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Macadamia Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 800, protein: 25, carbs: 50, fat: 12 },
        prepTime: '40 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Pistachio Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 810, protein: 26, carbs: 51, fat: 13 },
        prepTime: '41 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Hazelnut Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 820, protein: 27, carbs: 52, fat: 14 },
        prepTime: '42 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Brazil Nut Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 830, protein: 28, carbs: 53, fat: 15 },
        prepTime: '43 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Pine Nut Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 840, protein: 29, carbs: 54, fat: 16 },
        prepTime: '44 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Sunflower Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 850, protein: 30, carbs: 40, fat: 17 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Pumpkin Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 860, protein: 31, carbs: 41, fat: 18 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Chia Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 870, protein: 32, carbs: 42, fat: 19 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Flax Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 880, protein: 33, carbs: 43, fat: 12 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Hemp Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 890, protein: 34, carbs: 44, fat: 13 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Poppy Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 900, protein: 25, carbs: 45, fat: 14 },
        prepTime: '35 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Sesame Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 910, protein: 26, carbs: 46, fat: 15 },
        prepTime: '36 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Mustard Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 920, protein: 27, carbs: 47, fat: 16 },
        prepTime: '37 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Cumin Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 930, protein: 28, carbs: 48, fat: 17 },
        prepTime: '38 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Coriander Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 940, protein: 29, carbs: 49, fat: 18 },
        prepTime: '39 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Fennel Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 950, protein: 30, carbs: 50, fat: 19 },
        prepTime: '40 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Caraway Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 960, protein: 31, carbs: 51, fat: 12 },
        prepTime: '41 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Dill Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 970, protein: 32, carbs: 52, fat: 13 },
        prepTime: '42 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Celery Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 980, protein: 33, carbs: 53, fat: 14 },
        prepTime: '43 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Lovage Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 990, protein: 34, carbs: 54, fat: 15 },
        prepTime: '44 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Parsley Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1000, protein: 25, carbs: 40, fat: 16 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Basil Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1010, protein: 26, carbs: 41, fat: 17 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Oregano Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1020, protein: 27, carbs: 42, fat: 18 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Thyme Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1030, protein: 28, carbs: 43, fat: 19 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Rosemary Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1040, protein: 29, carbs: 44, fat: 12 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Sage Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1050, protein: 30, carbs: 45, fat: 13 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Marjoram Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1060, protein: 31, carbs: 46, fat: 14 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Tarragon Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1070, protein: 32, carbs: 47, fat: 15 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Bay Leaf Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1080, protein: 33, carbs: 48, fat: 16 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Mint Seed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1090, protein: 34, carbs: 49, fat: 17 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Lemon Balm Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1100, protein: 25, carbs: 50, fat: 18 },
        prepTime: '40 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Catnip Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1110, protein: 26, carbs: 51, fat: 19 },
        prepTime: '41 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Horehound Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1120, protein: 27, carbs: 52, fat: 12 },
        prepTime: '42 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Hyssop Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1130, protein: 28, carbs: 53, fat: 13 },
        prepTime: '43 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Lavender Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1140, protein: 29, carbs: 54, fat: 14 },
        prepTime: '44 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Chamomile Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1150, protein: 30, carbs: 40, fat: 15 },
        prepTime: '30 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Calendula Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1160, protein: 31, carbs: 41, fat: 16 },
        prepTime: '31 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Echinacea Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1170, protein: 32, carbs: 42, fat: 17 },
        prepTime: '32 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Ginseng Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1180, protein: 33, carbs: 43, fat: 18 },
        prepTime: '33 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Licorice Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1190, protein: 34, carbs: 44, fat: 19 },
        prepTime: '34 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Marshmallow Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1200, protein: 25, carbs: 45, fat: 12 },
        prepTime: '35 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Slippery Elm Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1210, protein: 26, carbs: 46, fat: 13 },
        prepTime: '36 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Comfrey Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1220, protein: 27, carbs: 47, fat: 14 },
        prepTime: '37 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Plantain Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1230, protein: 28, carbs: 48, fat: 15 },
        prepTime: '38 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Dandelion Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1240, protein: 29, carbs: 49, fat: 16 },
        prepTime: '39 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Burdock Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1250, protein: 30, carbs: 50, fat: 17 },
        prepTime: '40 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Yellow Dock Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1260, protein: 31, carbs: 51, fat: 18 },
        prepTime: '41 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Red Clover Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1270, protein: 32, carbs: 52, fat: 19 },
        prepTime: '42 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Alfalfa Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1280, protein: 33, carbs: 53, fat: 12 },
        prepTime: '43 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Nettle Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1290, protein: 34, carbs: 54, fat: 13 },
        prepTime: '44 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Chickweed Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1300, protein: 25, carbs: 40, fat: 14 },
        prepTime: '30 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Purslane Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1310, protein: 26, carbs: 41, fat: 15 },
        prepTime: '31 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Lambsquarters Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1320, protein: 27, carbs: 42, fat: 16 },
        prepTime: '32 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Amaranth Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1330, protein: 28, carbs: 43, fat: 17 },
        prepTime: '33 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Chicken Quinoa Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1340, protein: 29, carbs: 44, fat: 18 },
        prepTime: '34 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Pork Buckwheat Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1350, protein: 30, carbs: 45, fat: 19 },
        prepTime: '35 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Beef Millet Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1360, protein: 31, carbs: 46, fat: 12 },
        prepTime: '36 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Chicken Sorghum Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1370, protein: 32, carbs: 47, fat: 13 },
        prepTime: '37 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Pork Teff Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1380, protein: 33, carbs: 48, fat: 14 },
        prepTime: '38 minutes',
        difficulty: 'Easy',
        image: ''
    },
    'Beef Amaranth Chicken': {
        mealType: 'dinner',
        lifestyle: 'non-vegetarian',
        category: 'western',
        nutrition: { calories: 1390, protein: 34, carbs: 49, fat: 15 },
        prepTime: '39 minutes',
        difficulty: 'Medium',
        image: ''
    },
    'Steamed Buns': { 
        mealType: 'breakfast', 
        lifestyle: 'vegetarian', 
        category: 'chinese',
        nutrition: { calories: 120, protein: 4, carbs: 22, fat: 2 },
        prepTime: '90 minutes',
        difficulty: 'Medium',
        image: ''
    }
}; 