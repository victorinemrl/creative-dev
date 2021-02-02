import woman from '@/assets/woman.png'
import man from '@/assets/man.png'
import bg from '@/assets/bg.png'

export const designersHover = () => {
  const allDesigners = document.querySelectorAll('.designers')
  allDesigners.forEach(element => element.addEventListener('mouseover', function (event) {
    let index = 0
    for (let i = 0; i < allDesigners.length; i++) {
      const keyTmp = allDesigners[i].getAttribute('id')
      const keyHover = event.target.parentNode.getAttribute('id')
      if (keyTmp === keyHover) {
        index = i
      }
    }

    if (event.target.parentNode.getAttribute('src') === 'man.png') {
      document.querySelector('.designerImg').src = man
    } else {
      document.querySelector('.designerImg').src = woman
    }
    allDesigners[index].querySelector('h2').style.fontSize = 'xx-large'
    allDesigners[index].querySelector('h2').style.fontWeight = '400'
    if (allDesigners[index + 1]) {
      allDesigners[index + 1].querySelector('h2').style.fontSize = 'x-large'
      allDesigners[index + 1].querySelector('h2').style.fontWeight = '300'
    }
    if (allDesigners[index + 2]) {
      allDesigners[index + 2].querySelector('h2').style.fontSize = 'x-large'
      allDesigners[index + 2].querySelector('h2').style.fontWeight = '300'
    }
    if (allDesigners[index + 3]) {
      allDesigners[index + 3].querySelector('h2').style.fontSize = 'large'
      allDesigners[index + 3].querySelector('h2').style.fontWeight = '200'
    }
    if (allDesigners[index + 4]) {
      allDesigners[index + 4].querySelector('h2').style.fontSize = 'large'
      allDesigners[index + 4].querySelector('h2').style.fontWeight = '200'
    }
    if (allDesigners[index + 5]) {
      allDesigners[index + 5].querySelector('h2').style.fontSize = 'medium'
      allDesigners[index + 5].querySelector('h2').style.fontWeight = '100'
    }
    if (allDesigners[index + 6]) {
      allDesigners[index + 6].querySelector('h2').style.fontSize = 'medium'
      allDesigners[index + 6].querySelector('h2').style.fontWeight = '100'
    }
    if (allDesigners[index - 1]) {
      allDesigners[index - 1].querySelector('h2').style.fontSize = 'x-large'
      allDesigners[index - 1].querySelector('h2').style.fontWeight = '300'
    }
    if (allDesigners[index - 2]) {
      allDesigners[index - 2].querySelector('h2').style.fontSize = 'x-large'
      allDesigners[index - 2].querySelector('h2').style.fontWeight = '300'
    }
    if (allDesigners[index - 3]) {
      allDesigners[index - 3].querySelector('h2').style.fontSize = 'large'
      allDesigners[index - 3].querySelector('h2').style.fontWeight = '200'
    }
    if (allDesigners[index - 4]) {
      allDesigners[index - 4].querySelector('h2').style.fontSize = 'large'
      allDesigners[index - 4].querySelector('h2').style.fontWeight = '200'
    }
    if (allDesigners[index - 5]) {
      allDesigners[index - 5].querySelector('h2').style.fontSize = 'medium'
      allDesigners[index - 5].querySelector('h2').style.fontWeight = '100'
    }
    if (allDesigners[index - 6]) {
      allDesigners[index - 6].querySelector('h2').style.fontSize = 'medium'
      allDesigners[index - 6].querySelector('h2').style.fontWeight = '100'
    }
  }, false))
  allDesigners.forEach(element => element.addEventListener('mouseleave', function (event) {
    allDesigners.forEach(element2 => {
      element2.querySelector('h2').style.fontSize = 'medium'
      element2.querySelector('h2').style.fontWeight = '100'
      document.querySelector('.designerImg').src = bg
    })
  }, false))
}
export const burgerAnimation = () => {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('hide')
    document.querySelector('.sideBarContent').classList.toggle('pinkBg')
    console.log(burger.classList)
  })
}
