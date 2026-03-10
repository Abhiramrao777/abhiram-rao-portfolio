export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  photo: string;
  cvLink: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Abhiram Rao",
  role: "Electronics Enthusiast • Coder",
  bio: "I am an enthusiastic Electronics and Communication Engineering student with a passion for power systems, circuit design, embedded systems and coding. ",
  photo: "/profile.jpeg",
  cvLink: "/resume.pdf",
  github: "https://github.com/Abhiramrao777",
  linkedin: "www.linkedin.com/in/abhiram-rao-5b227928a",
  

};