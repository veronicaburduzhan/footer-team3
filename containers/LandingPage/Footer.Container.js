import React from 'react';
import './LandingPage.Style.css';
import { Button } from '../../components/Button/Button.component';
import { HeaderSection } from '../../components/Header/HeaderSection.component';
import { Input } from '../../components/Form/Label.component';
import { List } from '../../components/List/List.component';
import { Paragraph } from '../../components/Paragraph/Paragraph.component';
import { TextContacts } from '../../components/TextContacts/TextContacts.component';

export const Footer = () => {
  const title = [
    'Get involved',
    'Sing up for our newletter',
    'Programs',
    'About',
    'Contact',
  ];
  return (
    <footer>
      <section className="verticalLine">
        <HeaderSection title="Get involved" />
        <Paragraph />
        <HeaderSection title="Sing up for our newletter" />
        <form>
          <div className="newslatterInputStyle">
            <Input type="text" placeHolderText="First Name" />
            <Input type="password" placeHolderText="Password" />
          </div>
          <Button label=">" />
        </form>
      </section>
      <section className="verticalLine">
        <List />
      </section>
      <section>
        <HeaderSection title="Contact" />
        <TextContacts />
      </section>
    </footer>
  );
};
