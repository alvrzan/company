<template>
    <div
        class="flex flex-col md:flex-row justify-between bg-gradient-to-r from-gradient_first_dark_green to-gradient_first_light_green p-4 items-center"
    >
        <div class="flex items-center w-full md:w-auto justify-between">
            <a href="/">
                <div class="flex items-center">
                    <img src="/icon/egs.svg" alt="logo" class="mr-4 md:ml-4" />
                    <h1
                        class="text-white lg:text-xl drop-shadow-lg font-semibold"
                    >
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
                class="flex flex-col mt-4 md:mt-0 mb-4 md:mb-0 md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-white/60 font-semibold text-md drop-shadow-lg"
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
                <Link href="/login" v-if="!user">
                    <button
                        class="rounded-xl w-24 h-10 bg-white/25 text-md font-bold drop-shadow-lg"
                    >
                        Login
                    </button>
                </Link>

                <Link href="/register" v-if="!user">
                    <button
                        class="rounded-xl w-24 h-10 bg-[#ADFF2C] text-[#1D2F1A] text-md font-bold drop-shadow-lg"
                    >
                        Register
                    </button>
                </Link>
            </div>
            <div
                v-if="user"
                class="pr-0  md:pr-5 mt-4 md:mt-0 flex items-center space-x-4 mr-0 md:mr-5"
            >
                <Link href="/dashboard">
                    <!-- Menampilkan gambar profil jika ada -->
                    <img
                        v-if="user.profile_photo_path"
                        class="w-20 h-20 rounded-full object-cover"
                        :src="`/images/account/${user.profile_photo_path}`"
                        alt="Profile"
                        @error="onImageError"
                    />
                    <!-- Menampilkan ikon SVG jika tidak ada gambar profil -->
                    <img
                        v-else
                        class="w-20 h-20 rounded-full object-cover"
                        src="/icon/account.svg"
                        alt="Default Account Icon"
                    />
                </Link>

                <!-- Tombol Logout -->
                <button
                    @click="logout"
                    class="rounded-xl w-24 h-10 bg-red-600 text-white text-md font-bold drop-shadow-md"
                >
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Link } from "@inertiajs/inertia-vue3"; // Pastikan import yang benar
import axios from "axios"; // Import axios untuk HTTP requests

const currentRoute = ref(window.location.pathname);
const menuItems = ref([
    { text: "User Manual", href: "/manual" },
    { text: "Products", href: "/product" },
    { text: "About Us", href: "/about" },
]);

const isNavbarOpen = ref(false);
const isDesktop = ref(false);
const user = ref(null); // Update user data here

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

onMounted(async () => {
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    currentRoute.value = window.location.pathname;

    // Fetch user data
    try {
        const response = await axios.get("/api/user");
        user.value = response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", updateIsDesktop);
});

const onImageError = (event) => {
    // If there is an error loading the image, fallback to default image
    event.target.src = "/icon/account.svg";
};

const logout = async () => {
    try {
        await axios.post("/logout");
        // Redirect or handle post-logout logic
        window.location.href = "/login"; // Redirect to login page after logout
    } catch (error) {
        console.error("Error during logout:", error);
    }
};
</script>

<style scoped>
.transition-max-height {
    transition: max-height 0.3s ease-in-out;
}
</style>
