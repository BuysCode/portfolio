export interface Tag {
  text: string;
  color: "red" | "gray" | "blue" | "yellow" | "green";
  key: string
}

export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  link: string;
  github: string;
}