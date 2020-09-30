function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2020 - this.age;
}

var p = new person("Alif", 22);

document.write(p.name);
document.write(p.yearOfBirth());
