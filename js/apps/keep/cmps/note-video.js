export default {
    props : ['info'],
    template: `
        <section class="note-img">
            <h3>{{info.title}}</h3>
            <video :src="info.url" alt="">
        </section>
    `
};
