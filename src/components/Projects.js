function Projects(props) {
    return (
        <>
            <h2 className="page__projects" data-aos="zoom-in" data-aos-delay="1000">Projects</h2>
            <ul className='page__projectList'>{props.renderProjectList}</ul>
        </>
    )
}
export default Projects;