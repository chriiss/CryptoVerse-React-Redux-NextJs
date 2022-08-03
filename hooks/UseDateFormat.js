import moment from "moment";


const UseDateFormat = (value) => {
    return moment(value).format("MMM Do YY");
}

export default UseDateFormat;