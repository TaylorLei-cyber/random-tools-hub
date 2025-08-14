#!/bin/bash

# 添加更多国际菜系的脚本

echo "正在添加更多国际菜系..."

# 备份原文件
cp random-food.html random-food.html.backup10

# 在食物数据库中添加更多国际菜系
echo "添加更多国际菜系..."

# 在现有数据库后添加更多菜品
cat >> random-food.html << 'EOF'

            // 更多墨西哥菜
            'Enchiladas': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 22, carbs: 35, fat: 18 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🌮'
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
            'Quesadilla': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 18, carbs: 25, fat: 20 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🧀'
            },
            'Tacos': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 18, carbs: 25, fat: 15 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🌮'
            },
            'Burrito': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 450, protein: 25, carbs: 45, fat: 20 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🌯'
            },
            'Fajitas': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 28, carbs: 20, fat: 16 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Salsa': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 40, protein: 2, carbs: 6, fat: 1 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🍅'
            },
            'Mexican Rice': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 4, carbs: 32, fat: 4 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍚'
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
            'Horchata': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 2, carbs: 22, fat: 2 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },

            // 更多印度菜
            'Butter Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 420, protein: 28, carbs: 15, fat: 30 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Palak Paneer': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 15, carbs: 12, fat: 20 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🧀'
            },
            'Biryani': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 450, protein: 25, carbs: 65, fat: 15 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🍚'
            },
            'Naan Bread': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 180, protein: 6, carbs: 30, fat: 4 },
                prepTime: '120 minutes',
                difficulty: 'Medium',
                image: '🫓'
            },
            'Tandoori Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 35, carbs: 8, fat: 12 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Dal Makhani': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 12, carbs: 25, fat: 8 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🫘'
            },
            'Samosa': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 6, carbs: 20, fat: 8 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Roti': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 4, carbs: 20, fat: 3 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🫓'
            },
            'Gulab Jamun': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 200, protein: 4, carbs: 28, fat: 8 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍯'
            },
            'Masala Chai': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 80, protein: 2, carbs: 12, fat: 3 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '☕'
            },

            // 更多日本菜
            'Sushi Roll': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 8, carbs: 35, fat: 4 },
                prepTime: '45 minutes',
                difficulty: 'Hard',
                image: '🍣'
            },
            'Ramen': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 18, carbs: 55, fat: 12 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍜'
            },
            'Tempura': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 8, carbs: 35, fat: 12 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🍤'
            },
            'Miso Soup': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 6, carbs: 8, fat: 4 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Teriyaki Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 32, carbs: 15, fat: 12 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Onigiri': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 160, protein: 4, carbs: 28, fat: 3 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍙'
            },
            'Udon': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 12, carbs: 55, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Sashimi': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 20, carbs: 2, fat: 4 },
                prepTime: '15 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Mochi': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 100, protein: 2, carbs: 18, fat: 2 },
                prepTime: '60 minutes',
                difficulty: 'Hard',
                image: '🍡'
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

            // 更多泰国菜
            'Pad Thai': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 15, carbs: 45, fat: 15 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🍜'
            },
            'Green Curry': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 18, carbs: 15, fat: 20 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🍛'
            },
            'Tom Yum Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 12, carbs: 8, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Mango Sticky Rice': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 320, protein: 4, carbs: 65, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥭'
            },
            'Som Tam': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 4, carbs: 12, fat: 2 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥗'
            },
            'Massaman Curry': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 20, carbs: 18, fat: 22 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍛'
            },
            'Thai Iced Tea': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 180, protein: 2, carbs: 28, fat: 6 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '🥤'
            },
            'Pad See Ew': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 18, carbs: 48, fat: 15 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Thai Basil Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 25, carbs: 12, fat: 16 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍗'
            },
            'Coconut Ice Cream': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 200, protein: 2, carbs: 25, fat: 10 },
                prepTime: '240 minutes',
                difficulty: 'Medium',
                image: '🍨'
            },

            // 更多韩国菜
            'Bibimbap': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 20, carbs: 45, fat: 15 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🍚'
            },
            'Kimchi': { 
                mealType: 'side', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 40, protein: 2, carbs: 6, fat: 1 },
                prepTime: '1440 minutes',
                difficulty: 'Medium',
                image: '🥬'
            },
            'Bulgogi': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 28, carbs: 15, fat: 18 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Tteokbokki': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 200, protein: 6, carbs: 35, fat: 4 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍡'
            },
            'Japchae': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 8, carbs: 45, fat: 8 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍜'
            },
            'Samgyeopsal': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 25, carbs: 8, fat: 25 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥩'
            },
            'Kimbap': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 220, protein: 8, carbs: 35, fat: 6 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍙'
            },
            'Doenjang Jjigae': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 10, carbs: 8, fat: 6 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Hotteok': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 180, protein: 4, carbs: 28, fat: 6 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥞'
            },
            'Makgeolli': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 2, carbs: 15, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🍶'
            },

            // 更多越南菜
            'Pho': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 22, carbs: 35, fat: 8 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🍜'
            },
            'Banh Mi': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 320, protein: 15, carbs: 40, fat: 12 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥖'
            },
            'Spring Rolls': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 120, protein: 4, carbs: 18, fat: 4 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🌯'
            },
            'Bun Cha': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 350, protein: 25, carbs: 35, fat: 15 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍜'
            },
            'Com Tam': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'western',
                nutrition: { calories: 380, protein: 20, carbs: 45, fat: 12 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Ca Phe Sua Da': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 80, protein: 2, carbs: 12, fat: 3 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '☕'
            },
            'Banh Xeo': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 280, protein: 8, carbs: 35, fat: 12 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🥞'
            },
            'Goi Cuon': { 
                mealType: 'appetizer', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 80, protein: 6, carbs: 12, fat: 2 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🌯'
            },
            'Che': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 120, protein: 2, carbs: 22, fat: 2 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🍮'
            },
            'Nuoc Mam': { 
                mealType: 'condiment', 
                lifestyle: 'vegetarian', 
                category: 'western',
                nutrition: { calories: 20, protein: 4, carbs: 1, fat: 0 },
                prepTime: '5 minutes',
                difficulty: 'Easy',
                image: '🧂'
            }

EOF

echo "国际菜系扩展完成！"
echo "现在包含了更多丰富的国际菜品。" 