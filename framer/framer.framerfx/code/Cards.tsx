import * as React from 'react';
import { Row } from './Row';
import { Card } from './Card';

export const Cards = () => (
    <Row>
        <div style={{ marginRight: 5, flex: 1 }}><Card header="Header 1" content="Content 1" /></div>
        <div style={{ marginRight: 5, flex: 1 }}><Card header="Header 2" content="Content 2" /></div>
        <div style={{ marginRight: 5, flex: 1 }}><Card header="Header 3" content="Content 3" /></div>
    </Row>
);