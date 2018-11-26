import React from 'react';
import styles from './Stack.css';

function FuncDescriptor({ funcDescriptor }) {
  if (funcDescriptor === null || funcDescriptor === undefined) {
    return <td className={styles.funcDescriptor} />;
  }
  return <td className={styles.funcDescriptor}>{funcDescriptor.humanTitle}</td>;
}

function Value({ value }) {
  return <td className={styles.value}>{value}</td>;
}

function Frame({ frame }) {
  return (
    <tr className={styles.frame}>
      <FuncDescriptor funcDescriptor={frame.funcDescriptor} />
      <Value value={frame.value} />
    </tr>
  );
}

export default function Stack({ stack }) {
  return (
    <table className={styles.stack}>
      <tbody>
        {stack.reverse().map(frame => (
          <Frame key={frame.id} frame={frame} />
        ))}
      </tbody>
    </table>
  );
}
