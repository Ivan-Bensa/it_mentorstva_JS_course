let cars = [
    "Audi", "BMW", "Mercedes", "Toyota", "Honda",
    "Ford", "Chevrolet", "Nissan", "Volkswagen", "Hyundai",
    "Kia", "Mazda", "Subaru", "Lexus", "Jaguar",
    "Porsche", "Land Rover", "Fiat", "Peugeot", "Renault",
    "Volvo", "Mitsubishi", "Chrysler", "Dodge", "Jeep",
    "Tesla", "Infiniti", "Acura", "Mini", "Smart",
    "Alfa Romeo", "Citroen", "Suzuki", "Buick", "GMC",
    "Saab", "Seat", "Skoda", "Opel", "Tata",
    "Mahindra", "Rover", "Lancia", "Pagani", "Koenigsegg",
    "Bugatti", "Ferrari", "Lamborghini", "Aston Martin", "Mclaren"
];

for (let i = 0; i < cars.length; i++) {

    let firstLetter = cars[i][0].toLowerCase();

    if (firstLetter === "a") {
        continue;
    }
    console.log(cars[i]);
};
