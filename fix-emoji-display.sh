#!/bin/bash

echo "正在修复emoji显示问题..."

# 备份当前文件
cp random-food.html random-food.html.backup-emoji-fix

# 修复emoji显示问题
sed -i '' 's|<img src="${foodInfo.image}" alt="${randomFood}" class="food-icon-result">|<div class="food-icon-result">${foodInfo.image}</div>|g' random-food.html

echo "emoji显示问题修复完成！" 