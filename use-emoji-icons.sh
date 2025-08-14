#!/bin/bash

# 使用emoji图标的脚本
# 确保食物名称与图片100%匹配

echo "正在将图片替换为emoji图标..."

# 备份原文件
cp random-food.html random-food.html.backup4

# 替换所有图片为emoji图标
echo "替换中餐图片为emoji..."

# 小笼包
sed -i '' '/Xiaolongbao/,/image:/ s|images/food-webp/chinese/.*\.webp|🍙|' random-food.html

# 宫保鸡丁
sed -i '' '/Kung Pao Chicken/,/image:/ s|images/food-webp/chinese/.*\.webp|🍗|' random-food.html

# 麻婆豆腐
sed -i '' '/Mapo Tofu/,/image:/ s|images/food-webp/chinese/.*\.webp|🧈|' random-food.html

# 水煮鱼
sed -i '' '/Boiled Fish/,/image:/ s|images/food-webp/chinese/.*\.webp|🐟|' random-food.html

# 炒饭
sed -i '' '/Fried Rice/,/image:/ s|images/food-webp/chinese/.*\.webp|🍚|' random-food.html

# 火锅
sed -i '' '/Chongqing Hot Pot/,/image:/ s|images/food-webp/chinese/.*\.webp|🍲|' random-food.html

# 北京烤鸭
sed -i '' '/Beijing Roast Duck/,/image:/ s|images/food-webp/chinese/.*\.webp|🦆|' random-food.html

# 饺子
sed -i '' '/Dumplings/,/image:/ s|images/food-webp/chinese/.*\.webp|🥟|' random-food.html

# 春卷
sed -i '' '/Spring Rolls/,/image:/ s|images/food-webp/chinese/.*\.webp|🌯|' random-food.html

# 面条
sed -i '' '/Zhajiang Noodles/,/image:/ s|images/food-webp/chinese/.*\.webp|🍜|' random-food.html
sed -i '' '/Lanzhou Hand-Pulled Noodles/,/image:/ s|images/food-webp/chinese/.*\.webp|🍜|' random-food.html

# 汤类
sed -i '' '/Hot and Sour Soup/,/image:/ s|images/food-webp/chinese/.*\.webp|🥣|' random-food.html
sed -i '' '/Egg Drop Soup/,/image:/ s|images/food-webp/chinese/.*\.webp|🥣|' random-food.html
sed -i '' '/Wonton Soup/,/image:/ s|images/food-webp/chinese/.*\.webp|🥣|' random-food.html

# 包子类
sed -i '' '/Char Siu Bao/,/image:/ s|images/food-webp/chinese/.*\.webp|🥟|' random-food.html
sed -i '' '/Steamed Buns/,/image:/ s|images/food-webp/chinese/.*\.webp|🥟|' random-food.html

# 其他中餐
sed -i '' '/Twice Cooked Pork/,/image:/ s|images/food-webp/chinese/.*\.webp|🥩|' random-food.html
sed -i '' '/Braised Pork/,/image:/ s|images/food-webp/chinese/.*\.webp|🥩|' random-food.html
sed -i '' '/Sweet and Sour Pork/,/image:/ s|images/food-webp/chinese/.*\.webp|🥩|' random-food.html

# 西餐
echo "替换西餐图片为emoji..."
sed -i '' '/Pizza/,/image:/ s|images/food-webp/western/.*\.webp|🍕|' random-food.html
sed -i '' '/Hamburger/,/image:/ s|images/food-webp/western/.*\.webp|🍔|' random-food.html
sed -i '' '/Steak/,/image:/ s|images/food-webp/western/.*\.webp|🥩|' random-food.html
sed -i '' '/Salad/,/image:/ s|images/food-webp/western/.*\.webp|🥗|' random-food.html
sed -i '' '/Sushi/,/image:/ s|images/food-webp/western/.*\.webp|🍣|' random-food.html
sed -i '' '/Taco/,/image:/ s|images/food-webp/western/.*\.webp|🌮|' random-food.html

# 甜点
echo "替换甜点图片为emoji..."
sed -i '' '/Tiramisu/,/image:/ s|images/food-webp/dessert/.*\.webp|🍰|' random-food.html
sed -i '' '/Macaron/,/image:/ s|images/food-webp/dessert/.*\.webp|🍪|' random-food.html
sed -i '' '/Cheesecake/,/image:/ s|images/food-webp/dessert/.*\.webp|🧀|' random-food.html
sed -i '' '/Ice Cream/,/image:/ s|images/food-webp/dessert/.*\.webp|🍨|' random-food.html

# 饮品
echo "替换饮品图片为emoji..."
sed -i '' '/Bubble Tea/,/image:/ s|images/food-webp/drinks/.*\.webp|🧋|' random-food.html
sed -i '' '/Latte/,/image:/ s|images/food-webp/drinks/.*\.webp|☕|' random-food.html
sed -i '' '/Lemonade/,/image:/ s|images/food-webp/drinks/.*\.webp|🍋|' random-food.html
sed -i '' '/Juice/,/image:/ s|images/food-webp/drinks/.*\.webp|🧃|' random-food.html
sed -i '' '/Cola/,/image:/ s|images/food-webp/drinks/.*\.webp|🥤|' random-food.html
sed -i '' '/Beer/,/image:/ s|images/food-webp/drinks/.*\.webp|🍺|' random-food.html
sed -i '' '/Red Wine/,/image:/ s|images/food-webp/drinks/.*\.webp|🍷|' random-food.html

echo "emoji图标替换完成！"
echo "现在每种食物都有对应的emoji图标，确保100%匹配。" 