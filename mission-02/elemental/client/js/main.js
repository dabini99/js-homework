
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector('.nav');
const visualImage = document.querySelector('.visual img');

function handleClick(e){
  e.preventDefault();

  const target = e.target.closest('li')

  if(!target) return;

  document.querySelector('body').style.background = `linear-gradient(to bottom, #2D76DC, #000)`;

  const indexData = target.dataset.index;

  visualImage.src = `./assets/${data[indexData-1].name}.jpeg`;

  visualImage.alt = data[indexData-1].alt;

  document.querySelector('.nickName').textContent = data[indexData-1].name;
  
  const children = [...navigation.children]; 

  children.forEach(li => {
    li.classList.remove('is-active');
  });

  target.classList.add('is-active');
}



navigation.addEventListener('click',handleClick)













