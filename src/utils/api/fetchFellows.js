export const fetchFellowsList = (OSAUnits) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'LastName',
        'sort[1]': 'FirstName',
        'pagination[pageSize]': 100
    }

    return ['fellows', params]
}
