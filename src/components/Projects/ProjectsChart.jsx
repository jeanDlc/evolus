import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import {
  Typography,
  useTheme,
  List,
  ListItem,
  CircularProgress,
} from "@material-ui/core";
import useProjects from "../../lib/hooks/useProjects";
import { useState, useEffect } from "react";
const ProjectsChart = () => {
  const { palette } = useTheme();
  const { projects, loading } = useProjects();
  const [data, setData] = useState([
    { name: "Terminados", value: 0 },
    { name: "No terminados", value: 100 },
  ]);
  useEffect(() => {
    const filterProjects = () => {
      let done = 0;
      let total = 0;
      projects.forEach((project) => {
        if (project.estado) done++;
        total++;
      });
      setData([
        { name: "Terminados", value: done },
        { name: "No terminados", value: total - done },
      ]);
    };
    if (projects.length > 0) filterProjects();
  }, [projects]);
  if (loading)
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  if (!projects.length && !loading)
    return <Typography>No hay datos por analizar</Typography>;
  return (
    <>
      <ResponsiveContainer width="90%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            outerRadius={90}
            fill={palette.secondary.main}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <List>
        {data.map((d) => (
          <ListItem
            key={d.name + d.value}
            className="bold"
          >{`${d.name}: ${d.value}`}</ListItem>
        ))}
      </List>
    </>
  );
};

export default ProjectsChart;
