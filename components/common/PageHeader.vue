<template>
    <header id="header" class="header anim anim--scroll anim--top">
        <div class="header__logo">
            <a href="index.html" class="opacity">
                <p><img src="~assets/img/common/logo.svg" class="img__fit" alt="キカガク"></p>
            </a>
        </div>
        <div id="navigation" class="header__navi">
            <nav class="navi__container">
                <div class="navi">
                    <div class="navi__submenu--has">
                        <p><a href="#mission"><span>MISSION</span><span>ミッション</span></a></p>
                        <div class="submenu-bg">
                            <div class="submenu-wrap">
                                <a href="">キカガクの目指す世界</a>
                                <a href="">ミッションの背景</a>
                                <a href="">チームへのこだわり</a>
                            </div>
                        </div>
                    </div>
                    <div class="navi__submenu--has">
                        <p><span>RESULTS</span><span>実績</span></p>
                        <div class="submenu-bg">
                            <div class="submenu-wrap">
                                <a href="">データで見るキカガク</a>
                                <a href="">研修事業実績</a>
                                <a href="">コンテンツ作成実績</a>
                                <a href="">事業開発支援実績</a>
                                <a href="">キカガクが選ばれる理由</a>
                                <a href="">研修の雰囲気</a>
                                <a href="">キカガクの講義の良さ</a>
                            </div>
                        </div>
                    </div>
                    <div class="navi__submenu--has">
                        <p><span>BUSINESS</span><span>事業内容</span></p>
                        <div class="submenu-bg">
                            <div class="submenu-wrap">
                                <a href="">研修事業について</a>
                                <a href="">キカガクが選ばれる理由</a>
                                <a href="">キカガクの講義の良さ</a>
                                <a href="">資料ダウンロード</a>
                                <a href="">短期コース</a>
                                <a href="">長期コース</a>
                                <a href="">企業研修</a>
                                <a href="">事業開発支援</a>
                                <a href="">プラットフォーム事業</a>
                            </div>
                        </div>
                    </div>
                    <div class="navi__submenu--has">
                        <p><a href="#"><span>MEMBER</span><span>メンバー</span></a></p>
                        <div class="submenu-bg">
                            <div class="submenu-wrap">
                                <a href="">代表挨拶とその経歴</a>
                                <a href="">取締役</a>
                                <a href="">執行役員</a>
                                <a href="">講師</a>
                                <a href="">コーポレート</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><a href="#"><span>NEWS</span><span>ニュース</span></a></p>
                    </div>
                    <div class="navi__submenu--has">
                        <p><span>COMPANY</span><span>会社概要</span></p>
                        <div class="submenu-bg">
                            <div class="submenu-wrap">
                                <a href="">概要</a>
                                <a href="">沿革</a>
                                <a href="">アクセス</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div id="toggle" class="toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<style>

/*  ヘッダー
------------------------------------------------------------------------------*/
.header {
 position: fixed;
 top: 0;
 left: 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 height: 20vw;
 /* ヘッダー高さ */
 background-color: rgba(255, 255, 255, 0.7);
 z-index: 10;
}

.header__logo {
 position: relative;
 padding-left: 4vw;
 width: calc(300 / 750 * 100vw);
 z-index: 999;
}

@media screen and (min-width: 801px) {
 .header {
  justify-content: space-between;
  height: 6.25vw;
 }
 .header__logo {
  padding-left: 1.875vw;
  width: 12.5vw;
 }
 .header__navi {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 17.5vw);
 }
}

@media screen and (min-width: 1601px) {
 .header {
  height: 100px;
  /* ヘッダー高さ */
 }
 .header__logo {
  padding-left: 30px;
  width: 200px;
 }
 .header__navi {
  width: calc(100% - 280px);
 }
}

/* ------------------------------------ ナビコンテナ */
.header__navi {
 display: flex;
 justify-content: flex-end;
 align-items: center;
}

@media screen and (max-width: 801px) {
 .header__navi {
  display: inline-block;
  position: fixed;
  top: 20vw;
  left: 0;
  width: 100%;
  height: 0%;
  background-image: url("~assets/img/hero/image1.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  visibility: hidden;
  transition: opacity .1s linear,visibility .1s linear;
  overflow: hidden;
  overflow-x: scroll;
  z-index: 99999;
 }
 .header__navi::before {
  content: ' ';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 178, 109, 0.75);
 }
 .header__navi.is-open {
  opacity: 1;
  visibility: visible;
  height: calc(100vh - 20vw);
  transition: opacity .1s linear .1s,visibility .1s linear .1s;
 }
}

/* ------------------------------------ グローバルナビ */
.navi__container {
 position: relative;
 display: flex;
}

.navi {
 position: relative;
 width: 100%;
}

.navi > div > p {
 position: relative;
 display: block;
 font-weight: 700;
}

.navi > div > p:hover {
 cursor: pointer;
}

.navi > div > p span:nth-of-type(1) {
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
 letter-spacing: .15em;
}

.navi > div > p span:nth-of-type(2) {
 font-weight: 700;
}

.submenu-inner {
 display: flex;
 flex-wrap: wrap;
}

.submenu-inner a:hover {
 opacity: 0.6;
}

.submenu-box {
 position: relative;
}

.submenu-box .text {
 position: absolute;
 bottom: .5em;
 left: 0;
 margin: 0 auto;
 padding: 0 .5em;
 width: 100%;
 color: #fff;
 text-align: center;
 line-height: 1.3em;
}

/* ------------------------------------ グローバルナビ（PC） */
@media screen and (min-width: 801px) {
 .navi__container {
  align-items: center;
 }
 .navi {
  display: flex;
  align-items: center;
 }
 .navi > div {
  padding: 0 1em;
 }
 .navi > div > p {
  padding: 1em;
  font-size: 0.9375vw;
  text-align: center;
 }
 .navi > div > p span {
  display: block;
 }
 .navi > div > p span:nth-of-type(1) {
  margin-bottom: 1em;
 }
 .navi > div > p:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 1px;
  background-color: #305097;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  transition: .3s;
 }
 .navi > div > p:hover::before {
  width: 100%;
 }
 .submenu-bg {
  position: fixed;
  top: 6.25vw;
  left: 0;
  padding: 1.5625vw 0;
  width: 100%;
  background-image: url(~assets/img/hero/image1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  transition: all .2s;
  visibility: hidden;
  opacity: 0;
 }
 .submenu-bg::before {
  content: ' ';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: -moz-linear-gradient(0deg, #296c00 0%, #7bd7a5 0%, #32b16c 100%);
  background-image: -webkit-linear-gradient(0deg, #296c00 0%, #7bd7a5 0%, #32b16c 100%);
 }
 .submenu-wrap {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 75vw;
  z-index: 2;
 }
 .submenu-wrap a {
  margin-right: 3em;
  padding: 1em 0;
  color: #fff;
  font-size: 0.9375vw;
  font-weight: 700;
 }
 .submenu-wrap a:last-of-type {
  margin-right: 0;
 }
 .submenu-wrap a:hover {
  color: #333;
 }
 .submenu-wrap a:after {
  display: inline-block;
  content: '▶︎';
  padding-left: 1em;
  transition: .3s;
 }
 .submenu-wrap a:hover::after {
  transform: translateX(5px);
 }
 .navi > div:hover .submenu-bg {
  visibility: visible;
  opacity: 1;
 }
 .menu-title {
  position: relative;
  width: 350px;
 }
 .menu-title p {
  color: #fff;
  z-index: 1;
 }
 .submenu {
  width: 550px;
 }
 .submenu-inner {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
 }
 .submenu-inner a {
  margin-left: 15px;
  margin-bottom: 20px;
  width: calc(33.33333% - 15px);
 }
}

@media screen and (min-width: 1601px) {
 .navi > div > p {
  font-size: 15px;
  font-size: 1.5rem;
 }
 .submenu-bg {
  top: 100px;
  padding: 25px 0;
 }
 .submenu-wrap {
  max-width: 1200px;
 }
 .submenu-wrap a {
  font-size: 15px;
  font-size: 1.5rem;
 }
 .menu-title {
  width: 350px;
 }
 .submenu {
  width: 550px;
 }
 .submenu-inner {
  margin-left: -15px;
 }
 .submenu-inner a {
  margin-left: 15px;
  margin-bottom: 20px;
  width: calc(33.33333% - 15px);
 }
}

/* ------------------------------------ グローバルナビ（SP） */
@media screen and (max-width: 801px) {
 .navi__container {
  padding-top: 4vw;
  justify-content: center;
  height: calc(100vh - 16vw);
  overflow-y: scroll;
 }
 .navi > div {
  width: 100%;
  font-weight: 700;
  border-bottom: 1px dotted #fff;
 }
 .navi > div > p {
  padding: 1.5em 2em;
  color: #fff;
  font-size: 3.33333vw;
 }
 .navi > div > p span:nth-of-type(1) {
  margin-right: 1.5em;
 }
 .navi > div > p:hover {
  background-color: #333;
 }
 .submenu-bg {
  display: none;
 }
 .submenu-wrap {
  padding: 4vw 4.6vw 4vw 4.6vw;
  background-color: #fff;
 }
 .submenu-wrap a {
  display: block;
  padding: 1em;
  width: 100%;
  font-weight: 700;
  border-bottom: 1px solid #d3f8ae;
 }
 .submenu-inner {
  display: flex;
  flex-wrap: wrap;
  margin-left: -2.6vw;
 }
 .submenu-inner a {
  margin-left: 2.6vw;
  margin-bottom: 2.6vw;
  width: calc(50% - 2.6vw);
 }
 .navi__submenu--has {
  position: relative;
 }
 .navi__submenu--has p:after {
  position: absolute;
  right: 2em;
  top: 1.4em;
  content: '';
  display: inline-block;
  width: 4.26667vw;
  height: 4.26667vw;
  background-image: url(~assets/img/header/plus.png);
  background-size: contain;
  background-repeat: no-repeat;
 }
 .submenu li a:after {
  color: #305097;
 }
}

/* ----------------- トグルボタン - */
.toggle {
 position: fixed;
 top: calc(20 / 750 * 100vw);
 right: calc(15 / 750 * 100vw);
 width: calc(120 / 750 * 100vw);
 height: calc(110 / 750 * 100vw);
 cursor: pointer;
 z-index: 555;
 transition: opacity 0.25s ease;
}

.toggle span {
 position: absolute;
 left: calc(20 / 750 * 100vw);
 width: calc(80 / 750 * 100vw);
 height: calc(6 / 750 * 100vw);
 background-color: #333;
 -webkit-transition: all 0.35s ease;
 transition: all 0.35s ease;
 cursor: pointer;
}

.toggle span:nth-of-type(1) {
 top: calc(24 / 750 * 100vw);
}

.toggle span:nth-of-type(2) {
 top: calc(52 / 750 * 100vw);
}

.toggle span:nth-of-type(3) {
 top: calc(80 / 750 * 100vw);
}

.toggle.is-active span:nth-of-type(1) {
 top: calc(52 / 750 * 100vw);
 -webkit-transform: rotate(45deg);
 transform: rotate(45deg);
}

.toggle.is-active span:nth-of-type(2) {
 display: none;
}

.toggle.is-active span:nth-of-type(3) {
 top: calc(52 / 750 * 100vw);
 -webkit-transform: rotate(-45deg);
 transform: rotate(-45deg);
}

@media screen and (min-width: 801px) {
 .toggle {
  display: none;
 }
}
</style>