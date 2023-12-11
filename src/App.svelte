<script lang="ts">
  import Blog from "./routes/posts/blog.svelte"
  import Posts from './routes/posts/[id].svelte'
  import Page from "./routes/index.svelte";
  import Header from "./lib/Header.svelte";
  import "../index.css"
  import { Router, Route } from "svelte-routing";

  export let url = "";
  
  
</script>
<Router {url}>
  <Header />
    <div>
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Page} />
    </div>
    <div>
       <Route path="/blog/:id" let:params>
          {#if params.id}
          <Posts id="{params.id}"/>
          {:else}
            <p>Article non trouvé</p>
          {/if}
        </Route>
    </div>
</Router>




