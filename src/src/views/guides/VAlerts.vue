<template>
  <section id="alerts">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a class="font-bold" href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/alerts.scss" target="_blank">#</a>
        Alerts
      </h1>
      <p>
        You can add beautiful designed alerts in any color, you like to your webpage.
        Furthermore you can add with the <kbd>alert-icon</kbd> class a information
        icon.
      </p>

      <ComponentExample title="Default alert" columnLeft="6" columnRight="6">
        <template #description>
          The default color for alerts are <kbd>primary-color-600</kbd>.
        </template>
        <template #preview>
          <div class="alert">
            <span class="spacer"></span>
            <h6 class="title">Awesome title</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum, repudiandae corporis illum quis ipsum quibusdam
              maiores non at nisi aperiam mollitia nobis tempore
              tenetur harum doloremque labore. Quibusdam, voluptatem cumque!
             </p>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Alert Icons" columnLeft="6" columnRight="6">
        <template #description>
          Give your alerts simple and powerful information icon.
        </template>
        <template #preview>
          <div class="alert"><span class="spacer"></span>
            <div class="row"><span class="spacer"></span>
              <div class="col-2"><span class="spacer"></span>
                <div class="alert-icon"></div>
              </div>
              <div class="col-10"><span class="spacer"></span>
                <h6 class="title mt-0">Awesome title</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, repudiandae corporis illum quis ipsum quibusdam
                  maiores non at nisi aperiam mollitia nobis tempore
                  tenetur harum doloremque labore. Quibusdam, voluptatem cumque!
                </p>
              </div>
            </div>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Alert Styling" columnRight="6" columnLeft="6">
        <template #description>
          Simply style your alerts by adding color or changing the border color.
        </template>
        <template #preview>
          <div class="alert bg-red-100 bc-red-700 text-red-700">
            <span class="spacer"></span>
            <h6 class="title text-red-900">Awesome title</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum, repudiandae corporis illum quis ipsum quibusdam
              maiores non at nisi aperiam mollitia nobis tempore
              tenetur harum doloremque labore. Quibusdam, voluptatem cumque!
             </p>
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
