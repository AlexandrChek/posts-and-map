<template>
    <button>&#9650;</button>
</template>

<script>
export default {
    name: 'UpBtn'
}
</script>

<style scoped lang="scss">
@mixin dementions($width, $height, $line-height, $f-size) {
    width: $width;
    height: $height;
    line-height: $line-height;
    font-size: $f-size;
}
button {
    @include dementions(4vw, 4vw, 4vw, 1.5vw);
    z-index: 3;
    border-radius: 50%;
    border: none;
    background-color: white;
    color: #29885d;
    opacity: .6;
    text-align: center;
    position: fixed;
    right: 35px;
    bottom: 5.5vh;
    &:hover {
        opacity: .8;
        color: #20e941;
        outline: 7px solid rgba(32, 233, 65, 0.2);
    }
    @media (max-width: 1199px) {
        @include dementions(5.5vw, 5.5vw, 5.5vw, 2vw);
    }
    @media (max-width: 991px) {
        @include dementions(8vw, 8vw, 8vw, 3vw);
    }
    @media (max-width: 767px) {
        @include dementions(9.5vw, 9.5vw, 9.5vw, 3.5vw);
    }
    @media (max-width: 575px) {
        right: 14px;
        @include dementions(13.5vw, 13.5vw, 13.5vw, 5vw);
    }
}
</style>