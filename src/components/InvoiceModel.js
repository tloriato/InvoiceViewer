import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import Header from './Invoice/Header';

const InvoiceModel = (props) => {
  return (
    <Document>
        <Page size="A4" debug={false}>
          <Header />
        </Page>
    </Document>
  );
};

export default InvoiceModel;