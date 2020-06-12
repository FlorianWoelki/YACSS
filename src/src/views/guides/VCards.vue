<template>
  <section id="cards">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/card.scss"
          target="_blank"
        >#</a>
        Cards
      </h1>
      <p>
        With cards you can simply add a hierarchical white
        rectangle for better structuring content on your page.
      </p>

      <ComponentExample title="Default card with custom padding">
        <template #description>
          The default card will have no padding for the content,
          but you can easily adjust the padding with our
          utility classes.
        </template>
        <template #preview>
          <div class="card p-2"><span class="spacer"></span>
            <p>
              Create a simple Card!
            </p>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Adjust the shadow of the card">
        <template #description>
          We have a custom shadow system, so you can easily
          adjust every single shadow on every single element.
        </template>
        <template #preview>
          <div class="card shadow-none p-2"><span class="spacer"></span>
            <p>
              None Shadow
            </p>
          </div>
          <div class="card shadow-xsmall p-2"><span class="spacer"></span>
            <p>
              xSmall Shadow
            </p>
          </div>
          <div class="card shadow-small p-2"><span class="spacer"></span>
            <p>
              Small Shadow
            </p>
          </div>
          <div class="card shadow-medium p-2"><span class="spacer"></span>
            <p>
              Medium Shadow
            </p>
          </div>
          <div class="card shadow-large p-2"><span class="spacer"></span>
            <p>
              Large Shadow
            </p>
          </div>
          <div class="card shadow-xlarge p-2"><span class="spacer"></span>
            <p>
              xLarge Shadow
            </p>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Set the equal height for cards">
        <template #description>
          If you have a row, columns and in these columns are cards
          and you want to add the equal height, you can easily do that
          by adding <kbd>.card-equal-height</kbd>.
        </template>
        <template #preview>
          <div class="row">
            <div class="col-6"><span class="spacer"></span>
              <div class="card p-2"><span class="spacer"></span>
                <p>
                  Simple Card!
                </p>
              </div>
            </div>
            <div class="col-6"><span class="spacer"></span>
              <div class="card p-2"><span class="spacer"></span>
                <p>
                  Simple Card!
                </p>
              </div>
            </div>
          </div>
        </template>
      </ComponentExample>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ComponentExample from '@/components/ComponentExample.vue';

export default {
  components: {
    Navbar,
    ComponentExample,
  },
};
</script>
