export const isSubscribed = {
    computed: {
        isSubscribed () : any[] {
            return this.$store.state.user.newsletter
        }
    }
}
