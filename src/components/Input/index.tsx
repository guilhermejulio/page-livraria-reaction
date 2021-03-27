import React, { InputHTMLAttributes } from 'react';

// todas as propriedades que um icone pode ter (color, size, title,etc)
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  // informando que o icone é um componente do React com as propriedades de um icone
  icon: React.ComponentType<IconBaseProps>;
}

// icon: Icon, nomeando um componente com letra inicial maiuscula pois só assim o react vai entender que se trata de um componente
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {/* se o icon existir, é mostrado em tela */}
    {Icon && <Icon size={24} />}
    <input {...rest} />
  </Container>
);

export default Input;
