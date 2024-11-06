import React from "react";
import Modal from "../../molecules/Modal.tsx";
import Div from "../../atoms/Div.tsx";
import Button from "../../atoms/Button.tsx";

interface GitHubModalProps {
  show: boolean;
  links: string[];
  onClose: () => void;
  onLinkClick: (link: string) => void;
}

const GitHubModal: React.FC<GitHubModalProps> = ({
  show,
  links,
  onClose,
  onLinkClick,
}) => {
  return (
    <Modal
      show={show}
      close={onClose}
      content={
        <Div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <Button
              key={index}
              onClick={() => onLinkClick(link)}
              className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
            >
              버전 {index + 1}.0
            </Button>
          ))}
        </Div>
      }
    />
  );
};

export default GitHubModal;
