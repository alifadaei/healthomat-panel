import { useState, useRef } from "react";
import { API_ROUTES } from "../../utils/API_Routes";
import { useTranslation } from "react-i18next";
import Icon, { IconList } from "../UI/Icon/Icon";
import Button from "../UI/Button/Button";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import useAPI from "../../hooks/useAPI";
import useAuthStore from "../Auth/useAuthStore";
const FILE_LIMIT = 1024 * 1024; //bytes

const Uploader = ({ finish }: { finish: () => void }) => {
  const { client } = useAPI();
  const ref = useRef<HTMLInputElement>(null);
  const [progressRate, setProgressRate] = useState(0);
  const [fileName, setFileName] = useState("");
  const [errors, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const { t } = useTranslation("profile");
  const changeAvatar = useAuthStore((state) => state.changeAvatar);
  const handleInputChange = () => {
    if (ref.current!.files![0]) {
      //file is selected by user
      const file = ref.current!.files![0];
      if (file.size <= FILE_LIMIT) {
        //start uploading
        setError("");
        console.log("start");
        const formData = new FormData();
        formData.set("image", file);
        client
          .post(API_ROUTES.Profile.UploadAvatar, formData, {
            onUploadProgress: (progressEvent) => {
              const rate = progressEvent.loaded / progressEvent.total!;
              setProgressRate(rate);
            },
          })
          .then((res) => {
            // finish
            const avatar = res.data.data.avatar;
            changeAvatar(avatar);
            finish();
          })
          .catch(() => {
            setProgressRate(0);
            alert("problem");
          });
      } else {
        setError(t("avatar.file_size_exceeded"));
      }
    } else {
      console.log("nofiles");
    }
  };

  const handleDragEnterOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(true);
  };
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(false);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFileName(files[0].name);
    ref.current!.files = files;
    handleInputChange();
  };
  return (
    <div className="w-[19rem] xs:w-[20rem] p-6 text-sm flex flex-col">
      {errors && (
        <div className="bg-red-200 mb-3 text-xs text-center font-light p-2 rounded-2xl">
          {errors}
        </div>
      )}
      <input
        onChange={handleInputChange}
        type="file"
        className="hidden"
        ref={ref}
      />
      {!fileName ? (
        <div
          onDragEnter={handleDragEnterOver}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragEnterOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`transition-all font-dana border-2 border-dashed  rounded-2xl  border-[] p-4 text-gray-600 ${
            !dragging ? "border-gray-500" : "border-primary"
          }  flex flex-col justify-center items-center`}
        >
          <Icon
            icon={IconList.Upload}
            className={`text-[3rem] transition  duration-500 ${
              dragging
                ? "text-primary animate-bounce"
                : "text-gray-600 translate-y-0"
            }`}
          ></Icon>
          {t("avatar.drag_here")}
          <div className="font-dana my-2">{t("avatar.or")}</div>
          <Button onClick={() => ref.current!.click()} className="px-4 py-2">
            {t("avatar.select")}
          </Button>
        </div>
      ) : (
        <>
          <ProgressBar filledRate={progressRate} />
          <div className="text-xs text-gray-400 ltr mt-2">{fileName}</div>
        </>
      )}
    </div>
  );
};
export default Uploader;
type resType = {
  data: {
    patientId: number;
    avatar: "string";
  };
  succeeded: true;
  message: "string";
};
