const truncateWithEllipses = (text, max) => {
    const tokens = text.split(' ')
    let output = ''

    tokens.every(token => {
        if (output.length + token.length < max) {
           output += `${token} `;
           return true
        } else {
           output += `...`;
           return false
        }
    })

    return output;
}

export default truncateWithEllipses;