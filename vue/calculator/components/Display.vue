<template>
  <div class="display">
    {{value}}
  </div>
</template>

<script>
export default {
  name: "DisplayComponent",
  props: ["value"],
};
</script>

<style>
.display {
  grid-column: span 4;
  background-color: #0004;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 6px;
  font-size: 2.1em;
  overflow: hidden;
  
}
</style>