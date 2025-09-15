import React, { useState } from 'react';
import { Upload as UploadIcon } from "lucide-react";
import { message, Upload } from 'antd';
import '@ant-design/v5-patch-for-react-19';

const UploadFiles = ({ title, onFileChange, altTitle,additionalType }) => {
    const [fileList, setFileList] = useState([]);

    const handleChange = ({ file, fileList }) => {
        setFileList(fileList);

        if (file.status === 'done') {
            message.success(`${file.name} uploaded successfully`);
            if (onFileChange) onFileChange(file.originFileObj);
        } else if (file.status === 'error') {
            message.error(`${file.name} upload failed.`);
        }
    };
    const handleRemove = (file) => {

        console.log("Removed file:", file);

        if (onFileChange) onFileChange(null);

        setFileList((prev) => prev.filter((item) => item.uid !== file.uid));

        return true;
    };

    return (
        <Upload
            name="file"
            action="http://localhost:3000/api/upload"
            onChange={handleChange}
            onRemove={handleRemove}
            fileList={fileList}
            showUploadList={true}
        >

            {fileList.length === 0 && (
                <div className="flex flex-col items-center gap-2 transition-opacity duration-200 ease-in-out">
                    <UploadIcon className="h-16 w-16 text-gray-400" />
                    <h3 className={`text-black ${altTitle ? "text-base" : "text-base font-bold"}`}>
                        {altTitle ? "Click to upload certificate" : `Upload ${title} Image`}
                    </h3>
                    <p className="text-gray-400">PNG, JPG {additionalType} up to 10MB</p>
                </div>
            )}
        </Upload>
    );
};

export default UploadFiles;
