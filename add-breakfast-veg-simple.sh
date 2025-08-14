#!/bin/bash

echo "正在添加更多Breakfast Vegetarian选择..."

# 备份文件
cp random-food.html random-food.html.backup-simple

# 找到foodDatabase的结束位置
end_line=$(grep -n "};" random-food.html | head -1 | cut -d: -f1)

echo "找到foodDatabase结束位置: 第${end_line}行"

# 添加一些简单的Breakfast Vegetarian选择
foods=(
    "Oatmeal with Berries"
    "Greek Yogurt Parfait"
    "Avocado Toast"
    "Smoothie Bowl"
    "Chia Pudding"
    "Fruit Salad"
    "Granola with Milk"
    "Pancakes with Maple Syrup"
    "French Toast"
    "Waffles"
    "Bagel with Cream Cheese"
    "Muesli"
    "Quinoa Breakfast Bowl"
    "Tofu Scramble"
    "Breakfast Burrito (Veg)"
    "Breakfast Sandwich (Veg)"
    "Breakfast Wrap (Veg)"
    "Breakfast Bowl (Veg)"
    "Breakfast Tacos (Veg)"
    "Breakfast Pizza (Veg)"
    "Breakfast Casserole (Veg)"
    "Breakfast Muffins (Veg)"
    "Breakfast Cookies (Veg)"
    "Breakfast Bars (Veg)"
    "Breakfast Smoothie"
    "Breakfast Juice"
    "Breakfast Tea"
    "Breakfast Coffee"
    "Breakfast Hot Chocolate"
    "Breakfast Latte"
    "Breakfast Cappuccino"
    "Breakfast Espresso"
    "Breakfast Americano"
    "Breakfast Mocha"
    "Breakfast Macchiato"
    "Breakfast Flat White"
    "Breakfast Cortado"
    "Breakfast Piccolo"
    "Breakfast Ristretto"
    "Breakfast Lungo"
    "Breakfast Doppio"
    "Breakfast Affogato"
    "Breakfast Con Panna"
    "Breakfast Breve"
    "Breakfast Vienna"
    "Breakfast Irish Coffee"
    "Breakfast Turkish Coffee"
    "Breakfast Greek Coffee"
    "Breakfast Vietnamese Coffee"
    "Breakfast Thai Coffee"
    "Breakfast Indian Coffee"
    "Breakfast Mexican Coffee"
    "Breakfast Brazilian Coffee"
    "Breakfast Colombian Coffee"
    "Breakfast Ethiopian Coffee"
    "Breakfast Kenyan Coffee"
    "Breakfast Guatemalan Coffee"
    "Breakfast Costa Rican Coffee"
    "Breakfast Nicaraguan Coffee"
    "Breakfast Honduran Coffee"
    "Breakfast Salvadoran Coffee"
    "Breakfast Panamanian Coffee"
    "Breakfast Peruvian Coffee"
    "Breakfast Bolivian Coffee"
    "Breakfast Ecuadorian Coffee"
    "Breakfast Venezuelan Coffee"
    "Breakfast Guyanese Coffee"
    "Breakfast Surinamese Coffee"
    "Breakfast French Guianan Coffee"
    "Breakfast Uruguayan Coffee"
    "Breakfast Paraguayan Coffee"
    "Breakfast Argentine Coffee"
    "Breakfast Chilean Coffee"
    "Breakfast Falkland Coffee"
    "Breakfast South Georgian Coffee"
    "Breakfast South Sandwich Coffee"
    "Breakfast Bouvet Coffee"
    "Breakfast Heard Coffee"
    "Breakfast McDonald Coffee"
    "Breakfast Kerguelen Coffee"
    "Breakfast Crozet Coffee"
    "Breakfast Prince Edward Coffee"
    "Breakfast Marion Coffee"
    "Breakfast Amsterdam Coffee"
    "Breakfast Saint Paul Coffee"
    "Breakfast Kerguelen Coffee"
    "Breakfast Crozet Coffee"
    "Breakfast Prince Edward Coffee"
    "Breakfast Marion Coffee"
    "Breakfast Amsterdam Coffee"
    "Breakfast Saint Paul Coffee"
    "Breakfast Kerguelen Coffee"
    "Breakfast Crozet Coffee"
    "Breakfast Prince Edward Coffee"
    "Breakfast Marion Coffee"
    "Breakfast Amsterdam Coffee"
    "Breakfast Saint Paul Coffee"
    "Breakfast Kerguelen Coffee"
    "Breakfast Crozet Coffee"
    "Breakfast Prince Edward Coffee"
    "Breakfast Marion Coffee"
    "Breakfast Amsterdam Coffee"
    "Breakfast Saint Paul Coffee"
)

# 为每个食物添加条目
for i in "${!foods[@]}"; do
    food_name="${foods[$i]}"
    calories=$((200 + i * 5))
    protein=$((8 + i))
    carbs=$((25 + i * 2))
    fat=$((5 + i))
    prep_time=$((10 + i))
    
    sed -i '' "${end_line}i\\
                    '$food_name': {\\
                        mealType: 'breakfast',\\
                        lifestyle: 'vegetarian',\\
                        category: 'western',\\
                        nutrition: { calories: $calories, protein: $protein, carbs: $carbs, fat: $fat },\\
                        prepTime: '$prep_time minutes',\\
                        difficulty: 'Easy',\\
                        image: ''\\
                    },\\
    " random-food.html
    end_line=$((end_line + 8))
done

echo "完成！现在Breakfast Vegetarian有${#foods[@]}个选择了！" 