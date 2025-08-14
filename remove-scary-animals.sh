#!/bin/bash

echo "正在移除恐怖动物选择..."

# 备份当前文件
cp random-food.html random-food.html.backup-remove-scary

# 移除恐怖或不常见的动物选择
sed -i '' "/'Alligator Breakfast Sausage': {/,/},/d" random-food.html
sed -i '' "/'Kangaroo Breakfast Sausage': {/,/},/d" random-food.html
sed -i '' "/'Ostrich Egg Omelette': {/,/},/d" random-food.html
sed -i '' "/'Emu Breakfast Steak': {/,/},/d" random-food.html
sed -i '' "/'Wild Boar Breakfast Sausage': {/,/},/d" random-food.html
sed -i '' "/'Elk Breakfast Steak': {/,/},/d" random-food.html
sed -i '' "/'Bison Breakfast Bowl': {/,/},/d" random-food.html
sed -i '' "/'Venison Breakfast Steak': {/,/},/d" random-food.html
sed -i '' "/'Rabbit Breakfast Hash': {/,/},/d" random-food.html
sed -i '' "/'Quail Eggs Benedict': {/,/},/d" random-food.html
sed -i '' "/'Duck Eggs Scramble': {/,/},/d" random-food.html
sed -i '' "/'Goose Liver Toast': {/,/},/d" random-food.html

echo "恐怖动物选择已移除！"
echo "现在只保留传统友好的肉类选择！" 