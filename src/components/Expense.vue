<template>
  <div>
    <p>{{description}} | {{price}}</p>
  </div>
</template>

<script>
export default {
  props: ["description", "price"]
};
</script>