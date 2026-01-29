const WORDS_PER_MINUTE = 200;

const countWords = (text = '') => {
  if (!text) {
    return 0;
  }
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const calculateReadingTime = ({ description = '', sections = [] }) => {
  let totalWords = 0;

  totalWords += countWords(description);

  sections.forEach((section) => {
    totalWords += countWords(section.title);
    totalWords += countWords(section.content);
  });

  const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);

  return `${minutes} min`;
};
