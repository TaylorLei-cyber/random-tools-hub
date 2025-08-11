// 移动端导航功能
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');

    console.log('移动端导航初始化开始');
    console.log('移动端导航按钮:', mobileNavToggle);
    console.log('导航菜单:', navMenu);
    console.log('下拉菜单按钮:', dropdownToggle);
    console.log('下拉菜单:', dropdown);

    // 确保默认状态是收起的
    if (navMenu) {
        navMenu.classList.remove('active');
        console.log('确保导航菜单默认收起');
    }
    if (mobileNavToggle) {
        mobileNavToggle.classList.remove('active');
        console.log('确保移动端导航按钮默认收起');
    }
    if (dropdown) {
        dropdown.classList.remove('active');
        console.log('确保下拉菜单默认收起');
    }

    // 移动端导航切换
    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('移动端导航按钮被点击');
            
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // 如果关闭主菜单，也关闭下拉菜单
            if (!navMenu.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    // 移动端下拉菜单功能
    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('下拉菜单按钮被点击');
            
            // 切换下拉菜单状态
            const isActive = dropdown.classList.contains('active');
            console.log('当前下拉菜单状态:', isActive ? '展开' : '收起');
            
            if (isActive) {
                dropdown.classList.remove('active');
                console.log('下拉菜单已收起');
            } else {
                dropdown.classList.add('active');
                console.log('下拉菜单已展开');
            }
        });
    }
    
    // 点击导航菜单外部关闭菜单
    document.addEventListener('click', function(e) {
        if (navMenu && mobileNavToggle) {
            if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileNavToggle.classList.remove('active');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            }
        }
    });
    
    // 点击导航链接后关闭菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是下拉菜单的切换按钮，不关闭菜单，也不阻止默认行为
            if (this.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            
            // 如果是下拉菜单内的链接，只关闭菜单，不阻止默认行为
            if (this.closest('.dropdown-menu')) {
                // 关闭所有菜单
                if (navMenu) navMenu.classList.remove('active');
                if (mobileNavToggle) mobileNavToggle.classList.remove('active');
                if (dropdown) dropdown.classList.remove('active');
                return;
            }
            
            // 其他导航链接，关闭所有菜单
            if (navMenu) navMenu.classList.remove('active');
            if (mobileNavToggle) mobileNavToggle.classList.remove('active');
            if (dropdown) dropdown.classList.remove('active');
        });
    });
    
    // 屏幕尺寸变化时重置菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileNavToggle) mobileNavToggle.classList.remove('active');
            if (dropdown) dropdown.classList.remove('active');
        }
    });
    
    console.log('移动端导航初始化完成');
}); 