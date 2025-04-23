const location = {
    city: "Namma city",
    state: "Namma state",
    country: "USA"
};

const getLocationString = ({ city, country }) => {
    return `You are in ${city}, ${country}.`;
};

console.log(getLocationString(location));