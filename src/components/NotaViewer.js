import React, { useState, useEffect } from 'react';
import InvoiceRenderer from './InvoiceRenderer';

const url = 'http://localhost:8000/v1/invoices/';

const NotaViewer = () => {
  const [invoiceId, setInvoiceId] = useState('');
  const [invoiceData, setInvoiceData] = useState({});

  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setInvoiceId(e.target.value);
  }

  useEffect (() => {
    setInvoiceData(invoiceId);
    fetch(url + invoiceId)
      .then(response => response.json())
      .then(data => setInvoiceData(data));
  }, [invoiceId])

  return (
    <div>
      <h1>Nota Viewer</h1>
      <input onChange={handleChangeInput}></input>
      <br/>
      <br/>
      <InvoiceRenderer data={invoiceData} />
    </div>
  );
}

export default NotaViewer;