<template>
    <div class="modal-wrapper rounded">
        <p class="text-center">Remove this marker?</p>
        <div class="text-center">
            <button class="btn btn-danger px-0" @click="removeM">Remove</button>
            <button class="btn btn-danger px-0" @click="close">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalRemover',
    props: ['toDel'],
    methods: {
        removeM () {
            sessionStorage.setItem("toDel", JSON.stringify(this.toDel))
            this.$emit('closeRemover')
            location.reload()
        },
        close () {
            this.$emit('closeRemover')
        }
    }
}
</script>

<style scoped lang="scss">
.modal-wrapper {
    position: fixed;
    top: 20vw;
    left: 40%;
    width: 20%;
    z-index: 800;
    background-color: rgb(205, 205, 205);
    border: 1px solid black;
    @media (max-width: 1199px) {
        left: 36%;
        width: 28%;
    }
    @media (max-width: 991px) {
        left: 34%;
        width: 32%;
    }
    @media (max-width: 767px) {
        top: 32vh;
        left: 30%;
        width: 40%;
    }
    @media (max-width: 575px) {
        left: 20%;
        width: 60%;
    }
}
p {
    font-size: 19px;
    font-weight: bold;
    color: black;
    margin: 13px;
    @media (max-width: 991px) {
        font-size: 18px;
    }
    @media (max-width: 575px) {
        font-size: 16px;
    }
}
button {
    width: 32%;
    margin: 9px 5%;
    @media (max-width: 575px) {
        font-size: 15px;
        padding: 3px 2px;
    } 
}
</style>