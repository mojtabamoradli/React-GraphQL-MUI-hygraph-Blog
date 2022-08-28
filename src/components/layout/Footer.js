import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography component="p" variant="p" bgcolor="#f7f7f7" color="primary" padding="10px" textAlign="center" mt={10}>
        تمامی حقوق برای{" "}
        <a href="https://mojtabamoradli.ir" rel="noreferer" target="_blank" style={{ textDecoration: "none" }}>
          مجتبی مرادلی
        </a>{" "}
        محفوظ است.
      </Typography>
    </footer>
  );
};

export default Footer;
