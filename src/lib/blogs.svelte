<script lang="ts">
  import { Router, Link } from "svelte-routing";


  export let id: any;
	export let title: string;
	export let content: string;
	export let date: string;
	export let img: string;
	export let view: string;
  export let url: string = "";


</script>

<Router {url}>
  <Link to={`/blog/${id}`}>
    <slot></slot>
  </Link>
</Router>

