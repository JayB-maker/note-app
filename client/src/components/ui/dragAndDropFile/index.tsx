import { useState } from "react";
import FileInput from "../fileInput";
import "./DragAndDropFile.scss";

interface DragAndDropFileProps {
  onDrop?: any;
  onChange?: any;
  labelText?: string;
  files?: boolean;
  isUploading?: boolean;
}

const DragAndDropFile = (props: DragAndDropFileProps) => {
  const { onDrop, onChange, labelText, files, isUploading } = props;
  //   const [files, setFiles] = useState();

  const handleDrop = (event: any) => {
    event.preventDefault();
    onDrop?.(event.dataTransfer.files);
    //Send to Server
  };
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  if (files) {
    return (
      <>
        <label className="uploading-label">{labelText}</label>
        <div className="file-uploaded-container">
          {isUploading ? (
            <p className="uploading">Uploading...</p>
          ) : (
            <>
              <p className="uploaded-text">Upload Complete!</p>
              {/* <p className="uploaded-text sub">Upload Complete!</p> */}
              <img
                onClick={() => onDrop(null)}
                src="https://res.cloudinary.com/dm19qay3n/image/upload/v1666364437/enterprise-dashboard/close_raaiew.png"
                alt="cancel"
                className="cancel"
              />
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <label className="uploading-label">{labelText}</label>
      {!files && (
        <div
          className="file-uploading-container"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img
            className="uploading-img"
            src="https://res.cloudinary.com/dm19qay3n/image/upload/v1668651330/internal-dashboard/file_ddswt5.png"
            alt="file"
          />
          <div className="uploading-text-div">
            <p className="uploading-text">Drag your image or{"  "}</p>
            <FileInput labelText="browse" multiple onChange={onDrop} />
          </div>
          <p className="uploading-text sub">Supports png and jpeg. 10mb max</p>
        </div>
      )}
    </>
  );
};

export default DragAndDropFile;
