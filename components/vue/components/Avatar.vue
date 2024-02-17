<script setup lang="ts">
import { Avatar as AvatarRoot, AvatarFallback, AvatarImage } from '@ark-ui/vue/avatar'
import { avatar } from '~/styled-system/recipes'




const { src, name, ...rest } = defineProps( {src: String, name: String});

</script>

<template>
    <AvatarRoot :class="styles.root" v-bind="rest">
        <AvatarFallback :class="styles.fallback">PA</AvatarFallback>
        <AvatarImage :src="src" :alt="name" ></AvatarImage>
    </AvatarRoot>
</template>