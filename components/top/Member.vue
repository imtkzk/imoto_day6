<template>

    <section id="member" class="sec sec__member">
        <p class="sec__heading sec__heading--topL">member</p>
        <div class="container__large__inner">
            <div class="container__inner">
                <Title :titleClass="titleClass" :enTitle="enTitle" :jpTitle="jpTitle" :titleLine="titleLine" />
                <div class="member__slide anim anim--scroll anim--bottom">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide memberF hover__container">
                                <a href="#">
                                    <div class="memberF__image">
                                        <img src="~assets/img/sample/member1.jpg" class="ofi ofi--member" alt="吉崎 亮介">
                                        <p class="memberF__position">代表取締役社長</p>
                                    </div>
                                    <div class="memberF__content">
                                        <h3 class="mb20 memberF__name ellipsis">吉崎 亮介<span>RYOSUKE YOSHIZAKI</span></h3>
                                        <p class="text">機械学習による製造業のプロセス改善を専門とし、画像処理（AR）、ロボット工学、制御工学の研究にも従事。</p>
                                        <div class="mt20 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide memberF hover__container">
                                <a href="#">
                                    <div class="memberF__image">
                                        <div class="img__scale">
                                            <img src="~assets/img/sample/member2.jpg" class="ofi ofi--member" alt="今西 航平">
                                        </div>
                                        <p class="memberF__position">執行役員CLO</p>
                                    </div>
                                    <div class="memberF__content">
                                        <h3 class="mb20 memberF__name ellipsis">今西 航平<span>KOHEI IMANISHI</span></h3>
                                        <p class="text">AI関連セミナーにて教育実績を持ち、セミナー事業の責任者としてディープラーニングを中心とした機械学習教育に注力。</p>
                                        <div class="mt20 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide memberF hover__container">
                                <a href="#">
                                    <div class="memberF__image">
                                        <div class="img__scale">
                                            <img src="~assets/img/sample/member1.jpg" class="ofi ofi--member" alt="吉崎 亮介">
                                        </div>
                                        <p class="memberF__position">代表取締役社長</p>
                                    </div>
                                    <div class="memberF__content">
                                        <h3 class="mb20 memberF__name ellipsis">吉崎 亮介<span>RYOSUKE YOSHIZAKI</span></h3>
                                        <p class="text">機械学習による製造業のプロセス改善を専門とし、画像処理（AR）、ロボット工学、制御工学の研究にも従事。</p>
                                        <div class="mt20 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide memberF hover__container">
                                <a href="#">
                                    <div class="memberF__image">
                                        <div class="img__scale">
                                            <img src="~assets/img/sample/member2.jpg" class="ofi ofi--member" alt="今西 航平">
                                        </div>
                                        <p class="memberF__position">執行役員CLO</p>
                                    </div>
                                    <div class="memberF__content">
                                        <h3 class="mb20 memberF__name ellipsis">今西 航平<span>KOHEI IMANISHI</span></h3>
                                        <p class="text">AI関連セミナーにて教育実績を持ち、セミナー事業の責任者としてディープラーニングを中心とした機械学習教育に注力。</p>
                                        <div class="mt20 right">
                                            <p class="btn btn--more btn--more--green">VIEW MORE</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="slide__pagination"></div>
                    <div class="slide__btn__prev"></div>
                    <div class="slide__btn__next"></div>
                </div>
                <div class="member__btn center anim anim--scroll anim--bottom">
                    <Button :btnClass="btnClass" :linkUrl="linkUrl" :linkTitle="linkTitle" :btnEffect="btnEffect" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                    titleClass: `heading--center anim--bottom`,
                    enTitle: `member`,
                    jpTitle: `メンバー`,
                    titleLine: '',

                    btnClass: `btn--radius btn--arrow btn--green btn--370`,
                    btnEffect: `btn--radius__effect`,
                    linkUrl:`#`,
                    linkTitle: `メンバー紹介と会社の文化`

            }
        },
        
}
</script>

<style>

/*  トップページ --> メンバー
------------------------------------------------------------------------------*/
.sec__member {
 padding: 13.33333vw 0;
}

@media screen and (min-width: 801px) {
 .sec__member {
  padding: 7.1875vw 0 2.8125vw 0;
 }
}

@media screen and (min-width: 1601px) {
 .sec__member {
  padding: 115px 0 45px 0;
 }
}

.member__slide {
 position: relative;
 margin: 0 auto;
 width: 74.66667vw;
}

.member__slide:after {
 content: '';
 position: absolute;
 top: -14.66667vw;
 left: 50%;
 width: 88vw;
 height: 128vw;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%);
 background-image: url(~assets/img/front/member/pattern.jpg);
 background-size: cover;
 background-position: center;
 z-index: -1;
}

@media screen and (min-width: 801px) {
 .member__slide {
  width: 100%;
 }
 .member__slide:after {
  top: -5.625vw;
  width: 87.5vw;
  height: 44.6875vw;
 }
}

@media screen and (min-width: 1601px) {
 .member__slide:after {
  top: -90px;
  width: 1400px;
  height: 715px;
 }
}

.memberF {
 background-color: #fff;
 box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.03);
}

.memberF__image {
 position: relative;
 margin: 0 auto;
 width: 46.66667vw;
}

.memberF__position {
 position: absolute;
 bottom: 0;
 left: 0;
 display: block;
 width: 100%;
 padding: .5em 1em;
 color: #fff;
 font-size: 3.46667vw;
 font-weight: 700;
 text-align: center;
}

.memberF:nth-of-type(1n) .memberF__position {
 background-color: #0060b0;
}

.memberF:nth-of-type(2n) .memberF__position {
 background-color: #90be1f;
}

.memberF:nth-of-type(3n) .memberF__position {
 background-color: #f39800;
}

.memberF__content {
 padding: 4vw 4vw 2.66667vw 4vw;
}

.memberF__name {
 font-size: 4.53333vw;
 font-weight: 700;
}

.memberF__name span {
 margin-left: 1em;
 font-family: "Montserrat", sans-serif;
 font-size: 2vw;
 font-weight: 600;
}

.memberF:nth-of-type(1n) .memberF__name span {
 color: #0060b0;
}

.memberF:nth-of-type(2n) .memberF__name span {
 color: #90be1f;
}

.memberF:nth-of-type(3n) .memberF__name span {
 color: #f39800;
}

@media screen and (min-width: 801px) {
 .memberF__image {
  width: 18.75vw;
 }
 .memberF__position {
  display: inline-block;
  width: auto;
  font-size: 1.125vw;
 }
 .memberF__content {
  padding: 1.25vw 1.25vw 0.625vw 1.25vw;
 }
 .memberF__name {
  font-size: 1.5vw;
 }
 .memberF__name span {
  font-size: 0.9375vw;
 }
}

@media screen and (min-width: 1601px) {
 .memberF__image {
  width: 300px;
 }
 .memberF__position {
  font-size: 18px;
  font-size: 1.8rem;
 }
 .memberF__content {
  padding: 20px 20px 10px 20px;
 }
 .memberF__name {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .memberF__name span {
  font-size: 15px;
  font-size: 1.5rem;
 }
}

.member__btn {
 margin-top: 16vw;
}

@media screen and (min-width: 801px) {
 .member__btn {
  margin-top: 3.75vw;
 }
}

@media screen and (min-width: 1601px) {
 .member__btn {
  margin-top: 60px;
 }
}

/* ----------------- swiper.js - */
.swiper-container {
 margin: 0 auto calc(60 / 750 * 100vw) auto;
 width: 100%;
}

/* 矢印ボタン */
.slide__btn__prev,
.slide__btn__next {
 position: absolute;
 top: 50%;
 display: inline-block;
 background-color: rgba(0, 0, 0, 0.2);
 width: 6.4vw;
 height: 19.06667vw;
 -webkit-transform: translateY(-50%);
 transform: translateY(-50%);
 z-index: 1;
 transition: .3s;
}

.slide__btn__prev {
 left: -6.66667vw;
}

.slide__btn__next {
 right: -6.66667vw;
}

.slide__btn__prev:hover,
.slide__btn__next:hover {
 opacity: 0.7;
}

.slide__btn__prev:after,
.slide__btn__next:after {
 position: absolute;
 top: 50%;
 left: 50%;
 color: #fff;
 font-size: 2.93333vw;
 font-weight: 700;
 -webkit-transform: translate(-50%, -50%);
 transform: translate(-50%, -50%);
}

.slide__btn__prev:after {
 content: '◀︎';
}

.slide__btn__next::after {
 content: '▶︎';
}

@media screen and (min-width: 801px) {
 .slide__btn__prev,
 .slide__btn__next {
  width: 3vw;
  height: 8.9375vw;
 }
 .slide__btn__prev {
  left: -3.625vw;
 }
 .slide__btn__next {
  right: -3.625vw;
 }
 .slide__btn__prev:after,
 .slide__btn__next:after {
  font-size: 1.3125vw;
 }
}

@media screen and (min-width: 1601px) {
 .slide__btn__prev,
 .slide__btn__next {
  width: 48px;
  height: 143px;
 }
 .slide__btn__prev {
  left: -58px;
 }
 .slide__btn__next {
  right: -58px;
 }
 .slide__btn__prev:after,
 .slide__btn__next:after {
  font-size: 21px;
  font-size: 2.1rem;
 }
}

.slide__pagination {
 position: absolute;
 left: 50%;
 bottom: -5.33333vw;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%);
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
 bottom: -1em;
}

.swiper-pagination-bullet {
 border-radius: 50%;
 margin-right: 1em;
 width: .3em;
 height: .3em;
 background-color: #cccccc;
}

.swiper-pagination-bullet:last-of-type {
 margin-right: 0;
}

.swiper-pagination-bullet-active {
 background-color: #15b48a;
}

@media screen and (min-width: 801px) {
 .slide__pagination {
  bottom: -2.5vw;
 }
 .swiper-pagination-bullet {
  width: .6em;
  height: .6em;
 }
}

@media screen and (min-width: 1601px) {
 .slide__pagination {
  bottom: -40px;
 }
}

</style>