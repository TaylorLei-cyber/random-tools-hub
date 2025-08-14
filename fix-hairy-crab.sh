#!/bin/bash

# 修复大闸蟹图片的脚本

echo "正在修复大闸蟹的图片..."

# 备份原文件
cp random-food.html random-food.html.backup5

# 将大闸蟹的图片改为螃蟹emoji
sed -i '' '/Hairy Crab/,/image:/ s|images/food-webp/chinese/boiled-fish.webp|🦀|' random-food.html

echo "大闸蟹图片修复完成！"
echo "现在大闸蟹显示正确的螃蟹emoji了。" 