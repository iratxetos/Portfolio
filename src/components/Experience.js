import UO from "../images/UO.png";
import TBWA from "../images/TBWA.png";
import servicelazio from "../images/servicelazio.png";
import internship from "../images/intern.png";
import rome from "../images/rome.png";

function Experience(props) {

    return (
        <>
            <h2 className="page__work" data-aos="zoom-in" data-aos-delay="1000">Work</h2>
            <article className="page__work--article" data-aos="zoom-out-right" data-aos-delay="1100">
                <img
                    className='page__work--img'
                    src={UO}
                    alt='UO'
                    title='UO'
                />
                <div className="page__work--description">
                    <h4 className="page__work--title">Project Manager</h4>
                    <h6 className="page__work--subtitle">UO Solutions · Jan 2021 - Apr 2021</h6>
                    <p className="page__work--text">Working on the execution and the follow up of different projects. Preparing Briefs, managing resources, carrying out time schedules and making presentations. Attending to customers from Argentina, Mexico, and USA.</p>
                </div>
            </article>

            <article className="page__work--article" data-aos="zoom-out-left" data-aos-delay="1200">
                <img
                    className='page__work--img'
                    src={TBWA}
                    alt='TBWA'
                    title='TBWA'
                />
                <div className="page__work--description">
                    <h4 className="page__work--title">Account Executive</h4>
                    <h6 className="page__work--subtitle">TBWA · May 2021 - Jan 2020</h6>
                    <p className="page__work--text">I was the link between client and agency, attending to two different brands: Nissan and La Caja. For the first one, both in ATL and Digital campaigns/communication (web page included). For the second, instead, more focused on Social Media channels.</p>
                </div>
            </article>

            <article className="page__work--article" data-aos="zoom-out-right" data-aos-delay="1300">
                <img
                    className='page__work--img'
                    src={servicelazio}
                    alt='service lazio'
                    title='service lazio'
                />
                <div className="page__work--description">
                    <h4 className="page__work--title">Web Strategy and Design</h4>
                    <h6 className="page__work--subtitle">Service Lazio · Jul 2017 - Nov 2017</h6>
                    <p className="page__work--text">Service Lazio 2000 organises training activities and courses as well as, conducts advisory activities for companies. I was making the new online profile for them: creating the new web page, with Wordpress and using SEO content strategy optimizing the visualization in the main searchers.</p>
                </div>
            </article>

            <article className="page__work--article" data-aos="zoom-out-left" data-aos-delay="1400">
                <img
                    className='page__work--img'
                    src={rome}
                    alt='rome'
                    title='rome'
                />
                <div className="page__work--description">
                    <h4 className="page__work--title">Marketing Executive</h4>
                    <h6 className="page__work--subtitle">Attractions in Rome · Jul 2016 - Jan 2017</h6>
                    <p className="page__work--text">I was in charge of an online marketing campaign for a tourist agency that organises tours in Rome. I launched optimised online ads through Google Adwords, as well as, I created a landing page based on the right keyword research. Besides that, I managed the customer service for Spanish speakers.</p>
                </div>
            </article>

            <article className="page__work--article" data-aos="zoom-out-right" data-aos-delay="1500">
                <img
                    className='page__work--img'
                    src={internship}
                    alt='internship'
                    title='internship'
                />
                <div className="page__work--description">
                    <h4 className="page__work--title">Marketing and Communication Internships</h4>
                    <h6 className="page__work--subtitle">Euskaditalia - Instamedia -American Appraisal · Sep 2014 - Jul 2016</h6>
                    <p className="page__work--text">In Bilbao, Cork and in Rome I did several internships related to the management of social networks, communications and commercial tasks.</p>
                </div>
            </article>
        </>
    );
}


export default Experience;