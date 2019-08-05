import _ from 'lodash'
import './style.css'
import MyImg from './banner_1.png'
import Data from './data.xml'

function component() {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  //添加图片
  var myImg = new Image()
  myImg.src = MyImg

  element.appendChild(myImg)

  console.log(Data)

  return element
}

document.body.appendChild(component())
