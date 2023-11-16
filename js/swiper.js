const swipreWrapper = document.querySelector('.swiper-wrapper')

const imgUrls = [
  'https://images.unsplash.com/photo-1699536813779-55557d54891a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1699634207217-62abca6f066c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1699612201478-794e2459639f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
]



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 const addImg = (urls) => {
    urls.forEach(el => {
      const div = document.createElement('div')
      div.classList.add('swiper-slide')
      div.innerHTML = `<img src='${el}'>`
      swipreWrapper.append(div)
    })
 }

 addImg(imgUrls)