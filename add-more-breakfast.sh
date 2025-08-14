#!/bin/bash

echo "正在添加更多早餐选择..."

# 备份当前文件
cp random-food.html random-food.html.backup-breakfast

# 在foodDatabase对象中添加更多早餐选择
# 找到foodDatabase的结束位置
line_number=$(grep -n "};" random-food.html | head -1 | cut -d: -f1)

# 在foodDatabase结束前添加更多早餐
sed -i '' "${line_number}i\\
                        // 更多早餐选择\\
                        'Oatmeal with Berries': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 180, protein: 8, carbs: 28, fat: 6 },\\
                            prepTime: '10 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥣'\\
                        },\\
                        'Greek Yogurt Parfait': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 220, protein: 15, carbs: 25, fat: 8 },\\
                            prepTime: '5 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥛'\\
                        },\\
                        'Avocado Toast': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 280, protein: 10, carbs: 30, fat: 15 },\\
                            prepTime: '8 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥑'\\
                        },\\
                        'Smoothie Bowl': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 250, protein: 12, carbs: 35, fat: 10 },\\
                            prepTime: '12 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥤'\\
                        },\\
                        'Breakfast Burrito': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 320, protein: 18, carbs: 35, fat: 12 },\\
                            prepTime: '15 minutes',\\
                            difficulty: 'Medium',\\
                            image: '🌯'\\
                        },\\
                        'Pancakes': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 300, protein: 8, carbs: 45, fat: 10 },\\
                            prepTime: '20 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥞'\\
                        },\\
                        'Waffles': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 280, protein: 7, carbs: 42, fat: 9 },\\
                            prepTime: '18 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🧇'\\
                        },\\
                        'French Toast': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 260, protein: 9, carbs: 38, fat: 8 },\\
                            prepTime: '12 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🍞'\\
                        },\\
                        'Breakfast Sandwich': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 340, protein: 16, carbs: 32, fat: 18 },\\
                            prepTime: '10 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥪'\\
                        },\\
                        'Eggs Benedict': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 380, protein: 20, carbs: 25, fat: 22 },\\
                            prepTime: '25 minutes',\\
                            difficulty: 'Medium',\\
                            image: '🍳'\\
                        },\\
                        'Shakshuka': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'middle-eastern',\\
                            nutrition: { calories: 290, protein: 16, carbs: 18, fat: 20 },\\
                            prepTime: '20 minutes',\\
                            difficulty: 'Medium',\\
                            image: '🍅'\\
                        },\\
                        'Acai Bowl': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 200, protein: 6, carbs: 32, fat: 8 },\\
                            prepTime: '8 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🫐'\\
                        },\\
                        'Protein Pancakes': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 240, protein: 20, carbs: 28, fat: 8 },\\
                            prepTime: '15 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥞'\\
                        },\\
                        'Danish Pastries': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 320, protein: 6, carbs: 45, fat: 12 },\\
                            prepTime: '5 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥐'\\
                        },\\
                        'Icelandic Skyr': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'nordic',\\
                            nutrition: { calories: 180, protein: 22, carbs: 15, fat: 2 },\\
                            prepTime: '3 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥛'\\
                        },\\
                        'Chia Pudding': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 160, protein: 8, carbs: 20, fat: 8 },\\
                            prepTime: '5 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥣'\\
                        },\\
                        'Granola Bowl': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 280, protein: 10, carbs: 38, fat: 12 },\\
                            prepTime: '5 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥣'\\
                        },\\
                        'Breakfast Quesadilla': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'mexican',\\
                            nutrition: { calories: 350, protein: 18, carbs: 32, fat: 18 },\\
                            prepTime: '12 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🧀'\\
                        },\\
                        'Breakfast Pizza': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'italian',\\
                            nutrition: { calories: 380, protein: 16, carbs: 42, fat: 16 },\\
                            prepTime: '25 minutes',\\
                            difficulty: 'Medium',\\
                            image: '🍕'\\
                        },\\
                        'Breakfast Tacos': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'mexican',\\
                            nutrition: { calories: 290, protein: 14, carbs: 28, fat: 14 },\\
                            prepTime: '15 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🌮'\\
                        },\\
                        'Breakfast Hash': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 320, protein: 12, carbs: 35, fat: 16 },\\
                            prepTime: '20 minutes',\\
                            difficulty: 'Medium',\\
                            image: '🥔'\\
                        },\\
                        'Breakfast Casserole': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 360, protein: 20, carbs: 28, fat: 20 },\\
                            prepTime: '45 minutes',\\
                            difficulty: 'Medium',\\
                            image: '🍳'\\
                        },\\
                        'Breakfast Muffins': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 240, protein: 6, carbs: 38, fat: 8 },\\
                            prepTime: '25 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🧁'\\
                        },\\
                        'Breakfast Cookies': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 200, protein: 8, carbs: 28, fat: 8 },\\
                            prepTime: '20 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🍪'\\
                        },\\
                        'Breakfast Bars': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 220, protein: 10, carbs: 32, fat: 8 },\\
                            prepTime: '30 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🍫'\\
                        },\\
                        'Breakfast Smoothie': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'western',\\
                            nutrition: { calories: 180, protein: 12, carbs: 25, fat: 6 },\\
                            prepTime: '8 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🥤'\\
                        },\\
                        'Breakfast Tea': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'drinks',\\
                            nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },\\
                            prepTime: '3 minutes',\\
                            difficulty: 'Easy',\\
                            image: '🍵'\\
                        },\\
                        'Breakfast Coffee': {\\
                            mealType: 'breakfast',\\
                            lifestyle: 'vegetarian',\\
                            category: 'drinks',\\
                            nutrition: { calories: 2, protein: 0, carbs: 0, fat: 0 },\\
                            prepTime: '5 minutes',\\
                            difficulty: 'Easy',\\
                            image: '☕'\\
                        },\\
" random-food.html

echo "早餐选择添加完成！"
echo "现在有更多丰富的早餐选择了！" 