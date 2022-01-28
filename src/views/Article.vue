<template>
    <div class="article-page">
        <div class="banner">
            <div class="container" v-if="article">
                <h1>{{ article.title }}</h1>
                <div class="article-meta">
                    <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
                        <img :src="article.author.image" alt="">
                    </router-link>
                    <div class="info">
                        <router-link class="author" :to="{name: 'userProfile', params: {slug: article.author.username}}">
                            {{ article.author.username }}
                        </router-link>
                        <span class="date">{{ articleDate }}</span>
                    </div>
                    <span v-if="isAuthor">
                        <router-link class="btn btn-outline-secondary btn-sm" :to="{name: 'editArticle', params: {slug: article.slug}}">
                            <i class="ion-edit"></i> 
                            Edit Article
                        </router-link>
                        <button class="btn btn-outline-danger btn-sm" @click.prevent="deleteArticle">
                            <i class="ion-trash-a"></i> 
                            Delete Article
                        </button>
                    </span>
                    <mcv-active-buttons :userProfile="article.author" v-else />
                    &nbsp;
                    <mcv-add-to-favorites :is-favorited="article.favorited" :article-slug="article.slug" :favorites-count="article.favoritesCount" :hasText="true" />
                </div>
            </div>
        </div>
        <div class="container page">
            <mcv-loading v-if="isLoading" />
            <mcv-error-message v-if="error" :message="error" />
            <div class="row article-content" v-if="article">
                <div class="col-xs-12">
                    <div>
                        <p>{{ article.body }}</p>
                    </div>
                    <mcv-taglist v-if="article.tagList" :tagList="article.tagList" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {actionTypes as articleActionTypes} from '@/store/modules/article'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import {mapState, mapGetters} from 'vuex'
import moment from 'moment'

import McvLoading from '@/components/Loading'
import McvErrorMessage from '@/components/ErrorMessage'
import McvTaglist from '@/components/Taglist'
import McvActiveButtons from '@/components/ActiveButtons'
import McvAddToFavorites from '@/components/AddToFavorites'

export default {
    name: 'McvArticle',
    components: {
        McvLoading,
        McvErrorMessage,
        McvTaglist,
        McvActiveButtons,
        McvAddToFavorites
    },
    computed: {
        ...mapState({
            isLoading: state => state.article.isLoading,
            article: state => state.article.data,
            error: state => state.article.error,
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        isAuthor() {
            if (!this.currentUser || !this.article) {
                return false
            }

            return this.currentUser.username === this.article.author.username
        },
        articleDate: function(){
            return moment(this.article.createdAt).format('MMMM Do YYYY')
        },
    },
    mounted() {
        this.$store.dispatch(articleActionTypes.getArticle, {slug: this.$route.params.slug})
    },
    methods: {
        deleteArticle() {
            this.$store.dispatch(articleActionTypes.deleteArticle, {slug: this.$route.params.slug})
                .then(() => {
                    this.$router.push({name: 'globalFeed'})
                })
        }
    }
}
</script>