"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useState, useEffect } from "react"
import axios from "axios"

export function Overview() {
  const [taskData, setTaskData] = useState([])

  useEffect(() => {
    const fetchTaskStats = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
          headers: { Authorization: `Bearer ${token}` }
        })

        const tasks = response.data.data
        const monthlyStats = Array(12).fill(0).map((_, index) => ({
          name: new Date(0, index).toLocaleString('default', { month: 'short' }),
          total: 0,
          completed: 0
        }))

        tasks.forEach(task => {
          const date = new Date(task.createdAt)
          const month = date.getMonth()
          monthlyStats[month].total++
          if (task.status === "Done") {
            monthlyStats[month].completed++
          }
        })

        setTaskData(monthlyStats)
      } catch (error) {
        console.error('Error fetching task stats:', error)
      }
    }

    fetchTaskStats()
  }, [])

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={taskData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="#3b82f6"
          radius={[4, 4, 0, 0]}
          name="Total Tasks"
        />
        <Bar
          dataKey="completed"
          fill="#22c55e"
          radius={[4, 4, 0, 0]}
          name="Completed Tasks"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

