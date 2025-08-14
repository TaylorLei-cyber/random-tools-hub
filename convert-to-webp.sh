#!/bin/bash

# 食物图片转换为WebP格式脚本
# 同时修复缺失的图片问题

echo "开始转换图片为WebP格式..."

# 检查是否安装了ImageMagick
if ! command -v convert &> /dev/null; then
    echo "正在安装ImageMagick..."
    brew install imagemagick
fi

# 创建WebP目录
mkdir -p images/food-webp/chinese
mkdir -p images/food-webp/western
mkdir -p images/food-webp/dessert
mkdir -p images/food-webp/drinks

# 使用更好的Unsplash图片URL
echo "下载并转换中餐图片..."

# 宫保鸡丁
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/kung-pao-chicken.webp"

# 麻婆豆腐
curl -L "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/mapo-tofu.webp"

# 糖醋里脊
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/sweet-sour-pork.webp"

# 水煮鱼
curl -L "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/boiled-fish.webp"

# 回锅肉
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/twice-cooked-pork.webp"

# 鱼香肉丝
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/fish-fragrant-pork.webp"

# 红烧肉
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/braised-pork.webp"

# 小笼包
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/xiaolongbao.webp"

# 炸酱面
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/zhajiang-noodles.webp"

# 兰州拉面
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/lanzhou-noodles.webp"

# 重庆火锅
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/chongqing-hotpot.webp"

# 北京烤鸭
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/beijing-duck.webp"

# 白切鸡
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/white-cut-chicken.webp"

# 叉烧包
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/char-siu-bao.webp"

# 炒饭
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/fried-rice.webp"

# 酸菜鱼
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/chinese/sour-fish.webp"

echo "中餐图片转换完成！"

# 西餐图片
echo "下载并转换西餐图片..."

# 意大利面
curl -L "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/spaghetti.webp"

# 披萨
curl -L "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/pizza.webp"

# 汉堡
curl -L "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/hamburger.webp"

# 牛排
curl -L "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/steak.webp"

# 三明治
curl -L "https://images.unsplash.com/photo-1528735602781-4a98c0d9f4b1?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/sandwich.webp"

# 沙拉
curl -L "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/salad.webp"

# 寿司
curl -L "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/sushi.webp"

# 墨西哥卷饼
curl -L "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/western/taco.webp"

echo "西餐图片转换完成！"

# 甜点图片
echo "下载并转换甜点图片..."

# 提拉米苏
curl -L "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/tiramisu.webp"

# 马卡龙
curl -L "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/macaron.webp"

# 芝士蛋糕
curl -L "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/cheesecake.webp"

# 巧克力慕斯
curl -L "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/chocolate-mousse.webp"

# 冰淇淋
curl -L "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/ice-cream.webp"

# 布丁
curl -L "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/pudding.webp"

# 蛋挞
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/egg-tart.webp"

# 泡芙
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/dessert/cream-puff.webp"

echo "甜点图片转换完成！"

# 饮品图片
echo "下载并转换饮品图片..."

# 珍珠奶茶
curl -L "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/bubble-tea.webp"

# 拿铁咖啡
curl -L "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/latte.webp"

# 抹茶拿铁
curl -L "https://images.unsplash.com/photo-1515823662972-9b8f2a5e3b42?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/matcha-latte.webp"

# 柠檬水
curl -L "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/lemonade.webp"

# 果汁
curl -L "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/juice.webp"

# 可乐
curl -L "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/cola.webp"

# 啤酒
curl -L "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/beer.webp"

# 红酒
curl -L "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" -o "temp.jpg" && convert temp.jpg -quality 85 "images/food-webp/drinks/red-wine.webp"

echo "饮品图片转换完成！"

# 清理临时文件
rm -f temp.jpg

echo "所有图片已转换为WebP格式！"
echo "WebP图片保存在 images/food-webp/ 目录中" 