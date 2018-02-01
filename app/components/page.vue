<script>
  export default {
    name: 'Page',
    props: ['page', 'current', 'onChange']
  }
</script>

<template>
  <li>
    <a :class="['pagination-link', { 'is-current': current === page }]"
        @click="onChange(page)">
        {{ page }}
    </a>
  </li>
</template>