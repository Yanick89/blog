<script lang="ts">
  import Blog from "./routes/blog/blog.svelte"
  import Page from "./routes/blog/page.svelte";
  import "../index.css"
  import { Router, Link, Route } from "svelte-routing";


  export let url = "";
  
</script>
<Router {url}>
    <nav>
      <Link to="/blog">Blog</Link>
      <Link to="/">Home</Link>
    </nav>
    <div>
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Page} />
    </div>
</Router>



