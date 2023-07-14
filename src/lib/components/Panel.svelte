<script>
export let id = ""
</script>
<section id={id} class="panel">
  <slot></slot>
</section>
<style>
.panel {
  background-position: bottom center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
}
</style>
