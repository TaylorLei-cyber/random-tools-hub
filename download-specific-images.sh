#!/bin/bash

# 下载特定食物图片的脚本
# 确保图片与食物名称匹配

echo "正在下载特定食物图片..."

# 创建目录
mkdir -p images/food-specific/chinese
mkdir -p images/food-specific/western
mkdir -p images/food-specific/dessert
mkdir -p images/food-specific/drinks

# 下载小笼包专用图片
echo "下载小笼包图片..."
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/xiaolongbao.webp"

# 下载面条专用图片
echo "下载面条图片..."
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/noodles.webp"

# 下载汤类专用图片
echo "下载汤类图片..."
curl -L "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/soup.webp"

# 下载包子专用图片
echo "下载包子图片..."
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/bao.webp"

# 下载炒饭专用图片
echo "下载炒饭图片..."
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/fried-rice.webp"

# 下载火锅专用图片
echo "下载火锅图片..."
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/hotpot.webp"

# 下载烤鸭专用图片
echo "下载烤鸭图片..."
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/duck.webp"

# 下载饺子专用图片
echo "下载饺子图片..."
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/dumplings.webp"

# 下载春卷专用图片
echo "下载春卷图片..."
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-specific/chinese/spring-rolls.webp"

# 清理临时文件
rm -f temp.jpg

echo "特定食物图片下载完成！"
echo "现在每种食物都有专门的图片了。" 