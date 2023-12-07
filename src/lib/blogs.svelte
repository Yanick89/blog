<script lang="ts">
  import BlogId from '../routes/blog/[blogId].svelte';
  import { Router, Link, Route } from "svelte-routing";

  export let id: string;
	export let title: string;
	export let content: string;
	export let date: string;
	export let img: string;
	export let view: string;

  export let url: string = "";
  // const direction = () => {
  //   window.location.href = `/blog/${id}`
  // }
</script>

<Router {url}>
<Link to="/blog/{id}">
  <article class="flex flex-col dark:bg-gray-900">
    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
      <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src={img}>
    </a>
    <div class="flex flex-col flex-1 p-6">
      <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
      <a rel="noopener noreferrer" href="#" class="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
      <h3 class="flex-1 py-2 text-lg font-semibold leadi">{title}</h3>
      <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
        <span>{date}</span>
        <span>{view} views</span>
      </div>
    </div>
  </article>
</Link>
<Route path="/blog/{id}" let:params>
  <BlogId id="{params.id}"/>
</Route>
</Router>
