<script>

  export default {

    name: 'ModalCard',
    props: ['showHeader', 'showFooter']
  };
</script>
<template>
  <div class="modal is-active">
    <div class="modal-background">
      <slot name="background">
      </slot>
    </div>
    <div class="modal-card">
      <slot name="header" v-if="showHeader">
          <!-- Header ... -->
      </slot>
      <section class="modal-card-body">
        <slot name="body">
          <!-- Content ... -->
        </slot>
      </section>
      <footer class="modal-card-foot" v-if="showFooter">
        <slot name="footer">
          <!-- Footer -->
        </slot>
      </footer>
    </div>
  </div>
</template>