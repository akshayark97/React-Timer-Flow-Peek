import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  ChartContainer,
  DummySpace,
  MonthContainer,
  MonthOption,
  PieChartContainer,
} from "./style.js";
import { monthlyData } from "../../data.js";

const CustomPieChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("April");

  const centerX = 200; // Adjust this based on your pie chart dimensions
  const centerY = 200; // Adjust this based on your pie chart dimensions
  const radius = 50;

  const renderCustomizedLabel = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    name,
  }) => {
    const radius = innerRadius + (outerRadius * 1.3 - innerRadius) * 1.1; // Adjust the multiplier for the desired distance from the center
    let angle = 0;

    switch (name) {
      case "Evening":
        angle = -180;
        break;
      case "Afternoon":
        angle = -90;
        break;
      case "Morning":
        angle = 10;
        break;
      case "Night":
        angle = 90;
        break;
      default:
        angle = 0;
    }

    // Calculate the fixed label position based on the angle
    const x = cx + radius * Math.cos(-angle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-angle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="black"
        fontSize={12}
        textAnchor="middle"
        fontWeight="bold"
      >
        {name}
      </text>
    );
  };

  const evenHourLabels = Array.from({ length: 12 });

  const renderEvenHourLabels = () => {
    const spacing = 360 / 12;
    return evenHourLabels.map((_, index) => {
      const hour = (index * 2) % 24;
      const angle = -90 + spacing * index;
      const labelX = centerX + radius * Math.cos((angle * Math.PI) / 180);
      const labelY = centerY + radius * Math.sin((angle * Math.PI) / 180);

      const fontWeight = [0, 6, 12, 18].includes(hour) ? "bold" : "normal";
      const fontSize = [0, 6, 12, 18].includes(hour) ? 16 : 12;
      const color = [0, 6, 12, 18].includes(hour) ? "black" : "gray";

      return (
        <text
          key={hour}
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontWeight, fontSize, color }}
        >
          {hour < 10 ? `${hour}` : hour}
        </text>
      );
    });
  };

  const selectedData = monthlyData[selectedMonth];

  return (
    <ChartContainer>
      <PieChartContainer>
        <PieChart width={400} height={400}>
          {/* Render the cross lines here with a 30-degree rotation */}
          <path
            d={`M${centerX},${centerY - radius - 70} L${centerX},${
              centerY + radius + 70
            }`}
            transform={`rotate(45, ${centerX}, ${centerY})`} // Rotate the line by 30 degrees to the right
            stroke="black"
            strokeWidth="1"
            strokeDasharray="4,4" // Make the line dotted
          />
          <path
            d={`M${centerX - radius - 70},${centerY} L${
              centerX + radius + 70
            },${centerY}`}
            transform={`rotate(45, ${centerX}, ${centerY})`} // Rotate the line by 30 degrees to the right
            stroke="black"
            strokeWidth="1"
            strokeDasharray="4,4" // Make the line dotted
          />
          {/* End cross lines rendering */}
          <Pie
            data={selectedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={0}
            endAngle={360}
            paddingAngle={0}
            labelLine={false}
            stroke="none"
            label={renderCustomizedLabel}
          >
            {selectedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          {renderEvenHourLabels()}
        </PieChart>
      </PieChartContainer>
      <MonthContainer>
        <DummySpace />
        <MonthOption value={monthlyData.April[0].name}>April</MonthOption>
      </MonthContainer>
    </ChartContainer>
  );
};

export default CustomPieChart;
