<script lang="ts">
    export let id: string;
    import { UseTableData } from "../../table";

    const { blogs, ListsCurrent, ListsTop } = UseTableData();
    let postBlogs: any = {},
        allPosts: any = [];

    // on ajoute tous les tableaux dans un seul qui est destructuré
    allPosts = [...blogs, ...ListsCurrent, ...ListsTop]    
    
    // On filtre le tableau qui contient tous les autres tableaux pour ensuite verifier le ID qui conrespond
    // On definit en paramètre le type de données
    const posts:Array<object> = allPosts.filter((post:{id: string, title: string, content: string, date: string, img: string, view: string})=>{
            if(post.id === id){
            return post
        }
    });

    // Une fois ID trouver, on parcours le tableau et on affecte à iteration dans un objet
    posts.forEach((post)=>{ postBlogs = post })

</script>

<svelte:head>
    <title>Post du Blog {postBlogs.title} </title>
</svelte:head>


<div class="read-post">
    <article class="flow">
        <div class="flex items-center gap-4">
            <img src="https://source.unsplash.com/43x43/?user?1" alt="photo profil" class="w-10 h-10 bg-slate-600 rounded-full">
            <div class="">
                <span class="self-center text-xl font-medium">by Leroy Jenkins</span>
                <div class="flex items-center justify-between">
                    <div class="flex space-x-2 ">
                        <span class="self-center text-sm text-slate-500">Dec 7· 4 min</span>
                    </div>
                    <span class="text-xs text-slate-500">3 min read</span>
                </div>
            </div>
        </div>
        <div class="sticky bottom-6 inset-x-0 text-center">
            <div class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
                <div class="flex items-center gap-x-1.5">
                    <div class="hs-tooltip inline-block">
                        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        875
                        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                            Like
                        </span>
                        </button>
                    </div>
                    <div class="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600 text-gray-800"></div>
                    <div class="hs-tooltip inline-block">
                        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                            16
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                            Comment
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <h1 class="text-2xl font-bold md:text-3xl dark:text-white">{postBlogs.title}</h1>
        <img src={postBlogs.img} alt="" class="w-full object-cover rounded-xl">
        <!-- start All content -->
        {@html postBlogs.content}
        <!-- End All content -->
        <div class="sticky bottom-0 inset-x-0 text-center">
            <div class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
                <div class="flex items-center gap-x-1.5">
                    <div class="hs-tooltip inline-block">
                        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        875
                        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                            Like
                        </span>
                        </button>
                    </div>
                    <div class="block h-3 border-e border-gray-300 mx-3 dark:border-gray-600 text-gray-800"></div>
                    <div class="hs-tooltip inline-block">
                        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                            16
                            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                            Comment
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </article>    
</div>

<style>
    .read-post{
        width: min(100% - 3rem, 65ch);
        margin-inline: auto;
        margin-top: 3rem;
    }
    .flow > * + * {
        margin-top: 2rem;
    }
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2rem;
    }
    h1, h2{
        font-weight: 600;
    }
    p{
        line-height: 1.8;
        letter-spacing: -0.003em;
        color: rgb(31 41 55 / 1);
    }
</style>