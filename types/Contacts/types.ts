export type ContactType = {
  contactId: string;
  name: string;
  email: string;
  residency: string;
  imageSrc: string;
  isOnline: boolean;
  lastSeenPermission: boolean;
  lastSeenTime: number;
}

export type ContactListType = {
  letter: string;
  contacts: ContactType[];
};