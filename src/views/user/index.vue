<template>
    <div class="user">
        <div class="user__container">user</div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.user {
    @include RouterCss;

    &__container {
        margin-top: 20px;
    }
}
</style>
