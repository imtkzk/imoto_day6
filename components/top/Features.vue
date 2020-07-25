<template>
    <section id="features" class="sec sec__features">
        <p class="sec__heading sec__heading--verL">features</p>
        <div class="container__inner">
            <Title :titleClass="titleClass" :enTitle="enTitle" :jpTitle="jpTitle" :titleLine="titleLine" />
            <div class="featuresF__container">
                <div class="featuresF anim anim--scroll anim--bottom">
                    <p class="mb25 featuresF__label">REASON<span>01</span></p>
                    <div class="featuresF__image">
                        <div class="featuresF__image__inner">
                            <img src="~assets/img/front/features/image1.jpg" srcset="~assets/img/front/features/image1.jpg 1x,~assets/img/front/features/image1-2x.jpg 2x" class="img__fit" alt="圧倒的にわかりやすい講師">
                        </div>
                    </div>
                    <h3 class="featuresF__heading"><span>圧倒的にわかりやすい講師</span></h3>
                    <p class="mt05 text featuresF__text">キカガクは「教育のプロ集団」です。<br>難しいことをわかりやすく伝えるために徹底た訓練を全員が受けています。講師は正社員のみに絞り、講義の質を維持することを最優先に考えています。</p>
                </div>
                <div class="featuresF anim anim--scroll anim--bottom">
                    <p class="mb25 featuresF__label">REASON<span>02</span></p>
                    <div class="featuresF__image">
                        <div class="featuresF__image__inner">
                            <img src="~assets/img/front/features/image2.jpg" srcset="~assets/img/front/features/image2.jpg 1x,~assets/img/front/features/image2-2x.jpg 2x" class="img__fit" alt="業界に特化した内容も充実">
                        </div>
                    </div>
                    <h3 class="featuresF__heading"><span>業界に特化した内容も充実</span></h3>
                    <p class="mt05 text featuresF__text">製造業やリテール領域をはじめとして、新しい分野での実践的な教育の開拓実績があります。実績豊富な講師によるカスタマイズ研修も開催可能です。実現場への導入を本気で考えるからこそ、お客様と二人三脚で講座を作っていきます。</p>
                </div>
                <div class="featuresF anim anim--scroll anim--bottom">
                    <p class="mb25 featuresF__label">REASON<span>03</span></p>
                    <div class="featuresF__image">
                        <div class="featuresF__image__inner">
                            <img src="~assets/img/front/features/image3.jpg" srcset="~assets/img/front/features/image3.jpg 1x,~assets/img/front/features/image3-2x.jpg 2x" class="img__fit" alt="大手企業や資格試験との連携">
                        </div>
                    </div>
                    <h3 class="featuresF__heading"><span>大手企業や資格試験との連携</span></h3>
                    <p class="mt05 text featuresF__text">日本マイクロソフト社との共同開催や、日本ディープラーニング協会(JDLA)のE資格認定講座、経済産業省の定める第四次産業革命スキル修得認定講座に指定いただき、教育内容の実用性が証明されています。</p>
                </div>
            </div>
            <div class="mt100 center anim anim--scroll anim--bottom">
                <Button :btnClass="btnClass" :linkUrl="linkUrl" :linkTitle="linkTitle" :btnEffect="btnEffect" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                    titleClass: `heading--right anim--right`,
                    enTitle: `features`,
                    jpTitle: `キカガクが選ばれる理由`,
                    titleLine: 'heading__en--line',

                    btnClass: `btn--radius btn--arrow btn--blue btn--320`,
                    btnEffect: `btn--radius__effect`,
                    linkUrl:`#`,
                    linkTitle: `実績の詳細を見る`

            }
        },
        
}
</script>

<style>

/*  トップページ --> キカガクのミッション
------------------------------------------------------------------------------*/
.sec__features {
 position: relative;
 padding: 16vw 0;
 background-image: url(~assets/img/front/features/bg.jpg);
 background-size: cover;
 background-repeat: no-repeat;
}

@media screen and (min-width: 801px) {
 .sec__features {
  padding: 7.5vw 0 6.25vw 0;
 }
}

@media screen and (min-width: 1601px) {
 .sec__features {
  padding: 120px 0 100px 0;
 }
}

.featuresF {
 position: relative;
 display: block;
 margin-bottom: 5.33333vw;
}

@media screen and (min-width: 801px) {
 .featuresF__container {
  display: flex;
  margin-left: -2.9375vw;
 }
 .featuresF {
  margin-left: 2.9375vw;
  margin-bottom: 0;
  width: calc(33.33333% - 2.9375vw);
 }
}

@media screen and (min-width: 1601px) {
 .featuresF__container {
  margin-left: -47px;
 }
 .featuresF {
  margin-left: 47px;
  width: calc(33.33333% - 47px);
 }
}

.featuresF__image {
 position: relative;
 width: calc(100% - .5em);
 height: 68.66667vw;
}

.featuresF__image__inner {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 2;
}

.featuresF__image:before {
 content: '';
 position: absolute;
 top: -.5em;
 right: -.5em;
 width: 100%;
 height: 100%;
 background-image: -moz-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 background-image: -webkit-linear-gradient(0deg, #0bbafb 0%, #4285ec 100%);
 z-index: 1;
}

@media screen and (min-width: 801px) {
 .featuresF__image {
  width: 100%;
  height: 16.875vw;
 }
}

@media screen and (min-width: 1601px) {
 .featuresF__image {
  height: 270px;
 }
}

.featuresF__label {
 display: flex;
 align-items: flex-end;
 color: #0060b0;
 font-family: "Montserrat", sans-serif;
 font-size: 3.73333vw;
 font-weight: 700;
}

.featuresF__label span {
 margin-left: .3em;
 font-size: 6.13333vw;
}

.featuresF__heading {
 display: inline-block;
 position: relative;
 top: -1em;
 margin-bottom: -1em;
 padding: .3em .7em;
 color: #fff;
 font-size: 4.53333vw;
 font-weight: 700;
}

.featuresF__heading span {
 position: relative;
 z-index: 3;
}

.featuresF__heading:before {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: #0060b0;
 -webkit-transform: skewX(-15deg);
 transform: skewX(-15deg);
 z-index: 2;
}

.featuresF__text {
 font-size: 3.46667vw;
 font-weight: 700;
}

@media screen and (min-width: 801px) {
 .featuresF__label {
  font-size: 1.125vw;
 }
 .featuresF__label span {
  font-size: 2.25vw;
 }
 .featuresF__heading {
  font-size: 1.5vw;
 }
 .featuresF__text {
  font-size: 1vw;
 }
}

@media screen and (min-width: 1601px) {
 .featuresF__label {
  font-size: 18px;
  font-size: 1.8rem;
 }
 .featuresF__label span {
  font-size: 36px;
  font-size: 3.6rem;
 }
 .featuresF__heading {
  font-size: 24px;
  font-size: 2.4rem;
 }
 .featuresF__text {
  font-size: 16px;
  font-size: 1.6rem;
 }
}

@media screen and (min-width: 801px) {
 .featuresF:nth-of-type(2) {
  top: 2.5vw;
 }
 .featuresF:nth-of-type(3) {
  top: 5vw;
 }
}

@media screen and (min-width: 1601px) {
 .featuresF:nth-of-type(2) {
  top: 40px;
 }
 .featuresF:nth-of-type(3) {
  top: 80px;
 }
}

</style>