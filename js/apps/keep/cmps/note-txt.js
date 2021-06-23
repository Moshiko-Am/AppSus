export default {
    props: ['info'],
    template: `
        <section class="note-txt">
            <h3>{{info.title}}</h3>
            <p class="note-content">{{info.txt}}</p>
        </section>
    `
};
