<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    export let current: number;

    let url: string = ''
</script>

{#each Array(5) as _, index (index)}
    <Router {url}>
        <Link to=''>
            <div class="dark:bg-gray-800 dark:text-gray-50 list-left">
                <div class="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div class="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4 rounded-md" style="background-image: url('https://source.unsplash.com/random/640x480/?fashion?${current}'); background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
                    <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <div class="flex justify-start">
                            <!-- <span class="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">Label</span> -->
                            <div class="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 dark:text-gray-400">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="self-center text-sm">by Leroy Jenkins</span>
                            </div>
                        </div>
                        <h1 class="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
                        <p class="flex-1 pt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>

                        <div class="flex items-center justify-between pt-2">
                            <div class="flex space-x-2">
                                <span class="self-center text-sm">Dec 7· 4 min</span>
                            </div>
                            <span class="text-xs">3 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </Router>
{/each}