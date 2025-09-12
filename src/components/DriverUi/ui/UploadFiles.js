import React from 'react';
import { Upload as UploadIcon } from "lucide-react";
import { message, Upload } from 'antd';
import '@ant-design/v5-patch-for-react-19';
const UploadFiles = ({ title, onFileChange, altTitle }) => {
    const handleChange = (info) => {
        if (info.file.status === 'done' || info.file.status === 'uploading') {
            const file = info.file.originFileObj; // ✅ real File object
            if (onFileChange) onFileChange(file);
        }

        if (info.file.status === 'done') {
            message.success(`${info.file.name} uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} upload failed.`);
        }
    };

    return (
        <Upload
            name="file"
            action="http://localhost:3000/api/upload"
            onChange={handleChange}
            showUploadList={false} // ✅ hide AntD's default preview list
        >
            <div className="flex flex-col items-center gap-2">
                <UploadIcon className="h-16 w-16 text-gray-400" />
                <h3 className={`text-black ${altTitle ? "text-base" : "text-base font-bold"}`}>
                    {altTitle ? "Click to upload certificate" : `Upload ${title} Image`}
                </h3>
                <p className="text-gray-400">PNG, JPG up to 10MB</p>
            </div>
        </Upload>
    );
};

export default UploadFiles;
