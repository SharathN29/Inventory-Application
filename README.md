[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />


  <h1 align="center">Inventory-Application</h1>

  <p align="center">
    An awesome inventory management application for better understanding Microservices, Spring Cloud and Spring Security
    <br />
    <a href="https://github.com/SharathN29/Inventory-Application"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SharathN29/Inventory-Application">View Demo</a>
    ·
    <a href="https://github.com/SharathN29/Inventory-Application/issues">Report Bug</a>
    ·
    <a href="https://github.com/SharathN29/Inventory-Application/issues">Request Feature</a>
  </p>
</p>

## Table of Contents
* [About the Application](#about-the-application)
* [Software Requirements](#software-requirements)
* [Steps to Run](#steps-to-run)
* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [License](#license)
* [Contact](#contact)


## About the Application
A spring boot microservice application which simulates the functionality of Sales order service. Implementation of manually 
adding a sales order and creating individual tasks to fulfill the production of your items in the sales order. 

User authentication and Authorization is handled with JWT(Json Web Token) which secures the secured REST end-points. 

The microservice is registerd with Eureka Server for service registration and discovery. 


## Software Requirements
1. IDE: IntelliJ IDEA or Eclipse or STS, Visual Studio Code or Sublime Text for react components
2. Server: Apache Tomcat
3. Make sure you install latest version of node. And also install npm.
4. Database: MySQL
5. If you don't want to use MySQL, configurations for H2 in-memory database is given in the 'application.properties' file in the 
inventory-server application. 

## Steps to Run
1. Clone or download and import the applications into your favorite IDE
2. If you're using MySQL, make sure you do the necessary changes in 'application.properties' file in the inventory-server application.And your MySQL server is running. 
3. Run the eureka-server application (Run as spring-boot app)
4. Run the inventory-server applicatiion (Run as spring-boot app)
5. Run the inventory-client application (npm start)

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Roadmap
See the [open issues](https://github.com/SharathN29/Inventory-Application/issues) for a list of proposed features (and known issues).

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Any suggestions and improvements are greately appreciated. 

Sharath Nagendra - [@SharathN29](https://twitter.com/SharathN29) - nsharathn@gmail.com

[contributors-shield]: https://img.shields.io/github/contributors/SharathN29/Inventory-Application.svg?style=flat-square
[contributors-url]: https://github.com/SharathN29/Inventory-Application/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SharathN29/Inventory-Application.svg?style=flat-square
[forks-url]: https://github.com/SharathN29/Inventory-Application/network/members
[stars-shield]: https://img.shields.io/github/stars/SharathN29/Inventory-Application.svg?style=flat-square
[stars-url]: https://github.com/SharathN29/Inventory-Application/stargazers
[issues-shield]: https://img.shields.io/github/issues/SharathN29/Inventory-Application.svg?style=flat-square
[issues-url]: https://github.com/SharathN29/Inventory-Application/issues
[license-shield]: https://img.shields.io/github/license/SharathN29/Inventory-Application.svg?style=flat-square
[license-url]: https://github.com/SharathN29/Inventory-Application/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sharath-nagendra/

