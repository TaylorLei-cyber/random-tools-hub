#!/bin/bash

# 改进图片匹配的脚本
# 为每种食物提供更合适的图片

echo "正在改进图片匹配..."

# 备份原文件
cp random-food.html random-food.html.backup3

# 为小笼包等面食类提供更合适的图片
echo "更新面食类图片..."

# 小笼包 - 使用更合适的图片
sed -i '' 's|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/xiaolongbao.webp|g' random-food.html

# 为不同类别的食物提供更合适的图片
echo "按食物类别分配图片..."

# 包子类食物
sed -i '' '/Xiaolongbao/,/image:/ s|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/xiaolongbao.webp|' random-food.html
sed -i '' '/Char Siu Bao/,/image:/ s|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/xiaolongbao.webp|' random-food.html
sed -i '' '/Steamed Buns/,/image:/ s|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/xiaolongbao.webp|' random-food.html

# 面条类食物
sed -i '' '/Zhajiang Noodles/,/image:/ s|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/zhajiang-noodles.webp|' random-food.html
sed -i '' '/Lanzhou Hand-Pulled Noodles/,/image:/ s|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/lanzhou-noodles.webp|' random-food.html

# 鱼类食物
sed -i '' '/Boiled Fish/,/image:/ s|images/food-webp/chinese/boiled-fish.webp|images/food-webp/chinese/boiled-fish.webp|' random-food.html
sed -i '' '/Sour Fish/,/image:/ s|images/food-webp/chinese/boiled-fish.webp|images/food-webp/chinese/boiled-fish.webp|' random-food.html

# 豆腐类食物
sed -i '' '/Mapo Tofu/,/image:/ s|images/food-webp/chinese/mapo-tofu.webp|images/food-webp/chinese/mapo-tofu.webp|' random-food.html
sed -i '' '/Stinky Tofu/,/image:/ s|images/food-webp/chinese/mapo-tofu.webp|images/food-webp/chinese/mapo-tofu.webp|' random-food.html

# 汤类食物
sed -i '' '/Hot and Sour Soup/,/image:/ s|images/food-webp/chinese/mapo-tofu.webp|images/food-webp/chinese/hot-and-sour-soup.webp|' random-food.html
sed -i '' '/Egg Drop Soup/,/image:/ s|images/food-webp/chinese/mapo-tofu.webp|images/food-webp/chinese/egg-drop-soup.webp|' random-food.html
sed -i '' '/Wonton Soup/,/image:/ s|images/food-webp/chinese/kung-pao-chicken.webp|images/food-webp/chinese/wonton-soup.webp|' random-food.html

echo "图片匹配改进完成！"
echo "现在每种食物都有更合适的图片了。" 