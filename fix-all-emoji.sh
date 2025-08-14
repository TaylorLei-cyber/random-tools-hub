#!/bin/bash

# 全面修复所有图片为emoji的脚本

echo "正在全面修复所有图片为emoji..."

# 备份原文件
cp random-food.html random-food.html.backup6

# 替换所有剩余的图片路径为emoji
echo "替换所有中餐图片路径..."

# 将所有中餐图片路径替换为emoji
sed -i '' 's|images/food-webp/chinese/kung-pao-chicken.webp|🍗|g' random-food.html
sed -i '' 's|images/food-webp/chinese/boiled-fish.webp|🐟|g' random-food.html
sed -i '' 's|images/food-webp/chinese/mapo-tofu.webp|🧈|g' random-food.html
sed -i '' 's|images/food-webp/chinese/braised-pork.webp|🥩|g' random-food.html
sed -i '' 's|images/food-webp/chinese/fried-rice.webp|🍚|g' random-food.html
sed -i '' 's|images/food-webp/chinese/twice-cooked-pork.webp|🥩|g' random-food.html
sed -i '' 's|images/food-webp/chinese/chongqing-hotpot.webp|🍲|g' random-food.html

# 替换所有西餐图片路径
echo "替换所有西餐图片路径..."
sed -i '' 's|images/food-webp/western/pizza.webp|🍕|g' random-food.html
sed -i '' 's|images/food-webp/western/hamburger.webp|🍔|g' random-food.html
sed -i '' 's|images/food-webp/western/steak.webp|🥩|g' random-food.html
sed -i '' 's|images/food-webp/western/salad.webp|🥗|g' random-food.html
sed -i '' 's|images/food-webp/western/sushi.webp|🍣|g' random-food.html
sed -i '' 's|images/food-webp/western/taco.webp|🌮|g' random-food.html
sed -i '' 's|images/food-webp/western/fish-and-chips.webp|🐟|g' random-food.html

# 替换所有甜点图片路径
echo "替换所有甜点图片路径..."
sed -i '' 's|images/food-webp/dessert/tiramisu.webp|🍰|g' random-food.html
sed -i '' 's|images/food-webp/dessert/macaron.webp|🍪|g' random-food.html
sed -i '' 's|images/food-webp/dessert/cheesecake.webp|🧀|g' random-food.html
sed -i '' 's|images/food-webp/dessert/ice-cream.webp|🍨|g' random-food.html
sed -i '' 's|images/food-webp/dessert/chocolate-mousse.webp|🍫|g' random-food.html

# 替换所有饮品图片路径
echo "替换所有饮品图片路径..."
sed -i '' 's|images/food-webp/drinks/bubble-tea.webp|🧋|g' random-food.html
sed -i '' 's|images/food-webp/drinks/latte.webp|☕|g' random-food.html
sed -i '' 's|images/food-webp/drinks/lemonade.webp|🍋|g' random-food.html
sed -i '' 's|images/food-webp/drinks/juice.webp|🧃|g' random-food.html
sed -i '' 's|images/food-webp/drinks/cola.webp|🥤|g' random-food.html
sed -i '' 's|images/food-webp/drinks/beer.webp|🍺|g' random-food.html
sed -i '' 's|images/food-webp/drinks/red-wine.webp|🍷|g' random-food.html

# 特殊处理一些食物
echo "特殊处理特定食物..."

# 大闸蟹
sed -i '' '/Hairy Crab/,/image:/ s|🍗|🦀|' random-food.html
sed -i '' '/Hairy Crab/,/image:/ s|🐟|🦀|' random-food.html

# 小笼包
sed -i '' '/Xiaolongbao/,/image:/ s|🍗|🍙|' random-food.html
sed -i '' '/Xiaolongbao/,/image:/ s|🐟|🍙|' random-food.html

# 饺子
sed -i '' '/Dumplings/,/image:/ s|🍗|🥟|' random-food.html
sed -i '' '/Dumplings/,/image:/ s|🐟|🥟|' random-food.html

# 春卷
sed -i '' '/Spring Rolls/,/image:/ s|🍗|🌯|' random-food.html
sed -i '' '/Spring Rolls/,/image:/ s|🐟|🌯|' random-food.html

# 面条
sed -i '' '/Zhajiang Noodles/,/image:/ s|🍗|🍜|' random-food.html
sed -i '' '/Zhajiang Noodles/,/image:/ s|🐟|🍜|' random-food.html
sed -i '' '/Lanzhou Hand-Pulled Noodles/,/image:/ s|🍗|🍜|' random-food.html
sed -i '' '/Lanzhou Hand-Pulled Noodles/,/image:/ s|🐟|🍜|' random-food.html

# 汤类
sed -i '' '/Hot and Sour Soup/,/image:/ s|🧈|🥣|' random-food.html
sed -i '' '/Egg Drop Soup/,/image:/ s|🧈|🥣|' random-food.html
sed -i '' '/Wonton Soup/,/image:/ s|🍗|🥣|' random-food.html
sed -i '' '/Wonton Soup/,/image:/ s|🐟|🥣|' random-food.html

echo "所有图片路径修复完成！"
echo "现在所有食物都显示正确的emoji图标了。" 