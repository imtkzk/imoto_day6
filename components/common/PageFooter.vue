<template>
    <footer id="footer" class="footer">
        <div class="footer__inner">
            <div class="footer__navi__container">
                <div>
                    <a href="#" class="footer__navi__main">
                        <span>MISSION</span>ミッション
                    </a>
                    <ul class="footer__navi">
                        <li><a href="#">キカガクの目指す世界</a></li>
                        <li><a href="#">ミッションの背景</a></li>
                        <li><a href="#">チームへのこだわり</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" class="footer__navi__main">
                        <span>RESULTS</span>実績
                    </a>
                    <ul class="footer__navi">
                        <li><a href="#">データで見るキカガク</a></li>
                        <li><a href="#">研修事業実績</a></li>
                        <li><a href="#">コンテンツ作成実績</a></li>
                        <li><a href="#">事業開発支援実績</a></li>
                        <li><a href="#">キカガクが選ばれる理由</a></li>
                        <li><a href="#">研修の雰囲気</a></li>
                        <li><a href="#">キカガクの講義の良さ</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" class="footer__navi__main">
                        <span>BUSINESS</span>事業内容
                    </a>
                    <ul class="footer__navi">
                        <li><a href="#">研修事業について</a></li>
                        <li><a href="#">キカガクが選ばれる理由</a></li>
                        <li><a href="#">キカガクの講義の良さ</a></li>
                        <li><a href="#">資料ダウンロード</a></li>
                        <li><a href="#">短期コース</a></li>
                        <li><a href="#">長期コース</a></li>
                        <li><a href="#">企業研修</a></li>
                        <li><a href="#">事業開発支援</a></li>
                        <li><a href="#">プラットフォーム事業</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" class="footer__navi__main">
                        <span>MEMBER</span>メンバー
                    </a>
                    <ul class="footer__navi">
                        <li><a href="#">代表挨拶とその経歴</a></li>
                        <li><a href="#">取締役</a></li>
                        <li><a href="#">執行役員</a></li>
                        <li><a href="#">講師</a></li>
                        <li><a href="#">コーポレート</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" class="footer__navi__main">
                        <span>COMPANY</span>会社概要
                    </a>
                    <ul class="footer__navi">
                        <li><a href="#">概要</a></li>
                        <li><a href="#">沿革</a></li>
                        <li><a href="#">アクセス</a></li>
                    </ul>
                </div>
                <div>
                    <a href="#" class="footer__navi__main">
                        <span>NEWS</span>ニュース
                    </a>
                    <a href="#" class="footer__navi__main">
                        <span>BLOG</span>キカガクブログ
                    </a>
                    <a href="#" class="footer__navi__main">
                        <span>BLOG</span>働き方ブログ
                    </a>
                    <a href="#" class="footer__navi__main">
                        <span>BLOG</span>社長ブログ
                    </a>
                    <a href="#" class="footer__navi__main">
                        <span>RECRUIT</span>採用
                    </a>
                    <a href="#" class="footer__navi__main">
                        <span>CONTACT</span>お問い合わせ
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__copy">
            <p>&copy; <script>
                    document.write(new Date().getFullYear());

                </script> kikagakaku</p>
        </div>
    </footer>
</template>

<style>

/*  フッター
------------------------------------------------------------------------------*/
.footer {
 position: relative;
 background-color: #fff;
 background-image: url(~assets/img/footer/bg.png);
 background-position: left bottom;
 background-size: 78.26667vw 40.4vw;
 background-repeat: no-repeat;
}

.footer__inner {
 position: relative;
 margin: 0 auto;
 width: calc(700 / 750 * 100vw);
}

@media screen and (min-width: 801px) {
 .footer {
  background-size: 36.6875vw 18.9375vw;
 }
 .footer__inner {
  width: calc(1500 / 1600 * 100vw);
 }
}

@media screen and (min-width: 1601px) {
 .footer {
  background-size: 587px 303px;
 }
 .footer__inner {
  width: 1400px;
 }
}

/* ----------------- メニュー - */
.footer__navi__container {
 display: flex;
 flex-wrap: wrap;
 padding: 8vw 0;
 margin-left: -1.6vw;
}

.footer__navi__container > div {
 margin-left: 1.6vw;
 margin-bottom: 6vw;
 width: calc(50% - 1.6vw);
}

.footer__navi__main {
 display: block;
 font-size: 3.2vw;
 font-weight: 700;
 padding: .5em 0;
}

.footer__navi__main span {
 font-family: "Montserrat", sans-serif;
 font-weight: 700;
}

.footer__navi__main span:after {
 content: '-';
 margin: 0 .5em;
}

.footer__navi li a {
 position: relative;
 display: block;
 padding: .5em 0;
 font-size: 3.2vw;
 line-height: 1.3em;
}

.footer__navi li a:hover {
 font-weight: 700;
}

@media screen and (min-width: 801px) {
 .footer__navi__container {
  margin-left: -4vw;
  padding: 2.8125vw 2.8125vw 4.0625vw 2.8125vw;
 }
 .footer__navi__container > div {
  margin: 0 0 4vw 4vw;
  width: calc(25% - 4vw);
 }
 .footer__navi__main,
 .footer__navi > li a {
  font-size: 0.9375vw;
 }
}

@media screen and (min-width: 1000px) {
 .footer__navi__container {
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-left: 0;
  padding: 2.8125vw 0 4.0625vw 0;
 }
 .footer__navi__container > div {
  margin: 0;
  width: auto;
 }
 .footer__navi__main,
 .footer__navi > li a {
  font-size: 0.9375vw;
 }
}

@media screen and (min-width: 1601px) {
 .footer__navi__container {
  padding: 45px 0 65px 0;
 }
 .footer__navi__main,
 .footer__navi > li a {
  font-size: 15px;
  font-size: 1.5rem;
 }
}

/* ----------------- コピーライト - */
.footer__copy {
 padding: 1.5em 1em;
 color: #666;
}

.footer__copy p {
 font-family: "Montserrat", sans-serif;
 font-size: calc(20 / 750 * 100vw);
 font-weight: 600;
 text-align: center;
}

@media screen and (min-width: 801px) {
 .footer__copy p {
  font-size: calc(13 / 1600 * 100vw);
  text-align: right;
 }
}

@media screen and (min-width: 1601px) {
 .footer__copy p {
  font-size: 13px;
  font-size: 1.3rem;
 }
}

</style>