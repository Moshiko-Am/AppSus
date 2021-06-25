export default {
	template: `
    <section class="book-filter">
        <div class="inputs-wrapper">
			<div class="txt-input">
				<label>
					<input v-model="filterBy.title" type="text" placeholder="Search books">
				</label>
			</div>
			<div class="from-input">
				<label>
					<input v-model.number="filterBy.fromPrice" type="number" placeholder="From Price">
				</label>
			</div>
			<div class="to-input">
				<label>
					<input v-model.number="filterBy.toPrice" type="number" placeholder="To Price">
				</label>
			</div>
		</div>
		<button @click="filter" class="btn-search">Search</button>
		<router-link to="bookAdd" class="btn btn-add-book">Add New Book</router-link>
    </section>
    `,
	data() {
		return {
			filterBy: {
				title: '',
				fromPrice: 0,
				toPrice: Infinity,
			},
		};
	},
	methods: {
		filter() {
			this.$emit('filtered', { ...this.filterBy });
		},
	},
};
