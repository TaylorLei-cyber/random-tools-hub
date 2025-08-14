#!/bin/bash

# 添加更多西餐和国际菜系的脚本

echo "正在添加更多西餐和国际菜系..."

# 备份原文件
cp random-food.html random-food.html.backup9

# 在食物数据库中添加更多西餐
echo "添加更多西餐菜品..."

# 在现有数据库后添加更多菜品
cat >> random-food.html << 'EOF'

            // 更多意大利菜
            'Spaghetti Carbonara': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 650, protein: 25, carbs: 70, fat: 30 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🍝'
            },
            'Risotto': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 12, carbs: 55, fat: 8 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍚'
            },
            'Osso Buco': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 450, protein: 35, carbs: 20, fat: 25 },
                prepTime: '150 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Bruschetta': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 4, carbs: 15, fat: 6 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍞'
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
            'Pizza Margherita': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 12, carbs: 35, fat: 12 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍕'
            },
            'Lasagna': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 22, carbs: 35, fat: 18 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🍝'
            },
            'Fettuccine Alfredo': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 15, carbs: 45, fat: 22 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍝'
            },
            'Penne Arrabbiata': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 12, carbs: 55, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍝'
            },
            'Gnocchi': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 8, carbs: 48, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥔'
            },

            // 更多法国菜
            'Coq au Vin': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 32, carbs: 15, fat: 22 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🍗'
            },
            'Ratatouille': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 25, fat: 8 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍅'
            },
            'French Onion Soup': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 25, fat: 12 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥣'
            },
            'Croissant': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 260, protein: 6, carbs: 28, fat: 14 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🥐'
            },
            'Beef Bourguignon': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 35, carbs: 18, fat: 25 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Quiche Lorraine': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 15, carbs: 20, fat: 22 },
                prepTime: '75 minutes',
                difficulty: 'Medium',
                image: '🥧'
            },
            'Escargots': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 15, carbs: 2, fat: 6 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🐌'
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
            'Bouillabaisse': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 25, carbs: 12, fat: 15 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🥘'
            },
            'Tarte Tatin': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 4, carbs: 45, fat: 14 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🥧'
            },

            // 更多西班牙菜
            'Paella': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 450, protein: 28, carbs: 55, fat: 18 },
                prepTime: '60 minutes',
                difficulty: 'Hard',
                image: '🍚'
            },
            'Gazpacho': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 4, carbs: 18, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Spanish Tortilla': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 15, carbs: 20, fat: 18 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍳'
            },
            'Tapas': { 
                mealType: 'snack', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 12, carbs: 15, fat: 12 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥘'
            },
            'Churros': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 280, protein: 4, carbs: 45, fat: 10 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍩'
            },
            'Jamón Ibérico': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 25, carbs: 2, fat: 8 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥩'
            },
            'Patatas Bravas': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 4, carbs: 35, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥔'
            },
            'Sangria': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 150, protein: 0, carbs: 18, fat: 0 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🍷'
            },
            'Pulpo a la Gallega': { 
                mealType: 'appetizer', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 18, carbs: 2, fat: 4 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🐙'
            },
            'Flan': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 200, protein: 6, carbs: 25, fat: 8 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍮'
            },

            // 更多希腊菜
            'Greek Salad': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 8, carbs: 12, fat: 14 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Moussaka': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 25, carbs: 30, fat: 25 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍆'
            },
            'Souvlaki': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 28, carbs: 25, fat: 15 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🍖'
            },
            'Tzatziki': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 4, carbs: 6, fat: 5 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥒'
            },
            'Spanakopita': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 18, fat: 14 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥬'
            },
            'Dolmades': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 6, carbs: 15, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍃'
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
            'Greek Yogurt': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 15, carbs: 8, fat: 4 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🥛'
            },
            'Pastitsio': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 22, carbs: 35, fat: 18 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍝'
            },
            'Galaktoboureko': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 280, protein: 6, carbs: 32, fat: 14 },
                prepTime: '75 minutes',
                difficulty: 'Hard',
                image: '🍰'
            }

EOF

echo "西餐扩展完成！"
echo "现在包含了更多丰富的西餐菜品。" 