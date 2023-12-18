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
        <hr>
        <h1>{postBlogs.title}</h1>
        <img src={postBlogs.img} alt="" class="w-full rounded-md">
        {@html postBlogs.content}
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
    }
</style>