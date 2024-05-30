<template>
    <Head title="Portfolio" />

    <div class="bg-[#091007]">
        <!-- Header -->
        <div
            class="flex flex-col justify-between md:flex-row bg-gradient-to-r from-gradient_first_dark_green to-gradient_first_light_green p-4 items-center"
        >
            <div
                class="flex items-center md:justify-start w-full md:w-auto mb-4 md:mb-0"
            >
                <img src="/icon/egs.svg" alt="logo" class="mr-4 md:ml-4" />
                <h1 class="text-white text-xl mx-auto md:mx-0 drop-shadow-lg">
                    Exploresia Growth Seedonesia
                </h1>
            </div>
            <div
                class="flex flex-col mr-4 md:flex-row justify-end items-center space-y-2 md:space-y-0 md:space-x-4"
            >
                <ul
                    class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-white/60 font-semibold text-lg drop-shadow-lg"
                >
                    <li><a href="#">User Manual</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <button
                    class="rounded-xl w-24 h-10 bg-white/25 text-lg font-bold drop-shadow-lg"
                >
                    Login
                </button>
                <button
                    class="rounded-xl w-24 h-10 bg-[#ADFF2C] text-[#1D2F1A] text-lg font-bold drop-shadow-lg"
                >
                    Register
                </button>
            </div>
        </div>

        <!-- Main Section -->
        <div class="bg-[#091007] text-center py-16 px-4">
            <div class="text-white/80">
                <span class="drop-shadow-lg"
                    >Introducing Exploresia Growth Seedonesia</span
                >
                <h1
                    class="text-[#ADFF2C] uppercase font-bold text-3xl md:text-4xl mt-4 drop-shadow-[1px_35px_35px_rgba(0,0,0,0.85)]"
                >
                    With Us, We Connect.
                </h1>
                <p
                    class="text-center drop-shadow-lg shadow-rose-700 mt-4 max-w-2xl mx-auto"
                >
                    PT. Exploresia Growth Seedonesia specializes in exporting
                    authentic Indonesian products, showcasing the nation's rich
                    cultural heritage to global markets.
                </p>
                <div class="space-y-4 md:space-x-4 p-4 mt-8">
                    <button
                        class="bg-[#ADFF2C] text-[#1D2F1A] rounded-lg h-12 w-32"
                    >
                        Get Started
                    </button>
                    <button
                        class="bg-[#ffffff53] text-white rounded-lg h-12 w-32 drop-shadow-lg"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>

        <!-- Products Section -->
        <div class="text-white mx-8">
            <div class="flex justify-between items-center">
                <div>
                    <h1
                        class="font-semibold text-3xl text-primary_green drop-shadow-lg"
                    >
                        Our Products
                    </h1>
                    <span class="text-white/70 drop-shadow-lg ml-[2px]"
                        >Explore Our Exquisite Offerings</span
                    >
                </div>
                <div class="flex items-center space-x-2">
                    <button
                        class="inline-flex justify-center items-center bg-[#ADFF2C] rounded-full h-14 w-14 drop-shadow-lg"
                    >
                        <img src="/icon/msg.svg" alt="msg" />
                    </button>
                    <span
                        class="block underline text-primary_green drop-shadow-lg"
                        >See All</span
                    >
                </div>
            </div>
            <div class="container mx-auto px-4 py-8">
                <div class="flex justify-evenly overflow-x-auto gap-8 mt-8">
                    <div
                        v-for="card in cards"
                        :key="card.id"
                        class="w-full min-w-[250px] md:min-w-[300px] bg-[#0B1F0B] rounded-lg shadow-md overflow-hidden drop-shadow-lg"
                    >
                        <img
                            :src="card.image"
                            alt="card image"
                            class="w-full h-[24rem] object-cover object-top"
                        />
                        <div class="p-4 text-white">
                            <h2 class="text-lg font-semibold drop-shadow-lg">
                                {{ card.title }}
                            </h2>
                            <p class="text-gray-400 mt-2 drop-shadow-lg">
                                {{ card.description }}
                            </p>
                            <p class="text-lg font-bold mt-2 drop-shadow-lg">
                                Rp. {{ card.price }}
                            </p>
                            <div class="flex items-center mt-2">
                                <span class="text-green-400 drop-shadow-lg"
                                    >★★★★★</span
                                >
                                <span class="ml-2 text-sm drop-shadow-lg">{{
                                    card.rating
                                }}</span>
                                <span
                                    class="ml-2 text-sm text-gray-500 drop-shadow-lg"
                                    >{{ card.sold }} Sold</span
                                >
                            </div>
                            <div class="flex space-x-2 mt-4">
                                <button
                                    class="flex-grow bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 drop-shadow-lg"
                                >
                                    + Add to cart
                                </button>
                                <button
                                    class="flex-grow bg-[#ADFF2C] text-[#1D2F1A] py-2 px-4 rounded-lg font-bold hover:bg-[#a4f52b] drop-shadow-lg"
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="bg-[#091007] text-white py-16 px-4">
            <div class="container mx-auto">
                <h1
                    class="font-semibold text-3xl text-primary_green mb-8 drop-shadow-lg"
                >
                    Contact
                </h1>
                <ul class="space-y-6">
                    <li class="flex items-center drop-shadow-lg">
                        <img src="/icon/web.svg" alt="web" class="mr-4" />
                        <a
                            href="https://www.egs.co.id"
                            class="underline text-white/60"
                            >www.egs.co.id</a
                        >
                    </li>
                    <li class="flex items-center drop-shadow-lg">
                        <img src="/icon/email.svg" alt="mail" class="mr-4" />
                        <a
                            href="mailto:home@egs.co.id"
                            class="underline text-white/60"
                            >home@egs.co.id</a
                        >
                    </li>
                    <li class="flex items-center drop-shadow-lg">
                        <img src="/icon/phone.svg" alt="phone" class="mr-4" />
                        <a
                            href="tel:+6281317966210"
                            class="underline text-white/60"
                            >+62 813-1796-6210</a
                        >
                    </li>
                    <li class="flex items-center drop-shadow-lg">
                        <img
                            src="/icon/gps.svg"
                            alt="address"
                            class="mr-5 ml-[2px]"
                        />
                        <span class="text-white/60"
                            >Senayan City Jl. Asia Afrika, Kec. Tanah Abang,
                            Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta,
                            10270</span
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { reactive } from "vue";

const cards = reactive([
    {
        id: 1,
        title: "Muhamad Alfi Reza Sanjani",
        description: "Awaken Your sense of Love",
        price: "1.500.000.000",
        rating: "5.0",
        sold: "10 millions",
        image: "/images/alvrzan.jpg",
    },
    {
        id: 2,
        title: "Gayo Coffee - Grade B",
        description: "Awaken Your Senses with Grade B Gayo!",
        price: "100.000",
        rating: "5.0",
        sold: "10",
        image: "/images/coffee_grade_b.jpg",
    },
    {
        id: 3,
        title: "Black Tea - Grade A",
        description: "A favored choice among tea lovers",
        price: "70.000",
        rating: "5.0",
        sold: "7",
        image: "/images/black_tea_grade_a.jpg",
    },
    // Tambahkan kartu lain jika diperlukan
]);
</script>
