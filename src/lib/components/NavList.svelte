<script>
export let links = [];
</script>

<nav>
  <ul class="nav-list">
    {#each links as link}
      <li class="nav-list-item">
        <a href={link.path}>{link.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
nav {
  display: flex;
  margin-block-end: 6rem;;
}

ul {
  margin-inline-start: auto;
  margin-inline-end: auto;
  display: flex;
  gap: 1em;
  list-style: none;
}

@media (width>= 600px) {
  ul {
      margin-inline-end: 0;
    }
}
</style>
