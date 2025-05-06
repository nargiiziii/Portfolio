import express, { request, response } from "express";
import fs from "file-system";
import { v4 as uuidv4 } from "uuid";

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.send("helldddddsdooo");
});

let { students } = JSON.parse(fs.readFileSync("db.json"));

app.get("/api/students", (request, response) => {
  try {
    response
      .status(300)
      .send({ message: "students found successfully!!", data: students });
  } catch (error) {
    response.status(500).send({ message: "internal server error" });
  }
});

app.get("/api/students/:id", (request, response) => {
  try {
    let id = request.params.id;
    const user = students.find((user) => user.id === id);

    if (!user) {
      response.status(404).send({ message: "student not found!!" });
    }
    response.status(200).send({ message: "succes", data: user });
  } catch (error) {
    response.status(500).send({ message: "internal server error" });
  }
});

app.post("/api/students", (request, response) => {
  try {
    const newUser = request.body;

    if (!newUser.name && newUser.age) {
      return response.status(404).send({ message: "wrong request!!" });
    }

    students.push({ id: uuidv4(), ...newUser });

    fs.writeFileSync("db.json", JSON.stringify({ students }));

    response
      .status(201)
      .send({ message: "user created successfully", data: newUser });
  } catch (error) {
    response.status(500).send({ message: "internal server error" });
  }
});

app.delete("/api/students/:id", (request, response) => {
  try {
    let id = request.params.id;
    let studentIndex = students.findIndex((user) => user.id === id);

    if (studentIndex == -1) {
      response.status(404).send({ message: "student not found!!" });
    }

    students.splice(studentIndex, 1);

    fs.writeFileSync("db.json", JSON.stringify({ students }));

    response.status(200).send({ message: "student is deleted" });
  } catch (error) {
    response.status(500).send({ message: "internal server error" });
  }
});

app.put("/api/students/:id", (request, response) => {
  let id = request.params.id;

  try {
    let updatedUser = request.body;

    let studentIndex = students.findIndex((user) => user.id === id);
    if (studentIndex == -1) {
      return response.status(404).send({ message: "student not found!!" });
    }

    students[studentIndex] = { id, ...updatedUser };

    fs.writeFileSync("db.json", JSON.stringify({ students }));
    response.status(200).send({ message: "student info updated" });
  } catch (error) {
    response.status(500).send({ message: "internal server error" });
  }
});

app.patch("/api/students/:id", (request, response) => {
  try {
    let updatedPart = request.body;

    let id = request.params.id;
    let studentIndex = students.findIndex((user) => user.id === id);
    if (studentIndex == -1) {
      return response.send({ message: "student not found!" });
    }

    students[studentIndex] = { ...students[studentIndex], ...updatedPart };

    fs.writeFileSync("db.json", JSON.stringify({ students }));
    response.status(200).send("student info patched..");
    
  } catch (error) {
    response.status(500).send({ message: "internal server error" });
  }
});

app.listen(port, () => {
  console.log(`server is running from ${`http://localhost:${port}/`}`);
});
