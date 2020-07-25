<template>
    <div class="mb50 heading anim anim--scroll" :class="titleClass">
        <div class="heading__inner">
            <p class="heading__en" :class="titleLine">{{enTitle}}</p>
            <h2 class="heading__jp">{{jpTitle}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'titleClass',
        `enTitle`,
        `jpTitle`,
        'titleLine'
    ]
}
</script>
