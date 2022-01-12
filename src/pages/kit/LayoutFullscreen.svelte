<script>
  // >> Import Components
  import Header from '@/components/Header.svelte';
  import Footer from '@/components/Footer.svelte';
</script>

<main class="flex flex-col h-screen text-slate-900 antialiased bg-gray-50">  
  <!-- Load Header Template -->
  <Header />

  <div class="flex flex-grow overflow-hidden">
    <!-- Body Content -->
    <div class="overflow-auto w-full">
      <div class="flex items-center border-b border-slate-300 p-4 bg-white shadow-sm">
        <h1 class="text-xl font-semibold">This is a fullscreen page</h1>
      </div>
      <div class="p-4">
        [ This is the body content... ]
      </div>
    </div>
  </div>
  
  <!-- Load Footer Template -->
  <Footer />

</main>