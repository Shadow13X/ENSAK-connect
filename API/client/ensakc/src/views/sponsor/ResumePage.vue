<template>
    <iframe :src="'http://bibliotheque.pssfp.net/livres/'+this.$route.params.id+'.pdf'" width="100%" height="100%" style="border:none"></iframe>
</template>
<script>
export default {
    
}
</script>
