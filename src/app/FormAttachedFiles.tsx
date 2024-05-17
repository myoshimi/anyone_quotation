"use client";

import { useState } from "react";
import { Upload, Button, Row, Col, List, Typography } from "antd";
import { InboxOutlined, DeleteOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps, UploadChangeParam } from "antd/lib/upload/interface";

const { Dragger } = Upload;

const props: UploadProps = {
    name: "upload_files",
    multiple: true,
    action: "",
    beforeUpload: (file) => {
        return false; // prevent automatic upload
    },
    listType: "text",
};

export const FormAttachedFiles: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange = (info: UploadChangeParam<UploadFile<any>>) => {
        setFileList(info.fileList);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("Dropped files", e.dataTransfer.files);
    };

    const handleUpload = () => {
        console.log("uploading files: ", fileList);
        // Perform the actual upload logic here, e.g., using axios to send files to the server
    };

    const handleRemove = (file: UploadFile) => {
        setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid));
        return true;
    };

    return (
        <>
            <Row gutter={16} justify="center">
                <Col span={24}>
                    <Dragger
                        className="fileDragger"
                        {...props}
                        fileList={fileList}
                        onChange={onChange}
                        onDrop={onDrop}
                        onRemove={handleRemove}
                        showUploadList={false}
                    >
                        <p className="fileDragger-icon">
                            <InboxOutlined />
                        </p>
                        <p className="fileDragger-text"> Click or drag file to this area to upload </p>
                        {/* Click or drag file to this area to upload */}
                        <p className="fileDragger-hint">
                            複数のファイルのアップロードに対応しています．企業データやその他禁止ファイルのアップロードは厳禁です．
                        </p>
                    </Dragger>
                </Col>
                <Col span={24} style={{ marginTop: 16 }}>
                    <Button type="primary" onClick={handleUpload} disabled={fileList.length === 0}>
                        お問い合わせ！
                    </Button>
                </Col>
                {fileList.length > 0 && (
                    <Col span={24} style={{ marginTop: 16 }}>
                        <List
                            bordered
                            dataSource={fileList}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[
                                        <DeleteOutlined
                                            key="delete"
                                            onClick={() => handleRemove(item)}
                                            style={{ color: "red" }}
                                        />,
                                    ]}
                                >
                                    <Typography.Text>{item.name}</Typography.Text>
                                </List.Item>
                            )}
                        />
                    </Col>
                )}
            </Row>
        </>
    );
};
