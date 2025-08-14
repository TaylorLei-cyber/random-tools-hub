#!/bin/bash

echo "正在添加传统友好的Breakfast Non-Vegetarian选择..."

# 备份当前文件
cp random-food.html random-food.html.backup-friendly

# 找到foodDatabase的正确结束位置
line_number=$(grep -n "};" random-food.html | head -1 | cut -d: -f1)

# 在foodDatabase结束前添加更多友好的早餐非素食选择
sed -i '' "${line_number}i\\
            // 传统友好的早餐非素食选择\\
            'Classic Bacon and Eggs': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 380, protein: 28, carbs: 8, fat: 26 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Easy',\\
                image: '🥓'\\
            },\\
            'Sausage and Hash Browns': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 420, protein: 18, carbs: 32, fat: 28 },\\
                prepTime: '20 minutes',\\
                difficulty: 'Easy',\\
                image: '🥔'\\
            },\\
            'Ham and Cheese Croissant': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'french',\\
                nutrition: { calories: 360, protein: 16, carbs: 32, fat: 20 },\\
                prepTime: '8 minutes',\\
                difficulty: 'Easy',\\
                image: '🥐'\\
            },\\
            'Breakfast Sausage Links': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 280, protein: 20, carbs: 8, fat: 22 },\\
                prepTime: '12 minutes',\\
                difficulty: 'Easy',\\
                image: '🌭'\\
            },\\
            'Canadian Bacon Breakfast': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 320, protein: 24, carbs: 12, fat: 20 },\\
                prepTime: '10 minutes',\\
                difficulty: 'Easy',\\
                image: '🥓'\\
            },\\
            'Pepperoni Breakfast Pizza': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'italian',\\
                nutrition: { calories: 420, protein: 22, carbs: 38, fat: 24 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🍕'\\
            },\\
            'Breakfast Sausage Patty': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 240, protein: 18, carbs: 6, fat: 18 },\\
                prepTime: '8 minutes',\\
                difficulty: 'Easy',\\
                image: '🥩'\\
            },\\
            'Prosciutto and Eggs': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'italian',\\
                nutrition: { calories: 340, protein: 26, carbs: 6, fat: 24 },\\
                prepTime: '12 minutes',\\
                difficulty: 'Easy',\\
                image: '🥓'\\
            },\\
            'Breakfast Sausage Roll': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'british',\\
                nutrition: { calories: 380, protein: 16, carbs: 35, fat: 22 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Easy',\\
                image: '🥖'\\
            },\\
            'Bacon Breakfast Burrito': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'mexican',\\
                nutrition: { calories: 420, protein: 24, carbs: 32, fat: 26 },\\
                prepTime: '18 minutes',\\
                difficulty: 'Medium',\\
                image: '🌯'\\
            },\\
            'Sausage Breakfast Casserole': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 380, protein: 22, carbs: 25, fat: 24 },\\
                prepTime: '45 minutes',\\
                difficulty: 'Medium',\\
                image: '🍳'\\
            },\\
            'Ham Breakfast Sandwich': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 360, protein: 20, carbs: 28, fat: 20 },\\
                prepTime: '10 minutes',\\
                difficulty: 'Easy',\\
                image: '🥪'\\
            },\\
            'Bacon Breakfast Bowl': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 440, protein: 26, carbs: 28, fat: 30 },\\
                prepTime: '20 minutes',\\
                difficulty: 'Medium',\\
                image: '🥓'\\
            },\\
            'Sausage Breakfast Tacos': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'mexican',\\
                nutrition: { calories: 340, protein: 18, carbs: 25, fat: 20 },\\
                prepTime: '15 minutes',\\
                difficulty: 'Easy',\\
                image: '🌮'\\
            },\\
            'Bacon Breakfast Hash': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 400, protein: 20, carbs: 32, fat: 26 },\\
                prepTime: '25 minutes',\\
                difficulty: 'Medium',\\
                image: '🥓'\\
            },\\
            'Ham Breakfast Wrap': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 320, protein: 22, carbs: 25, fat: 18 },\\
                prepTime: '12 minutes',\\
                difficulty: 'Easy',\\
                image: '🌯'\\
            },\\
            'Sausage Breakfast Muffins': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 280, protein: 14, carbs: 28, fat: 16 },\\
                prepTime: '30 minutes',\\
                difficulty: 'Easy',\\
                image: '🧁'\\
            },\\
            'Bacon Breakfast Sandwich': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 380, protein: 24, carbs: 30, fat: 22 },\\
                prepTime: '12 minutes',\\
                difficulty: 'Easy',\\
                image: '🥪'\\
            },\\
            'Sausage Breakfast Skillet': {\\
                mealType: 'breakfast',\\
                lifestyle: 'non-vegetarian',\\
                category: 'western',\\
                nutrition: { calories: 460, protein: 26, carbs: 28, fat: 32 },\\
                prepTime: '22 minutes',\\
                difficulty: 'Medium',\\
                image: '🍳'\\
            },\\
" random-food.html

echo "传统友好的早餐非素食选择添加完成！"
echo "现在有更多传统友好的肉类选择了！" 