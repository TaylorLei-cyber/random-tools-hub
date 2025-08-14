#!/bin/bash

# 食物图片下载脚本
# 使用 Unsplash API 下载高质量食物图片

# 创建目录
mkdir -p images/food/chinese
mkdir -p images/food/western  
mkdir -p images/food/dessert
mkdir -p images/food/drinks

# 中餐图片下载
echo "正在下载中餐图片..."

# 宫保鸡丁
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/kung-pao-chicken.jpg"

# 麻婆豆腐
curl -L "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" -o "images/food/chinese/mapo-tofu.jpg"

# 糖醋里脊
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/sweet-sour-pork.jpg"

# 水煮鱼
curl -L "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" -o "images/food/chinese/boiled-fish.jpg"

# 回锅肉
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/twice-cooked-pork.jpg"

# 鱼香肉丝
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/fish-fragrant-pork.jpg"

# 红烧肉
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/braised-pork.jpg"

# 小笼包
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/xiaolongbao.jpg"

# 炸酱面
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/zhajiang-noodles.jpg"

# 兰州拉面
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/lanzhou-noodles.jpg"

# 重庆火锅
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/chongqing-hotpot.jpg"

# 北京烤鸭
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/beijing-duck.jpg"

# 白切鸡
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/white-cut-chicken.jpg"

# 叉烧包
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/char-siu-bao.jpg"

# 炒饭
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/chinese/fried-rice.jpg"

# 酸菜鱼
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/chinese/sour-fish.jpg"

echo "中餐图片下载完成！"

# 西餐图片下载
echo "正在下载西餐图片..."

# 意大利面
curl -L "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop" -o "images/food/western/spaghetti.jpg"

# 披萨
curl -L "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" -o "images/food/western/pizza.jpg"

# 汉堡
curl -L "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" -o "images/food/western/hamburger.jpg"

# 牛排
curl -L "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" -o "images/food/western/steak.jpg"

# 三明治
curl -L "https://images.unsplash.com/photo-1528735602781-4a98c0d9f4b1?w=400&h=300&fit=crop" -o "images/food/western/sandwich.jpg"

# 沙拉
curl -L "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" -o "images/food/western/salad.jpg"

# 寿司
curl -L "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" -o "images/food/western/sushi.jpg"

# 墨西哥卷饼
curl -L "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop" -o "images/food/western/taco.jpg"

echo "西餐图片下载完成！"

# 甜点图片下载
echo "正在下载甜点图片..."

# 提拉米苏
curl -L "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" -o "images/food/dessert/tiramisu.jpg"

# 马卡龙
curl -L "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop" -o "images/food/dessert/macaron.jpg"

# 芝士蛋糕
curl -L "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop" -o "images/food/dessert/cheesecake.jpg"

# 巧克力慕斯
curl -L "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" -o "images/food/dessert/chocolate-mousse.jpg"

# 冰淇淋
curl -L "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop" -o "images/food/dessert/ice-cream.jpg"

# 布丁
curl -L "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" -o "images/food/dessert/pudding.jpg"

# 蛋挞
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "images/food/dessert/egg-tart.jpg"

# 泡芙
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "images/food/dessert/cream-puff.jpg"

echo "甜点图片下载完成！"

# 饮品图片下载
echo "正在下载饮品图片..."

# 珍珠奶茶
curl -L "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop" -o "images/food/drinks/bubble-tea.jpg"

# 拿铁咖啡
curl -L "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop" -o "images/food/drinks/latte.jpg"

# 抹茶拿铁
curl -L "https://images.unsplash.com/photo-1515823662972-9b8f2a5e3b42?w=400&h=300&fit=crop" -o "images/food/drinks/matcha-latte.jpg"

# 柠檬水
curl -L "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop" -o "images/food/drinks/lemonade.jpg"

# 果汁
curl -L "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop" -o "images/food/drinks/juice.jpg"

# 可乐
curl -L "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop" -o "images/food/drinks/cola.jpg"

# 啤酒
curl -L "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" -o "images/food/drinks/beer.jpg"

# 红酒
curl -L "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" -o "images/food/drinks/red-wine.jpg"

echo "饮品图片下载完成！"
echo "所有图片下载完成！" 