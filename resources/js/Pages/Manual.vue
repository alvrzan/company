<template>
    <Head title="Manual" />
    <AppLayout>
        <ManualCardComponent :items="data" />
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ManualCardComponent from "@/Components/ManualCardComponent.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const data = ref([
    { text: "How to register or log in to an account" },
    { text: "How to change the password" },
    { text: "How to change the language" },
    { text: "How to buy a product" },
    { text: "How to change a products in the Shopping Cart" },
    { text: "How to use the Contact Us feature" },
]);
</script>
