#!/bin/bash

echo "正在安全地添加食物选择..."

# 备份文件
cp random-food.html random-food.html.backup-safe

# 找到foodDatabase的结束位置
end_line=$(grep -n "};" random-food.html | head -1 | cut -d: -f1)

echo "找到foodDatabase结束位置: 第${end_line}行"

# 为每个组合添加一些食物（先少量测试）
# Breakfast Vegetarian (添加5个)
for i in {1..5}; do
    sed -i '' "${end_line}i\\
                    'Breakfast Veg $i': {\\
                        mealType: 'breakfast',\\
                        lifestyle: 'vegetarian',\\
                        category: 'western',\\
                        nutrition: { calories: $((200 + i * 5)), protein: $((8 + i)), carbs: $((25 + i * 2)), fat: $((5 + i)) },\\
                        prepTime: '$((10 + i)) minutes',\\
                        difficulty: 'Easy',\\
                        image: ''\\
                    },\\
    " random-food.html
    end_line=$((end_line + 8))
done

# Breakfast Non-Vegetarian (添加5个)
for i in {1..5}; do
    sed -i '' "${end_line}i\\
                    'Breakfast Non-Veg $i': {\\
                        mealType: 'breakfast',\\
                        lifestyle: 'non-vegetarian',\\
                        category: 'western',\\
                        nutrition: { calories: $((300 + i * 5)), protein: $((15 + i)), carbs: $((20 + i * 2)), fat: $((12 + i)) },\\
                        prepTime: '$((15 + i)) minutes',\\
                        difficulty: 'Easy',\\
                        image: ''\\
                    },\\
    " random-food.html
    end_line=$((end_line + 8))
done

echo "安全添加完成！现在测试按钮是否工作..." 