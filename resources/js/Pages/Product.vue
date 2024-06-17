<template>
    <Head title="products" />
    <AppLayout>
        <div
            v-for="(product, index) in products"
            :key="product.id"
            class="bg-[#121E10] container mx-auto grid grid-cols-1 md:grid-cols-2 items-center mt-10 md:mt-20 rounded-xl"
        >
            <!-- Gambar Produk -->
            <div
                :class="{
                    'order-1': index % 2 === 0,
                    'md:order-2': index % 2 === 0,
                    'order-1': index % 2 !== 0,
                    'md:order-1': index % 2 !== 0,
                }"
                class="my-10 md:my-20 mx-4 md:mx-20"
            >
                <img
                    :src="product.image"
                    class="rounded-md w-full md:w-auto"
                    alt=""
                />
            </div>

            <!-- Detail Produk -->
            <div
                :class="{
                    'order-2': index % 2 === 0,
                    'md:order-1': index % 2 === 0,
                    'order-2': index % 2 !== 0,
                    'md:order-2': index % 2 !== 0,
                }"
                class="my-10 md:my-20 mx-4 md:mx-20 text-lg md:text-2xl"
            >
                <h1 class="font-bold text-4xl">{{ product.name }}</h1>
                <p class="text-base md:text-lg my-2 md:my-4 text-[#FFFFFFB2]">
                    {{ product.description }}
                </p>
                <h2 class="font-bold">{{ product.price }}</h2>
                <div class="flex items-center mt-2">
                    <span
                        class="text-[#ADFF2C] text-xl md:text-2xl drop-shadow-lg"
                        >★★★★★</span
                    >
                    <span
                        class="ml-2 text-sm md:text-[1.5rem] font-bold drop-shadow-lg"
                    >
                        {{ product.rating }} |
                    </span>
                    <span
                        class="ml-2 text-sm md:text-[1.3rem] font-bold text-gray-500 drop-shadow-lg"
                    >
                        {{ product.sold }} Sold
                    </span>
                </div>
                <div
                    class="flex justify-center md:justify-start gap-4 md:space-x-4 mt-4 md:mt-10 font-bold"
                >
                    <button class="bg-[#4A651E99] rounded-lg px-4 md:px-6 py-2 whitespace-nowrap">
                        + Keranjang
                    </button>
                    <button
                        class="bg-[#ADFF2C] rounded-lg px-4 md:px-6 py-2 text-[#1D2F1A] whitespace-nowrap"
                    >
                        Beli Sekarang
                    </button>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Head } from "@inertiajs/vue3";

const products = ref([
    {
        id: 1,
        name: "Kopi Gayo - Grade A",
        description:
            "Gayo Coffee Grade A merupakan varietas Kopi Arabica yang berasal dari wilayah Gayo, Provinsi Aceh, Indonesia. Kopi Gayo dikenal luas karena memiliki cita rasa yang unik dan berkualitas tinggi",
        price: "RP. 150.000",
        rating: "5.0",
        sold: "120k",
        image: "/images/coffee.jpg",
    },
    {
        id: 2,
        name: "Kopi Gayo - Grade B",
        description:
            "Gayo Coffee Grade A merupakan varietas Kopi Arabica yang berasal dari wilayah Gayo, Provinsi Aceh, Indonesia. Kopi Gayo dikenal luas karena memiliki cita rasa yang unik dan berkualitas tinggi",
        price: "RP. 150.000",
        rating: "4.9",
        sold: "200k",
        image: "/images/coffee.jpg",
    },
    {
        id: 3,
        name: "Kopi Gayo - Grade B",
        description:
            "Gayo Coffee Grade A merupakan varietas Kopi Arabica yang berasal dari wilayah Gayo, Provinsi Aceh, Indonesia. Kopi Gayo dikenal luas karena memiliki cita rasa yang unik dan berkualitas tinggi",
        price: "RP. 150.000",
        rating: "Bintang disini",
        sold: "angka terjual",
        image: "/images/coffee.jpg",
    },
]);
</script>
