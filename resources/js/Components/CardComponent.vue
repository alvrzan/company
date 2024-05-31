<template>
    <div class="text-white mx-8">
        <div class="flex justify-between items-center">
            <div>
                <h1
                    class="font-semibold text-3xl text-primary_green drop-shadow-lg"
                >
                    Our Products
                </h1>
                <span class="text-white/70 drop-shadow-lg ml-[2px]">
                    Explore Our Exquisite Offerings
                </span>
            </div>
            <div class="flex items-center space-x-2">
                <button
                    class="inline-flex justify-center items-center bg-[#ADFF2C] rounded-full h-14 w-14 drop-shadow-lg"
                >
                    <img src="/icon/msg.svg" alt="msg" />
                </button>
                <span class="block underline text-primary_green drop-shadow-lg">
                    See All
                </span>
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
                            <span class="text-green-400 drop-shadow-lg">
                                ★★★★★
                            </span>
                            <span class="ml-2 text-sm drop-shadow-lg">
                                {{ card.rating }}
                            </span>
                            <span
                                class="ml-2 text-sm text-gray-500 drop-shadow-lg"
                            >
                                {{ card.sold }} Sold
                            </span>
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
