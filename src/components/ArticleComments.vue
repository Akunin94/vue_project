<template>
    <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
            <form v-if="currentUser" class="card comment-form" @submit.prevent="onSubmit()">
                <div class="card-block">
                    <textarea v-model="newCommentBody" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
                </div>
                <div class="card-footer">
                    <img :src="currentUser.image" class="comment-author-img">
                    <button class="btn btn-sm btn-primary" :class="{'disabled': isLoading}" type="submit">Post Comment</button>
                </div>
            </form>
            <div class="card" v-for="card in comments" :key="card.id">
                <div class="card-block">
                    <p class="card-text">{{ card.body }}</p>
                </div>
                <div class="card-footer">
                    <router-link class="comment-author" :to="{name: 'userProfile', params: {slug: card.author.username}}">
                        <img :src="card.author.image" class="comment-author-img">
                    </router-link>
                    &nbsp;&nbsp;
                    <router-link :to="{name: 'userProfile', params: {slug: card.author.username}}">{{ card.author.username }}</router-link>
                    &nbsp;&nbsp;
                    <span class="date-posted">{{ articleDate(card.createdAt) }}</span>
                    <span class="mod-options" @click.prevent="deleteComment(card.id)" v-if="card.author.username == currentUser.username">
                        <i class="ion-trash-a"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {actionTypes} from '@/store/modules/articleComments'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import moment from 'moment'

export default {
    name: 'McvArticleComments',
    data() {
        return {
            newCommentBody: '',
        }
    },
    computed: {
        ...mapState({
            comments: state => state.articleComments.comments,
            isLoading: state => state.articleComments.isLoading,
            error: state => state.articleComments.error
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        articleSlug() {
            return this.$route.params.slug
        }
    },
    methods: {
        articleDate(date) {
            return moment(date).format('MMMM Do YYYY')
        },
        onSubmit() {
            this.$store.dispatch(actionTypes.addComment, 
                {
                    slug: this.articleSlug, 
                    commentInput: { body: this.newCommentBody }
                }
            ).then(() => {
                this.newCommentBody = ''
            })
        },
        deleteComment(id) {
            this.$store.dispatch(actionTypes.deleteComment, 
                {
                    slug: this.articleSlug, 
                    commentId: id
                }
            )
        }
    },
    mounted() {
        this.$store.dispatch(actionTypes.getComments, {slug: this.articleSlug})
    }
}
</script>