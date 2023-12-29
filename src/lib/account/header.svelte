<script lang="ts">
    import Profil from "./profil.svelte";
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center gap-3">
            <a href="" class="text-gray-500  hover:bg-gray-100 hover:text-white rounded-full  text-sm font-medium h-10 w-10 relative">
                <svg class="absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M16.7574 2.99666L14.7574 4.99666H5V18.9967H19V9.2393L21 7.2393V19.9967C21 20.5489 20.5523 20.9967 20 20.9967H4C3.44772 20.9967 3 20.5489 3 19.9967V3.99666C3 3.44438 3.44772 2.99666 4 2.99666H16.7574ZM20.4853 2.09717L21.8995 3.51138L12.7071 12.7038L11.2954 12.7062L11.2929 11.2896L20.4853 2.09717Z" fill="rgba(107,114,128,1)"></path></svg>
            </a>
            <Profil />
        </div>
    </div>
  </nav>