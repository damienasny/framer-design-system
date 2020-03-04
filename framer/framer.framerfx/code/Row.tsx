import * as React from 'react';

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap"
    }
}

export const Row = ({ children }) => (
    <div style={styles.row}>
        {children}
    </div>
);