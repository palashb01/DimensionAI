import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  htmlString: string;
}

const MarkdownViewer: React.FC<MarkdownRendererProps> = ({ htmlString }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{htmlString}</ReactMarkdown>
  );
};

export default MarkdownViewer;
