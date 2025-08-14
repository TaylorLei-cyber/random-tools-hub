#!/bin/bash

# 大幅扩展食物数据库的脚本
# 添加更多菜品种类

echo "正在大幅扩展食物数据库..."

# 备份原文件
cp random-food.html random-food.html.backup8

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
            'Shui Zhu Yu': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 220, protein: 35, carbs: 5, fat: 8 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Kou Shui Ji': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 200, protein: 25, carbs: 5, fat: 10 },
                prepTime: '50 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Fu Qi Fei Pian': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 220, protein: 18, carbs: 8, fat: 15 },
                prepTime: '60 minutes',
                difficulty: 'Hard',
                image: '🍗'
            },
            'Hui Guo Rou': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 380, protein: 22, carbs: 15, fat: 25 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Suan Cai Yu': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 28, carbs: 8, fat: 6 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Liang Ban Ji': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 160, protein: 22, carbs: 5, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍗'
            },
            'Yu Xiang Qie Zi': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 140, protein: 4, carbs: 18, fat: 8 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍆'
            },

            // 更多粤菜
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
            'BBQ Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 380, protein: 32, carbs: 12, fat: 22 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Sweet and Sour Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 320, protein: 18, carbs: 35, fat: 15 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Steamed Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 32, carbs: 2, fat: 6 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🐟'
            },
            'Chicken Feet': { 
                mealType: 'snack', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 15, carbs: 2, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Egg Tarts': { 
                mealType: 'dessert', 
                lifestyle: 'vegetarian', 
                category: 'dessert',
                nutrition: { calories: 180, protein: 4, carbs: 22, fat: 8 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥧'
            },
            'Milk Tea': { 
                mealType: 'drink', 
                lifestyle: 'vegetarian', 
                category: 'drinks',
                nutrition: { calories: 120, protein: 2, carbs: 18, fat: 4 },
                prepTime: '10 minutes',
                difficulty: 'Easy',
                image: '☕'
            },

            // 更多湘菜
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
            'Spicy Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 260, protein: 30, carbs: 8, fat: 12 },
                prepTime: '30 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Pickled Vegetables': { 
                mealType: 'snack', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 40, protein: 2, carbs: 6, fat: 1 },
                prepTime: '1440 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Spicy Tofu': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 140, protein: 12, carbs: 8, fat: 8 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🧈'
            },
            'Hunan Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 200, protein: 28, carbs: 6, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Spicy Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 22, carbs: 10, fat: 18 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Hunan Duck': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 320, protein: 25, carbs: 8, fat: 22 },
                prepTime: '60 minutes',
                difficulty: 'Hard',
                image: '🦆'
            },

            // 更多鲁菜
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
            'Braised Sea Cucumber': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 25, carbs: 2, fat: 2 },
                prepTime: '180 minutes',
                difficulty: 'Hard',
                image: '🦑'
            },
            'Shandong Dumplings': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 220, protein: 12, carbs: 35, fat: 6 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Shandong Noodles': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 15, carbs: 45, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Braised Abalone': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 150, protein: 28, carbs: 3, fat: 4 },
                prepTime: '240 minutes',
                difficulty: 'Hard',
                image: '🦪'
            },
            'Shandong Pancake': { 
                mealType: 'breakfast', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 6, carbs: 28, fat: 6 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🥞'
            },
            'Braised Pork Belly': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 450, protein: 25, carbs: 8, fat: 35 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Shandong Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 15, carbs: 8, fat: 6 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥣'
            },

            // 更多苏菜
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
            'Lion\'s Head Meatballs': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 320, protein: 25, carbs: 8, fat: 22 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Jiangsu Dumplings': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 200, protein: 10, carbs: 32, fat: 6 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Braised Fish Head': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 220, protein: 30, carbs: 5, fat: 10 },
                prepTime: '90 minutes',
                difficulty: 'Hard',
                image: '🐟'
            },
            'Jiangsu Noodles': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 260, protein: 12, carbs: 42, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Steamed Crab': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 160, protein: 22, carbs: 1, fat: 8 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🦀'
            },
            'Jiangsu Rice': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 200, protein: 4, carbs: 38, fat: 4 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Braised Vegetables': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 6, carbs: 18, fat: 4 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },

            // 更多浙菜
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
            'Dongpo Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 200, protein: 28, carbs: 6, fat: 8 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Zhejiang Rice': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 4, carbs: 35, fat: 2 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Braised Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 32, carbs: 6, fat: 15 },
                prepTime: '60 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Zhejiang Noodles': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 240, protein: 12, carbs: 38, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Steamed Vegetables': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 80, protein: 4, carbs: 12, fat: 2 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Zhejiang Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 100, protein: 12, carbs: 6, fat: 4 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Braised Tofu': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 10, carbs: 8, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🧈'
            },
            'Zhejiang Dumplings': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 160, protein: 8, carbs: 25, fat: 4 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },

            // 更多闽菜
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
            'Fujian Fried Rice': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 320, protein: 12, carbs: 48, fat: 10 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Braised Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 380, protein: 28, carbs: 8, fat: 25 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🥩'
            },
            'Fujian Noodles': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 15, carbs: 42, fat: 8 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Steamed Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 30, carbs: 2, fat: 6 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🐟'
            },
            'Fujian Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 15, carbs: 8, fat: 6 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🥣'
            },
            'Braised Vegetables': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 100, protein: 6, carbs: 15, fat: 3 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Fujian Dumplings': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 180, protein: 10, carbs: 28, fat: 5 },
                prepTime: '45 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Red Wine Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 140, protein: 12, carbs: 10, fat: 6 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🥣'
            },

            // 更多徽菜
            'Hui Braised Pork': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 380, protein: 28, carbs: 10, fat: 25 },
                prepTime: '120 minutes',
                difficulty: 'Hard',
                image: '🥩'
            },
            'Anhui Fish': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 200, protein: 28, carbs: 6, fat: 8 },
                prepTime: '35 minutes',
                difficulty: 'Medium',
                image: '🐟'
            },
            'Hui Braised Chicken': { 
                mealType: 'dinner', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 280, protein: 32, carbs: 6, fat: 15 },
                prepTime: '90 minutes',
                difficulty: 'Medium',
                image: '🍗'
            },
            'Anhui Rice': { 
                mealType: 'lunch', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 160, protein: 3, carbs: 32, fat: 2 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🍚'
            },
            'Braised Tofu': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 120, protein: 10, carbs: 8, fat: 6 },
                prepTime: '25 minutes',
                difficulty: 'Easy',
                image: '🧈'
            },
            'Anhui Noodles': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 220, protein: 10, carbs: 35, fat: 6 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🍜'
            },
            'Hui Soup': { 
                mealType: 'lunch', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 100, protein: 12, carbs: 6, fat: 4 },
                prepTime: '30 minutes',
                difficulty: 'Easy',
                image: '🥣'
            },
            'Steamed Vegetables': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 80, protein: 4, carbs: 12, fat: 2 },
                prepTime: '15 minutes',
                difficulty: 'Easy',
                image: '🥬'
            },
            'Anhui Dumplings': { 
                mealType: 'breakfast', 
                lifestyle: 'non-vegetarian', 
                category: 'chinese',
                nutrition: { calories: 160, protein: 8, carbs: 25, fat: 4 },
                prepTime: '40 minutes',
                difficulty: 'Medium',
                image: '🥟'
            },
            'Braised Vegetables': { 
                mealType: 'dinner', 
                lifestyle: 'vegetarian', 
                category: 'chinese',
                nutrition: { calories: 90, protein: 5, carbs: 12, fat: 3 },
                prepTime: '20 minutes',
                difficulty: 'Easy',
                image: '🥬'
            }

EOF

echo "中餐扩展完成！"
echo "现在包含了更多丰富的中餐菜品。" 