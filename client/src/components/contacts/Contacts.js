import React, { useEffect } from 'react';

const Contacts = ({ getContacts, contacts }) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  // const { msg } = contacts;

  return <div>{contacts}</div>;
};

export default Contacts;
