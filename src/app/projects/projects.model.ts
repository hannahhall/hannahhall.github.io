import { Link } from "../shared/link.model";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  links: Link[]
}
