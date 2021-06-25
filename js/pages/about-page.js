import headerControls from "../cmps/header-controls.js";

export default {
    template: `
    <section class="about-page">
        <div class="about-header-container">
        <header-controls />
        </div>
        <div>
            <h1 class="about-page-title">Our FrontEnd Developers</h1>
            <div class="developer-card">
                <img class="developer-img" src="img/moshiko.jpg">
                <div class="developer-info">
                    <div class="developer-title-container">
                        <div class="developer-title">
                            <h2 class="developer-name">Moshiko Amsalem</h2>
                            <h3 class="developer-role">CEO of mails department</h3>
                        </div>
                        <img class="developer-logo" src="img/gmail.png" alt="">
                    </div>
                    <p class="developer-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloremque magni non nostrum aliquam. Earum corrupti, fugiat dolor vel, tenetur beatae dolorum et odio nisi nihil veniam ratione delectus. Dolorum culpa, tempore, consectetur ipsam harum voluptatem cumque sapiente adipisci esse molestias odit eligendi earum perferendis impedit aut, beatae iste. Aliquam.</p>
                </div>
            </div>
            <div class="developer-card">
                <img class="developer-img tom" src="img/tom.jpg">
                <div class="developer-info">
                    <div class="developer-title-container">
                        <div class="developer-title">
                            <h2 class="developer-name">Tom Bechar</h2>
                            <h3 class="developer-role">CEO of keeps department</h3>
                        </div>
                        <img class="developer-logo developer-logo-keep" src="img/keep.png" alt="">
                    </div>
                    <p class="developer-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem error molestiae tempore unde. Deserunt modi optio quae, cumque facere quod sint, ut explicabo voluptatum voluptas dignissimos quaerat maxime! Id deleniti magni unde laboriosam, ex numquam! Fugit quibusdam doloremque enim nobis aperiam quisquam libero perferendis eum? Possimus accusantium eveniet eum. Fugiat.</p>
                </div>
            </div>
        </div>
            <footer class="footer">
            <h5>&copy CoffeeRights</h5>
        </footer>
    </section>
    `,
    components: {
        headerControls
    }
};
