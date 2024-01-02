export type ContactType = {
  imageSrc: string;
  name: string;
  contactId: string;
}

export type ContactListType = {
  letter: string;
  contacts: ContactType[];
};
