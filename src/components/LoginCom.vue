<template>
    <div class="user-control">
        <div class="login" :class="toggleFlag && 'active'">
            <form class="form" @submit="submit">
                <label for="chk" @click="toggleFlag = true">Log in</label>
                <input class="input" type="email" name="email" placeholder="Email">
                <input class="input" type="password" name="pswd" placeholder="Password">
                <button>Log in</button>
            </form>
        </div>

        <div class="register" :class="!toggleFlag && 'active'">
            <form class="form" @submit="submit">
                <label for="chk" @click="toggleFlag = false">Register</label>
                <input class="input" type="text" name="txt" placeholder="Username">
                <input class="input" type="email" name="email" placeholder="Email">
                <input class="input" type="password" name="pswd" placeholder="Password">
                <button>Register</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineModel } from 'vue';
const toggleFlag = ref(true)
const open = defineModel()
const submit = (event: Event) => {
    open.value = false
    console.log(open.value)
    event.preventDefault()
}
</script>

<style scoped lang="scss">
.user-control {
    @include position(fixed, 50%, 50%);
    transform: translate(-50%, -50%);
    @include flex($fd: column);
    background-color: $color-purple-light;
    max-height: 480px;
    overflow: hidden;
    border-radius: 50px;
    box-shadow: 7px 7px 10px 3px #24004628;
    z-index: 3;

    .form {
        @include flex($fd: column);
        gap: 24px;
        width: 700px;
        @include boxPadding(24px 24px 0);

    }
}

.login {
    position: relative;
    width: 100%;
    height: 100%;

    label {
        transform: scale(.6);
        margin: 0 0 5%;
    }

    &:where(.active) {
        label {
            transform: scale(1);
            margin: 50px 0 10px;
        }
    }
}

label {
    color: #fff;
    font-size: 36px;
    justify-content: center;
    display: flex;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

.input {
    width: 100%;
    height: 40px;
    background: #e0dede;
    @include boxPadding(10px);
    border: none;
    outline: none;
    border-radius: 4px;
}

/*Register*/
.register {
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(5%);
    transition: .8s ease-in-out;

    label {
        color: lighten($color: $color-purple-light, $amount: 20);
        transform: scale(.6);
    }

    &.active {
        transform: translateY(-70%);

        label {
            transform: scale(1);
            margin: 0px 0 5%;
        }
    }
}

.form button {
    width: 85%;
    height: 40px;
    margin: 12px auto 10%;
    color: #fff;
    background: lighten($color: $color-purple-light, $amount: 20);
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s ease-in;

    &:hover {
        background-color: lighten($color: $color-purple-light, $amount: 30);
    }
}
</style>
