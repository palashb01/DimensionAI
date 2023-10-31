'use client';
import React from 'react';
import { Quill } from 'react-quill';
import { CustomBoldIcon } from '@/components/Editor/CustomIcons/CustomBoldIcon';
import { CustomItalicIcon } from '@/components/Editor/CustomIcons/CustomItalicIcon';
import { CustomHeaderIcon } from '@/components/Editor/CustomIcons/CustomHeaderIcon';
import { CustomOrderedListIcon } from '@/components/Editor/CustomIcons/CustomOrderedListIcon';
import { CustomBulletListIcon } from '@/components/Editor/CustomIcons/CustomBulletListIcon';
import { CustomCheckListIcon } from '@/components/Editor/CustomIcons/CustomCheckListIcon';
import { CustomLinkIcon } from '@/components/Editor/CustomIcons/CustomLinkIcon';
import { CustomCodeIcon } from '@/components/Editor/CustomIcons/CustomCodeIcon';
import { CustomAttachIcon } from '@/components/Editor/CustomIcons/CustomAttachIcon';
import { CustomMentionIcon } from '@/components/Editor/CustomIcons/CustomMentionIcon';
import { CustomEmojiIcon } from '@/components/Editor/CustomIcons/CustomEmojiIcon';

function undoChange(this: { quill: any; undo: () => void; redo: () => void }) {
  this.quill.history.undo();
}
function redoChange(this: {
  quill: any;
  undo: (this: { quill: any; undo: () => void; redo: () => void }) => void;
  redo: () => void;
}) {
  this.quill.history.redo();
}

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: '#toolbar',
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'blockquote',
  'background',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'code-block',
];

const icons = Quill.import('ui/icons');
icons.bold = null;
icons.italic = null;
icons.header = null;
icons.list.ordered = null;
icons.list.bullet = null;
icons.list.check = null;
icons.link = null;
icons.code = null;
icons['code-block'] = null;
// Quill Toolbar component
export const QuillToolbar = () => (
  <div id='toolbar' className='flex overflow-scroll'>
    <span className='ql-formats'>
      <CustomAttachIcon />
      <CustomMentionIcon />
      <CustomEmojiIcon />
      <button className='ql-header' defaultValue='medium'>
        <CustomHeaderIcon />
      </button>
      <button className='ql-bold'>
        <CustomBoldIcon />
      </button>
      <button className='ql-italic'>
        <CustomItalicIcon />
      </button>
      <button className='ql-code-block'>
        <CustomCodeIcon />
      </button>
      <button className='ql-link'>
        <CustomLinkIcon />
      </button>
      <button className='ql-list' value='ordered'>
        <CustomOrderedListIcon />
      </button>
      <button className='ql-list' value='bullet'>
        <CustomBulletListIcon />
      </button>
      <button className='ql-list' value='check'>
        <CustomCheckListIcon />
      </button>
    </span>
  </div>
);

export default QuillToolbar;
