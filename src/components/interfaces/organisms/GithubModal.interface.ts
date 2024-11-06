import { ModalProps } from "../molecules/Modal.interface";

export interface GitHubModalProps extends ModalProps {
  links: string[];
  onLinkClick: (link: string) => void;
}
