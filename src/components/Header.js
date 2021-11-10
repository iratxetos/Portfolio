import hero from "../images/header.jpg";


function Header(props) {

    return (
        <img
            className='page__header'
            src={hero}
            alt='hero'
            title='hero'
        />
    );
}


export default Header;
