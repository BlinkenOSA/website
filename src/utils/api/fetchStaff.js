export const fetchStaffList = (OSAUnits) => {
    const params = {
        'populate': 'Image',
        'sort[0]': 'LastName',
        'sort[1]': 'FirstName',
        'pagination[pageSize]': 100
    }

    if (OSAUnits) {
        if (OSAUnits.length === 1) {
            params[`filters[Unit][$eq]`] = OSAUnits[0]
        } else {
            OSAUnits.map((unit, idx) => {
                params[`filters[$or][${idx}][Unit][$eq]`] = unit
            })
        }
    }

    return ['staff-records', params]
}
