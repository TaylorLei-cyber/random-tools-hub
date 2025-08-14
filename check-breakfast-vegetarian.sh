#!/bin/bash

echo "正在统计早餐素食的选择..."

# 统计早餐素食的选择
grep -A 5 -B 1 "mealType: 'breakfast'" random-food.html | grep -A 4 "lifestyle: 'vegetarian'" | grep "mealType: 'breakfast'" | wc -l

echo "早餐素食选择数量："
grep -A 5 -B 1 "mealType: 'breakfast'" random-food.html | grep -A 4 "lifestyle: 'vegetarian'" | grep "mealType: 'breakfast'" | wc -l

echo "所有早餐素食选择："
grep -A 5 -B 1 "mealType: 'breakfast'" random-food.html | grep -A 4 "lifestyle: 'vegetarian'" | grep -B 1 "mealType: 'breakfast'" | grep "'[^']*':" | sed "s/.*'\([^']*\)':.*/\1/" 