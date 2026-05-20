import exp from "express";
import { EmpModel } from "../models/EmpModel.js";
export const empRoute = exp.Router();

// Create a new employee
empRoute.post("/employees", async (req, res) => {
  try {
    const newEmp = req.body;                  // Get employee data from request body
    const empDoc = new EmpModel(newEmp);      // Create a new employee document
    await empDoc.save();                      // Save to database
    res.status(201).json({ message: "Emp created", payload: empDoc });
  } catch (err) {
    res.status(500).json({ message: "Error creating employee", error: err.message });
  }
});

// Get all employees
empRoute.get("/employees", async (req, res) => {
  try {
    let empList = await EmpModel.find();      // Fetch all employees
    res.status(200).json({ message: "list of emps", payload: empList });
  } catch (err) {
    res.status(500).json({ message: "Error fetching employees", error: err.message });
  }
});

// Update employee by ID
empRoute.put("/employees/:id", async (req, res) => {
  try {
    const modifiedEmp = req.body;             // Get updated data
    let updatedEmp = await EmpModel.findByIdAndUpdate(
      req.params.id,                          // Employee ID from URL
      { $set: { ...modifiedEmp } },           // Apply updates
      { new: true }                           // Return updated document
    );
    if (!updatedEmp) {
      return res.status(404).json({ message: "emp not found" });
    }
    res.status(200).json({ message: "employee updated", payload: updatedEmp });
  } catch (err) {
    res.status(500).json({ message: "Error updating employee", error: err.message });
  }
});

// Delete employee by ID
empRoute.delete("/employees/:id", async (req, res) => {
  try {
    let deletedEmp = await EmpModel.findByIdAndDelete(req.params.id); // Delete employee
    if (!deletedEmp) {
      return res.status(404).json({ message: "emp not found" });
    }
    res.status(200).json({ message: "employee deleted", payload: deletedEmp });
  } catch (err) {
    res.status(500).json({ message: "Error deleting employee", error: err.message });
  }
});
