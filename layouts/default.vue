<script lang="ts" setup>
console.log('loaded')
</script>

<template>
    <section class="grid from-gray-100" style="min-height: 100vh">
        <LayoutSideBar/>
        <div>
            <slot/>
        </div>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>
