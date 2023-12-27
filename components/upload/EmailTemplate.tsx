import React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface EmailTemplateProps {
  response: any;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  response,
}) => (
    <Html>
        <Head />
        <Preview>
            Качалка - Безопасно поделитесь файлом со своими друзьями
        </Preview>
        <Body style={main}>
        <Container style={container}>
            <Img
                src='https://res.cloudinary.com/dmsxzw5rd/image/upload/v1703663887/logo2_uyayus.png'
                width="100"
                height="100"
                alt="Kachalka"
                style={logo}
            />
            <Text style={paragraph}>Привет {response.emailToSend.split('@')[0]},</Text>
            <Text style={paragraph}>
                Kachalka - платформа которая позволяет делиться файлами со своими друзьями
            </Text>
            <Section style={btnContainer}>
            <Button style={button} href={response.shortUrl}>
                Скачать Файл
            </Button>
            </Section>
            <Text style={paragraph}>
                Best,
            <br />
                The Kachalka team
            </Text>
            <Hr style={hr} />
            <Text style={footer}>408 Kachalka Rd - San Mateo, CA 94402</Text>
        </Container>
        </Body>
    </Html>
);

export default EmailTemplate

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const btnContainer = {
    textAlign: 'center' as const,
  };
  
  const button = {
    backgroundColor: '#007dfc',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '10px 20px'
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };