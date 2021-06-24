export default {
    template: `
        <section class="keep-filter">
            <div class="search-input-container">
                <input v-model="filter.txt" type="text" @input="setFilter" placeholder="Search Keeps">
                <select class="filter-emails" v-model="filter.type" @change="setFilter">
                    <option value="ALL">All</option>
                    <option value="NoteTodos">Lists</option>
                    <option value="NoteImg">Images</option>
                    <option value="NoteTxt">Text</option>
                </select>
            </div>
        </section>
    `,
    data() {
        return {
            filter: {
                txt: '',
                type: 'ALL',
            }
        }
    },
    methods: {
        setFilter() {
            // console.log(this.filter);
            this.$emit('filtered', { ...this.filter });
        },
    }

}