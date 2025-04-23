const contactCard = {
    name: "Ajmal Sins",
    phone: "9999999999",
    address: "12 vinayakar theru ,kuruku santhu, USA"
};

function formatContactDetails(contact) {
    return `Name: ${contact.name}, Phone: ${contact.phone}, Address: ${contact.address}`;
}

console.log(formatContactDetails(contactCard));