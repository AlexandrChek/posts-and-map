<template>
    <div class="modal-wrapper rounded">
        <p class="text-center">Remove this marker?</p>
        <div class="text-center">
            <button class="btn btn-danger m-2 px-0" @click="removeM">Remove</button>
            <button class="btn btn-danger m-2 px-0" @click="close">Cancel</button>
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

<style scoped>
.modal-wrapper {
    position: fixed;
    top: 20vw;
    left: 40%;
    width: 20%;
    z-index: 800;
    background-color: rgb(205, 205, 205);
    border: 1px solid black;
}
p {
    font-size: 19px;
    font-weight: bold;
    color: black;
    margin: 13px; 
}
button {
    width: 31%;
}
@media (max-width: 1199px) {
    .modal-wrapper {
        left: 36%;
        width: 28%;
    }
}
@media (max-width: 991px) {
    p {
        font-size: 18px;
    }
    .modal-wrapper {
        left: 34%;
        width: 32%;
    }
}
@media (max-width: 767px) {
    .modal-wrapper {
        top: 32vh;
        left: 30%;
        width: 40%;
    }
    button {
        width: 32%;
    }
}
@media (max-width: 575px) {
    .modal-wrapper {
        left: 20%;
        width: 60%;
    }
    p {
        font-size: 16px;
    }
    button {
        font-size: 15px;
        padding: 3px 2px;
    }
}
</style>