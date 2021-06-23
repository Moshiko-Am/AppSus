export default {
    props: ['info'],
    template: `
        <section class="note-todos">
            <h3 class="todos-label">{{info.label}}</h3>
            <ul class="todos-list">
                <li v-for="(todo,idx) in info.todos">
                    <p>{{todo.txt}}</p>
                    <button>Delete</button>
                </li>
            </ul>
        </section>
    `,
};
