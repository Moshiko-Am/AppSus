export default {
	template: `
    <header class="app-header">
        <nav>
        <router-link to='/'>
            <img class="img" src="img/user.png" alt="user-image">
        </router-link>
            <button @click="toggleMenu">
                <img class="img img-header-dots" src="img/google menu.png" alt="menu-icon">
            </button>
        </nav>
        <div class="main-menu" v-if="menuShow">
            <router-link to="/book">
                <div class="menu-item">
                    <img src="img/book.png" class="img books-img">
                    <p class="menu-item-title">Books</p>
                </div>
            </router-link>
            <router-link to="/mail/inbox">
            <div class="menu-item">
                    <img src="img/gmail.png" class="img mail-img">
                    <p class="menu-item-title">Mails</p>
                </div>
            </router-link>
            <router-link to="/keep">
            <div class="menu-item">
                    <img src="img/keep.png" class="img keep-img">
                    <p class="menu-item-title">Keep</p>
                </div>
            </router-link>
        </div>
    </header>
    
    `,
	data() {
		return {
			menuShow: false,
		};
	},
	methods: {
		toggleMenu() {
			this.menuShow = !this.menuShow;
		},
	},
};
