<template>
  <div class="about">
    <page-content>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="four columns"><img src="../assets/margot-jacobs.jpg" alt="Photo of Margot Jacobs"/></div>
        <div class="six columns">
          <h2><strong>MARGOT JACOBS</strong> FOUNDER/DIRECTOR</h2>
          <p>
ALMA was founded by Margot Jacobs, who advocates for designing with nature and for people. This includes multiple-benefit landscapes; public parks, waterways, infrastructure systems and mixed-use developments in the US as well as Central and South America. Committed to work that improves quality of life, she is active in water conservation, environmental justice, and pro-bono efforts. She is currently leading the design for several projects along the LA River and in the Los Angeles Arts District. Margot is a senior associate and strategic project development lead at Studio-MLA.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="four columns"><img src="../assets/eden-ferry.jpg" alt="Photo of Eden Ferry" /></div>
        <div class="six columns">
          <h2><strong>EDEN FERRY</strong> THOUGHT LEADER</h2>
          <p>
            Eden Ferry is driven by her fascination with urban ecology, specifically waterways and systems, as well as a pursuit of environmental and social justice. Her ability to visualize natural systems solutions through an artistic lens is particularly helpful for efforts communicating ecological design to communities and stakeholders. In addition to ALMA, Eden is an Associate  at Studio-MLA.          
          </p>
        </div>
      </div>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="four columns"><img src="../assets/kaleen-juarez.jpg" alt="Photo of Kaleen Juarez" /></div>
        <div class="six columns">
          <h2><strong>KALEEN JUAREZ</strong> THOUGHT LEADER</h2>
          <p>Kaleen Juarez is driven by her desire to merge ecology, social justice and thoughtful design to evoke urban change that people can experience each day. She worked with the Port of San Francisco where she focused on resilient design which created her drive to advocate for socially and ecologically-responsible design for the public good. In addition to ALMA, Kaleen is an Associate at Studio-MLA.</p>
        </div>
      </div> 
      <div class="row">
        <div class="six columns">&nbsp;</div>
        <div class="six columns">
          <h2><strong>PAST CONTRIBUTORS</strong></h2>
          <ul>
            <li>Aaron Ackerman</li>
            <li>Jeremy Jarin</li>
            <li>Claire Latane</li>
            <li>Kenny Tang</li>
            <li>Jean Yang</li>
          </ul>
        </div>  
      </div>         
    </page-content>
  </div>
</template>

<script>
// @ is an alias to /src
import PageContent from "@/components/PageContent.vue";

export default {
  name: "home",
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
