/** @format */

import { SetStateAction, Dispatch, createContext, PropsWithChildren, FC, useState, useContext } from "react";
import { UPLOAD } from "./uploadParts";

interface IContext {
  values: {
    selectedFile: any;
    fileName: string | undefined;
    fileSize: number | undefined;
    progress: number | undefined;
    uploadStep: string;
  };
  dispatch: {
    setSelectedFile: Dispatch<SetStateAction<any>>;
    setFileName: Dispatch<SetStateAction<string | undefined>>;
    setFileSize: Dispatch<SetStateAction<number | undefined>>;
    setProgress: Dispatch<SetStateAction<number | undefined>>;
    setUploadStep: Dispatch<SetStateAction<string>>;
  };
}

export const CustomerByFileContext = createContext<IContext>({
  values: {
    selectedFile: undefined,
    fileName: undefined,
    fileSize: undefined,
    progress: undefined,
    uploadStep: UPLOAD.selectFile, //"selectFile"
  },
  dispatch: {
    setFileName: () => {},
    setFileSize: () => {},
    setProgress: () => {},
    setUploadStep: () => {},
    setSelectedFile: () => {},
  },
});

export const CustomerByFileProvider: FC<PropsWithChildren> = ({ children }) => {
  const [name, setName] = useState<string>();
  const [size, setSize] = useState<number>();
  const [progress, setProgress] = useState<number>();
  const [step, setStep] = useState<string>(UPLOAD.selectFile);
  const [selectedFile, setSelectedFile] = useState<string>(UPLOAD.selectFile);
  const sharedValues: IContext = {
    values: {
      fileName: name,
      fileSize: size,
      progress: progress,
      uploadStep: step,
      selectedFile: selectedFile,
    },
    dispatch: {
      setFileName: setName,
      setFileSize: setSize,
      setProgress: setProgress,
      setUploadStep: setStep,
      setSelectedFile: setSelectedFile,
    },
  };
  return <CustomerByFileContext.Provider value={sharedValues}>{children}</CustomerByFileContext.Provider>;
};

export const useCustomerByFileContext = () => useContext(CustomerByFileContext);
