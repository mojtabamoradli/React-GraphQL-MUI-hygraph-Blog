import { useMutation } from "@apollo/client";
import { Grid, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { SEND_COMMENT } from "../../graphql/mutations";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState("");

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, { variables: { name, email, text, slug } });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلدها را پر کنید", {
        position: "top-center",
      });
    }
  };
  if (data && pressed) {
    toast.success("نظر ارسال شد", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, py: 1, mt: 5 }}>
      <Grid item={true} xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          نظرات
        </Typography>
      </Grid>
      <Grid item={true} xs={12} m={2}>
        <TextField label="نام کاربری" variant="outlined" sx={{ width: "100%" }} value={name} onChange={(e) => setName(e.target.value)} />
      </Grid>
      <Grid item={true} xs={12} m={2}>
        <TextField label="آدرس ایمیل" variant="outlined" sx={{ width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)} />
      </Grid>
      <Grid item={true} xs={12} m={2}>
        <TextField label="نظر..." variant="outlined" sx={{ width: "100%" }} value={text} onChange={(e) => setText(e.target.value)} multiline minRows={4} />
      </Grid>
      <Grid item={true} xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer rtl />
    </Grid>
  );
};

export default CommentForm;
