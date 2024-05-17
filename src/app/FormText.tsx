"use client";
import { Input } from "antd";
const { TextArea } = Input;

export const FormText = () => {
    return (
        <>
            <TextArea
                placeholder="お見積り内容をご記載ください"
                rows={4}
                style={{ width: "100%", maxWidth: "500px" }}
            />
        </>
    );
};
