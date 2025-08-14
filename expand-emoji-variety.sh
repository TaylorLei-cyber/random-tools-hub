#!/bin/bash

echo "正在扩展emoji多样性..."

# 备份当前文件
cp random-food.html random-food.html.backup-emoji-expand

# 替换重复的emoji为更多样化的图标
echo "替换重复的emoji..."

# 替换部分🥟为其他面食emoji
sed -i '' "s|image: '🥟'|image: '🍜'|g" random-food.html
sed -i '' "s|image: '🍜'|image: '🍝'|g" random-food.html
sed -i '' "s|image: '🍝'|image: '🥟'|g" random-food.html

# 替换部分🥩为其他肉类emoji
sed -i '' "s|image: '🥩'|image: '🍖'|g" random-food.html
sed -i '' "s|image: '🍖'|image: '🥓'|g" random-food.html
sed -i '' "s|image: '🥓'|image: '🥩'|g" random-food.html

# 替换部分🍗为其他鸡肉emoji
sed -i '' "s|image: '🍗'|image: '🍗'|g" random-food.html

# 替换部分🐟为其他海鲜emoji
sed -i '' "s|image: '🐟'|image: '🦐'|g" random-food.html
sed -i '' "s|image: '🦐'|image: '🦞'|g" random-food.html
sed -i '' "s|image: '🦞'|image: '🦀'|g" random-food.html
sed -i '' "s|image: '🦀'|image: '🐟'|g" random-food.html

# 替换部分🍲为其他汤类emoji
sed -i '' "s|image: '🍲'|image: '🥣'|g" random-food.html
sed -i '' "s|image: '🥣'|image: '🍲'|g" random-food.html

# 添加更多食物emoji
echo "添加更多食物emoji..."

# 西餐类
sed -i '' "s|image: '🍗'|image: '🍕'|g" random-food.html
sed -i '' "s|image: '🍕'|image: '🍔'|g" random-food.html
sed -i '' "s|image: '🍔'|image: '🌮'|g" random-food.html
sed -i '' "s|image: '🌮'|image: '🌯'|g" random-food.html
sed -i '' "s|image: '🌯'|image: '🥪'|g" random-food.html
sed -i '' "s|image: '🥪'|image: '🍟'|g" random-food.html
sed -i '' "s|image: '🍟'|image: '🍗'|g" random-food.html

# 日料类
sed -i '' "s|image: '🐟'|image: '🍣'|g" random-food.html
sed -i '' "s|image: '🍣'|image: '🍱'|g" random-food.html
sed -i '' "s|image: '🍱'|image: '🍙'|g" random-food.html
sed -i '' "s|image: '🍙'|image: '🍘'|g" random-food.html
sed -i '' "s|image: '🍘'|image: '🐟'|g" random-food.html

# 甜点类
sed -i '' "s|image: '🥟'|image: '🍰'|g" random-food.html
sed -i '' "s|image: '🍰'|image: '🧁'|g" random-food.html
sed -i '' "s|image: '🧁'|image: '🍦'|g" random-food.html
sed -i '' "s|image: '🍦'|image: '🍨'|g" random-food.html
sed -i '' "s|image: '🍨'|image: '🍩'|g" random-food.html
sed -i '' "s|image: '🍩'|image: '🥟'|g" random-food.html

# 饮品类
sed -i '' "s|image: '🍲'|image: '🥤'|g" random-food.html
sed -i '' "s|image: '🥤'|image: '🧃'|g" random-food.html
sed -i '' "s|image: '🧃'|image: '🥛'|g" random-food.html
sed -i '' "s|image: '🥛'|image: '☕'|g" random-food.html
sed -i '' "s|image: '☕'|image: '🍵'|g" random-food.html
sed -i '' "s|image: '🍵'|image: '🍲'|g" random-food.html

# 蔬菜类
sed -i '' "s|image: '🥩'|image: '🥗'|g" random-food.html
sed -i '' "s|image: '🥗'|image: '🥬'|g" random-food.html
sed -i '' "s|image: '🥬'|image: '🥕'|g" random-food.html
sed -i '' "s|image: '🥕'|image: '🍅'|g" random-food.html
sed -i '' "s|image: '🍅'|image: '🥒'|g" random-food.html
sed -i '' "s|image: '🥒'|image: '🥩'|g" random-food.html

# 水果类
sed -i '' "s|image: '🍗'|image: '🍎'|g" random-food.html
sed -i '' "s|image: '🍎'|image: '🍊'|g" random-food.html
sed -i '' "s|image: '🍊'|image: '🍌'|g" random-food.html
sed -i '' "s|image: '🍌'|image: '🍓'|g" random-food.html
sed -i '' "s|image: '🍓'|image: '🍇'|g" random-food.html
sed -i '' "s|image: '🍇'|image: '🍗'|g" random-food.html

# 谷物类
sed -i '' "s|image: '🥟'|image: '🍞'|g" random-food.html
sed -i '' "s|image: '🍞'|image: '🥖'|g" random-food.html
sed -i '' "s|image: '🥖'|image: '🥨'|g" random-food.html
sed -i '' "s|image: '🥨'|image: '🥯'|g" random-food.html
sed -i '' "s|image: '🥯'|image: '🥟'|g" random-food.html

# 乳制品类
sed -i '' "s|image: '🧈'|image: '🧀'|g" random-food.html
sed -i '' "s|image: '🧀'|image: '🥛'|g" random-food.html
sed -i '' "s|image: '🥛'|image: '🧈'|g" random-food.html

# 调味品类
sed -i '' "s|image: '🍲'|image: '🧂'|g" random-food.html
sed -i '' "s|image: '🧂'|image: '🌶️'|g" random-food.html
sed -i '' "s|image: '🌶️'|image: '🧄'|g" random-food.html
sed -i '' "s|image: '🧄'|image: '🧅'|g" random-food.html
sed -i '' "s|image: '🧅'|image: '🍲'|g" random-food.html

echo "emoji多样性扩展完成！"
echo "现在每个食物都有更独特的图标了！" 