/* header 스크롤 */
const header = document.querySelector('header');
        
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        let timeoutId;

        // 드롭다운 버튼에 마우스 진입
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            // 다른 모든 드롭다운 메뉴 닫기
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    const menu = d.querySelector('.dropdown-menu');
                    menu.style.transform = 'scaleY(0)';
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                }
            });
            // 현재 드롭다운 메뉴 열기
            dropdownMenu.style.transform = 'scaleY(1)';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.pointerEvents = 'auto';
        });

        // 드롭다운 버튼에서 마우스 이탈
        dropdown.addEventListener('mouseleave', (e) => {
            // 마우스가 메뉴로 이동하는 경우 체크
            if (!e.relatedTarget || !dropdownMenu.contains(e.relatedTarget)) {
                timeoutId = setTimeout(() => {
                    dropdownMenu.style.transform = 'scaleY(0)';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                }, 100);
            }
        });

        // 드롭다운 메뉴에 마우스 진입
        dropdownMenu.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            dropdownMenu.style.transform = 'scaleY(1)';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.pointerEvents = 'auto';
        });

        // 드롭다운 메뉴에서 마우스 이탈
        dropdownMenu.addEventListener('mouseleave', (e) => {
            // 마우스가 드롭다운 버튼으로 이동하는 경우 체크
            if (!e.relatedTarget || !dropdown.contains(e.relatedTarget)) {
                timeoutId = setTimeout(() => {
                    dropdownMenu.style.transform = 'scaleY(0)';
                    dropdownMenu.style.opacity = '0';
                    dropdownMenu.style.visibility = 'hidden';
                }, 100);
            }
        });
    });
});