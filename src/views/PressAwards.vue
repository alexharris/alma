<template>
  <div class="about">
    <page-content>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="ten columns">
          <h2>2019</h2>
          <ul>
            <li>National American Society of Landscape Architects • Communications Honor Award</li>
            <li>Fuck with the Future Podcast • Finding Infinity</li>
          </ul>
          <h2>2018</h2>
          <ul>
            <li>Southern California American Society of Landscape Architects • Communications Merit Award</li>
            <li>LA Press Award • Multimedia Package Finalist KCET: “Earth Focus: Dakota Access Pipeline”</li>
          </ul>
          <h2>2017</h2>
          <ul>
            <li>‘How an Anonymous Group of Designers Is Fighting the Dakota Access Pipeline’ Architectural Digest</li>
            <li>‘Mapping Dapl’ Landscape Architecture Magazine </li>
            <li>‘Alma and Friends’  The Landscape Architecture Podcast</li>
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
  ul {
    list-style-type: none;
  }
</style>
