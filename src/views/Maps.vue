<template>
  <div class="about">
    <page-content>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="four columns"><img src="../assets/dapl.jpg" alt="Example of DAPL map" /></div>
        <div class="six columns">
          <h2><a href="https://www.kcet.org/shows/earth-focus/projects/dakota-access-pipeline">A LIVING, BREATHING MOVEMENT: AN INTRODUCTION TO THE DAPL ISSUE</a></h2>
          <p>A series of interactive maps on the Dakota Access Pipeline route that illustrate the effects it will have on adjacent communities and beyond, as well as outlining opportunities for alternatives to fossil fuels along the DAPL route including wind and solar. Our goal was to increase awareness on the critical issues associated the DAPL  including the fight for environmental protection and Native people's human rights.</p>
        </div>
      </div>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="four columns"><img src="../assets/border.jpg" alt="Example of Border Map" /></div>
        <div class="six columns">
          <h2><strong>BORDER</strong></h2>
          <p>
            The Trump administration is currently reviewing design bids for a fence to run the entire length of the border between the US and Mexico. There are overwhelming economic, ecological, and human costs to this proposal. ALMA is currently creating a series of exhbits to clearly demonstrate the impact such a wall would have on adjacent communities and on the economic, cultural and ecological relationships of these two countries.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="four columns"><img src="../assets/before-the-end.jpg" alt="Before the End logo" /></div>
        <div class="six columns">
          <h2><strong>BEFORE THE END</strong></h2>
          <p>
            Before the End proposes to demonstrate  information crucial to understanding climate issues and the reaction to the foremost problems contributing to climate change. Applying acute thought and reflection, Before the End will envision solutions and catalyze significant change within the next 11 years. Through a partnership with educational institutions, renowned artists, and thought leaders, ALMA will complete a series of maps, infographics, artwork, writings, publications, and programming to increase public awareness and to inspire change.
          </p>
        </div>
      </div>           
    </page-content>
  </div>
</template>

<script>
// @ is an alias to /src
import PageContent from "@/components/PageContent.vue";

export default {
  name: "maps",
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
    margin-top: 5rem;
  }
</style>
