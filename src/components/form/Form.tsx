import clsx from "clsx";
import React, { useState } from "react";
import styled from "styled-components";

export type ComponentProps = FormProps & {
  content: string;
  handleTextArea(e): void;
  handleSubmit(e): void;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  content,
  handleTextArea,
  handleSubmit,
}) => {
  return (
    <div
      className={clsx(
        className,
        "rounded",
        "bg-gray-200",
        "p-4",
        "grid",
        "grid-cols-3",
        "gap-2",
      )}
    >
      <textarea
        className={clsx("col-span-3", "resize-y", "py-1", "px-2")}
        value={content}
        onChange={handleTextArea}
      />
      <button
        className={clsx(
          "col-start-3",
          "bg-blue-400",
          "text-white",
          "rounded",
          "py-1",
          "px-2",
        )}
        onClick={handleSubmit}
      >
        投稿する
      </button>
    </div>
  );
};
export const StyledPage: typeof Component = styled(Component)``;

export type FormProps = {
  className?: string;
};
export const Form: React.FC<FormProps> = (props) => {
  const [content, setContent] = useState("");

  return (
    <StyledPage
      {...props}
      content={content}
      handleTextArea={(e) => {
        setContent(e.target.value);
      }}
      handleSubmit={() => {
        if (content === "") return;
        setContent("");
      }}
    />
  );
};
