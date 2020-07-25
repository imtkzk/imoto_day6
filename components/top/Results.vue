<template>
    <section id="results" class="sec sec__results">
        <p class="sec__heading sec__heading--topR">results</p>
        <div class="container__inner">
            <div class="mb70">
                        <Title :titleClass="titleClass" :enTitle="enTitle" :jpTitle="jpTitle" :titleLine="titleLine" />
                <div class="resultsF__container">
                    <div class="resultsF anim anim--scroll anim--bottom">
                        <div class="resultsF__inner">
                            <div class="resultsF__heading__container">
                                <h3 class="resultsF__heading">受講生<span id="count1" class="resultsF__heading__num" data-from="24000" data-to="25000">24000</span>人以上</h3>
                            </div>
                            <div class="resultsF__image">
                                <div class="resultsF__image__inner">
                                    <img src="~assets/img/front/results/image1.png" srcset="~assets/img/front/results/image1.png 1x,~assets/img/front/results/image1-2x.png 2x" class="img__fit" alt="受講生25,000人以上">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="resultsF anim anim--scroll anim--bottom">
                        <div class="resultsF__inner">
                            <div class="resultsF__heading__container">
                                <h3 class="resultsF__heading">受講生満足度<span id="count2" class="resultsF__heading__num" data-from="70" data-to="98">70</span>%</h3>
                            </div>
                            <div class="resultsF__image">
                                <div class="resultsF__image__inner">
                                    <img src="~assets/img/front/results/image2.png" srcset="~assets/img/front/results/image2.png 1x,~assets/img/front/results/image2-2x.png 2x" class="img__fit" alt="受講生満足度98%">
                                </div>
                                <p class="resultsF__image__text">※満足度5段階中4以上の割合</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portfolio">
                <div class="leftC ">
                    <h2 class="mb60 heading__en heading__en--line anim anim--scroll anim--left">portfolio</h2>
                </div>
                <div class="portfolioF__container hover__container">
                    <template v-for="item in items">
                        <a :href="item.url" class="opacity anim anim--scroll anim--bottom">
                            <div class="portfolioF__image">
                                <div class="img__scale">
                                    <img :src="item.img_url" class="ofi ofi--portfolioF" :alt="item.img_alt">
                                </div>
                            </div>
                            <div class="portfolioF__content">
                                <h3 class="portfolioF__heading" v-html="item.title"></h3>
                            </div>
                        </a>
                    </template>
                </div>
                <div class="mt80 center anim anim--scroll anim--bottom">
                        <Button :btnClass="btnClass" :linkUrl="linkUrl" :linkTitle="linkTitle" :btnEffect="btnEffect" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    props: [
        'items'
    ],
        data() {
            return {
                    btnClass: `btn--radius btn--arrow btn--blue btn--320`,
                    btnEffect: `btn--radius__effect`,
                    linkUrl:`#`,
                    linkTitle: `実績の詳細を見る`,

                    titleClass: `heading--left anim--left`,
                    enTitle: `results`,
                    jpTitle: `キカガクの実績`,
                    titleLine: 'heading__en--line'
            }
        },
        
}
</script>

<style>

/*  トップページ --> キカガクの実績
------------------------------------------------------------------------------*/
.sec__results {
 position: relative;
 padding: 16vw 0;
 background-image: url(~assets/img/front/results/bg.jpg);
 background-size: cover;
 background-repeat: no-repeat;
}

@media screen and (min-width: 801px) {
 .sec__results {
  padding: 7.5vw 0 6.25vw 0;
 }
}

@media screen and (min-width: 1601px) {
 .sec__results {
  padding: 120px 0 100px 0;
 }
}

.resultsF {
 padding: 2.66667vw;
 background-image: -moz-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 background-image: -webkit-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
}

.resultsF:nth-of-type(1) {
 margin-bottom: 4vw;
}

.resultsF__inner {
 background-color: #fff;
}

@media screen and (min-width: 801px) {
 .resultsF__container {
  display: flex;
  justify-content: space-between;
 }
 .resultsF {
  padding: 0.625vw;
  width: 36.6875vw;
 }
 .resultsF:nth-of-type(1) {
  margin-bottom: 0;
 }
}

@media screen and (min-width: 1601px) {
 .resultsF {
  padding: 10px;
  width: 587px;
 }
}

.resultsF__heading__container {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 26.26667vw;
 background-image: url(~assets/img/front/results/head_bg.png);
 background-size: contain;
 background-repeat: no-repeat;
}

.resultsF__heading {
 display: flex;
 justify-content: center;
 align-items: flex-end;
 color: #fff;
 font-size: 4.53333vw;
 font-weight: 700;
 letter-spacing: .3em;
}

.resultsF__heading__num {
 position: relative;
 top: -.2em;
 padding: 0 .1em;
 font-family: "Montserrat", sans-serif;
 font-size: 12vw;
 font-weight: 700;
 letter-spacing: 0;
}

@media screen and (min-width: 801px) {
 .resultsF__heading__container {
  height: 10.625vw;
 }
 .resultsF__heading {
  font-size: 1.5vw;
 }
 .resultsF__heading__num {
  font-size: 5vw;
 }
}

@media screen and (min-width: 1601px) {
 .resultsF__heading__container {
  height: 170px;
 }
 .resultsF__heading {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .resultsF__heading__num {
  font-size: 80px;
  font-size: 8.0rem;
 }
}

.resultsF__image {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 height: 45.33333vw;
}

.resultsF__image__text {
 position: absolute;
 bottom: 1em;
 right: 2em;
 color: #0060b0;
}

.resultsF__image__inner {
 margin: 0 auto;
 padding-bottom: 1.5em;
}

.resultsF:nth-of-type(1) .resultsF__image__inner {
 width: 46.93333vw;
}

.resultsF:nth-of-type(2) .resultsF__image__inner {
 width: 52.26667vw;
}

@media screen and (min-width: 801px) {
 .resultsF__image {
  height: 18.125vw;
 }
 .resultsF:nth-of-type(1) .resultsF__image__inner {
  width: 22vw;
 }
 .resultsF:nth-of-type(2) .resultsF__image__inner {
  width: 24.5vw;
 }
}

@media screen and (min-width: 1601px) {
 .resultsF__image {
  height: 290px;
 }
 .resultsF:nth-of-type(1) .resultsF__image__inner {
  width: 352px;
 }
 .resultsF:nth-of-type(2) .resultsF__image__inner {
  width: 392px;
 }
}

/*  トップページ --> ポートフォリオ
------------------------------------------------------------------------------*/
.portfolioF__container a {
 display: block;
 margin-bottom: 5.33333vw;
 border-radius: 1.2em;
 background-color: #fff;
}

.portfolioF__container .img__scale {
 border-radius: 1.2em 1.2em 0 0;
}

@media screen and (min-width: 801px) {
 .portfolioF__container {
  display: flex;
  margin-left: -1.25vw;
 }
 .portfolioF__container a {
  margin-left: 1.25vw;
  margin-bottom: 0;
  width: calc(33.33333% - 1.25vw);
 }
}

@media screen and (min-width: 1601px) {
 .portfolioF__container {
  margin-left: -20px;
 }
 .portfolioF__container a {
  margin-left: 20px;
  width: calc(33.33333% - 20px);
 }
}

.portfolioF__content {
 padding: 3.33333vw 4vw 4.66667vw 4vw;
}

.portfolioF__heading {
 font-size: 3.73333vw;
 font-weight: 700;
 line-height: 1.6em;
 min-height: calc(1.6 * 2);
}

@media screen and (min-width: 801px) {
 .portfolioF__content {
  padding: 0.9375vw 1.875vw 1.875vw 1.875vw;
 }
 .portfolioF__heading {
  font-size: 1.125vw;
 }
}

@media screen and (min-width: 1601px) {
 .portfolioF__content {
  padding: 15px 30px 30px 30px;
 }
 .portfolioF__heading {
  font-size: 18px;
  font-size: 1.8rem;
 }
}

</style>