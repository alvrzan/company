<template>
    <Head title="EGS" />
    <div>
        <Navbar />
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
        <Card />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from "@/Components/Navbar.vue";
import Card from "@/Components/CardComponent.vue";
import Footer from "@/Components/Footer.vue";
</script>
