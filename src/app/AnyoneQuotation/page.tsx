'use client';
import { Row, Col } from 'antd';

import { LoginForm } from '@/features/LoginForm';
import { QuotationForm } from '@/features/QuotationForm';

export default function Home() {
    return (
        <Row gutter={16} justify="center">
            <Col xs={24} md={12}>
                <LoginForm />
            </Col>
            <Col xs={24} md={12}>
                <QuotationForm />
            </Col>
        </Row>
    );
}
