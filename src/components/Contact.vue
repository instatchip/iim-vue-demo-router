<template>
  <section class="contact is-primary">
    <div class="columns  is-mobile has-background-primary py-6">
      <div class="column  is-two-fifths px-5 mx-5 has-text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse. Iaculis eu non diam phasellus vestibulum. Pretium fusce id velit ut tortor. Diam quis enim lobortis scelerisque. A arcu cursus vitae congue mauris rhoncus aenean. Neque vitae tempus quam pellentesque nec nam aliquam. Auctor elit sed vulputate mi sit. A scelerisque purus semper eget duis at. Consectetur libero id faucibus nisl tincidunt eget nullam.
      </div>
      <div class="column">
        <div class="card mx-5">
          <div class="card-content">
            <div class="field is-grouped my-5">
              <p class="control is-expanded">
                <input class="input has-text-centered" type="text" placeholder="Nom">
              </p>
              <p class="control is-expanded">
                <input class="input has-text-centered" type="text" placeholder="Prénom">
              </p>
            </div>
            <div class="field is-grouped my-5">
              <p class="control is-expanded">
                <input class="input has-text-centered" type="text" placeholder="Email">
              </p>
              <p class="control">
                <input class="input has-text-centered" type="text" placeholder="Téléphone">
              </p>
            </div>
            <div class="field is-grouped my-5">
              <p class="control is-expanded">
                <textarea class="textarea is-vcentered i" placeholder="Message"></textarea>
              </p>
            </div>
            <div class="field">
              <div class="control is-expanded is-danger">
                <button class="button">Nous contacter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'contact'
  }
</script>
