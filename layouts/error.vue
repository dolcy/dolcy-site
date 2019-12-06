<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12 flex-centered flex-vertical-center">
        <div class="hero hero-lg">
          <div class="hero-body-title">
            <h1 v-if="error.statusCode === 404">
              {{ error.statusCode }} You are lost :(
            </h1>
            <h1 v-else>
              {{ error.statusCode }} An error occurred :(
            </h1>
            <div class="flex-centered">
              <nuxt-link to="/">
                <button class="btn btn-secondary btn-md" alt="Back to Main">
                  Back to Main
                </button>
                </a-icon>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.flex-vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
}
</style>
