export default {
    template: `
    <section>
        <div class="edit-keep-bar">
            <button v-if="!colorMenu" @click="toggleColorMenu"><img src="img/color.png" alt=""></button>
            <button><img src="img/email.png" alt=""></button>
        </div>
        <div v-if="colorMenu" class="colors-menu" >
            <div @click="toggleColorMenu() ,changeColor('yellow-bg')" class="color-option yellow-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('red-bg')" class="color-option red-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('orange-bg')" class="color-option orange-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('blue-bg')" class="color-option blue-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('pink-bg')" class="color-option pink-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('purple-bg')" class="color-option purple-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('green-bg')" class="color-option green-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('torquise-bg')" class="color-option torquise-bg"></div>
            <div @click="toggleColorMenu() ,changeColor('brown-bg')" class="color-option brown-bg"></div>
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