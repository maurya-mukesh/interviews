class User {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  getPersonDetails(props) {
    return (
      this.name +
      " is " +
      this.role +
      " his age is " +
      this.age +
      "year old, from" +
      props
    );
  }
}

let newUser = new User("mukesh", 32, "developer");
let newUser1 = new User("Ajay", 23, "manager");
console.log(newUser1.getPersonDetails("Noida"));
