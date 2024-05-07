
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import TotalCountDisplay from "../../Profile/TotalCountDisplay";

const AllInvoices = () => {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Retrieve totalCount from sessionStorage
    const storedTotalCount = sessionStorage.getItem("totalCount");
    if (storedTotalCount) {
      setTotalCount(parseInt(storedTotalCount));
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#282c34", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card style={{ backgroundColor: "#1e2125", color: "white", textAlign: "center" }}>
        <CardContent>
          <TotalCountDisplay />
        </CardContent>
      </Card>
    </div>
  );
};

export default AllInvoices;

