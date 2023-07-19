import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

function ToDoList() {
  // State to store the pending tasks
  const [task, setTask] = useState(["swimming", "cycling"]);

  // State to store the new task being added
  const [newTask, setNewTask] = useState("");

  // State to store the completed tasks
  const [completed, setCompleted] = useState(["marathon"]);

  // Function to add a new task to the pending tasks
  let addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  // Function to mark a task as completed and move it to the completed tasks list
  let markedCompleted = (index) => {
    const completedTask = task[index];
    setCompleted([...completed, completedTask]);
    console.log(completed);
    setTask(task.filter((e, i) => i !== index));
  };

  // Function to delete a task from the pending tasks list
  let taskDeleted = (index) => {
    setTask(task.filter((e, i) => i !== index));
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>TO DO LIST</h3>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Card
          className="card"
          sx={{ width: "30%", backgroundColor: "#8B9474" }}
        >
          <CardContent>
            <Typography sx={{ fontWeight: "700" }}>
              Task Pending = {task.length}
            </Typography>
            {task.map((e, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  key={index}
                >
                  <Typography>{e}</Typography>
                  <div>
                    <Button
                      sx={{ margin: "1rem", backgroundColor: "#C1CC99" }}
                      size="small"
                      variant="contained"
                      onClick={() => markedCompleted(index)}
                    >
                      Completed
                    </Button>
                    <Button
                      sx={{ margin: "1rem", backgroundColor: "#C1CC99" }}
                      size="small"
                      variant="contained"
                      onClick={() => taskDeleted(index)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{ width: "30%", backgroundColor: "#6CAE75" }}
        >
          <CardContent>
            <Typography sx={{ fontWeight: "700" }}>
              Task Completed = {completed.length}
            </Typography>
            {completed.map((e, index) => {
              return (
                <div key={index}>
                  <Typography sx={{ fontWeight: "200", margin: "1rem 0" }}>
                    {e}
                  </Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{ width: "30%", backgroundColor: "#F5A65B" }}
        >
          <CardContent>
            <Typography sx={{ fontWeight: "700" }}>Add Task</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                placeholder="Add Task"
                size="small"
                onChange={(e) => setNewTask(e.target.value)}
              ></TextField>
              <Button variant="outlined" onClick={addTask}>
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default ToDoList;
