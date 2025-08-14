#!/bin/bash

# 扩展食物数据库的脚本
# 添加更多菜品种类

echo "正在扩展食物数据库..."

# 备份原文件
cp random-food.html random-food.html.backup7

# 在食物数据库中添加更多菜品
echo "添加更多中餐菜品..."

# 在现有数据库后添加更多菜品
cat >> random-food.html << 'EOF'

            // 更多川菜
            'Dan Dan Noodles': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 450, protein: 15, carbs: 65, fat: 18 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Gong Bao Ji Ding': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 380, protein: 32, carbs: 18, fat: 20 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Ma La Xiang Guo': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 520, protein: 28, carbs: 25, fat: 35 },
                prepTime: '40 minutes',
                difficulty: 'Hard',
                image: '🍲'
            },

            // 粤菜 (Cantonese Cuisine)
            'Dim Sum': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 12, carbs: 45, fat: 8 },
                prepTime: '60 minutes',
                difficulty: 'Hard',
                image: '🥟'
            },
            'Siu Mai': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 15, carbs: 20, fat: 6 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Har Gow': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 160, protein: 18, carbs: 18, fat: 4 },
                prepTime: '50 minutes',
                difficulty: 'Hard',
                image: '🥟'
            },
            'Char Siu': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 420, protein: 35, carbs: 15, fat: 25 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Wonton Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 12, carbs: 20, fat: 6 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🥣'
            },

            // 湘菜 (Hunan Cuisine)
            'Dong'an Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 32, carbs: 8, fat: 15 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Stinky Tofu': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 8, carbs: 10, fat: 6 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🧈'
            },
            'Spicy Crayfish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 25, carbs: 5, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🦐'
            },
            'Hunan Beef': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 320, protein: 28, carbs: 12, fat: 18 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },

            // 鲁菜 (Shandong Cuisine)
            'Sweet and Sour Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 25, carbs: 20, fat: 12 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Dezhou Braised Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 350, protein: 38, carbs: 8, fat: 18 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍗'
            },
            'Jiuzhuan Large Intestine': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 22, carbs: 10, fat: 18 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },

            // 苏菜 (Jiangsu Cuisine)
            'Squirrel Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 320, protein: 28, carbs: 25, fat: 15 },
                prepTime: '45 minutes',
                difficulty: 'Hard',
                image: '🐟'
            },
            'Dongpo Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 480, protein: 32, carbs: 12, fat: 35 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Hairy Crab': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 20, carbs: 2, fat: 10 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🦀'
            },

            // 浙菜 (Zhejiang Cuisine)
            'West Lake Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 220, protein: 30, carbs: 8, fat: 10 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Longjing Shrimp': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 25, carbs: 5, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🦐'
            },

            // 闽菜 (Fujian Cuisine)
            'Buddha Jumps Over the Wall': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 500, protein: 35, carbs: 15, fat: 30 },
                prepTime: '240 minutes',
                difficulty: 'Hard',
                image: '🍲'
            },
            'Red Wine Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 25, carbs: 8, fat: 18 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },

            // 徽菜 (Anhui Cuisine)
            'Hui Braised Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 380, protein: 28, carbs: 10, fat: 25 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },

            // 更多西餐
            'Spaghetti Carbonara': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 650, protein: 25, carbs: 70, fat: 30 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🍝'
            },
            'Caesar Salad': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 15, carbs: 12, fat: 20 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Beef Wellington': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 580, protein: 35, carbs: 25, fat: 35 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Chicken Marsala': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 32, carbs: 15, fat: 25 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Shrimp Scampi': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 28, carbs: 25, fat: 20 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🦐'
            },
            'Beef Stroganoff': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 520, protein: 35, carbs: 30, fat: 28 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Chicken Parmesan': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 480, protein: 38, carbs: 35, fat: 22 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Lobster Thermidor': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 32, carbs: 8, fat: 28 },
                prepTime: '60 minutes',
                difficulty: 'Hard',
                image: '🦞'
            },

            // 更多甜点
            'Chocolate Lava Cake': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 380, protein: 8, carbs: 45, fat: 20 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🍫'
            },
            'Crème Brûlée': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 6, carbs: 25, fat: 22 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍮'
            },
            'Apple Pie': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 280, protein: 4, carbs: 42, fat: 12 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥧'
            },
            'New York Cheesecake': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 420, protein: 8, carbs: 35, fat: 28 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🧀'
            },
            'Panna Cotta': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 280, protein: 6, carbs: 20, fat: 20 },
                prepTime: '45 minutes',
                difficulty: 'Easy',
                image: '🍮'
            },
            'Profiteroles': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 6, carbs: 38, fat: 18 },
                prepTime: '75 minutes',
                difficulty: 'Hard',
                image: '🧁'
            },

            // 更多饮品
            'Espresso': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '☕'
            },
            'Cappuccino': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 80, protein: 4, carbs: 8, fat: 4 },
                prepTime: '8 minutes',
                difficulty: 'Easy',
                image: '☕'
            },
            'Mojito': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 150, protein: 0, carbs: 15, fat: 0 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍹'
            },
            'Margarita': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 180, protein: 0, carbs: 18, fat: 0 },
                prepTime: '8 minutes',
                difficulty: 'Easy',
                image: '🍸'
            },
            'Smoothie Bowl': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 220, protein: 8, carbs: 35, fat: 6 },
                prepTime: '15 minutes',
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
            'Green Tea': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 2, protein: 0, carbs: 0, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍵'
            },
            'Chai Latte': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 4, carbs: 18, fat: 4 },
                prepTime: '12 minutes',
                difficulty: 'Easy',
                image: '☕'
            },

            // 更多早餐选择
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
                nutrition: { calories: 220, protein: 8, carbs: 38, fat: 6 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥞'
            },
            'Omelette': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 15, carbs: 2, fat: 12 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍳'
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
            'Granola Bowl': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 10, carbs: 45, fat: 8 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },

            // 更多午餐选择
            'Club Sandwich': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 25, carbs: 35, fat: 22 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },
            'Caesar Wrap': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 18, carbs: 28, fat: 16 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🌯'
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
            'Buddha Bowl': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 15, carbs: 48, fat: 10 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },

            // 更多晚餐选择
            'Beef Tacos': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 22, carbs: 35, fat: 18 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🌮'
            },
            'Chicken Curry': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 28, carbs: 25, fat: 22 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍛'
            },
            'Vegetable Stir Fry': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 35, fat: 8 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Salmon Teriyaki': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 35, carbs: 15, fat: 16 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },

            // 更多小吃
            'Popcorn': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 3, carbs: 22, fat: 4 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍿'
            },
            'Nachos': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 12, carbs: 45, fat: 18 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🧀'
            },
            'Guacamole': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 4, carbs: 12, fat: 12 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥑'
            },
            'Hummus': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 140, protein: 6, carbs: 15, fat: 8 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🫘'
            }

EOF

echo "食物数据库扩展完成！"
echo "现在包含了更多丰富的菜品种类。" 