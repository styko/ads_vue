<template>
  <div class="iframe-container">
    <iframe :src="galleryUrl" title="Galery" allowfullscreen  />
  </div>
</template>

<script>

export default {
  props: {
    galleryUrl: String,
  },
};

</script>

<style>
  .iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  .iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
