<script lang="ts" setup></script>

<template>
    <section class="bg-slate-50">
        <aside class="sidebar bg-slate-50">
            <Icon class="icon cursor-pointer w-10 h-10" name="iconamoon:3d-duotone"/>
            <button class="absolute">
                <!--ICON-->
                <Icon class="icon cursor-pointer absolute" name="mingcute:back-fill"/>
            </button>
        </aside>
        <LayoutMenu/>
    </section>
</template>

<style scoped>
.sidebar {
    padding-top: 28px;
    padding-left: 12px;
}

.sidebar button {
    margin-left: 125px;
    margin-top: 28px;
}
</style>
