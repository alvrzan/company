<template>
    <Head title="Manual" />
    <AppLayout>
        <ManualCardComponent></ManualCardComponent>
        <!-- Full-width fluid until the `md` breakpoint, then lock to container -->
        <div class="md:container md:mx-auto bg-red-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid in exercitationem eum veniam dicta amet fugiat facere, quae voluptate cumque quam fugit. Modi id a maxime fuga similique debitis?
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ManualCardComponent from "@/Components/ManualCardComponent.vue";
import { Head } from "@inertiajs/vue3";
</script>
