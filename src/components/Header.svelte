<script>
  import { Link } from "svelte-navigator";
  import { fade } from 'svelte/transition';

  // Icons
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import BiData from 'svelte-icons-pack/bi/BiData'
  import BiCodeAlt from 'svelte-icons-pack/bi/BiCodeAlt'
  import BiNetworkChart from 'svelte-icons-pack/bi/BiNetworkChart'
  import BiCog from 'svelte-icons-pack/bi/BiCog'
</script>

<header class="flex items-center px-3 bg-slate-800">
  <img src="/images/logo.svg" style="height: 24px;" class="mr-3" alt="Hasura Logo"/>
  <!-- Active Nav -->
  <div class="flex items-center py-2 px-0.5">
    <div class="cursor-pointer text-slate-50 bg-slate-700 flex items-center py-1 px-3 font-medium rounded hover:text-slate-300 hover:bg-slate-700">
      <Icon src={BiCodeAlt} size="18" className="text-brandTeal fill-current mr-1" title="API" />
      <p>API</p>
    </div>  
  </div>
  <!-- Inactive Navs -->
  <div class="flex items-center py-2 px-0.5">
    <div class="cursor-pointer text-slate-400 flex items-center py-1 px-3 font-medium rounded hover:text-slate-300 hover:bg-slate-700">
      <Icon src={BiData} size="18" className="text-slate-400 fill-current mr-1" title="API" />
      <p>Data</p>
    </div>
  </div>
  <div class="flex items-center py-2 px-0.5">
    <div class="cursor-pointer text-slate-400 flex items-center py-1 px-3 font-medium rounded hover:text-slate-300 hover:bg-slate-700">
      <Icon src={BiData} size="18" className="text-slate-400 fill-current mr-1" title="API" />
      <p>Federation</p>
    </div>
  </div>
  <div class="ml-auto flex items-center py-2 px-0.5">
    <div class="cursor-pointer text-slate-400 flex items-center py-1 px-3 font-medium rounded hover:text-slate-300 hover:bg-slate-700">
      <Icon src={BiCog} size="18" className="text-slate-400 fill-current mr-1" title="API" />
      <p>Settings</p>
    </div>
  </div>  
</header>

<nav class="flex items-center font-medium px-3 bg-slate-700 border-b border-slate-400 -mb-px z-30">
  <!-- Active Nav -->
  <div class="cursor-pointer text-slate-50 border-slate-400 -mb-px flex items-center py-2 px-2 border-b-4" >
    Active Nav
  </div>
  <!-- Inactive Nav -->
  <div class="cursor-pointer text-slate-400 border-transparent hover:text-slate-200 hover:border-slate-400 -mb-px flex items-center py-2 px-2 border-b-4" >
    Inactive Nav
  </div>
</nav>