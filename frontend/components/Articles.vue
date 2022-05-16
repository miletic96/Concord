<template>
  <div class="insights">
    <div class=" articles d-flex">
      <div class="left-articles">
        <ArticleCard
          v-for="article in leftArticles"
          :key="article.id"
          :article="article"
        />
      </div>
      <div class="d-flex flex-column right-articles">
        <div class="uk-child-width-1-2@m uk-grid-match right-articles-top" uk-grid>
          <ArticleCard
            v-for="article in rightArticles"
            :key="article.id"
            :article="article"
          />
        </div>
        <div class="uk-child-width-1-2@m uk-grid-match right-articles-bot" uk-grid>
          <ArticleCard
            v-for="article in rightArticlesBottom"
            :key="article.id"
            :article="article"
          />
        </div>
        <!-- <div class="uk-child-width-1-2@m uk-grid-match right-articles-top" uk-grid>
          <ArticleCard
            v-for="article in rightArticlesBottom2"
            :key="article.id"
            :article="article"
          />
        </div> -->
      </div>

      
    </div>
    <div class="articles d-flex">
      <div class="ToTheEndArticles" >
          <ArticleCard
            v-for="article in ToTheEndArticles"
            :key="article.id"
            :article="article"
          />
        </div>
    </div>
    
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard";

export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, 2);
    },
    rightArticles() {
      return this.articles.slice(2, 4);
    },
    rightArticlesBottom() {
      return this.articles.slice(4, 6);
    },
    // rightArticlesBottom2() {
    //   return this.articles.slice(6, 8);
    // },
    ToTheEndArticles() {
            return this.articles.slice(6, this.articles.length);

    }
  },
  methods: {
    GetRandomColor() {
     let colors = ['#8976D2', '#F5ABB0', '#E9E9E9', '#71B3EC', '#3891DF '];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
  mounted() {
    document.querySelectorAll(".uk-card").forEach(el => {
      el.style.backgroundColor = this.GetRandomColor();
    });
  },
};
</script>
<style>
.insights .uk-card {
  border-radius: 35px;
  min-height: 300px;
}
.image-article {
  display: none;
}
.image-article img {
  max-height: 300px;
}
.insights .left-articles {
  width: 33%;
  
}
.insights .left-articles .uk-link-reset:first-child .image-article{
display: block;}
.insights .right-articles-bot .uk-link-reset:first-child .image-article {
  display: block;
}
.insights .articles {
  width: 100%;
}
.insights .right-articles-bot .titleAndImage {
display: flex;}
.insights .articles .ToTheEndArticles {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 40px;

}
.insights .articles .ToTheEndArticles  a{
  /* flex-grow: 1; */
  width: 30%; 
      }
.insights .left-articles .uk-card {
 margin-bottom: 40px;
 height: 500px;
}
.insights .right-articles {
  width: 66%;
    margin-left: 40px;
  margin-right: 40px;
}
.insights .right-articles-top {
  display: flex;
}
.insights .right-articles-bot {
  display: flex;
  flex-direction: column;
}
.insights .right-articles-bot a {
  width: 100%;
}
.datetime {
  color: white;
  font-size: 0.8vw;
}
.dateday {
  font-weight: bold;
  font-size: 1vw;
}
#title {
  font-size: 1.5vw;
  color: #3B3B3B;
}
</style>