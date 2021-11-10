function Studies(props) {
    return (
        <>
            <h2 className="page__studies" data-aos="zoom-in" data-aos-delay="1000">Studies</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample" data-aos="zoom-out-left" data-aos-delay="1100">
                <div className="accordion-item">
                    <h3 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Adalab <span></span>
                        </button>
                    </h3>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            Bootcamp of front-end development and some back-end notions.<br />
                            <span className="bold">Modules and subjects studied:</span> <br />
                            - Layout - HTML5, CSS3, Flexbox, CSS Grid, SASS, Bootstrap <br />
                            - JavaScript and APIs <br />
                            - React <br />
                            - Node JS and SQLite <br />
                            - Professional development <br />

                            <span className="bold">Tools:</span><br />
                            Git version control system , Github, Gulp, Visual Studio Code, Zeplin and Slack.<br />

                            <span className="bold">Methodology:</span><br />
                            Scrum and Agile<br />
                            <a href="https://adalab.es/" className="page__studies--link" target="_blank" rel="noreferrer">Visit Adalab</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Alfor Formazione
                        </button>
                    </h3>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            - Social Media Marketing <br />
                            - Content creation<br />
                            - Facebook Ads<br />
                            - Keywords research<br />
                            <span className="bold">Tools:</span><br />
                            Wordpress - Altervista<br />
                            <a href="https://www.facebook.com/servicelazio2000/" className="page__studies--link" target="_blank" rel="noreferrer"> Visit Alfor</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            CEF Centro de Estudios Financieros
                        </button>
                    </h3>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            - Marketing Plan<br />
                            - Buyer persona<br />
                            - Budget - Media Investment <br />
                            <a href="https://www.cef.es/es" className="page__studies--link" target="_blank" rel="noreferrer"> Visit CEF</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            Universidad del País Vasco
                        </button>
                    </h3>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div className="accordion-body">
                            - Marketing Strategy <br />
                            - Brand Communication <br />
                            - Consumer Behavior <br />
                            - Business Management <br />
                            - Economics<br />
                            <a href="https://www.ehu.eus/es/" className="page__studies--link" target="_blank" rel="noreferrer"> Visit UPV</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Studies;