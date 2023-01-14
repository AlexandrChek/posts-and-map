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

<style scoped>
input:focus {
    border: none;
    outline: 3px solid #1dda2c;
    background-color: beige;
}
@media (max-width: 575px) {
    input {
        font-size: 19px;
        width: 50%
    }
}
</style>