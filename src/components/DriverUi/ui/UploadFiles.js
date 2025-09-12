import React, { useState } from "react";
import Uploady, { useUploady, useItemFinishListener } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

function UploadedFilesList() {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // Listen for successful upload events
    useItemFinishListener((item) => {
        setUploadedFiles((prev) => [...prev, item.file.name]);
    });

    return (
        <div>
            {uploadedFiles.map((fileName, index) => (
                <div key={index} style={{ marginTop: "5px" }}>
                    ✅ {fileName} uploaded successfully
                </div>
            ))}
        </div>
    );
}

export default function App() {
    return (
        <Uploady
            destination={{ url: "/upload" }} // your backend endpoint
        >
            <UploadButton>Upload File</UploadButton>
            <UploadedFilesList />
        </Uploady>
    );
}
