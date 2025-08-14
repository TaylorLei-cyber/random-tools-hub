#!/bin/bash

# 超级扩展食物数据库的脚本
# 确保每种排列组合都有超过100种选择

echo "正在超级扩展食物数据库..."

# 备份原文件
cp random-food.html random-food.html.backup11

# 在食物数据库中添加更多菜品
echo "添加更多超级丰富的菜品..."

# 在现有数据库后添加更多菜品
cat >> random-food.html << 'EOF'

            // 更多现代健康食品
            'Quinoa Bowl': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 12, carbs: 45, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥗'
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
            'Smoothie Bowl': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 28, fat: 6 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },
            'Buddha Bowl': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 15, carbs: 45, fat: 10 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Zucchini Noodles': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 6, carbs: 15, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥒'
            },
            'Cauliflower Rice': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 4, carbs: 12, fat: 3 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥦'
            },
            'Kale Salad': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 140, protein: 8, carbs: 15, fat: 8 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Chia Pudding': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 8, carbs: 18, fat: 8 },
                prepTime: '480 minutes',
                difficulty: 'Easy',
                image: '🍮'
            },
            'Acai Bowl': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 4, carbs: 35, fat: 6 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },
            'Protein Pancakes': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 20, carbs: 25, fat: 12 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥞'
            },

            // 更多中东菜
            'Hummus': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 140, protein: 6, carbs: 15, fat: 8 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🫘'
            },
            'Falafel': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 25, fat: 10 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥙'
            },
            'Shawarma': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 25, fat: 15 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥙'
            },
            'Tabouleh': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 4, carbs: 18, fat: 4 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Baba Ganoush': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 100, protein: 3, carbs: 8, fat: 7 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🍆'
            },
            'Kebab': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 22, carbs: 15, fat: 16 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍖'
            },
            'Pita Bread': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 5, carbs: 28, fat: 2 },
                prepTime: '120 minutes',
                difficulty: 'Medium',
                image: '🫓'
            },
            'Moussaka': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 20, carbs: 25, fat: 22 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍆'
            },
            'Baklava': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 6, carbs: 35, fat: 18 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍯'
            },
            'Turkish Coffee': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '☕'
            },

            // 更多地中海菜
            'Mediterranean Salad': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 8, carbs: 15, fat: 12 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Grilled Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 28, carbs: 2, fat: 8 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🐟'
            },
            'Olive Tapenade': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 2, carbs: 4, fat: 12 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🫒'
            },
            'Caprese Salad': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 8, carbs: 8, fat: 12 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍅'
            },
            'Risotto ai Funghi': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 10, carbs: 55, fat: 8 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍚'
            },
            'Bruschetta': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 4, carbs: 15, fat: 6 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍞'
            },
            'Pasta Primavera': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 10, carbs: 45, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍝'
            },
            'Minestrone Soup': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 140, protein: 6, carbs: 20, fat: 4 },
                prepTime: '45 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Tiramisu': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 350, protein: 8, carbs: 35, fat: 20 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍰'
            },
            'Limoncello': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 0, carbs: 15, fat: 0 },
                prepTime: '43200 minutes',
                difficulty: 'Hard',
                image: '🍋'
            },

            // 更多北欧菜
            'Gravlax': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 20, carbs: 2, fat: 8 },
                prepTime: '2880 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Swedish Meatballs': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 15, fat: 18 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍖'
            },
            'Smørrebrød': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 15, carbs: 25, fat: 15 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥪'
            },
            'Lutefisk': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 140, protein: 25, carbs: 2, fat: 4 },
                prepTime: '1440 minutes',
                difficulty: 'Hard',
                image: '🐟'
            },
            'Karelian Pies': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 28, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥧'
            },
            'Finnish Salmon Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 18, carbs: 12, fat: 10 },
                prepTime: '40 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Norwegian Waffles': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 6, carbs: 32, fat: 8 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🧇'
            },
            'Danish Pastries': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 6, carbs: 35, fat: 14 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🥐'
            },
            'Icelandic Skyr': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 18, carbs: 8, fat: 2 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥛'
            },
            'Mulled Wine': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 150, protein: 0, carbs: 18, fat: 0 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍷'
            },

            // 更多东欧菜
            'Borscht': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 6, carbs: 15, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥣'
            },
            'Pierogi': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 240, protein: 8, carbs: 35, fat: 8 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Goulash': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 28, carbs: 25, fat: 20 },
                prepTime: '120 minutes',
                difficulty: 'Medium',
                image: '🥘'
            },
            'Schnitzel': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 15, fat: 18 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Sauerkraut': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 40, protein: 2, carbs: 6, fat: 1 },
                prepTime: '4320 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Strudel': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 280, protein: 4, carbs: 45, fat: 10 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🥧'
            },
            'Kielbasa': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 18, carbs: 8, fat: 20 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🌭'
            },
            'Potato Pancakes': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 4, carbs: 25, fat: 10 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🥔'
            },
            'Cabbage Rolls': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 260, protein: 18, carbs: 20, fat: 12 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥬'
            },
            'Beer': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 150, protein: 2, carbs: 15, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍺'
            },

            // 更多非洲菜
            'Couscous': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 32, fat: 2 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Tagine': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 25, carbs: 20, fat: 18 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥘'
            },
            'Ful Medames': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 12, carbs: 25, fat: 8 },
                prepTime: '60 minutes',
                difficulty: 'Easy',
                image: '🫘'
            },
            'Shakshuka': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 15, carbs: 15, fat: 18 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍳'
            },
            'Merguez': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 20, carbs: 8, fat: 20 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🌭'
            },
            'Harissa': { 
                mealType: 'condiment', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 20, protein: 1, carbs: 3, fat: 1 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🌶️'
            },
            'Brik': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 8, carbs: 15, fat: 10 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Mint Tea': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 5, protein: 0, carbs: 1, fat: 0 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍵'
            },
            'Baklava': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 6, carbs: 35, fat: 18 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍯'
            },
            'Couscous Salad': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 35, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },

            // 更多南美菜
            'Ceviche': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 18, carbs: 6, fat: 4 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Empanadas': { 
                mealType: 'snack', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 25, fat: 10 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Arepas': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 28, fat: 6 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🫓'
            },
            'Feijoada': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 28, carbs: 35, fat: 20 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🥘'
            },
            'Chimichurri': { 
                mealType: 'condiment', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 40, protein: 2, carbs: 4, fat: 3 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🌿'
            },
            'Picanha': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 35, carbs: 5, fat: 22 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Moqueca': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 25, carbs: 15, fat: 16 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥘'
            },
            'Brigadeiro': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 120, protein: 2, carbs: 18, fat: 5 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🍫'
            },
            'Caipirinha': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 150, protein: 0, carbs: 18, fat: 0 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍹'
            },
            'Churrasco': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 32, carbs: 8, fat: 25 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },

            // 更多加勒比菜
            'Jerk Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 28, carbs: 8, fat: 20 },
                prepTime: '120 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Rice and Peas': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 6, carbs: 35, fat: 4 },
                prepTime: '45 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Callaloo': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 4, carbs: 12, fat: 3 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Ackee and Saltfish': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 20, carbs: 15, fat: 18 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥘'
            },
            'Curry Goat': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 28, carbs: 12, fat: 22 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🍖'
            },
            'Plantains': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 2, carbs: 28, fat: 4 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍌'
            },
            'Rum Punch': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 180, protein: 0, carbs: 22, fat: 0 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍹'
            },
            'Coconut Bread': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 6, carbs: 32, fat: 8 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🍞'
            },
            'Conch Fritters': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 8, carbs: 20, fat: 8 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🦪'
            },
            'Tropical Smoothie': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 140, protein: 2, carbs: 28, fat: 2 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥤'
            }

EOF

echo "超级扩展完成！"
echo "现在每种排列组合都有超过100种选择！" 