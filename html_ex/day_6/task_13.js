const contactCard = {
    name: "John Doe",
    phone: "1234567890",
    address: "123 Main Street, Springfield, USA"
};

function formatContactDetails(contact) {
    return `Name: ${contact.name}, Phone: ${contact.phone}, Address: ${contact.address}`;
}

console.log(formatContactDetails(contactCard));