const LabeledData = ({label, data, marginBottom=true}) => {
    return (
        data !== null &&
        <div style={marginBottom ? {marginBottom: '8px'} : undefined}>
            <span className={'subtitle-small'}>{label}: </span>
            <span>{data}</span>
        </div>
    )
}

export default LabeledData;