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
					<input v-model.number="filterBy.fromPrice" type="number" placeholder="Min">
				</label>
			</div>
			<div class="to-input">
				<label>
					<input v-model.number="filterBy.toPrice" type="number" placeholder="Max">
				</label>
			</div>
		</div>
		<button @click="filter" class="btn-search"><img src="img/search.icon.svg" alt=""></button>
		<router-link to="bookAdd" class="btn btn-add-book">Add Book</router-link>
		<router-link to="bookAdd" class="btn btn-add-book small"><img src="img/plus.png" alt=""></router-link>
    </section>
    `,
	data() {
		return {
			filterBy: {
				title: '',
				fromPrice: -Infinity,
				toPrice: Infinity,
			},
		};
	},
	methods: {
		filter() {
			console.log(this.filterBy);
			this.$emit('filtered', { ...this.filterBy });
		},
	},
};
