import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryCards from "./components/SummaryCards";
import WeeklyChart from "./components/WeeklyChart";

const BASE_URL = "https://teacher-insights-dashboard.onrender.com";

export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");

  // 🔹 Fetch all teachers + weekly data once
  useEffect(() => {
    axios.get(`${BASE_URL}/api/summary`)
      .then(res => {
        setSummary(res.data);
        setTeachers(res.data);
      })
      .catch(err => console.log(err));

    axios.get(`${BASE_URL}/api/weekly`)
      .then(res => setWeekly(res.data))
      .catch(err => console.log(err));

  }, []);

  // 🔹 Fetch filtered summary when dropdown changes
  useEffect(() => {
    if (selectedTeacher === "") {
      axios.get(`${BASE_URL}/api/summary`)
        .then(res => setSummary(res.data));
    } else {
      axios.get(`${BASE_URL}/api/summary?teacher=${selectedTeacher}`)
        .then(res => setSummary(res.data));
    }
  }, [selectedTeacher]);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh"
      }}
    >
      <h1>Teacher Insights Dashboard </h1>

      {/* 🔽 Dropdown */}
      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
          style={{ padding: "8px", fontSize: "14px" }}
        >
          <option value="">All Teachers</option>
          {teachers.map((t, index) => (
            <option key={index} value={t._id}>
              {t._id}
            </option>
          ))}
        </select>
      </div>

      {/* 📊 Summary Cards */}
      <SummaryCards data={summary} />

      {/* 📈 Weekly Chart */}
      <WeeklyChart data={weekly} />
    </div>
  );
}