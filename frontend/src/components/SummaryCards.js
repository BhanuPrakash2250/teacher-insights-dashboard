import React from "react";

export default function SummaryCards({ data }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((teacher, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            margin: "10px",
            borderRadius: "8px",
            width: "250px"
          }}
        >
          <h3>{teacher._id}</h3>
          <p>Lessons: {teacher.lessons}</p>
          <p>Quizzes: {teacher.quizzes}</p>
          <p>Assessments: {teacher.assessments}</p>
        </div>
      ))}
    </div>
  );
}