#!/bin/bash

# 修复所有剩余图片路径的脚本

echo "正在修复所有剩余的图片路径..."

# 备份原文件
cp random-food.html random-food.html.backup2

# 修复所有剩余的JPG图片路径为WebP格式
echo "更新所有中餐图片路径..."

# 使用现有的WebP图片作为所有中餐的备用
sed -i '' 's|images/food/chinese/hui-guo-rou.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/fu-qi-fei-pian.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/kou-shui-ji.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/shui-zhu-yu.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/gong-bao-ji-ding.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/siu-mai.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/har-gow.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/dim-sum.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/wonton-soup.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/bbq-pork.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/dong-an-chicken.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/stinky-tofu.jpg|images/food-webp/chinese/mapo-tofu.webp|g' random-food.html
sed -i '' 's|images/food/chinese/spicy-crayfish.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/hunan-beef.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/sweet-and-sour-fish.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/dezhou-braised-chicken.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/jiuzhuan-large-intestine.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/squirrel-fish.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/dongpo-pork.jpg|images/food-webp/chinese/braised-pork.webp|g' random-food.html
sed -i '' 's|images/food/chinese/hairy-crab.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/west-lake-fish.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/longjing-shrimp.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/buddha-jumps-over-the-wall.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/red-wine-chicken.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/hui-braised-pork.jpg|images/food-webp/chinese/braised-pork.webp|g' random-food.html
sed -i '' 's|images/food/chinese/hot-and-sour-soup.jpg|images/food-webp/chinese/mapo-tofu.webp|g' random-food.html
sed -i '' 's|images/food/chinese/egg-drop-soup.jpg|images/food-webp/chinese/mapo-tofu.webp|g' random-food.html
sed -i '' 's|images/food/chinese/spring-rolls.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/dumplings.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/steamed-buns.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html

echo "更新所有西餐图片路径..."

# 西餐图片路径
sed -i '' 's|images/food/western/escargot.jpg|images/food-webp/western/pizza.webp|g' random-food.html
sed -i '' 's|images/food/western/paella.jpg|images/food-webp/western/pizza.webp|g' random-food.html
sed -i '' 's|images/food/western/greek-salad.jpg|images/food-webp/western/salad.webp|g' random-food.html
sed -i '' 's|images/food/western/german-pork-knuckle.jpg|images/food-webp/western/steak.webp|g' random-food.html
sed -i '' 's|images/food/western/swiss-cheese-fondue.jpg|images/food-webp/western/pizza.webp|g' random-food.html
sed -i '' 's|images/food/western/fish-and-chips.jpg|images/food-webp/western/fish-and-chips.webp|g' random-food.html

echo "更新所有甜点图片路径..."

# 甜点图片路径
sed -i '' 's|images/food/dessert/mille-crepe-cake.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html
sed -i '' 's|images/food/dessert/mousse-cake.jpg|images/food-webp/dessert/chocolate-mousse.webp|g' random-food.html
sed -i '' 's|images/food/dessert/souffle.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html
sed -i '' 's|images/food/dessert/crepe.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html
sed -i '' 's|images/food/dessert/waffle.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html
sed -i '' 's|images/food/dessert/muffin.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html

echo "更新所有饮品图片路径..."

# 饮品图片路径
sed -i '' 's|images/food/drinks/cocktail.jpg|images/food-webp/drinks/bubble-tea.webp|g' random-food.html
sed -i '' 's|images/food/drinks/hot-chocolate.jpg|images/food-webp/drinks/latte.webp|g' random-food.html
sed -i '' 's|images/food/drinks/green-tea.jpg|images/food-webp/drinks/latte.webp|g' random-food.html
sed -i '' 's|images/food/drinks/black-tea.jpg|images/food-webp/drinks/latte.webp|g' random-food.html
sed -i '' 's|images/food/drinks/flower-tea.jpg|images/food-webp/drinks/latte.webp|g' random-food.html
sed -i '' 's|images/food/drinks/soy-milk.jpg|images/food-webp/drinks/latte.webp|g' random-food.html

echo "图片路径修复完成！"
echo "所有图片现在都使用WebP格式，缺失的图片使用合适的备用图片。" 