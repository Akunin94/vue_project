<template>
    <div class="profile-page" v-if="userProfile">
        <div class="user-info">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img :src="userProfile.image" class="user-img">
                        <h4>{{ userProfile.username }}</h4>
                        <p>{{ userProfile.bio }}</p>
                        <div>
                            <router-link v-if="isCurrentUserProfile" class="btn btn-sm btn-outline-secondary action-btn" :to="{name: 'settings'}">Edit Profile Settings</router-link>
                            <mcv-active-buttons :userProfile="userProfile" v-else />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="articles-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <router-link :to="{name: 'userProfile', params: {slug: userProfile.username}}" class="nav-link" :class="{active: routeName === 'userProfile'}">My Post</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name: 'userProfileFavorites', params: {slug: userProfile.username}}" class="nav-link" :class="{active: routeName === 'userProfileFavorites'}">Favorited Posts</router-link>
                            </li>
                        </ul>
                    </div>
                    <mcv-feed :api-url="apiUrl" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {actionTypes as userProfileActionTypes} from '@/store/modules/userProfile'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'

import McvFeed from '@/components/Feed'
import McvActiveButtons from '@/components/ActiveButtons'

export default {
    name: 'McvUserProfile',
    components: {
        McvFeed,
        McvActiveButtons
    },
    computed: {
        ...mapState({
            isLoading: state => state.userProfile.isLoading,
            error: state => state.userProfile.error,
            userProfile: state => state.userProfile.data,
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        isCurrentUserProfile() {
            if (!this.currentUser || !this.userProfile) {
                return false
            }

            return this.currentUser.username === this.userProfile.username
        },
        apiUrl() {
            const isFavorites = this.$route.path.includes('favorites')

            return isFavorites ? `articles?favorited=${this.userProfileSlug}` : `/articles?author=${this.userProfileSlug}`
        },
        userProfileSlug() {
            return this.$route.params.slug
        },
        routeName() {
            return this.$route.name
        }
    },
    watch: {
        userProfileSlug() {
            this.getUserProfile();
        }
    },
    mounted() {
        this.getUserProfile();
    },
    methods: {
        getUserProfile() {
            this.$store.dispatch(userProfileActionTypes.getUserProfile, {
                slug: this.userProfileSlug
            })
        }
    }
}
</script>