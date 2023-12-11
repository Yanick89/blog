<script lang="ts">
    export let id: string;
    import { UseTableData } from "../../table";

    const { blogs } = UseTableData();
    let postBlogs: any = {}

    const posts:Array<object> = blogs.filter( post =>{
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit ut, vero numquam molestiae fugit sint beatae delectus quasi aspernatur libero qui quis iste architecto! Tempore, veritatis voluptatum? Quaerat, nesciunt?
        Eligendi officia labore, aliquam perspiciatis placeat dolorum, neque doloremque ab maxime sit sapiente dignissimos vel blanditiis id. Consequuntur harum eligendi unde ullam quis vel nemo, laboriosam neque iste ducimus tempore.
        Nesciunt et facere sed voluptates vel voluptatem amet velit rerum delectus libero, impedit suscipit maiores, ut harum itaque laborum accusamus. Unde quasi, veritatis eos quas culpa iure minima veniam sit
    </p>
    <h2>Titre de niveau 2</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus esse, praesentium in facere sequi voluptate impedit ab non delectus vero enim, cumque tenetur officiis, sed optio adipisci fugit soluta.
        Rerum voluptatem eos soluta vitae explicabo alias ratione rem eum illo modi odio ex minima illum fugit sapiente beatae doloribus quibusdam harum eveniet, quos aliquid dolorem consequuntur quo? Nisi, minima.
        Rerum quod sint adipisci iusto, ipsa ipsam culpa placeat mollitia obcaecati eos? Repudiandae, aut aliquam, quibusdam esse suscipit optio architecto dolor voluptatibus eius autem facere doloremque mollitia velit illo ea.
        Cum inventore, tempora eligendi quod rerum sint natus modi ratione saepe. Distinctio, quas minus nobis error non tempore doloremque expedita amet dignissimos laboriosam voluptate nostrum, earum hic, officia vitae aliquam.
        Laudantium minima nulla numquam sint exercitationem quasi tenetur illo eos voluptatum nam, eveniet adipisci eligendi eum quis eaque omnis molestias? Quasi facere illo error neque magnam consequatur quos architecto deleniti.
        Fugiat corrupti veniam maxime nostrum, facere natus accusantium harum, voluptate provident accusamus minima blanditiis sed consectetur laborum, repellat facilis illum dignissimos perspiciatis reprehenderit labore possimus sunt? Aut facere eius veniam.
        Rem laudantium dolore mollitia eveniet, voluptatum sequi, animi maxime dolorum eos error atque possimus culpa cupiditate aliquam ipsam nulla cumque, veritatis quasi. Eligendi officia magni tenetur. Sapiente excepturi numquam eaque!
        Doloremque consequatur provident quis? Repudiandae vel dignissimos ratione voluptate? Placeat illo fugit reprehenderit voluptate doloremque ab corrupti voluptatum magnam dolore nam aliquam harum et doloribus, consequatur, similique perferendis fugiat voluptas.
    </p>
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
        font-size: 2rem;
    }
    h2{
        font-size: 1.5rem;
    }
    h1, h2{
        font-weight: 600;
    }
</style>