#!/bin/bash

echo "正在移除所有图片和emoji..."

# 备份当前文件
cp random-food.html random-food.html.backup-no-images

# 移除所有的image属性
sed -i '' "s/image: '[^']*'//g" random-food.html

# 移除food-icon-result div
sed -i '' '/<div class="food-icon-result">.*<\/div>/d' random-food.html

# 移除food-icon-result相关的CSS
sed -i '' '/\.food-icon-result/,/}/d' random-food.html

echo "所有图片和emoji已移除！"
echo "现在只显示文字内容。" 