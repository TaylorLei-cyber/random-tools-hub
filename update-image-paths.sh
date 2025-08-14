#!/bin/bash

# 更新图片路径为WebP格式的脚本

echo "正在更新图片路径为WebP格式..."

# 备份原文件
cp random-food.html random-food.html.backup

# 更新中餐图片路径
sed -i '' 's|images/food/chinese/kung-pao-chicken.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/mapo-tofu.jpg|images/food-webp/chinese/mapo-tofu.webp|g' random-food.html
sed -i '' 's|images/food/chinese/twice-cooked-pork.jpg|images/food-webp/chinese/twice-cooked-pork.webp|g' random-food.html
sed -i '' 's|images/food/chinese/braised-pork.jpg|images/food-webp/chinese/braised-pork.webp|g' random-food.html
sed -i '' 's|images/food/chinese/chongqing-hot-pot.jpg|images/food-webp/chinese/chongqing-hotpot.webp|g' random-food.html
sed -i '' 's|images/food/chinese/boiled-fish.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html
sed -i '' 's|images/food/chinese/fried-rice.jpg|images/food-webp/chinese/fried-rice.webp|g' random-food.html

# 更新西餐图片路径
sed -i '' 's|images/food/western/pizza.jpg|images/food-webp/western/pizza.webp|g' random-food.html
sed -i '' 's|images/food/western/hamburger.jpg|images/food-webp/western/hamburger.webp|g' random-food.html
sed -i '' 's|images/food/western/steak.jpg|images/food-webp/western/steak.webp|g' random-food.html
sed -i '' 's|images/food/western/salad.jpg|images/food-webp/western/salad.webp|g' random-food.html
sed -i '' 's|images/food/western/sushi.jpg|images/food-webp/western/sushi.webp|g' random-food.html
sed -i '' 's|images/food/western/taco.jpg|images/food-webp/western/taco.webp|g' random-food.html

# 更新甜点图片路径
sed -i '' 's|images/food/dessert/tiramisu.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html
sed -i '' 's|images/food/dessert/macaron.jpg|images/food-webp/dessert/macaron.webp|g' random-food.html
sed -i '' 's|images/food/dessert/cheesecake.jpg|images/food-webp/dessert/cheesecake.webp|g' random-food.html
sed -i '' 's|images/food/dessert/chocolate-mousse.jpg|images/food-webp/dessert/chocolate-mousse.webp|g' random-food.html
sed -i '' 's|images/food/dessert/ice-cream.jpg|images/food-webp/dessert/ice-cream.webp|g' random-food.html
sed -i '' 's|images/food/dessert/pudding.jpg|images/food-webp/dessert/pudding.webp|g' random-food.html

# 更新饮品图片路径
sed -i '' 's|images/food/drinks/bubble-tea.jpg|images/food-webp/drinks/bubble-tea.webp|g' random-food.html
sed -i '' 's|images/food/drinks/latte.jpg|images/food-webp/drinks/latte.webp|g' random-food.html
sed -i '' 's|images/food/drinks/lemonade.jpg|images/food-webp/drinks/lemonade.webp|g' random-food.html
sed -i '' 's|images/food/drinks/juice.jpg|images/food-webp/drinks/juice.webp|g' random-food.html
sed -i '' 's|images/food/drinks/cola.jpg|images/food-webp/drinks/cola.webp|g' random-food.html
sed -i '' 's|images/food/drinks/beer.jpg|images/food-webp/drinks/beer.webp|g' random-food.html
sed -i '' 's|images/food/drinks/red-wine.jpg|images/food-webp/drinks/red-wine.webp|g' random-food.html

# 为缺失的图片提供备用图片
echo "为缺失的图片提供备用图片..."

# 使用现有的WebP图片作为备用
sed -i '' 's|images/food/chinese/sweet-and-sour-pork.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/fish-fragrant-shredded-pork.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/xiaolongbao.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/zhajiang-noodles.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/lanzhou-hand-pulled-noodles.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/beijing-roast-duck.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/white-cut-chicken.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/char-siu-bao.jpg|images/food-webp/chinese/kung-pao-chicken.webp|g' random-food.html
sed -i '' 's|images/food/chinese/sour-fish.jpg|images/food-webp/chinese/boiled-fish.webp|g' random-food.html

# 西餐备用图片
sed -i '' 's|images/food/western/spaghetti.jpg|images/food-webp/western/pizza.webp|g' random-food.html
sed -i '' 's|images/food/western/sandwich.jpg|images/food-webp/western/pizza.webp|g' random-food.html

# 甜点备用图片
sed -i '' 's|images/food/dessert/egg-tart.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html
sed -i '' 's|images/food/dessert/cream-puff.jpg|images/food-webp/dessert/tiramisu.webp|g' random-food.html

# 饮品备用图片
sed -i '' 's|images/food/drinks/matcha-latte.jpg|images/food-webp/drinks/latte.webp|g' random-food.html

echo "图片路径更新完成！"
echo "所有图片现在使用WebP格式，缺失的图片使用备用图片。" 