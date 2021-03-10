const Header = ({resetColors}) => {
    return (
        <div style={{height: 100, background: "lightblue"}}>
            <button onClick={resetColors}>
                Set All Colors to Random
            </button>
        </div>
    )
}

export default Header
