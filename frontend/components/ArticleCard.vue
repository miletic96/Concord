<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'articles-slug', params: { slug: article.slug } }"
    class="uk-link-reset"
  >
    <div class="uk-card uk-card-muted">
      <!-- <div class="uk-card-media-top">
        <img :src="getStrapiMedia(article.image.url)" height="100" />
      </div> -->
      <div class="uk-card-body">
        
        <div class="titleAndImage">
          <div class="dataAndTitle">
            <p v-if="article.category" id="category" class="uk-text-uppercase datetime pt-med">
            <!-- {{ article.category.name }} -->
            <span class="dateday">{{ moment(article.published_at).format("DD") }}</span><br />
            {{ moment(article.published_at).format("MMM") }}
                    </p>
            <p id="title" class="uk-text-large pt-med">{{ article.title }}</p>
          </div>
          <div class="image-article">
        <img :src="getStrapiMedia(article.image.url)" height="100" />
      </div> 
          <!-- <hr class="uk-divider-small" />
          <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              <img
                class="avatar"
                :src="getStrapiMedia(article.author.picture.url)"
                style="position: static; border-radius: 50%; object-fit: cover"
                width="40px"
                height="40px"
                :alt="article.title"
              />
            </div>
            <div class="uk-width-expand">
              <p class="uk-margin-remove-bottom">{{ article.author.name }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";
import moment from "moment";

export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getStrapiMedia,
    moment,
  },
};
</script>
