#!/bin/bash

echo "正在将所有图片路径替换为emoji图标..."

# 备份当前文件
cp random-food.html random-food.html.backup-emoji

# 替换所有图片路径为emoji
sed -i '' "s|image: 'images/food-webp/chinese/kung-pao-chicken.webp'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food-webp/chinese/mapo-tofu.webp'|image: '🧈'|g" random-food.html
sed -i '' "s|image: 'images/food-webp/chinese/twice-cooked-pork.webp'|image: '🥓'|g" random-food.html
sed -i '' "s|image: 'images/food-webp/chinese/braised-pork.webp'|image: '🍖'|g" random-food.html
sed -i '' "s|image: 'images/food-webp/chinese/chongqing-hotpot.webp'|image: '🍲'|g" random-food.html
sed -i '' "s|image: 'images/food-webp/chinese/boiled-fish.webp'|image: '🐟'|g" random-food.html

# 替换中餐图片
sed -i '' "s|image: 'images/food/chinese/hui-guo-rou.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/fu-qi-fei-pian.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/kou-shui-ji.jpg'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/shui-zhu-yu.jpg'|image: '🐟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/gong-bao-ji-ding.jpg'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/white-cut-chicken.jpg'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/char-siu-bao.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/xiaolongbao.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/zhajiang-noodles.jpg'|image: '🍜'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/lanzhou-hand-pulled-noodles.jpg'|image: '🍜'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/beijing-roast-duck.jpg'|image: '🦆'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/fried-rice.jpg'|image: '🍚'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/sweet-and-sour-pork.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/boiled-fish.jpg'|image: '🐟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/siu-mai.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/har-gow.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/dim-sum.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/wonton-soup.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/bbq-pork.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/dong-an-chicken.jpg'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/stinky-tofu.jpg'|image: '🧈'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/spicy-crayfish.jpg'|image: '🦞'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/hunan-beef.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/sweet-and-sour-fish.jpg'|image: '🐟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/dezhou-braised-chicken.jpg'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/jiuzhuan-large-intestine.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/squirrel-fish.jpg'|image: '🐟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/dongpo-pork.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/hairy-crab.jpg'|image: '🦀'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/west-lake-fish.jpg'|image: '🐟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/longjing-shrimp.jpg'|image: '🦐'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/buddha-jumps-over-the-wall.jpg'|image: '🍲'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/red-wine-chicken.jpg'|image: '🍗'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/hui-braised-pork.jpg'|image: '🥩'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/hot-and-sour-soup.jpg'|image: '🍲'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/egg-drop-soup.jpg'|image: '🍲'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/spring-rolls.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/dumplings.jpg'|image: '🥟'|g" random-food.html
sed -i '' "s|image: 'images/food/chinese/steamed-buns.jpg'|image: '🥟'|g" random-food.html

# 替换西餐图片
sed -i '' "s|image: 'images/food/western/.*\.jpg'|image: '🍕'|g" random-food.html
sed -i '' "s|image: 'images/food/dessert/.*\.jpg'|image: '🍰'|g" random-food.html
sed -i '' "s|image: 'images/food/drinks/.*\.jpg'|image: '🥤'|g" random-food.html

echo "图片路径替换完成！"
echo "现在所有食物都使用emoji图标显示。" 