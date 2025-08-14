const fs = require('fs');

// 解析营养信息字符串
const parseNutrition = (nutritionStr) => {
    const nutrition = {};
    
    // 解析格式: "Calories: 231 kcal; Fat: 30g; Saturated Fat: 14g; Cholesterol: 25mg; Sodium: 689mg; Carbohydrates: 11g; Fiber: 12g; Sugar: 16g; Protein: 35g"
    const parts = nutritionStr.split(';');
    
    parts.forEach(part => {
        const trimmed = part.trim();
        if (trimmed.includes('Calories:')) {
            nutrition.calories = parseInt(trimmed.split(':')[1].replace('kcal', '').trim());
        } else if (trimmed.includes('Fat:')) {
            nutrition.fat = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Saturated Fat:')) {
            nutrition.saturatedFat = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Cholesterol:')) {
            nutrition.cholesterol = parseInt(trimmed.split(':')[1].replace('mg', '').trim());
        } else if (trimmed.includes('Sodium:')) {
            nutrition.sodium = parseInt(trimmed.split(':')[1].replace('mg', '').trim());
        } else if (trimmed.includes('Carbohydrates:')) {
            nutrition.carbs = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Fiber:')) {
            nutrition.fiber = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Sugar:')) {
            nutrition.sugar = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        } else if (trimmed.includes('Protein:')) {
            nutrition.protein = parseInt(trimmed.split(':')[1].replace('g', '').trim());
        }
    });
    
    return nutrition;
};

// 解析表格数据
const parseTableData = (tableData) => {
    const lines = tableData.trim().split('\n');
    const headers = lines[0].split('\t');
    const foodData = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('\t');
        if (values.length >= 6) {
            foodData.push({
                mealType: values[0].toLowerCase(),
                diet: values[1].toLowerCase() === 'vegetarian' ? 'vegetarian' : 'non-vegetarian',
                name: values[2],
                ingredients: values[3],
                recipe: values[4],
                nutrition: values[5]
            });
        }
    }
    
    return foodData;
};

// 从文件读取数据
try {
    const fileContent = fs.readFileSync('random-food-generator.txt', 'utf8');
    console.log('📖 成功读取random-food-generator.txt文件');
    
    // 解析表格数据
    const foodData = parseTableData(fileContent);
    console.log(`📊 解析到 ${foodData.length} 个食物项目`);
    
    // 生成完整的foodDatabase对象
    const foodDatabase = {};
    
    foodData.forEach((food, index) => {
        const key = food.name;
        const parsedNutrition = parseNutrition(food.nutrition);
        
        foodDatabase[key] = {
            mealType: food.mealType,
            lifestyle: food.diet,
            category: 'western', // 默认分类
            nutrition: {
                calories: parsedNutrition.calories,
                protein: parsedNutrition.protein,
                carbs: parsedNutrition.carbs,
                fat: parsedNutrition.fat
            },
            prepTime: '15-20 minutes', // 默认准备时间
            difficulty: 'Easy', // 默认难度
            image: '', // 无图片
            recipe: food.recipe,
            ingredients: food.ingredients,
            detailedNutrition: {
                calories: parsedNutrition.calories,
                fat: parsedNutrition.fat,
                saturatedFat: parsedNutrition.saturatedFat || Math.round(parsedNutrition.fat * 0.3),
                cholesterol: parsedNutrition.cholesterol || 30,
                sodium: parsedNutrition.sodium || 300,
                carbohydrates: parsedNutrition.carbs,
                fiber: parsedNutrition.fiber || Math.floor(parsedNutrition.carbs * 0.1),
                sugar: parsedNutrition.sugar || Math.floor(parsedNutrition.carbs * 0.2),
                protein: parsedNutrition.protein
            }
        };
    });
    
    // 生成JavaScript文件内容
    const jsFileContent = `// 食物数据库 - 独立文件，便于维护和扩展
const foodDatabase = ${JSON.stringify(foodDatabase, null, 4)};

// 导出数据库
if (typeof module !== "undefined" && module.exports) {
    module.exports = foodDatabase;
}`;
    
    // 写入文件
    fs.writeFileSync('food-data.js', jsFileContent, 'utf8');
    
    console.log('✅ 已成功更新food-data.js文件');
    console.log(`📊 总共添加了 ${Object.keys(foodDatabase).length} 个食物项目`);
    console.log('🔄 请刷新页面查看更新后的食物生成器');
    
    // 统计各分类的数量
    const mealTypeCounts = {};
    const lifestyleCounts = {};
    
    Object.values(foodDatabase).forEach(food => {
        mealTypeCounts[food.mealType] = (mealTypeCounts[food.mealType] || 0) + 1;
        lifestyleCounts[food.lifestyle] = (lifestyleCounts[food.lifestyle] || 0) + 1;
    });
    
    console.log('\n📈 分类统计:');
    console.log('Meal Types:', mealTypeCounts);
    console.log('Lifestyles:', lifestyleCounts);
    
} catch (error) {
    console.error('❌ 读取文件时出错:', error.message);
} 