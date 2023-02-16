<template>
    <button class="rounded mx-2 mb-1">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped lang="scss">
$btn-shadow: rgb(82, 12, 12);
button {
    padding: 4px 11px;
    background-color: rgb(145, 20, 20);
    color: white;
    font-weight: bold;
    font-size: 1vw;
    letter-spacing: .07vw;
    word-spacing: .35vw;
    border-color: $btn-shadow;
    box-shadow: inset 0px -1.5px 3px 3px $btn-shadow;
    &:hover {
        color: rgb(255, 253, 230);
        background-color: rgb(175, 25, 25);
    }
    &:active {
        box-shadow: none;
        transition: .2s;
    }
    @media (max-width: 1199px) {
        font-size: 1.25vw;
        padding: 3px 10px;
        box-shadow: inset 0px -1px 3px 2.5px $btn-shadow; 
    }
    @media (max-width: 991px) {
        font-size: 1.68vw;
    }
    @media (max-width: 767px) {
        font-size: 2.2vw;
    }
    @media (max-width: 575px) {
        font-size: 14px;
        letter-spacing: .25vw;
    }
}
</style>