<template>
  <div class="about">
    <page-content>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="ten columns">
            <h2>ALMA</h2>
            <p>ALMA is a non-profit research, design and advocacy group combining landscape architecture with visual representation and community outreach practices to increase awareness on issues associated with the environment, land use and human rights. ALMA combines current data analysis, mapping techniques, visualization tools and design thinking to create exhibits to better educate the public about current, complex and catalytic issues. Recently, ALMA completed a series of maps on the Dakota Access Pipeline route, illustrating the effects it will have on adjacent communities and beyond, as well as outlining opportunities for alternatives to fossil fuels along the DAPL route including wind and solar. </p>

            <h2>WANNA BE OUR FRIEND?</h2>
            <p>Contact us <a href="mailto:margot.rose.jacobs@gmail.com">HERE</a></p>
        </div>
      </div>           
    </page-content>
  </div>
</template>

<script>
// @ is an alias to /src
import PageContent from "@/components/PageContent.vue";

export default {
  name: "about",
  components: {
    PageContent
  }
};
</script>



<style lang="scss" scoped>
  img {
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  .row {
    margin-top: 2rem;
  }
</style>
