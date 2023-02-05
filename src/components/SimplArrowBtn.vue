<template>
    <div class="mx-2">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'SimplArrowBtn'
}
</script>

<style scoped lang="scss">
@import '../assets/_variables.scss';

p {
    height: 58%;
    margin: 50% 0 10px;
    border: 1px solid $orange;
    font-size: x-large;
    cursor: pointer;
    &:hover {
        color: $salat;
        background-color: rgb(212, 253, 231);
        border: 2px solid $salat;
    }
    @media (max-width: 991px) {
        font-size: large;
    }
    @media (max-width: 767px) {
        font-size: 3.25vw;
    }
    @media (max-width: 575px) {
        font-size: 4.5vw;
    }
}
</style>