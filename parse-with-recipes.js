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

// 根据食物名称和配料生成制作方法
const generateRecipe = (dishName, ingredients) => {
    const dishNameLower = dishName.toLowerCase();
    const ingredientsList = ingredients.split(', ');
    
    // 根据食物名称生成相应的制作方法
    if (dishNameLower.includes('congee') || dishNameLower.includes('porridge')) {
        return `Cook ${ingredientsList[0]} with water or broth until soft and creamy. Add ${ingredientsList.slice(1, 4).join(', ')} and simmer until vegetables are tender. Season with ${ingredientsList.slice(-3).join(', ')} and serve hot.`;
    } else if (dishNameLower.includes('scramble') || dishNameLower.includes('omelette')) {
        return `Heat oil in a pan, sauté ${ingredientsList.slice(1, 4).join(', ')} until softened. Add beaten eggs and ${ingredientsList[0]} if applicable, scramble until cooked. Season with ${ingredientsList.slice(-3).join(', ')} and serve immediately.`;
    } else if (dishNameLower.includes('toast') || dishNameLower.includes('sandwich')) {
        return `Toast bread until golden. Layer with ${ingredientsList.slice(0, 3).join(', ')} and top with ${ingredientsList.slice(3, 6).join(', ')}. Season with ${ingredientsList.slice(-3).join(', ')} and serve.`;
    } else if (dishNameLower.includes('smoothie') || dishNameLower.includes('bowl')) {
        return `Blend ${ingredientsList.slice(0, 3).join(', ')} with liquid until smooth. Top with ${ingredientsList.slice(3, 6).join(', ')} and garnish with ${ingredientsList.slice(-3).join(', ')}. Serve chilled.`;
    } else if (dishNameLower.includes('pancakes') || dishNameLower.includes('waffles')) {
        return `Mix ${ingredientsList.slice(0, 3).join(', ')} with flour and liquid to form batter. Cook on hot griddle until golden. Serve with ${ingredientsList.slice(3, 6).join(', ')} and ${ingredientsList.slice(-3).join(', ')}.`;
    } else if (dishNameLower.includes('frittata')) {
        return `Sauté ${ingredientsList.slice(1, 4).join(', ')} in oil. Pour beaten eggs over vegetables, add ${ingredientsList[0]} if applicable. Cook until set, then finish under broiler. Season with ${ingredientsList.slice(-3).join(', ')}.`;
    } else if (dishNameLower.includes('burrito') || dishNameLower.includes('wrap')) {
        return `Warm tortilla, fill with ${ingredientsList.slice(0, 4).join(', ')}. Add ${ingredientsList.slice(4, 7).join(', ')} and roll tightly. Serve with ${ingredientsList.slice(-3).join(', ')} on the side.`;
    } else if (dishNameLower.includes('salad')) {
        return `Combine ${ingredientsList.slice(0, 4).join(', ')} in a bowl. Add ${ingredientsList.slice(4, 7).join(', ')} and toss gently. Dress with ${ingredientsList.slice(-3).join(', ')} and serve fresh.`;
    } else if (dishNameLower.includes('soup')) {
        return `Sauté ${ingredientsList.slice(1, 4).join(', ')} in oil until softened. Add broth and ${ingredientsList[0]}, simmer until tender. Season with ${ingredientsList.slice(-3).join(', ')} and serve hot.`;
    } else if (dishNameLower.includes('curry') || dishNameLower.includes('stir fry')) {
        return `Heat oil in wok, stir-fry ${ingredientsList.slice(1, 4).join(', ')} until crisp-tender. Add ${ingredientsList[0]} and ${ingredientsList.slice(4, 7).join(', ')}. Season with ${ingredientsList.slice(-3).join(', ')} and serve over rice.`;
    } else {
        // 通用制作方法
        return `Prepare ${ingredientsList[0]} as base. Add ${ingredientsList.slice(1, 4).join(', ')} and cook until tender. Incorporate ${ingredientsList.slice(4, 7).join(', ')} and season with ${ingredientsList.slice(-3).join(', ')}. Serve hot.`;
    }
};

// 解析CSV数据
const parseTableData = (tableData) => {
    const lines = tableData.trim().split('\n');
    const headers = lines[0].split(',');
    const foodData = [];
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        // 处理CSV中的引号
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim()); // 添加最后一个值
        
        if (values.length >= 5) {
            foodData.push({
                mealType: values[0].toLowerCase(),
                diet: values[1].toLowerCase() === 'vegetarian' ? 'vegetarian' : 'non-vegetarian',
                name: values[2],
                ingredients: values[3],
                nutrition: values[4]
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
        
        // 生成制作方法
        const recipe = generateRecipe(food.name, food.ingredients);
        
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
            recipe: recipe, // 使用生成的制作方法
            ingredients: food.ingredients, // 保持原始配料列表
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
    
    // 显示示例
    console.log('\n📝 示例数据:');
    const firstFood = Object.values(foodDatabase)[0];
    console.log('Name:', Object.keys(foodDatabase)[0]);
    console.log('Ingredients:', firstFood.ingredients);
    console.log('Recipe:', firstFood.recipe);
    
} catch (error) {
    console.error('❌ 读取文件时出错:', error.message);
} 