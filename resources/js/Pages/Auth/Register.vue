<template>
    <Head title="EGS" />
    <SubLayout>
        <div class="flex items-center justify-center min-h-screen bg-[#091007]">
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 class="text-2xl font-bold mb-6 text-center text-black">
                    Create Your Account Today
                </h2>
                <p class="text-sm text-gray-600 mb-6 text-center">
                    Register now and embark on a new exploration with us
                </p>
                <form @submit.prevent="register">
                    <div class="grid grid-cols-1 gap-4 text-black font-bold">
                        <div class="grid grid-cols-2 gap-4">
                            <input
                                v-model="form.first_name"
                                type="text"
                                placeholder="First Name"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                v-model="form.last_name"
                                type="text"
                                placeholder="Last Name"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <input
                            v-model="form.email"
                            type="email"
                            placeholder="Email"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            v-model="form.username"
                            type="text"
                            placeholder="Username"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        />
                        <div class="relative">
                            <input
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-black"
                            />
                        </div>
                        <div class="relative">
                            <input
                                v-model="form.password_confirmation"
                                type="password"
                                placeholder="Confirm Password"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-black"
                            />
                        </div>
                        <button
                            type="submit"
                            class="w-full py-2 px-4 bg-[#ADFF2C] text-[#1D2F1A] font-bold rounded-lg hover:bg-lime-600 transition duration-300"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p class="text-center text-sm text-gray-600 mt-4 font-bold">
                    Already have an account?
                    <Link href="login" class="text-blue-500">Login</Link>
                </p>
            </div>
        </div>
    </SubLayout>
</template>

<script setup>
import SubLayout from "@/Layouts/SubLayout.vue";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";

const form = useForm({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const register = () => {
    form.post(route("register.store"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>
