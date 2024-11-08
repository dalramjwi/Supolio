import React from "react";
import Modal from "../../../molecules/base/Modal.tsx";
import Div from "../../../atoms/base/Div.tsx";
import Button from "../../../atoms/base/Button.tsx";
import { GitHubModalProps } from "../../../interfaces/organisms/GithubModal.interface.ts";

const GitHubModal: React.FC<GitHubModalProps> = ({
  show,
  links,
  close,
  onLinkClick,
}) => {
  return (
    <Modal
      show={show}
      close={close}
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
