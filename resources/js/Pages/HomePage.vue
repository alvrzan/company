<template>
    <Head title="EGS" />
    <AppLayout>
        <HeroComponent></HeroComponent>
        <CardComponent></CardComponent>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import CardComponent from "@/Components/CardComponent.vue";
import HeroComponent from "@/Components/HeroComponent.vue";
import { Head } from "@inertiajs/vue3";
</script>
