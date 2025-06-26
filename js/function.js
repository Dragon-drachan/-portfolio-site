


function hamburger() {
  document.getElementById('l_1').classList.toggle('l1');
  document.getElementById('l_2').classList.toggle('l2');
  document.getElementById('l_3').classList.toggle('l3');
  document.getElementById('main_nav').classList.toggle('in');
}
document.getElementById('ham').addEventListener('click' , function () {
  hamburger();
} );

//hamburgerという関数を宣言します。

//getElementByIdでHTML（document）からID名を取得し、CSSで指定した動きの動作のクラス名をclassList.toggleで与えます。

//getElementByIdでHTMLからIDhamburgerを取得し、addEventListenerでイベント処理を指定します。

//ここで最初に宣言した関数hamburgerを呼び起こします。

//TOP戻る
const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});