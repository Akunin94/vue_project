<template>
    <button @click.prevent="handleLike" class="btn btn-sm" :class="{'btn-primary': isFavoritedOptimistic, 'btn-outline-primary': !isFavoritedOptimistic}">
        <i class="ion-heart" />
        <template v-if="hasText">
            <span v-if="isFavoritedOptimistic"> Unfavorite Article</span>
            <span v-else> Favorite Article</span>
        </template>
        <span>&nbsp; {{ favoritesCountOptimistic }}</span>
    </button>
</template>

<script>
import {actionTypes} from '@/store/modules/addToFavorites'

export default {
    name: 'McvAddToFavorites',
    props: {
        isFavorited: {
            type: Boolean,
            required: true
        },
        articleSlug: {
            type: String, 
            required: true
        },
        favoritesCount: {
            type: Number, 
            required: true
        },
        hasText: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {
            isFavoritedOptimistic: this.isFavorited,
            favoritesCountOptimistic: this.favoritesCount,
        }
    },
    methods: {
        handleLike() {
            this.$store.dispatch(actionTypes.addToFavorites, {
                slug: this.articleSlug,
                isFavorited: this.isFavoritedOptimistic
            })

            if (this.isFavoritedOptimistic) {
                this.favoritesCountOptimistic--
            } else {
                this.favoritesCountOptimistic++
            }

            this.isFavoritedOptimistic = !this.isFavoritedOptimistic
        }
    }
}
</script>