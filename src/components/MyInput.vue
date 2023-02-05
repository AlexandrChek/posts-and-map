<template>
    <input class="rounded" v-model="value">
</template>

<script>
export default {
    name: 'MyInput',
    data () {
        return {
            value: ''
        }
    },
    watch: {
        value (val) {
            this.updateModelValue(val)
        }
    },
    methods: {
        updateModelValue (val) {
            this.$emit('enterValue', val)
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/_variables.scss';

input {
    border: none;
    outline: .5px solid $orange;
    &:focus {
        border: none;
        outline: 3px solid $salat;
        background-color: beige;
    }
    @media (max-width: 575px) {
        font-size: 19px;
        width: 50%; 
    }
}
</style>