// 测试food-data.js文件
const fs = require('fs');

try {
    // 读取food-data.js文件
    const data = fs.readFileSync('food-data.js', 'utf8');
    
    // 提取foodDatabase对象
    const foodDatabaseMatch = data.match(/const foodDatabase = ({[\s\S]*});/);
    
    if (!foodDatabaseMatch) {
        console.log('❌ 无法找到foodDatabase对象');
        process.exit(1);
    }
    
    // 解析JSON
    const foodDatabase = JSON.parse(foodDatabaseMatch[1]);
    
    console.log('✅ food-data.js 文件正常');
    console.log(`📊 总食物数量: ${Object.keys(foodDatabase).length}`);
    
    // 检查前5个食物
    const foodNames = Object.keys(foodDatabase).slice(0, 5);
    console.log('🍽️ 前5个食物:');
    foodNames.forEach((name, index) => {
        const food = foodDatabase[name];
        console.log(`  ${index + 1}. ${name}`);
        console.log(`     餐点类型: ${food.mealType}`);
        console.log(`     生活方式: ${food.lifestyle}`);
        console.log(`     配料数量: ${food.ingredients.split(',').length}`);
    });
    
    // 检查各餐点类型的数量
    const mealTypeCounts = {};
    const lifestyleCounts = {};
    
    Object.values(foodDatabase).forEach(food => {
        mealTypeCounts[food.mealType] = (mealTypeCounts[food.mealType] || 0) + 1;
        lifestyleCounts[food.lifestyle] = (lifestyleCounts[food.lifestyle] || 0) + 1;
    });
    
    console.log('\n📈 餐点类型分布:');
    Object.entries(mealTypeCounts).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}个`);
    });
    
    console.log('\n🥗 生活方式分布:');
    Object.entries(lifestyleCounts).forEach(([lifestyle, count]) => {
        console.log(`  ${lifestyle}: ${count}个`);
    });
    
} catch (error) {
    console.log('❌ 错误:', error.message);
    process.exit(1);
} 