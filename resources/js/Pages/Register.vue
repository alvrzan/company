<template>
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
                                v-model="firstName"
                                type="text"
                                placeholder="First Name"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                v-model="lastName"
                                type="text"
                                placeholder="Last Name"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <input
                            v-model="email"
                            type="email"
                            placeholder="Email"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            v-model="username"
                            type="text"
                            placeholder="Username"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        />
                        <div class="relative">
                            <input
                                v-model="password"
                                type="password"
                                placeholder="Password"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-black"
                            />
                            <div
                                class="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 10a8 8 0 1114.32 4.906l-.834-.836A10 10 0 100 10h2zm10-4a4 4 0 11-8 0 4 4 0 018 0zM5.171 5.171a4 4 0 0110.656 10.656l-1.42-1.42a6 6 0 10-8.517-8.517l-1.42-1.42a8 8 0 0111.313 11.313l-.836-.834A8 8 0 105.17 5.17z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="relative">
                            <input
                                v-model="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 text-black"
                            />
                            <div
                                class="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 10a8 8 0 1114.32 4.906l-.834-.836A10 10 0 100 10h2zm10-4a4 4 0 11-8 0 4 4 0 018 0zM5.171 5.171a4 4 0 0110.656 10.656l-1.42-1.42a6 6 0 10-8.517-8.517l-1.42-1.42a8 8 0 0111.313 11.313l-.836-.834A8 8 0 105.17 5.17z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
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
                    <a href="#" class="text-blue-500">Login</a>
                </p>
            </div>
        </div>
    </SubLayout>
</template>

<script setup>
import SubLayout from "@/Layouts/SubLayout.vue";

import { ref } from "vue";
import axios from "axios";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");

const register = async () => {
    try {
        const response = await axios.post("/register", {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            username: username.value,
            password: password.value,
            password_confirmation: confirmPassword.value,
        });
        console.log(response.data.message);
    } catch (error) {
        console.error("Error registering user:", error.response.data);
    }
};
</script>
