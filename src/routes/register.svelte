<script lang="ts">
  import { Register } from "../lib/auth/register/register";
  import WithOther from "../lib/WithOther.svelte";
  
  let email: string  ='',
      password: string = '',
      name: string = '',
      { userRegister } = Register()
      
</script>

<!-- Hero -->
<div class="relative overflow-hidden">
    <div class="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
      <div class="md:pe-8 md:w-1/2 xl:pe-0 xl:w-2/6">
        <!-- Title -->
        <h1 class="text-3xl my-5 text-center text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
          Rejoind-nous
        </h1>
        <!-- End Title -->
  
        <!-- Form -->
        <form class="space-y-6" on:submit|preventDefault={userRegister(email, password, name)}>
            <div>
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
              <div class="mt-2">
                <input id="name" bind:value={name} name="name" type="text" autocomplete="" required class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Addresse email </label>
              <div class="mt-2">
                <input id="email" bind:value={email} name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
      
            <div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <!-- <div class="text-sm">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div> -->
              </div>
              <div class="mt-2">
                <input id="password" bind:value={password} name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
      
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-gray-700 hover:bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inscription</button>
            </div>
          </form>
        <!-- End Form -->
        <div class="mt-8 py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Ou</div>
        <div class="grid">
            <WithOther />
          </div>          
      </div>
    </div>
  
  <div class="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
  <!-- End Col -->
</div>
<!-- End Hero -->