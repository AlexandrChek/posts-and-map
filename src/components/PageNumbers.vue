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

<style scoped>
p {
    margin: 0 10px;
    font-size: x-large;
    cursor: pointer;
}
@media (max-width: 991px) {
    p {
        font-size: large; 
    }
}
@media (max-width: 767px) {
    p {
        font-size: 3.25vw;
    }
}
@media (max-width: 575px) {
    p {
        font-size: 5vw;
    }
}
</style>