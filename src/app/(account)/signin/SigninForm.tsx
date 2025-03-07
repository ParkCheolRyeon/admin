"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { signinAction } from "@/app/(account)/signin/_actions/signinAction";
import { SigninRequest } from "@/app/(account)/signin/_actions/signinSchema";
import CommonButton from "@/app/_components/common/Button";
import PasswordInput from "@/app/_components/common/PasswordInput";
import TextInput from "@/app/_components/common/TextInput";
import logo from "@/assets/logo/main-logo.png";

export default function SigninForm() {
  const router = useRouter();

  const [signinValues, setSigninValues] = useState({
    id: "",
    pw: "",
  });

  const handleLogin = async (request: SigninRequest) => {
    if (request.id === "") {
      return toast.error("아이디를 입력해 주세요");
    }
    if (request.pw === "") {
      return toast.error("비밀번호를 입력해 주세요");
    }

    const res = await signinAction(request);

    if (res.code === "SUCCESS") {
      toast.success(res.message);
      router.push("/dashboard");
      return;
    } else {
      toast.error(res.message);
      return;
    }
  };

  const onChangeInput = (value: string, inputTpye: "id" | "pw") => {
    if (inputTpye === "id") {
      setSigninValues({ ...signinValues, id: value });
      return;
    }
    if (inputTpye === "pw") {
      setSigninValues({ ...signinValues, pw: value });
      return;
    }
  };

  return (
    <>
      <TopContent>
        <LogoImg src={logo.src} alt="logo" />

        <Inputs>
          <TextInput
            lable="아이디"
            value={signinValues.id}
            helperText="아이디를 입력해주세요."
            onChange={(value: string) => onChangeInput(value, "id")}
          />
          <PasswordInput
            lable="비밀번호"
            value={signinValues.pw}
            helperText="비밀번호를 입력해주세요."
            onChange={(value: string) => onChangeInput(value, "pw")}
          />
        </Inputs>
      </TopContent>

      <BottomContents>
        <FindBox>
          <SpanST onClick={() => router.push("/find-id")}>아이디 찾기</SpanST>
          <Divider />
          <SpanST onClick={() => router.push("/find-pw")}>비밀번호 찾기</SpanST>
        </FindBox>
        <CommonButton
          variant="contained"
          text="로그인"
          onClick={() =>
            handleLogin({ id: signinValues.id, pw: signinValues.pw })
          }
        />
        <CommonButton variant="outlined" text="회원가입" onClick={() => {}} />
      </BottomContents>
    </>
  );
}

const TopContent = styled(Box)(() => {
  return {
    gap: "48px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width:448px)": {
      gap: "12vw",
    },
  };
});

const LogoImg = styled("img")(() => {
  return {
    width: "100%",
  };
});

const Inputs = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    "@media (max-width:448px)": {
      gap: "3vw",
    },
  };
});

const BottomContents = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:448px)": {
      // gap: "8vw",
    },
  };
});

const FindBox = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const SpanST = styled("span")(() => {
  return {
    fontSize: "14px",
    color: "#424242",
  };
});

const Divider = styled(Box)(() => {
  return {
    width: "1px",
    height: "12px",
    backgroundColor: "#424242",
  };
});
