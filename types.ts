export interface NavLink {
  id: string;
  title: string;
}

export interface FacultyMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface StudentProject {
  id: number;
  title: string;
  student: string;
  year: number;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

export interface HomeContent {
  headline: string;
  subtitle: string;
}

export interface AboutCard {
  title: string;
  content: string;
}

// FIX: Add FormField interface for EditModal component
export interface FormField {
  name: string;
  label: string;
  type: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}