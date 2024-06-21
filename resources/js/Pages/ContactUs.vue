<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { ref } from "vue";

const form = ref({
    firstName: "",
    lastName: "",
    email: "",
    help: "",
});
</script>

<template>
    <Head title="EGS" />
    <AppLayout>
        <div
            class="grid grid-cols-2 h-screen justify-items-center items-center"
        >
            <div class="ml-10">
                <h1 class="text-3xl font-semibold text-[#ADFF2C]">
                    Contact Us
                </h1>
                <p class="">
                    If you need to reach out to us, you can either complete the
                    inquiry form or locate the email address for the specific
                    department you wish to contact.
                </p>
            </div>
            <div class="">
                <form
                    class="grid grid-cols-2 gap-4 max-w-fit mx-auto bg-white p-6 rounded-lg shadow-md"
                >
                    <div class="mb-4">
                        <InputLabel
                            value="First Name *"
                            class="font-semibold"
                        />
                        <TextInput v-model="form.firstName" />
                    </div>
                    <div class="mb-4">
                        <InputLabel value="Last Name" class="font-semibold" />
                        <TextInput v-model="form.lastName" />
                    </div>
                    <div class="mb-4 col-span-full">
                        <InputLabel value="Email" class="font-semibold" />
                        <TextInput v-model="form.email" class="w-full" />
                    </div>
                    <div class="mb-4 col-span-full">
                        <InputLabel
                            value="What specific help are you looking for?"
                            class="font-semibold"
                        />
                        <TextInput v-model="form.help" class="w-full" />
                    </div>
                    <div class="col-span-full">
                        <button
                            type="submit"
                            class="w-full font-bold text-md text-[#1D2F1A] bg-lime-400 py-2 px-4 rounded-md hover:bg-lime-500 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
