<script lang="ts">
    import Side from "../../lib/account/side.svelte";
</script>

<div class="container w-full max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto flex">
    <div class="mt-6 border-t border-gray-100 space-y-12 w-full">
        <article class="flex items-start space-x-6 p-6">
            <img src="https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg" alt="" width="60" height="60" class="flex-none rounded-md bg-slate-100" />
            <div class="min-w-0 relative flex-auto">
              <h2 class="font-semibold text-lg text-slate-900 truncate pr-20">Prognosis Negative</h2>
              <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                <div>
                  <dt class="sr-only">Year</dt>
                  <dd class="text-slate-400">Publié le 29 Dec, Vend</dd>
                </div>
                <div class="flex items-center gap-x-4 w-full mt-2 font-normal">
                    <a href="" type="button" class="inline-flex items-center border-0 border-b border-blue-400 hover:border-blue-500 text-sm text-start font-medium text-blue-400 -mt-px first:mt-0 hover:text-blue-500 dark:border-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Modifier
                    </a>
                    <a href="" type="button" class="inline-flex items-center border-0 border-b border-red-400  hover:border-red-500 text-sm text-start font-medium text-red-400 -mt-px first:mt-0 hover:text-red-500 dark:border-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Supprimer
                    </a>
                </div>
              </dl>
            </div>
            <div class="min-w-0 relative flex-auto">
                <div class="flex items-center justify-center gap-x-5">
                    <div class="flex items-center justify-center flex-col mt-2 font-normal">
                        <dd class="text-slate-400 text-sm">0</dd>
                        <dd class="text-slate-400 text-sm">Commentaires</dd>
                    </div>
                    <div class="flex items-center justify-center flex-col mt-2 font-normal border-r border-l px-5">
                        <dd class="text-slate-400 text-sm">0</dd>
                        <dd class="text-slate-400 text-sm">J'aime</dd>
                    </div>
                </div>
            </div>
        </article>
        <!-- waiting for api -->
        <div class="text-gray-500 bg-gray-200 rounded-md px-3 py-2 text-sm font-medium mx-auto mt-4 w-3/4 text-center">Vous n'avez pas encore de blogs</div>
    </div>
    <div class="col-span-full bg-white border-l mx-auto h-screen basis-auto lg:basis-96 pt-3">     
        <Side />
    </div>
</div>
  