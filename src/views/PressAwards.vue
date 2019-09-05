<template>
  <div class="about">
    <page-content>
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <div class="ten columns">
          <h2>2019</h2>
          <ul>
            <li>National American Society of Landscape Architects • Communications Honor Award</li>
            <li>Fuck with the Future Podcast • <a href="http://www.findinginfinity.com/stories/meet-margot-jacobs/">Finding Infinity</a></li>
          </ul>
          <h2>2018</h2>
          <ul>
            <li>Southern California American Society of Landscape Architects • Communications Merit Award</li>
            <li>LA Press Award • <a href="https://www.kcet.org/shows/earth-focus/projects/dakota-access-pipeline">Multimedia Package Finalist KCET: “Earth Focus: Dakota Access Pipeline”</a></li>
          </ul>
          <h2>2017</h2>
          <ul>
            <li><a href="https://www.architecturaldigest.com/story/alma-and-friends-designers-fighting-the-dakota-access-pipeline">‘How an Anonymous Group of Designers Is Fighting the Dakota Access Pipeline’</a> Architectural Digest</li>
            <li><a href="https://landscapearchitecturemagazine.org/tag/alma-and-friends/">‘Mapping Dapl’</a> Landscape Architecture Magazine </li>
            <li><a href="https://itunes.apple.com/us/podcast/the-landscape-architecture-podcast/id968245724">‘Alma and Friends’</a>  The Landscape Architecture Podcast</li>
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
