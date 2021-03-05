<template>
  <div class="home">
    <router-view></router-view>
    <contact />
    <div class="columns is-mobile py-6">
      <div class="column is-three-fifths is-offset-one-fifth has-text-left">
        Id donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae purus faucibus ornare suspendisse sed nisi. Rhoncus urna neque viverra justo nec. A iaculis at erat pellentesque. Habitasse platea dictumst vestibulum rhoncus est. Amet purus gravida quis blandit turpis cursus in hac. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Urna et pharetra pharetra massa massa ultricies. Nunc eget lorem dolor sed viverra ipsum. Nunc scelerisque viverra mauris in aliquam. Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a arcu. Sociis natoque penatibus et magnis dis parturient montes. Bibendum arcu vitae elementum curabitur vitae nunc sed velit.
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Contact
  }
}
</script>
