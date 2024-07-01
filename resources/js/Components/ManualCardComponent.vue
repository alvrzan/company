<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <Head title="Manual" />
    <div class="container mx-auto text-white text-center flex flex-col items-center">
        <div class="m-8">
            <h1 class="font-bold text-3xl text-[#ADFF2C]">User Manual</h1>
            <span>A quick guide to help you use the Exploresia Growth Seedonesia website</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 my-12">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="bg-[#4A710C] font-md text-2xl uppercase rounded-lg flex items-center justify-center p-4 h-40"
            >
                <span class="text-center text-shadow">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>
