export type ContactType = {
  imageSrc: string;
  name: string;
  email: string;
  residency: string;
  contactId: string;
  isOnline: boolean;
  lastSeenPermission: boolean;
  lastSeenTime: number;
}

export type ContactListType = {
  letter: string;
  contacts: ContactType[];
};