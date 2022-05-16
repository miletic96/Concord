<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <div class="blue heading">
          <h1><span class="text-bg">Insights</span></h1>
        </div>
        <Articles :articles="articles" />
      </div>
    </div>
    <div class="blue">
      <footercontact></footercontact>
    </div>
  </div>
</template>

<script>
import Articles from "../components/Articles";
import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";
import footercontact from "../components/footercontact.vue";

export default {
  components: {
    Articles,
    footercontact,
  },
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.find("articles"),
      homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global"),
    };
  },
  head() {
    const { seo } = this.homepage;
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
<style>
.blue .text-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0) 55%,
    rgba(2, 0, 36, 1) 55%,
    rgba(113, 179, 236, 1) 55%
  );
}
.heading .text-bg {
  font-size: 3.5vw;
}
.heading {
  margin-bottom: 100px;
}
</style>
