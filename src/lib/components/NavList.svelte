<script>
export let links = [];
</script>

<nav>
  <ul>
    {#each links as link}
      <li>
        <a href={link.path}>{link.text}</a>
      </li>
    {/each}
  </ul>
</nav>
