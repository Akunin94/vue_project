<template>
  <div>
      <mcv-loading v-if="loading" />
      <mcv-error-message v-if="error" />
      <div v-if="feed">
          <div class="article-preview" v-for="(article, index) in feed.articles" :key="index">
              <div class="article-meta">
                  <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
                      <img :src="article.author.image">
                  </router-link>
                  <div class="info">
                      <router-link class="author" :to="{name: 'userProfile', params: {slug: article.author.username}}">
                        {{ article.author.username }}
                    </router-link>
                    <span class="date">{{ article.createdAt }}</span>
                  </div>
                  <div class="pull-xs-right">
                      <mcv-add-to-favorites :is-favorited="article.favorited" :article-slug="article.slug" :favorites-count="article.favoritesCount" />
                  </div>
              </div>
              <router-link class="preview-link" :to="{name: 'article', params: {slug: article.slug}}">
                  <h1>{{ article.title }}</h1>
                  <p>{{ article.description }}</p>
                  <span>Read more...</span>
                  <mcv-taglist v-if="article.tagList" :tagList="article.tagList" />
              </router-link>
          </div>
          <mcv-pagination :total="feed.articlesCount" :limit="limit" :current-page="currentPage" :url="baseUrl" />
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import {limit} from '@/helpers/vars'
import {stringify, parseUrl} from 'query-string'

import McvPagination from '@/components/Pagination.vue'
import McvLoading from '@/components/Loading'
import McvErrorMessage from '@/components/ErrorMessage'
import McvTaglist from '@/components/Taglist'
import McvAddToFavorites from '@/components/AddToFavorites'

export default {
    name: 'McvFeed',
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    components: {
        McvPagination,
        McvLoading,
        McvErrorMessage,
        McvTaglist,
        McvAddToFavorites
    },
    data() {
        return {
            limit
        }
    },
    computed: {
        ...mapState({
            loading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error,
        }),
        currentPage() {
            return +(this.$route.query.page || 1)
        },
        baseUrl() {
            return this.$route.path
        },
        offset() {
            return this.currentPage * limit - limit
        }
    },
    watch: {
        currentPage() {
            this.fetchFeed()
        },
        apiUrl() {
            this.fetchFeed()
        }
    },
    mounted() {
        this.fetchFeed()
    },
    methods: {
        fetchFeed() {
            const parsedUrl = parseUrl(this.apiUrl)
            const stringifiedParams = stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`

            this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
        }
    }
}
</script>
