<template>
    <div
        class="flex flex-col md:flex-row justify-between bg-gradient-to-r from-gradient_first_dark_green to-gradient_first_light_green p-4 items-center"
    >
        <div class="flex items-center w-full md:w-auto justify-between">
            <a href="/">
                <div class="flex items-center">
                    <img src="/icon/egs.svg" alt="logo" class="mr-4 md:ml-4" />
                    <h1 class="text-white lg:text-2xl drop-shadow-lg font-bold">
                        Exploresia Growth Seedonesia
                    </h1>
                </div>
            </a>
            <button
                @click="toggleNavbar"
                class="md:hidden text-white focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
        </div>
        <div
            :class="{
                'opacity-0 max-h-0 overflow-hidden':
                    !isNavbarOpen && !isDesktop,
                'opacity-100 max-h-screen': isNavbarOpen || isDesktop,
            }"
            class="transition-all duration-1000 ease flex flex-col md:flex-row justify-end items-center w-full md:w-auto"
        >
            <ul
                class="flex flex-col mt-4 md:mt-0 mb-4 md:mb-0 md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-white/60 font-semibold text-lg drop-shadow-lg"
            >
                <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="min-w-28 md:min-h-0 text-center group"
                >
                    <a
                        :href="item.href"
                        :class="{
                            'text-white': currentRoute === item.href,
                            'group-hover:text-white': true,
                            'duration-300': true,
                        }"
                        @click="setActive(item.href)"
                    >
                        {{ item.text }}
                    </a>
                </li>
            </ul>
            <div
                class="flex flex-col md:mx-8 items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            >
                <a href="login">
                    <button
                        class="rounded-xl w-24 h-10 bg-white/25 text-lg font-bold drop-shadow-lg"
                    >
                        Login
                    </button>
                </a>

                <a href="register">
                    <button
                        class="rounded-xl w-24 h-10 bg-[#ADFF2C] text-[#1D2F1A] text-lg font-bold drop-shadow-lg"
                    >
                        Register
                    </button>
                </a>
            </div>
            <div class="pr-5">
                <a href="/profile">
                    <img src="/icon/account.svg" alt="Account" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentRoute = ref(window.location.pathname);
const menuItems = ref([
    { text: "User Manual", href: "/manual" },
    { text: "Products", href: "/product" },
    { text: "About Us", href: "/about" },
]);

const isNavbarOpen = ref(false);
const isDesktop = ref(false);

const setActive = (href) => {
    currentRoute.value = href;
};

const toggleNavbar = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
};

const updateIsDesktop = () => {
    isDesktop.value = window.innerWidth >= 768;
    // Ensure navbar is visible in desktop mode
    if (isDesktop.value) {
        isNavbarOpen.value = true;
    } else {
        isNavbarOpen.value = false;
    }
};

onMounted(() => {
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    currentRoute.value = window.location.pathname;
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", updateIsDesktop);
});
</script>

<style scoped>
.transition-max-height {
    transition: max-height 0.3s ease-in-out;
}
</style>
