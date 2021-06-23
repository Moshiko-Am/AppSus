export default {
	template: `
    <section class="compose-container">
        <header class="compose-header-container">
            <h3 class="compose-header">New Message</h3>
            <button class="btn btn-close-compose">X</button>
        </header>
        <main class="compose-body-container">
            <div class="compose-properties">
                <div class="compose-container">
                    <span class="compose-to">To:</span>
                    <input type="text" />
                </div>
                <div class="compose-container">
                    <span class="compose-cc">Cc:</span>
                    <input type="text" />
                </div>
                <div class="compose-container">
                    <span class="compose-bcc">Bcc:</span>
                    <input type="text" />
                </div>
                <div class="compose-container">
                    <span class="compose-subject">Subject</span>
                    <input type="text" />
                </div>
            </div>
            <div class="compose-txt-area-container">
                <p class="compose-txt-area">...</p>
            </div>
        </main>
        <footer class="compose-footer-container">
            <button class="btn compose-btn-send">Send</button>
            <button class="btn compose-btn-erase">
                <img src="img/trash.png" class="img compose-erase-img">
            </button>
        </footer>
    </section>
    `,
};
