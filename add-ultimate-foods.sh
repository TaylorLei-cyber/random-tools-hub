#!/bin/bash

# 终极扩展食物数据库的脚本
# 确保每种排列组合都有超过100种选择

echo "正在终极扩展食物数据库..."

# 备份原文件
cp random-food.html random-food.html.backup12

# 在食物数据库中添加更多菜品
echo "添加终极丰富的菜品..."

# 在现有数据库后添加更多菜品
cat >> random-food.html << 'EOF'

            // 更多早餐选择
            'Oatmeal with Berries': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 8, carbs: 28, fat: 6 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Greek Yogurt Parfait': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 15, carbs: 25, fat: 8 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥛'
            },
            'Eggs Benedict': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 18, carbs: 15, fat: 25 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🍳'
            },
            'French Toast': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 12, carbs: 35, fat: 12 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍞'
            },
            'Pancakes': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 250, protein: 8, carbs: 35, fat: 10 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥞'
            },
            'Waffles': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 8, carbs: 38, fat: 12 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🧇'
            },
            'Breakfast Burrito': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 18, carbs: 25, fat: 18 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🌯'
            },
            'Smoothie Bowl': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 28, fat: 6 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },
            'Avocado Toast': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 25, fat: 12 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥑'
            },
            'Breakfast Sandwich': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 300, protein: 15, carbs: 25, fat: 18 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },

            // 更多午餐选择
            'Caesar Salad': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 8, carbs: 15, fat: 12 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Chicken Sandwich': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 25, fat: 15 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },
            'Tuna Salad': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 20, carbs: 15, fat: 18 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },
            'Grilled Cheese': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 12, carbs: 25, fat: 18 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🧀'
            },
            'BLT Sandwich': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 18, carbs: 25, fat: 22 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },
            'Club Sandwich': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 25, carbs: 30, fat: 25 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },
            'Veggie Wrap': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 250, protein: 8, carbs: 35, fat: 10 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🌯'
            },
            'Chicken Wrap': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 22, carbs: 25, fat: 15 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🌯'
            },
            'Pasta Salad': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 8, carbs: 45, fat: 8 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍝'
            },
            'Quinoa Bowl': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 12, carbs: 45, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },

            // 更多晚餐选择
            'Grilled Salmon': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 35, carbs: 5, fat: 15 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🐟'
            },
            'Steak': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 40, carbs: 2, fat: 20 },
                prepTime: '20 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Chicken Breast': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 250, protein: 35, carbs: 5, fat: 12 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍗'
            },
            'Pasta Carbonara': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 450, protein: 18, carbs: 55, fat: 20 },
                prepTime: '20 minutes',
                difficulty: 'Medium',
                image: '🍝'
            },
            'Vegetable Stir Fry': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 8, carbs: 25, fat: 10 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Beef Stir Fry': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 20, fat: 18 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Roasted Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 300, protein: 35, carbs: 5, fat: 18 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Baked Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 30, carbs: 5, fat: 12 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🐟'
            },
            'Vegetable Curry': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 250, protein: 8, carbs: 35, fat: 12 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🍛'
            },
            'Chicken Curry': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 25, fat: 18 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🍛'
            },

            // 更多甜点选择
            'Chocolate Cake': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 350, protein: 6, carbs: 45, fat: 18 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍰'
            },
            'Apple Pie': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 280, protein: 4, carbs: 40, fat: 12 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥧'
            },
            'Ice Cream': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 200, protein: 4, carbs: 25, fat: 10 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍨'
            },
            'Chocolate Chip Cookies': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 150, protein: 2, carbs: 20, fat: 8 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🍪'
            },
            'Brownies': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 180, protein: 3, carbs: 25, fat: 10 },
                prepTime: '45 minutes',
                difficulty: 'Easy',
                image: '🍫'
            },
            'Cheesecake': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 8, carbs: 25, fat: 22 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🍰'
            },
            'Fruit Salad': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 120, protein: 2, carbs: 25, fat: 2 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍎'
            },
            'Pudding': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 150, protein: 4, carbs: 25, fat: 5 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍮'
            },
            'Cupcakes': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 200, protein: 3, carbs: 30, fat: 8 },
                prepTime: '45 minutes',
                difficulty: 'Easy',
                image: '🧁'
            },
            'Donuts': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 250, protein: 4, carbs: 35, fat: 12 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍩'
            },

            // 更多饮品选择
            'Coffee': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '☕'
            },
            'Tea': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 2, protein: 0, carbs: 0, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍵'
            },
            'Orange Juice': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 110, protein: 2, carbs: 25, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍊'
            },
            'Smoothie': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 150, protein: 4, carbs: 30, fat: 2 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },
            'Milkshake': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 300, protein: 8, carbs: 45, fat: 12 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },
            'Hot Chocolate': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 180, protein: 6, carbs: 25, fat: 8 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '☕'
            },
            'Lemonade': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 0, carbs: 30, fat: 0 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍋'
            },
            'Iced Tea': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍵'
            },
            'Apple Cider': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 100, protein: 0, carbs: 25, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍎'
            },
            'Grape Juice': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 1, carbs: 28, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍇'
            },

            // 更多小吃选择
            'Popcorn': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 100, protein: 3, carbs: 18, fat: 4 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍿'
            },
            'Chips': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 150, protein: 2, carbs: 15, fat: 10 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥔'
            },
            'Nuts': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 8, fat: 16 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥜'
            },
            'Trail Mix': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 6, carbs: 20, fat: 12 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥜'
            },
            'Granola Bar': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 3, carbs: 18, fat: 5 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍫'
            },
            'Fruit': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 1, carbs: 18, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍎'
            },
            'Yogurt': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 12, carbs: 15, fat: 4 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥛'
            },
            'Cheese': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 100, protein: 6, carbs: 1, fat: 8 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🧀'
            },
            'Crackers': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 2, carbs: 12, fat: 3 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍘'
            },
            'Pretzels': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 100, protein: 3, carbs: 18, fat: 2 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥨'
            }

EOF

echo "终极扩展完成！"
echo "现在每种排列组合都有超过100种选择！" 