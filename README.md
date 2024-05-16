
# MongoDB and Node.js Integration Study Project

## Description

I created this project to study MongoDB and Node.js, integrating them. The first integration was done using Linux shell scripts to import a jsonArray created with the Faker API, which generates fake data to populate MongoDB. I also used the Mongoose tool for direct data insertion into MongoDB without the need to create a JSON file for it.

## Technologies Used

- **Node.js**: Development platform
- **MongoDB**: NoSQL database
- **Faker.js**: Library for generating fake data
- **Mongoose**: Data modeling library for MongoDB and integration with Node.js
- **Shell Scripts**: Task automation in Linux

## How to Run the Project

### Prerequisites

- Node.js installed
- MongoDB installed and running
- Access to the Linux terminal

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/iSolares/mongo-and-node.git
    cd mongo-and-node
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Insert Data Directly with Mongoose**

    - Run the Node.js script to insert data directly into MongoDB:

    ```bash
    node insert_data.js
    ```
