const Header = ({isRunning, resetColors, toggle}) => {
    return (
        <div style={{height: 100, background: "lightblue"}}>
            <button onClick={resetColors}>
                Set All Colors to Random
            </button>
            <button onClick={toggle}>{isRunning ? "Please Fucking Stop" : "Start the Madness"}</button>
        </div>
    )
}

export default Header
