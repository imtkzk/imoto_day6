<template>
    <div class="container">
        <hero />
        <mission />
        <results :items="results.items" />
        <features />
        <bussiness />
        <member />
        <update :kikagaku_blog_items="update.kikagaku_blog_items" />
        <recruit />
        <company />
    </div>
</template>

<script>
    import Hero from '~/components/top/Hero.vue'
    import Mission from '~/components/top/Mission.vue'
    import Results from '~/components/top/Results.vue'
    import Features from '~/components/top/Features.vue'
    import Bussiness from '~/components/top/Bussiness.vue'
    import Member from '~/components/top/Member.vue'
    import Update from '~/components/top/Update.vue'
    import Recruit from '~/components/top/Recruit.vue'
    import Company from '~/components/top/Company.vue'

    export default {
        components: {
            Hero,
            Mission,
            Results,
            Features,
            Bussiness,
            Member,
            Update,
            Recruit,
            Company,
        },
        data() {
            return {
                results: {
                    items: [{
                            url: 'https://www.kikagaku.co.jp/',
                            img_url: require('~/assets/img/front/portfolio/image1.jpg'),
                            alt: 'Preferred Networks社提供のChainerチュートリアル制作に協力',
                            title: 'テキスト編集できてる'
                        },
                        {
                            url: 'https://www.kikagaku.co.jp/',
                            img_url: require('~/assets/img/front/portfolio/image2.jpg'),
                            alt: 'メルカリ社の経営層向けAI研修の実施...',
                            title: 'メルカリ社の経営層向けAI研修の<span class="br__pc"></span>実施'
                        },
                        {
                            url: 'https://www.kikagaku.co.jp/',
                            img_url: require('~/assets/img/front/portfolio/image3.jpg'),
                            alt: 'ABEJA社とアセスメント人材育成コースを共同制作',
                            title: 'ABEJA社とアセスメント人材育成<span class="br__pc"></span>コースを共同制作'
                        }
                    ]
                },
                update: {
                    kikagaku_blog_items: [{
                            kikgaku_blog_url: '#',
                            kikgaku_blog_img_url: require('~/assets/img/sample/blog1.jpg'),
                            kikgaku_blog_alt: 'ダミーテキスト。タイトルが入ります。タイトルが入ります...',
                            kikagaku_blog_date: '2019.03.01',
                            kikagaku_blog_title: 'タイトルを変更...'
                        },
                        {
                            kikgaku_blog_url: '#',
                            kikgaku_blog_img_url: require('~/assets/img/sample/blog1.jpg'),
                            kikgaku_blog_alt: 'ダミーテキスト。タイトルが入ります。タイトルが入ります...',
                            kikagaku_blog_date: '2019.03.01',
                            kikagaku_blog_title: 'ダミーテキスト。タイトルが入ります。タイトルが入ります...'
                        },
                        {
                            kikgaku_blog_url: '#',
                            kikgaku_blog_img_url: require('~/assets/img/sample/blog1.jpg'),
                            kikgaku_blog_alt: 'ダミーテキスト。タイトルが入ります。タイトルが入ります...',
                            kikagaku_blog_date: '2019.03.01',
                            kikagaku_blog_title: 'ダミーテキスト。タイトルが入ります。タイトルが入ります...'
                        }
                    ]
                }
            }
        }
    }
</script>
