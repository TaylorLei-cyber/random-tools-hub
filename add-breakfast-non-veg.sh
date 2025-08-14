#!/bin/bash

echo "正在添加Breakfast Non-Vegetarian选择..."

# 备份当前文件
cp random-food.html random-food.html.backup-non-veg

# 找到foodDatabase的正确结束位置（第1310行）
line_number=1310

# 在foodDatabase结束前添加更多早餐非素食选择
sed -i '' "${line_number}i\\
            // 更多早餐非素食选择\\
            'Bacon and Eggs': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 350, protein: 25, carbs: 5, fat: 28 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Easy',\\
                image: '🥓'\\
            },\\
            'Sausage Breakfast Sandwich': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 420, protein: 22, carbs: 35, fat: 24 },\\
                prepTime: '12 minutes',\\
                difficulty: 'Easy',\\
                image: '🌭'\\
            },\\
            'Ham and Cheese Omelette': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 380, protein: 28, carbs: 8, fat: 26 },\\
                prepTime: '18 minutes',\\
                difficulty: 'Medium',\\
                image: '🍳'\\
            },\\
            'Chorizo Breakfast Tacos': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'mexican',\\
                nutrition: { calories: 320, protein: 18, carbs: 28, fat: 18 },\\
                prepTime: '20 minutes',\\
                difficulty: 'Medium',\\
                image: '🌮'\\
            },\\
            'Salmon Bagel': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 380, protein: 24, carbs: 42, fat: 16 },\\
                prepTime: '8 minutes',\\
                difficulty: 'Easy',\\
                image: '🥯'\\
            },\\
            'Turkey Breakfast Wrap': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 340, protein: 26, carbs: 28, fat: 16 },\\
                prepTime: '10 minutes',\\
                difficulty: 'Easy',\\
                image: '🌯'\\
            },\\
            'Duck Confit Hash': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'french',\\
                nutrition: { calories: 450, protein: 22, carbs: 35, fat: 28 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🦆'\\
            },\\
            'Lobster Benedict': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 520, protein: 32, carbs: 25, fat: 34 },\\
                prepTime: '30 minutes',\\
                difficulty: 'Hard',\\
                image: '🦞'\\
            },\\
            'Crab Cake Breakfast': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'american',\\
                nutrition: { calories: 380, protein: 28, carbs: 18, fat: 24 },\\
                prepTime: '22 minutes',\\
                difficulty: 'Medium',\\
                image: '🦀'\\
            },\\
            'Shrimp and Grits': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'southern',\\
                nutrition: { calories: 420, protein: 24, carbs: 45, fat: 18 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🦐'\\
            },\\
            'Chicken and Waffles': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'american',\\
                nutrition: { calories: 580, protein: 32, carbs: 52, fat: 28 },\\
                prepTime: '30 minutes',\\
                difficulty: 'Medium',\\
                image: '🍗'\\
            },\\
            'Steak and Eggs': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 480, protein: 42, carbs: 8, fat: 32 },\\
                prepTime: '20 minutes',\\
                difficulty: 'Medium',\\
                image: '🥩'\\
            },\\
            'Pork Belly Breakfast Bowl': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'asian',\\
                nutrition: { calories: 520, protein: 28, carbs: 35, fat: 32 },\\
                prepTime: '35 minutes',\\
                difficulty: 'Hard',\\
                image: '🥓'\\
            },\\
            'Lamb Breakfast Sausage': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'mediterranean',\\
                nutrition: { calories: 380, protein: 24, carbs: 12, fat: 28 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Easy',\\
                image: '🐑'\\
            },\\
            'Venison Breakfast Steak': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'american',\\
                nutrition: { calories: 320, protein: 38, carbs: 5, fat: 18 },\\
                prepTime: '18 minutes',\\
                difficulty: 'Medium',\\
                image: '🦌'\\
            },\\
            'Quail Eggs Benedict': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 420, protein: 26, carbs: 25, fat: 28 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🥚'\\
            },\\
            'Duck Eggs Scramble': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 380, protein: 32, carbs: 8, fat: 26 },\\
                prepTime: '12 minutes',\\
                difficulty: 'Easy',\\
                image: '🥚'\\
            },\\
            'Goose Liver Toast': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'french',\\
                nutrition: { calories: 450, protein: 18, carbs: 28, fat: 32 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Easy',\\
                image: '🍞'\\
            },\\
            'Rabbit Breakfast Hash': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 320, protein: 28, carbs: 25, fat: 16 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🐰'\\
            },\\
            'Wild Boar Breakfast Sausage': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'european',\\
                nutrition: { calories: 420, protein: 26, carbs: 15, fat: 32 },\\
                prepTime: '20 minutes',\\
                difficulty: 'Medium',\\
                image: '🐗'\\
            },\\
            'Elk Breakfast Steak': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'american',\\
                nutrition: { calories: 280, protein: 42, carbs: 5, fat: 12 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Medium',\\
                image: '🦌'\\
            },\\
            'Bison Breakfast Bowl': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'american',\\
                nutrition: { calories: 380, protein: 36, carbs: 28, fat: 18 },\\
                prepTime: '22 minutes',\\
                difficulty: 'Medium',\\
                image: '🐃'\\
            },\\
            'Kangaroo Breakfast Sausage': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'australian',\\
                nutrition: { calories: 280, protein: 32, carbs: 8, fat: 14 },\\
                prepTime: '18 minutes',\\
                difficulty: 'Easy',\\
                image: '🦘'\\
            },\\
            'Ostrich Egg Omelette': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'african',\\
                nutrition: { calories: 580, protein: 48, carbs: 12, fat: 38 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🥚'\\
            },\\
            'Emu Breakfast Steak': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'australian',\\
                nutrition: { calories: 320, protein: 44, carbs: 5, fat: 16 },\\
                prepTime: '20 minutes',\\
                difficulty: 'Medium',\\
                image: '🦘'\\
            },\\
            'Alligator Breakfast Sausage': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'southern',\\
                nutrition: { calories: 340, protein: 28, carbs: 10, fat: 22 },\\
                prepTime: '18 minutes',\\
                difficulty: 'Easy',\\
                image: '🐊'\\
            },\\
" random-food.html

echo "Breakfast Non-Vegetarian选择添加完成！"
echo "现在有30个丰富的早餐非素食选择了！" 