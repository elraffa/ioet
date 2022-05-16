const convertTimeToNumber = (time) => {
    return Number(time.split(':')[0]) + Number(time.split(':')[1]) / 60
}

export default convertTimeToNumber;


