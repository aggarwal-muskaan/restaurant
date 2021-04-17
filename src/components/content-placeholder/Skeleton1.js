import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const Skeleton1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Skeleton variant="text" width="30%" height={90} />
          <Skeleton
            animation="wave"
            height={10}
            style={{ marginBottom: 3 }}
            width="85%"
          />
          <Skeleton
            animation="wave"
            height={10}
            style={{ marginBottom: 3 }}
            width="85%"
          />
          <Skeleton
            animation="wave"
            height={10}
            style={{ marginBottom: 3 }}
            width="85%"
          />
          <Skeleton
            animation="wave"
            height={10}
            style={{ marginBottom: 6 }}
            width="85%"
          />
          <Skeleton height={35} style={{ marginBottom: 3 }} width="40%" />
          <Skeleton height={35} style={{ marginBottom: 3 }} width="40%" />
          <Skeleton height={35} style={{ marginBottom: 3 }} width="40%" />
        </div>

        <Skeleton variant="rect" width={700} height={300} />
      </div>

      <div
        style={{
          marginTop: "6rem",
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          gridGap: "2.5rem",
        }}
      >
        {Array(6)
          .fill()
          .map((e, index) => (
            <div style={{ width: "210px" }} key={index}>
              <Skeleton
                variant="rect"
                width={210}
                height={118}
                style={{ marginBottom: 5 }}
              />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Skeleton height={10} width="20%" />
                <Skeleton animation="wave" height={10} width="20%" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skeleton1;
