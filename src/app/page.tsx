"use client";
import LoginPage from "./LoginPage";
import { FormAttachedFiles } from "./FormAttachedFiles";
import { Row, Col, Typography } from "antd";
import { FormText } from "./FormText";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Row gutter={16} justify="center">
                    <Col xs={24} md={12}>
                        <LoginPage />
                    </Col>
                    <Col xs={24} md={12}>
                        <div>
                            <FormText />
                        </div>
                        <div>
                            <FormAttachedFiles />
                        </div>
                    </Col>
                </Row>
            </div>
        </main>
    );
}
