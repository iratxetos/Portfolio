import Typical from 'react-typical';

function Welcome(props) {
    return (
        <>
            <h2 className="page__welcome" data-aos="zoom-in" data-aos-delay="1000">Hey there, welcome.</h2>
            <p className="page__welcome--text">I like{' '}<Typical loop={Infinity}
                wrapper="b"
                steps={[
                    'Digital Transformation 🌐',
                    1000,
                    'Problem Solving 🦾',
                    1000,
                    'Marketing 🍟',
                    1000,
                    'Design 🗿',
                    1000,
                    'Food & Wine 🍷',
                    1000,
                    'Cycling 🚴‍♀️',
                    1000,
                ]}
            />
            </p>
        </>
    )
}

export default Welcome;