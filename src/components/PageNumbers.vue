<template>
    <p>
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'PageNumbers'
}
</script>

<style scoped lang="scss">
p {
    margin: 0 10px;
    font-size: x-large;
    cursor: pointer;
    @media (max-width: 991px) {
        font-size: large;
    }
    @media (max-width: 767px) {
        font-size: 3.25vw;
    }
    @media (max-width: 575px) {
        font-size: 5vw;
    }
}
</style>