<template>
    <button>&#9650;</button>
</template>

<script>
export default {
    name: 'UpBtn'
}
</script>

<style scoped>
button {
    width: 4vw;
    height: 4vw;
    line-height: 4vw;
    z-index: 3;
    border-radius: 50%;
    border: none;
    background-color: white;
    color: #29885d;
    font-size: 1.5vw;
    opacity: .6;
    text-align: center;
    position: fixed;
    right: 35px;
    bottom: 5.5vh;
}
button:hover {
    opacity: .8;
    color: #20e941;
    outline: 7px solid rgba(32, 233, 65, 0.2);
}
@media (max-width: 1199px) {
    button {
        width: 5.5vw;
        height: 5.5vw;
        line-height: 5.5vw;
        font-size: 2vw;
    }
}
@media (max-width: 991px) {
    button {
        width: 8vw;
        height: 8vw;
        line-height: 8vw;
        font-size: 3vw;
    }
}
@media (max-width: 767px) {
    button {
        width: 9.5vw;
        height: 9.5vw;
        line-height: 9.5vw;
        font-size: 3.5vw;
    }
}
@media (max-width: 575px) {
    button {
        right: 14px;
        width: 13.5vw;
        height: 13.5vw;
        line-height: 13.5vw;
        font-size: 5vw;
    }
}
</style>