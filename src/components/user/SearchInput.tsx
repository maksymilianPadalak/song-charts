import React from 'react';
import Form from 'react-bootstrap/Form';

interface Props {
  className?: string;
}

const SearchInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Form.Control size='lg' type='text' placeholder='Enter artist name' className={className} />
    </div>
  );
};

export default SearchInput;
