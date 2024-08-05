<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Log in" />

    <div class="flex items-center justify-center min-h-screen bg-[#091007]">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <div class="flex flex-col items-center">
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Login
                    <img
                        src="/icon/egs.svg"
                        class="inline-flex w-16"
                        alt="EGS"
                    />
                    Page
                </h2>
                <p class="mt-2 text-sm text-gray-600">
                    Ayo lanjutkan petualanganmu!
                </p>
            </div>

            <div class="mt-6">
                <div>
                    <a class=" text-black" href="/auth/redirect"></a>
                </div>
                
                <Link
                    href="/auth/redirec"
                    class="active:bg-gray-900 active:-translate-y-1 transition-all active:text-white w-full flex items-center justify-center gap-x-2 py-2 bg-white rounded-lg text-[#000000BF] hover:bg-gray-200 ring-2 ring-blue-400"
                >
                    <span class="font-bold whitespace-nowrap"
                        >Masuk dengan google</span
                    >
                    <img
                        src="/icon/google-icon.svg"
                        alt="Google Logo"
                        class="w-6 h-6"
                    />
                </Link>
            </div>

            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">Atau</span>
                </div>
            </div>

            <form @submit.prevent="submit">
                <div class="text-black font-semibold">
                    <InputLabel for="email" value="Email" />
                    <div class="relative">
                        <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                class="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v10h12V5zM8 8a1 1 0 000 2h4a1 1 0 100-2H8zm-1 4a1 1 0 010 2h6a1 1 0 110-2H7z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        <TextInput
                            id="email"
                            v-model="form.email"
                            type="email"
                            class="mt-1 block w-full pl-10"
                            required
                            autofocus
                            autocomplete="username"
                        />
                    </div>
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mt-4 text-black font-semibold">
                    <InputLabel for="password" value="Kata Sandi" />
                    <div class="relative">
                        <span
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                class="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 8a3 3 0 116 0v1h3a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6a1 1 0 011-1h3V8zm7 0v1H8V8a1 1 0 012 0zM4 10v6h12v-6H4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        <TextInput
                            id="password"
                            v-model="form.password"
                            type="password"
                            class="mt-1 block w-full pl-10"
                            required
                            autocomplete="current-password"
                        />
                        <span
                            class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        >
                            <svg
                                class="w-5 h-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.94 11.94a8 8 0 1111.31-11.31l1.42 1.42A8 8 0 012.94 11.94zM4.94 4.94A6 6 0 0016 16l-1.42-1.42A6 6 0 004.94 4.94z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M1.586 1.586a2 2 0 112.828 2.828L1.586 1.586zM5.828 5.828a2 2 0 112.828 2.828L5.828 5.828z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                    <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mt-6">
                    <PrimaryButton
                        class="w-full text-center bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    >
                        Masuk
                    </PrimaryButton>
                </div>
                <div
                    class="flex items-center justify-center mt-4 gap-1 text-sm"
                >
                    <span class="text-[#00000080] font-semibold font-montserrat"
                        >Lupa password ?
                    </span>
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="font-montserrat font-semibold text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Ubah kata sandi
                    </Link>
                </div>
            </form>
        </div>
    </div>
</template>
