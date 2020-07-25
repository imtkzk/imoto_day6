<template>
    <section id="update" class="sec sec__update">
        <div id="news" class="sec sec__news">
            <div class="container__large__inner">
                <div class="update__container">
                    <div class="update__heading__container">
                        <div class="update__box update__box--news">
                            <Title :titleClass="titleClass_news" :enTitle="enTitle_news" :jpTitle="jpTitle_news" :titleLine="titleLine_news" /> 
                        </div>
                        <div class="mt60 right none__sp anim anim--scroll anim--bottom">
                            <Button :btnClass="btnClass_news" :linkUrl="linkUrl_news" :linkTitle="linkTitle_news" :btnEffect="btnEffect_news" />
                        </div>
                    </div>
                    <div class="update__content__container">
                        <div class="newsF__container hover__container anim anim--scroll anim--bottom">
                            <a href="#" class="anim anim--scroll anim--bottom">
                                <div class="newsF__info">
                                    <p class="newsF__date">2019.06.04</p>
                                    <span class="newsF__cat newsF__cat--cat3">セミナー</span>
                                </div>
                                <div class="newsF__content">
                                    <h3 class="newsF__heading ellipsis"><span>新ディープラーニングハンズオンセミナーのカリキュラム公開！フレームワー...</span></h3>
                                    <div class="newsF__btn">
                                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="anim anim--scroll anim--bottom">
                                <div class="newsF__info">
                                    <p class="newsF__date">2019.06.03</p>
                                    <span class="newsF__cat newsF__cat--cat1">プレスリリース</span>
                                </div>
                                <div class="newsF__content">
                                    <h3 class="newsF__heading ellipsis"><span>キカガクが、Preferred Networksが提供する 日本語のオンライン学習資料 「...</span></h3>
                                    <div class="newsF__btn">
                                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="anim anim--scroll anim--bottom">
                                <div class="newsF__info">
                                    <p class="newsF__date">2019.03.01</p>
                                    <span class="newsF__cat newsF__cat--cat2">ブログ</span>
                                </div>
                                <div class="newsF__content">
                                    <h3 class="newsF__heading ellipsis"><span>助成金を活用してキカガクのハンズオンセミナーまたは長期コースを受講する...</span></h3>
                                    <div class="newsF__btn">
                                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="newsF__info">
                                    <p class="newsF__date">2019.01.07</p>
                                    <span class="newsF__cat newsF__cat--cat1">プレスリリース</span>
                                </div>
                                <div class="newsF__content">
                                    <h3 class="newsF__heading ellipsis"><span>取締役副社長に今西航平が就任しました。</span></h3>
                                    <div class="newsF__btn">
                                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="newsF__info">
                                    <p class="newsF__date">2019.12.18</p>
                                    <span class="newsF__cat newsF__cat--cat2">ブログ</span>
                                </div>
                                <div class="newsF__content">
                                    <h3 class="newsF__heading ellipsis"><span>【1/17 大阪】AI活用「成功」の方程式～AI活用最前線と人材育成～に登壇します。</span></h3>
                                    <div class="newsF__btn">
                                        <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt60 center none__pc anim anim--scroll anim--bottom">
                    <div class="btn btn--radius btn--mark btn--blue btn--240">
                        <div class="btn--radius__effect"></div>
                        <a href="#">VIEW MORE</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="kikagaku-blog" class="sec sec__blog--kikagaku">
            <div class="container__large__inner">
                <div class="update__container">
                    <div class="update__heading__container">
                        <div class="update__box update__box--blog">
                            <Title :titleClass="titleClass_blog01" :enTitle="enTitle_blog01" :jpTitle="jpTitle_blog01" :titleLine="titleLine_blog01" /> 
                        </div>
                        <div class="mt60 right none__sp anim anim--scroll anim--bottom">
                            <Button :btnClass="btnClass_blog01" :linkUrl="linkUrl_blog01" :linkTitle="linkTitle_blog01" :btnEffect="btnEffect_blog01" />
                        </div>
                    </div>
                    <div class="update__content__container">
                        <div class="blogF__container hover__container">
                            <template v-for="kikagaku_blog_item in kikagaku_blog_items">
                            <a :href="kikagaku_blog_item.kikgaku_blog_url">
                                <div class="blogF__image">
                                    <div class="img__scale">
                                        <img :src="kikagaku_blog_item.kikgaku_blog_img_url" class="ofi ofi--blogF" :alt="kikagaku_blog_item.kikgaku_blog_alt">
                                    </div>
                                </div>
                                <div class="blogF__content">
                                    <div class="blogF__content__inner">
                                        <p class="blogF__date">{{kikagaku_blog_item.kikagaku_blog_date}}</p>
                                        <h3 class="blogF__heading">{{kikagaku_blog_item.kikagaku_blog_title}}</h3>
                                        <div class="mt10 right">
                                            <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="mt60 center none__pc anim anim--scroll anim--bottom">
                    <div class="btn btn--radius btn--mark btn--blue  btn--240">
                        <div class="btn--radius__effect"></div>
                        <a href="#">VIEW MORE</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="hatarakikata-blog" class="sec sec__blog--hartarakikata">
            <div class="container__large__inner">
                <div class="update__container">
                    <div class="update__heading__container">
                        <div class="update__box update__box--blog">
                            <Title :titleClass="titleClass_blog02" :enTitle="enTitle_blog02" :jpTitle="jpTitle_blog02" :titleLine="titleLine_blog02" /> 
                            <div class="update__box__image">
                                <div class="img__scale">
                                    <img src="~assets/img/front/update/staff.png" srcset="~assets/img/front/update/staff.png 1x,~assets/img/front/update/staff-2x.png 2x" class="img__fit" alt="キカガクスタッフ">
                                </div>
                            </div>
                        </div>
                        <div class="mt60 right none__sp anim anim--scroll anim--bottom">
                            <Button :btnClass="btnClass_blog02" :linkUrl="linkUrl_blog02" :linkTitle="linkTitle_blog02" :btnEffect="btnEffect_blog02" />
                        </div>
                    </div>
                    <div class="update__content__container">
                        <div class="blogF__container  hover__container">
                            <a href="#">
                                <div class="blogF__image">
                                    <div class="img__scale">
                                        <img src="~assets/img/sample/blog1.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                                    </div>
                                </div>
                                <div class="blogF__content">
                                    <div class="blogF__content__inner">
                                        <p class="blogF__date">2019.03.01</p>
                                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                                        <div class="mt10 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="blogF__image">
                                    <div class="img__scale">
                                        <img src="~assets/img/sample/blog2.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                                    </div>
                                </div>
                                <div class="blogF__content">
                                    <div class="blogF__content__inner">
                                        <p class="blogF__date">2019.03.01</p>
                                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                                        <div class="mt10 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="blogF__image">
                                    <div class="img__scale">
                                        <img src="~assets/img/sample/blog3.jpg" class="ofi ofi--blogF" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                                    </div>
                                </div>
                                <div class="blogF__content">
                                    <div class="blogF__content__inner">
                                        <p class="blogF__date">2019.03.01</p>
                                        <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                                        <div class="mt10 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt60 center none__pc anim anim--scroll anim--bottom">
                    <div class="btn btn--radius btn--mark btn--green  btn--240">
                        <div class="btn--radius__effect"></div><a href="#">VIEW MORE</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="ceo-blog" class="sec sec__blog--ceo">
            <div class="container__large__inner">
                <div class="update__container">
                    <div class="update__heading__container">
                        <div class="update__box update__box--blog">
                            <Title :titleClass="titleClass_blog03" :enTitle="enTitle_blog03" :jpTitle="jpTitle_blog03" :titleLine="titleLine_blog03" /> 
                        </div>
                        <div class="mt120 right none__sp anim anim--scroll anim--bottom">
                            <Button :btnClass="btnClass_blog03" :linkUrl="linkUrl_blog03" :linkTitle="linkTitle_blog03" :btnEffect="btnEffect_blog03" />
                        </div>
                    </div>
                    <div class="update__content__container">
                        <div class="ceo__blogF__container hover__container">
                            <a href="#">
                                <div class="ceo__blogF__image">
                                    <div class="img__scale">
                                        <img src="~assets/img/sample/blog1.jpg" class="ofi ofi--blogC" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                                    </div>
                                </div>
                                <div class="ceo__blogF__content">
                                    <p class="blogF__date">2019.03.01</p>
                                    <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                                    <div class="ceo__blogF__btn">
                                        <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="ceo__blogF__image">
                                    <div class="img__scale">
                                        <img src="~assets/img/sample/blog2.jpg" class="ofi ofi--blogC" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                                    </div>
                                </div>
                                <div class="ceo__blogF__content">
                                    <p class="blogF__date">2019.03.01</p>
                                    <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                                    <div class="ceo__blogF__btn">
                                        <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div class="ceo__blogF__image">
                                    <div class="img__scale">
                                        <img src="~assets/img/sample/blog3.jpg" class="ofi ofi--blogC" alt="ダミーテキスト。タイトルが入ります。タイトルが入ります...">
                                    </div>
                                </div>
                                <div class="ceo__blogF__content">
                                    <p class="blogF__date">2019.03.01</p>
                                    <h3 class="blogF__heading">ダミーテキスト。タイトルが入ります。タイトルが入ります...</h3>
                                    <div class="ceo__blogF__btn">
                                        <p class="btn btn--more btn--more--blue">VIEW MORE</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt60 center none__pc anim anim--scroll anim--bottom">
                    <div class="btn btn--radius btn--mark btn--blue  btn--240">
                        <div class="btn--radius__effect"></div>
                        <a href="#">VIEW MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        'kikagaku_blog_items'
    ],
        data() {
            return {
                    titleClass_news: `heading--left anim--left`,
                    enTitle_news: `news`,
                    jpTitle_news: `ニュース`,
                    titleLine_news: 'heading__en--line',

                    titleClass_blog01: `heading--left anim--left`,
                    enTitle_blog01: `blog`,
                    jpTitle_blog01: `ブログ`,
                    titleLine_blog01: 'heading__en--line',

                    titleClass_blog02: `heading--left anim--left`,
                    enTitle_blog02: `blog`,
                    jpTitle_blog02: `働き方ブログ`,
                    titleLine_blog02: 'heading__en--line',

                    titleClass_blog03: `heading--left anim--left`,
                    enTitle_blog03: `blog`,
                    jpTitle_blog03: `社長ブログ`,
                    titleLine_blog03: 'heading__en--line',

                    btnClass_news: `btn--radius btn--mark btn--blue btn--240`,
                    btnEffect_news: `btn--radius__effect`,
                    linkUrl_news:`#`,
                    linkTitle_news: `VIEW MORE`,

                    btnClass_blog01: `btn--radius btn--mark btn--blue  btn--240`,
                    btnEffect_blog01: `btn--radius__effect`,
                    linkUrl_blog01:`#`,
                    linkTitle_blog01: `VIEW MORE`,

                    btnClass_blog02: `btn btn--radius btn--mark btn--green  btn--240`,
                    btnEffect_blog02: `btn--radius__effect`,
                    linkUrl_blog02:`#`,
                    linkTitle_blog02: `VIEW MORE`,

                    btnClass_blog03: `btn btn--radius btn--mark btn--blue  btn--240`,
                    btnEffect_blog03: `btn--radius__effect`,
                    linkUrl_blog03:`#`,
                    linkTitle_blog03: `VIEW MORE`,

            }
        },
        
}
</script>

<style>

/*  トップページ --> ニュース
------------------------------------------------------------------------------*/
.sec__update {
 position: relative;
 padding: 16vw 0;
}

.sec__update:after {
 position: absolute;
 top: 0;
 right: 0;
 content: '';
 display: inline-block;
 width: 100vw;
 height: 59.1875vw;
 background-image: url(~assets/img/front/update/bg.jpg);
 background-repeat: no-repeat;
 background-position: top right;
 z-index: -3;
}

@media screen and (min-width: 801px) {
 .sec__update {
  padding: 6.25vw 0 0 0;
 }
}

@media screen and (min-width: 1601px) {
 .sec__update {
  padding: 100px 0 0 0;
 }
}

.update__heading__container {
 position: relative;
 margin-bottom: 5.33333vw;
}

@media screen and (min-width: 801px) {
 .update__container {
  display: flex;
  justify-content: space-between;
 }
 .update__heading__container {
  margin-bottom: 0;
  width: 21.5625vw;
 }
 .update__content__container {
  width: 67.1875vw;
 }
}

@media screen and (min-width: 1601px) {
 .update__heading__container {
  width: 345px;
 }
 .update__content__container {
  width: 1025px;
 }
}

.update__box {
 padding: 8vw 0 0 0;
 width: 100%;
 height: 33.33333vw;
}

.update__box--news.is-move {
 background-image: linear-gradient(0deg, #000, #000), linear-gradient(0deg, #000, #000), linear-gradient(0deg, #000, #000), linear-gradient(0deg, #000, #000);
 background-repeat: no-repeat;
 background-size: 0.53333vw 100%, 100% 0.53333vw, 0.53333vw 100%, 100% 0.53333vw;
 background-position: left bottom, left top, right top, right bottom;
 animation: square_anim 2s linear forwards;
}

.update__box--blog {
 color: #fff !important;
}

.update__box--blog:before {
 content: '';
 position: absolute;
 top: -1.06667vw;
 left: -1.06667vw;
 width: calc(100% + 2.13333vw);
 height: 35.46667vw;
 z-index: -1;
}

#kikagaku-blog .update__box--blog:before {
 background-color: #0060b0;
}

#hatarakikata-blog .update__box--blog:before {
 background-color: #15b48a;
}

#ceo-blog .update__heading__container:after {
 content: '';
 position: absolute;
 top: -1.06667vw;
 right: -1.06667vw;
 width: calc(100% + 2.13333vw);
 height: 35.46667vw;
 z-index: -1;
 background-color: #15b48a;
 background-image: url(~assets/img/front/update/ceo_blog_bg.jpg);
 background-size: cover;
}

.update__box--blog.is-move {
 background-image: linear-gradient(0deg, #fff, #fff), linear-gradient(0deg, #fff, #fff), linear-gradient(0deg, #fff, #fff), linear-gradient(0deg, #fff, #fff);
 background-repeat: no-repeat;
 background-size: 0.53333vw 100%, 100% 0.53333vw, 0.53333vw 100%, 100% 0.53333vw;
 background-position: left bottom, left top, right top, right bottom;
 animation: square_anim 2s linear forwards;
}

.update__box__image {
 position: absolute;
 top: -25.86667vw;
 left: 26.66667vw;
 width: 63.86667vw;
 z-index: -2;
}

@media screen and (min-width: 801px) {
 .update__box {
  padding: 5.125vw 0 0 6.25vw;
  width: 20.625vw;
  height: 15.625vw;
 }
 .update__box--news.is-move {
  background-size: 0.125vw 100%, 100% 0.125vw, 0.125vw 100%, 100% 0.125vw;
 }
 .update__box--blog:before {
  top: -0.5vw;
  left: -0.5vw;
  width: 21.625vw;
  height: 16.625vw;
 }
 #ceo-blog .update__heading__container:after {
  top: -1.06667vw;
  right: -1.06667vw;
  width: 475px;
  height: 437px;
 }
 .update__box--blog.is-move {
  background-size: 0.125vw 100%, 100% 0.125vw, 0.125vw 100%, 100% 0.125vw;
 }
 .update__box__image {
  top: -12.125vw;
  left: -6.25vw;
  width: 29.9375vw;
 }
}

@media screen and (min-width: 1601px) {
 .update__box {
  padding: 82px 0 0 100px;
  width: 330px;
  height: 250px;
 }
 .update__box--news.is-move {
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
 }
 .update__box--blog:before {
  top: -8px;
  left: -8px;
  width: 346px;
  height: 266px;
 }
 #ceo-blog .update__heading__container:after {
  top: -90px;
  right: -10px;
  width: 475px;
  height: 437px;
 }
 .update__box--blog.is-move {
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
 }
 .update__box__image {
  top: -194px;
  left: -100px;
  width: 479px;
 }
}

@keyframes square_anim {
 00% {
  background-size: 2px 0, 0 2px, 2px 0, 0 2px;
 }
 25% {
  background-size: 2px 100%, 0 2px, 2px 0, 0 2px;
 }
 50% {
  background-size: 2px 100%, 100% 2px, 2px 0, 0 2px;
 }
 75% {
  background-size: 2px 100%, 100% 2px, 2px 100%, 0 2px;
 }
 100% {
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
 }
}

/*  トップページ --> ニュース
------------------------------------------------------------------------------*/
.newsF__container {
 position: relative;
 display: block;
 padding: 3.33333vw 4.66667vw 5.33333vw 4.66667vw;
 width: 100%;
 background-color: #fff;
 box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
}

.newsF__container a {
 position: relative;
 display: block;
 padding: 2em 1em 1em 1em;
 width: 100%;
 border-bottom: 1px solid #eeeeee;
}

.newsF__container a:hover {
 box-shadow: 3.214px 3.83px 20px 0px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 801px) {
 .newsF__container {
  padding: 2.1875vw 4.6875vw 3.125vw 4.6875vw;
 }
}

@media screen and (min-width: 1601px) {
 .newsF__container {
  padding: 35px 75px 50px 75px;
 }
}

.newsF__cat {
 margin-left: 1em;
 padding: .3em 1em;
 color: #fff;
 font-family: "Montserrat", sans-serif;
 font-size: 3.06667vw;
 font-weight: 700;
 text-align: center;
}

.newsF__cat--cat1 {
 background-color: #0060b0;
}

.newsF__cat--cat2 {
 background-color: #15b48a;
}

.newsF__cat--cat3 {
 background-color: #f8b551;
}

.newsF__info {
 display: flex;
 align-items: center;
 margin-bottom: .5em;
}

.newsF__date {
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
}

.newsF__heading {
 display: inline-block;
 width: 100%;
 font-weight: 500;
}

.newsF__heading span {
 position: relative;
}

.newsF__heading span:after {
 content: '';
 position: absolute;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 1px;
 background-color: #adadad;
}

.newsF__btn {
 margin-top: 2.66667vw;
 text-align: right;
}

@media screen and (min-width: 801px) {
 .newsF__cat {
  font-size: 0.8125vw;
 }
 .newsF__info {
  display: flex;
  align-items: center;
 }
 .newsF__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
 }
 .newsF__heading {
  width: 37.8125vw;
 }
 .newsF__btn {
  margin-top: 0;
  width: 13.4375vw;
  text-align: left;
 }
}

@media screen and (min-width: 1601px) {
 .newsF__cat {
  font-size: 13px;
  font-size: 1.3rem;
 }
 .newsF__heading {
  width: 605px;
 }
 .newsF__btn {
  width: 165px;
 }
}

/*  トップページ --> ブログ
------------------------------------------------------------------------------*/
.sec__blog--kikagaku {
 padding: 18vw 0 17.33333vw 0;
}

.sec__blog--kikagaku:after {
 content: '';
 position: absolute;
 right: 0;
 top: 34.66667vw;
 width: 100%;
 height: calc(100% - 34.66667vw);
 background-color: #cadded;
 z-index: -2;
}

.sec__blog--hartarakikata {
 padding: 18vw 0 17.33333vw 0;
}

.sec__blog--hartarakikata:after {
 content: '';
 position: absolute;
 right: 0;
 top: 34.66667vw;
 width: 100%;
 height: calc(100% - 34.66667vw);
 background-color: #d0f0e8;
 z-index: -2;
}

.sec__blog--ceo {
 padding: 18vw 0 17.33333vw 0;
}

.sec__blog--ceo:after {
 content: '';
 position: absolute;
 right: 0;
 top: 34.66667vw;
 width: 100%;
 height: calc(100% - 34.66667vw);
 background-color: #d4ebf7;
 z-index: -2;
}

@media screen and (min-width: 801px) {
 .sec__blog--kikagaku {
  padding: 5vw 0 4.6875vw 0;
 }
 .sec__blog--kikagaku:after {
  top: 6.5625vw;
  width: 81.25vw;
  height: 26.875vw;
 }
 .sec__blog--hartarakikata {
  padding: 14.0625vw 0 4.6875vw 0;
 }
 .sec__blog--hartarakikata:after {
  top: 21.875vw;
  width: 81.25vw;
  height: 21.25vw;
 }
 .sec__blog--ceo {
  padding: 8.4375vw 0 8.125vw 0;
 }
 .sec__blog--ceo:after {
  top: 5vw;
  width: 81.25vw;
  height: 32.8125vw;
 }
}

@media screen and (min-width: 1601px) {
 .sec__blog--kikagaku {
  padding: 80px 0 75px 0;
 }
 .sec__blog--kikagaku:after {
  top: 105px;
  height: 430px;
 }
 .sec__blog--hartarakikata {
  padding: 225px 0 75px 0;
 }
 .sec__blog--hartarakikata:after {
  top: 350px;
  height: 340px;
 }
 .sec__blog--ceo {
  padding: 135px 0 130px 0;
 }
 .sec__blog--ceo:after {
  top: 80px;
  height: 525px;
 }
}

.blogF__container a {
 position: relative;
 display: block;
 margin-bottom: 6.66667vw;
 width: 88vw;
 z-index: 3;
}

.blogF__image {
 display: block;
 background-color: #fff;
 transition: .3s;
}

.blogF__container a:hover .blogF__image {
 box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
}

.blogF__content {
 position: relative;
 top: -6.66667vw;
 left: 2.66667vw;
 margin-bottom: -6.66667vw;
 height: 40.66667vw;
 background-color: #fff;
}

#kikagaku-blog .blogF__content {
 border: 0.8vw solid #0060b0;
}

#hatarakikata-blog .blogF__content {
 border: 0.8vw solid #15b48a;
}

.blogF__content:before {
 content: '';
 position: absolute;
 top: 2.13333vw;
 left: 2.13333vw;
 width: 100%;
 height: 100%;
 z-index: 1;
}

#kikagaku-blog .blogF__content:before {
 background-color: #0060b0;
}

#hatarakikata-blog .blogF__content:before {
 background-color: #15b48a;
}

.blogF__content__inner {
 position: absolute;
 top: 0;
 left: 0;
 padding: 4vw 3.33333vw;
 width: 100%;
 height: 100%;
 background-color: #fff;
 z-index: 2;
}

@media screen and (min-width: 801px) {
 .blogF__container {
  display: flex;
  margin-left: -3.4375vw;
 }
 .blogF__container a {
  margin-left: 3.4375vw;
  margin-bottom: 0;
  width: calc(33.33333% - 3.4375vw);
 }
 .blogF__content {
  top: -3.125vw;
  left: 1.25vw;
  margin-bottom: -3.125vw;
  height: 11.25vw;
 }
 #kikagaku-blog .blogF__content {
  border: 0.1875vw solid #0060b0;
 }
 #hatarakikata-blog .blogF__content {
  border: 0.1875vw solid #15b48a;
 }
 .blogF__content:before {
  top: 0.5vw;
  left: 0.5vw;
 }
 .blogF__content__inner {
  padding: 1.25vw 0.9375vw;
 }
}

@media screen and (min-width: 1601px) {
 .blogF__container {
  margin-left: -55px;
 }
 .blogF__container a {
  width: calc(33.33333% - 55px);
 }
 .blogF__content {
  top: -50px;
  left: 20px;
  margin-bottom: -50px;
  height: 180px;
 }
 #kikagaku-blog .blogF__content {
  border: 3px solid #0060b0;
 }
 #hatarakikata-blog .blogF__content {
  border: 3px solid #15b48a;
 }
 .blogF__content:before {
  top: 8px;
  left: 8px;
 }
 .blogF__content__inner {
  padding: 20px 15px;
 }
}

.blogF__date {
 margin-bottom: 1em;
 font-family: "Montserrat", sans-serif;
 font-weight: 600;
}

#kikagaku-blog .blogF__date {
 color: #0060b0;
}

#hatarakikata-blog .blogF__date {
 color: #15b48a;
}

#ceo-blog .blogF__date {
 color: #0060b0;
}

.blogF__heading {
 font-weight: 700;
 min-height: calc(1.65em * 2);
 line-height: 1.65em;
}

.ceo__blogF__container {
 margin: 0 auto;
 width: 82.66667vw;
}

.ceo__blogF__container a {
 display: block;
 position: relative;
 margin-bottom: 8vw;
 background-color: #fff;
 box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
 border-radius: 1.5em;
}

.ceo__blogF__image .img__scale {
 border-radius: 1.5em 1.5em 0 0;
}

.ceo__blogF__content {
 position: relative;
 padding: 4vw 5.33333vw 20vw 5.33333vw;
}

.ceo__blogF__btn {
 position: absolute;
 bottom: 6.66667vw;
 right: 5.33333vw;
}

@media screen and (min-width: 801px) {
 .ceo__blogF__container {
  display: flex;
  margin: 0;
  margin-left: -3.125vw;
  width: 100%;
 }
 .ceo__blogF__container a {
  margin: 0;
  margin-left: 3.125vw;
  width: calc(33.33333% - 3.125vw);
 }
 .ceo__blogF__content {
  padding: 1.25vw 0.9375vw 6.25vw 0.9375vw;
 }
 .ceo__blogF__btn {
  position: absolute;
  bottom: 1.875vw;
  right: 2.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .ceo__blogF__container {
  margin-left: -50px;
 }
 .ceo__blogF__container a {
  margin-left: 50px;
  width: calc(33.33333% - 50px);
 }
 .ceo__blogF__content {
  padding: 20px 15px 100px 15px;
 }
 .ceo__blogF__btn {
  bottom: 30px;
  right: 40px;
 }
}

</style>