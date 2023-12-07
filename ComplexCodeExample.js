/* 
Filename: ComplexCodeExample.js
Content: Complex code example demonstrating advanced concepts in JavaScript
*/

// Define a complex data structure representing a company with employees
const company = {
  name: "ABC Corp",
  employees: [
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
      salary: 50000,
      skills: ["JavaScript", "HTML", "CSS"],
      projects: [
        { id: 1, name: "Project A", status: "In Progress" },
        { id: 2, name: "Project B", status: "Completed" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      salary: 60000,
      skills: ["UI/UX Design", "Photoshop", "Illustrator"],
      projects: [
        { id: 3, name: "Project C", status: "In Progress" },
        { id: 4, name: "Project D", status: "In Progress" },
      ],
    },
  ],
};

// Function to calculate the total salary of all employees in the company
function calculateTotalSalary(company) {
  let totalSalary = 0;
  for (const employee of company.employees) {
    totalSalary += employee.salary;
  }
  return totalSalary;
}

// Print the company name and total salary
console.log(`Company: ${company.name}`);
console.log(`Total Salary: ${calculateTotalSalary(company)}`);

// Function to filter employees based on a given project status
function filterEmployeesByProjectStatus(company, status) {
  return company.employees.filter((employee) => {
    return employee.projects.some((project) => {
      return project.status === status;
    });
  });
}

// Print employees working on projects in progress
console.log("\nEmployees working on projects in progress:");
const employeesInProgress = filterEmployeesByProjectStatus(company, "In Progress");
for (const employee of employeesInProgress) {
  console.log(`- ${employee.name}`);
}

// Function to sort employees by their salaries in descending order
function sortEmployeesBySalaryDescending(company) {
  return company.employees.sort((employeeA, employeeB) => {
    return employeeB.salary - employeeA.salary;
  });
}

// Print employees sorted by salary in descending order
console.log("\nEmployees sorted by salary (descending order):");
const employeesSortedBySalary = sortEmployeesBySalaryDescending(company);
for (const employee of employeesSortedBySalary) {
  console.log(`${employee.name} - $${employee.salary}`);
}

// Class representing a Product in an online store
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Method to calculate the discounted price of the product
  calculateDiscountedPrice(discountPercentage) {
    const discountedPrice = this.price * (1 - discountPercentage / 100);
    return discountedPrice.toFixed(2);
  }
}

// Create instances of Product class
const product1 = new Product("Laptop", 1000);
const product2 = new Product("Headphones", 100);

// Calculate and print the discounted prices of the products
console.log(`\nDiscounted Price of ${product1.name}: $${product1.calculateDiscountedPrice(10)}`);
console.log(`Discounted Price of ${product2.name}: $${product2.calculateDiscountedPrice(20)}`);

//... (Additional complex code continues beyond 200 lines)