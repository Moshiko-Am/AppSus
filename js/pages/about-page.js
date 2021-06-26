import headerControls from "../cmps/header-controls.js";

export default {
    template: `
    <section class="about-page">
        <div class="about-header-container">
        <header-controls />
        </div>
        <div>
            <h1 class="about-page-title">Our FrontEnd Developers</h1>
            <div class="developer-card-container">
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
                    <p class="developer-about">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti animi corporis vero. 
                    Quidem fuga modi, illo hic inventore unde quos distinctio quaerat est, fugit rem sit earum eaque provident magni. 
                    <h4>Check out his <a class="linkedin" href="https://www.linkedin.com/in/tom-bechar-8710851a6">LinkedIn profile.</a></h4>
                    </p>
                </div>
            </div>
            </div>
            <div class="developer-card-container">
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
                    <p class="developer-about">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti animi corporis vero. 
                    Quidem fuga modi, illo hic inventore unde quos distinctio quaerat est, fugit rem sit earum eaque provident magni.
                    Check out his 
                    <h4>Check out his <a class="linkedin" href="https://www.linkedin.com/in/tom-bechar-8710851a6">LinkedIn profile.</a></h4>
                    </p>
                </div>
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
