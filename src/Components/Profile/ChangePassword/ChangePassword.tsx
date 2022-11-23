import { divide } from "lodash";
import { useTranslation } from "react-i18next";
import useValidation from "../../../hooks/useValidation";
import { API_ROUTES } from "../../../utils/API_Routes";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/FormElements/Input/Input";
import Heading from "../../UI/Heading/Heading";
import { useState } from "react";
import axios from "axios";
import useAPI from "../../../hooks/useAPI";

const ChangePassword = () => {
  const { t } = useTranslation("profile");
  const { loading, httpErrors, setHttpErrors, setLoading } = useAPI();
  const [successMsg, setSuccessMsg] = useState("");
  const {
    error: oldPassError,
    fieldState: oldPassState,
    onBlur: onOldPassBlur,
    onChange: onOldPassChange,
    ref: oldPassRef,
  } = useValidation("PASS");
  const {
    error: newPassError,
    fieldState: newPassState,
    onBlur: onNewPassBlur,
    onChange: onNewPassChange,
    ref: newPassRef,
  } = useValidation("PASS");
  const handleSubmit = () => {
    if (oldPassState === "OK" && newPassState === "OK")
      axios
        .post(API_ROUTES.Profile.ChangePassword, {
          previousPassword: oldPassRef.current!.value,
          proposedPassword: newPassRef.current!.value,
        })
        .then((res) => {
          setSuccessMsg("رمز عبور با موفقیت تغییر یافت");
        });
  };
  return (
    <>
      <Heading str={t("change_pass.title")} />
      <Card enableShadow className="mt-4 p-4 pt-6 text-sm border max-w-[26rem]">
        {httpErrors && (
          <Card className="bg-red-300 p-3 mb-2">{httpErrors}</Card>
        )}
        {successMsg && (
          <Card className="bg-green-200 p-3 mb-2">{successMsg}</Card>
        )}
        <Input
          error={oldPassError}
          state={oldPassState}
          onBlur={onOldPassBlur}
          onChange={onOldPassChange}
          ref={oldPassRef}
          className="rounded-3xl px-3 py-1"
          label="رمز عبور قبلی"
          placeholder="رمز عبور قبلی"
          inputMode="text"
          type="password"
          iconName="pass"
        />
        <Input
          iconName="pass"
          error={newPassError}
          state={newPassState}
          onBlur={onNewPassBlur}
          onChange={onNewPassChange}
          ref={newPassRef}
          className="rounded-3xl px-3 py-1"
          label="رمز عبور جدید"
          placeholder="رمز عبور جدید"
          inputMode="text"
          type="password"
        />
        <Button
          loading={loading}
          onClick={handleSubmit}
          className="px-5 h-[31.3px] mr-0"
        >
          تایید
        </Button>
      </Card>
      {/* <Input /> */}
    </>
  );
};
export default ChangePassword;
