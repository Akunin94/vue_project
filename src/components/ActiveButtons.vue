<template>
    <button class="btn btn-sm action-btn" :class="{'disabled': isFollowLoading, 'btn-outline-secondary': !isFollowing, 'btn-secondary': isFollowing }" @click.prevent="followUser">
        <template v-if="isFollowing">
            <i class="ion-minus-round"></i> &nbsp; 
            Unfollow {{ userProfile.username }}
        </template>
        <template v-else>
            <i class="ion-plus-round"></i> &nbsp; 
            Follow {{ userProfile.username }}
        </template>
    </button>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/userProfile'

export default {
    name: 'McvActiveButtons',
    props: {
        userProfile: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isFollowing: this.userProfile.following
        }
    },
    computed: {
        ...mapState({
            isFollowLoading: state => state.userProfile.isFollowLoading,
        }),
        // isFollowing: this.userProfile.following
    },
    methods: {
        followUser() {
            if (this.isFollowing) {
                this.$store.dispatch(actionTypes.unfollowUser, {
                    slug: this.userProfile.username
                })
            } else {
                this.$store.dispatch(actionTypes.followUser, {
                    slug: this.userProfile.username
                })
            }

            this.isFollowing = !this.isFollowing
        }
    }
}
</script>