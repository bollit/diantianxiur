// poem
var words=[
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',
    '段天秀，我爱你！',
    'I Love You,xiu!',

];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前从前,有个人爱你很久';
        texttwo.innerHTML = '但偏偏，风渐渐';
        textthree.innerHTML = '把距离吹的好远';
      },112500)


 
