<script>
    import NavList from "../lib/components/NavList.svelte";
</script>
<main>
  <header>
    <slot name="logo"><span></span></slot>
    <NavList links={[]}/>
  </header>
  <slot></slot>
  <footer>
    <NavList links={[]}/>
  </footer>
</main>
