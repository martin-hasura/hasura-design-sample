<script>
  // ==== Import Routes ====
  import { Router, Route } from "svelte-navigator";
  import Home from "@/pages/Home.svelte";
  // --> Import Demo Design Elements
  import LayoutSidebarLeft from "@/pages/kit/LayoutSidebarLeft.svelte";
  import LayoutSidebarRight from "@/pages/kit/LayoutSidebarRight.svelte";
  import LayoutSidebarBoth from "@/pages/kit/LayoutSidebarBoth.svelte";
  import LayoutFullscreen from "@/pages/kit/LayoutFullscreen.svelte";
</script>

<!-- Router -->
<Router primary={false}>
  <!-- Section: Home -->
  <Route path="/"> <LayoutFullscreen /> </Route>
  <!-- Section: Design Elements -->
  <Route path="/layout/fullscreen"> <LayoutFullscreen /> </Route>
  <Route path="/layout/sidebar-left"> <LayoutSidebarLeft /> </Route>
  <Route path="/layout/sidebar-right"> <LayoutSidebarRight /> </Route>
  <Route path="/layout/sidebar-both"> <LayoutSidebarBoth /> </Route>
</Router>