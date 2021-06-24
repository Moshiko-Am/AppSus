export default {
    template: `
    <section>
        <div v-if="!colorMenu" class="edit-keep-bar">
            <button v-if="!colorMenu" @click="toggleColorMenu"><img src="img/color.png" alt=""></button>
            <button><img src="img/email.png" alt=""></button>
        </div>
        <div v-else class="colors-menu" >
            <div @click="toggleColorMenu() ,changeColor('#fff475')" class="color-option yellow-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#f28b82')" class="color-option red-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#fbbc2f')" class="color-option orange-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#aecbfa')" class="color-option blue-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#fdcfe8')" class="color-option pink-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#d7affb')" class="color-option purple-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#ccff90')" class="color-option green-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#a7ffeb')" class="color-option torquise-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('#e6c9a8')" class="color-option brown-bg"></div>
        </div>
    </section>
    `,
    data(){
        return {
            colorMenu : false,
        }
    },
    methods: {
        toggleColorMenu(){
            this.colorMenu = !this.colorMenu;
        },
        changeColor(colorClass){
            this.$emit('changeColor', colorClass)
        }
    }
}