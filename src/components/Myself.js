import Iratxe from "../images/iratxe.jpg";


function Myself(props) {
    return (
        <>
            <img
                className='page__myPhoto'
                src={Iratxe}
                alt='iratxe'
                title='iratxe'
                data-aos="zoom-in-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
            />
            <h1 className="page__title" data-aos="fade-down-right" data-aos-delay="500">Iratxe Martin</h1>
            <h4 className="page__subtitle" data-aos="fade-down-right" data-aos-delay="8000">Project Management · Front-end Development · Marketing, Madrid</h4>
        </>
    )
}
export default Myself;