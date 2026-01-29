const PostSection = ({ title, content, imageUrl }) => {
  return (
    <section>
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
      {imageUrl && <img src={imageUrl} alt={`${title}'s image`} />}
    </section>
  );
};

export default PostSection;
