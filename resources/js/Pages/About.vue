<template>
    <Head title="EGS" />
    <AppLayout>
        <AboutCompanyComponent></AboutCompanyComponent>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import AboutCompanyComponent from "@/Components/AboutCompanyComponent.vue";
import { Head } from "@inertiajs/vue3";
</script>
