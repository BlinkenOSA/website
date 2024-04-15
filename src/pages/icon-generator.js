import SearchBackground from "@/components/Search/SearchBackground";

const IconGenerator = () => {
    const style = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: '#FFF',
        zIndex: '100'
    }

    return (
        <div style={style}>
            <SearchBackground max={2000}/>
        </div>
    )
}

export default IconGenerator;