import { Container, CircularProgress } from "@material-ui/core";
import CardEmployeeList from "./CardEmployeeList";
import useEmployees from "../../lib/hooks/useEmployees";
import Layout from "../Layout/Layout";
import Heading from "../ui/Heading";
const AllEmployees = () => {
  const { employees, loading } = useEmployees();
  return (
    <Layout>
      <Container component="main">
        <Heading content="Empleados" component="h2" />
        {loading ? (
          <div>
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <CardEmployeeList employeesArray={employees} />
        )}
      </Container>
    </Layout>
  );
};

export default AllEmployees;
