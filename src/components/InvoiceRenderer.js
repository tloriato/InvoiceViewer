import React from 'react';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';

import InvoiceModel from './InvoiceModel';

const style = StyleSheet.create({
  width: '80%',
  height: '-webkit-fill-available',
})

const InvoiceRender = ({ data }) => {
  return (
    <PDFViewer style={style}>
      <InvoiceModel data={data} />
    </PDFViewer>
  )
}

export default InvoiceRender;