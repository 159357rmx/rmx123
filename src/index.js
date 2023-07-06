
import  "./css/a.css"
import webpack1 from './img/测试.png'
//mock数据
import axios from 'axios';
window.onload = function(){

      const baseUrl='https://www.fastmock.site/mock/7737232ed0613cf5ebfe1ab26f249839/api/test'
      axios.get(`${baseUrl}` )
          .then(({data}) => {
              console.log('data',data);
          })
        } 
console.log("1234");


const imgElem = new Image(100,100)
imgElem.style.background = `url(${webpack1}),no-repeat` // 以背景方式引入图片
imgElem.style.width ='100%'
imgElem.style.height ='100%'
document.body.appendChild(imgElem)




