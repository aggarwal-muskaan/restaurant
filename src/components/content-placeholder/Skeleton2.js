import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
// import { useStyle } from "../../styles/HomepageStyle";

function Skeleton2() {
  //   const classes = useStyle();
  return (
    <>
      <div style={{ width: "700px", marginBottom: "3rem" }}>
        <Skeleton variant="text" width="20%" height={40} />
        <div
          style={{
            display: "flex",
            // width: "500px",
            justifyContent: "space-between",
          }}
        >
          {Array(5)
            .fill()
            .map((e) => (
              <div
                style={{
                  width: "100px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width="50%" />
              </div>
            ))}
        </div>
      </div>

      <div>
        <Skeleton variant="text" width="30%" height={40} />

        <div
          style={{
            marginTop: "1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(3,30%)",
            gridGap: "2.5rem",
          }}
        >
          {Array(6)
            .fill()
            .map((e) => (
              <div>
                <Skeleton variant="rect" width={210} height={118} />
                <Skeleton height={35} style={{ marginBottom: 5 }} />
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 3 }}
                />
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 3 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Skeleton2;
