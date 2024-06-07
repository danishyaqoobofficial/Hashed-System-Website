const services = [
    {
        image: 'assets/images/Services/python-service-icon.png',
        title: 'Django - Python Application',
        description: 'Build seamless mobile apps with Flutter. Its layered architecture enables flexible designs and high-speed rendering, allowing us to focus on optimized user experiences. Flutter empowers us to deliver customized front-end and back-end mobile solutions.',
        detailedDescription: 'Build seamless mobile apps with Flutter. Its layered architecture enables flexible designs and high-speed rendering, allowing us to focus on optimized user experiences. Flutter empowers us to deliver customized front-end and back-end mobile solutions.'
    },
    {
        image: 'assets/images/Services/mobile-application-service-icon.png',
        title: 'Mobile Application (Flutter)',
        description: 'Develop custom web applications with Laravel clean, expressive code. As a PHP framework, it enables the rapid development of robust web apps.',
        detailedDescription: 'Develop custom web applications with Laravel clean, expressive code. As a PHP framework, it enables the rapid development of robust web apps.'
    },
    {
        image: 'assets/images/Services/laravel-service-icon.png',
        title: 'Laravel - PHP Application',
        description: 'Build stunning websites and apps with WordPress, the leading open-source CMS. Its elegant architecture makes it our go-to for crafting customized.',
        detailedDescription: 'Build stunning websites and apps with WordPress, the leading open-source CMS. Its elegant architecture makes it our go-to for crafting customized.'
    },
    {
        image: 'assets/images/Services/product-service-icon.png',
        title: 'Product Development',
        description: 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.',
        detailedDescription: 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.'
    },
    {
        image: 'assets/images/Services/wordpress-service-icon.png',
        title: 'WordPress Development',
        description: 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.',
        detailedDescription: 'Bring your product vision to life with our expert team. We develop innovative software products using the latest technologies to meet your requirements.'
    }
];

let currentlyOpenIndex = null;

function renderServices(services) {
    const container = document.getElementById('servicesContainer');
    container.innerHTML = '';

    services.forEach((service, index) => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = `service mt-[18px] w-full px-[18px] md:px-[32px] py-[9px] rounded-[20px] border-[0.7px] border-[#CECDD1] flex items-center bg-[#fff] gap-[12px] sm:gap-[18px] md:gap-[28px] overflow-auto sm:flex-row flex-col`;
        serviceDiv.id = `service-${index}`;

        serviceDiv.innerHTML = `
            <div class="flex items-center justify-start gap-[18px] md:gap-[28px] flex-1 full_width">
                <img class="max-h-[100px] max-w-[90px]" src="${service.image}" alt="${service.title}">
                <h3 class="text-start leading-6 text-[18px] flex-1">${service.title}</h3>
            </div>
            <div class="flex items-center gap-[18px] md:gap-[28px] flex-[3]">
                <p class="text-[14px] text-[#001436] text-start flex-[5] line-clamp-3">${service.description}</p>
                <div class="bg-[#ABDCFF] cursor-pointer rounded-[50px] p-[9px] flex items-center justify-center" onclick="showDetail(${index})">
                    <svg width="13" height="13" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.36797 9.41719V15.2332C9.36797 15.8992 8.82809 16.4391 8.16211 16.4391C7.49613 16.4391 6.95625 15.8992 6.95625 15.2332V9.41719H1.19766C0.536209 9.41719 0 8.88098 0 8.21953C0 7.55808 0.53621 7.02187 1.19766 7.02187H6.95625V1.20586C6.95625 0.539881 7.49613 0 8.16211 0C8.82809 0 9.36797 0.539882 9.36797 1.20586V7.02187H15.1266C15.788 7.02187 16.3242 7.55808 16.3242 8.21953C16.3242 8.88098 15.788 9.41719 15.1266 9.41719H9.36797Z" fill="#0D99FF"></path>
                    </svg>
                </div>
            </div>
        `;

        container.appendChild(serviceDiv);
    });
}

function showDetail(index) {
    if (currentlyOpenIndex !== null && currentlyOpenIndex !== index) {
        // Hide the currently open detailed view
        hideDetail(currentlyOpenIndex);
    }

    const service = services[index];
    // Show the detailed view
    const container = document.getElementById(`service-${index}`);
    container.style.padding = '0';

    container.innerHTML = `
        <div class="bg-[#0D99FF] w-full rounded-[20px] p-[30px] flex gap-[42px] items-center flex-col-reverse sm:flex-row">
            <div class="flex-[3]">
                <h2 class="text-[#fff] font-[500] text-[24px] md:text-[28px] text-start">${service.title}</h2>
                <p class="text-[12px] sm:text-[13px] text-[#FFFFFF] text-start mt-[12px] line-clamp-4">${service.detailedDescription}</p>
                <div class="rounded-[7px] bg-[#fff] px-[22px] py-[10px] cursor-pointer flex items-center justify-center text-[#0D99FF] font-[600] text-[13px] uppercase max-w-max mt-[22px]">
                    more info
                </div>
            </div>
            <div class="flex-[2] flex items-center justify-center">
                <div class="w-full"><img class="w-[220px] object-contain" src="${service.image}" alt="${service.title}">
                    <div class="hidden sm:block">
                        <div class="flex items-center justify-end">
                            <div class="bg-[#ABDCFF] rounded-[50px] h-[32px] w-[32px] flex items-center justify-center cursor-pointer" onclick="hideDetail(${index})">
                                <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1266 0.0214844H1.19766C0.536209 0.0214844 0 0.557693 0 1.21914C0 1.88059 0.53621 2.4168 1.19766 2.4168H15.1266C15.788 2.4168 16.3242 1.88059 16.3242 1.21914C16.3242 0.557693 15.788 0.0214844 15.1266 0.0214844Z" fill="#0D99FF"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    container.classList.remove('hidden');
    currentlyOpenIndex = index;
}

function hideDetail(index) {
    currentlyOpenIndex = null;
    renderServices(services);
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices(services);
});




// 
// 
// 
// 



let value = true;


function plus_btn(e) {
    let singleRowMain = e.closest('.single_row_main');
    let plusBtn = singleRowMain.querySelector('.plus_btn');
    let singleRow = singleRowMain.querySelector('.single_row');
    let hiddenDiv = singleRowMain.querySelector('.hidden_div');
    
    if (value == true) {
        plusBtn.innerHTML = '-';
        singleRow.classList.add('!text-[#fff]');
        singleRow.classList.add('!bg-[#0D99FF]');
        hiddenDiv.classList.add('!block');
        value = false;
    }else{
        plusBtn.innerHTML = '+';
        singleRow.classList.remove('!text-[#fff]');
        singleRow.classList.remove('!bg-[#0D99FF]');
        hiddenDiv.classList.remove('!block');
        value = true;
    }
}


function portfolioDropdown() {
    let portfolioSvg = document.querySelector('.portfolio_dropd_svg');
    let dropdownHiddenDiv = document.querySelector('.dropdown_hidden_div')


    if (value == true) {
        portfolioSvg.classList.add('!rotate-180');
        dropdownHiddenDiv.classList.add('!block');
        value = false;
    }else{
        portfolioSvg.classList.remove('!rotate-180');
        dropdownHiddenDiv.classList.remove('!block');
        value = true;
    }
    
}




// ***************   Animation Script ***************

let animationItem  = document.querySelectorAll('animation__item');
const showAnimation = ()=>{
    let windowHeight = window.innerHeight;

    animationItem.forEach((item) => {
        let windowTop = item.getBoundingClientRect().top;
        if (windowTop < windowHeight) {
            item.classList.add('active__animation');
        }
    });
}
showAnimation();
window.addEventListener('scroll', showAnimation)







