import * as React from 'react';
import { colors } from './canvas';

const styles = {
    input: {
        border: "none",
        borderBottom: `2px solid ${colors["primary-1"]}`
    }
}

export const Input = () => (
    <input type="text" style={styles.input} />
);