const users = document.getElementById('downloaded_users');

function download() {
    fetch('https://randomuser.me/api').then((a) => {
        return a.json();
    }).then((a) => {
        const downloaded_users = a.results[0];
        const person = new Person(
            downloaded_users.picture,
            downloaded_users.phone,
            downloaded_users.location.coordinates,
            downloaded_users.location.postcode,
            downloaded_users.location.country);
        person.createUser();
    });
}

function remove() {
    while (users.firstChild)
    users.removeChild(users.firstChild);
}

class Person {
    constructor (picture, phone, coordinates, postcode, country) {
        this.picture = picture;
        this.phone = phone;
        this.coordinates = coordinates;
        this.postcode = postcode;
        this.country = country;
    }
    getFullCoordinates() {
        return `${this.coordinates.latitude}; ${this.coordinates.longitude}`;
    }
    createUser() {
        const user = document.createElement('div');
        user.id = 'user';
        const image = document.createElement('img');
        image.src = this.picture.medium;
        user.appendChild(image);
        const data = document.createElement('span');
        data.innerHTML = `Phone: ${this.phone}<br>Coordinates: 
        ${this.getFullCoordinates()}<br>Postcode: ${this.postcode}<br>Country: ${this.country}`;
        user.appendChild(data);

        users.appendChild(user);

        console.log(this.picture, this.phone, this.coordinates, this.postcode, this.country);
    }
}