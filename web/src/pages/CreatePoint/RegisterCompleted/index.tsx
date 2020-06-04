import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const RegisterCompleted: React.FC = () => {
  return (
    <div className="container">
      <FiCheckCircle />
      <h1>Cadastro concluído!</h1>
    </div>
  );
};

export default RegisterCompleted;
