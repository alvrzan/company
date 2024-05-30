<script setup>
import { Head, Link } from "@inertiajs/vue3";
</script>

<template>
    <Head title="Portfolio" />

    <nav class="bg-gray-800">
        <div class="mx-auto py-4">
            <div class="flex space-x-4 justify-end mr-7">
                <a
                    href="#"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    >Dashboard</a
                >
                <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Team</a
                >
                <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Projects</a
                >
                <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Calendar</a
                >
            </div>
        </div>
    </nav>

    <div class="bg-slate-400 py-40">
        <div
            class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
        >
            <div class="shrink-0">
                <img
                    class="h-28 w-28 rounded-full object-cover object-top"
                    src="/images/alvrzan.jpg"
                    alt="Muhamad Alfi Reza Sanjani"
                />
            </div>
            <div>
                <div class="text-xl font-medium text-black">
                    Muhamad Alfi Reza Sanjani
                </div>
                <p class="text-slate-500">Fullstack Developer</p>
            </div>
        </div>
        <div class="grid grid-cols-2 my-8">
            <div class="p-6 mx-auto bg-white rounded-xl shadow-lg">
                lorem ipsum dolor sit amet, consectetur
            </div>
            <div class="p-6 w- mx-auto bg-white rounded-xl shadow-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                dolore eum facere delectus doloremque soluta libero voluptas
                expedita, illo, dolor unde, repudiandae quisquam adipisci.
                Minima id eius et dolores temporibus?
            </div>
        </div>
    </div>
</template>
