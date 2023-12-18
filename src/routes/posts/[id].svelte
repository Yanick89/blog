<script lang="ts">
    export let id: string;
    import { UseTableData } from "../../table";

    const { blogs, ListsCurrent, ListsTop } = UseTableData();
    let postBlogs: any = {},
        allPosts: any = [];

        allPosts = [...blogs, ...ListsCurrent, ...ListsTop]    
        console.log('succefull',allPosts);
    
    const posts:Array<object> = allPosts.filter( post =>{
            if(post.id === id){
            return post
        }
    });
    
    posts.forEach((post)=>{ postBlogs = post })

</script>

<svelte:head>
    <title>Post du Blog {postBlogs.title} </title>
</svelte:head>


<div class="read-post">
    <article class="flow">
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