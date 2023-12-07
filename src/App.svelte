<script lang="ts">
  import Blog from "./routes/blog/blog.svelte"
  import Page from "./routes/page.svelte";
  import Header from "./lib/Header.svelte";
  import "../index.css"
  import { Router, Link, Route } from "svelte-routing";

  export let url = "";
  
</script>
<Router {url}>
  <Header />
    <div>
      <Route path="/blog" component={Blog} />
      <Route path="/" component={Page} />
    </div>
</Router>



