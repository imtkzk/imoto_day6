<template>
    <div>
        <page-header />
        <nuxt />
        <migration />
        <page-footer />
    </div>
</template>

<script>
    import PageHeader from '~/components/common/PageHeader.vue'
    import Migration from '~/components/common/Migration.vue'
    import PageFooter from '~/components/common/PageFooter.vue'

    export default {
        components: {
            PageHeader,
            Migration,
            PageFooter
        }
    }
</script>
