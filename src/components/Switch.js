function Switch(props) {
    return (
        <>
            <div className="page__switch">
                <button className={`switch ${props.activate}`} id='switch' onClick={props.handleSwitch} >
                    <span><i class='fas fa-moon'></i></span>
                    <span><i class="fas fa-sun"></i></span>

                </button>
            </div>
        </>
    );
}

export default Switch;