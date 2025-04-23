function getWelcomeMessage(user) {
    const { name, email, property_age } = user;
    return `Welcome ${name}, your email is ${email} and property age ${property_age} years old.`;
}

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    property_age: 30
};

console.log(getWelcomeMessage(user));