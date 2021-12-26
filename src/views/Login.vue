<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>
                    <p class="text-xs-center">
                        <router-link :to="{name: 'register'}">Need an account?</router-link>
                    </p>
                    <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors" />
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input v-model="email" type="text" placeholder="Email" class="form-control form-control-lg">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="password" type="password" placeholder="Password" class="form-control form-control-lg">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import McvValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'

export default {
    name: 'McvLogin',
    components: {
        McvValidationErrors
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        ...mapState({
            validationErrors: state => state.auth.validationErrors,
            isSubmitting: state => state.auth.isSubmitting,
        })
    },
    methods: {
        onSubmit() {
            this.$store
                .dispatch(actionTypes.login, {
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push({name: 'globalFeed'})
                })
        }
    }
}
</script>
