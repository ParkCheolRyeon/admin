import { Box, styled } from "@mui/material";
import React from "react";

export default function FindPasswordPage() {
  return (
    <Wrapper>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          wordBreak: "keep-all",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "32px", fontWeight: 900 }}>아이디 찾기</span>
        <span style={{ fontSize: "24px", fontWeight: 800 }}>
          가입하신 이메일을 통해 인증 절차를 진행해 주세요!
        </span>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "80px",
    width: "100%",
    display: "flex",
    maxWidth: "400px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
