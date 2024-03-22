<script lang="ts" setup>
import {MENU_DATA} from './menu.data'
</script>

<template>
    <div>
        <NuxtLink
                class="flex items-center py-1 px-5 rounded-lg w-full hover:bg-gray-100 hover:shadow transition-all mb-2 mt-6"
                v-for="item in MENU_DATA"
                :key="item.name"
                :to="item.url"
        >
            <Icon :name="item.icon" class="mr-2"/>
            <span>{{ item.name }}</span>
        </NuxtLink>
    </div>
</template>

<style scoped></style>
